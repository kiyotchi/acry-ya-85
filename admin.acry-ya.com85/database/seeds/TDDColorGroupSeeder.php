<?php

use Illuminate\Database\Seeder;

class TDDColorGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('color_groups')->insert([
            'color_group_name' => 'カラーグループ1'
        ]);
    }
}
