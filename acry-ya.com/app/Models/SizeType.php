<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SizeType extends Model
{
    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'size_type_id';
}
