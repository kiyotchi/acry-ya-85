<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'tag_id';

    protected $fillable = ['tag_name'];
}
