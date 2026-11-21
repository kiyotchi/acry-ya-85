<?php

namespace App\Services;

use App\Models\ProductCategory;

class ProductCategoryService
{
	public $product_categories;

	/**
	 * 全件検索
	 */
	public function findAll()
	{
		$product_categories = ProductCategory::orderBy('display_order', 'asc')->get();;
		$categories = [];
		foreach( $product_categories as $row ) {
			$categories[$row->product_category_id] = $row;
		}
		return $categories;
	}

	/**
	 * 全件検索ページング
	 *
	 * @param $paging_count
	 *
	 * @return
	 */
	public function findAllPaging( $paging_count )
	{
		return ProductCategory::paginate($paging_count);
	}

	/**
	 * 最上位カテゴリ取得
	 *
	 * @param $product_category_id
	 * @param $product_categories
	 *
	 * @return mixed
	 */
	public function getProductTopCategory( $product_category_id )
	{
		if( empty($this->product_categories) ) {
			$this->product_categories = $this->findAll();
		}

		if( !empty($this->product_categories[$product_category_id]->parent_category_id) ) {
			return self::getProductTopCategory($this->product_categories[$product_category_id]->parent_category_id);
		} else {
			return $this->product_categories[$product_category_id];
		}
	}

	/**
	 * 下位カテゴリID取得
	 *
	 * @param $product_category_id
	 * @param $product_categories
	 *
	 * @return mixed
	 */
	public function getProductUnderCategoryIds( int $product_category_id )
	{
		if( empty($this->product_categories) ) {
			$this->product_categories = $this->findAll();
		}

		$category_ids = [];
		$category_ids[] = $product_category_id;
		foreach( $this->product_categories as $category ) {
			if( $category->parent_category_id === $product_category_id ) {
				$category_ids[] = $category->product_category_id;
			}
		}
		return $category_ids;
	}
}