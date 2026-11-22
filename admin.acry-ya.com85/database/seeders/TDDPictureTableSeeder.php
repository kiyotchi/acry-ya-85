<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TDDPictureTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('pictures')->insert([
            'directory' => null,
            'picture_path' => 'http://example.thumbnail.path/1',
        ]);
    }
}
