<?php

namespace App\Http\Controllers\Product;

use App\Services\SizeService;
use Log;
use App\Services\ProductFeatureTagService;
use App\Services\SpecificationDetailProductFeatureTagService;
use App\Services\SpecificationDetailService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SpecificationDetailProductFeatureTagController extends Controller
{

    private $specification_detail_product_feature_tag_service;
    private $specification_detail_service;
    private $product_feature_tag_service;
    private $size_service;

    /**
     * SpecificationDetailProductFeatureTagController constructor.
     * @param SpecificationDetailProductFeatureTagService $specification_detail_product_feature_tag_service
     * @param SpecificationDetailService $specification_detail_service
     * @param ProductFeatureTagService $product_feature_tag_service
     * @param SizeService $size_service
     */
    public function __construct(
        SpecificationDetailProductFeatureTagService $specification_detail_product_feature_tag_service,
        SpecificationDetailService $specification_detail_service,
        ProductFeatureTagService $product_feature_tag_service,
        SizeService $size_service
    ) {
        $this->specification_detail_product_feature_tag_service = $specification_detail_product_feature_tag_service;
        $this->specification_detail_service = $specification_detail_service;
        $this->product_feature_tag_service = $product_feature_tag_service;
        $this->size_service = $size_service;
    }

    /**
     * 規格詳細設定商品タグ画面表示
     *
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        $specification_detail = $this->specification_detail_service->find($request->id);
        if (!isset($specification_detail)) {
            abort(404);
        }

        $product_feature_tags = $this->product_feature_tag_service->findAll();
        $check_tag_ids = $this->specification_detail_product_feature_tag_service->find($request->id);

        // サイズ名はサイズタイプによって異なるためController側で整形
        $size_display_name = $this->size_service->generateSizeForDisplay($specification_detail->size);

        // 利用項目設定によって有効ではないものもあるため設定取得
        $product_setting = $specification_detail->product->productSetting;

        return view('product.specification_detail_product_feature_tag')
            ->with('specification_detail', $specification_detail)
            ->with('product_feature_tags', $product_feature_tags)
            ->with('check_tag_ids', $check_tag_ids)
            ->with('size_display_name', $size_display_name)
            ->with('product_setting', $product_setting);
    }


    /**
     * 更新処理
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @throws \Exception
     */
    public function update(Request $request)
    {
        try {
            $this->specification_detail_product_feature_tag_service->update($request->id, $request->all());
            session()->flash('complete_message', '更新が完了しました。');
            return redirect(route('specification.feature.tag', ['id' => $request->id]));
        }catch (\Exception $e) {
            $application_error_message = '更新に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }

    }
}
