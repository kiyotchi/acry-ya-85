<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDiscountRateItemsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('discount_rate_items', function(Blueprint $table)
		{
			$table->bigInteger('discount_rate_item_id', true)->unsigned();
			$table->bigInteger('discount_rate_id')->unsigned()->index('discount_rate_id');
			$table->bigInteger('number_of_lower_limit')->unsigned()->nullable();
			$table->bigInteger('number_of_upper_limit')->unsigned()->nullable();
			$table->bigInteger('discount_rate')->unsigned()->nullable();
			$table->softDeletes()->comment('論理削除用
日付が入っている場合は論理削除');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('discount_rate_items');
	}

}
