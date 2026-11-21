<?php

namespace App\Http\Controllers\Option;

use Log;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\OptionSettingRequest;
use Illuminate\Database\QueryException;

use App\Services\ProductService;
use App\Services\OptionSettingService;
use App\Services\OptionContentsService;

class OptionSettingController extends Controller
{

    private $product_service;
    private $option_setting_service;
    private $option_content_service;

    /**
     * SpecificationDetailController constructor.
     *
     * @param ProductService $product_service
     * @param SpecificationDetailService $specification_detail_service
     */
    public function __construct(
        ProductService $product_service,
        OptionSettingService $option_setting_service,
        OptionContentsService $option_content_service
    ) {
        $this->product_service = $product_service;
        $this->option_setting_service = $option_setting_service;
        $this->option_content_service = $option_content_service;
    }

    /**
     * オプション設定画面表示
     */
    public function index(Request $request)
    {
        // product_option_idが存在したら取得して表示
        Log::debug($request->all());
        $products = $this->product_service->find($request->id);
        if (!isset($products)) {
            return redirect(route('product.list'));
        }
        $option_settings = $this->option_setting_service->findByProductId($request->id);
        if (isset($option_settings)) {
            $option_contents = $this->option_content_service->findByProductOptionId($option_settings->product_option_id);

            return view('option/option_setting')
                ->with('products', $products)
                ->with('option_settings', $option_settings)
                ->with('option_contents', $option_contents);
        } else {
            return view('option/option_setting')
                ->with('products', $products);
        }
    }

    /**
     * 商品オプション、商品オプション内容更新処理
     */
    public function update(OptionSettingRequest $request)
    {
        try {
            Log::debug($request->all());
            $this->option_setting_service->update($request);
            session()->flash('complete_message', '更新が完了しました。');
            return redirect(route('option.setting', ['id' => $request->product_id]));
        } catch (QueryException $e) {
            $code = $e->getCode();
            if($code == 23000) {
                $application_error_message = 'オプション別画像を設定しているオプションのため削除できません。';
                return back()->with('application_error_message', $application_error_message)->withInput();
            }
            $application_error_message = 'オプションの登録に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        } catch (\Exception $e) {
            $application_error_message = 'オプションの登録に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
