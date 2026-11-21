<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SpecificationDetailIndividual extends Model
{
    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'specification_detail_individual_id';

    //
    protected $fillable = [
        'product_id',
        'is_default_display',
        'color_id',
        'size_id',
        'plate_thickness_id',
        'product_option_content_id',
        'product_code',
        'price',
        'product_name_displayed_cart',
        'delivery_schedule_id',
        'is_destination_valid',
        'is_delivery_charge_valid',
        'is_large_delivery_valid',
    ];

	public function productFeatureTag()
	{
		return $this->belongsToMany(ProductFeatureTag::class, 'specification_detail_individuals_product_feature_tags', 'specification_detail_individual_id',
			'product_feature_tag_id');
	}

}
