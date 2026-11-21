<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductFeatureTagsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('product_feature_tags', function(Blueprint $table)
		{
			$table->bigInteger('product_feature_tag_id', true)->unsigned();
            $table->string('product_feature_tag_name_inside', 64);
			$table->string('product_feature_tag_name', 64);
			$table->text('product_feature_tag_content', 65535)->comment('HTMLで構成');
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
		Schema::drop('product_feature_tags');
	}

}
