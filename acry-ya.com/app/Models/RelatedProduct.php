<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class RelatedProduct extends Pivot
{
    //
    protected $table = 'related_products';

    protected $primaryKey = 'related_product_id';

    # createメソッドでの書き込み許可
    protected $fillable = [
        'product_id',
        'product_category_id',
    ];
}
