<?php

namespace App\Http\Controllers\HtmlPart;

use App\Http\Controllers\Controller;
use App\Services\HtmlPartService;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;

/**
 * 商品HTMLパーツ編集画面
 * Class HtmlPartController
 * @package App\Http\Controllers\HtmlPart
 */
class HtmlPartController extends Controller
{
    private $html_part_service;

    private $validates = [
        'part_title' => 'required | max:255',
        'product_html_part_type_id' => 'required',
        'html_part' => 'required',
    ];

    public function __construct(HtmlPartService $html_part_service)
    {
        $this->html_part_service = $html_part_service;
    }

    /**
     * 商品HTMLパーツ編集画面表示
     *
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        // IDがあれば取得
        if (isset($request->id)) {
            $product_html_part = $this->html_part_service->find($request->id);
            $used_products = $this->html_part_service->findByHtmlPartUsedProducts($request->id);
        }
        $html_part_types = $this->html_part_service->findAllOfHtmlPartType();
        return view('html_part.html_part')
            ->with('product_html_part', isset($product_html_part) ? $product_html_part : null)
            ->with('used_products', isset($used_products) ? $used_products : null)
            ->with('html_part_types', $html_part_types);
    }

    /**
     * 商品HTMLパーツ登録
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector1
     */
    public function register(Request $request)
    {
        $request->validate($this->validates);
        try {
            $product_html_part_id = $this->html_part_service->registerProductHtmlPart($request->all());
            session()->flash('complete_message', '登録が完了しました。');
            return redirect(route('html.part.edit', ['id' => $product_html_part_id]));
        } catch (\Exception $e) {
            $application_error_message = '商品HTMLパーツの登録に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * 商品HTMLパーツ更新
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(Request $request)
    {
        $request->validate($this->validates);
        try {
            $this->html_part_service->updateProductHtmlPart($request->id, $request->all());
            session()->flash('complete_message', '更新が完了しました。');
            return redirect(route('html.part.edit', ['id' => $request->id]));
        } catch (\Exception $e) {
            $application_error_message = '商品HTMLパーツの更新に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * 商品HTMLパーツ削除
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function delete(Request $request)
    {
        try {
            $this->html_part_service->deleteProductHtmlPart($request->id);
            return redirect(route('html.part.list'));
        } catch (QueryException $e) {
            $code = $e->getCode();
            if($code == 23000) {
                $application_error_message = '商品で設定している商品HTMLパーツのため削除できません。';
                return back()->with('application_error_message', $application_error_message)->withInput();
            }
            $application_error_message = '商品HTMLパーツの削除に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        } catch (\Exception $e) {
            $application_error_message = '商品HTMLパーツの削除に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
