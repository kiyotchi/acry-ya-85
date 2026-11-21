<?php

namespace App\Http\Controllers\ProductCategories;

use Log;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Services\ProductCategoryService;

class ProductCategoryListController extends Controller
{
    //pagenate指定用
    const PAGEING_COUNT = 20;

    /**
     * 検索画面表示
     */
    public function index(Request $request)
    {
        $product_category_service = new ProductCategoryService();
        $product_category_list_parent_only = $product_category_service->findAllParentOnly();
        
        if (isset($request->product_category_name) || isset($request->product_category_id)) {
            $product_categories = $product_category_service->findList(self::PAGEING_COUNT, $request->product_category_name, $request->product_category_id);
        } else {
            $product_categories = $product_category_service->findAllPaging(self::PAGEING_COUNT);
        }
        //Log::debug($product_category_list_parent_only);
        return view('product_categories/product_category_list', [
            "product_category_name" => $request->product_category_name,
            "product_category_id" => $request->product_category_id,
            "product_categories" => $product_categories,
            "product_category_list_parent_only" => $product_category_list_parent_only
        ]);
    }
}
