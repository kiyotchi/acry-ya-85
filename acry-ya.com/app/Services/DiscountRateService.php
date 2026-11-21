<?php


namespace App\Services;

use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

use App\Models\DiscountRate;

/**
 * Class DiscountRateService
 * @package App\Services
 */
class DiscountRateService
{
    /**
     * 主キー検索
     *
     * @param $discount_rate_id
     * @return
     */
    public function findByDiscountRateId($discount_rate_id)
    {
        return DiscountRate::find($discount_rate_id);
    }

    /**
     * 割引率全件取得
     *
     * @return DiscountRate[]|\Illuminate\Database\Eloquent\Collection
     */
    public function findAll()
    {
        return DiscountRate::all();
    }

    /**
     * 割引率全件取得
     *
     * @return DiscountRate[]|\Illuminate\Database\Eloquent\Collection
     */
    public function findAllPaging($paging_count)
    {
        return DiscountRate::paginate($paging_count);
    }
}