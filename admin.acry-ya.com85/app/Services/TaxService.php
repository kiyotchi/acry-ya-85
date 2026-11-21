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

    /**
     * 登録
     * @param $insert_datas
     * @return mixed
     */
    public function insert(array $insert_datas)
    {
        try {
            DB::transaction(function () use ($insert_datas) {
                $tax = new Tax();
                $tax->fill([
                    'tax' => $insert_datas['tax'],
                    'tax_change_date' => date("Y/m/d H:i:s")
                ])->save();
            });
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
