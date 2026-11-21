<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class RepairPartGroupRepairPart extends Pivot
{
    //
    protected $table = 'repair_part_groups_repair_parts';

    # createメソッドでの書き込み許可
    protected $fillable = [
        'repair_part_groups_id',
        'repair_parts_id',
    ];
}
