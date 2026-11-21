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
}