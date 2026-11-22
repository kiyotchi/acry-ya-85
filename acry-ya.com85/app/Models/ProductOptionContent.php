<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductOptionContent extends Model
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'product_option_content_id';

    // createメソッドでの書き込み許可
    protected $fillable = ['product_option_id', 'value', 'display_name'];
}
