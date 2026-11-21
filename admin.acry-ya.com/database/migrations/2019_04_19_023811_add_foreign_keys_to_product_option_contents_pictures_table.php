<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToProductOptionContentsPicturesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('product_option_contents_pictures', function(Blueprint $table)
		{
			$table->foreign('picture_id', 'product_option_contents_pictures_ibfk_1')->references('picture_id')->on('pictures')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('product_id', 'product_option_contents_pictures_ibfk_2')->references('product_id')->on('products')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('product_option_content_id', 'product_option_contents_pictures_ibfk_3')->references('product_option_content_id')->on('product_option_contents')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('product_option_contents_pictures', function(Blueprint $table)
		{
			$table->dropForeign('product_option_contents_pictures_ibfk_1');
			$table->dropForeign('product_option_contents_pictures_ibfk_2');
			$table->dropForeign('product_option_contents_pictures_ibfk_3');
		});
	}

}
