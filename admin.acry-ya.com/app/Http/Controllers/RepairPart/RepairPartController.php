<?php

namespace App\Http\Controllers\RepairPart;

use App\Services\ProductService;
use App\Services\RepairPartService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Log;

class RepairPartController extends Controller
{
    private $repair_part_service;
    private $product_service;

    private $register_validates = [
        'product_code' => 'max:255',
        'product_name' => 'required | max:255',
        'thumbnail_picture_id' => 'required',
        'price' => 'nullable | numeric',
        'display_order' => 'nullable | numeric',
    ];

    private $update_validates = [
        'product_code' => 'max:255',
        'product_name' => 'required | max:255',
        'thumbnail_picture_id' => 'required',
        'price' => 'nullable | numeric',
        'display_order' => 'nullable | numeric',
    ];

    /**
     * RepairPartController constructor.
     * @param RepairPartService $repair_part_service
     * @param ProductService $product_service
     */
    public function __construct(
        RepairPartService $repair_part_service,
        ProductService $product_service
    ) {
        $this->repair_part_service = $repair_part_service;
        $this->product_service = $product_service;
    }

    /**
     * 補修部品登録(新規or編集)画面を表示する
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        // ID の有無によって新規、編集わけ
        if (isset($request->id)) {
            // 検索
            $repair_part = $this->repair_part_service->find($request->id);
            $repair_parts_groups = $this->repair_part_service->findByRepairPartGroups($request->id);
        }

        $deliveries = $this->product_service->generateDeliveries();
        return view('repair_part/repair_part')
            ->with('repair_part', isset($repair_part) ? $repair_part : null)
            ->with('repair_parts_groups', isset($repair_parts_groups) ? $repair_parts_groups : null)
            ->with('deliveries', $deliveries);
    }

    /**
     * 補修部品登録処理
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function register(Request $request)
    {
        $request->validate($this->register_validates);
        try {
            Log::debug($request->all());
            $id = $this->repair_part_service->register($request->all());
            Log::debug('message id : ' . $id);
            session()->flash('complete_message', '登録が完了しました。');
            return redirect(route('repair.part.edit', ['id' => $id]));
        } catch (\Exception $e) {
            $application_error_message = '補修部品の登録に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * 補修部品更新処理
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(Request $request)
    {

        if (!isset($request->id)) {
            Log::warning('Not exists ID.');
            $application_error_message = '補修部品の更新に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }

        $request->validate($this->update_validates);
        try {
            Log::debug($request->all());
            $this->repair_part_service->update($request->id, $request->all());
            session()->flash('complete_message', '更新が完了しました。');
            return redirect(route('repair.part.edit', ['id' => $request->id]));
        } catch (\Exception $e) {
            $application_error_message = '補修部品の更新に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * 補修部品削除処理
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function delete(Request $request)
    {
        if (!isset($request->id)) {
            Log::warning('Not exists ID.');
            $application_error_message = '補修部品の削除に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
        try {
            Log::debug($request->all());
            $this->repair_part_service->delete($request->id);
            return redirect(route('repair.part.list'));
        } catch (\Exception $e) {
            $application_error_message = '補修部品の削除に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
