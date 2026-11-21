<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

use Illuminate\Database\Seeder;

use App\Services\HtmlPartService;

use App\Models\ProductHtmlPart;
use App\Models\ProductHtmlPartType;

class HtmlPartServiceTest extends TestCase
{

    private $html_part_service;


    public function setUp(): void
    {
        parent::setUp();
        // product_html_part_type_tableの主キーを1からの連番にするためにマイグレーションし直し
        $this->artisan('migrate:fresh');
        //$this->seed('TDDProductHtmlPartTypeTableSeeder');
        //$this->seed('TDDProductHtmlPartTableSeeder');
        $this->seed(\DatabaseSeeder::class);
        $this->html_part_service = new HtmlPartService();
    }

    /**
     * パーツ全検索テスト
     */
    public function testFindAllOfPart()
    {
        $html_parts = $this->html_part_service->findAllOfPart();
        foreach ($html_parts as $html_part) {
            $this->assertDatabaseHas('product_html_parts', $html_part->toArray());
        }
    }

    /**
     * パーツ検索テスト
     */
    public function testFindByProductHtmlPartTypeId()
    {
        $product_html_part_type_id = 1;
        $html_parts = $this->html_part_service->findByProductHtmlPartTypeId($product_html_part_type_id);
        foreach ($html_parts as $html_part) {
            $this->assertDatabaseHas('product_html_parts', $html_part->toArray());
        }
    }

    /**
     * リスト検索テスト
     */
    public function testFindList()
    {
        // 複合
        $html_part_type = 1;
        $html_part_title = "品情報選択";
        $html_parts = $this->html_part_service->findList($html_part_type, $html_part_title);
        foreach ($html_parts as $html_part) {
            $this->assertDatabaseHas('product_html_parts', $html_part->toArray());
        }
    }

    /**
     * リスト検索テスト
     */
    public function testFindListAll()
    {
        //　条件指定無し
        $html_parts = $this->html_part_service->findList();
        foreach ($html_parts as $html_part) {
            $this->assertDatabaseHas('product_html_parts', $html_part->toArray());
        }
    }

    /**
     * フィルタリングテスト
     */
    public function testFilterAddInformation()
    {
        $html_parts = $this->html_part_service->findAllOfPart();
        $results = $this->html_part_service->filterAddInformation($html_parts);
        foreach ($results as $item) {
            $this->assertDatabaseHas('product_html_parts', $item->toArray());
        }
    }

    /**
     * フィルタリングテスト
     */
    public function testFilterFeature()
    {
        $html_parts = $this->html_part_service->findAllOfPart();
        $results = $this->html_part_service->filterFeature($html_parts);
        foreach ($results as $item) {
            $this->assertDatabaseHas('product_html_parts', $item->toArray());
        }
    }

    /**
     * HTMLパーツ種別取得テスト
     */
    public function testFindHtmlPartTypeList()
    {
        $html_part_types = $this->html_part_service->findAllOfHtmlPartType();
        foreach ($html_part_types as $item) {
            $this->assertDatabaseHas('product_html_part_types', $item->toArray());
        }
    }

    /**
     * 登録テスト
     */
    public function testRegisterProductHtmlPart()
    {
        $part_title = '登録テスト';
        $product_html_part_type_id = 1;
        $html_part = '<div> test </div>';
        $insert_data = [
            'part_title' => $part_title,
            'product_html_part_type_id' => $product_html_part_type_id,
            'html_part' => $html_part,
        ];
        $product_html_part_id = $this->html_part_service->registerProductHtmlPart($insert_data);
        $product_html_parts = $this->html_part_service->find($product_html_part_id);
        $this->assertDatabaseHas('product_html_parts', $product_html_parts->toArray());
    }

    /**
     * 更新テスト
     */
    public function testUpdateProductHtmlPart()
    {
        // 登録してテスト
        $part_title = '更新テスト';
        $product_html_part_type_id = 1;
        $html_part = '<div> test </div>';
        $insert_data = [
            'part_title' => $part_title,
            'product_html_part_type_id' => $product_html_part_type_id,
            'html_part' => $html_part,
        ];
        $product_html_part_id = $this->html_part_service->registerProductHtmlPart($insert_data);
        // 更新
        $part_title = '更新';
        $update_data = [
            'part_title' => $part_title,
            'product_html_part_type_id' => $product_html_part_type_id,
            'html_part' => $html_part,
        ];
        $this->html_part_service->updateProductHtmlPart($product_html_part_id, $update_data);
        $product_html_parts = $this->html_part_service->find($product_html_part_id);
        $this->assertEquals($product_html_parts->part_title, $part_title);
        $this->assertDatabaseHas('product_html_parts', $product_html_parts->toArray());
    }

    /**
     * 削除テスト
     */
    public function testDeleteProductHtmlPart()
    {
        // 登録してテスト
        $part_title = '削除テスト';
        $product_html_part_type_id = 1;
        $html_part = '<div> test </div>';
        $insert_data = [
            'part_title' => $part_title,
            'product_html_part_type_id' => $product_html_part_type_id,
            'html_part' => $html_part,
        ];
        $product_html_part_id = $this->html_part_service->registerProductHtmlPart($insert_data);
        $product_html_parts = $this->html_part_service->find($product_html_part_id);
        $this->html_part_service->deleteProductHtmlPart($product_html_part_id);
        $this->assertDatabaseMissing('product_html_parts', $product_html_parts->toArray());
    }
}
