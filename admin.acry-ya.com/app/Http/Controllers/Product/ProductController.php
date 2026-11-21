<?php

namespace App\Http\Controllers\Product;

use App\Services\ColorService;
use App\Services\DiscountRateService;
use App\Services\SizeService;
use Log;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Services\ProductService;
use App\Services\ProductFeatureTagService;
use App\Services\ProductCategoryService;
use App\Services\HtmlPartService;

/**
 * 商品登録画面コントローラー
 */
class ProductController extends Controller
{
    private $product_service;
    private $product_category_service;
    private $product_feature_tag_service;
    private $html_part_service;
    private $discount_rate_service;
    private $color_service;
    private $size_service;


    private $register_validates = [
        'is_display' => 'required',
        'product_code' => 'max:255',
        'product_name' => 'required | max:255',
        'product_category_id' => 'required',
        'product_summary' => 'required',
        'picture_id' => 'required',
        'price' => 'nullable | numeric',
        'specification_size_numerical_wh_limit' => 'nullable | numeric',
        'number_of_customer_feedback_pc_word' => 'nullable | numeric',
        'number_of_customer_feedback_sp_word' => 'nullable | numeric',
        'display_order' => 'nullable | numeric',
    ];
    // 更新時はファイルタグはバリデーションを行わない
    private $update_validates = [
        'is_display' => 'required',
        'product_code' => 'max:255',
        'product_name' => 'required | max:255',
        'product_category_id' => 'required',
        'product_summary' => 'required',
        'picture_id' => 'required',
        'price' => 'nullable | numeric',
        'specification_size_numerical_wh_limit' => 'nullable | numeric',
        'number_of_customer_feedback_pc_word' => 'nullable | numeric',
        'number_of_customer_feedback_sp_word' => 'nullable | numeric',
        'display_order' => 'nullable | numeric',
    ];

    /**
     * ProductController constructor.
     * @param ProductService $product_service
     * @param ProductCategoryService $product_category_service
     * @param ProductFeatureTagService $product_feature_tag_service
     * @param HtmlPartService $html_part_service
     * @param DiscountRateService $discount_rate_service
     * @param ColorService $color_service
     * @param SizeService $size_service
     */
    public function __construct(
        ProductService $product_service,
        ProductCategoryService $product_category_service,
        ProductFeatureTagService $product_feature_tag_service,
        HtmlPartService $html_part_service,
        DiscountRateService $discount_rate_service,
        ColorService $color_service,
        SizeService $size_service
    ) {
        $this->product_service = $product_service;
        $this->product_category_service = $product_category_service;
        $this->product_feature_tag_service = $product_feature_tag_service;
        $this->html_part_service = $html_part_service;
        $this->discount_rate_service = $discount_rate_service;
        $this->color_service = $color_service;
        $this->size_service = $size_service;
    }

    /**
     * 商品登録画面初期表示
     *
     * @param Request $request
     *
     * @return ViewFactory
     */
    public function index(Request $request)
    {
        if (isset($request->id)) {
            $product = $this->product_service->find($request->id);
        }
        
        $product_categories = $this->product_category_service->findAll();
        $product_feature_tags = $this->product_feature_tag_service->findAll();
        $deliveries = $this->product_service->generateDeliveries();
        $color_groups = $this->color_service->findAllColorGroup();
        $size_groups_of_number = $this->size_service->generateSizeGroupListOfNumberType();
        $size_groups_of_string = $this->size_service->generateSizeGroupListOfStringType();
        //
        $html_parts = $this->html_part_service->findAllOfPart();
        $product_add_informations = $this->html_part_service->filterAddInformation($html_parts);
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
        //
        if (isset($product)) {
            $html_part_selected_ids = $this->product_service->generateSelectedHtmlPartIdList($product);

            // tag
            $tags = [];
            foreach ($product->productTag as $tag) {
                array_push($tags, $tag->tag_name);
            }
            $product_tag = implode(',', $tags);
        }
        //
        $discount_rates = $this->discount_rate_service->findAll();

        //
        $products = $this->product_service->findAll();
        
        // 関連商品を名前の順にソート
        // collectヘルパにデータを渡す
        $collection = collect($products);
        
        // product_nameキーを軸に、商品名順に並び替えを行う。非表示商品はカット。
        $related_products = $collection->where('is_display', 1)->sortBy('product_name');
        
        return view('product/product')
            ->with('product', isset($product) ? $product : null)
            ->with('product_categories', $product_categories)
            ->with('product_feature_tags', $product_feature_tags)
            ->with('deliveries', $deliveries)
            ->with('color_groups', $color_groups)
            ->with('size_groups_of_number', $size_groups_of_number)
            ->with('size_groups_of_string', $size_groups_of_string)
            ->with('product_add_informations', $product_add_informations)
            ->with('product_features', $product_features)
            ->with('product_case_studies', $product_case_studies)
            ->with('product_specifications', $product_specifications)
            ->with('product_precautions', $product_precautions)
            ->with('maker_sold_outs', $maker_sold_outs)
            ->with('delivery_precautions', $delivery_precautions)
            ->with('delivery_schedules', $delivery_schedules)
            ->with('repair_parts', $repair_parts)
            ->with('add_head_tags', $add_head_tags)
            ->with('related_content', $related_content)
            ->with('discount_rates', $discount_rates)
            ->with('html_part_selected_ids', isset($html_part_selected_ids) ? $html_part_selected_ids : null)
            ->with('related_products', $related_products)
            ->with('product_tag', isset($product_tag) ? $product_tag : null);
    }

    /**
     * 登録
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function register(Request $request)
    {
        $request->validate($this->register_validates);
        try {
            $product_id = $this->product_service->register($request->all());
            session()->flash('complete_message', '登録が完了しました。');
            return redirect(route('product.standard.edit', ['id' => $product_id]));
        } catch (\Exception $e) {
            // TODO: エラーが発生した場合に、どの画面に戻るかはTBD
            $application_error_message = '標準商品の登録に失敗しました。';
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
        $request->validate($this->update_validates);
        try {
            Log::debug($request->all());
            $this->product_service->update($request->id, $request->all());
            session()->flash('complete_message', '更新が完了しました。');
            return redirect(route('product.standard.edit', ['id' => $request->id]));
        } catch (\Exception $e) {
            $application_error_message = '標準商品の更新に失敗しました。';
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
            $this->product_service->delete($request->id);
            return redirect(route('product.list'));
        } catch (\Exception $e) {
            $application_error_message = '標準商品の削除に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
