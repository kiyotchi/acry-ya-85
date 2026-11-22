<?php

namespace App\Services;

use App\Models\ProductsProductFeatureTag;
use App\Models\ProductTag;
use App\Models\RelatedProduct;
use App\Models\SemiOrderHtmlContent;
use App\Models\Tag;
use App\ValueObject\SizeType;
use Faker\Provider\Image;
use Illuminate\Support\Facades\DB;
use Log;
use SplFileObject;
use Illuminate\Database\QueryException;
use App\Models\Product;
use App\Models\ProductSetting;
use App\Models\ProductsProductHtmlPart;

use App\ValueObject\ProductType;

/**
 * 商品
 */
class ProductService
{
    const DELIVERIES_PATH = '/var/www/html/public/cgibin/listview/up/zaiko6.csv';

    /**
     * 商品検索
     *
     * @param int $product_id
     * @return array
     */
    public function find(int $product_id)
    {
        return Product::find($product_id);
    }

    /**
     * 商品一覧検索
     *
     * @param string $product_name
     * @param string $product_code
     * @param int $product_category_id
     * @param string $product_type_code
     * @return Collection
     */
    public function findList(
        string $product_name = null,
        string $product_code = null,
        int $is_display = null,
        int $product_category_id = null,
        string $product_type_code = null,
        string $semi_html_part = null
    ) {
        // パラメーターがからの場合は全件検索する
        // 一つでもあれば条件検索
        $wheres = [];
        if (!is_null($product_name)) {
            array_push($wheres, ['product_name', 'LIKE', "%{$product_name}%"]);
        }
        if (!is_null($product_code)) {
            array_push($wheres, ['product_code', 'LIKE', "%{$product_code}%"]);
        }
        if (!is_null($product_type_code)) {
            array_push($wheres, ['product_type_code', $product_type_code]);
        }
        if (!is_null($is_display)) {
            array_push($wheres, ['is_display', $is_display]);
        }
        if (!is_null($product_category_id)) {
            $product_category = new ProductCategoryService();
            $product_category_ids = $product_category->getProductCategoryIds($product_category_id);
        }
        
        if (!is_null($semi_html_part)) {
            $semi_parts_ids = [];
            $semi_parts = DB::select("SELECT product_id FROM semi_order_html_contents WHERE html LIKE '%" . $semi_html_part . "%'");
            foreach ($semi_parts as $semi_part) {
                array_push($semi_parts_ids, $semi_part->product_id);
            }
            //Log::debug($semi_parts_ids);
        }
        
        if (!empty($product_category_ids)) {
            $products = Product::where(
                $wheres
            )->whereIn('product_category_id', $product_category_ids)
                ->paginate(20);
            if (!empty($semi_parts_ids)){
                $products = Product::where(
                    $wheres
                )->whereIn('product_category_id', $product_category_ids)->whereIn('product_id', $semi_parts_ids)
                    ->paginate(20);
            }
        } else {
            $products = Product::where(
                $wheres
            )->paginate(20);
            if (!empty($semi_parts_ids)){
                $products = Product::where(
                    $wheres
                )->whereIn('product_id', $semi_parts_ids)
                    ->paginate(20);
            }
        }
        //Log::debug($wheres);
        return $products;
    }

    /**
     * 全件検索
     *
     * @return Product[]|\Illuminate\Database\Eloquent\Collection
     */
    public function findAll()
    {
        return Product::all();
    }

