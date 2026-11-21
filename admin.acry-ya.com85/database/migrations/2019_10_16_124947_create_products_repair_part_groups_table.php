<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductsRepairPartGroupsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('products_repair_part_groups', function(Blueprint $table)
		{
			$table->bigInteger('product_id')->unsigned()->comment('商品ID');
			$table->bigInteger('repair_part_groups_id')->unsigned()->nullable()->index('repair_part_groups_id');
			$table->bigInteger('size_id')->unsigned()->nullable()->index('size_id');
			$table->timestamps();
			$table->unique(['product_id','repair_part_groups_id'], 'uq_products_repair_part_groups_01');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('products_repair_part_groups');
	}

}
