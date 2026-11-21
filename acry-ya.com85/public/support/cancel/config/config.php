<?php

// ----------基本設定開始---------- //

// 送信先メールアドレス
//$adminMail = "renewal@acry-ya.com,k-hamahashi@fands-c.com,develop@plaidea.jp";
$adminMail = "order-1_ay@acry-ya.com";
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
    'user' => 'order-1_ay@acry-ya.com',
    'password' => 'mma12',
];



// 送信完了メッセージ
$completionMessage = <<<EOD
送信が完了しました。
ありがとうございます。
EOD
;

// リターンメールのメールタイトル
$returnMailTitle = "注文キャンセルお申込み（アクリ屋ドットコム）";

// リターンメールのヘッダーメッセージ
$returnMailHeader = <<<EOD
お問い合わせフォームよりお問い合わせをいただきありがとうございます。

お問い合わせ内容を確認の上、ご返信先メールアドレスへ回答いたしますので、
しばらくお待ちくださいますようお願いいたします。


なお、お問い合わせから48時間経過しましても回答がない場合、
サポートにてお問い合わせが受信できていない可能性がございます。

大変お手数ですが、「{$adminArray[0]}」まで
再度お問い合わせくださいますようお願いいたします。

EOD
;


// リターンメールのフッターメッセージ
$returnMailFooter = <<<EOD
アクリ屋ドットコム(株式会社さくら樹脂)
神奈川県横浜市港北区樽町4-13-2
ご連絡先：toiawase-1_ay@acry-ya.com
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
