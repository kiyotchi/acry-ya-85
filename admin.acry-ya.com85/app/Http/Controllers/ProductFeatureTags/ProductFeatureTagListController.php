<?php

namespace App\Http\Controllers\ProductFeatureTags;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Services\ProductFeatureTagService;

class ProductFeatureTagListController extends Controller
{
    //pagenate指定用
    const PAGEING_COUNT = 20;

    private $product_feature_tag_service;

    /**
     * ProductFeatureTagListController constructor.
     * @param ProductFeatureTagService $product_feature_tag_service
     */
    public function __construct(ProductFeatureTagService $product_feature_tag_service)
    {
        $this->product_feature_tag_service = $product_feature_tag_service;
    }

    /**
     * 商品タグ一覧画面表示
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $product_feature_tags = $this->product_feature_tag_service->findAllPaging(self::PAGEING_COUNT);
        return view('product_feature_tags/product_feature_tag_list')
            ->with('product_feature_tags', $product_feature_tags);
    }
}
