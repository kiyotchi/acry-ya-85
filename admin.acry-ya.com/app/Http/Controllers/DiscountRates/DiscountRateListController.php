<?php

namespace App\Http\Controllers\DiscountRates;

use Log;
use App\Http\Controllers\Controller;

use App\Services\DiscountRateService;
use App\Services\DiscountRateItemService;

class DiscountRateListController extends Controller
{
    //pagenate指定用
    const PAGEING_COUNT = 20;

    /**
     * 割引率一覧画面表示
     */
    public function index()
    {
        $discount_rate_service = new DiscountRateService();
        $discount_rate_item_service = new DiscountRateItemService();
        $discount_rates = $discount_rate_service->findAllPaging(self::PAGEING_COUNT);
        $discount_rate_items = $discount_rate_item_service->findAll(self::PAGEING_COUNT);
        return view('discount_rates/discount_rate_list', [
            "discount_rates" => $discount_rates,
            "discount_rate_items" => $discount_rate_items
        ]);
    }
}
