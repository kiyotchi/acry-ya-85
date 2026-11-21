<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminUserTableSeeder extends Seeder
{
    /**
     *
     * 管理者用のUsersテーブルデータ作成
     *
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert([
            'name' => 'admin_plaidea',
            'email' => 'system@email.com',
            'password' => bcrypt('plaadmin00'),
            'api_token' => hash('sha256', 'admin_plaidea'),
        ]);

        DB::table('users')->insert([
            'name' => 'admin_acryya',
            'email' => 'system01@email.com',
            'password' => bcrypt('acryya00'),
            'api_token' => hash('sha256', 'admin_acryya'),
        ]);
    }
}