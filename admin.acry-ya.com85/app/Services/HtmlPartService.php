<?php

namespace App\Services;

use Log;
use Illuminate\Database\QueryException;
use Illuminate\Support\Collection;

use App\Models\ProductHtmlPart;
use App\Models\ProductHtmlPartType;

use Illuminate\Support\Facades\DB;

/**
 * HTMLパーツサービスクラス
 */
class HtmlPartService
{

    /**
     * 商品HTMLパーツ全取得
     * 
     * @return array
     */
    public function findAllOfPart()
    {
        return ProductHtmlPart::all();
    }

    /**
     * 商品HTMLパーツ取得
     *
     * @param int $product_html_part_id
     * @return mixed
     */
    public function find(int $product_html_part_id)
    {
        return ProductHtmlPart::find($product_html_part_id);
    }

    /**
     * 商品HTMLパーツ取得
     * 
     * 商品HTMLパーツ種別IDで検索する
     * 
     * @param int $product_html_part_type_id
     * @return array
     */
    public function findByProductHtmlPartTypeId(int $product_html_part_type_id)
    {
        return ProductHtmlPart::where('product_html_part_type_id', $product_html_part_type_id)->get();
    }


    /**
     * 商品HTMLパーツリスト取得
     *
     * 20件分ページネーションで取得する
     *
     * @param int|null $html_part_type_id
     * @param string|null $html_part_title
     * @return mixed
     */
    public function findList(int $html_part_type_id = null, string $html_part_title = null, string $html_part = null)
    {
        $wheres = [];
        if (!is_null($html_part_type_id)) {
            array_push($wheres, ['product_html_part_type_id', $html_part_type_id]);
        }
        if (!is_null($html_part_title)) {
            array_push($wheres, ['part_title', 'LIKE', "%{$html_part_title}%"]);
        }
        if (!is_null($html_part)) {
            array_push($wheres, ['html_part', 'LIKE', "%{$html_part}%"]);
        }
        $html_parts = ProductHtmlPart::where($wheres)->paginate(20);
        return $html_parts;
    }


