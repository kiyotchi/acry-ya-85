<?php


namespace App\Services;

use App\Exceptions\DiskCapacityOverException;
use App\Exceptions\DuplicateException;
use App\Models\Picture;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Log;

class UploadImageService
{

    const OVER_WRITE = 1;

    /**
     * 画像検索
     *
     * @param null $directory
     * @return array
     */
    public function find($directory = null)
    {

        $wheres = [];
        if (!is_null($directory)) {
            array_push($wheres, ['directory', 'LIKE', "%{$directory}%"]);
        }
        $pictures = Picture::where($wheres)->orderBy('updated_at', 'desc')->get();
        $results = [];
        foreach ($pictures as $picture) {
            // 整形する
            $item = [
                'picture_id' => $picture->picture_id,
                'directory' => $picture->directory,
                'picture_path' => $picture->picture_path,
                'created_at' => $picture->created_at,
                'updated_at' => $picture->updated_at,
                'url' => url($picture->directory . $picture->picture_path),
            ];
            $results[] = $item;
        }
        return $results;
    }

    /**
     * 画像アップロード
     *
     * @param $file
     * @param null $directory
     * @param null $is_overwrite
     * @return mixed
     * @throws \Exception
     */
    public function upload($file, $directory = null, $is_overwrite = null)
    {
        try {
            return DB::transaction(function () use ($file, $directory, $is_overwrite) {
                if ($file->getSize() > disk_free_space("/")) {
                    Log::warning('file size : ' . $file->getSize());
                    // ディスク空き容量を超えたら保存しない
                    throw new DiskCapacityOverException('ディスク空き容量がありません。', 507);
                }
                // オリジナルファイルネームを取得する
                $file_name = $file->getClientOriginalName();
                if ($is_overwrite == self::OVER_WRITE) {
                    //
                    $pictures = $this->findByDirectoryPicturePath($directory, $file_name);
                    if ($pictures->count() == 0) {
                        // 原則ありえないがnullで返却してerror_code404で返す
                        return null;
                    }
                    $picture = $pictures->first();
                    // ファイルUpload
                    $file->storeAs(config('acryya.image_storage') . '/' . $directory, $file_name);
                    $picture_id = $picture->picture_id;

                } else {
                    $pictures = $this->findByDirectoryPicturePath($directory, $file_name);
                    if ($pictures->count() > 0) {
                        throw new DuplicateException('picture data already exists.', 303);
                    }
                    // ファイルUpload
                    $file->storeAs(config('acryya.image_storage') . '/' . $directory, $file_name);
                    // 画像テーブルへ保存
                    $picture = new Picture();
                    $picture->fill(['directory' => $directory, 'picture_path' => $file_name])->save();
                    $picture_id = $picture->picture_id;
                }

                return $picture_id;
            });
        } catch (QueryException $e) {
            Log::error('database error.');
            Log::error($e->getMessage());
            Log::error($e->getTraceAsString());
            throw $e;
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            throw $e;
        }
    }

    /**
     * 画像テーブル検索
     *
     * @param $directory
     * @param $file_name
     * @return mixed
     */
    private function findByDirectoryPicturePath($directory, $file_name)
    {
        return Picture::where('directory', $directory)->where('picture_path', $file_name)->get();
    }


    /**
     * 画像削除
     *
     * @param int $picture_id
     * @return mixed
     * @throws \Exception
     */
    public function delete(int $picture_id)
    {
        try {
            return DB::transaction(function () use ($picture_id) {
                $picture = Picture::find($picture_id);
                if (is_null($picture)) {
                    return null;
                }
                $directory = $picture->directory;
                $picture_file_name = $picture->picture_path;

                $picture->delete();
                // config/filesystems.phpのlocalを参照すること
                // storage/appまではStorageクラスで持っているのでそれ以降のパスを指定する

                if( !empty($directory) ) {
                    $picture_path = 'public/img_storage/' . $directory . '/' . $picture_file_name;
                } else {
                    $picture_path = 'public/img_storage/' .  $picture_file_name;
                }

                Storage::disk('local')->delete($picture_path);
                return true;
            });
        } catch (QueryException $e) {
            Log::error('database error.');
            Log::error($e->getMessage());
            Log::error($e->getTraceAsString());
            throw $e;
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            throw $e;
        }

    }
}