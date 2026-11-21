<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class ProductSizePicture extends Pivot
{
    //
    protected $table = 'product_size_pictures';
    # createメソッドでの書き込み許可
    protected $fillable = [
        'product_id',
        'picture_id',
        'size_id',
        'description',
        'display_order',
    ];

    public function product()
    {
        return $this->belongsTo('App\Models\Product');
    }
}
