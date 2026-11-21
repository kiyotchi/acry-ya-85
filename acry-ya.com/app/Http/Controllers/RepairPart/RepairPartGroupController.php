<?php

namespace App\Http\Controllers\RepairPart;

use App\Services\ProductService;
use App\Services\RepairPartService;
use App\Services\SpecificationDetailService;
use Log;
use App\Services\HtmlPartService;
use App\Services\RepairPartGroupService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\TaxService;

/**
 * Class RepairPartGroupController
 * @package App\Http\Controllers
 */
class RepairPartGroupController extends Controller
{
    private $repair_part_group_service;
    private $repair_part_service;
    private $html_part_service;

	/**
	 * RepairPartGroupController constructor.
	 *
	 * @param RepairPartGroupService $repair_part_group_service
	 * @param RepairPartService $repair_part_service
	 * @param HtmlPartService $html_part_service
	 * @param ProductService $product_service
	 */
    public function __construct(
        RepairPartGroupService $repair_part_group_service,
        RepairPartService $repair_part_service,
        HtmlPartService $html_part_service,
		ProductService $product_service,
		TaxService $tax_service
    ) {
        $this->repair_part_group_service = $repair_part_group_service;
        $this->repair_part_service = $repair_part_service;
        $this->html_part_service = $html_part_service;
		$this->product_service = $product_service;
		$this->tax_service = $tax_service;
    }

	/**
	 * 補修部品画面表示
	 *
	 * @param Request $request
	 * @return mixed
	 */
	public function index()
	{
		// 補修部品グループ一覧
		$repair_part_group_service = new RepairPartGroupService();
		$repair_part_groups = $repair_part_group_service->findMenu();
		$category_ids = $repair_part_group_service->findRepairPartGroupCategoryIds();
        //Log::debug($repair_part_groups);
		return view('parts.index')
			->with('repair_part_groups', isset($repair_part_groups) ? $repair_part_groups : null)
			->with('category_ids', isset($category_ids) ? $category_ids : null);
	}

    /**
     * 補修部品画面表示
     *
     * @param Request $request
     * @return mixed
     */
    public function detail(Request $request)
    {
        if (isset($request->id)) {
			if( !is_numeric($request->id) ) {
				abort('404');
			}
            $repair_part_group = $this->repair_part_group_service->find($request->id);
        } else {
			abort('404');
		}

		if( empty($repair_part_group) ) {
			abort('404');
		}
		
        // 補修部品HTMLパーツ取得
        $html_parts = $this->html_part_service->findAllOfPart();

		// 出荷目安
		$delivery_dates = $this->product_service->generateDeliveryDates();

		// 在庫数
		$stocks = $this->product_service->generateStocks();

		$title = $repair_part_group->repair_part_group_name;

		// 消費税
		$tax = (100 + $this->tax_service->findNewRecord()->tax) / 100;

        return view('parts.detail')
			->with('title', isset($title) ? $title : null)
			->with('delivery_dates', $delivery_dates)
			->with('stocks', $stocks)
			->with('tax', $tax)
            ->with('repair_part_group', isset($repair_part_group) ? $repair_part_group : null);
    }

	/**
	 * 補修部品画面表示（商品詳細版）
	 *
	 * @param Request $request
	 * @return mixed
	 */
	public function product(Request $request)
	{
		if (!isset($request->id)) {
			abort('404');
		}
		$product_id = $request->id;
		$product_service = new ProductService();
		$product = $product_service->find($product_id);
		if( empty($product) || $product->is_display == 0 ) {
			abort('404');
		}

		$size_id = $request->size;

		//
		$settings = $this->repair_part_group_service->findProductRepairPartSetting($product_id);

		$repair_part_group_id = null;
		if( !empty($settings) ) {
			foreach($settings as $setting) {
				// サイズ別設定取得
				if( $setting->size_id == $size_id && !empty($setting->repair_part_groups_id) ) {
					$repair_part_group_id = $setting->repair_part_groups_id;
				}
				// 共通設定取得
				if( empty($setting->size_id) ) {
					$base_repair_part_groups_id = $setting->repair_part_groups_id;
				}
			}
			if( empty($repair_part_group_id) && !empty($base_repair_part_groups_id) ) {
				$repair_part_group_id = $base_repair_part_groups_id;
			}
		}
		if( empty($repair_part_group_id) ) {
			abort('404');
		}

		// 補修部品グループ取得
		$repair_part_group = $this->repair_part_group_service->find($repair_part_group_id);
		if( empty($repair_part_group) ) {
			abort('404');
		}

		// 補修部品一覧取得
		$repair_parts = $this->repair_part_service->findAll();
		// 補修部品HTMLパーツ取得
		$html_parts = $this->html_part_service->findAllOfPart();

		// 出荷目安
		$delivery_dates = $this->product_service->generateDeliveryDates();

		// 在庫数
		$stocks = $this->product_service->generateStocks();

		// 各規格別のリストを取得
		$specification_detail_service = new SpecificationDetailService();
		$product_sizes = $specification_detail_service->getSizeData($product_id);

		$sizes = [];
		// 規格情報設定 サイズ
		if( !empty($product_sizes) ) {
			foreach( $product_sizes as $key => $data ) {
				$tmp_specification_data = $data;
				$sizes[$key] = $tmp_specification_data;
			}
		}

		$title = $product->product_name;
		if( !empty($sizes[$size_id]) ) $title .= ' ' . $sizes[$size_id]['size_name'];

		// 消費税
		$tax = (100 + $this->tax_service->findNewRecord()->tax) / 100;

		return view('parts.product')
			->with('title', isset($title) ? $title : null)
			->with('repair_part_group', isset($repair_part_group) ? $repair_part_group : null)
			->with('product', $product)
			->with('product_sizes', $product_sizes)
			->with('size_id', $size_id)
			->with('delivery_dates', $delivery_dates)
			->with('stocks', $stocks)
			->with('tax', $tax)
			->with('repair_parts', $repair_parts);
	}

}
