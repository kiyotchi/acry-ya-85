<?php

namespace App\Http\Controllers\Materials;

use Log;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Services\MaterialService;
use App\Services\ColorService;
use App\Services\PlateThicknessService;

class MaterialListController extends Controller
{
    //pagenate指定用
    const PAGEING_COUNT = 20;

    /**
     * 素材一覧画面表示
     */
    public function index(Request $request)
    {
        $material_service = new MaterialService();
        $color_service = new ColorService();
        $plate_thickness_service = new PlateThicknessService();
        $colors = $color_service->findAll();
        $plate_thicknesses = $plate_thickness_service->findAll();
        if (isset($request->material_name) || isset($request->material_code) || isset($request->color_id) || isset($request->plate_thickness_id)) {
            $materials = $material_service->findList(self::PAGEING_COUNT, $request->material_name,
                $request->material_code, $request->color_id, $request->plate_thickness_id);
        } else {
            $materials = $material_service->findAllPaging(self::PAGEING_COUNT);
        }
        return view('materials/material_list', [
            "material_name" => $request->material_name,
            "material_code" => $request->material_code,
            "color_id" => $request->color_id,
            "plate_thickness_id" => $request->plate_thickness_id,
            "colors" => $colors,
            "plate_thicknesses" => $plate_thicknesses,
            "materials" => $materials
        ]);
    }
}
