<?php

namespace App\Http\Controllers\ProductCategories;

use Log;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProductCategoryRequest;

use App\Services\ProductCategoryService;
use Illuminate\Support\Facades\DB;

class ProductCategoryController extends Controller
{
    /**
     * 編集画面表示
     */
    public function index(Request $request)
    {
        
        $product_category_service = new ProductCategoryService();
        $product_category_list =$product_category_service->findAll();
        $product_category_list_parent_only =$product_category_service->findAllParentOnly();
        
        // idが存在したら取得して表示
        //Log::debug($request->all());
        if (isset($request->id)) {
            $product_category = $product_category_service->findByProduct_categoryId($request->id);
        	
        	$parent_id=$product_category->parent_category_id;
        
        	if($parent_id==0){
        		$parent_id=$request->id;
        	}
       
            $product_category_parent = $product_category_service->findByProduct_parent_categoryId($parent_id);
            
          	return view('product_categories/product_category')
          	->with("product_category" , $product_category)
          	->with("product_category_parent" , $product_category_parent)
          	->with("product_category_list" , $product_category_list)
          	->with("product_category_list_parent_only" , $product_category_list_parent_only);
          
        } else {
            return view('product_categories/product_category')
            ->with("product_category_list" , $product_category_list)
            ->with("product_category_list_parent_only" , $product_category_list_parent_only);
        }
    }

    /**
     * 登録
     */
    public function register(ProductCategoryRequest $request)
    {
        try {
            //Log::debug($request);
            $product_category_service = new ProductCategoryService();
            if (empty($request->parent_category_id)){
                $request['parent_category_id'] = 0;
            }
            $productcategory_id = $product_category_service->register($request->all());
            session()->flash('complete_message', '登録が完了しました。');
            return redirect(route('product.category.edit', ['id' => $productcategory_id]));
        } catch (\Exception $e) {
            $application_error_message = '登録が失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }    }

    /**
     * 更新
     */
    public function update(ProductCategoryRequest $request)
    {
        try {
            //Log::debug($request);
            $product_category_service = new ProductCategoryService();
            if (empty($request->parent_category_id)){
                $request['parent_category_id'] = 0;
            }
            $product_category_service->update($request->product_category_id, $request->all());
            session()->flash('complete_message', '更新が完了しました。');
            return redirect(route('product.category.edit', ['id' => $request->product_category_id]));
        } catch (\Exception $e) {
            $application_error_message = '更新が失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }

    /**
     * 削除
     */
    public function delete(Request $request)
    {
        try {
            $product_category_service = new ProductCategoryService();
            $product_category_service->delete($request->id);
            return redirect(route('product.category.list'));
        } catch (\Exception $e) {
            $application_error_message = '削除が失敗しました。';
            return back()->with('application_error_message', $application_error_message)->withInput();
        }
    }
}
