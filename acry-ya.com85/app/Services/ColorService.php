<?php

namespace App\Services;

use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

use App\Models\Color;
use App\Models\ColorGroup;

/**
 *
 */
class ColorService
{

    /**
     * 主キー検索
     */
    public function findByColorId($color_id)
    {
        return Color::find($color_id);
    }

    /**
     * カラー一覧検索
     * @param int $paging_count
     * @param string $color_name
     * @param int $color_group_id
     * @param array
     */
    public function findList(?int $paging_count = null, ?string $color_name = null, ?int $color_group_id = null)
    {
        $wheres = [];
        if (!is_null($color_name)) {
            array_push($wheres, ['color_name', 'LIKE', "%{$color_name}%"]);
        }
        if (!is_null($color_group_id)) {
            array_push($wheres, ['color_group_id', $color_group_id]);
        }
        $colors = Color::where($wheres)
            ->paginate($paging_count);

        return $colors;
    }

    /**
     * 全件検索ページング
     * @param int $paging_count
     */
    public function findAllPaging(int $paging_count)
    {
        return Color::paginate($paging_count);
    }

    /**
     * カラーテーブル全件検索
     */
    public function findAll()
    {
        return Color::all();
    }

    /**
     * カラーグループテーブル全件検索
     */
    public function findAllColorGroup()
    {
        return ColorGroup::all();
    }
}