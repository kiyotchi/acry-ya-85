<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateMaterialsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('materials', function(Blueprint $table)
		{
			$table->bigInteger('material_id', true)->unsigned();
			$table->string('material_code', 191)->comment('素材コード')->nullable();
			$table->string('material_name', 191);
			$table->string('maker_name')->nullable()->comment('メーカー名');
			$table->bigInteger('cost_price')->nullable();
			$table->bigInteger('unit_price')->nullable();
			$table->bigInteger('square_meter_unit_price')->nullable();
			$table->bigInteger('color_id')->unsigned()->nullable();
			$table->bigInteger('width_size')->nullable();
			$table->bigInteger('height_size')->nullable();
			$table->bigInteger('plate_thickness_id')->unsigned()->nullable();
			$table->text('history', 65535)->nullable();
			$table->boolean('stock_status')->nullable()->comment('0:在庫有り
1:欠品
');
			$table->softDeletes()->comment('論理削除用
日付が入っている場合は論理削除');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
			$table->index(['material_name','material_code','color_id','plate_thickness_id'], 'uq_materials_01');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('materials');
	}

}
