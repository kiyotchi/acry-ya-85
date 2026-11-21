<?php


namespace App\Services;

use App\Models\RepairPartGroupRepairPart;
use Log;
use App\Models\RepairPart;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;

/**
 * Class RepairPartService
 * @package App\Services
 */
class RepairPartService
{

    /**
     * 補修部品検索
     *
     * @param int $repair_parts_id
     * @return mixed
     */
    public function find(int $repair_parts_id)
    {
        return RepairPart::find($repair_parts_id);
    }

    /**
     * 補修部品全件取得
     *
     * @return RepairPart[]|\Illuminate\Database\Eloquent\Collection
     */
    public function findAll()
    {
        return RepairPart::all();
    }

    /**
     * 補修部品一覧検索
     * @param $product_code
     * @param $product_name
     * @param $product_name_displayed_cart
     * @return mixed
     */
    public function findList($product_code, $product_name, $product_name_displayed_cart)
    {
        // パラメーターがからの場合は全件検索する
        // 一つでもあれば条件検索
        $wheres = [];
        if (!is_null($product_name)) {
            array_push($wheres, ['product_name', 'LIKE', "%{$product_name}%"]);
        }
        if (!is_null($product_code)) {
            array_push($wheres, ['product_code', 'LIKE', "%{$product_code}%"]);
        }
        if (!is_null($product_name_displayed_cart)) {
            array_push($wheres, ['product_name_displayed_cart', 'LIKE', "%{$product_name_displayed_cart}%"]);
        }
        $repair_parts = RepairPart::where(
            $wheres
        )->paginate(20);
        return $repair_parts;
    }

    /**
     * 補修部品登録
     * @param array $insert_data
     * @return mixed
     * @throws \Exception
     */
    public function register(array $insert_data)
    {
        try {
            return DB::transaction(function () use ($insert_data) {
                $repair_part = new RepairPart();
                $repair_part->fill($insert_data)->save();
                return $repair_part->repair_parts_id;
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
     * 補修部品更新
     * @param int $repair_parts_id
     * @param array $update_data
     * @throws \Exception
     */
    public function update(int $repair_parts_id, array $update_data)
    {
        try {
            DB::transaction(function () use ($repair_parts_id, $update_data) {
                RepairPart::find($repair_parts_id)->fill($update_data)->save();
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
     * 補修部品削除
     * @param int $repair_parts_id
     * @throws \Exception
     */
    public function delete(int $repair_parts_id)
    {
        try {
            DB::transaction(function () use ($repair_parts_id) {
                // 中間テーブル削除
                RepairPartGroupRepairPart::where('repair_parts_id', $repair_parts_id)->delete();
                RepairPart::find($repair_parts_id)->delete();
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
     * 補修部品を使用している補修部品グループを取得
     * 
     * 補修部品IDで検索する
     * 
     * @param int $repair_parts_id
     * @return array
     */
    public function findByRepairPartGroups(int $repair_parts_id)
    {
        $repair_parts_groups = DB::table('repair_part_groups_repair_parts')
            ->join('repair_part_groups', 'repair_part_groups_repair_parts.repair_part_groups_id', '=', 'repair_part_groups.repair_part_groups_id')
            ->select('repair_part_groups.repair_part_groups_id', 'repair_part_groups.repair_part_group_name', 'repair_part_groups.is_menu_display')
            ->where('repair_part_groups_repair_parts.repair_parts_id', '=', $repair_parts_id)
            ->orderBy('repair_part_groups.repair_part_groups_id', 'asc')
            ->get();
            //Log::debug($repair_parts_groups);
        return $repair_parts_groups;
    }
}