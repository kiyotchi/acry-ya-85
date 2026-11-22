<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TDDSpecificationDetailTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('specification_detail_individuals')->insert([
            'product_id' => '1',
            'is_default_display' => 1,
            'color_id' => '1',
            'size_id' => '1',
            'plate_thickness_id' => '1',
            'product_option_content_id' => '1',
            'product_code' => '1111',
            'price' => '9999',
            'product_name_displayed_cart' => 'テスト',
            'delivery_schedule_id' => '1',
            'is_destination_valid' => '1',
            'is_delivery_charge_valid' => '1',
            'is_large_delivery_valid' => '1',
            'memo' => 'テスト',
        ]);
    }
}
