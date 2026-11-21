<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TDDProductFeatureTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('product_feature_tags')->insert([
            'product_feature_tag_name' => 'tag_test_01',
            'product_feature_tag_content' => 'テスト01',
        ]);
        DB::table('product_feature_tags')->insert([
            'product_feature_tag_name' => 'tag_test_02',
            'product_feature_tag_content' => 'テスト02',
        ]);
    }
}
