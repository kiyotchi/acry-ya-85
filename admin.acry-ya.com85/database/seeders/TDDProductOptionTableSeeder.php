<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TDDProductOptionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('product_options')->insert([
            'product_id' => 1,
            'option_name' => 'test',
            'html_tag_name' => 'test_option_tag',
        ]);
    }
}
