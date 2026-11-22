<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class RelatedProduct extends Pivot
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    use \App\Models\Concerns\HasCompositePrimaryKey;

    //
    protected $table = 'related_products';

    protected $primaryKey = ['related_product_id', 'product_id'];

    # createメソッドでの書き込み許可
    protected $fillable = [
        'related_product_id',
        'product_id',
    ];
}
