<?php
/* ===========================================================================
 * レビュー操作
 * @Author
 * ========================================================================= */
class Review {
    
    public $mainClass;
    
    // --------------------------------------------------------
    /**
     * コンストラクタ
     */
    public function __construct( $mainClass ) {
        $this->mainClass = $mainClass;
    }
    // --------------------------------------------------------
    /**
     * 初期呼び出し
     * @param string $keyword
     */
    public function run( $keyword ){
        $url = $this->mainClass->host.'/review';
        
        $cookie_code = $_COOKIE["acryya_review"] ?? null;
        if(empty($cookie_code)){
            $cookie_code = sha1( time() . '-' . rand( 0, 10000 ) );
        }
        setcookie("acryya_review", $cookie_code, time() + 86400 * 730, '/');
        
        $params = [
            's[keyword]' => $keyword ,
            'format' => 'static',
            'cookie_code_ajax' => $cookie_code
        ];
        $res = $this->mainClass->Helper->curlGet( $url, $params );
        $res = json_decode( $res );
        
        ini_set( 'display_errors', 1 );
        
        $params = [
            'pagination' => $res->pagination,
            'reviews' => $res->reviews,
            'pageInfoList' => (array)$res->pageInfoList,
            'keyword' => $keyword,
        ];
        
        
        $pageInfoList = (array)$res->pageInfoList;
        if( $pageInfoList['allCount'] == 0 ){
            $aggregateRating = false;
        }
        else {
            $aggregateRating = [
                "@type" => "AggregateRating",
                "ratingValue" =>  $pageInfoList['avarage'],
                "ratingCount" => $pageInfoList['allCount']
            ];
        }
        
        
        return[
            'aggregateRating' => $aggregateRating,
            'list' => 
                $this->mainClass->View->render(
                    'review/init.php',
                    $params,
                    true
                )
        ];
    }
    
    // --------------------------------------------------------
    /**
     * レーティング出力
     */
    public function jsonLdRation( $keyword ){
        
    }
    
    // --------------------------------------------------------
}
