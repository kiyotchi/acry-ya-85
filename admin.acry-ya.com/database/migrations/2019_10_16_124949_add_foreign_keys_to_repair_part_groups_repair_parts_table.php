<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToRepairPartGroupsRepairPartsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('repair_part_groups_repair_parts', function(Blueprint $table)
		{
			$table->foreign('repair_parts_id', 'repair_part_groups_repair_parts_ibfk_1')->references('repair_parts_id')->on('repair_parts')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('repair_part_groups_id', 'repair_part_groups_repair_parts_ibfk_2')->references('repair_part_groups_id')->on('repair_part_groups')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('repair_part_groups_repair_parts', function(Blueprint $table)
		{
			$table->dropForeign('repair_part_groups_repair_parts_ibfk_1');
			$table->dropForeign('repair_part_groups_repair_parts_ibfk_2');
		});
	}

}
