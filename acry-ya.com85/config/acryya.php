<?php

return [

    /*
    |--------------------------------------------------------------------------
    | アクリ屋 独自設定
    |--------------------------------------------------------------------------
    |
    | app/ 配下での env() 直呼びを避け、config:cache でも値が null にならないよう
    | ここに集約する。参照は config('acryya.*')。
    |
    */

    // 出荷目安 CSV（zaiko6.csv）のパス
    'deliveries_path' => env('DELIVERIES_PATH'),

    // 画像の表示パス（public からの相対パス）
    'display_image_path' => env('DISPLAY_IMAGE_PATH', 'storage/images/'),

];
