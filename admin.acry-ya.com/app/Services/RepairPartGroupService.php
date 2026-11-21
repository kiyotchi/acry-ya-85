<?php


namespace App\Services;

use App\Models\ProductRepairPartGroup;
use Log;
use App\Models\RepairPartGroup;
use App\Models\RepairPartGroupRepairPart;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;

/**
 * Class RepairPartGroupService
 * @package App\Services
 */
class RepairPartGroupService
{

    /**
     * 補修部品グループ検索
     * @param int $repair_part_groups_id
     * @return mixed
     */
    public function find(int $repair_part_groups_id)
    {
        return RepairPartGroup::find($repair_part_groups_id);
    }

    /**
     * 補修部品グループ一覧全件検索
     * @return RepairPartGroup[]|\Illuminate\Database\Eloquent\Collection
     */
    public function findAll()
    {
        return RepairPartGroup::all();
    }

    /**
     * 補修部品グループ全件検索ページング対応
     * @param int $paging_count
     * @return mixed
     */
    public function findAllPaging(int $paging_count)
    {
        return RepairPartGroup::orderBy('repair_part_groups_id', 'asc')->paginate($paging_count);
    }

    /**
     * 補修部品グループ一覧検索
     * @param $repair_part_group_name
     * @return mixed
     */
    public function findList($repair_part_group_name)
    {
        // パラメーターがからの場合は全件検索する
        // 一つでもあれば条件検索
        $wheres = [];
        if (!is_null($repair_part_group_name)) {
            array_push($wheres, ['repair_part_group_name', 'LIKE', "%{$repair_part_group_name}%"]);
        }
        $repair_part_group = RepairPartGroup::where(
            $wheres
        )->paginate(20);
        return $repair_part_group;
    }
    
    /**
     * 補修部品グループ登録
     * @param array $insert_data
     * @return mixed
     * @throws \Exception
     */
    public function register(array $insert_data)
    {
        try {
            return DB::transaction(function () use ($insert_data) {
                $repair_part_group = new RepairPartGroup();
                $repair_part_group->fill($insert_data)->save();
                // 中間テーブル登録
                $this->registerRepairPartGroupRepairPartPivot($repair_part_group->repair_part_groups_id, $insert_data);
                return $repair_part_group->repair_part_groups_id;
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
     * 補修部品グループ更新
     * @param int $repair_part_groups_id
     * @param array $update_data
     * @throws \Exception
     */
    public function update(int $repair_part_groups_id, array $update_data)
    {
        try {
            DB::transaction(function () use ($repair_part_groups_id, $update_data) {
                RepairPartGroup::find($repair_part_groups_id)->fill($update_data)->save();
                // 中間テーブル削除、登録
                $this->deleteRepairPartGroupRepairPartPivot($repair_part_groups_id);
                $this->registerRepairPartGroupRepairPartPivot($repair_part_groups_id, $update_data);
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
     * 補修部品グループ削除
     * @param int $repair_part_groups_id
     * @throws \Exception
     */
    public function delete(int $repair_part_groups_id)
    {
        try {
            DB::transaction(function () use ($repair_part_groups_id) {
                // 中間テーブル削除
                $this->deleteRepairPartGroupRepairPartPivot($repair_part_groups_id);
                RepairPartGroup::find($repair_part_groups_id)->delete();
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

    public function findProductRepairPartSetting(int $product_id)
    {
        return ProductRepairPartGroup::where('product_id', $product_id)->orderby('size_id', 'asc')->get();
    }

    /**
     * 補修部品設定登録
     * @param int $product_id
     * @param array $register_data
     * @throws \Exception
     */
    public function registerInProduct(int $product_id, array $register_data)
    {
        try {
            DB::transaction(function () use ($product_id, $register_data) {

                ProductRepairPartGroup::where('product_id', $product_id)->delete();

                for ($i = 0; $i < count($register_data['size_id']); $i++) {
                    $product_repair_part_group = new ProductRepairPartGroup();
                    $product_repair_part_group->fill(
                        array(
                            'product_id' => $product_id,
                            'repair_part_groups_id' => $register_data['repair_part_groups_id'][$i],
                            'size_id' => $register_data['size_id'][$i],
                        )
                    )->save();
                }
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
     * 補修部品グループと補修部品の中間テーブル登録
     *
     * @param int $repair_part_groups_id
     * @param array $register_data
     */
    private function registerRepairPartGroupRepairPartPivot(int $repair_part_groups_id, array $register_data)
    {
        if (!isset($register_data['repair_parts_id'])) {
            return;
        }
        foreach ($register_data['repair_parts_id'] as $repair_parts_id) {
            if (!isset($repair_parts_id)) {
                continue;
            }
            $repair_part_group_repair_part =  new RepairPartGroupRepairPart();
            $repair_part_group_repair_part->fill(
                array(
                    'repair_part_groups_id' => $repair_part_groups_id,
                    'repair_parts_id' => $repair_parts_id,
                )
            )->save();
        }
    }

    /**
     * 補修部品グループと補修部品の中間テーブルの削除
     *
     * @param int $repair_part_groups_id
     */
    private function deleteRepairPartGroupRepairPartPivot(int $repair_part_groups_id)
    {
        RepairPartGroupRepairPart::where('repair_part_groups_id', $repair_part_groups_id)->delete();
    }
    
    /**
     * 補修部品グループを使用している商品を取得
     * 
     * 補修部品グループで検索する
     * 
     * @param int $repair_part_groups_id
     * @return array
     */
    public function findByProducts(int $repair_part_groups_id)
    {
        $products = DB::table('products_repair_part_groups')
            ->join('products', 'products_repair_part_groups.product_id', '=', 'products.product_id')
            ->select('products.product_id', 'products.product_name', 'products.product_type_code')
            ->where('products_repair_part_groups.repair_part_groups_id', '=', $repair_part_groups_id)
            ->groupBy('products.product_id', 'products.product_name', 'products.product_type_code')
            ->orderBy('products.product_id', 'asc')
            ->get();
            //Log::debug($products);
        return $products;
    }
    
    /**
     * 商品補修部品グループリンクテーブルを取得
     * 
     * @return array
     */
    public function findByProductsRepairPartGroups()
    {
        $ProductsRepairPartGroups = DB::table('products_repair_part_groups')
            ->select('repair_part_groups_id')
            ->where('repair_part_groups_id', '<>', null)
            ->groupBy('repair_part_groups_id')
            ->orderBy('repair_part_groups_id', 'asc')
            ->get();
            //Log::debug($ProductsRepairPartGroups);
            
        $groupids = [];
        foreach ($ProductsRepairPartGroups as $ProductsRepairPartGroup) {
            array_push($groupids, $ProductsRepairPartGroup->repair_part_groups_id);
        }
        //Log::debug($groupids);
        return $groupids;
    }
}