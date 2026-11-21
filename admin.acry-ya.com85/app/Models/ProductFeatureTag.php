<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductFeatureTag extends Model
{
    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'product_feature_tag_id';

    # createメソッドでの書き込み許可
    protected $fillable = ['product_feature_tag_name_inside', 'product_feature_tag_name', 'product_feature_tag_content'];
}
