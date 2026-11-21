<?php

use Illuminate\Database\Seeder;

/**
 * TDD用の商品HTMLパーツテーブルSeeder
 */
class TDDProductHtmlPartTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('product_html_parts')->insert([
            'product_html_part_type_id' => 1,
            'part_title' => '商品情報選択項目 追加設定',
            'html_part' => '<div><p>テスト1 商品情報選択項目 追加設定</p></div>',
        ]);
        DB::table('product_html_parts')->insert([
            'product_html_part_type_id' => 1,
            'part_title' => '商品情報選択項目 追加設定',
            'html_part' => '<div><p>テスト2 商品情報選択項目 追加設定</p></div>',
        ]);
        DB::table('product_html_parts')->insert([
            'product_html_part_type_id' => 2,
            'part_title' => '商品特徴',
            'html_part' => '<div><p>テスト 商品特徴</p></div>',
        ]);
        DB::table('product_html_parts')->insert([
            'product_html_part_type_id' => 3,
            'part_title' => '活用事例',
            'html_part' => '<div><p>テスト 活用事例</p></div>',
        ]);
        DB::table('product_html_parts')->insert([
            'product_html_part_type_id' => 4,
            'part_title' => '商品仕様',
            'html_part' => '<div><p>テスト 商品仕様</p></div>',
        ]);
        DB::table('product_html_parts')->insert([
            'product_html_part_type_id' => 5,
            'part_title' => '注意事項',
            'html_part' => '<div><p>テスト 注意事項</p></div>',
        ]);
        DB::table('product_html_parts')->insert([
            'product_html_part_type_id' => 6,
            'part_title' => 'メーカー欠品情報',
            'html_part' => '<div><p>テスト メーカー欠品情報</p></div>',
        ]);
        DB::table('product_html_parts')->insert([
            'product_html_part_type_id' => 7,
            'part_title' => '配送に関する注意事項',
            'html_part' => '<div><p>テスト 配送に関する注意事項</p></div>',
        ]);
        DB::table('product_html_parts')->insert([
            'product_html_part_type_id' => 8,
            'part_title' => '出荷目安について',
            'html_part' => '<div><p>テスト 出荷目安について</p></div>',
        ]);
        DB::table('product_html_parts')->insert([
            'product_html_part_type_id' => 9,
            'part_title' => '補修部品',
            'html_part' => '<div><p>テスト 補修部品</p></div>',
        ]);
        DB::table('product_html_parts')->insert([
            'product_html_part_type_id' => 10,
            'part_title' => 'headタグ追加HTML',
            'html_part' => '<div><p>テスト headタグ追加HTML</p></div>',
        ]);
    }
}
