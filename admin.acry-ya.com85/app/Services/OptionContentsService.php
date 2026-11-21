<?php


namespace App\Services;

use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

use App\Models\ProductOptionContent;

/**
 * Class DiscountRateService
 * @package App\Services
 */
class OptionContentsService
{
    /**
     * 商品オプションID検索
     *
     * @param $product_option_id
     * @return
     */
    public function findByProductOptionId($product_option_id)
    {
        return ProductOptionContent::where('product_option_id', $product_option_id)->get();
    }

    /**
     * 規格詳細更新処理
     *
     * @param int $product_id
     * @param array $request_data
     * @throws \Exception
     */
    public function updateOptionContents($product_option_id, $request_data)
    {
        $update_data = [];
        for ($i = 0; $i < $request_data['list_length']; $i++) {
            $row = [
                'product_option_content_id' =>
                    isset($request_data['product_option_content_id'][$i]) ? $request_data['product_option_content_id'][$i] : null,
                'product_option_id' => $product_option_id,
                'value' => $request_data['value'][$i],
                'display_name' => $request_data['display_name'][$i]
            ];
            $update_data[] = $row;
        }

        foreach ($update_data as $item) {
            if (is_null($item['product_option_content_id'])) {
                if (is_null($item['product_option_id'])) {
                    $item['product_option_id'] = $product_option_id;
                }
                // 新規
                $product_option_content = new ProductOptionContent();
                $product_option_content->fill($item)->save();
            } else {
                // 更新
                ProductOptionContent::find($item['product_option_content_id'])->fill($item)->save();
            }
        }

        // 削除
        foreach ($request_data['delete_id_list'] as $delete_id) {
            if (!is_null($delete_id)) {
                ProductOptionContent::find($delete_id)->delete();
            }
        }
    }
}