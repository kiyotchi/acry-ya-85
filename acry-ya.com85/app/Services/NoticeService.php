<?php

namespace App\Services;

use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

use App\Models\Notice;

/**
 *
 */
class NoticeService
{
    /**
     * 最新レコード検索
     */
    public function findNewRecord()
    {
        return Notice::latest('created_at')->first();
    }
}
