<?php

namespace App\Services;

use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

use App\Models\PlateThickness;

/**
 *
 */
class PlateThicknessService
{
    /**
     * 主キー検索
     */
    public function findByPlateThicknessId($plate_thicknesses_id)
    {
        return PlateThickness::find($plate_thicknesses_id);
    }

    /**
     * 全件検索ページング
     * @param int $paging_count
     */
    public function findAllPaging($paging_count)
    {
        return PlateThickness::paginate($paging_count);
    }

    /**
     * 板厚テーブル全件検索
     */
    public function findAll()
    {
        return PlateThickness::all();
    }

    /**
     * 登録
     */
    public function register(array $insert_datas)
    {
        try {
            $plate_thickness_id = DB::transaction(function () use ($insert_datas) {
                $plate_thicknesses = new PlateThickness();
                $plate_thicknesses->fill($insert_datas)->save();
                return $plate_thicknesses->plate_thickness_id;
            });
            return $plate_thickness_id;
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
     */
    public function update(int $plate_thickness_id, array $update_datas)
    {
        try {
            DB::transaction(function () use ($plate_thickness_id, $update_datas) {
                PlateThickness::find($plate_thickness_id)->fill($update_datas)->save();
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
     */
    public function delete(int $plate_thickness_id)
    {
        try {
            DB::transaction(function () use ($plate_thickness_id) {
                PlateThickness::find($plate_thickness_id)->delete();
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