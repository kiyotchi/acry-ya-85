<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSizesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('sizes', function(Blueprint $table)
		{
			$table->bigInteger('size_id', true)->unsigned();
			$table->bigInteger('size_group_id')->unsigned()->index('size_group_id');
			$table->boolean('size_type')->comment('1:数値
2:文字列');
			$table->string('size', 64)->nullable()->comment('数値種別の場合
横×縦
の形式で設定

文字列の場合はそのまま設定');
			$table->bigInteger('width_size')->nullable();
			$table->bigInteger('height_size')->nullable();
			$table->softDeletes()->comment('論理削除用
日付が入っている場合は論理削除');
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
		Schema::drop('sizes');
	}

}
