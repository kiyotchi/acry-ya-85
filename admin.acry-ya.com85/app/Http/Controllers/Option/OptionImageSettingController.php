<?php

namespace App\Http\Controllers\Option;

use App\Http\Controllers\Controller;
use App\Services\ImageService;
use App\Services\ProductService;
use Illuminate\Http\Request;
use Log;

class OptionImageSettingController extends Controller
{
    private $product_service;
    private $image_service;

    /**
     * OptionImageSettingController constructor.
     * @param ProductService $product_service
     * @param ImageService $image_service
     */
    public function __construct(ProductService $product_service, ImageService $image_service)
    {
        $this->product_service = $product_service;
        $this->image_service = $image_service;
    }

    /**
     * オプション別画像設定画面表示
     *
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View1
     */
    public function index(Request $request)
    {
        // TODO: ID、商品がなければエラー
        $product = $this->product_service->find($request->id);
        $option_image_data = $this->image_service->getOptionImage($request->id);
        return view('option.option_image_setting')
            ->with('product', $product)
            ->with('option_image_data', $option_image_data);
    }

    /**
     * 登録
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function register(Request $request)
    {
        try {
            Log::debug($request->all());
            $this->image_service->registerOptionImage($request->id, $request->all());
            session()->flash('complete_message', '登録が完了しました。');
            return redirect(route('option.image.setting', ['id'=>$request->id]));
        } catch (\Exception $e) {
            $application_error_message = 'オプション別画像設定の登録に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
