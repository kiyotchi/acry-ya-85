<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    use HasFactory;
    use \App\Models\Concerns\SerializesDatesLegacy;

    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'product_category_id';
    
    // createメソッドでの書き込み許可
    protected $fillable = ['parent_category_id', 'product_category_name', 'display_order','link_url','thumbnail_path','list_summary'];
}
