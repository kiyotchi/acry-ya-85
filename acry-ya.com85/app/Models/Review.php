<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Str;
use App\Models\ReviewGood;

class Review extends Model
{
    use \App\Models\Concerns\SerializesDatesLegacy;

    use SoftDeletes;

    protected $casts = [
        'deleted_at' => 'datetime',
    ];

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
        'file',
        'ip',
        'host',
        'inputkey',
        'user_agent',
        'note',
        'file',
    ];

    static public function pageInfoList( $keyword ){

        $pageMax = 5;

        $reviews = [
			'firstPage' => [],
			'allCount' => 0,
			'pageCount' => 1,
			'stars' => [
				'1' => 0,
				'2' => 0,
				'3' => 0,
				'4' => 0,
				'5' => 0,
			],
			'avarage' => 0,
		];
		$reviews['firstPage'] = self
			::where(function($query) use ( $keyword ){
                if( $keyword != '' ){
                    $query
                        ->where('keyword1', $keyword )
                        ->orWhere('keyword2', $keyword )
                        ->orWhere('keyword3', $keyword )
                        ->orWhere('keyword4', $keyword )
                        ->orWhere('keyword5', $keyword )
                    ;
                }
			})
			->where( 'status', 1 )
            ->orderBy( 'created_at', 'desc')
            ->limit( $pageMax )
			->get();

		$reviews['allCount'] = self
			::where(function($query) use ( $keyword ){
				if( $keyword != '' ){
                    $query
                        ->where('keyword1', $keyword )
                        ->orWhere('keyword2', $keyword )
                        ->orWhere('keyword3', $keyword )
                        ->orWhere('keyword4', $keyword )
                        ->orWhere('keyword5', $keyword )
                    ;
                }
			})
			->where( 'status', 1 )
			->orderBy( 'created_at', 'desc')
			->count();

		$reviews['pageCount'] = ceil( $reviews['allCount'] / $pageMax );
		$reviewAvarage = [
			'counts' => 0,
			'plus' => 0,
		];
        
		for( $x = 5; $x > 0; $x -- ){
			$reviews['stars'][$x] = self
				::where(function($query) use ( $keyword ){
					if( $keyword != '' ){
                        $query
                            ->where('keyword1', $keyword )
                            ->orWhere('keyword2', $keyword )
                            ->orWhere('keyword3', $keyword )
                            ->orWhere('keyword4', $keyword )
                            ->orWhere('keyword5', $keyword )
                        ;
                    }
				})
				->where( 'star', $x )
				->where( 'status', 1 )
				->orderBy( 'created_at', 'desc')
				->count();
			$reviewAvarage['counts'] += $reviews['stars'][$x];
			$reviewAvarage['plus'] += $reviews['stars'][$x] * $x;
		}
        $reviews['stars'] = array_reverse( $reviews['stars'] );
		if( $reviewAvarage['counts'] > 0 ){
			//$reviews['avarage'] = number_format( $reviewAvarage['plus']/$reviewAvarage['counts'], 2, '.', '' );
            $reviews['avarage'] = round( $reviewAvarage['plus']/$reviewAvarage['counts'], 1 );
		}
		else {
			$reviews['avarage'] = 0;
		}
        
        return $reviews;
    }


    public function scopesearchApi($query, $data)
    {
        $query->where('status', 1);

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
                //$query->where(DB::raw($f), 'LIKE', "%{$val}%");
                //$query->where(DB::raw($f), '=', "{$val}");
                $query->where('keyword1', $val );
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

    public function getFileAttribute($value)
    {
        /*
        if (empty($value) || !file_exists(public_path($value))) {
            return false;
        }
        */
        return $value;
    }

    /*
     * 参考になったのリレーション
     */
    public function goods()
    {
        return $this->hasMany('\App\Models\ReviewGood');
    }

    /*
     * 参考になったを押しているかどうか
     */
    public function is_already_good($cookie_code)
    {
        if(empty($cookie_code)){
            return false;
        }

        return !is_null(
            ReviewGood::query()
                ->where('review_id', $this->id )
                ->where('cookie_code', $cookie_code)
                ->first()
        );
    }

}
