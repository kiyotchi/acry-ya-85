<?php

namespace App\Http\Controllers\Product;

use Log;
use App\Http\Controllers\Controller;
use App\Services\ProductCategoryService;
use App\Services\ProductService;
use App\Services\HtmlPartService;
use App\Services\ProductFeatureTagService;
use Illuminate\Http\Request;


/**
 * セミオーダー商品コントローラー
 * Class CustomProductController
 * @package App\Http\Controllers\Product
 */
class CustomProductController extends Controller
{
    private $product_service;
    private $product_category_service;

    private $register_validates = [
        'is_display' => 'required',
        'product_name' => 'required',
        'product_category_id' => 'required',
        'product_summary' => 'required',
        'picture_id' => 'required',
        'display_order' => 'numeric'
    ];
    // 更新時はファイルタグはバリデーションを行わない
    private $update_validates = [
        'is_display' => 'required',
        'product_name' => 'required',
        'product_category_id' => 'required',
        'product_summary' => 'required',
        'display_order' => 'numeric'
    ];

    /**
     * CustomProductController constructor.
     * @param ProductService $product_service
     * @param ProductCategoryService $product_category_service
     */
    public function __construct(
        ProductService $product_service,
        ProductCategoryService $product_category_service,
        ProductFeatureTagService $product_feature_tag_service,
        HtmlPartService $html_part_service
    )
    {
        $this->product_service = $product_service;
        $this->product_category_service = $product_category_service;
        $this->product_feature_tag_service = $product_feature_tag_service;
        $this->html_part_service = $html_part_service;
    }

    /**
     * セミオーダー商品編集画面表示
     *
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        if (isset($request->id)) {
            $product = $this->product_service->find($request->id);
        }
        $product_feature_tags = $this->product_feature_tag_service->findAll();
        $deliveries = $this->product_service->generateDeliveries();

        $html_parts = $this->html_part_service->findAllOfPart();
        $product_features = $this->html_part_service->filterFeature($html_parts);
        $product_case_studies = $this->html_part_service->filterCaseStudie($html_parts);
        $product_specifications = $this->html_part_service->filterSpecification($html_parts);
        $product_precautions = $this->html_part_service->filterPrecaution($html_parts);
        $maker_sold_outs = $this->html_part_service->filterMakerSoldOut($html_parts);
        $delivery_precautions = $this->html_part_service->filterDeliveryPrecaution($html_parts);
        $delivery_schedules = $this->html_part_service->filterDeliverySchedule($html_parts);
        $repair_parts = $this->html_part_service->filterRepairPart($html_parts);
        $add_head_tags = $this->html_part_service->filterAddHeadTag($html_parts);
        $related_content = $this->html_part_service->filterRelatedContent($html_parts);

        if (isset($product)) {
            $html_part_selected_ids = $this->product_service->generateSelectedHtmlPartIdList($product);

            // tag
            $tags = [];
            foreach ($product->productTag as $tag) {
                array_push($tags, $tag->tag_name);
            }
            $product_tag = implode(',', $tags);
        }

        $product_categories = $this->product_category_service->findAll();
        $products = $this->product_service->findAll();

        // 関連商品を名前の順にソート
        // collectヘルパにデータを渡す
        $collection = collect($products);

        // product_nameキーを軸に、商品名順に並び替えを行う。非表示商品はカット。
        $related_products = $collection->where('is_display', 1)->sortBy('product_name');

        return view('product/custom_product')
            ->with('product', isset($product) ? $product : null)
            ->with('product_categories', $product_categories)
            ->with('product_feature_tags', $product_feature_tags)
            ->with('product_features', $product_features)
            ->with('deliveries', $deliveries)
            ->with('product_case_studies', $product_case_studies)
            ->with('product_specifications', $product_specifications)
            ->with('product_precautions', $product_precautions)
            ->with('maker_sold_outs', $maker_sold_outs)
            ->with('delivery_precautions', $delivery_precautions)
            ->with('delivery_schedules', $delivery_schedules)
            ->with('repair_parts', $repair_parts)
            ->with('add_head_tags', $add_head_tags)
            ->with('related_content', $related_content)
            ->with('html_part_selected_ids', isset($html_part_selected_ids) ? $html_part_selected_ids : null)
            ->with('related_products', $related_products)
            ->with('product_tag', isset($product_tag) ? $product_tag : null);
    }

    /**
     * セミオーダー商品登録
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function register(Request $request)
    {
        $request->validate($this->register_validates);
        try {
            $product_id = $this->product_service->customRegister($request->all());

            session()->flash('complete_message', '登録が完了しました。');
            return redirect(route('product.custom.edit', ['id' => $product_id]));
        } catch (\Exception $e) {
            $application_error_message = 'セミオーダー商品の登録に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * セミオーダー商品更新
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(Request $request)
    {
        // 2019/04リリース時にはサムネイル画像は必須だが、
        // サムネイルの削除ボタンが押された場合に再度ファイル選択されるとも限らないのでバリデーションに必須チェックを追加する
        if($request->is_thumbnail_deleted == '1') {
            $this->update_validates = array_merge($this->update_validates, ['thumbnail' => 'required']);
        }
        $request->validate($this->update_validates);
        try {
            $this->product_service->customUpdate($request->id, $request->all());
            session()->flash('complete_message', '更新が完了しました。');
            return redirect(route('product.custom.edit', ['id' => $request->id]));
        } catch (\Exception $e) {
            $application_error_message = 'セミオーダー商品の更新に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }

    }

    /**
     * セミオーダー商品削除
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function delete(Request $request)
    {
        try {
            $this->product_service->delete($request->id);
            return redirect(route('product.list'));
        } catch (\Exception $e) {
            $application_error_message = 'セミオーダー商品の削除に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
