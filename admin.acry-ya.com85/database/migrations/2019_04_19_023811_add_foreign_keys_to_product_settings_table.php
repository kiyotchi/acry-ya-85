<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToProductSettingsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('product_settings', function(Blueprint $table)
		{
			$table->foreign('color_group_id', 'product_settings_ibfk_1')->references('color_group_id')->on('color_groups')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('product_id', 'product_settings_ibfk_2')->references('product_id')->on('products')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('size_group_id', 'product_settings_ibfk_3')->references('size_group_id')->on('size_groups')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('product_settings', function(Blueprint $table)
		{
			$table->dropForeign('product_settings_ibfk_1');
			$table->dropForeign('product_settings_ibfk_2');
			$table->dropForeign('product_settings_ibfk_3');
		});
	}

}
