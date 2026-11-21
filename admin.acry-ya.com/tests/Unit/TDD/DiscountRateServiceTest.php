<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Services\DiscountRateService;

class DiscountRateServiceTest extends TestCase
{

    public function testFindAll()
    {
        $test = new DiscountRateService();
        $list = $test->findAll();
        foreach ($list as $item) {
            print $item;
        }
        $this->assertTrue(true);
    }
}
