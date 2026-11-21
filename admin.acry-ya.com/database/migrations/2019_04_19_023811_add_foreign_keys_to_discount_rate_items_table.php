<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToDiscountRateItemsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('discount_rate_items', function(Blueprint $table)
		{
			$table->foreign('discount_rate_id', 'discount_rate_items_ibfk_1')->references('discount_rate_id')->on('discount_rates')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('discount_rate_items', function(Blueprint $table)
		{
			$table->dropForeign('discount_rate_items_ibfk_1');
		});
	}

}
