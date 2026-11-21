<?php

namespace App\Http\Controllers\Sizes;

use Log;
use App\Http\Controllers\Controller;
use App\Services\SizeService;
use Illuminate\Http\Request;

class SizeListController extends Controller
{
    //pagenate指定用
    const PAGEING_COUNT = 20;

    /**
     * 検索画面表示
     */
    public function index(Request $request)
    {
        $size_service = new SizeService();
        //$sizes = $size_service->findAllPaging(self::PAGEING_COUNT);
        $sizes = $size_service->findList2(20, $request->size_group_id, $request->size);
        $size_groups = $size_service->findAllSizeGroup();

        return view('sizes/size_list', [
            "size_group_id" => $request->size_group_id,
            "size" => $request->size,
            "sizes" => $sizes,
            "size_groups" => $size_groups
        ]);
    }
}
