<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToRepairPartGroupsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('repair_part_groups', function(Blueprint $table)
		{
			$table->foreign('product_html_part_id', 'repair_part_groups_ibfk_1')->references('product_html_part_id')->on('product_html_parts')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('repair_part_groups', function(Blueprint $table)
		{
			$table->dropForeign('repair_part_groups_ibfk_1');
		});
	}

}
