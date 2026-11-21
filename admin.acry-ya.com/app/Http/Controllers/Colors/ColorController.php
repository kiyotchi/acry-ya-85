<?php

namespace App\Http\Controllers\Colors;

use Log;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ColorRequest;

use App\Services\ColorService;

class ColorController extends Controller
{
    /**
     * 編集画面表示
     */
    public function index(Request $request)
    {
        // color_idが存在したら取得して表示
        Log::debug($request->all());
        if (isset($request->id)) {
            $color_service = new ColorService();
            $color = $color_service->findByColorId($request->id);
            $color_group = $color_service->findAllColorGroup();
            return view('colors/color', [
                "color" => $color,
                "color_group" => $color_group
            ]);
        } else {
            $color_service = new ColorService();
            $color_group = $color_service->findAllColorGroup();
            return view('colors/color', [
                'color_group' => $color_group
            ]);
        }
    }

    /**
     * カラー登録
     */
    public function register(ColorRequest $request)
    {
        try {
            Log::debug($request);
            $color_service = new ColorService();
            $color_id = $color_service->register($request->all());
            session()->flash('complete_message', '登録が完了しました。');
            return redirect(route('color.edit', ['id' => $color_id]));
        } catch (\Exception $e) {
            $application_error_message = 'カラーの登録に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * カラー更新
     */
    public function update(ColorRequest $request)
    {
        try {
            Log::debug($request);
            $color_service = new ColorService();
            $color_service->update($request->color_id, $request->all());
            session()->flash('complete_message', '更新が完了しました。');
            return redirect(route('color.edit', ['id' => $request->color_id]));
        } catch (\Exception $e) {
            $application_error_message = 'カラーの更新に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * カラー削除
     */
    public function delete(Request $request)
    {
        try {
            $color_service = new ColorService();
            $color_service->delete($request->color_id);
            return redirect(route('color.list'));
        } catch (\Exception $e) {
            $application_error_message = 'カラーの削除に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
