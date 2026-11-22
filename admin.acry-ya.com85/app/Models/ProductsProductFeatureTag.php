<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class ProductsProductFeatureTag extends Pivot
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    //
    protected $table = 'products_product_feature_tags';

    # createメソッドでの書き込み許可
    protected $fillable = [
        'product_id',
        'product_feature_tag_id',
    ];
}
