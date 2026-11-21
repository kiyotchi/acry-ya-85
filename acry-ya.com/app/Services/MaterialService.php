<?php

namespace App\Services;

use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

use App\Models\Material;

/**
 *
 */
class MaterialService
{

    /**
     * 主キー検索
     */
    public function findByMaterialId($material_id)
    {
        return Material::find($material_id);
    }

    /**
     * 素材一覧検索
     * @param int $paging_count
     * @param string $material_name
     * @param string $material_code
     * @param int $color_id
     * @param int $plate_thickness_id
     * @param array
     */
    public function findList(
        int $paging_count,
        string $material_name = null,
        string $material_code = null,
        int $color_id = null,
        int $plate_thickness_id = null
    ) {
        $wheres = [];
        if (!is_null($material_name)) {
            array_push($wheres, ['material_name', 'LIKE', "%{$material_name}%"]);
        }
        if (!is_null($material_code)) {
            array_push($wheres, ['material_code', $material_code]);
        }
        if (!is_null($color_id)) {
            array_push($wheres, ['color_id', $color_id]);
        }
        if (!is_null($plate_thickness_id)) {
            array_push($wheres, ['plate_thickness_id', $plate_thickness_id]);
        }

        $materials = Material::where($wheres)
            ->paginate($paging_count);

        return $materials;
    }

    /**
     * 全件検索ページング
     */
    public function findAllPaging($paging_count)
    {
        return Material::paginate($paging_count);
    }
}
