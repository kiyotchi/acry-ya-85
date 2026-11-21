<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSemiOrderHtmlContentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('semi_order_html_contents', function(Blueprint $table)
		{
			$table->bigInteger('semi_order_html_content_id', true)->unsigned();
			$table->bigInteger('product_id')->unsigned()->unique('product_id')->comment('商品テーブル主キー');
			$table->text('html', 16777215)->nullable()->comment('セミオーダーページのHTMLを記述');
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
		Schema::drop('semi_order_html_contents');
	}

}
