<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRepairPartsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('repair_parts', function(Blueprint $table)
		{
			$table->bigInteger('repair_parts_id', true)->unsigned();
			$table->string('product_code', 255)->nullable()->comment('商品コード');
			$table->string('product_name', 191)->comment('商品名');
			$table->string('product_name_displayed_cart')->nullable();
			$table->text('product_summary', 65535)->nullable()->comment('商品概要');
			$table->bigInteger('thumbnail_picture_id')->unsigned()->nullable()->index('thumbnail_picture_id');
			$table->bigInteger('price')->nullable()->comment('定価');
			$table->bigInteger('delivery_schedule_id')->nullable()->comment('発送予定がまとめられたCSVファイルの1行目の連番をセットする');
			$table->integer('display_order')->unsigned()->nullable()->comment('表示順');
			$table->timestamps();
			$table->index(['product_code','product_name'], 'idx_repair_parts_01');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('repair_parts');
	}

}
