<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class ProductRepairPartGroup extends Pivot
{
    //
    protected $table = 'products_repair_part_groups';

    # createメソッドでの書き込み許可
    protected $fillable = [
        'product_id',
        'repair_part_groups_id',
        'size_id',
    ];

    public function repairPartGroup()
    {
        return $this->belongsTo(RepairPartGroup::class, 'repair_part_groups_id');
    }

    public function size() {
        return $this->belongsTo(Size::class, 'size_id');
    }
}
