<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Size extends Model
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    use SoftDeletes;

    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'size_id';

    // 日付が入っている場合は論理削除
    protected $dates = ['deleted_at'];

    // createメソッドでの書き込み許可
    protected $fillable = ['size_group_id', 'size_type', 'size', 'width_size', 'height_size'];

    public function sizeGroups() {
        return $this->belongsTo('App\Models\SizeGroup', 'size_group_id');
    }
}
