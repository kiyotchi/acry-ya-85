<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToProductsProductHtmlPartsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('products_product_html_parts', function(Blueprint $table)
		{
			$table->foreign('product_id', 'products_product_html_parts_ibfk_1')->references('product_id')->on('products')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('product_html_part_id', 'products_product_html_parts_ibfk_2')->references('product_html_part_id')->on('product_html_parts')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('products_product_html_parts', function(Blueprint $table)
		{
			$table->dropForeign('products_product_html_parts_ibfk_1');
			$table->dropForeign('products_product_html_parts_ibfk_2');
		});
	}

}
