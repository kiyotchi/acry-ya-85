<?php

namespace App\Http\Controllers\RepairPart;

use App\Http\Controllers\Controller;
use App\Services\RepairPartGroupService;
use App\Services\ProductService;
use App\Services\SpecificationDetailService;
use Illuminate\Http\Request;

use Log;

class RepairPartSettingController extends Controller
{
    private $product_service;
    private $repair_part_group_service;

    private $validates = [
        'repair_part_groups_id.*' => ''
    ];

    /**
     * RepairPartSettingController constructor.
     * @param ProductService $product_service
     * @param RepairPartGroupService $repair_part_group_service
     */
    public function __construct(
        ProductService $product_service,
        RepairPartGroupService $repair_part_group_service
    ) {
        $this->product_service = $product_service;
        $this->repair_part_group_service = $repair_part_group_service;
    }


    /**
     * 補修部品設定画面表示
     *
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        $product = $this->product_service->find($request->id);
        if (!isset($product)) {
            Log::warning('not found product. id : ' . $request->id);
            // 該当商品が存在しなければ商品一覧画面に戻しておく
            return redirect(route('product.list'));
        }

        //
        $settings = $this->repair_part_group_service->findProductRepairPartSetting($request->id);

        // 補修部品グループ取得
        $repair_part_groups = $this->repair_part_group_service->findAll();

        // 規格設定されたサイズ取得
        $specification_detail_service = new SpecificationDetailService();
        $sizes = $specification_detail_service->getSizeData($request->id);

        return view('repair_part.repair_part_setting')
            ->with('product', $product)
            ->with('settings', count($settings) > 0 ? $settings : null)
            ->with('repair_part_groups', $repair_part_groups)
            ->with('sizes', $sizes);
    }

    /**
     * 補修部品設定更新
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function register(Request $request)
    {
        Log::debug('request : ' . print_r($request->all(), true));
        $request->validate($this->validates);
        try {
            // 更新
            $this->repair_part_group_service->registerInProduct($request->id, $request->all());
            session()->flash('complete_message', '更新が完了しました。');
            return redirect(route('repair.part.setting', ['id' => $request->id]));
        } catch (\Exception $e) {
            $application_error_message = '補修部品設定の更新に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
