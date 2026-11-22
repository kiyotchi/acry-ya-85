<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'notice_id';

    // createメソッドでの書き込み許可
    protected $fillable = ['notice','created_at','updated_at'];
}
