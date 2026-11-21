<?php


namespace App\Services;

use App\Models\Color;
use App\Models\PlateThickness;
use App\Models\ProductOption;
use App\Models\ProductOptionContent;
use App\Models\Size;
use App\Models\ProductSetting;
use App\ValueObject\SizeType;
use Illuminate\Database\QueryException;
use Log;
use App\Models\SpecificationDetailIndividual;
use Illuminate\Support\Facades\DB;

/**
 * 規格詳細サービス
 * Class SpecificationDetailService
 * @package App\Services
 */
class SpecificationDetailService
{
    /**
     * 主キー検索
     *
     * 1レコードの返却
     * @param int $specification_detail_individual_id
     * @return mixed
     */
    public function find(int $specification_detail_individual_id)
    {
        return SpecificationDetailIndividual::find($specification_detail_individual_id);
    }

    /**
     * 商品IDで検索
     *
     * @param int $product_id
     * @return mixed
     */
    public function findByProductId(int $product_id)
    {
        return SpecificationDetailIndividual::where('product_id', $product_id)->get();
    }

    /**
     * 規格詳細更新処理
     *
     * @param int $product_id
     * @param array $request_data
     * @throws \Exception
     */
    public function update(int $product_id, array $request_data)
    {
        /**
         * color_id => [
         *     '0' => 1,
         *     '1' => 2,
         * ]
         * のように入っているのでデータを整形する
         */
        try {
            DB::transaction(function () use ($product_id, $request_data) {

                // バリデーションのチェックによってis_default_display配列のkey値が0以外になってしまうため先頭１件だけ取り出す
                if (isset($request_data['is_default_display'])) {
                    $is_default_display_index = array_shift($request_data['is_default_display']);
                } else {
                    $is_default_display_index = -1;
                }

                $product_service = new ProductService();
                $product = $product_service->find($product_id);

                $update_data = [];
                for ($i = 0; $i < $request_data['list_length']; $i++) {
                    $row = [
                        'specification_detail_individual_id' =>
                            isset($request_data['specification_detail_individual_id'][$i]) ? $request_data['specification_detail_individual_id'][$i] : null,
                        'product_id' => $product_id,
                        'is_default_display' => ($i == $is_default_display_index) ? 1 : 0,
                        'product_code' =>
                            isset($request_data['product_code'][$i]) ? $request_data['product_code'][$i] : $product->product_code,
                        'price' => $request_data['price'][$i],
                        'product_name_displayed_cart' => $request_data['product_name_displayed_cart'][$i],
                        'delivery_schedule_id' => $request_data['delivery_schedule_id'][$i],
                        'is_destination_valid' => $request_data['is_destination_valid'][$i],
                        'is_delivery_charge_valid' => $request_data['is_delivery_charge_valid'][$i],
                        'is_large_delivery_valid' => $request_data['is_large_delivery_valid'][$i],
                    ];
                    if (isset($request_data['color_id'][$i])) {
                        $row = array_merge($row, ['color_id' => $request_data['color_id'][$i]]);
                    }
                    if (isset($request_data['size_id'][$i])) {
                        $row = array_merge($row, ['size_id' => $request_data['size_id'][$i]]);
                    }
                    if (isset($request_data['plate_thickness_id'][$i])) {
                        $row = array_merge($row, ['plate_thickness_id' => $request_data['plate_thickness_id'][$i]]);
                    }
                    if (isset($request_data['product_option_content_id'][$i])) {
                        $row = array_merge($row, ['product_option_content_id' => $request_data['product_option_content_id'][$i]]);
                    }

                    $update_data[] = $row;
                }
                // 複数のデータを複数レコード条件に合わせて更新する方法がlaravelには無さそうだったのでforeachで１レコード毎に更新する
                foreach ($update_data as $item) {
                    if (is_null($item['specification_detail_individual_id'])) {
                        // 新規
                        $specification_detail_individual = new SpecificationDetailIndividual();
                        $specification_detail_individual->fill($item)->save();
                    } else {
                        // 更新
                        SpecificationDetailIndividual::find($item['specification_detail_individual_id'])->fill($item)->save();
                    }
                }
                // 削除
                foreach ($request_data['delete_id_list'] as $delete_id) {
                    if (!is_null($delete_id)) {
                        SpecificationDetailIndividual::find($delete_id)->delete();
                    }
                }
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
     * カラー情報取得
     *
     * 設定されたカラーIDと紐づくカラー名称を取得する
     * 重複するIDはまとめる
     *
     * @param int $product_id
     * @return array
     */
    public function getColorData(int $product_id)
    {
        // 中間テーブルを作成する必要性もあまりないのでJOINする
        $specifications = SpecificationDetailIndividual::where('product_id', $product_id)
            ->select(['specification_detail_individuals.color_id', 'color_name'])
            ->distinct()
            ->join('colors', 'colors.color_id', '=', 'specification_detail_individuals.color_id')
            ->get();
        $colors = [];
        foreach ($specifications as $item) {
            $colors[] = [
                'color_id' => $item->color_id,
                'color_name' => $item->color_name,
            ];
        }
        return $colors;
    }

    /**
     * サイズ情報取得
     *
     * 設定されたサイズIDと紐づくサイズ名称を取得する
     * 重複するサイズIDはまとめる
     *
     * @param int $product_id
     * @return array
     */
    public function getSizeData(int $product_id)
    {
        // 中間テーブルを作成する必要性もあまりないのでJOINする
        $specifications = SpecificationDetailIndividual::where('product_id', $product_id)
            ->select(['specification_detail_individuals.size_id', 'size_type', 'size', 'width_size', 'height_size'])
            ->distinct()
            ->join('sizes', 'sizes.size_id', '=', 'specification_detail_individuals.size_id')
            ->get();
        $sizes = [];
        foreach ($specifications as $item) {
            $sizes[] = [
                'size_id' => $item->size_id,
                'size_name' => $this->generateSizeName($item),
            ];
        }
        return $sizes;
    }

    /**
     * オプション情報酒盗
     *
     * 設定されたオプション情報を取得する
     * 重複するオプションIDはまとめる
     * @param int $product_id
     * @return array
     */
    public function getOptionData(int $product_id)
    {
        // 中間テーブルを作成する必要性もあまりないのでJOINする
        $specifications = SpecificationDetailIndividual::where('product_id', $product_id)
            ->select(['specification_detail_individuals.product_option_content_id', 'display_name'])
            ->distinct()
            ->join('product_option_contents', 'product_option_contents.product_option_content_id', '=', 'specification_detail_individuals.product_option_content_id')
            ->get();
        $options = [];
        foreach ($specifications as $item) {
            $options[] = [
                'product_option_content_id' => $item->product_option_content_id,
                'display_name' => $item->display_name,
            ];
        }
        return $options;
    }

    /**
     * サイズサービスへ移植すること
     *
     * サイズの種別によって名称がことなる
     *
     * @param array $size_datum
     * @return string
     */
    public function generateSizeName($size_datum)
    {
        if ($size_datum->size_type == 1) {
            // 数値
            $size_name = $size_datum->width_size . " × " . $size_datum->height_size;
        } else {
            // 文字列
            $size_name = $size_datum->size;
        }
        return $size_name;
    }

    /**
     * カラーリストを取得
     *
     * @param int $product_id
     * @return Color[]|null
     */
    public function getColorList(int $product_id)
    {
        // １件しかないはずなのでfirstで取得する
        $product_setting = ProductSetting::where('product_id', $product_id)->first();
        if ($product_setting == null) {
            return null;
        }
        if ($product_setting->is_color_valid != 1) {
            return null;
        }
        return Color::where('color_group_id', $product_setting->color_group_id)->get();
    }

    /**
     * サイズリストを取得
     *
     * @param int $product_id
     * @return array|null
     */
    public function getSizeList(int $product_id)
    {
        // １件しかないはずなのでfirstで取得する
        $product_setting = ProductSetting::where('product_id', $product_id)->first();
        if ($product_setting == null) {
            return null;
        }
        if ($product_setting->is_size_valid != 1) {
            return null;
        }
        if ($product_setting->specify_size == SizeType::SIZE_OF_FREE) {
            return null;
        }

        // サイズグループ、サイズ指定(サイズ種別)でフィルタリングする
        $wheres = [];
        array_push($wheres, ['size_group_id', $product_setting->size_group_id]);
        array_push($wheres, ['size_type', $product_setting->specify_size]);
        $sizes = Size::where($wheres)->get();

        // 表示用に変換
        $displays = [];
        foreach ($sizes as $size) {
            if ($size->size_type == 1) {
                // 数値
                $value = $size->width_size . " × " . $size->height_size;
            } else {
                // 文字列
                $value = $size->size;
            }
            $displays[$size->size_id] = $value;
        }

        return $displays;
    }

    /**
     * 板厚リストを取得
     *
     * @param int $product_id
     * @return PlateThickness[]|\Illuminate\Database\Eloquent\Collection|null
     */
    public function getPlateThicknessList(int $product_id)
    {
        // １件しかないはずなのでfirstで取得する
        $product_setting = ProductSetting::where('product_id', $product_id)->first();
        if ($product_setting == null) {
            return null;
        }
        if ($product_setting->is_plate_thickness_valid != 1) {
            return null;
        }

        return PlateThickness::all();
    }

    /**
     * オプションリストを取得
     *
     * @param int $product_id
     * @return ProductOptionContent[]|\Illuminate\Database\Eloquent\Collection|null
     */
    public function getOptionList(int $product_id)
    {
        // １件しかないはずなのでfirstで取得する
        $product_setting = ProductSetting::where('product_id', $product_id)->first();
        if ($product_setting == null) {
            return null;
        }
        if ($product_setting->is_product_option_valid != 1) {
            return null;
        }
        // 1件しかないはずなのでfirstで取得する
        $product_option = ProductOption::where('product_id', $product_id)->first();
        if ($product_option == null) {
            return null;
        }
        return ProductOptionContent::where('product_option_id', $product_option->product_option_id)->get();
    }
}