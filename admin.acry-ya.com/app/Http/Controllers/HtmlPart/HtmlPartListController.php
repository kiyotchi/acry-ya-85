<?php

namespace App\Http\Controllers\HtmlPart;

use App\Http\Controllers\Controller;
use App\Services\HtmlPartService;
use Illuminate\Http\Request;

/**
 * HTMLパーツ一覧画面
 * Class HtmlPartListController
 * @package App\Http\Controllers\HtmlPart
 */
class HtmlPartListController extends Controller
{

    private $html_part_service;


    /**
     * HtmlPartListController constructor.
     * @param HtmlPartService $html_part_service
     */
    public function __construct(HtmlPartService $html_part_service)
    {
        $this->html_part_service = $html_part_service;
    }

    /**
     * HTMLパーツ一覧画面表示
     *
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        $html_parts = $this->html_part_service->findList($request->product_html_part_type_id, $request->title, $request->html_part);
        $html_part_types = $this->html_part_service->findAllOfHtmlPartType();
        return view('html_part.html_part_list')
            ->with('title', $request->title)
            ->with('html_part', $request->html_part)
            ->with('product_html_part_type_id', $request->product_html_part_type_id)
            ->with('html_parts', $html_parts)
            ->with('html_part_types', $html_part_types);
    }
}
