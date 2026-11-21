<?php

use Faker\Generator as Faker;

$factory->define(App\Models\ProductType::class, function (Faker $faker) {
    return [
        'product_type_code' => 'test1',
        'product_type_name' => 'unit test'
    ];
});
