<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TDDMaterialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('materials')->insert([
            'material_code' => 'test003',
            'material_name' => '素材03',
            'maker_name' => 'メーカー03',
            'cost_price' => '3000',
            'square_meter_unit_price' => '6000',
            'color_id' => '3',
            'width_size' => '300',
            'height_size' => '600',
            'plate_thickness_id' => '2',
            'history' => 'テスト03です。'
        ]);
        DB::table('materials')->insert([
            'material_code' => 'test004',
            'material_name' => '素材04',
            'maker_name' => 'メーカー04',
            'cost_price' => '1400',
            'square_meter_unit_price' => '2400',
            'color_id' => '4',
            'width_size' => '400',
            'height_size' => '800',
            'plate_thickness_id' => '1',
            'history' => 'テスト04です。'
        ]);
    }
}
