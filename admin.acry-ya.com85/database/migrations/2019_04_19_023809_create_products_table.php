<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('products', function(Blueprint $table)
		{
			$table->bigInteger('product_id', true)->unsigned()->comment('商品ID');
			$table->string('product_code', 255)->nullable()->index('idx_products_01')->comment('商品コード');
			$table->string('product_type_code', 191)->comment('商品種別のcode
標準商品:standard
セミオーダー:custom');
			$table->string('product_name', 191)->comment('商品名');
			$table->string('product_name_displayed_cart')->nullable();
			$table->bigInteger('product_category_id')->unsigned()->index('product_category_id')->comment('商品カテゴリーのID');
			$table->boolean('is_display', 1)->comment('1:表示
0:非表示');
			$table->string('maker_name')->nullable()->comment('メーカー名');
			$table->text('product_summary', 65535)->nullable()->comment('商品概要');
            $table->bigInteger('picture_id')->nullable()->unsigned()->index('picture_id')->comment('サムネイル画像のID');
			$table->bigInteger('price')->nullable()->comment('定価');
			$table->bigInteger('discount_rate_id')->unsigned()->nullable()->index('discount_rate_id');
			$table->bigInteger('delivery_schedule_id')->nullable()->comment('発送予定がまとめられたCSVファイルの1行目の連番をセットする');
			$table->text('delivery_supplementations', 65535)->nullable();
			$table->boolean('related_product_option', 1)->nullable()->comment('0:タグから表示
1:自由選択');
			$table->string('customer_feedback_pc_word')->nullable();
			$table->bigInteger('number_of_customer_feedback_pc_word')->unsigned()->nullable();
			$table->string('customer_feedback_sp_word')->nullable();
			$table->bigInteger('number_of_customer_feedback_sp_word')->unsigned()->nullable();
			$table->boolean('is_sold_out_notice_valid', 1)->nullable()->comment('1:有効
0:無効');
			$table->string('sold_out_notice', 32)->nullable();
			$table->text('history', 65535)->nullable();
			$table->string('memo')->nullable();
			$table->softDeletes()->comment('論理削除用
日付が入っている場合は論理削除');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
			$table->index(['product_name','product_code','product_category_id','product_type_code'], 'uq_products_01');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('products');
	}

}
