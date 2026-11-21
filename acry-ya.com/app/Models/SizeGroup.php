<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SizeGroup extends Model
{
    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'size_group_id';

    public function sizes()
    {
        return $this->hasMany('App\Models\Size', 'size_group_id');
    }
}
