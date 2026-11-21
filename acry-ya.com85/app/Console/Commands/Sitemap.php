<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class Sitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:sitemap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'サイトマップの生成';

    //出力するhtmlファイル
    private $htmlList = [];

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $lastmod = date('Y-m-d');
        $filepath = public_path('sitemap.xml');

        $str = <<<STR
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xhtml="http://www.w3.org/1999/xhtml" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <url>
        <loc>https://www.acry-ya.com/</loc>
        <lastmod>{$lastmod}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>

STR;
        file_put_contents($filepath, $str);

        //カテゴリの追記
        $str = '';
        $categories = \DB::table('product_categories')
                ->select('product_category_id')
                ->whereNull('link_url')
                ->get();
        foreach($categories as $v){
            $str .= <<<STR
    <url>
        <loc>https://www.acry-ya.com/products/list/{$v->product_category_id}/</loc>
        <lastmod>{$lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
    </url>

STR;
        }
        file_put_contents($filepath, $str, FILE_APPEND);

        //商品詳細の追記
        $str = '';
        $products = \DB::table('products')
                ->select('product_id')
                ->where('is_display', 1)
                ->whereNull('deleted_at')
                ->get();
        foreach($products as $v){
            $str .= <<<STR
    <url>
        <loc>https://www.acry-ya.com/products/detail/{$v->product_id}/</loc>
        <lastmod>{$lastmod}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>

STR;
        }
        file_put_contents($filepath, $str, FILE_APPEND);

        //htmlの追記
        $str = '';
        $this->addHtmlList(public_path());
        foreach($this->htmlList as $v){
            $str .= <<<STR
    <url>
        <loc>https://www.acry-ya.com/{$v}</loc>
        <lastmod>{$lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
    </url>

STR;
        }
        file_put_contents($filepath, $str, FILE_APPEND);


        $addtionalURL = \Config::get('addtional_sitemap_url');
        $base = '<url>
            <loc>____URL____</loc>
            <lastmod>_____DATE____</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.5</priority>
        </url>';
        $setList = [];
        foreach( $addtionalURL as $url ){
          $set = str_replace( '____URL____', $url, $base );
          $set = str_replace( '_____DATE____', $lastmod, $set );
          $setList[] = $set;
        }
        file_put_contents($filepath, implode( "\n", $setList ), FILE_APPEND);


        file_put_contents($filepath, '</urlset>', FILE_APPEND);
    }

    /*
     * 出力リストに追加
     */
    private function addHtmlList($dir)
    {
        $list = glob("{$dir}/*");
        $ignoreList = \Config::get('sitemap_exclusion');

        foreach($list as $path){

            $file = str_replace(public_path() . '/', '', $path);

            //無視リストのチェック
            if(in_array($file, $ignoreList)){
                continue;
            }
            //ディレクトリの場合は再帰処理
            if(is_dir($path)){
                $this->addHtmlList($path);
                continue;
            }
            //htmlファイルでなければ除外
            if(substr($file, -5) != '.html' && substr($file, -4) != '.htm'){
                continue;
            }

            //出力リストに追加
            $this->htmlList[] = $file;
        }
    }
}
