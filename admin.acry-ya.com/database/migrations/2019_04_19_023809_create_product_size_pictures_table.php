<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductSizePicturesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('product_size_pictures', function(Blueprint $table)
		{
			$table->bigInteger('product_id')->unsigned()->comment('商品ID');
			$table->bigInteger('picture_id')->unsigned()->index('picture_id');
			$table->bigInteger('size_id')->unsigned()->index('size_id');
			$table->string('description')->nullable();
			$table->bigInteger('display_order')->nullable();
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
			$table->unique(['product_id','picture_id','size_id', 'display_order'], 'uq_product_size_pictures_01');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('product_size_pictures');
	}

}
