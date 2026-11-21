<?php

namespace App\Http\Controllers\Materials;

use Log;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\MaterialRequest;

use App\Services\MaterialService;
use App\Services\ColorService;
use App\Services\PlateThicknessService;

class MaterialController extends Controller
{
    /**
     * 編集画面表示
     */
    public function index(Request $request)
    {
        // material_idが存在する場合、編集画面を表示する
        Log::debug($request->all());
        if (isset($request->id)) {
            $material_service = new MaterialService();
            $color_service = new ColorService();
            $plate_thickness_service = new PlateThicknessService();
            $material = $material_service->findByMaterialId($request->id);
            $color = $color_service->findAll();
            $plate_thickness = $plate_thickness_service->findAll();
            return view('materials/material', [
                "material" => $material,
                "color" => $color,
                "plate_thickness" => $plate_thickness
            ]);
        } else {
            $color_service = new ColorService();
            $plate_thickness_service = new PlateThicknessService();
            $color = $color_service->findAll();
            $plate_thickness = $plate_thickness_service->findAll();
            return view('materials/material', [
                "color" => $color,
                "plate_thickness" => $plate_thickness
            ]);
        }
    }

    /**
     * 素材登録
     */
    public function register(MaterialRequest $request)
    {
        try {
            Log::debug($request);
            $material_service = new MaterialService();
            $material_id = $material_service->register($request->all());
            session()->flash('complete_message', '登録が完了しました。');
            return redirect(route('material.edit', ['id' => $material_id]));
        } catch (\Exception $e) {
            $application_error_message = '素材の登録に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * 素材更新
     */
    public function update(MaterialRequest $request)
    {
        try {
            Log::debug($request);
            $material_service = new MaterialService();
            $material_service->update($request->material_id, $request->all());
            session()->flash('complete_message', '更新が完了しました。');
            return redirect(route('material.edit', ['id' => $request->material_id]));
        } catch (\Exception $e) {
            $application_error_message = '素材の更新に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * 素材削除
     */
    public function delete(Request $request)
    {
        try {
            $material_service = new MaterialService();
            $material_service->delete($request->material_id);
            return redirect(route('material.list'));
        } catch (\Exception $e) {
            $application_error_message = '素材の削除に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
