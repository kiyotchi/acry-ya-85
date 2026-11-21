<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductHtmlPartsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('product_html_parts', function(Blueprint $table)
		{
			$table->bigInteger('product_html_part_id', true)->unsigned();
			$table->bigInteger('product_html_part_type_id')->unsigned()->index('product_html_part_type_id');
			$table->string('part_title')->nullable();
			$table->text('html_part', 65535)->nullable()->comment('商品の
出荷目安の補足
商品情報選択項目
特徴
活用事例
商品仕様
注意事項
メーカー欠品情報
配送に関する注意事項
出荷目安について
欠品のお知らせ
補修部品
をHTMLで記述');
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
		Schema::drop('product_html_parts');
	}

}
