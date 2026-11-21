<?php

namespace App\Http\Controllers\Product;

use Log;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Services\ProductService;
use App\Services\ProductCategoryService;
use App\Services\ProductTypeService;

/**
 * 商品一覧
 *
 * Class ProductListController
 * @package App\Http\Controllers\Product
 */
class ProductListController extends Controller
{
    private $product_service;
    private $product_category_service;
    private $product_type_service;

    /**
     * ProductListController constructor.
     * @param ProductService $product_service
     * @param ProductCategoryService $product_category_service
     * @param ProductTypeService $product_type_service
     */
    public function __construct(
        ProductService $product_service,
        ProductCategoryService $product_category_service,
        ProductTypeService $product_type_service
    ) {
        $this->product_service = $product_service;
        $this->product_category_service = $product_category_service;
        $this->product_type_service = $product_type_service;
    }

    /**
     * 商品一覧表示
     *
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        //Log::debug($request->all());
        // 商品マスタ検索
        // 画面表示用にカテゴリマスタ、商品種別マスタ検索
        $product_cateogries = $this->product_category_service->findAll();
        $product_types = $this->product_type_service->findAll();
        $delivery_dates = $this->product_service->generateDeliveryDates();
        // 商品検索して表示
        $products = $this->product_service->findList($request->product_name, $request->product_code, $request->is_display,
            $request->product_category_id, $request->product_type_code, $request->semi_html_part);
        return view('product/product_list')
            ->with('product_types',$product_types)
            ->with('product_cateogries', $product_cateogries)
            ->with('product_name', $request->product_name)
            ->with('product_code', $request->product_code)
            ->with('is_display', $request->is_display)
            ->with('semi_html_part', $request->semi_html_part)
            ->with('product_category_id', $request->product_category_id)
            ->with('product_type_code', $request->product_type_code)
            ->with('products', $products)
            ->with('deliveries', $delivery_dates);
    }
}
