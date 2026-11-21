<?php

namespace App\Http\Controllers\DiscountRates;

use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\DiscountRateRequest;

use App\Services\DiscountRateService;
use App\Services\DiscountRateItemService;

class DiscountRateController extends Controller
{
    /**
     * 編集画面表示
     */
    public function index(Request $request)
    {
        // discount_rate_idが存在したら取得して表示
        //Log::debug($request->all());
        if (isset($request->id)) {
            $discount_rate_service = new DiscountRateService();
            $discount_rate_service_item = new DiscountRateItemService();
            $used_products = $discount_rate_service->findByDiscountRatesUsedProducts($request->id);  
            $discount_rate = $discount_rate_service->findByDiscountRateId($request->id);
            $discount_rate_item = $discount_rate_service_item->findByDiscountRateId($request->id);
            return view('discount_rates/discount_rate', [
                "discount_rate" => $discount_rate,
                "discount_rate_item" => $discount_rate_item,
                "used_products" => $used_products
            ]);
        } else {
            return view('discount_rates/discount_rate');
        }
    }

    /**
     * 割引率、割引率アイテム登録
     */
    public function register(DiscountRateRequest $request)
    {
        try {
            $discount_rate_id = DB::transaction(function () use ($request) {
                Log::debug($request);
                $discount_rate_service = new DiscountRateService();
                $discount_rate_item_service = new DiscountRateItemService();

                $discount_rate_id = $discount_rate_service->register([
                    'discount_rate_title' => $request->discount_rate_title
                ]);

                $data = [];
                foreach ($request['number_of_lower_limit'] as $i => $v) {
                    $data[] = [
                        'discount_rate_id' => $discount_rate_id,
                        'number_of_lower_limit' => $request->number_of_lower_limit[$i],
                        'number_of_upper_limit' => $request->number_of_upper_limit[$i],
                        'discount_rate' => $request->discount_rate[$i]
                    ];
                }
                $discount_rate_item_service->register($data);
                return $discount_rate_id;
            });
            session()->flash('complete_message', '登録が完了しました。');
            return redirect(route('discount.rate.edit', ['id' => $discount_rate_id]));
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            throw $e;
            $application_error_message = '割引率、割引率アイテムの登録に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * 割引率、割引率アイテム更新
     */
    public function update(DiscountRateRequest $request)
    {
        try {
            $discount_rate_id = DB::transaction(function () use ($request) {
                Log::debug($request);
                $discount_rate_id = $request->id;
                $discount_rate_service = new DiscountRateService();
                $discount_rate_item_service = new DiscountRateItemService();

                $discount_rate_service->update(
                    $discount_rate_id,
                    [
                        'discount_rate_title' => $request->discount_rate_title
                    ]);

                $data = [];
                foreach ($request['number_of_lower_limit'] as $i => $v) {
                    $data[] = [
                        'discount_rate_id' => $discount_rate_id,
                        'number_of_lower_limit' => $request->number_of_lower_limit[$i],
                        'number_of_upper_limit' => $request->number_of_upper_limit[$i],
                        'discount_rate' => $request->discount_rate[$i]
                    ];
                }
                $discount_rate_item_service->upsert($discount_rate_id, $data);
                return $discount_rate_id;
            });
            session()->flash('complete_message', '更新が完了しました。');
            return redirect(route('discount.rate.edit', ['id' => $discount_rate_id]));
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            throw $e;
            $application_error_message = '割引率、割引率アイテムの登録に失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * 割引率、割引率アイテム削除
     */
    public function delete(Request $request)
    {
        $discount_rate_service = new DiscountRateService();
        $discount_rate_item_service = new DiscountRateItemService();
        $discount_rate_item_service->delete($request->id);
        $discount_rate_service->delete($request->id);

        return redirect(route('discount.rate.list'));
    }
}
