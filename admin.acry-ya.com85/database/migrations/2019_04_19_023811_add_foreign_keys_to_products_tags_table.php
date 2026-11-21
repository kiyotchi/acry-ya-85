<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToProductsTagsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('products_tags', function(Blueprint $table)
		{
			$table->foreign('product_id', 'products_tags_ibfk_1')->references('product_id')->on('products')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('tag_id', 'products_tags_ibfk_2')->references('tag_id')->on('tags')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('products_tags', function(Blueprint $table)
		{
			$table->dropForeign('products_tags_ibfk_1');
			$table->dropForeign('products_tags_ibfk_2');
		});
	}

}
