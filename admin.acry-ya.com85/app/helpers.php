<?php

/*
|--------------------------------------------------------------------------
| グローバルヘルパー
|--------------------------------------------------------------------------
|
| Laravel 6 で framework から分離された array_pluck() / array_sort() を、
| laravel/helpers パッケージに依存せずに提供する。Blade ビューで使用している。
| 実体は Illuminate\Support\Arr に委譲する。
|
*/

use Illuminate\Support\Arr;

if (! function_exists('array_pluck')) {
    /**
     * 配列から指定キーの値を取り出す。
     *
     * @param  iterable  $array
     * @param  string|array|int|null  $value
     * @param  string|array|null  $key
     * @return array
     */
    function array_pluck($array, $value, $key = null)
    {
        return Arr::pluck($array, $value, $key);
    }
}

if (! function_exists('array_sort')) {
    /**
     * 配列をソートする。
     *
     * @param  array  $array
     * @param  callable|array|string|null  $callback
     * @return array
     */
    function array_sort($array, $callback = null)
    {
        return Arr::sort($array, $callback);
    }
}
