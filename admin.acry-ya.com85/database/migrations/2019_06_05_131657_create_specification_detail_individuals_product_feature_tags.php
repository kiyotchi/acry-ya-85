<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSpecificationDetailIndividualsProductFeatureTags extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('specification_detail_individuals_product_feature_tags', function (Blueprint $table) {
            $table->bigInteger('specification_detail_individual_id')->unsigned();
            $table->bigInteger('product_feature_tag_id')->unsigned();
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
            $table->unique(['specification_detail_individual_id','product_feature_tag_id'], 'uq_specification_detail_individuals_product_feature_tags_01');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('specification_detail_individuals_product_feature_tags');
    }
}
