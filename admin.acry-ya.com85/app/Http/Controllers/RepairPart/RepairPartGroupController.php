<?php

namespace App\Http\Controllers\RepairPart;

use App\Services\RepairPartService;
use Log;
use App\Services\HtmlPartService;
use App\Services\RepairPartGroupService;
use App\Services\ProductCategoryService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

/**
 * Class RepairPartGroupController
 * @package App\Http\Controllers
 */
class RepairPartGroupController extends Controller
{
    private $repair_part_group_service;
    private $repair_part_service;
    private $html_part_service;
    private $product_category_service;

    private $register_validates = [
        'repair_part_group_name' => 'required | max:255',
        'display_order' => 'nullable | numeric',
    ];

    private $update_validates = [
        'repair_part_group_name' => 'required | max:255',
        'display_order' => 'nullable | numeric',
    ];


    /**
     * RepairPartGroupController constructor.
     * @param RepairPartGroupService $repair_part_group_service
     * @param RepairPartService $repair_part_service
     * @param HtmlPartService $html_part_service
     * @param ProductCategoryService $product_category_service
     */
    public function __construct(
        RepairPartGroupService $repair_part_group_service,
        RepairPartService $repair_part_service,
        HtmlPartService $html_part_service,
        ProductCategoryService $product_category_service
    ) {
        $this->repair_part_group_service = $repair_part_group_service;
        $this->repair_part_service = $repair_part_service;
        $this->html_part_service = $html_part_service;
        $this->product_category_service = $product_category_service;
}

    /**
     * 補修部品グループ編集画面表示
     *
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        if (isset($request->id)) {
            $repair_part_group = $this->repair_part_group_service->find($request->id);
            $products = $this->repair_part_group_service->findByProducts($request->id);
        }

        // カテゴリー一覧取得
        $product_categories = $this->product_category_service->findAllParentOnly();
        // 補修部品一覧取得
        $repair_parts = $this->repair_part_service->findAll();
        // 補修部品HTMLパーツ取得
        $html_parts = $this->html_part_service->findAllOfPart();
        $repair_html_parts = $this->html_part_service->filterRepairPartNotice($html_parts);
        //
        return view('repair_part.repair_part_group')
            ->with('product_categories', $product_categories)
            ->with('repair_part_group', isset($repair_part_group) ? $repair_part_group : null)
            ->with('products', isset($products) ? $products : null)
            ->with('repair_html_parts', $repair_html_parts)
            ->with('repair_parts', $repair_parts)
            ->with('html_part_selected_ids', isset($html_part_selected_ids) ? $html_part_selected_ids : null);
    }

    /**
     * 補修部品グループ登録処理
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function register(Request $request)
    {
        $request->validate($this->register_validates);
        Log::debug($request->all());
        try {
            // 登録
            $id = $this->repair_part_group_service->register($request->all());
            session()->flash('complete_message', '登録が完了しました。');
            return redirect(route('repair.part.group.edit', ['id' => $id]));
        } catch (\Exception $e) {
            $application_error_message = '補修部品グループの登録に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * 補修部品グループ更新処理
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(Request $request)
    {
        if (!isset($request->id)) {
            $application_error_message = '補修部品グループの更新に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }

        $request->validate($this->update_validates);
        try {
            $this->repair_part_group_service->update($request->id, $request->all());
            session()->flash('complete_message', '更新が完了しました。');
            return redirect(route('repair.part.group.edit', ['id' => $request->id]));
        } catch (\Exception $e) {
            $application_error_message = '補修部品グループの更新に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * 補修部品グループ削除処理
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function delete(Request $request)
    {
        if (!isset($request->id)) {
            $application_error_message = '補修部品グループの削除に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }

        try {
            $this->repair_part_group_service->delete($request->id);
            return redirect(route('repair.part.group.list'));
        } catch (\Exception $e) {
            $application_error_message = '補修部品グループの削除に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
