<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToSpecificationDetailIndividualsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('specification_detail_individuals', function(Blueprint $table)
		{
			$table->foreign('product_id', 'specification_detail_individuals_ibfk_1')->references('product_id')->on('products')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('specification_detail_individuals', function(Blueprint $table)
		{
			$table->dropForeign('specification_detail_individuals_ibfk_1');
		});
	}

}
