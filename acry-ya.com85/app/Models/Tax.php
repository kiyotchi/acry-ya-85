<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tax extends Model
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'tax_id';

    // createメソッドでの書き込み許可
    protected $fillable = ['tax','tax_change_date'];
}
