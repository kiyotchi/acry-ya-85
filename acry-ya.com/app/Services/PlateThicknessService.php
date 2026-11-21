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
}