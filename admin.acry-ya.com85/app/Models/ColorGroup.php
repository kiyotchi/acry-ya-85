<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ColorGroup extends Model
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'color_group_id';
}
