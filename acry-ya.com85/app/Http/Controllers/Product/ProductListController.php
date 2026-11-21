<?php

namespace App\Http\Controllers\Product;

use Log;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Services\ProductService;
use App\Services\ProductCategoryService;
use App\Services\ProductTypeService;

use App\Models\Review;

/**
 * 商品一覧
 *
 * Class ProductListController
 *
 * @package App\Http\Controllers\Product
 */
class ProductListController extends Controller
{
	//pagenate指定用
	const PAGEING_COUNT = 50;

	private $product_service;
	private $product_category_service;
	private $product_type_service;

	private $product_cateogries;

	/**
	 * ProductListController constructor.
	 *
	 * @param ProductService $product_service
	 * @param ProductCategoryService $product_category_service
	 * @param ProductTypeService $product_type_service
	 */
	public function __construct(
		ProductService $product_service,
		ProductCategoryService $product_category_service,
		ProductTypeService $product_type_service
	)
	{
		$this->product_service = $product_service;
		$this->product_category_service = $product_category_service;
		$this->product_type_service = $product_type_service;

		// 画面表示用にカテゴリマスタ、商品種別マスタ検索
		$this->product_cateogries = $this->product_category_service->findAll();
	}

	/**
	 * 商品一覧表示
	 *
	 * @param Request $request
	 *
	 * @return mixed
	 */
	public function index( Request $request )
	{
		//Log::debug($request->all());

		if( !empty($request->category_id) ) {
			if( !is_numeric($request->category_id) ) {
				abort('404');
			}
			$category_id = $request->category_id;
			$under_category_ids = $this->product_category_service->getProductUnderCategoryIds($category_id);
		} else {
			$category_id = null;
			$under_category_ids = [];
		}

		// 商品マスタ検索
		// 商品検索して表示
		$products = $this->product_service->findList(self::PAGEING_COUNT, null, null,
			$under_category_ids, null);
		
		// レビューリスト
		$reviewList = $this->getReviewInfo( $products );
		

		if( !empty($this->product_cateogries[$category_id]) ) {
			$title = $this->product_cateogries[$category_id]->product_category_name;
			$list_summary = $this->product_cateogries[$category_id]->list_summary;
		} else {
			$title = '全商品';
			$list_summary = null;
		}
		$not_found_message = '商品がありません。';


		return view('products.list')
			->with('title', $title)
			->with('list_summary', $list_summary)
			->with('not_found_message', $not_found_message)
			->with('product_cateogries', $this->product_cateogries)
			->with('product_name', $request->product_name)
			->with('reviewList', $reviewList )
			->with('products', $products);
	}
	
	/**
	 * レビュー取得
	 * @param array $products
	 */
	private function getReviewInfo( $products ){
		$reviewList = [];
		foreach( $products as $product ){
			if( $product->customer_feedback_pc_word != '' ){
				if( ! isset( $reviewList[ $product->customer_feedback_pc_word ] ) ){
					$reviewList[ $product->customer_feedback_pc_word ] = Review::pageInfoList( $product->customer_feedback_pc_word );
				}
			}
		}
		return $reviewList;
	}


	/**
	 * 商品検索結果
	 *
	 * @param Request $request
	 *
	 * @return mixed
	 */
	public function search( Request $request )
	{
		Log::debug($request->all());

		$category_id = $request->cat;
		$search_word = $request->word;

		if( !empty($category_id) ) {
			$under_category_ids = $this->product_category_service->getProductUnderCategoryIds($category_id);
		} else {
			$category_id = null;
			$under_category_ids = [];
		}

		// 商品マスタ検索
		// 商品検索して表示
        $search_words = [];
        if (!empty($search_word)) {
            // 全角スペース区切りでフリーワード入力された場合を考慮して半角に変換
            $convert_search_word = mb_convert_kana($search_word, 's', 'UTF-8');
            $search_words = explode(' ', $convert_search_word);
        }
		$products = $this->product_service->findLitByFreeWord(self::PAGEING_COUNT, $search_words, $under_category_ids);

		// レビューリスト
		$reviewList = $this->getReviewInfo( $products );


		if( !empty($search_word) ) {
			$title = '"' . $search_word . '"の検索結果';
			$list_summary = null;
		} elseif( !empty($this->product_cateogries[$category_id]) ) {
			$title = $this->product_cateogries[$category_id]->product_category_name;
			$list_summary = $this->product_cateogries[$category_id]->list_summary;
		} else {
			$title = '検索結果';
			$list_summary = null;
		}
		$not_found_message = '"' . $search_word . '" に該当する検索結果は見つかりませんでした。';

		return view('products.list')
			->with('title', $title)
			->with('list_summary', $list_summary)
			->with('not_found_message', $not_found_message)
			->with('product_cateogries', $this->product_cateogries)
			->with('product_name', $request->product_name)
			->with('reviewList', $reviewList )
			->with('products', $products);
	}
}
