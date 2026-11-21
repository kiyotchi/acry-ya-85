<?php

namespace App\Services;

use App\ValueObject\ProductType;

class ProductTypeService
{

    public function findAll()
    {
        $product_type = new ProductType();
        $product_types = [
            $product_type->getStandardType() => $product_type->getTypeName($product_type->getStandardType()),
            $product_type->getCustomType() => $product_type->getTypeName($product_type->getCustomType())
        ];

        return $product_types;
    }
}