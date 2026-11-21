<?php

namespace App\Http\Controllers\ProductFeatureTags;

use Log;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Services\ProductFeatureTagService;

/**
 * 商品特徴タグ編集
 * Class ProductFeatureTagController
 * @package App\Http\Controllers\ProductFeatureTags
 */
class ProductFeatureTagController extends Controller
{

    private $product_feature_tag_service;
    private $validates = [
        'product_feature_tag_name' => 'required | max:64',
        'product_feature_tag_content' => 'required'
    ];

    /**
     * ProductFeatureTagController constructor.
     * @param ProductFeatureTagService $product_feature_tag_service
     */
    public function __construct(ProductFeatureTagService $product_feature_tag_service)
    {
        $this->product_feature_tag_service = $product_feature_tag_service;
    }

    /**
     * 編集画面表示
     *
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        // product_feature_tag_idが存在したら取得して表示
        //Log::debug($request->all());
        if (isset($request->id)) {
            $product_feature_tag = $this->product_feature_tag_service->findByProductFeatureTagId($request->id);
            $used_products = $this->product_feature_tag_service->findByProductFeatureTagsUsedProducts($request->id);  
            //Log::debug($used_products);
            return view('product_feature_tags/product_feature_tag',["product_feature_tag" => $product_feature_tag],["used_products" => $used_products]);
        } else {
            return view('product_feature_tags/product_feature_tag');
        }
    }

    /**
     * 登録
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @throws \Exception
     */
    public function register(Request $request)
    {
        Log::debug($request->all());
        $request->validate($this->validates);
        try {
            $product_feature_tag_id = $this->product_feature_tag_service->register($request->all());
            session()->flash('complete_message', '登録が完了しました。');
            return redirect(route('feature.tag.edit', ['id' => $product_feature_tag_id]));
        } catch (\Exception $e) {
            $application_error_message = '商品タグの登録に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * 更新
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(Request $request)
    {
        Log::debug($request->all());
        $request->validate($this->validates);
        try {
            $this->product_feature_tag_service->update($request->all());
            session()->flash('complete_message', '更新が完了しました。');
            return redirect(route('feature.tag.edit', ['id' => $request->id]));
        } catch (\Exception $e) {
            $application_error_message = '商品タグの更新に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * 削除
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function delete(Request $request)
    {
        try {
            $this->product_feature_tag_service->delete($request->id);
            return redirect(route('feature.tag.list'));
        } catch (\Exception $e) {
            $application_error_message = '商品タグの削除に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
