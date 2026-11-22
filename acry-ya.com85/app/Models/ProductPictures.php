<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class ProductPictures extends Pivot
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    protected $table = 'product_pictures';
    # createメソッドでの書き込み許可
    protected $fillable = [
        'product_id',
        'picture_id',
        'description',
        'display_order',
    ];

    public function product()
    {
        return $this->belongsTo('App\Models\Product');
    }
}