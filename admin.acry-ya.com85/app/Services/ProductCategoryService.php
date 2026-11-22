<?php

namespace App\Services;

use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

use App\Models\ProductCategory;

class ProductCategoryService
{
/*    public $product_categories;*/

    /**
     * 主キー検索
     */
    public function findByProduct_categoryId($product_category_id)
    {
        return ProductCategory::find($product_category_id);
    }
    
    public function findByProduct_parent_categoryId($product_category_id)
    {
        return ProductCategory::find($product_category_id);
    }
    
     /**
     * カテゴリ一覧検索
     * @param int $paging_count
     * @param string $product_category_name
     * @param int $parent_category_id
     * @param array
     */
    public function findList(?int $paging_count = null, ?string $product_category_name = null, ?int $product_category_id = null)
    {
        $wheres = [];
        if (!is_null($product_category_name)) {
            array_push($wheres, ['product_category_name', 'LIKE', "%{$product_category_name}%"]);
        }
        if (!is_null($product_category_id)) {
            array_push($wheres, ['parent_category_id', $product_category_id]);
        }
        $product_categories = ProductCategory::where($wheres)
            ->orderBy('parent_category_id', 'asc')
            ->orderBy('display_order', 'asc')
            ->orderBy('product_category_id', 'asc')
            ->paginate($paging_count);

        return $product_categories;
    }
    
    /**
     * 全件検索
     */
    public function findAll()
    {
        return ProductCategory::all();
    }

    /**
     * 全件検索ページング
     */
    public function findAllPaging(int $paging_count)
    {
        return ProductCategory::orderBy('parent_category_id', 'asc')
            ->orderBy('display_order', 'asc')
            ->orderBy('product_category_id', 'asc')
            ->paginate($paging_count);
    }

    /**
     * 親カテゴリのみ
     */
    public function findAllParentOnly()
    {
        $product_categories = DB::select("SELECT * FROM product_categories WHERE parent_category_id = 0 ORDER BY display_order,product_category_id");
        return $product_categories;
    }
    
    /**
     * 下位カテゴリID取得
     *
     * @param $product_category_id
     * @param $product_categories
     *
     * @return mixed
     */
    public function getProductCategoryIds( int $product_category_id )
    {
        if( empty($this->product_categories) ) {
            $this->product_categories = $this->findAll();
        }

        $category_ids = [];
        $category_ids[] = $product_category_id;
        foreach( $this->product_categories as $category ) {
            if( $category->parent_category_id === $product_category_id ) {
                $category_ids[] = $category->product_category_id;
            }
        }
        return $category_ids;
    }
    
     /**
     * 登録
     */
    public function register(array $insert_datas)
    {
        try {
            $product_category_id = DB::transaction(function () use ($insert_datas) {
                $product_categories = new ProductCategory();
                $product_categories->fill($insert_datas)->save();
                return $product_categories->product_category_id;
            });
            return $product_category_id;
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
     */
    public function update(int $product_category_id, array $update_datas)
    {
        try {
            DB::transaction(function () use ($product_category_id, $update_datas) {
                ProductCategory::find($product_category_id)->fill($update_datas)->save();
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
     */
    public function delete(int $product_category_id)
    {
        try {
            DB::transaction(function () use ($product_category_id) {
                ProductCategory::find($product_category_id)->delete();
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