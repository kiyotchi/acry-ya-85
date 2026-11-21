<?php

namespace App\Http\Controllers\PlateThicknesses;

use Log;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\PlateThicknessRequest;

use App\Services\PlateThicknessService;

class PlateThicknessController extends Controller
{
    /**
     * 板厚編集画面表示
     */
    public function index(Request $request)
    {
        // plate_thickness_idが存在したら取得して表示
        Log::debug($request->all());
        if (isset($request->id)) {
            $plate_thickness_service = new PlateThicknessService();
            $plate_thickness = $plate_thickness_service->findByPlateThicknessId($request->id);
            return view('plate_thicknesses/plate_thickness', ["plate_thickness" => $plate_thickness]);
        } else {
            return view('plate_thicknesses/plate_thickness');
        }
    }

    /**
     * 板厚登録
     */
    public function register(PlateThicknessRequest $request)
    {
        try {
            Log::debug($request);
            $plate_thickness_service = new PlateThicknessService();
            $plate_thickness_id = $plate_thickness_service->register($request->all());
            session()->flash('complete_message', '登録が完了しました。');
            return redirect(route('plate.thickness.edit', ['id' => $plate_thickness_id]));
        } catch (\Exception $e) {
            $application_error_message = '板厚の登録に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * 板厚更新
     */
    public function update(PlateThicknessRequest $request)
    {
        try {
            Log::debug($request);
            $plate_thickness_service = new PlateThicknessService();
            $plate_thickness_service->update($request->plate_thickness_id, $request->all());
            session()->flash('complete_message', '更新が完了しました。');
            return redirect(route('plate.thickness.edit', ['id' => $request->plate_thickness_id]));
        } catch (\Exception $e) {
            $application_error_message = '板厚の更新に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * 板厚削除
     */
    public function delete(Request $request)
    {
        try {
            Log::debug($request);
            $plate_thickness_service = new PlateThicknessService();
            $plate_thickness_service->delete($request->plate_thickness_id);
            return redirect(route('plate.thickness.list'));
        } catch (\Exception $e) {
            $application_error_message = '板厚の削除に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
