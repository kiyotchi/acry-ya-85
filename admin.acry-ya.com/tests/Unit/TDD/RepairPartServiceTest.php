<?php

namespace Tests\Unit;

use App\Services\RepairPartGroupService;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RepairPartServiceTest extends TestCase
{
    private $repair_service;

    public function setUp(): void
    {
        parent::setUp();
        $this->repair_service = new RepairPartGroupService();
    }

    public function testFindList()
    {
        $product_code = null;
        $product_name = null;
        $repair_parts = $this->repair_service->findList($product_code, $product_name);
    }
}
