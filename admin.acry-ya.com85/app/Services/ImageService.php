<?php

namespace App\Services;

use App\Models\ProductColorPictures;
use App\Models\ProductOption;
use App\Models\ProductOptionContentsPicture;
use App\Models\ProductSizePicture;
use App\Models\OgpPicture;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;
use Log;

use App\Models\Picture;
use App\Models\ProductPictures;

/**
 *
 * Class ImageService
 * @package App\Services
 */
class ImageService
{

    const MAX_NUMBER_OF_REGISTER_IMAGE = 7;
    const IS_IMAGE_DELETE = 1;

    /**
     * 商品画像登録
     *
     * 現状商品編集画面からの登録処理でしか呼ばれないためトランザクション処理は行わない
     * ProductService->registerで実施している
     * @param int $product_id
     * @param array $insert_data
     */
    public function productImageRegister(int $product_id, array $insert_data)
    {
        for ($i = 0; $i < self::MAX_NUMBER_OF_REGISTER_IMAGE; $i++) {
            $tag_name = 'picture_id_' . $i;
            if (isset($insert_data[$tag_name])) {
                // 中間テーブル登録
                $this->registerProductPicturePivot($product_id, $insert_data[$tag_name],
                    $insert_data['description_' . $i], $i);
            }
        }
    }

    /**
     * 商品画像更新
     *
     * 現状商品編集画面からの登録処理でしか呼ばれないためトランザクション処理は行わない
     * ProductService->updateで実施している
     * @param int $product_id
     * @param array $update_data
     */
    public function productImageUpdate(int $product_id, array $update_data)
    {
        // 中間テーブル削除削除
        ProductPictures::where('product_id', $product_id)->delete();
        // 登録
        for ($i = 0; $i < self::MAX_NUMBER_OF_REGISTER_IMAGE; $i++) {
            $picture_id = isset($update_data['picture_id_' . $i]) ? $update_data['picture_id_' . $i] : null;
            if (!is_null($picture_id)) {
                $this->registerProductPicturePivot($product_id, $picture_id, $update_data['description_' . $i], $i);
            }
        }
    }

    /**
     * サムネイル画像登録
     *
     * @param $file
     * @return mixed
     */
    public function registerThumbnail($file)
    {
        $file_name = $this->uploadImage($file);
        $picture_id = $this->registerPicture($file_name);
        return $picture_id;
    }

    /**
     * サムネイル画像更新
     *
     * @param int $picture_id
     * @param $file
     */
    public function updateThumbnail(int $picture_id, $file)
    {
        $file_name = $this->uploadImage($file);
        Picture::find($picture_id)->fill(['picture_path' => $file_name])->save();
    }

    /**
     * OGP画像登録
     *
     * @param int $product_id
     * @param array $data
     */
    public function registerOgp(int $productId, array $data)
    {
        $ogpModel = app(OgpPicture::class);
        $ogpModel->create([
            'product_id' => $productId,
            'picture_id' => data_get($data, 'ogp'),
            'type' => 'ogp',
        ]);
        $ogpModel->create([
            'product_id' => $productId,
            'picture_id' => data_get($data, 'twitter'),
            'type' => 'twitter',
        ]);
    }

    /**
     * OGP画像登録
     *
     * @param int $product_id
     * @param array $data
     */
    public function updateOgp(int $productId, array $data)
    {
        $ogpModel = app(OgpPicture::class);
        $ogpModel->where('product_id', $productId)->delete();
        $this->registerOgp($productId, $data);
    }

    /**
     * 画像アップロード
     * @param $file
     * @return mixed
     */
    public function uploadImage($file)
    {
        $file_name = $file->store(config('acryya.image_storage'));
        return basename($file_name);
    }

