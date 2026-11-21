<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToProductsProductFeatureTagsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('products_product_feature_tags', function(Blueprint $table)
		{
			$table->foreign('product_id', 'products_product_feature_tags_ibfk_1')->references('product_id')->on('products')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('product_feature_tag_id', 'products_product_feature_tags_ibfk_2')->references('product_feature_tag_id')->on('product_feature_tags')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('products_product_feature_tags', function(Blueprint $table)
		{
			$table->dropForeign('products_product_feature_tags_ibfk_1');
			$table->dropForeign('products_product_feature_tags_ibfk_2');
		});
	}

}
