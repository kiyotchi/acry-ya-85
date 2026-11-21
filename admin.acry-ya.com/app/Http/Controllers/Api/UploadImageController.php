<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\DiskCapacityOverException;
use App\Exceptions\DuplicateException;
use App\Services\UploadImageService;
use Illuminate\Database\QueryException;
use Log;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

/**
 * 画像アップロードAPI
 * Class UploadImageController
 * @package App\Http\Controllers\Api
 */
class UploadImageController extends Controller
{
    const CONSTRAINT_FAILS = '23000';

    private $upload_image_service;

    public function __construct(UploadImageService $upload_image_service)
    {
        $this->upload_image_service = $upload_image_service;
    }

    /**
     * 画像アップロード
     *
     * @param Request $request
     * @return array
     */
    public function store(Request $request)
    {
        //
        try {
            $picture_id = $this->upload_image_service->upload($request->image, $request->directory, $request->is_overwrite);
            if (is_null($picture_id)) {
                Log::warning('code : 404, error message : upload failed. overwrite resource not found.');
                return ['error' => ['code' => 404, 'error_message' => 'upload failed. overwrite resource not found.']];
            }
            return ['picture_id' => $picture_id];
        } catch (DiskCapacityOverException $e) {
            Log::warning('code : ' . $e->getCode() . ', error message : upload failed. Disk capacity over.');
            return ['error' => ['code' => $e->getCode(), 'error_message' => 'upload failed. Disk capacity over.']];
        } catch (DuplicateException $e) {
            Log::warning('code : ' . $e->getCode() . ', error message : upload failed. picture data already exists.');
            return ['error' => ['code' => $e->getCode(), 'error_message' => 'upload failed. picture data already exists.']];
        } catch (QueryException $e) {
            Log::warning('code : 500, error message : upload failed. register database failed.');
            return ['error' => ['code' => 500, 'error_message' => 'upload failed. register database failed.']];
        } catch (\Exception $e) {
            Log::warning('code : 500, error message : upload failed. internal server error.');
            return ['error' => ['code' => 500, 'error_message' => 'upload failed. internal server error.']];
        }
    }


    /**
     * 画像検索
     *
     * @param Request $request
     * @return mixed
     */
    public function search(Request $request)
    {
        try {
            $pictures = $this->upload_image_service->find($request->directory);
            return ['images' => $pictures];
        } catch (\Exception $e) {
            Log::warning('code : 500, error message : search failed. internal server error.');
            return ['error' => ['code' => 500, 'error_message' => 'search failed. internal server error.']];
        }
    }

    /**
     * 画像削除
     *
     * @param Request $request
     * @return mixed
     */
    public function delete(Request $request)
    {
        if (!isset($request->picture_id)) {
            return ['error' => ['code' => 400, 'error_message' => 'delete failed. Bad Request.']];
        }

        try {
            $result = $this->upload_image_service->delete($request->picture_id);
            if (is_null($result)) {
                Log::warning('code : 404, error message : delete failed. delete database failed. unknown picture_id : ' . $request->picture_id);
                return ['error' => ['code' => 404, 'error_message' => 'delete failed. delete database failed. unknown picture_id : ' . $request->picture_id]];
            }
            return ['result' => $result];
        } catch (QueryException $e) {
            if (self::CONSTRAINT_FAILS === $e->getCode()) {
                $code = 409;
                $error_message = 'The image can not be deleted because it is in use. picture_id : ';
            } else {
                $code = 500;
                $error_message = 'delete failed. delete database failed. picture_id : ';
            }
            Log::warning('code : ' . $code . ', error message : ' . $error_message);
            return ['error' => ['code' => $code, 'error_message' => $error_message . $request->picture_id]];
        } catch (\Exception $e) {
            Log::warning('code : 500, error message : delete failed. internal server error.');
            return ['error' => ['code' => 500, 'error_message' => 'delete failed. internal server error.']];
        }
    }
}
