<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class ProductTag extends Pivot
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    // TODO: 中間テーブルはテーブル名を指定しておかなければいけない？
    protected $table = 'products_tags';
}
