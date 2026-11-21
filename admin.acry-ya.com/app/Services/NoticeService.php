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

    /**
     * 登録
     * @param $insert_datas
     * @return mixed
     */
    public function insert(array $insert_datas)
    {
        try {
            $notice_id = DB::transaction(function () use ($insert_datas) {
                $notice = new Notice();
                $notice->fill($insert_datas)->save();
                return $notice->notice_id;
            });
            return $notice_id;
        } catch (QueryException $e) {
            Log::error('database error.');
            Log::error($e->getMessage());
            Log::error($e->getTraceAsString());
            throw $e;
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            throw $e;
        }
    }
}
