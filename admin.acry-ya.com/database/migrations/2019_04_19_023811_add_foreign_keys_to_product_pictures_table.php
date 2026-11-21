<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToProductPicturesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('product_pictures', function(Blueprint $table)
		{
			$table->foreign('picture_id', 'product_pictures_ibfk_1')->references('picture_id')->on('pictures')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('product_id', 'product_pictures_ibfk_2')->references('product_id')->on('products')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('product_pictures', function(Blueprint $table)
		{
			$table->dropForeign('product_pictures_ibfk_1');
			$table->dropForeign('product_pictures_ibfk_2');
		});
	}

}
