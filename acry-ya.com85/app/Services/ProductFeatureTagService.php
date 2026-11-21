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
	 * @param int $paging_count
	 * @param string $product_feature_tag_name
	 *
	 * @return mixed
	 */
    public function findByProductFeatureTagName(int $paging_count, string $product_feature_tag_name)
    {
        return ProductFeatureTag::where('product_feature_tag_name', 'LIKE', "%{$product_feature_tag_name}%")->paginate($paging_count);
    }

    /**
     * 全件検索
     */
    public function findAll()
    {
        return ProductFeatureTag::all();
    }

	/**
	 * 全件検索
	 */
	public function findAllPaging($paging_count)
	{
		return ProductFeatureTag::paginate($paging_count);
	}
}