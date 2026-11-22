<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TDDProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('products')->insert([
            'product_code' => '99999',
            'product_type_code' => 'standard',
            'product_name' => 'テスト商品01',
            'product_name_displayed_cart' => 'テスト商品',
            'product_category_id' => '1',
            'is_display' => '1',
            'maker_name' => 'テストメーカー',
            'product_summary' => 'これはテスト用の概要です',
            'picture_id' => 1,
            'discount_rate_id' => 1,
            'price' => '999999',
            'delivery_schedule_id' => '1',
            'history' => '2019/04/01 新規作成',
        ]);
    }
}