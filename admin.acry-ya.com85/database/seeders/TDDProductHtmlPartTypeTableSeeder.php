<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

/**
 * TDD用の商品HTMLパーツ種別テーブルSeeder
 */
class TDDProductHtmlPartTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('product_html_part_types')->insert([
            'type_id' => 1,
            'product_html_part_type_name' => '商品情報選択項目 追加設定'
        ]);
        DB::table('product_html_part_types')->insert([
            'type_id' => 2,
            'product_html_part_type_name' => '商品特徴'
        ]);
        DB::table('product_html_part_types')->insert([
            'type_id' => 3,
            'product_html_part_type_name' => '活用事例'
        ]);
        DB::table('product_html_part_types')->insert([
            'type_id' => 4,
            'product_html_part_type_name' => '商品仕様'
        ]);
        DB::table('product_html_part_types')->insert([
            'type_id' => 5,
            'product_html_part_type_name' => '注意事項'
        ]);
        DB::table('product_html_part_types')->insert([
            'type_id' => 6,
            'product_html_part_type_name' => 'メーカー欠品情報'
        ]);
        DB::table('product_html_part_types')->insert([
            'type_id' => 7,
            'product_html_part_type_name' => '配送に関する注意事項'
        ]);
        DB::table('product_html_part_types')->insert([
            'type_id' => 8,
            'product_html_part_type_name' => '出荷目安について'
        ]);
        DB::table('product_html_part_types')->insert([
            'type_id' => 9,
            'product_html_part_type_name' => '補修部品'
        ]);
        DB::table('product_html_part_types')->insert([
            'type_id' => 10,
            'product_html_part_type_name' => 'headタグ追加HTML'
        ]);
    }
}
