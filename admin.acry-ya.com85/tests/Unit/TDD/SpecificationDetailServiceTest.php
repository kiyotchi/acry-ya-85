<?php

namespace Tests\Unit\TDD;

use App\Services\SpecificationDetailService;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SpecificationDetailServiceTest extends TestCase
{

    private $specification_detail_service;

    public function setUp(): void
    {
        parent::setUp();
        $this->specification_detail_service = new SpecificationDetailService();
    }

    /**
     * 検索テスト
     */
    public function testFind()
    {
        $specification_details = $this->specification_detail_service->find(1);
        print $specification_details;
        $this->assertNotEmpty($specification_details);
    }

    /**
     * 検索テスト
     *
     * 商品IDで検索する
     */
    public function testFindByProductId()
    {
        $specification_details = $this->specification_detail_service->findByProductId(1);
        foreach ($specification_details as $item) {
            print $item;
        }
        $this->assertNotEmpty($specification_details);
    }

    /**
     * 検索テスト
     *
     * 該当商品IDが存在しない
     */
    public function testFindByProductIdNotFound()
    {
        $specification_details = $this->specification_detail_service->findByProductId(9999);
        foreach ($specification_details as $item) {
            print $item;
        }
        $this->assertEmpty($specification_details);
    }

    /**
     * 更新テスト
     *
     * 既に存在するデータに対して更新する
     */
    public function testUpdate()
    {
        $this->markTestSkipped();
        $product_id = 1;
        $update_data = [
            'specification_detail_individual_id' => [
                '0' => '2',
                '1' => '3'
            ],
            'color_id' => [
                '0' => '2',
                '1' => '4'
            ],
            'size_id' => [
                '0' => '1',
                '1' => '1'
            ],
            'plate_thickness_id' => [
                '0' => '1',
                '1' => '1'
            ],
            'product_option_content_id' => [
                '0' => '1',
                '1' => '1'
            ],
            'product_code' => [
                '0' => 'test code1',
                '1' => 'test code 2'
            ],
            'price' => [
                '0' => '100',
                '1' => '200'
            ],
            'product_name_displayed_cart' => [
                '0' => 'テスト１',
                '1' => 'テスト２'
            ],
            'delivery_schedule_id' => [
                '0' => '1',
                '1' => '1'
            ],
            'is_destination_valid' => [
                '0' => '1',
                '1' => '1'
            ],
            'is_delivery_charge_valid' => [
                '0' => '1',
                '1' => '1'
            ],
            'is_large_delivery_valid' => [
                '0' => '1',
                '1' => '1'
            ],
            'list_length' => 2,
            'delete_id_list' => [],
        ];
        $this->specification_detail_service->update($product_id, $update_data);
    }

    /**
     * 更新テスト
     *
     * 規格詳細設定が存在しない場合にデータが新規に作成されるか
     */
    public function testUpdateNewRegister()
    {
        $this->markTestSkipped();
        $product_id = 1;
        $update_data = [
            'color_id' => [
                '0' => '2',
                '1' => '4'
            ],
            'size_id' => [
                '0' => '1',
                '1' => '1'
            ],
            'plate_thickness_id' => [
                '0' => '1',
                '1' => '1'
            ],
            'product_option_content_id' => [
                '0' => '1',
                '1' => '1'
            ],
            'product_code' => [
                '0' => 'test code1',
                '1' => 'test code 2'
            ],
            'price' => [
                '0' => '100',
                '1' => '200'
            ],
            'product_name_displayed_cart' => [
                '0' => 'テスト１',
                '1' => 'テスト２'
            ],
            'delivery_schedule_id' => [
                '0' => '1',
                '1' => '1'
            ],
            'is_destination_valid' => [
                '0' => '1',
                '1' => '1'
            ],
            'is_delivery_charge_valid' => [
                '0' => '1',
                '1' => '1'
            ],
            'is_large_delivery_valid' => [
                '0' => '1',
                '1' => '1'
            ],
            'list_length' => 2,
            'delete_id_list' => [],
        ];
        $this->specification_detail_service->update($product_id, $update_data);
    }

    /**
     * 更新、新規投入、削除のテスト
     */
    public function testUpdateAll()
    {
        // データをテスト用に投入してないので一旦スキップする
        $this->markTestSkipped();
        $product_id = 1;
        $update_data = [
            'specification_detail_individual_id' => [
                '0' => '2',
            ],
            'color_id' => [
                '0' => '2',
                '1' => '4'
            ],
            'size_id' => [
                '0' => '1',
                '1' => '1'
            ],
            'plate_thickness_id' => [
                '0' => '1',
                '1' => '1'
            ],
            'product_option_content_id' => [
                '0' => '1',
                '1' => '1'
            ],
            'product_code' => [
                '0' => 'test code1',
                '1' => 'test code 2'
            ],
            'price' => [
                '0' => '100',
                '1' => '200'
            ],
            'product_name_displayed_cart' => [
                '0' => 'テスト削除１',
                '1' => 'テスト削除２'
            ],
            'delivery_schedule_id' => [
                '0' => '1',
                '1' => '1'
            ],
            'is_destination_valid' => [
                '0' => '1',
                '1' => '1'
            ],
            'is_delivery_charge_valid' => [
                '0' => '1',
                '1' => '1'
            ],
            'is_large_delivery_valid' => [
                '0' => '1',
                '1' => '1'
            ],
            'list_length' => 2,
            // TODO: 固定しているので後に修正すること
            'delete_id_list' => [
                '0' => '20',
                '1' => '21',
            ]
        ];
        $this->specification_detail_service->update($product_id, $update_data);
    }

    /**
     * カラーIDの配列を取得
     */
    public function testGetColorData()
    {
        $product_id = 1;
        $color_ids = $this->specification_detail_service->getColorData($product_id);
        foreach ($color_ids as $color_id) {
            var_dump($color_id);
        }
        $this->assertNotEmpty($color_ids);
    }

    /**
     *
     */
    public function testGetSizeData()
    {
        $product_id = 1;
        $size_data = $this->specification_detail_service->getSizeData($product_id);
        foreach ($size_data as $size_datum) {
            var_dump($size_datum);
        }
        $this->assertNotEmpty($size_data);
    }

    /**
     *
     */
    public function testGetOptionData()
    {
        $product_id = 1;
        $options = $this->specification_detail_service->getOptionData($product_id);
        foreach ($options as $option) {
            var_dump($option);
        }
        $this->assertNotEmpty($options);
    }

    /**
     *
     */
    public function testGetColorList()
    {
        $product_id = 1;
        $colors = $this->specification_detail_service->getColorList($product_id);
        if (isset($colors)) {
            foreach ($colors as $color) {
                print($color);
            }
        }

        $this->assertNotEmpty($colors);
    }

    public function testGetSizeList()
    {
        $product_id = 1;
        $sizes = $this->specification_detail_service->getSizeList($product_id);
        if (isset($sizes)) {
            foreach ($sizes as $size) {
                print($size);
            }
            $this->assertNotEmpty($sizes);
        } else {
            $this->assertEmpty($sizes);
        }

    }

    public function testGetPlateThicknessList()
    {
        $product_id = 1;
        $plate_thicknesses = $this->specification_detail_service->getPlateThicknessList($product_id);
        if (isset($plate_thicknesses)) {
            foreach ($plate_thicknesses as $plate_thickness) {
                print($plate_thickness);
            }
            $this->assertNotEmpty($plate_thicknesses);
        } else {
            $this->assertEmpty($plate_thicknesses);
        }
    }

    public function testGetOptionList()
    {
        $product_id = 1;
        $options = $this->specification_detail_service->getOptionList($product_id);
        if (isset($options)) {
            foreach ($options as $option) {
                print $option;
            }
            $this->assertNotEmpty($options);
        } else {
            $this->assertEmpty($options);
        }
    }
}
