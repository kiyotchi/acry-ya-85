<?php

namespace App\Services;

use App\Models\ProductColorPictures;
use App\Models\ProductOptionContentsPicture;
use App\Models\ProductSizePicture;
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
        $specification_detail_service = new SpecificationDetailService();
        $options = $specification_detail_service->getOptionData($product_id);
        $option_images = [];
        foreach ($options as $option) {
            $option_image = [
                'product_option_content_id' => $option['product_option_content_id'],
                'option_name' => $option['option_name'],
                'image_data' => [],
            ];
            $image_data = [];
            foreach ($product->optionPicture as $item) {
                if ($option['product_option_content_id'] == $item['pivot']['product_option_content_id']) {
                    $image_data[] = $item;
                }
            }
            $option_image['image_data'] = $image_data;
            $option_images[] = $option_image;
        }
        return $option_images;
    }

    public function findColorPicturePivotByProductIdColorIdDisplayOrder(int $product_id, int $color_id, int $display_order)
    {
        $product_color_picture = new ProductColorPictures();
        return $product_color_picture
            ->where('product_id', $product_id)
            ->where('color_id', $color_id)
            ->where('display_order', $display_order)
            ->first();
    }
}
