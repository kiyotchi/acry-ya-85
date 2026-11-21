<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SemiOrderHtmlContent extends Model
{
    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'semi_order_html_content_id';

    # createメソッドでの書き込み許可
    protected $fillable = [
        'product_id',
        'html',
    ];
}
