<?php

namespace App\Services;

use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

use App\Models\Tax;

class TaxService
{
    /**
     * 最新レコード検索
     */
    public function findNewRecord()
    {
        return Tax::latest('tax_change_date')->first();
    }
}
