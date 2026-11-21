<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductSetting extends Model
{
    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'product_setting_id';

    # createメソッドでの書き込み許可
    protected $fillable = [
        'product_id',
        'picture_priority',
        'form_html_tag_id',
        'add_cart_function',
        'cart_parameter_quantity',
        'is_color_valid',
        'color_display_name',
        'color_html_tag_id',
        'color_group_id',
        'is_size_valid',
        'size_group_id',
        'specify_size',
        'specification_size_numerical_display',
        'specification_size_numerical_html_tag_id',
        'specification_size_numerical_wh_limit',
        'specification_size_string_display',
        'specification_size_string_html_tag_id',
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
        'plate_thickness_html_tag_id',
        'is_product_option_valid',
        'is_destination_valid',
        'destination_html_tag_id',
        'destination_initial',
        'is_quantity_valid',
        'quantity_html_tag_id',
        'price_calculation_function',
        'is_stock_valid',
        'stock_html_tag_id',
        'is_delivery_charge_valid',
        'delivery_private_html_tag_id',
        'delivery_private_price_html_tag_id',
        'delivery_faraway_html_tag_id',
        'delivery_faraway_price_html_tag_id',
        'is_large_delivery_valid',
        'large_delivery_html_tag_id',
        'is_fax_order_valid',
        'is_auto_calculation_valid',
    ];
}
