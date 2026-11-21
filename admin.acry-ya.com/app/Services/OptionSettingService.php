<?php


namespace App\Services;

use Illuminate\Http\Request;
use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

use App\Models\ProductOption;

/**
 * Class DiscountRateService
 * @package App\Services
 */
class OptionSettingService
{
    /**
     * 商品ID検索
     *
     * @param $product_id
     * @return
     */
    public function findByProductId($product_id)
    {
        return ProductOption::where('product_id', $product_id)->first();
    }

    /**
     * 商品オプションテーブル、商品オプション内容テーブルの更新実行
     *
     * @param int|null $product_option_id
     * @param array $update_datas
     * @throws \Exception
     */
    public function update(Request $request)
    {
        try {
            DB::transaction(function () use ($request) {
                // 商品オプション更新
                $option_contents_service = new OptionContentsService();
                $product_option_id = self::updateOptionSetting($request->product_option_id,
                    [
                        'product_id' => $request->product_id,
                        'option_name' => $request->option_name,
                        'html_tag_name' => $request->html_tag_name,
                        'html_tag_id' => $request->html_tag_id
                    ]);

                $option_contents_service->updateOptionContents($product_option_id, $request->all());
            });
        } catch (QueryException $e) {
            Log::error('database error.');
            Log::error($e->getMessage());
            Log::error($e->getTraceAsString());
            throw $e;
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            throw $e;
        }
    }

    /**
     * 更新
     *
     * @param int|null $product_option_id
     * @param array $update_datas
     * @throws \Exception
     */
    public function updateOptionSetting(int $product_option_id = null, array $update_datas)
    {
        if (is_null($product_option_id)) {
            $product_option = new ProductOption();
            $product_option->fill($update_datas)->save();
            $product_option_id = $product_option->product_option_id;
        } else {
            ProductOption::find($product_option_id)->fill($update_datas)->save();
        }
        return $product_option_id;
    }
}