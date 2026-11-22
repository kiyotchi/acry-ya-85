<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SpecificationDetailCommons extends Model
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    // 主キーがlaravel規約と異なるため修正
    protected $primaryKey = 'specification_detail_common_id';
}
