<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class ProductColorPictures extends Pivot
{
    //
    protected $table = 'product_color_pictures';
    # createメソッドでの書き込み許可
    protected $fillable = [
        'product_id',
        'picture_id',
        'color_id',
        'description',
        'display_order',
    ];

    public function product()
    {
        return $this->belongsTo('App\Models\Product');
    }
}
