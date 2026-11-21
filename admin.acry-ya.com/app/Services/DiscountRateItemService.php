<?php


namespace App\Services;

use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

use App\Models\DiscountRateItem;

/**
 * Class DiscountRateService
 * @package App\Services
 */
class DiscountRateItemService
{

    /**
     * 割引率アイテムテーブル全件取得
     *
     * @return DiscountRateItem[]|\Illuminate\Database\Eloquent\Collection
     */
    public function findAll()
    {
        return DiscountRateItem::all();
    }

    /**
     * 主キー検索
     *
     * @param $discount_rate_item_id
     * @return
     */
    public function findByDiscountRateItemId($discount_rate_item_id)
    {
        return DiscountRateItem::find($discount_rate_item_id);
    }

    /**
     * 割引率ID検索
     *
     * @param $discount_rate_id
     * @return
     */
    public function findByDiscountRateId($discount_rate_id)
    {
        return DiscountRateItem::where('discount_rate_id', $discount_rate_id)->get();
    }

    /**
     * 登録
     *
     * @param array $insert_datas
     * @throws \Exception
     */
    public function register(array $insert_datas)
    {
        try {
            DB::transaction(function () use ($insert_datas) {
                if (!empty($insert_datas)) {
                    foreach ($insert_datas as $data) {
                        $discount_rate_item = new DiscountRateItem();
                        $discount_rate_item->fill($data)->save();
                    }
                }
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

    /**
     *  更新（全削除後に登録）
     *
     * @param int $discount_rate_id
     * @param array $insert_datas
     */
    public function upsert(int $discount_rate_id, array $insert_datas)
    {
        try {
            DB::transaction(function () use ($discount_rate_id, $insert_datas) {
                DiscountRateItem::where('discount_rate_id', $discount_rate_id)->delete();

                if (!empty($insert_datas)) {
                    foreach ($insert_datas as $data) {
                        $discount_rate_item = new DiscountRateItem();
                        $discount_rate_item->fill($data)->save();
                    }
                }
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

    /**
     * 削除
     *
     * @param int $discount_rate_id
     * @throws \Exception
     */
    public function delete(int $discount_rate_id)
    {
        try {
            DB::transaction(function () use ($discount_rate_id) {
                DiscountRateItem::where('discount_rate_id', $discount_rate_id)->delete();
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
