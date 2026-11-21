<?php

namespace App\Http\Controllers\RepairPart;

use App\Services\RepairPartGroupService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Log;
class RepairPartGroupListController extends Controller
{
    private $repair_part_group_service;

    /**
     * RepairPartGroupListController constructor.
     * @param RepairPartGroupService $repair_part_group_service
     */
    public function __construct(RepairPartGroupService $repair_part_group_service)
    {
        $this->repair_part_group_service = $repair_part_group_service;
    }

    /**
     * 補修部品グループ一覧
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        // 検索
        //$repair_part_groups = $this->repair_part_group_service->findAllPaging(20);
        $repair_part_group_name = $request->repair_part_group_name;
        $product_category_id = $request->product_category_id;
        $repair_part_groups = $this->repair_part_group_service->findList($repair_part_group_name);
        $products_repair_part_groups = $this->repair_part_group_service->findByProductsRepairPartGroups();
        
        //Log::debug($products_repair_part_groups);
        return view('repair_part/repair_part_group_list')
            ->with('repair_part_group_name', $repair_part_group_name)
            ->with('product_category_id', $product_category_id)
            ->with('products_repair_part_groups', $products_repair_part_groups)
            ->with('repair_part_groups', $repair_part_groups);
    }
}
