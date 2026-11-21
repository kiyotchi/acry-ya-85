<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSpecificationDetailIndividualsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('specification_detail_individuals', function(Blueprint $table)
		{
			$table->bigInteger('specification_detail_individual_id', true);
			$table->bigInteger('product_id')->unsigned()->index('idx_specification_detail_individuals_01')->comment('商品ID');
			$table->boolean('is_default_display', 1)->nullable()->comment('1:表示
0:非表示');
			$table->bigInteger('color_id')->unsigned()->nullable()->index('idx_specification_detail_individuals_02');
			$table->bigInteger('size_id')->unsigned()->nullable()->index('idx_specification_detail_individuals_03');
			$table->bigInteger('plate_thickness_id')->unsigned()->nullable()->index('idx_specification_detail_individuals_04');
			$table->bigInteger('product_option_content_id')->unsigned()->nullable();
			$table->string('product_code', 255)->comment('商品コード');
			$table->bigInteger('price')->nullable()->comment('定価');
			$table->string('product_name_displayed_cart')->nullable();
			$table->bigInteger('delivery_schedule_id')->nullable()->comment('発送予定がまとめられたCSVファイルの1行目の連番をセットする');
			$table->boolean('is_destination_valid', 1)->nullable()->comment('1:有効
0:無効');
			$table->boolean('is_delivery_charge_valid', 1)->nullable()->comment('1:有効
0:無効');
            $table->integer('delivery_private_price')->unsigned()->nullable();
            $table->integer('delivery_faraway_price')->unsigned()->nullable();
			$table->boolean('is_large_delivery_valid', 1)->nullable()->comment('1:有効
0:無効');
			$table->string('memo')->nullable();
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
		Schema::drop('specification_detail_individuals');
	}

}
