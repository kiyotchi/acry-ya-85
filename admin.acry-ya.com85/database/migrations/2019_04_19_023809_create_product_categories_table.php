<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductCategoriesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('product_categories', function(Blueprint $table)
		{
			$table->bigInteger('product_category_id', true)->unsigned()->comment('商品カテゴリーのID');
			$table->bigInteger('parent_category_id')->unsigned()->nullable()->index('idx_product_categories_01');
			$table->string('product_category_name')->nullable()->comment('商品カテゴリーの名称');
			$table->bigInteger('display_order')->nullable();
			$table->text('link_url', 65535)->nullable();
			$table->string('thumbnail_path')->nullable()->comment('サムネイル画像へのパス');
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
		Schema::drop('product_categories');
	}

}
