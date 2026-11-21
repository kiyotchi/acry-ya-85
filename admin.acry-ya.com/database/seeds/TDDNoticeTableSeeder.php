<?php

use Illuminate\Database\Seeder;

class TDDNoticeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('notices')->insert([
            'notice_id' => 1,
            'notice' => 'テストです。'
        ]);
    }
}
