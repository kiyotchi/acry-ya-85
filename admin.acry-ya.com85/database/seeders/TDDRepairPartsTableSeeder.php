<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TDDRepairPartsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('repair_parts')->insert([
            'product_code' => '99999',
            'product_name' => 'テスト補修部品01',
            'product_name_displayed_cart' => 'カート表示用不要',
            'product_summary' => '概要',
            'thumbnail_picture_id' => null,
            'price' => 99999,
            'delivery_schedule_id' => 1,
        ]);
    }
}
