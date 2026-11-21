<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;

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
        'picture_id',
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
        'display_order',
    ];

    public function productCategory()
    {
        return $this->belongsTo('App\Models\ProductCategory', 'product_category_id');
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
            ->withPivot('display_order');
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

    public function productFeatureTag()
    {
        return $this->belongsToMany(ProductFeatureTag::class, 'products_product_feature_tags', 'product_id',
            'product_feature_tag_id');
    }

    public function relatedProduct()
    {
        return $this->hasMany(RelatedProduct::class, 'product_id');
    }

    public function thumbnailPicture()
    {
        return $this->belongsTo(Picture::class, 'picture_id');
    }

    public function productTag()
    {
        return $this->belongsToMany(Tag::class, 'products_tags', 'product_id', 'tag_id');
    }
}