    /**
     * カラー別画像取得
     *
     * @param $product_id
     * @return array
     */
    public function getColorImage($product_id)
    {
        /**
         * 下記のようなデータに整形する
         * array = {
         *      [0] => {
         *          [color_id] : 1
         *          [color_name] : カラー名称
         *          [image_data] : {
         *              [0] : product_color_picture
         *          }
         *      [1] => {
         *          [color_id] : 2
         *      }
         *
         * }
         */
        $product_service = new ProductService();
        $product = $product_service->find($product_id);
        Log::debug($product->colorPicture);
        $specification_detail_service = new SpecificationDetailService();
        $colors = $specification_detail_service->getColorData($product_id);
        Log::debug($colors);
        $color_images = [];
        foreach ($colors as $color) {
            $color_image = [
                'color_id' => $color['color_id'],
                'color_name' => $color['color_name'],
                'image_data' => [],
            ];
            $image_data = [];
            foreach ($product->colorPicture as $item) {
                if ($color['color_id'] == $item['pivot']['color_id']) {
                    $image_data[] = $item;
                }
            }
            $color_image['image_data'] = $image_data;
            $color_images[] = $color_image;
        }
        return $color_images;
    }


    /**
     * カラー別画像登録
     *
     * @param int $product_id
     * @param $request_data
     * @throws \Exception
     */
    public function registerColorImage(int $product_id, $request_data)
    {
        Log::debug('registerColorImage start : ' . print_r($request_data, true));
        try {
            DB::transaction(function () use ($product_id, $request_data) {
                foreach ($request_data['color_ids'] as $color_id) {

                    // 中間テーブル削除
                    ProductColorPictures::where('product_id', $product_id)->where('color_id', $color_id)->delete();
                    for ($i = 0; $i < self::MAX_NUMBER_OF_REGISTER_IMAGE; $i++) {
                        // タグ名が"xxx_{color_id}_{index}"になっている
                        $suffix = $color_id . '_' . $i;
                        $picture_id = (isset($request_data['picture_id_' . $suffix])) ? $request_data['picture_id_' . $suffix] : null;
                        if (!is_null($picture_id)) {
                            $this->registerColorPicturePivot($product_id, $picture_id, $color_id,
                                $request_data['description_' . $suffix], $i);
                        }
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
     * サイズ別画像取得
     *
     * @param int $product_id
     * @return array
     */
    public function getSizeImage(int $product_id)
    {

        /**
         * 下記のようなデータに整形する
         * array = {
         *      [0] => {
         *          [size_id] : 1
         *          [size_name] : サイズ名称
         *          [image_data] : {
         *              [0] : product_size_picture
         *          }
         *      [1] => {
         *          [color_id] : 2
         *      }
         *
         * }
         */
        $product_service = new ProductService();
        $product = $product_service->find($product_id);
        $specification_detail_service = new SpecificationDetailService();
        $sizes = $specification_detail_service->getSizeData($product_id);
        Log::debug($sizes);
        $size_images = [];
        foreach ($sizes as $size) {
            $size_image = [
                'size_id' => $size['size_id'],
                'size_name' => $size['size_name'],
                'image_data' => [],
            ];
            $image_data = [];
            foreach ($product->sizePicture as $item) {
                if ($size['size_id'] == $item['pivot']['size_id']) {
                    $image_data[] = $item;
                }
            }
            $size_image['image_data'] = $image_data;
            $size_images[] = $size_image;
        }
        return $size_images;
    }

    /**
     * サイズ別画像登録
     *
     * @param int $product_id
     * @param array $request_data
     * @throws \Exception
     */
    public function registerSizeImage(int $product_id, array $request_data)
    {
        Log::debug('registerSizeImage start : ' . print_r($request_data, true));

        try {
            DB::transaction(function () use ($product_id, $request_data) {
                foreach ($request_data['size_ids'] as $size_id) {
                    // 中間テーブル削除
                    ProductSizePicture::where('product_id', $product_id)->where('size_id', $size_id)->delete();
                    for ($i = 0; $i < self::MAX_NUMBER_OF_REGISTER_IMAGE; $i++) {
                        // タグ名が"xxx_{size_id}_{index}"になっている
                        $suffix = $size_id . '_' . $i;
                        $picture_id = (isset($request_data['picture_id_' . $suffix])) ? $request_data['picture_id_' . $suffix] : null;
                        if (!is_null($picture_id)) {
                            $this->registerSizePicturePivot($product_id, $picture_id, $size_id,
                                $request_data['description_' . $suffix], $i);
                        }
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
     * オプション別画像取得
     *
     * @param int $product_id
     * @return array
     */
    public function getOptionImage(int $product_id)
    {
        /**
         * 下記のようなデータに整形する
         * array = {
         *      [0] => {
         *          [product_option_content_id] : 1
         *          [option_name] : カラー名称
         *          [image_data] : {
         *              [0] : product_option_content_picture
         *          }
         *      [1] => {
         *          [color_id] : 2
         *      }
         *
         * }
         */
        $product_service = new ProductService();
        $product = $product_service->find($product_id);
        // 規格詳細がなければ商品オプションから取得する
        $product_option = ProductOption::where('product_id', $product_id)->first();
        if (!isset($product_option)) {
            return [];
        }
        $option_images = [];
        foreach ($product_option->productOptionContent as $product_option_content) {
            $option_image = [
                'product_option_content_id' => $product_option_content['product_option_content_id'],
                'option_name' => $product_option_content['display_name'],
                'image_data' => [],
            ];
            $image_data = [];
            foreach ($product->optionPicture as $item) {
                if ($product_option_content['product_option_content_id'] == $item['pivot']['product_option_content_id']) {
                    $image_data[] = $item;
                }
            }
            $option_image['image_data'] = $image_data;
            $option_images[] = $option_image;
        }

        return $option_images;
    }

    /**
     * オプション別画像登録
     *
     * @param int $product_id
     * @param array $request_data
     * @throws \Exception
     */
    public function registerOptionImage(int $product_id, array $request_data)
    {
        Log::debug('registerOptionImage start : ' . print_r($request_data, true));

        try {
            DB::transaction(function () use ($product_id, $request_data) {
                foreach ($request_data['product_option_content_ids'] as $product_option_content_id) {

                    // 中間テーブル削除
                    ProductOptionContentsPicture::where('product_id', $product_id)->where('product_option_content_id',
                        $product_option_content_id)->delete();

                    for ($i = 0; $i < self::MAX_NUMBER_OF_REGISTER_IMAGE; $i++) {
                        // タグ名が"xxx_{product_option_content_id}_{index}"になっている
                        $suffix = $product_option_content_id . '_' . $i;
                        //$file_tag_name = 'image_' . $suffix;
                        $picture_id = (isset($request_data['picture_id_' . $suffix])) ? $request_data['picture_id_' . $suffix] : null;
                        if (!is_null($picture_id)) {
                            $this->registerOptionPicturePivot($product_id, $picture_id, $product_option_content_id,
                                $request_data['description_' . $suffix], $i);
                        }
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
     * 画像登録
     *
     * 画像テーブルへ登録して主キーを返却
     *
     * @param string $file_name
     * @return mixed
     */
    public function registerPicture(string $file_name)
    {
        $picture = new Picture();
        $picture->fill(['picture_path' => $file_name])->save();
        return $picture->picture_id;
    }

    /**
     * 商品画像中間テーブル登録
     *
     * @param int $product_id
     * @param int $picture_id
     * @param string|null $description
     * @param int $display_order
     */
    private function registerProductPicturePivot(
        int $product_id,
        int $picture_id,
        string $description = null,
        int $display_order
    ) {
        $data = array(
            'product_id' => $product_id,
            'picture_id' => $picture_id,
            'description' => $description,
            'display_order' => $display_order
        );
        $product_pictures = new ProductPictures();
        $product_pictures->fill($data)->save();
    }

    /**
     * 商品画像中間テーブル更新
     *
     * @param int $product_id
     * @param int $picture_id
     * @param string|null $description
     * @param int $display_order
     */
    private function updateProductPicturePivot(
        int $product_id,
        int $picture_id,
        string $description = null,
        int $display_order
    ) {
        ProductPictures::where('product_id', $product_id)
            ->where('picture_id', $picture_id)
            ->where('display_order', $display_order)
            ->update(['description' => $description]);
    }

    /**
     * カラー別画像中間テーブル登録
     *
     * @param int $product_id
     * @param int $picture_id
     * @param int $color_id
     * @param string|null $description
     * @param int $display_order
     */
    public function registerColorPicturePivot(
        int $product_id,
        int $picture_id,
        int $color_id,
        string $description = null,
        int $display_order
    ) {
        $data = array(
            'product_id' => $product_id,
            'picture_id' => $picture_id,
            'color_id' => $color_id,
            'description' => $description,
            'display_order' => $display_order
        );
        $product_color_picture = new ProductColorPictures();
        $product_color_picture->fill($data)->save();
    }

    /**
     * カラー別画像中間テーブル更新
     *
     * @param int $product_id
     * @param int $picture_id
     * @param int $color_id
     * @param int $display_order
     * @param string|null $description
     */
    public function updateColorPicturePivot(
        int $product_id,
        int $picture_id,
        int $color_id,
        int $display_order,
        string $description = null
    ) {
        ProductColorPictures::where('product_id', $product_id)
            ->where('color_id', $color_id)
            ->where('picture_id', $picture_id)
            ->where('display_order', $display_order)
            ->update(['description' => $description]);
    }

    /**
     * サイズ別画像中間テーブル登録
     *
     * @param int $product_id
     * @param int $picture_id
     * @param int $size_id
     * @param string|null $description : 説明文は未入力の可能性有り
     * @param int $display_order
     */
    public function registerSizePicturePivot(
        int $product_id,
        int $picture_id,
        int $size_id,
        string $description = null,
        int $display_order
    ) {
        $data = array(
            'product_id' => $product_id,
            'picture_id' => $picture_id,
            'size_id' => $size_id,
            'description' => $description,
            'display_order' => $display_order
        );
        $product_size_picture = new ProductSizePicture();
        $product_size_picture->fill($data)->save();
    }

    /**
     * オプション別画像中間テーブル登録
     *
     * @param int $product_id
     * @param int $picture_id
     * @param int $product_option_content_id
     * @param string|null $description
     * @param int $display_order
     */
    public function registerOptionPicturePivot(
        int $product_id,
        int $picture_id,
        int $product_option_content_id,
        string $description = null,
        int $display_order
    ) {
        $data = array(
            'product_id' => $product_id,
            'picture_id' => $picture_id,
            'product_option_content_id' => $product_option_content_id,
            'description' => $description,
            'display_order' => $display_order
        );
        $product_option_content_picture = new ProductOptionContentsPicture();
        $product_option_content_picture->fill($data)->save();
    }

    /**
     * サイズ別画像中間テーブル更新
     *
     * 原則説明文のみの更新となる
     *
     * @param int $product_id
     * @param int $picture_id
     * @param int $size_id
     * @param int $display_order
     * @param string|null $description
     */
    public function updateSizePicturePivot(
        int $product_id,
        int $picture_id,
        int $size_id,
        int $display_order,
        string $description = null
    ) {
        ProductSizePicture::where('product_id', $product_id)
            ->where('size_id', $size_id)
            ->where('picture_id', $picture_id)
            ->where('display_order', $display_order)
            ->update(['description' => $description]);
    }

    /**
     * オプション別画像中間テーブル更新
     *
     * @param int $product_id
     * @param int $picture_id
     * @param int $product_option_content_id
     * @param int $display_order
     * @param string|null $description
     */
    public function updateOptionPicturePivot(
        int $product_id,
        int $picture_id,
        int $product_option_content_id,
        int $display_order,
        string $description = null
    ) {
        ProductOptionContentsPicture::where('product_id', $product_id)
            ->where('product_option_content_id', $product_option_content_id)
            ->where('picture_id', $picture_id)
            ->where('display_order', $display_order)
            ->update(['description' => $description]);
    }

    public function findColorPicturePivotByProductIdColorIdDisplayOrder(
        int $product_id,
        int $color_id,
        int $display_order
    ) {
        $product_color_picture = new ProductColorPictures();
        return $product_color_picture
            ->where('product_id', $product_id)
            ->where('color_id', $color_id)
            ->where('display_order', $display_order)
            ->first();
    }
}
