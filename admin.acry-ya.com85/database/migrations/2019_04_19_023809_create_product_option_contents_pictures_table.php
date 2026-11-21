<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductOptionContentsPicturesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('product_option_contents_pictures', function(Blueprint $table)
		{
			$table->bigInteger('product_id')->unsigned()->nullable()->comment('商品ID');
			$table->bigInteger('product_option_content_id')->unsigned()->index('product_option_content_id');
			$table->bigInteger('picture_id')->unsigned()->index('picture_id');
			$table->string('description')->nullable();
			$table->bigInteger('display_order')->nullable();
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
			$table->unique(['product_id','product_option_content_id','picture_id', 'display_order'], 'uq_product_option_contents_pictures_01');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('product_option_contents_pictures');
	}

}
