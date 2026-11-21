<?php

namespace App\Http\Controllers\PlateThicknesses;

use Log;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Services\PlateThicknessService;

class PlateThicknessListController extends Controller
{
    //pagenate指定用
    const PAGEING_COUNT = 20;

    public function index()
    {
        $plate_thickness_service = new PlateThicknessService();
        $plate_thicknesses = $plate_thickness_service->findAllPaging(self::PAGEING_COUNT);

        return view('plate_thicknesses/plate_thickness_list', [
            "plate_thicknesses" => $plate_thicknesses
        ]);
    }
}
