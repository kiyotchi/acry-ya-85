<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Str;

class Review extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    // createメソッドでの書き込み許可
    protected $fillable = [
        'keyword1',
        'keyword2',
        'keyword3',
        'keyword4',
        'keyword5',
        'name',
        'title',
        'content',
        'star',
        'ip',
        'host',
        'inputkey',
        'user_agent',
        'note',
        'status',
    ];

    public function scopesearch($query, $data)
    {
        foreach ($data as $field => $val) {
            // 配列の場合はいったん処理しない
            // 必要が出たら対応
            if (!is_string($val)) {
                continue;
            }

            // keyword の場合は keyword1 〜 5 をつなげたものを LIKE 検索する
            if ($field === 'keyword') {
                $f = <<<EOL
CONCAT(
    IFNULL(keyword1, ''), '|',
    IFNULL(keyword2, ''), '|',
    IFNULL(keyword3, ''), '|',
    IFNULL(keyword4, ''), '|',
    IFNULL(keyword5, '')
)
EOL;
                $query->where(DB::raw($f), 'LIKE', "%{$val}%");
                continue;
            }

            if (Str::startsWith(strtolower($field), '(like)')) {
                $op = 'LIKE';
                $val = "%{$val}%";
            } elseif (Str::startsWith(strtolower($field), '(lt)')) {
                $op = '<';
            } elseif (Str::startsWith(strtolower($field), '(le)')) {
                $op = '<=';
            } elseif (Str::startsWith(strtolower($field), '(gt)')) {
                $op = '>';
            } elseif (Str::startsWith(strtolower($field), '(ge)')) {
                $op = '>=';
            } else {
                $op = '=';
            }

            $f = preg_replace('/\(\w+\)/', '', $field, 1);
            $query->where($f, $op, $val);
        }

        return $query;
    }
}
