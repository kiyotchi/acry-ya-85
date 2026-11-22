<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Picture extends Model
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'picture_id';

    # createメソッドでの書き込み許可
    protected $fillable = [
        'picture_path',
    ];

    public function product()
    {
        return $this->belongsToMany('App\Models\Product', 'product_pictures', 'product_id', 'picture_id');
    }

    public function color()
    {
        return $this->belongsToMany('App\Models\Product', 'product_color_pictures', 'product_id', 'picture_id');
    }

	public function getPictureUrlAttribute()
	{
		$picture_url = null;
		if( !empty($this->picture_path) ) {
			if( !empty($this->directory) ) {
				$picture_url = asset(config('acryya.display_image_path') . $this->directory . '/' . $this->picture_path);
			} else {
				$picture_url = asset(config('acryya.display_image_path') . $this->picture_path);
			}
		}
		return $picture_url;
	}

}
