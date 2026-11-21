<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToSizesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('sizes', function(Blueprint $table)
		{
			$table->foreign('size_group_id', 'sizes_ibfk_1')->references('size_group_id')->on('size_groups')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('sizes', function(Blueprint $table)
		{
			$table->dropForeign('sizes_ibfk_1');
		});
	}

}
