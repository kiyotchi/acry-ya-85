<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TDDProductCategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('product_categories')->insert([
            'product_category_name' => 'アクリル板素材'
        ]);
        DB::table('product_categories')->insert([
            'product_category_name' => 'アクリルキャスト版'
        ]);
        DB::table('product_categories')->insert([
            'product_category_name' => 'アクリル低反射版'
        ]);
        DB::table('product_categories')->insert([
            'product_category_name' => 'アクリル集光版'
        ]);
    }
}
