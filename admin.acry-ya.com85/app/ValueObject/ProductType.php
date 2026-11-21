<?php

namespace App\ValueObject;

class ProductType
{
    const STANDARD_TYPE = 'standard';
    const CUSTOM_TYPE = 'custom';
    private $type_names = [
        self::STANDARD_TYPE => '標準商品',
        self::CUSTOM_TYPE => 'セミオーダー',
    ];

    public function getStandardType()
    {
        return self::STANDARD_TYPE;
    }

    public function getCustomType()
    {
        return self::CUSTOM_TYPE;
    }

    public function getTypeName($key)
    {
        return (isset($this->type_names[$key])) ? $this->type_names[$key] : null;
    }
}
