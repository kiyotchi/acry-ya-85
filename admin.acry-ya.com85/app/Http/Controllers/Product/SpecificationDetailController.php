<?php

namespace App\Http\Controllers\Product;

use Log;
use App\Http\Controllers\Controller;
use App\Models\ProductOptionContent;
use App\Services\ProductService;
use App\Services\SpecificationDetailService;
use Illuminate\Http\Request;

/**
 * 規格詳細設定
 * Class SpecificationDetailController
 * @package App\Http\Controllers\Product
 */
class SpecificationDetailController extends Controller
{

    private $product_service;
    private $specification_detail_service;

    private $validates = [
        'color_id.*' => 'required',
        'size_id.*' => 'required',
        'plate_thickness_id.*' => 'required',
        'product_code.*' => 'max:255',
    ];

    /**
     * SpecificationDetailController constructor.
     * @param ProductService $product_service
     * @param SpecificationDetailService $specification_detail_service
     */
    public function __construct(
        ProductService $product_service,
        SpecificationDetailService $specification_detail_service
    ) {
        $this->product_service = $product_service;
        $this->specification_detail_service = $specification_detail_service;
    }

    /**
     *
     * 規格詳細設定画面表示
     *
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        $product = $this->product_service->find($request->id);
        if (!isset($product)) {
            return redirect(route('product.list'));
        }
        $specification_details = $this->specification_detail_service->findByProductId($request->id);

        $colors = $this->specification_detail_service->getColorList($request->id);
        $sizes = $this->specification_detail_service->getSizeList($request->id);
        $plate_thickness = $this->specification_detail_service->getPlateThicknessList($request->id);
        $product_options = $this->specification_detail_service->getOptionList($request->id);
        //
        $deliveries = $this->product_service->generateDeliveries();

        return view('product.specification_detail')
            ->with('product', $product)
            ->with('specification_details', count($specification_details) > 0 ? $specification_details : null)
            ->with('colors', $colors)
            ->with('sizes', $sizes)
            ->with('plate_thickness', $plate_thickness)
            ->with('product_options', $product_options)
            ->with('deliveries', $deliveries);
    }

    /**
     *
     * 更新処理
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(Request $request)
    {
        Log::debug('request : ' . print_r($request->all(), true));
        $request->validate($this->validates);
        try {
            $this->specification_detail_service->update($request->id, $request->all());
            session()->flash('complete_message', '更新が完了しました。');
            return redirect(route('specification', ['id' => $request->id]));
        } catch (\Exception $e) {
            $application_error_message = '規格詳細設定の更新に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
