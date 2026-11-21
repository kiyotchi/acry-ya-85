<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRepairPartGroupsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('repair_part_groups', function(Blueprint $table)
		{
			$table->bigInteger('repair_part_groups_id', true)->unsigned();
			$table->string('repair_part_group_name', 64);
			$table->bigInteger('product_html_part_id')->nullable()->unsigned()->index('product_html_part_id');
			$table->boolean('is_menu_display', 1)->nullable()->comment('1:有効
0:無効');
            $table->integer('display_order')->unsigned()->nullable()->comment('表示順');
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('repair_part_groups');
	}

}
