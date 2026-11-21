<?php

namespace App\Http\Controllers\Faq;

use Log;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

/**
 * よくあるご質問一覧
 *
 * Class ProductListController
 * @package App\Http\Controllers\Faq
 */
class FaqController extends Controller
{
    /**
     * よくあるご質問一覧表示
     */
    public function list()
    {
        return view('faq.list');
    }
}
