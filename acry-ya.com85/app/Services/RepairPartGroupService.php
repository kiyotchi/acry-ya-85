<?php


namespace App\Services;

use App\Models\ProductRepairPartGroup;
use Log;
use App\Models\RepairPartGroup;
use App\Models\RepairPartGroupRepairPart;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;

/**
 * Class RepairPartGroupService
 * @package App\Services
 */
class RepairPartGroupService
{

    /**
     * 補修部品グループ検索
     * @param int $repair_part_groups_id
     * @return mixed
     */
    public function find(int $repair_part_groups_id)
    {
        return RepairPartGroup::find($repair_part_groups_id);
    }

    /**
     * 補修部品グループ一覧全件検索
     * @return RepairPartGroup[]|\Illuminate\Database\Eloquent\Collection
     */
    public function findAll()
    {
        return RepairPartGroup::all()->orderBy('display_order', 'asc');
    }

	/**
	 * 補修部品グループ全件検索（メニュー用）
	 * @param int $paging_count
	 * @return mixed
	 */
	public function findMenu()
	{
		return RepairPartGroup::where('is_menu_display', 1)->orderBy('display_order', 'asc')->get();
	}

    /**
     * 補修部品グループ全件検索ページング対応
     * @param int $paging_count
     * @return mixed
     */
    public function findAllPaging(int $paging_count)
    {
        return RepairPartGroup::orderBy('repair_part_groups_id', 'asc')->orderBy('display_order', 'asc')->paginate($paging_count);
    }

    public function findProductRepairPartSetting(int $product_id)
    {
        return ProductRepairPartGroup::where([
        	['product_id', $product_id],
			['repair_part_groups_id','<>', ''],
		])->orderby('size_id', 'asc')->get();
    }

    /**
     * 補修部品グループでメニュー表示ありのカテゴリIDとカテゴリ名を取得
     * @return mixed
     */
    public function findRepairPartGroupCategoryIds()
    {
        $categoryids = DB::table('repair_part_groups')
            ->join('product_categories', 'repair_part_groups.product_category_id', '=', 'product_categories.product_category_id')
            ->select('product_categories.product_category_id','product_categories.product_category_name')
            ->where('repair_part_groups.is_menu_display', '=', 1)
            ->groupBy('product_categories.product_category_id','product_categories.product_category_name')
            ->orderBy('product_categories.display_order')
            ->get();
            //Log::debug($ProductsRepairPartGroups);
        return $categoryids;
    }
}