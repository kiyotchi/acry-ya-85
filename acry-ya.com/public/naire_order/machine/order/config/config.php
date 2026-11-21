<?php

// ----------基本設定開始---------- //

// 送信先メールアドレス
//$adminMail = "renewal@acry-ya.com,k-hamahashi@fands-c.com,develop@plaidea.jp";
$adminMail = "order_form@acry-ya.com";
//$adminMail = "renewal@acry-ya.com";



// 送信先メールアドレスを配列化(編集しないでください)
$adminArray = array();
$adminArray = explode(',', $adminMail);


// 送信者名
$adminName = "アクリ屋ドットコム(株式会社さくら樹脂)";


// 送信後に戻るURL
$returnUrl = getenv('APP_URL')."/";

//SMTP
$isSmtp = true;
$stmpSettings = [
    'host' => 'mail.acry-ya.com',
    'port' => 587,
    'transMode' => 'none',//none|tls|ssl
    'user' => 'order_form@acry-ya.com',
    'password' => 'mma13',
];


// 送信完了メッセージ
$completionMessage = <<<EOD
送信が完了しました。
ありがとうございます。
EOD
;

// リターンメールのメールタイトル
$returnMailTitle = "名入れ【機械彫刻】オーダーフォーム（アクリ屋ドットコムホームページより）";

// リターンメールのヘッダーメッセージ
$returnMailHeader = <<<EOD
ご注文ありがとうございます。
アクリ屋ドットコムからの自動送信メールです。

後ほど営業担当よりご連絡のメールをお送りいたしますので、
今しばらくお待ちください。

弊社3営業日以内に連絡が無い場合は、お手数ですが
下記へご連絡ください。

EOD
;


// リターンメールのフッターメッセージ
$returnMailFooter = <<<EOD
アクリ屋ドットコム(株式会社さくら樹脂)
神奈川県横浜市港北区樽町4-13-2
ご連絡先：order_form@acry-ya.com
https://www.acry-ya.com/
TEL：045-547-6372 FAX：045-547-5945
営業日：AM9:00～PM5:30 土日祝日除く(詳細下記)
https://www.acry-ya.com/about/calendar/

EOD
;

// ----------基本設定終了---------- //


// ----------添付ファイル設定開始---------- //

// 拡張子制限（0=しない・1=する）
$ext_denied = 0;
// 許可する拡張子リスト
$ext_allow1 = "jpg";
$ext_allow2 = "jpeg";
$ext_allow3 = "gif";
$ext_allow4 = "pdf";
// 配列に格納しておく
$EXT_ALLOWS = array($ext_allow1, $ext_allow2, $ext_allow3, $ext_allow4);

// アップロード容量制限（0=しない・1=する）
$maxmemory = 0;
// 最大容量（KB）
$max = 6000;

// ----------添付ファイル設定終了---------- //


// ----------ここから下は変更不要---------- //

require_once(__DIR__ . "/../lib/functions.php");
require_once(__DIR__ . "/autoload.php");

session_start();
