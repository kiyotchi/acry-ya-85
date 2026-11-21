<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnRepairPartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('repair_parts', function (Blueprint $table) {
            $table->string('set_name', 255)->comment('セット名')->after('product_name');
            $table->string('product_detail', 255)->comment('商品詳細')->after('set_name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('repair_parts', function (Blueprint $table) {
            $table->dropColumn('set_name');
            $table->dropColumn('repair_part_detail');
        });
    }
}
