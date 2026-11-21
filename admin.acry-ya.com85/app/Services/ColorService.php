<?php

namespace App\Services;

use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

use App\Models\Color;
use App\Models\ColorGroup;

/**
 *
 */
class ColorService
{

    /**
     * 主キー検索
     */
    public function findByColorId($color_id)
    {
        return Color::find($color_id);
    }

    /**
     * カラー一覧検索
     * @param int $paging_count
     * @param string $color_name
     * @param int $color_group_id
     * @param array
     */
    public function findList(int $paging_count = null, string $color_name = null, int $color_group_id = null)
    {
        $wheres = [];
        if (!is_null($color_name)) {
            array_push($wheres, ['color_name', 'LIKE', "%{$color_name}%"]);
        }
        if (!is_null($color_group_id)) {
            array_push($wheres, ['color_group_id', $color_group_id]);
        }
        $colors = Color::where($wheres)
            ->orderBy('color_group_id', 'asc')
            ->orderBy('color_id', 'asc')
            ->paginate($paging_count);

        return $colors;
    }

    /**
     * 全件検索ページング
     * @param int $paging_count
     */
    public function findAllPaging(int $paging_count)
    {
        return Color::orderBy('color_group_id', 'asc')
            ->orderBy('color_id', 'asc')
            ->paginate($paging_count);
    }

    /**
     * カラーテーブル全件検索
     */
    public function findAll()
    {
        return Color::all();
    }

    /**
     * カラーグループテーブル全件検索
     */
    public function findAllColorGroup()
    {
        return ColorGroup::all();
    }

    /**
     * 登録
     * @param array $insert_datas
     * @return
     * @throws \Exception
     */
    public function register(array $insert_datas)
    {
        try {
            $color_id = DB::transaction(function () use ($insert_datas) {
                $color = new Color();
                $color->fill($insert_datas)->save();
                return $color->color_id;
            });
            return $color_id;
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
     * 更新
     * @param int $color_id
     * @param array $update_datas
     * @throws \Exception
     */
    public function update(int $color_id, array $update_datas)
    {
        try {
            DB::transaction(function () use ($color_id, $update_datas) {
                Color::find($color_id)->fill($update_datas)->save();
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
     * 削除
     * @param int $color_id
     * @throws \Exception
     */
    public function delete(int $color_id)
    {
        try {
            DB::transaction(function () use ($color_id) {
                Color::find($color_id)->delete();
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