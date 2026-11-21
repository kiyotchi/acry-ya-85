<?php

use Illuminate\Database\Seeder;

class TDDSizeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // size_type = 1 = 数値
        // size_type = 2 = 文字列
        //
        DB::table('sizes')->insert([
            'size_group_id' => 1,
            'size_type' => '1',
            'size' => null,
            'width_size' => 10,
            'height_size' => 20,
        ]);
        DB::table('sizes')->insert([
            'size_group_id' => 1,
            'size_type' => '2',
            'size' => 'Mサイズ',
            'width_size' => null,
            'height_size' => null,
        ]);
        DB::table('sizes')->insert([
            'size_group_id' => 2,
            'size_type' => '2',
            'size' => 'Lサイズ',
            'width_size' => null,
            'height_size' => null,
        ]);
    }
}
