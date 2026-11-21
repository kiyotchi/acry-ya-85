<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToProductsRepairPartGroupsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('products_repair_part_groups', function(Blueprint $table)
		{
			$table->foreign('product_id', 'products_repair_part_groups_ibfk_1')->references('product_id')->on('products')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('repair_part_groups_id', 'products_repair_part_groups_ibfk_2')->references('repair_part_groups_id')->on('repair_part_groups')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('size_id', 'products_repair_part_groups_ibfk_3')->references('size_id')->on('sizes')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('products_repair_part_groups', function(Blueprint $table)
		{
			$table->dropForeign('products_repair_part_groups_ibfk_1');
			$table->dropForeign('products_repair_part_groups_ibfk_2');
			$table->dropForeign('products_repair_part_groups_ibfk_3');
		});
	}

}
