<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ColorGroup extends Model
{
    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'color_group_id';
}
