<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductType extends Model
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    // 主キーが文字列型のため変更する
    protected $primaryKey = 'product_type_code';
    // 文字列型のためオートインクリメントは無効化する
    public $incrementing = false;
    protected $keyType = 'string';
}
