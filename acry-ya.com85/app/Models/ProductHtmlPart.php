<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductHtmlPart extends Model
{
    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'product_html_part_id';

    # createメソッドでの書き込み許可
    protected $fillable = [
        'product_html_part_type_id',
        'part_title',
        'html_part',
    ];


    public function product()
    {
        return $this->belongsToMany('App\Models\Product', 'products_product_html_parts', 'product_id', 'product_html_part_id');
    }

    public function productHtmlPartType()
    {
        return $this->belongsTo('App\Models\ProductHtmlPartType', 'product_html_part_type_id');
    }
}
