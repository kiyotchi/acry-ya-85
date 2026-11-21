<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToProductOptionContentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('product_option_contents', function(Blueprint $table)
		{
			$table->foreign('product_option_id', 'product_option_contents_ibfk_1')->references('product_option_id')->on('product_options')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('product_option_contents', function(Blueprint $table)
		{
			$table->dropForeign('product_option_contents_ibfk_1');
		});
	}

}
