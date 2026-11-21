<?php

use Illuminate\Database\Seeder;

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
