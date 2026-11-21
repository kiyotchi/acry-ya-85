<?php
require_once __DIR__ . '/../vendor/autoload.php';

// env設定値読み込み
$dotenv = Dotenv\Dotenv::create(__DIR__ . '/..');
$dotenv->load();
$app_url = getenv('APP_URL');

$headers = getallheaders();

$get_parameter = '';
if( !empty($is_error_page) ) {
	$get_parameter = 'is_error_page=1';
}
if( !empty($get_parameter) ) $get_parameter = '?' . $get_parameter;


//小さい自作フレームワークを呼ぶ（モデルはないよ）
require_once __DIR__.'/static4class/StaticClasses.php';
$StaticClasses = new StaticClasses( $app_url );



// パーツ読み込み
$head_start = curl_get_contents($app_url . "/head_start.php" . $get_parameter);
$body_end = curl_get_contents($app_url . "/body_end.php" . $get_parameter);
$header = curl_get_contents($app_url . "/header.php" . $get_parameter);
$footer = curl_get_contents($app_url . "/footer.php" . $get_parameter);
$sidemenu = curl_get_contents($app_url . "/sidemenu.php" . $get_parameter);
$notice = curl_get_contents($app_url . "/notice.php" . $get_parameter);

/**
 * CURL処理
 *
 * @param $url
 * @param int $timeout
 *
 * @return bool|string
 */
function curl_get_contents( $url, $timeout = 60 )
{
    //	global $headers;

    $headers = getallheaders();
  $cookie = ( !empty($headers['Cookie']) ) ? $headers['Cookie'] : null ;

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_HEADER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
	curl_setopt($ch, CURLOPT_COOKIE, $cookie);
	$result = curl_exec($ch);

	curl_close($ch);

	return $result;
}
