<?php
require_once(__DIR__ . '/config/config.php');
$send = new web\Send();
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
    <meta name="keywords" content="">
    <title>送信完了｜アクリ屋ドットコム</title>
    <meta property="og:title" content="送信完了｜アクリ屋ドットコム">
    <meta property="og:type" content="website">
    <meta property="og:url" content="/free_orderEtcplastics/video_meeting/">
    <meta property="og:image" content="/assets/images/ogp.jpg">
    <meta property="og:site_name" content="アクリ屋ドットコム">
    <meta property="og:description" content="アクリ屋ドットコム運営母体である、樹脂加工専門会社、株式会社さくら樹脂が法人、大学研究機関様の樹脂加工のご相談承ります。">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="アクリ屋ドットコム">
    <meta name="twitter:description" content="アクリ屋ドットコム運営母体である、樹脂加工専門会社、株式会社さくら樹脂が法人、大学研究機関様の樹脂加工のご相談承ります。">
    <meta name="twitter:image" content="/assets/images/ogp.jpg">
    <meta itemprop="image" content="/assets/images/ogp.jpg">
    <!--meta(property='fb:app_id', content='')-->
    <link rel="shortcut icon" href="/assets/images/favicon.ico">
    <link rel="apple-touch-icon" href="/assets/images/favicon.png">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
    <link rel="stylesheet" href="/assets/stylesheets/base.css">
    <link rel="stylesheet" href="/assets/stylesheets/layout.css">
    <link rel="stylesheet" href="/assets/stylesheets/style.css">
    <link rel="stylesheet" href="/assets/stylesheets/projects/full-order-web.css">
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
<body id="p-support">
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
                        <li><a href="/free_orderEtcplastics/">エンプラ加工お見積り依頼</a></li>
                        <li><a href="/free_orderEtcplastics/video_meeting/">Zoom面談予約依頼</a></li>
                        <li>入力内容の確認</li>
                        <li>送信完了</li>
                    </ul>
                </nav>
                <h1 class="main__title c-heading--xl">送信完了</h1>
                <div class="l-form--contact">
                    <div class="form__thanks">
                        <h2 class="c-heading--lg">送信が完了いたしました。</h2>
                        <p class="c-text--md">Zoom面談予約のご依頼を確かに承りました。<br>いただいた内容につきましては、数日中にご連絡させていただきます。
                        </p>
                        <a href=<?php echo $returnUrl; ?> class="c-button--md-gray">トップへ戻る</a>
                    </div>
                </div>
            </div>
        </main><?php echo $footer; ?>
    </div>
</div>
<?php echo $body_end; ?>
</body>
</html>
