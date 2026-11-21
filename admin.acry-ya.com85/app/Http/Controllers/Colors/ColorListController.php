<?php

namespace App\Http\Controllers\Colors;

use Log;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Services\ColorService;

class ColorListController extends Controller
{
    //pagenate指定用
    const PAGEING_COUNT = 20;

    /**
     * 検索画面表示
     */
    public function index(Request $request)
    {
        $color_service = new ColorService();
        $color_group = $color_service->findAllColorGroup();
        if (isset($request->color_name) || isset($request->color_group_id)) {
            $colors = $color_service->findList(self::PAGEING_COUNT, $request->color_name, $request->color_group_id);
        } else {
            $colors = $color_service->findAllPaging(self::PAGEING_COUNT);
        }
        return view('colors/color_list', [
            "color_name" => $request->color_name,
            "color_group_id" => $request->color_group_id,
            "colors" => $colors,
            "color_group" => $color_group
        ]);
    }
}
