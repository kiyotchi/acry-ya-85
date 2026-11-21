<?php


namespace App\Services;

use Log;
use App\Models\SpecificationDetailIndividualsProductFeatureTag;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;

class SpecificationDetailProductFeatureTagService
{

    /**
     * 規格詳細個別設定商品タグを取得する
     *
     * @param int $specification_detail_individual_id
     * @return mixed
     */
    public function find(int $specification_detail_individual_id)
    {
        return SpecificationDetailIndividualsProductFeatureTag::where('specification_detail_individual_id',
            $specification_detail_individual_id)->get();
    }

    /**
     * 規格詳細個別設定商品タグを登録する
     *
     * @param int $specification_detail_individual_id
     * @param array $update_data
     * @return mixed
     * @throws \Exception
     */
    public function update(int $specification_detail_individual_id, array $update_data)
    {
        try {
            return DB::transaction(function () use ($specification_detail_individual_id, $update_data) {
                // 中間テーブル削除
                SpecificationDetailIndividualsProductFeatureTag::where('specification_detail_individual_id',
                    $specification_detail_individual_id)->delete();

                if (!isset($update_data['product_feature_tags'])) {
                    Log::info('unselect tags.');
                    return;
                }
                // 登録する
                foreach ($update_data['product_feature_tags'] as $product_feature_tag_id) {
                    $pivot_table = new SpecificationDetailIndividualsProductFeatureTag();
                    $pivot_table->fill([
                        'specification_detail_individual_id' => $specification_detail_individual_id,
                        'product_feature_tag_id' => $product_feature_tag_id
                    ])->save();
                }
                return;
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