<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class ProductsProductHtmlPart extends Pivot
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    //
    protected $table = 'products_product_html_parts';

    # createメソッドでの書き込み許可
    protected $fillable = [
        'product_id',
        'product_html_part_id',
    ];
}
