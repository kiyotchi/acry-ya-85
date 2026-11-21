<?php

namespace Tests\Unit\TDD;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Services\ProductFeatureTagService;
use App\Models\ProductFeatureTag;

class ProductFeatureTagServiceTest extends TestCase
{
    use RefreshDatabase;

    // TODO: 期待値でアサーションすること

    public function testFindAll()
    {
        $test_class = new ProductFeatureTagService();
        $results = $test_class->findAll();
        #print $results;
        foreach ($results as $result) {
            #print $result;
            $this->assertDatabaseHas('product_feature_tags', $result->toArray());
        }
    }

    public function testFindByProductFeatureTagName()
    {
        $test_class = new ProductFeatureTagService();
        $test_tag_name = "test";
        $results = $test_class->findByProductFeatureTagName($test_tag_name);
        foreach ($results as $result) {
            print $result;
            $this->assertDatabaseHas('product_feature_tags', $result->toArray());
        }
        # 後方
        $test_tag_name = "01";
        $results = $test_class->findByProductFeatureTagName($test_tag_name);
        foreach ($results as $result) {
            print $result;
            $this->assertDatabaseHas('product_feature_tags', $result->toArray());
        }
    }

    public function testRegister()
    {
        $insert_datas = array(
            "product_feature_tag_name" => "register test tag_name",
            "product_feature_tag_content" => "register test tag_content",
        );
        $test_class = new ProductFeatureTagService();
        $id = $test_class->register($insert_datas);
        $result = ProductFeatureTag::find($id);
        $this->assertDatabaseHas('product_feature_tags', $result->toArray());
    }

    public function testUpdate()
    {
        $insert_datas = array(
            "product_feature_tag_name" => "before update test tag_name",
            "product_feature_tag_content" => "before update test tag_content",
        );
        $test_class = new ProductFeatureTagService();
        $id = $test_class->register($insert_datas);

        print ProductFeatureTag::find($id);

        $update_datas = array(
            "product_feature_tag_id" => $id,
            "product_feature_tag_name" => "update test tag_name",
            "product_feature_tag_content" => "update test tag_content",
        );
        print $update_datas["product_feature_tag_id"];
        $updated = $test_class->update($update_datas);
        print "\n";
        print $updated;
        $result = ProductFeatureTag::find($id);
        print $result;
        $this->assertDatabaseHas('product_feature_tags', $result->toArray());
    }

    public function testDelete()
    {
        $insert_datas = array(
            "product_feature_tag_name" => "delete test tag_name",
            "product_feature_tag_content" => "delete test tag_content",
        );
        $test_class = new ProductFeatureTagService();
        $id = $test_class->register($insert_datas);

        $test_class->delete($id);

        $result = ProductFeatureTag::find($id);
        $this->assertEmpty($result);
    }
}
