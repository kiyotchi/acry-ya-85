<?php

namespace App\Http\Controllers\Sizes;

use App\Http\Controllers\Controller;
use App\Services\ImageService;
use App\Services\ProductService;
use Illuminate\Http\Request;

class SizeImageSettingController extends Controller
{
    private $product_service;
    private $image_service;

    /**
     * SizeImageSettingController constructor.
     * @param ProductService $product_service
     * @param ImageService $image_service
     */
    public function __construct(ProductService $product_service, ImageService $image_service)
    {
        $this->product_service = $product_service;
        $this->image_service = $image_service;
    }

    /**
     * サイズ別画像登録画面表示
     *
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        $product = $this->product_service->find($request->id);
        $size_image_data = $this->image_service->getSizeImage($request->id);
        return view('sizes.size_image_setting')
            ->with('product', $product)
            ->with('size_image_data', isset($size_image_data) ? $size_image_data : []);
    }

    /**
     * サイズ別画像登録
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @throws \Exception
     */
    public function register(Request $request)
    {
        try {
            $this->image_service->registerSizeImage($request->id, $request->all());
            session()->flash('complete_message', '登録が完了しました。');
            return redirect(route('size.image.setting', ['id'=>$request->id]));
        } catch (\Exception $e) {
            $application_error_message = 'サイズ別画像設定の登録に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
