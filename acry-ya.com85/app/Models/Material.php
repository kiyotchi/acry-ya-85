<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Material extends Model
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    use SoftDeletes;

    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'material_id';

    // 日付が入っている場合は論理削除
    protected $dates = ['deleted_at'];

    // createメソッドでの書き込み許可
    protected $fillable = [
        'material_code',
        'material_name',
        'maker_name',
        'cost_price',
        'square_meter_unit_price',
        'color_id',
        'material_code',
        'width_size',
        'height_size',
        'plate_thickness_id',
        'history'
    ];
}
