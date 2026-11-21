<?php
/* ===========================================================================
 * ヘルパ関数
 * @Author
 * ========================================================================= */
class Helper {
    
    // --------------------------------------------------------
    /**
     * CURL GET
     * @param string $url
     * @param array $params
     */
    public function curlGet( $url, $params = [] ){
        
        if(empty($params)){
            $setUrl = $url;
        }
        else {
            $setUrl = $url . '?' . http_build_query( $params );
        }
        
        $header = [
            //  "Content-Type: application/json",
            // "Accept: application/json",
            // "Authorization: Bearer HogeHoge" 
            'X-Requested-With: XMLHttpRequest'
            
        ];
        
        $curl=curl_init();
        curl_setopt($curl,CURLOPT_URL, $setUrl );
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'GET');
        curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
        curl_setopt($curl,CURLOPT_SSL_VERIFYPEER, FALSE);  // 証明書の検証を無効化
        curl_setopt($curl,CURLOPT_SSL_VERIFYHOST, FALSE);  // 証明書の検証を無効化 
        curl_setopt($curl,CURLOPT_RETURNTRANSFER, TRUE); // 返り値を文字列に変更
        curl_setopt($curl,CURLOPT_FOLLOWLOCATION, TRUE); // Locationヘッダを追跡

        $output= curl_exec($curl);
        $errno = curl_errno($curl);
        curl_close($curl);
        
        // エラーハンドリング
        if ($errno !== CURLE_OK) {
        }
        
        return $output;
    }
    // --------------------------------------------------------
    
    
}