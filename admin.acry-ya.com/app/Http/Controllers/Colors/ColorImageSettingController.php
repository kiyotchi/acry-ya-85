<?php

namespace App\Http\Controllers\Colors;

use App\Http\Controllers\Controller;
use App\Services\ImageService;
use App\Services\ProductService;
use Illuminate\Http\Request;
use Log;

class ColorImageSettingController extends Controller
{

    private $product_service;
    private $image_service;

    public function __construct(ProductService $product_service, ImageService $image_service)
    {
        $this->product_service = $product_service;
        $this->image_service = $image_service;
    }

    /**
     * カラー別画像画面表示
     *
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        // TODO: ID、商品がなければエラー
        $product = $this->product_service->find($request->id);
        $color_image_data = $this->image_service->getColorImage($request->id);
        return view('colors.color_image_setting')
            ->with('product', $product)
            ->with('color_image_data', $color_image_data);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function register(Request $request)
    {
        try {
            Log::debug($request->all());
            $this->image_service->registerColorImage($request->id, $request->all());
            session()->flash('complete_message', '登録が完了しました。');
            return redirect(route('color.image.setting', ['id'=>$request->id]));
        } catch (\Exception $e) {
            $application_error_message = 'カラー別画像設定の登録に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
