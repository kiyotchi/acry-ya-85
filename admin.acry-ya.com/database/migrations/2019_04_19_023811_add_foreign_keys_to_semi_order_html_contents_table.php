<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToSemiOrderHtmlContentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('semi_order_html_contents', function(Blueprint $table)
		{
			$table->foreign('product_id', 'semi_order_html_contents_ibfk_1')->references('product_id')->on('products')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('semi_order_html_contents', function(Blueprint $table)
		{
			$table->dropForeign('semi_order_html_contents_ibfk_1');
		});
	}

}
