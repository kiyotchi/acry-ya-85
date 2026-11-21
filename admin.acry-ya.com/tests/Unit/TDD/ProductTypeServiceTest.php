<?php

namespace Tests\Unit;

use App\Models\ProductType;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

use Illuminate\Database\Seeder;

use App\Services\ProductTypeService;

class ProductTypeServiceTest extends TestCase
{

    use RefreshDatabase;

    public function testFindAll()
    {
        // seederをのデータをテスト用に使用する
        $this->seed('ProductTypeTable' . 'Seeder');
        // factoryを使用してもよいが、product_typesの主キーがlaravel準拠ではないため複数件作成できない
        #$test_model = factory(ProductType::class)->create();
        $product_type_service = New ProductTypeService();
        $product_types = $product_type_service->findAll();
        $this->assertEquals($product_types[0]->product_type_code, '9991');
        $this->assertEquals($product_types[0]->product_type_name, '規格品');
        $this->assertEquals($product_types[1]->product_type_code, '9992');
        $this->assertEquals($product_types[1]->product_type_name, 'セミオーダー');
    }
}