    /**
     * 商品HTMLパーツ登録
     *
     * @param array $insert_data
     * @return mixed
     * @throws \Exception
     */
    public function registerProductHtmlPart(array $insert_data)
    {
        try {
            return DB::transaction(function () use ($insert_data) {
                $product_html_part = new ProductHtmlPart();
                $product_html_part->fill($insert_data)->save();
                return $product_html_part->product_html_part_id;
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
     * 商品HTMLパーツ更新
     *
     * @param int $product_html_part_id
     * @param array $update_data
     * @throws \Exception
     */
    public function updateProductHtmlPart(int $product_html_part_id, array $update_data)
    {
        try {
            DB::transaction(function () use ($product_html_part_id, $update_data) {
                ProductHtmlPart::find($product_html_part_id)->fill($update_data)->save();
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
     * 商品HTMLパーツ削除
     *
     * @param int $product_html_part_id
     * @throws \Exception
     */
    public function deleteProductHtmlPart(int $product_html_part_id)
    {
        try {
            DB::transaction(function () use ($product_html_part_id) {
                ProductHtmlPart::find($product_html_part_id)->delete();
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
     * 商品HTMLパーツ種別取得
     *
     * @return ProductHtmlPartType[]|\Illuminate\Database\Eloquent\Collection
     */
    public function findAllOfHtmlPartType()
    {
        return ProductHtmlPartType::all();
    }

    /**
     * フィルタリング
     * 
     * 商品情報選択項目 追加設定で商品HTMLパーツをフィルタリング
     * 
     * @param Collection $html_parts
     * @return Collection
     */
    public function filterAddInformation(Collection $html_parts)
    {
        $filterd = $html_parts->filter(function($html_parts){
            return $html_parts['product_html_part_type_id'] === 1;
        });
        return $filterd;
    }

    /**
     * フィルタリング
     * 
     * 商品特徴で商品HTMLパーツをフィルタリング
     * 
     * @param Collection $html_parts
     * @return Collection
     */
    public function filterFeature(Collection $html_parts)
    {
        $filterd = $html_parts->filter(function($html_parts){
            return $html_parts['product_html_part_type_id'] === 2;
        });
        return $filterd;
    }

    /**
     * フィルタリング
     * 
     * 活用事例で商品HTMLパーツをフィルタリング
     * 
     * @param Collection $html_parts
     * @return Collection
     */
    public function filterCaseStudie(Collection $html_parts)
    {
        $filterd = $html_parts->filter(function($html_parts){
            return $html_parts['product_html_part_type_id'] === 3;
        });
        return $filterd;
    }

    /**
     * フィルタリング
     * 
     * 商品仕様で商品HTMLパーツをフィルタリング
     * 
     * @param Collection $html_parts
     * @return Collection
     */
    public function filterSpecification(Collection $html_parts)
    {
        $filterd = $html_parts->filter(function($html_parts){
            return $html_parts['product_html_part_type_id'] === 4;
        });
        return $filterd;
    }

    /**
     * フィルタリング
     * 
     * 注意事項で商品HTMLパーツをフィルタリング
     * 
     * @param Collection $html_parts
     * @return Collection
     */
    public function filterPrecaution(Collection $html_parts)
    {
        $filterd = $html_parts->filter(function($html_parts){
            return $html_parts['product_html_part_type_id'] === 5;
        });
        return $filterd;
    }

    /**
     * フィルタリング
     * 
     * メーカー欠品情報で商品HTMLパーツをフィルタリング
     * 
     * @param Collection $html_parts
     * @return Collection
     */
    public function filterMakerSoldOut(Collection $html_parts)
    {
        $filterd = $html_parts->filter(function($html_parts){
            return $html_parts['product_html_part_type_id'] === 6;
        });
        return $filterd;
    }

    /**
     * フィルタリング
     * 
     * 配送に関する注意事項で商品HTMLパーツをフィルタリング
     * 
     * @param Collection $html_parts
     * @return Collection
     */
    public function filterDeliveryPrecaution(Collection $html_parts)
    {
        $filterd = $html_parts->filter(function($html_parts){
            return $html_parts['product_html_part_type_id'] === 7;
        });
        return $filterd;
    }

    /**
     * フィルタリング
     * 
     * 出荷目安についてで商品HTMLパーツをフィルタリング
     * 
     * @param Collection $html_parts
     * @return Collection
     */
    public function filterDeliverySchedule(Collection $html_parts)
    {
        $filterd = $html_parts->filter(function($html_parts){
            return $html_parts['product_html_part_type_id'] === 8;
        });
        return $filterd;
    }

    /**
     * フィルタリング
     * 
     * 補修部品で商品HTMLパーツをフィルタリング
     * 
     * @param Collection $html_parts
     * @return Collection
     */
    public function filterRepairPart(Collection $html_parts)
    {
        $filterd = $html_parts->filter(function($html_parts){
            return $html_parts['product_html_part_type_id'] === 9;
        });
        return $filterd;
    }

    /**
     * フィルタリング
     * 
     * headタグ追加HTMLで商品HTMLパーツをフィルタリング
     * 
     * @param Collection $html_parts
     * @return Collection
     */
    public function filterAddHeadTag(Collection $html_parts)
    {
        $filterd = $html_parts->filter(function($html_parts){
            return $html_parts['product_html_part_type_id'] === 10;
        });
        return $filterd;
    }

	/**
	 * フィルタリング
	 *
	 * 補修部品-注意書きで商品HTMLパーツをフィルタリング
	 *
	 * @param Collection $html_parts
	 * @return Collection
	 */
	public function filterRepairPartNotice(Collection $html_parts)
	{
		$filterd = $html_parts->filter(function($html_parts){
			return $html_parts['product_html_part_type_id'] === 12;
		});
		return $filterd;
	}

	/**
	 * フィルタリング
	 *
	 * 関連コンテンツで商品HTMLパーツをフィルタリング
	 *
	 * @param Collection $html_parts
	 * @return Collection
	 */
	public function filterRelatedContent(Collection $html_parts)
	{
		$filterd = $html_parts->filter(function($html_parts){
			return $html_parts['product_html_part_type_id'] === 13;
		});
		//Log::debug($filterd);
		return $filterd;
	}
	
    /**
     * HTMLパーツを使用している商品を取得
     * 
     * HTMLパーツIDで検索する
     * 
     * @param int $product_html_part_id
     * @return array
     */
    public function findByHtmlPartUsedProducts(int $product_html_part_id)
    {
        $used_products = DB::table('products_product_html_parts')
            ->join('products', 'products_product_html_parts.product_id', '=', 'products.product_id')
            ->select('products.product_id', 'products.product_name','products.product_type_code')
            ->where('products_product_html_parts.product_html_part_id', '=', $product_html_part_id)
            ->orderBy('products.product_id', 'asc')
            ->get();
            //Log::debug($used_products);
        return $used_products;
    }
}