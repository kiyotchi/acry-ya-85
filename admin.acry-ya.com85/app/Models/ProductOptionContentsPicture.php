<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class ProductOptionContentsPicture extends Pivot
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    //
    protected $table = 'product_option_contents_pictures';
    # createメソッドでの書き込み許可
    protected $fillable = [
        'product_id',
        'picture_id',
        'product_option_content_id',
        'description',
        'display_order',
    ];

    public function product()
    {
        return $this->belongsTo('App\Models\Product');
    }
}
