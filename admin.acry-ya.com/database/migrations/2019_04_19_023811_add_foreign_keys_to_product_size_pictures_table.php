<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToProductSizePicturesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('product_size_pictures', function(Blueprint $table)
		{
			$table->foreign('picture_id', 'product_size_pictures_ibfk_1')->references('picture_id')->on('pictures')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('product_id', 'product_size_pictures_ibfk_2')->references('product_id')->on('products')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('size_id', 'product_size_pictures_ibfk_3')->references('size_id')->on('sizes')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('product_size_pictures', function(Blueprint $table)
		{
			$table->dropForeign('product_size_pictures_ibfk_1');
			$table->dropForeign('product_size_pictures_ibfk_2');
			$table->dropForeign('product_size_pictures_ibfk_3');
		});
	}

}
