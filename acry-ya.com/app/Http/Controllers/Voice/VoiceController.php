<?php

namespace App\Http\Controllers\Voice;

use Log;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

/**
 * お客様の声
 *
 * Class ProductListController
 * @package App\Http\Controllers\Voice
 */
class VoiceController extends Controller
{
    /**
     * お客様の声（ご購入時）表示
     */
    public function current()
    {
        return view('voices.current');
    }

    /**
     * お客様の声（ご使用後）表示
     */
    public function after()
    {
        return view('voices.after');
    }
}
