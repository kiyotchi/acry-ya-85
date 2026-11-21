<?php

namespace App\Services;

use Log;
use App\Models\ProductFeatureTag;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;

/**
 * 商品特徴タグサービスクラス
 *
 * Class ProductFeatureTagService
 * @package App\Services
 */
class ProductFeatureTagService
{

    /**
     * 主キー検索
     *
     * @param $product_feature_tag_id
     * @return mixed
     */
    public function findByProductFeatureTagId($product_feature_tag_id)
    {
        return ProductFeatureTag::find($product_feature_tag_id);
    }

    /**
     * 商品特徴タグ名検索
     *
     * @param string $product_feature_tag_name
     * @return mixed
     */
    public function findByProductFeatureTagName(string $product_feature_tag_name)
    {
        return ProductFeatureTag::where('product_feature_tag_name', 'LIKE', "%{$product_feature_tag_name}%")->paginate(20);
    }

    /**
     * 全件検索
     */
    public function findAll()
    {
        return ProductFeatureTag::all();
    }

    /**
     * 全件検索（ページング）
     */
    public function findAllPaging($paging_count)
    {
        return ProductFeatureTag::paginate($paging_count);
    }

    /**
     * 商品特徴タグ登録
     *
     * @param $insert_data
     * @return mixed
     * @throws \Exception
     */
    public function register($insert_data)
    {
        try {
            return DB::transaction(function () use ($insert_data) {
                $product_feature_tag = new ProductFeatureTag();
                $product_feature_tag->fill($insert_data)->save();
                return $product_feature_tag->product_feature_tag_id;
            });
        }catch (QueryException $e) {
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
     * 商品特徴タグ編集
     *
     * @param $update_data
     * @throws \Exception
     */
    public function update($update_data)
    {
        try {
            DB::transaction(function () use ($update_data) {
                ProductFeatureTag::find($update_data["product_feature_tag_id"])->fill($update_data)->save();
            });
        }catch (QueryException $e) {
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
     * 商品特徴タグ削除
     *
     * @param $product_feature_tag_id
     * @throws \Exception
     */
    public function delete($product_feature_tag_id)
    {
        try {
            DB::transaction(function () use ($product_feature_tag_id) {
                ProductFeatureTag::find($product_feature_tag_id)->delete();
            });
        }catch (QueryException $e) {
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
     * 商品タグを使用している商品を取得
     * 
     * 商品タグで検索する
     * 
     * @param int $product_feature_tag_id
     * @return array
     */
    public function findByProductFeatureTagsUsedProducts(int $product_feature_tag_id)
    {
        $used_products = DB::table('products_product_feature_tags')
            ->join('products', 'products_product_feature_tags.product_id', '=', 'products.product_id')
            ->select('products.product_id', 'products.product_name','products.product_type_code')
            ->where('products_product_feature_tags.product_feature_tag_id', '=', $product_feature_tag_id)
            ->orderBy('products.product_id', 'asc')
            ->get();
            //Log::debug($used_products);
        return $used_products;
    }
}