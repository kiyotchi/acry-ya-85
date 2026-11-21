<?php


namespace App\Services;

use Illuminate\Http\Request;
use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

use App\Models\ProductOption;

/**
 * Class DiscountRateService
 * @package App\Services
 */
class OptionSettingService
{
    /**
     * 商品ID検索
     *
     * @param $product_id
     * @return
     */
    public function findByProductId($product_id)
    {
        return ProductOption::where('product_id', $product_id)->first();
    }
}