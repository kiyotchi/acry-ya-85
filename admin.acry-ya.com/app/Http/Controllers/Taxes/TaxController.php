<?php

namespace App\Http\Controllers\Taxes;

use Log;
use App\Http\Controllers\Controller;
use App\Http\Requests\TaxRequest;

use App\Services\TaxService;

class TaxController extends Controller
{
    /**
     * 消費税設定画面表示
     */
    public function index()
    {
        $tax_service = new TaxService();
        $taxes = $tax_service->findNewRecord();
        if (isset($taxes)) {
            return view('taxes/tax', [
                "tax" => $taxes->tax
            ]);
        } else {
            return view('taxes/tax');
        }
    }

    /**
     * 消費税登録
     */
    public function register(TaxRequest $request)
    {
        try {
            Log::debug($request);
            $tax_service = new TaxService();
            $tax_service->insert($request->all());
            session()->flash('complete_message', '登録が完了しました。');
            return redirect(route('tax.register'));
        } catch (\Exception $e) {
            $application_error_message = '消費税の登録に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
