<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToProductHtmlPartsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('product_html_parts', function(Blueprint $table)
		{
			$table->foreign('product_html_part_type_id', 'product_html_parts_ibfk_1')->references('product_html_part_type_id')->on('product_html_part_types')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('product_html_parts', function(Blueprint $table)
		{
			$table->dropForeign('product_html_parts_ibfk_1');
		});
	}

}
