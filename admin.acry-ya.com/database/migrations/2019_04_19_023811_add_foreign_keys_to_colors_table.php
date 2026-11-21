<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToColorsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('colors', function(Blueprint $table)
		{
			$table->foreign('color_group_id', 'colors_ibfk_1')->references('color_group_id')->on('color_groups')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('colors', function(Blueprint $table)
		{
			$table->dropForeign('colors_ibfk_1');
		});
	}

}
