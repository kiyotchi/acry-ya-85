<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class SpecificationDetailIndividualsProductFeatureTag extends Pivot
{
    //
    protected $table = 'specification_detail_individuals_product_feature_tags';
    # createメソッドでの書き込み許可
    protected $fillable = [
        'specification_detail_individual_id',
        'product_feature_tag_id'
    ];
}
