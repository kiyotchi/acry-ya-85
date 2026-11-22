<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TDDDiscountRateItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('discount_rate_items')->insert([
            'discount_rate_id' => 1,
            'number_of_lower_limit' => '100',
            'number_of_upper_limit' => '200',
            'discount_rate' => '10',
        ]);
    }
}
