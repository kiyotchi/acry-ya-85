<?php


namespace App\Services;

use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

use App\Models\DiscountRate;

/**
 * Class DiscountRateService
 * @package App\Services
 */
class DiscountRateService
{
    /**
     * 主キー検索
     *
     * @param $discount_rate_id
     * @return
     */
    public function findByDiscountRateId($discount_rate_id)
    {
        return DiscountRate::find($discount_rate_id);
    }

    /**
     * 割引率全件取得
     *
     * @return DiscountRate[]|\Illuminate\Database\Eloquent\Collection
     */
    public function findAll()
    {
        return DiscountRate::all();
    }

    /**
     * 割引率全件取得
     *
     * @return DiscountRate[]|\Illuminate\Database\Eloquent\Collection
     */
    public function findAllPaging($paging_count)
    {
        return DiscountRate::paginate($paging_count);
    }

    /**
     * 登録
     *
     * @param $insert_datas
     * @return mixed
     */
    public function register(array $insert_datas)
    {
        try {
            $discount_rate_id = DB::transaction(function () use ($insert_datas) {
                $discount_rate = new DiscountRate();
                $discount_rate->fill($insert_datas)->save();
                return $discount_rate->discount_rate_id;
            });
            return $discount_rate_id;
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
     * 更新
     *
     * @param int $discount_rate_id
     * @param array $update_datas
     */
    public function update(int $discount_rate_id, array $update_datas)
    {
        try {
            DB::transaction(function () use ($discount_rate_id, $update_datas) {
                DiscountRate::find($discount_rate_id)->fill($update_datas)->save();
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
     * @param $discount_rate_id
     */
    public function delete(int $discount_rate_id)
    {
        try {
            DB::transaction(function () use ($discount_rate_id) {
                DiscountRate::find($discount_rate_id)->delete();
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
     * 割引率を使用している商品を取得
     * 
     * 割引率で検索する
     * 
     * @param int $discount_rate_id
     * @return array
     */
    public function findByDiscountRatesUsedProducts(int $discount_rate_id)
    {
        $used_products = DB::table('discount_rates')
            ->join('products', 'discount_rates.discount_rate_id', '=', 'products.discount_rate_id')
            ->select('products.product_id', 'products.product_name','products.product_type_code')
            ->where('discount_rates.discount_rate_id', '=', $discount_rate_id)
            ->orderBy('products.product_id', 'asc')
            ->get();
            //Log::debug($used_products);
        return $used_products;
    }
}