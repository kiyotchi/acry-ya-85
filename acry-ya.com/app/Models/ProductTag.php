<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class ProductTag extends Pivot
{
    // TODO: 中間テーブルはテーブル名を指定しておかなければいけない？
    protected $table = 'products_tags';
}
