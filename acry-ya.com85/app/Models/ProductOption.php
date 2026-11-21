<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductOption extends Model
{
    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'product_option_id';

    // createメソッドでの書き込み許可
    protected $fillable = ['product_id','option_name','html_tag_name'];
}
