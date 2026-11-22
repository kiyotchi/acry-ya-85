<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductSetting extends Model
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'product_setting_id';

    # createメソッドでの書き込み許可
    protected $fillable = [
        'product_id',
        'picture_priority',
        'is_color_valid',
        'color_display_name',
        'color_group_id',
        'is_size_valid',
        'size_group_id',
        'specify_size',
        'specification_size_numerical_display',
        'specification_size_numerical_wh_limit',
        'specification_size_string_display',
        'free_input_width_display',
        'free_input_width_html_tag_id',
        'free_input_height_display',
        'free_input_height_html_tag_id',
        'is_free_input_depth_valid',
        'free_input_depth_display',
        'free_input_depth_html_tag_id',
        'free_input_wdh_limit',
        'is_plate_thickness_valid',
        'plate_thickness_display',
        'is_product_option_valid',
        'is_destination_valid',
        'is_quantity_valid',
        'is_stock_valid',
        'stock_html_tag_id',
        'is_delivery_charge_valid',
        'is_large_delivery_valid',
        'is_fax_order_valid',
    ];

	public function getCartParameterAddQuantityAttribute()
	{
		$cart_parameter_quantity = ( !empty($this->cart_parameter_quantity) ) ? $this->cart_parameter_quantity - 1 : 0 ;
		if( !empty($this->is_delivery_charge_valid) ) {
			$cart_parameter_quantity += 2;
		}
		return $cart_parameter_quantity;
	}
}
