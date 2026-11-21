<?php


namespace App\Services;

use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

use App\Models\ProductOptionContent;

/**
 * Class DiscountRateService
 * @package App\Services
 */
class OptionContentsService
{
    /**
     * 商品オプションID検索
     *
     * @param $product_option_id
     * @return
     */
    public function findByProductOptionId($product_option_id)
    {
        return ProductOptionContent::where('product_option_id', $product_option_id)->get();
    }
}