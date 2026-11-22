<?php

namespace App\Models\Concerns;

use DateTimeInterface;

/**
 * Laravel 7 で変更された日付のシリアライズ形式（ISO-8601 / UTC）を、
 * Laravel 6 以前の形式（Y-m-d H:i:s）に戻す。
 * toArray() / toJson() / API レスポンスの互換性を維持するために使用する。
 */
trait SerializesDatesLegacy
{
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format($this->getDateFormat());
    }
}
