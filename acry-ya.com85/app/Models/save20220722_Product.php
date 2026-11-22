<?php

namespace App\Models;

use App\Services\ProductCategoryService;
use App\Services\TaxService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use \App\Models\Concerns\SerializesDatesLegacy;

	use SoftDeletes;

	const IS_DISPLAY_TRUE = 1;
	const NEW_FLAG_DAYS = 14; // 新着判定日数

	// 関連商品
	const RELATED_PRODUCT_OPTION_TAG = 0; // タグから表示
	const RELATED_PRODUCT_OPTION_FREE = 1; // 自由選択

	// 商品種別
	const  PRODUCT_TYPE_CODE_STANDARD = 'standard'; // 標準商品
	const  PRODUCT_TYPE_CODE_SEMI_ORDER = 'custom'; // セミオーダー

	// 主キーがlaravel規約と異なるため修正
	protected $primaryKey = 'product_id';

	# createメソッドでの書き込み許可
	protected $fillable = [
		'product_code',
		'product_type_code',
		'product_name',
		'product_name_displayed_cart',
		'product_category_id',
		'is_display',
		'maker_name',
		'product_summary',
		'thumbnail_path',
		'price',
		'discount_rate_id',
		'delivery_schedule_id',
		'delivery_supplementations',
		'related_product_option',
		'thumbnail_path',
		'customer_feedback_pc_word',
		'number_of_customer_feedback_pc_word',
		'customer_feedback_sp_word',
		'number_of_customer_feedback_sp_word',
		'is_sold_out_notice_valid',
		'sold_out_notice',
		'history',
		'memo',
	];

	public function getNewFlagAttribute()
	{
		$timestamp1 = strtotime($this->created_at); // 登録日
		$timestamp2 = time(); // 現在
		$second_diff = abs($timestamp2 - $timestamp1);
		$day_diff = $second_diff / ( 60 * 60 * 24 );

		return ( self::NEW_FLAG_DAYS >= $day_diff ) ? true : false;
	}

	public function getTaxPriceAttribute()
	{
		$tax_service = new TaxService();
		$tax = $tax_service->findNewRecord();

		return ( !empty($this->price) ) ? round($this->price * ( 100 + $tax->tax ) / 100) : null;
	}

	public function getMetaDescriptionAttribute()
	{
		return ( !empty($this->product_summary) ) ? mb_strimwidth(str_replace([
			"\r\n",
			"\r",
			"\n"
		], '', $this->product_summary), 0, 240, "...", 'UTF-8') : null;
	}

	public function getListDescriptionAttribute()
	{
		return ( !empty($this->product_summary) ) ? mb_strimwidth(str_replace([
			"\r\n",
			"\r",
			"\n"
		], '', $this->product_summary), 0, 200, "...", 'UTF-8') : null;
	}

	public function productCategory()
	{
		return $this->belongsTo('App\Models\ProductCategory', 'product_category_id');
	}

	public function getProductTopCategoryAttribute()
	{
		$product_category_service = new ProductCategoryService();

		return $product_category_service->getProductTopCategory($this->productCategory->product_category_id);
	}

	public function productSetting()
	{
		return $this->hasOne('App\Models\ProductSetting', 'product_id');
	}

	public function semiOrderHtmlContent()
	{
		return $this->hasOne('App\Models\SemiOrderHtmlContent', 'product_id');
	}

	public function picture()
	{
		return $this->belongsToMany('App\Models\Picture', 'product_pictures', 'product_id', 'picture_id')
			->withPivot('description')
			->withPivot('display_order')
			->orderBy('display_order', 'asc');
	}

	public function productHtmlPart()
	{
		return $this->belongsToMany('App\Models\ProductHtmlPart', 'products_product_html_parts', 'product_id',
			'product_html_part_id');
	}

	public function productSpecificationDetailIndividual()
	{
		return $this->hasMany('App\Models\SpecificationDetailIndividual', 'product_id');
	}

	public function colorPicture()
	{
		return $this->belongsToMany('App\Models\Picture', 'product_color_pictures', 'product_id', 'picture_id')
			->using(ProductColorPictures::class)
			->withPivot('color_id')
			->withPivot('description')
			->withPivot('display_order');
	}

	public function sizePicture()
	{
		return $this->belongsToMany('App\Models\Picture', 'product_size_pictures', 'product_id', 'picture_id')
			->using(ProductSizePicture::class)
			->withPivot('size_id')
			->withPivot('description')
			->withPivot('display_order');
	}

	public function optionPicture()
	{
		return $this->belongsToMany('App\Models\Picture', 'product_option_contents_pictures', 'product_id', 'picture_id')
			->using(ProductOptionContentsPicture::class)
			->withPivot('product_option_content_id')
			->withPivot('description')
			->withPivot('display_order');
	}

	public function productOption()
	{
		return $this->hasOne('App\Models\ProductOption', 'product_id');
	}

	public function productFeatureTag()
	{
		return $this->belongsToMany(ProductFeatureTag::class, 'products_product_feature_tags', 'product_id',
			'product_feature_tag_id');
	}

	public function productTag()
	{
		return $this->belongsToMany(Tag::class, 'products_tags', 'product_id', 'tag_id');
	}

	public function relatedProduct()
	{
		// 関連商品がタグから表示の場合
		if( $this->related_product_option === self::RELATED_PRODUCT_OPTION_TAG ) {
		}
		// 関連商品が自由選択の場合
		if( $this->related_product_option === self::RELATED_PRODUCT_OPTION_FREE ) {
			return $this->belongsToMany(Product::class, 'related_products', 'product_id', 'related_product_id')
                ->where('is_display', Product::IS_DISPLAY_TRUE )
                ->orderBy('related_product_id', 'asc');
		}
	}

	public function thumbnailPicture()
	{
		return $this->belongsTo(Picture::class, 'picture_id');
	}

	public function htmlParts()
	{
		return $this->belongsToMany(ProductHtmlPart::class, 'products_product_html_parts', 'product_id',
			'product_html_part_id');
	}
}
