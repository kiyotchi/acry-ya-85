<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRepairPartGroupsRepairPartsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('repair_part_groups_repair_parts', function(Blueprint $table)
		{
			$table->bigInteger('repair_part_groups_id')->unsigned();
			$table->bigInteger('repair_parts_id')->unsigned()->index('repair_parts_id');
			$table->timestamps();
			$table->unique(['repair_part_groups_id','repair_parts_id'], 'uq_repair_part_groups_repair_parts_01');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('repair_part_groups_repair_parts');
	}

}
