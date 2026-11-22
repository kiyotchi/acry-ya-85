<?php

namespace App\Models;

use App\Services\TaxService;
use Illuminate\Database\Eloquent\Model;

class RepairPart extends Model
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'repair_parts_id';

	public function getProductNameDisplayedCartTextAttribute()
	{
		return ( !empty($this->product_name_displayed_cart) ) ? $this->product_name_displayed_cart : $this->product_name;
	}

	public function getTaxPriceAttribute()
	{
		$tax_service = new TaxService();
		$tax = $tax_service->findNewRecord();

		return ( !empty($this->price) ) ? round($this->price * ( 100 + $tax->tax ) / 100) : null;
	}

	public function thumbnailPicture()
	{
		return $this->belongsTo(Picture::class, 'thumbnail_picture_id');
	}

}
