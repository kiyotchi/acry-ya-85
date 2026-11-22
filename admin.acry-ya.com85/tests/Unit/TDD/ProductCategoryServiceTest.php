<?php

namespace Tests\Unit\TDD;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Models\ProductCategory;
use App\Services\ProductCategoryService;

class ProductCategoryServiceTest extends TestCase
{
    use RefreshDatabase;

    /**
     * 商品カテゴリー全件取得
     */
    public function testFindAll()
    {
        $test_model = ProductCategory::factory()->create();

        $product_category_service = new ProductCategoryService();
        $test = $product_category_service->findAll();
        foreach ($test as $item) {
            $this->assertEquals($item->product_category_id, 1);
            $this->assertEquals($item->product_category_name, 'test');
        }
    }

    /**
     * 商品カテゴリー全件取得(ページング)
     */
    public function testFindAllPaging()
    {
        $test_model = ProductCategory::factory()->count(30)->create();
        $product_category_service = new ProductCategoryService();
        $test = $product_category_service->findAllPaging();
        // ページングのページ取得件数でチェック
        $this->assertEquals($test->count(), 20);
    }
}
