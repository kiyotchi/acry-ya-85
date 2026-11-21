<?php


namespace App\ValueObject;


class SizeType
{
    const SIZE_OF_NUMERIC = 1;
    const SIZE_OF_STRING = 2;
    const SIZE_OF_FREE = 3;

    public function getNumericType()
    {
        return self::SIZE_OF_NUMERIC;
    }

    public function getStringType()
    {
        return self::SIZE_OF_STRING;
    }

    public function getFreeType()
    {
        return self::SIZE_OF_FREE;
    }
}