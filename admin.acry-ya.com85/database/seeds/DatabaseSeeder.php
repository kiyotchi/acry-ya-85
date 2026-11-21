<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        # 外部Key制約があるためseederを記述する順番には注意すること
        $this->call([
            // TODO: テスト用なので切り替えること
            AdminUserTableSeeder::class,
            TDDProductCategoryTableSeeder::class,
            TDDProductHtmlPartTypeTableSeeder::class,
            TDDProductHtmlPartTableSeeder::class,
            TDDDiscountRateSeeder::class,
            TDDDiscountRateItemSeeder::class,
            TDDPictureTableSeeder::class,
            TDDProductTableSeeder::class,
            TDDColorGroupSeeder::class,
            TDDColorSeeder::class,
            TDDPlateThicknessTableSeeder::class,
            TDDProductOptionTableSeeder::class,
            TDDProductOptionContentTableSeeder::class,
            TDDSizeGroupTableSeeder::class,
            TDDSizeTableSeeder::class,
            TDDSpecificationDetailTableSeeder::class,
            TDDProductSettingTableSeeder::class,
        ]);
    }
}
