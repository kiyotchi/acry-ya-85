<?php

namespace App\Http\Controllers\RepairPart;

use App\Services\RepairPartService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RepairPartListController extends Controller
{
    private $repair_part_service;

    /**
     * RepairPartListController constructor.
     * @param RepairPartService $repair_part_service
     */
    public function __construct(RepairPartService $repair_part_service)
    {
        $this->repair_part_service = $repair_part_service;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        $product_code = $request->product_code;
        $product_name = $request->product_name;
        $product_name_displayed_cart = $request->product_name_displayed_cart;
        $repair_parts = $this->repair_part_service->findList($product_code, $product_name, $product_name_displayed_cart);
        return view('repair_part/repair_part_list')
            ->with('repair_parts', $repair_parts)
            ->with('product_code', $product_code)
            ->with('product_name', $product_name)
            ->with('product_name_displayed_cart', $product_name_displayed_cart);
    }
}
