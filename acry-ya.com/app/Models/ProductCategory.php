<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
	// 主キーがlaravel規約と異なるため修正
	protected $primaryKey = 'product_category_id';

	public function getLinkUrlTextAttribute()
	{
		return ( !empty($this->link_url) ) ? $this->link_url : route('products.list', [ 'category_id' => $this->product_category_id ]);
	}
}
