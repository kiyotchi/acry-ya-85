<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OgpPicture extends Model
{
    protected $guarded = ['id'];

    public function getUrlAttribute()
    {
        $result = null;

        if (!empty($this->picture)) {
            $result = $this->picture->picture_url;
        }

        return $result;
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function picture()
    {
        return $this->belongsTo(Picture::class, 'picture_id');
    }
}
