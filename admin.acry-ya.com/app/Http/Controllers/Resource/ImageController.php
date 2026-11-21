<?php

namespace App\Http\Controllers\Resource;

use Log;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

/**
 * 商品登録画面コントローラー
 */
class ImageController extends Controller
{
    /**
     * 商品登録画面初期表示
     *
     * @param Request $request
     *
     * @return ViewFactory
     */
    public function index(Request $request)
    {
        //
        return view('resource/image');
    }

}
