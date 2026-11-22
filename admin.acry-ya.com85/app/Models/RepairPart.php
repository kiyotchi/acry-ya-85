<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RepairPart extends Model
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'repair_parts_id';

    # createメソッドでの書き込み許可
    protected $fillable = [
        'product_code',
        'product_name',
        'set_name',
        'product_detail',
        'product_name_displayed_cart',
        'product_summary',
        'thumbnail_picture_id',
        'price',
        'delivery_schedule_id',
        'display_order',
    ];

    public function thumbnailPicture()
    {
        return $this->belongsTo(Picture::class, 'thumbnail_picture_id');
    }

}
