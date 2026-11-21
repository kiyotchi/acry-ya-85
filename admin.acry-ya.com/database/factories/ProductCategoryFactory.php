<?php

use Faker\Generator as Faker;

$factory->define(App\Models\ProductCategory::class, function (Faker $faker) {
    return [
        'product_category_name' => 'test'
    ];
});
