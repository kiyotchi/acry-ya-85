<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePlateThicknessesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('plate_thicknesses', function(Blueprint $table)
		{
			$table->bigInteger('plate_thickness_id', true)->unsigned();
			$table->decimal('plate_thickness', 5, 1)->nullable()->comment('板の厚さ');
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
		Schema::drop('plate_thicknesses');
	}

}
