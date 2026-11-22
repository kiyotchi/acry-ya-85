<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TDDSizeGroupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('size_groups')->insert([
            'size_group_name' => 'test group'
        ]);
        DB::table('size_groups')->insert([
            'size_group_name' => 'test group 2'
        ]);
    }
}
