<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductHtmlPartType extends Model
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'product_html_part_type_id';


    public function productHtmlPart()
    {
        return $this->belongsTo(ProductHtmlPart::class);
    }


}
