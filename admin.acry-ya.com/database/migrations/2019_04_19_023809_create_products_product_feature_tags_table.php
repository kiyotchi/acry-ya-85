<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductsProductFeatureTagsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('products_product_feature_tags', function(Blueprint $table)
		{
			$table->bigInteger('product_id')->unsigned()->comment('商品ID');
			$table->bigInteger('product_feature_tag_id')->unsigned()->index('product_feature_tag_id');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
			$table->unique(['product_id','product_feature_tag_id'], 'uq_products_product_feature_tags_01');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('products_product_feature_tags');
	}

}
