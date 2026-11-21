<?php

namespace App\Http\Controllers\Sizes;

use Log;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\SizeRequest;

use App\Services\SizeService;

class SizeController extends Controller
{
    /**
     * 編集画面表示
     */
    public function index(Request $request)
    {
        // size_idが存在したら取得して表示
        Log::debug($request->all());
        if (isset($request->id)) {
            $size_service = new SizeService();
            $size = $size_service->findBySizeId($request->id);
            $size_group = $size_service->findAllSizeGroup();
            return view('sizes/size')
                ->with('size', isset($size) ? $size : null)
                ->with('size_group', $size_group);
        } else {
            $size_service = new SizeService();
            $size_group = $size_service->findAllSizeGroup();
            return view('sizes/size', [
                "size_group" => $size_group
            ]);
        }
    }

    /**
     * サイズ登録
     */
    public function register(SizeRequest $request)
    {
        try {
            Log::debug($request);
            $size_service = new SizeService();
            $size_id = $size_service->register($request->all());
            session()->flash('complete_message', '登録が完了しました。');
            return redirect(route('size.edit', ['id' => $size_id]));
        } catch (\Exception $e) {
            $application_error_message = 'サイズの登録に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * サイズ更新
     */
    public function update(SizeRequest $request)
    {
        try {
            Log::debug($request);
            $size_service = new SizeService();
            $size_service->update($request->size_id, $request->all());
            session()->flash('complete_message', '更新が完了しました。');
            return redirect(route('size.edit', ['id' => $request->size_id]));
        } catch (\Exception $e) {
            $application_error_message = 'サイズの更新に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * サイズ削除
     */
    public function delete(Request $request)
    {
        try {
            $size_service = new SizeService();
            $size_service->delete($request->size_id);
            return redirect(route('size.list'));
        } catch (\Exception $e) {
            $application_error_message = 'サイズの削除に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
