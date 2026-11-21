<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductOptionContentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('product_option_contents', function(Blueprint $table)
		{
			$table->bigInteger('product_option_content_id', true)->unsigned();
			$table->bigInteger('product_option_id')->unsigned()->index('product_option_id');
			$table->string('value')->nullable()->comment('タグのvalueへセットする値');
			$table->string('display_name')->nullable();
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
		Schema::drop('product_option_contents');
	}

}
