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
        ?string $material_name = null,
        ?string $material_code = null,
        ?int $color_id = null,
        ?int $plate_thickness_id = null
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

    /**
     * 登録
     * @param array $insert_datas
     * @return
     * @throws \Exception
     */
    public function register(array $insert_datas)
    {
        try {
            $material_id = DB::transaction(function () use ($insert_datas) {
                $material = new Material();
                $material->fill($insert_datas)->save();
                return $material->material_id;
            });
            return $material_id;
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
     * @param int $material_id
     * @param array $update_datas
     * @throws \Exception
     */
    public function update(int $material_id, array $update_datas)
    {
        try {
            DB::transaction(function () use ($material_id, $update_datas) {
                Material::find($material_id)->fill($update_datas)->save();
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
     * @param int $material_id
     * @throws \Exception
     */
    public function delete(int $material_id)
    {
        try {
            DB::transaction(function () use ($material_id) {
                Material::find($material_id)->delete();
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
