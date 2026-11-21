<?php


namespace App\Services;


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
		return RepairPart::orderBy('display_order', 'asc')->get();
    }

    /**
     * 補修部品一覧検索
     * @param $product_code
     * @param $product_name
     * @return mixed
     */
    public function findList($product_code, $product_name)
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
        $repair_parts = RepairPart::where(
            $wheres
        )
            ->orderBy('display_order', 'asc')
            ->get();
        return $repair_parts;
    }

}