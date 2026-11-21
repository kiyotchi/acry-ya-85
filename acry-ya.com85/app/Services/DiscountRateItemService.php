<?php


namespace App\Services;

use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

use App\Models\DiscountRateItem;

/**
 * Class DiscountRateService
 * @package App\Services
 */
class DiscountRateItemService
{

    /**
     * 割引率アイテムテーブル全件取得
     *
     * @return DiscountRateItem[]|\Illuminate\Database\Eloquent\Collection
     */
    public function findAll()
    {
        return DiscountRateItem::all();
    }

    /**
     * 主キー検索
     *
     * @param $discount_rate_item_id
     * @return
     */
    public function findByDiscountRateItemId($discount_rate_item_id)
    {
        return DiscountRateItem::find($discount_rate_item_id);
    }

    /**
     * 割引率ID検索
     *
     * @param $discount_rate_id
     * @return
     */
    public function findByDiscountRateId($discount_rate_id)
    {
        return DiscountRateItem::where('discount_rate_id', $discount_rate_id)->get();
    }
}
