<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TDDColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('colors')->insert([
            'color_group_id' => 1,
            'color_name' => 'test color 1',
        ]);
        DB::table('colors')->insert([
            'color_group_id' => 1,
            'color_name' => 'test color 2',
        ]);
    }
}
