<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductSettingsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('product_settings', function(Blueprint $table)
		{
			$table->bigInteger('product_setting_id', true)->unsigned();
			$table->bigInteger('product_id')->unsigned()->index('product_id')->comment('商品ID');
			$table->boolean('picture_priority')->nullable()->comment('0:未設定（商品）
1:カラー別
2:サイズ別
3:オプション別');
            $table->string('form_html_tag_id')->nullable();
            $table->string('add_cart_function')->nullable();
            $table->integer('cart_parameter_quantity')->unsigned()->nullable();
			$table->boolean('is_color_valid', 1)->nullable()->comment('1:有効
0:無効');
			$table->string('color_display_name')->nullable();
            $table->string('color_html_tag_id')->nullable();
			$table->bigInteger('color_group_id')->unsigned()->nullable()->index('color_group_id');
			$table->boolean('is_size_valid', 1)->nullable()->comment('1:有効
0:無効');
			$table->bigInteger('size_group_id')->unsigned()->nullable()->index('size_group_id');
			$table->boolean('specify_size')->nullable()->comment('1:規格サイズ(数値)
2:規格サイズ(文字列)
3:自由入力');
			$table->string('specification_size_numerical_display')->nullable();
            $table->string('specification_size_numerical_html_tag_id')->nullable();
			$table->bigInteger('specification_size_numerical_wh_limit')->unsigned()->nullable();
			$table->string('specification_size_string_display')->nullable();
            $table->string('specification_size_string_html_tag_id')->nullable();
			$table->string('free_input_width_display')->nullable();
			$table->string('free_input_width_html_tag_id')->nullable();
			$table->string('free_input_height_display')->nullable();
			$table->string('free_input_height_html_tag_id')->nullable();
            $table->boolean('is_free_input_depth_valid', 1)->nullable()->comment('1:有効
0:無効');
			$table->string('free_input_depth_display')->nullable();
			$table->string('free_input_depth_html_tag_id')->nullable();
			$table->bigInteger('free_input_wdh_limit')->unsigned()->nullable();
			$table->boolean('is_plate_thickness_valid', 1)->nullable()->comment('1:有効
0:無効');
			$table->string('plate_thickness_display')->nullable()->comment('
');
            $table->string('plate_thickness_html_tag_id')->nullable();
			$table->boolean('is_product_option_valid', 1)->nullable()->comment('1:有効
0:無効');
			$table->boolean('is_destination_valid', 1)->nullable()->comment('1:有効
0:無効');
            $table->string('destination_html_tag_id')->nullable();
            $table->bigInteger('destination_initial')->nullable()->comment('1:個人
2:法人');
			$table->boolean('is_quantity_valid', 1)->nullable()->comment('1:有効
0:無効');
            $table->string('quantity_html_tag_id')->nullable();
            $table->string('price_calculation_function')->nullable();
			$table->boolean('is_stock_valid', 1)->nullable()->comment('1:有効
0:無効');
			$table->string('stock_html_tag_id')->nullable();
			$table->boolean('is_delivery_charge_valid', 1)->nullable()->comment('1:有効
0:無効');
            $table->string('delivery_private_html_tag_id')->nullable();
            $table->string('delivery_private_price_html_tag_id')->nullable();
            $table->string('delivery_faraway_html_tag_id')->nullable();
            $table->string('delivery_faraway_price_html_tag_id')->nullable();
			$table->boolean('is_large_delivery_valid', 1)->nullable()->comment('1:有効
0:無効');
            $table->string('large_delivery_html_tag_id')->nullable();
			$table->boolean('is_fax_order_valid', 1)->nullable()->comment('1:有効
0:無効');
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
		Schema::drop('product_settings');
	}

}
