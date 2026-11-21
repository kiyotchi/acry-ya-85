<?php

namespace App\Http\Controllers\Notices;

use Log;
use App\Http\Controllers\Controller;
use App\Http\Requests\NoticeRequest;

use App\Services\NoticeService;

class NoticeController extends Controller
{
    /**
     * 告知設定画面表示
     */
    public function index()
    {
        $notice_service = new NoticeService();
        $notices = $notice_service->findNewRecord();
        if (isset($notices)) {
            return view('notices/notice', [
                "notice" => $notices
            ]);
        } else {
            return view('notices/notice');
        }
    }

    /**
     * 告知情報登録
     */
    public function register(NoticeRequest $request)
    {
        try {
            Log::debug($request);
            $notice_service = new NoticeService();
            $notice_service->insert($request->all());
            session()->flash('complete_message', '登録が完了しました。');
            return redirect(route('notice.register'));
        } catch (\Exception $e) {
            $application_error_message = '告知情報の登録に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
