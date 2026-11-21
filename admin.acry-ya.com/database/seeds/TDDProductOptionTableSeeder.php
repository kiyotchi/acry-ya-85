<?php

use Illuminate\Database\Seeder;

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