    /**
     * 商品登録
     *
     * 商品編集画面からの標準商品登録処理
     *
     * @param array $insert_data
     * @return int
     * @throws \Exception
     */
    public function register(array $insert_data)
    {
        try {
            return DB::transaction(function () use ($insert_data) {
                // 商品登録後にProductテーブルの主キーが決定されるため先に商品登録を実施
                $product_type = new ProductType();
                $insert_data['product_type_code'] = $product_type->getStandardType();
                $product = new Product();
                $product->fill($insert_data)->save();

                // 商品特徴タグ中間テーブル登録
                $this->registerFeatureTagPivot($product->product_id, $insert_data);

                // 設定登録
                $this->registerSetting($product->product_id, $insert_data);

                // 画像登録
                $image_service = new ImageService();
                $image_service->productImageRegister($product->product_id, $insert_data);
                $image_service->registerOgp($product->product_id, $insert_data);

                // HTMLパーツとのリンクテーブル登録
                $this->registerHtmlPart($product->product_id, $insert_data);

                // 関連商品登録
                $this->registerRelatedProductPivot($product->product_id, $insert_data);

                // タグ登録
                $this->registerProductTag($product->product_id, $insert_data);

                return $product->product_id;
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
     * 商品更新
     *
     * @param int $product_id
     * @param array $update_data
     * @throws \Exception
     */
    public function update(int $product_id, array $update_data)
    {
        try {
            DB::transaction(function () use ($product_id, $update_data) {
                Product::find($product_id)->fill($update_data)->save();
                // 設定更新
                $this->updateSetting($product_id, $update_data);
                // 商品特徴タグ中間テーブル削除、登録
                $this->deleteFeatureTagPivot($product_id);
                $this->registerFeatureTagPivot($product_id, $update_data);
                // 画像更新
                $image_service = new ImageService();
                $image_service->productImageUpdate($product_id, $update_data);
                $image_service->updateOgp($product_id, $update_data);
                // HTMLパーツとのリンクテーブル登録
                $this->deleteHtmlPartPivot($product_id);
                $this->registerHtmlPart($product_id, $update_data);
                // 関連商品更新
                $this->deleteRelatedProductPivot($product_id);
                $this->registerRelatedProductPivot($product_id, $update_data);
                // タグ中間テーブル削除、登録
                $this->deleteProductTagPivot($product_id);
                $this->registerProductTag($product_id, $update_data);
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
     * セミオーダー商品登録
     *
     * @param array $insert_data
     * @return mixed
     * @throws \Exception
     */
    public function customRegister(array $insert_data)
    {
        try {
            return DB::transaction(function () use ($insert_data) {
                // 商品登録後にProductテーブルの主キーが決定されるため先に商品登録を実施
                $product_type = new ProductType();
                $insert_data['product_type_code'] = $product_type->getCustomType();
                $product = new Product();
                $product->fill($insert_data)->save();

                // 商品特徴タグ中間テーブル登録
                $this->registerFeatureTagPivot($product->product_id, $insert_data);

                // HTMLコンテンツを登録
                $semi_order_html_content = new SemiOrderHtmlContent();
                $semi_order_data = [
                    'product_id' => $product->product_id,
                    'html' => $insert_data['html'],
                ];
                $semi_order_html_content->fill($semi_order_data)->save();

                $image_service = new ImageService();
                $image_service->registerOgp($product->product_id, $insert_data);

                // HTMLパーツとのリンクテーブル登録
                $this->registerHtmlPart($product->product_id, $insert_data);

                // 関連商品登録
                $this->registerRelatedProductPivot($product->product_id, $insert_data);

                // タグ登録
                $this->registerProductTag($product->product_id, $insert_data);

                return $product->product_id;
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
     * セミオーダー商品更新
     *
     * @param int $product_id
     * @param array $update_data
     * @throws \Exception
     */
    public function customUpdate(int $product_id, array $update_data)
    {
        try {
            DB::transaction(function () use ($product_id, $update_data) {
                // 商品特徴タグ中間テーブル削除、登録
                $this->deleteFeatureTagPivot($product_id);
                $this->registerFeatureTagPivot($product_id, $update_data);

                // HTMLコンテンツを登録
                SemiOrderHtmlContent::where('product_id', $product_id)->update(['html' => $update_data['html']]);
                Product::find($product_id)->fill($update_data)->save();

                // HTMLパーツとのリンクテーブル登録
                $this->deleteHtmlPartPivot($product_id);
                $this->registerHtmlPart($product_id, $update_data);

                // 関連商品更新
                $this->deleteRelatedProductPivot($product_id);
                $this->registerRelatedProductPivot($product_id, $update_data);

                $image_service = new ImageService();
                $image_service->updateOgp($product_id, $update_data);

                // タグ中間テーブル削除、登録
                $this->deleteProductTagPivot($product_id);
                $this->registerProductTag($product_id, $update_data);
            });
        } catch (QueryException $e) {
            Log::error('database error.');
            Log::error($e->getMessage());
            Log::error($e->getTraceAsString());
            throw $e;
        } catch (\Exception $e) {
            Log::error('customUpdate fail.');
            Log::error($e->getMessage());
            throw $e;
        }
    }

    /**
     * 商品削除
     *
     * @param int $product_id
     * @throws \Exception
     */
    public function delete(int $product_id)
    {
        try {
            DB::transaction(function () use ($product_id) {
                Product::find($product_id)->delete();
            });
        } catch (QueryException $e) {
            Log::error('database error.');
            Log::error($e->getMessage());
            Log::error($e->getTraceAsString());
            throw $e;
        } catch (\Exception $e) {
            Log::error('customUpdate fail.');
            Log::error($e->getMessage());
            throw $e;
        }
    }

    /**
     * 出荷目安を生成する
     *
     * var/www/html/public/cgibin/listview/up/zaiko6.csvからリストを生成する
     *
     * @return array
     */
    public function generateDeliveries()
    {
        $file = new SplFileObject(config('acryya.deliveries_path'));
        $file->setFlags(SplFileObject::READ_CSV);
        $deliveries = [];
        foreach ($file as $line) {
            if (!is_null($line[0])) {
                // SplFileObjectだと読み込み時にエンコードできないので、１行単位でエンコードする
                $encode_line = mb_convert_encoding($line, 'UTF-8', 'SJIS');
                $record = array(
                    $encode_line[3] => $encode_line[4],
                );
                $deliveries = $deliveries + $record;
            }
        }
        return $deliveries;
    }

    /**
     * 出荷目安日付リストを生成する
     *
     * var/www/html/public/cgibin/listview/up/zaiko6.csvからリストを生成する
     *
     * @return array
     */
    public function generateDeliveryDates()
    {
        $file = new SplFileObject(config('acryya.deliveries_path'));
        $file->setFlags(SplFileObject::READ_CSV);
        $delivery_dates = [];
        foreach ($file as $line) {
            if (!is_null($line[0])) {
                // SplFileObjectだと読み込み時にエンコードできないので、１行単位でエンコードする
                $encode_line = mb_convert_encoding($line, 'UTF-8', 'SJIS');
                $record = array(
                    $encode_line[3] => $encode_line[5],
                );
                $delivery_dates = $delivery_dates + $record;
            }
        }
        return $delivery_dates;
    }

    /**
     * 商品HTMLパーツ選択状態IDリスト作成
     *
     * @param Product $product
     * @return array
     */
    public function generateSelectedHtmlPartIdList(Product $product)
    {
        $tests = $product->productHtmlPart()->where('product_id', $product->product_id)->get();
        $selected_id_list = [];
        foreach ($tests as $part) {
            $selected_id_list[$part['product_html_part_type_id']] = $part['product_html_part_id'];
        }
        return $selected_id_list;
    }

    /**
     * 商品設定登録
     *
     * @param int $product_id
     * @param array $insert_data
     */
    private function registerSetting(int $product_id, array $insert_data)
    {
        $product_setting = new ProductSetting();
        $insert_data['product_id'] = $product_id;
        if ($insert_data['specify_size'] == SizeType::SIZE_OF_NUMERIC) {
            $insert_data['size_group_id'] = $insert_data['size_group_id_of_number'];
        } elseif ($insert_data['specify_size'] == SizeType::SIZE_OF_STRING) {
            $insert_data['size_group_id'] = $insert_data['size_group_id_of_string'];
        }
        $product_setting->fill($insert_data)->save();
    }

    /**
     * 商品設定更新
     *
     * @param int $product_id
     * @param array $update_data
     */
    private function updateSetting(int $product_id, array $update_data)
    {
        $product_setting = ProductSetting::where('product_id', $product_id)->first();
        if ($update_data['specify_size'] == SizeType::SIZE_OF_NUMERIC) {
            $update_data['size_group_id'] = $update_data['size_group_id_of_number'];
        } elseif ($update_data['specify_size'] == SizeType::SIZE_OF_STRING) {
            $update_data['size_group_id'] = $update_data['size_group_id_of_string'];
        }
        ProductSetting::find($product_setting->product_setting_id)->fill($update_data)->save();
    }

    /**
     * HTMLパーツ登録
     *
     * 選択されたHTMLパーツと商品のリンク登録
     *
     * @param int $product_id
     * @param array $insert_data
     */
    private function registerHtmlPart(int $product_id, array $insert_data)
    {
        if (isset($insert_data['product_add_information_html_part_id'])) {
            $data = array(
                'product_id' => $product_id,
                'product_html_part_id' => $insert_data['product_add_information_html_part_id'],
            );
            $this->insertHtmlPartPivot($data);
        }
        if (isset($insert_data['product_feature_html_part_id'])) {
            $data = array(
                'product_id' => $product_id,
                'product_html_part_id' => $insert_data['product_feature_html_part_id'],
            );
            $this->insertHtmlPartPivot($data);
        }

        if (isset($insert_data['product_case_studie_html_part_id'])) {
            $data = array(
                'product_id' => $product_id,
                'product_html_part_id' => $insert_data['product_case_studie_html_part_id'],
            );
            $this->insertHtmlPartPivot($data);
        }

        if (isset($insert_data['product_specification_html_part_id'])) {
            $data = array(
                'product_id' => $product_id,
                'product_html_part_id' => $insert_data['product_specification_html_part_id'],
            );
            $this->insertHtmlPartPivot($data);
        }

        if (isset($insert_data['product_precaution_html_part_id'])) {
            $data = array(
                'product_id' => $product_id,
                'product_html_part_id' => $insert_data['product_precaution_html_part_id'],
            );
            $this->insertHtmlPartPivot($data);
        }

        if (isset($insert_data['maker_sold_out_html_part_id'])) {
            $data = array(
                'product_id' => $product_id,
                'product_html_part_id' => $insert_data['maker_sold_out_html_part_id'],
            );
            $this->insertHtmlPartPivot($data);
        }

        if (isset($insert_data['delivery_precaution_html_part_id'])) {
            $data = array(
                'product_id' => $product_id,
                'product_html_part_id' => $insert_data['delivery_precaution_html_part_id'],
            );
            $this->insertHtmlPartPivot($data);
        }

        if (isset($insert_data['delivery_schedule_html_part_id'])) {
            $data = array(
                'product_id' => $product_id,
                'product_html_part_id' => $insert_data['delivery_schedule_html_part_id'],
            );
            $this->insertHtmlPartPivot($data);
        }

        if (isset($insert_data['repair_part_html_part_id'])) {
            $data = array(
                'product_id' => $product_id,
                'product_html_part_id' => $insert_data['repair_part_html_part_id'],
            );
            $this->insertHtmlPartPivot($data);
        }

        if (isset($insert_data['add_head_tag_html_part_id'])) {
            $data = array(
                'product_id' => $product_id,
                'product_html_part_id' => $insert_data['add_head_tag_html_part_id'],
            );
            $this->insertHtmlPartPivot($data);
        }
		
        if (isset($insert_data['related_content_html_part_id'])) {
            $data = array(
                'product_id' => $product_id,
                'product_html_part_id' => $insert_data['related_content_html_part_id'],
            );
            $this->insertHtmlPartPivot($data);
        }
    }

    /**
     * HTMLパーツ中間テーブル
     *
     * @param array $insert_data
     */
    private function insertHtmlPartPivot(array $insert_data)
    {
        $products_product_html_part = new ProductsProductHtmlPart();
        $products_product_html_part->fill($insert_data)->save();
    }

    /**
     * 商品HTMLパーツリンクテーブル削除
     *
     * @param $product_id
     */
    private function deleteHtmlPartPivot($product_id)
    {
        ProductsProductHtmlPart::where('product_id', $product_id)->delete();
    }


    /**
     * 商品特徴タグリンクテーブル登録
     *
     * @param int $product_id
     * @param array $regster_data
     */
    private function registerFeatureTagPivot(int $product_id, array $regster_data)
    {
        if (!isset($regster_data['product_feature_tags'])) {
            return;
        }
        foreach ($regster_data['product_feature_tags'] as $tag_id) {
            $products_product_feature_tag = new ProductsProductFeatureTag();
            $products_product_feature_tag->fill(array(
                'product_id' => $product_id,
                'product_feature_tag_id' => $tag_id,
            ))->save();
        }
    }

    /**
     * 商品特徴タグリンクテーブル削除
     *
     * @param int $product_id
     */
    private function deleteFeatureTagPivot(int $product_id)
    {
        ProductsProductFeatureTag::where('product_id', $product_id)->delete();
    }

    /**
     * サムネイル画像のアップロードを行う
     *
     * @param array $data
     * @return mixed|string
     */
    private function uploadThumbnail(array $data)
    {
        $image_service = new ImageService();
        $file_name = $image_service->uploadImage($data['thumbnail']);
        return $file_name;
    }


    /**
     * 関連商品テーブル登録
     *
     * @param $product_id
     * @param $data
     */
    private function registerRelatedProductPivot($product_id, $data)
    {
        if (isset($data['related_product_option']) && $data['related_product_option'] == 0) {
            return;
        }

        foreach ($data['related_product_id'] as $datum) {
            if (is_null($datum)) {
                continue;
            }

            // 検索する複合主キー制約違反の場合は飛ばす
            $related_product = RelatedProduct::where([
                'product_id' => $product_id,
                'related_product_id' => $datum
            ])->first();
            if (isset($related_product)) {
                Log::info('related product duplicate keys. product_id : ' . $product_id . ', related_product_id : ' . $datum);
                continue;
            }


            $related_product = new RelatedProduct();
            $related_product->fill(array(
                'product_id' => $product_id,
                'related_product_id' => $datum,
            ))->save();
        }
    }

    /**
     * 関連商品テーブル削除
     *
     * @param $product_id
     */
    private function deleteRelatedProductPivot($product_id)
    {
        RelatedProduct::where('product_id', $product_id)->delete();
    }

    /**
     * タグテーブル登録
     *
     * @param int $product_id
     * @param array $data
     */
    private function registerProductTag(int $product_id, array $data)
    {
        if (!isset($data['product_tag'])) {
            Log::debug('tag unset');
            return;
        }

        // カンマ区切りはsplit
        $tag_names = explode(',', $data['product_tag']);
        foreach ($tag_names as $tag_name) {
            // 同一タグは存在させないのでfirstで取得する
            $tag = Tag::where('tag_name', $tag_name)->first();
            if (isset($tag)) {
                // あったら中間テーブルのみ登録
                $this->registerProductTagPivot($product_id, $tag->tag_id);
            } else {
                // タグ登録
                $tag = new Tag();
                $tag->fill(array('tag_name' => $tag_name))->save();
                // 中間テーブル登録
                $this->registerProductTagPivot($product_id, $tag->tag_id);
            }
        }
    }

    /**
     * 商品タグ中間テーブル登録
     *
     * @param int $product_id
     * @param int $tag_id
     */
    private function registerProductTagPivot(int $product_id, int $tag_id)
    {
        $products_tags = new ProductTag();
        $products_tags->fill(array(
            'product_id' => $product_id,
            'tag_id' => $tag_id,
        ))->save();
    }

    /**
     * 商品タグ中間テーブル削除
     *
     * @param int $product_id
     */
    private function deleteProductTagPivot(int $product_id)
    {
        ProductTag::where('product_id', $product_id)->delete();
    }

}
