<?php

use Illuminate\Database\Seeder;

class TDDTaxTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('taxes')->insert([
            'tax_id' => 1,
            'tax' => '8',
            'tax_change_date' => new DateTime()
        ]);
    }
}
