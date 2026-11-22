<?php

namespace App\Models\Concerns;

use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\ModelNotFoundException;

/**
 * 複合主キー対応トレイト。
 * mopo922/laravel-treats の HasCompositePrimaryKey を移植したもの
 * （元実装で未 import だった ModelNotFoundException を追加）。
 *
 * Laravel 10 以降は親クラスに戻り値型が付くため、Phase 5 で型宣言を追加する。
 */
trait HasCompositePrimaryKey
{
    /**
     * @return bool
     */
    public function getIncrementing()
    {
        return false;
    }

    /**
     * @return mixed
     */
    public function getKey()
    {
        $attributes = [];

        foreach ($this->getKeyName() as $key) {
            $attributes[$key] = $this->getAttribute($key);
        }

        return $attributes;
    }

    /**
     * @param  \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function setKeysForSaveQuery($query)
    {
        foreach ($this->getKeyName() as $key) {
            if (isset($this->$key)) {
                $query->where($key, '=', $this->$key);
            } else {
                throw new Exception(__METHOD__ . 'Missing part of the primary key: ' . $key);
            }
        }

        return $query;
    }

    /**
     * @param  array  $ids Array of keys, like [column => value].
     * @param  array  $columns
     * @return mixed|static
     */
    public static function find($ids, $columns = ['*'])
    {
        $me = new static;
        $query = $me->newQuery();

        foreach ($me->getKeyName() as $key) {
            $query->where($key, '=', $ids[$key]);
        }

        return $query->first($columns);
    }

    /**
     * @param  mixed  $ids
     * @param  array  $columns
     * @return \Illuminate\Database\Eloquent\Model
     *
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public static function findOrFail($ids, $columns = ['*'])
    {
        $result = static::find($ids, $columns);

        if (!is_null($result)) {
            return $result;
        }

        throw (new ModelNotFoundException)->setModel(static::class, $ids);
    }

    /**
     * @return $this
     */
    public function refresh()
    {
        if (!$this->exists) {
            return $this;
        }

        $this->setRawAttributes(
            static::findOrFail($this->getKey())->attributes
        );

        $this->load(collect($this->relations)->except('pivot')->keys()->toArray());

        return $this;
    }
}
