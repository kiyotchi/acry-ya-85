<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToProductsMaterialsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('products_materials', function(Blueprint $table)
		{
			$table->foreign('material_id', 'products_materials_ibfk_1')->references('material_id')->on('materials')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('product_id', 'products_materials_ibfk_2')->references('product_id')->on('products')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('products_materials', function(Blueprint $table)
		{
			$table->dropForeign('products_materials_ibfk_1');
			$table->dropForeign('products_materials_ibfk_2');
		});
	}

}
