<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Color extends Model
{
    use SoftDeletes;

    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'color_id';

    // 日付が入っている場合は論理削除
    protected $dates = ['deleted_at'];

    // createメソッドでの書き込み許可
    protected $fillable = ['color_group_id', 'color_name', 'display_order'];
}
