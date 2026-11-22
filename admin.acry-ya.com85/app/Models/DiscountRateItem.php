<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DiscountRateItem extends Model
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    use SoftDeletes;

    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'discount_rate_item_id';

    // 日付が入っている場合は論理削除
    protected $casts = [
        'deleted_at' => 'datetime',
    ];

    // createメソッドでの書き込み許可
    protected $fillable = ['discount_rate_id', 'number_of_lower_limit', 'number_of_upper_limit', 'discount_rate','deleted_at'];
}
