<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TDDProductSettingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('product_settings')->insert([
            'product_id'=> 1,
            'picture_priority'=> 0,
            'is_color_valid'=> 1,
            'color_display_name'=> NULL,
            'color_group_id'=> 1,
            'is_size_valid'=> 1,
            'size_group_id'=> 1,
            'specify_size'=> 1,
            'specification_size_numerical_display'=> NULL,
            'specification_size_numerical_wh_limit'=> NULL,
            'specification_size_string_display'=> NULL,
            'free_input_width_display'=> NULL,
            'free_input_width_html_tag_id'=> NULL,
            'free_input_height_display'=> NULL,
            'free_input_height_html_tag_id'=> NULL,
            'free_input_depth_display'=> NULL,
            'free_input_depth_html_tag_id'=> NULL,
            'free_input_wdh_limit'=> NULL,
            'is_plate_thickness_valid'=> 1,
            'plate_thickness_display'=> NULL,
            'is_product_option_valid'=> 1,
            'is_destination_valid'=> 1,
            'is_quantity_valid'=> 1,
            'is_stock_valid'=> 1,
            'stock_html_tag_id'=> NULL,
            'is_delivery_charge_valid'=> 1,
            'is_large_delivery_valid'=> 1,
            'is_fax_order_valid'=> 1,
        ]);
    }
}
