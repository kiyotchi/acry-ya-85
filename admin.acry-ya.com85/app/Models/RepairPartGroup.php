<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RepairPartGroup extends Model
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'repair_part_groups_id';

    # createメソッドでの書き込み許可
    protected $fillable = [
        'repair_part_group_name',
        'product_html_part_id',
		'is_menu_display',
		'product_category_id',
        'display_order',
    ];

    public function repairParts()
    {
        return $this->belongsToMany(
            RepairPart::class,
            'repair_part_groups_repair_parts',
            'repair_part_groups_id',
            'repair_parts_id'
        );
    }
}
