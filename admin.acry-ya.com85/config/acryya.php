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

    // 画像の保存先（storage/app 配下の相対パス）
    'image_storage' => env('IMAGE_STORAGE', 'public/img_storage'),

    // 画像の表示パス（public からの相対パス）
    'display_image_path' => env('DISPLAY_IMAGE_PATH', 'storage/images/'),

    // フロントサイトの URL（管理画面から画像 URL を組み立てる際に使用）
    'site_url' => env('SITE_URL'),

];
