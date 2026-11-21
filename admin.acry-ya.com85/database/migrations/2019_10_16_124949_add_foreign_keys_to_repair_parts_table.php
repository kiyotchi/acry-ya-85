<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToRepairPartsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('repair_parts', function(Blueprint $table)
		{
			$table->foreign('thumbnail_picture_id', 'repair_parts_ibfk_1')->references('picture_id')->on('pictures')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('repair_parts', function(Blueprint $table)
		{
			$table->dropForeign('repair_parts_ibfk_1');
		});
	}

}
