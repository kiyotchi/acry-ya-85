<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductHtmlPartTypesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('product_html_part_types', function(Blueprint $table)
		{
			$table->bigInteger('product_html_part_type_id', true)->unsigned();
			$table->bigInteger('type_id')->unique('type_id')->comment('1:商品情報選択項目 追加設定
2:商品特徴
3:活用事例
4:商品仕様
5:注意事項
6:メーカー欠品情報
7:配送に関する注意事項
8:出荷目安について
9:補修部品
10:headタグ追加HTML');
			$table->string('product_html_part_type_name')->nullable();
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
		Schema::drop('product_html_part_types');
	}

}
