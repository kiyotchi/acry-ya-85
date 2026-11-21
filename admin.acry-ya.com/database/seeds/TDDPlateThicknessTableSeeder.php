<?php

use Illuminate\Database\Seeder;

class TDDPlateThicknessTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('plate_thicknesses')->insert([
            'plate_thickness' => 10.5,
        ]);
        DB::table('plate_thicknesses')->insert([
            'plate_thickness' => 5.1,
        ]);
    }
}
