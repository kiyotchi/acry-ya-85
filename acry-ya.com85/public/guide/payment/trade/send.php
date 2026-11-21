<?php
require_once(__DIR__ . '/config/config.php');
$send = new guide\Send();
$send->smtpMode = $isSmtp;
$send->smtpSettings = $stmpSettings;
$send->run($adminMail, $adminName, $returnMailTitle, $returnMailHeader, $returnMailFooter);
?>
<?php include $_SERVER['DOCUMENT_ROOT'] . 'static.php'; ?><!DOCTYPE html>
<html lang="ja" prefix="og: http://ogp.me/ns#">
<head>
    <?php echo $head_start; ?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta meta http-equiv="Expires" content="604800">
    <meta name="format-detection" content="telephone=no">
    <meta name="description" content="">
    <meta name="keywords" content="アクリル板,アクリルケース,アクリル加工,販売,通販,価格,当日出荷,当日発送,ポスターフレーム,フォトフレーム,樹脂,アクリ屋">
    <title>送信完了｜アクリ屋ドットコム</title>
    <meta property="og:title" content="送信完了｜アクリ屋ドットコム">
    <meta property="og:type" content="website">
    <meta property="og:url" content="/naire_order/typeface/order/">
    <meta property="og:image" content="/assets/images/ogp.jpg">
    <meta property="og:site_name" content="アクリ屋ドットコム">
    <meta property="og:description" content="アクリル板材料の加工とアクリル製品のことなら「アクリ屋ドットコム」。アクリル製品のセミオーダー加工や特注品のご注文も承っております。１万円以上は送料無料。">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="アクリ屋ドットコム">
    <meta name="twitter:description" content="アクリル板材料の加工とアクリル製品のことなら「アクリ屋ドットコム」。アクリル製品のセミオーダー加工や特注品のご注文も承っております。１万円以上は送料無料。">
    <meta name="twitter:image" content="/assets/images/ogp.jpg">
    <meta itemprop="image" content="/assets/images/ogp.jpg">
    <!--meta(property='fb:app_id', content='')-->
    <link rel="shortcut icon" href="/assets/images/favicon.ico">
    <link rel="apple-touch-icon" href="/assets/images/favicon.png">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
    <link rel="stylesheet" href="/assets/stylesheets/base.css">
    <link rel="stylesheet" href="/assets/stylesheets/layout.css">
    <link rel="stylesheet" href="/assets/stylesheets/style.css">
    <link rel="stylesheet" href="/assets/stylesheets/projects/guide-payment.css">
    <link rel="stylesheet" href="/assets/stylesheets/acry-ya.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
    <script src="/assets/javascripts/common.js"></script>
    <script src="/assets/javascripts/function.js" defer></script>
    <script src="/assets/javascripts/plugins/cookie.js" defer></script>
    <script src="/assets/javascripts/plugins/slick-1.6.0.min.js"></script>
    <script src="/assets/javascripts/plugins/slick-1.6.0.setting.js"></script>
</head>
<body id="p-naireOrder">
<div id="wrapper" class="l-column js-menu"><?php echo $header; ?>
    <?php echo $sidemenu; ?>
    <div class="column__right">
        <div class="l-loading js-loading"><img src="/assets/images/loading.png" class="loading__image is-animated fx-infinite"></div>
        <div class="l-banner"><img src="/assets/images/banner/bn_souryomuryo_sp.jpg"></div>
        <main class="l-main">
            <div class="main__sub--white">
                <nav class="c-pankuzu--scroll">
                    <ul class="pankuzu__list">
                        <li><a href="/">HOME</a></li>
                        <li><a href="/guide/">ご利用ガイド</a></li>
                        <li><a href="/guide/payment/">お支払いについて</a></li>
                        <li>校費・研究費の売掛取引（請求書後払い）お申込み</li>
                        <li>入力内容の確認</li>
                        <li>送信完了</li>
                    </ul>
                </nav>
                <h1 class="main__title c-heading--xl">送信完了</h1>
                <div class="l-form--contact">
                    <div class="form__thanks">
                        <h2 class="c-heading--lg">送信が完了いたしました。</h2>
                        <ul class="c-list--disc u-margin--bottom-16">
                            <li class="list__item">お客様にて申込書をダウンロード・印刷をして頂き、必要事項をご記入の上「アクリ屋ドットコム」宛てにFAXをお願い致します。</li>
                            <li class="list__item">弊社にて申込書の確認がとれない場合は、お手続きの判断が出来かねますのでご了承ください。</li>
                            <li class="list__item">内容を確認させて頂き、お取引開始となりました時点で弊社よりご連絡させて頂きます。</li>
                        </ul>
                        <div class="u-margin--bottom-48"><a href="/assets/pdf/projects/guide/payment/trade/urikake_form.pdf" target="_blank" class="c-link c-heading--sm">
                            <i class="link__icon--before c-icon--triangle-r"></i>取引申込書のダウンロードはこちら</a>
                        </div>
                        <a href="<?php echo $returnUrl; ?>" class="c-button--md-gray">トップへ戻る</a>
                    </div>
                </div>
            </div>
        </main><?php echo $footer; ?>
    </div>
</div>
<?php echo $body_end; ?>
</body>
</html>
