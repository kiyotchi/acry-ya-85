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
	const PART_TYPE_ID_ADD_INFORMATION = 1; // 選択項目追加設定
	const PART_TYPE_ID_FEATURE = 2; // 商品特長
	const PART_TYPE_ID_CASE_STUDY = 3; // 活用事例
	const PART_TYPE_ID_SPECIFICATION = 4; // 商品仕様
	const PART_TYPE_ID_PRECAUTION = 5; // 注意事項
	const PART_TYPE_ID_MAKER_SOLD_OUT = 6; // メーカー欠品情報
	const PART_TYPE_ID_DELIVERY_PRECAUTION = 7; // 配送に関する注意事項
	const PART_TYPE_ID_DELIVERY_SCHEDULE = 8; // 出荷目安について
	const PART_TYPE_ID_REPAIR_PART = 9; // 補修部品
	const PART_TYPE_ID_ADD_HEAD_TAG = 10; // headタグ追加HTML
	const PART_TYPE_ID_REPAIR_PART_NOTICE = 12; // 補修部品 - 注意書き
	const PART_TYPE_ID_RELATED_CONTENT = 13; // 関連コンテンツ

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
	 * @param int $paging_count
	 * @param int|null $html_part_type_id
	 * @param string|null $html_part_title
	 *
	 * @return mixed
	 */
    public function findList(int $paging_count, ?int $html_part_type_id = null, ?string  $html_part_title = null)
    {
        $wheres = [];
        if (!is_null($html_part_type_id)) {
            array_push($wheres, ['product_html_part_type_id', $html_part_type_id]);
        }
        if (!is_null($html_part_title)) {
            array_push($wheres, ['part_title', 'LIKE', "%{$html_part_title}%"]);
        }
        $html_parts = ProductHtmlPart::where($wheres)->paginate($paging_count);
        return $html_parts;
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
		return $filterd;
	}
}