<?php

namespace App\Services;

use App\ValueObject\SizeType;
use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

use App\Models\Size;
use App\Models\SizeGroup;

/**
 *
 */
class SizeService
{
    // サイズ種別
    const SIZE_TYPE_NUMERIC = 1; // 数値
    const SIZE_TYPE_STRING = 2; // 文字列

    /**
     * 主キー検索
     */
    public function findBySizeId($size_id)
    {
        return Size::find($size_id);
    }

    /**
     * サイズ一覧検索
     * @param int $paging_count
     * @param int $size_type
     * @param array
     */
    public function findList(int $paging_count = null, int $size_type = null)
    {
        $wheres = [];
        if (!is_null($size_type)) {
            array_push($wheres, ['size_type', $size_type]);
        }

        $sizes = Size::where($wheres)
            ->paginate($paging_count);

        return $sizes;
    }

    /**
     * 全件検索ページング
     * @param int $paging_count
     */
    public function findAllPaging($paging_count)
    {
        return Size::paginate($paging_count);
    }

    /**
     * サイズテーブル全件検索
     *
     * @return Size[]|\Illuminate\Database\Eloquent\Collection
     */
    public function findAll()
    {
        return Size::all();
    }

    /**
     * サイズグループテーブル全件検索
     */
    public function findAllSizeGroup()
    {
        return SizeGroup::all();
    }

    /**
     * 表示用のサイズリストを生成
     *
     * @return array
     */
    public function generateSizeListForDisplay()
    {
        $sizes = $this->findAll();
        $displays = [];
        // key : size id
        // value : サイズ値
        foreach ($sizes as $size) {
            if ($size->size_type == 1) {
                // 数値
                $value = $size->width_size . " × " . $size->height_size;
            } else {
                // 文字列
                $value = $size->size;
            }
            $displays[$size->size_id] = $value;
        }
        return $displays;
    }

    /**
     * 数値タイプのサイズグループリストを生成
     *
     * @return array
     */
    public function generateSizeGroupListOfNumberType()
    {
        return $this->generateSizeGroupListBySizeType(SizeType::SIZE_OF_NUMERIC);
    }

    /**
     * 文字列タイプのサイズグループリストを生成
     *
     * @return array
     */
    public function generateSizeGroupListOfStringType()
    {
        return $this->generateSizeGroupListBySizeType(SizeType::SIZE_OF_STRING);
    }

    /**
     * 指定種別のサイズグループリストを生成
     *
     * @param int $size_type
     * @return array
     */
    private function generateSizeGroupListBySizeType(int $size_type)
    {
        $sizes = Size::where('size_type', $size_type)->distinct()->select('size_group_id')->get();
        $list = [];
        foreach ($sizes as $size) {
            $list[$size->sizeGroups->size_group_id] = $size->sizeGroups->size_group_name;
        }
        return $list;
    }
}