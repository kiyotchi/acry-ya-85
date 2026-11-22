<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TDDProductOptionContentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('product_option_contents')->insert([
            'product_option_id' => 1,
            'value' => 'test1',
            'display_name' => 'テスト1',
        ]);
        DB::table('product_option_contents')->insert([
            'product_option_id' => 1,
            'value' => 'test2',
            'display_name' => 'テスト2',
        ]);
    }
}
