<?php
require_once(__DIR__ . '/config/config.php');
$form = new guide\Form();
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
    <meta name="description" content="アクリ屋ドットコムのポイント会員にお申し込み頂き、ホームページ（ショッピングカート経由）にて製品をお求め頂くと、ポイントが貯まりお買い物に利用できる他、便利な機能がお使い頂けるようになります。">
    <meta name="keywords" content="アクリル板,アクリルケース,アクリル加工,販売,通販,価格,当日出荷,当日発送,ポスターフレーム,フォトフレーム,樹脂,アクリ屋">
    <title>校費・研究費の売掛取引（請求書後払い）｜アクリ屋ドットコム</title>
    <meta property="og:title" content="校費・研究費の売掛取引（請求書後払い）｜アクリ屋ドットコム">
    <meta property="og:type" content="website">
    <meta property="og:url" content="/guide/payment/trade/">
    <meta property="og:image" content="/assets/images/ogp.jpg">
    <meta property="og:site_name" content="アクリ屋ドットコム">
    <meta property="og:description" content="アクリ屋ドットコムのポイント会員にお申し込み頂き、ホームページ（ショッピングカート経由）にて製品をお求め頂くと、ポイントが貯まりお買い物に利用できる他、便利な機能がお使い頂けるようになります。">
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
    <script src="https://ajaxzip3.github.io/ajaxzip3.js" charset="UTF-8"></script>
</head>
<body id="p-naireOrder">
<div id="wrapper" class="l-column js-menu">
    <?php echo $header; ?>
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
                        <li><a href="/guide/payment/trade/">お支払いについて</a></li>
                        <li>校費・研究費の売掛取引（請求書後払い）お申込み</li>
                    </ul>
                </nav>
                <?php echo $notice; ?>
                <h1 class="main__title c-heading--xl">校費・研究費の売掛取引（請求書後払い）お申込み</h1>
                <?php $form->create(); ?>
                    <section class="form__section c-section">
                        <table class="c-table--form">
                            <tbody>
                            <tr>
                                <th class="c-text--md-left is-required">学校 / 公的研究機関名</th>
                                <td class="c-text--md-left"><span class="form__input ">
                                    <?php $form->inputOrgan("学校/公的研究機関名", "必須" , "アクリ屋大学"); ?>
                                    <p class="table__note c-text--sm-note">企業様は承っておりません。</p>
                                </td>
                            </tr>
                            <tr>
                                <th class="c-text--md-left is-required">ご担当者名</th>
                                <td class="c-text--md-left"><span class="form__input ">
                                            <?php $form->inputName("ご担当者名", "アクリ屋 太郎"); ?><span
                                                class="form__effect"></span></span>
                                </td>
                            </tr>
                            <tr>
                                <th class="c-text--md-left is-required">ご担当者名（ふりがな）</th>
                                <td class="c-text--md-left"><span class="form__input kana_form">
                                            <?php $form->inputNameKana("ご担当者名（ふりがな）", "必須", "あくりや たろう"); ?><span
                                                class="form__effect"></span></span>
                                </td>
                            </tr>
                            <tr>
                                <th class="c-text--md-left is-required">メールアドレス</th>
                                <td class="c-text--md-left"><span class="form__input" id="mail_form">
                                            <?php $form->inputMail("メールアドレス", "acry-ya@acry-ya.com"); ?><span
                                                class="form__effect"></span></span>
                                    <p class="table__note c-text--sm-note">こちらにご入力頂いたアドレスで登録されます。</p>
                                    <p class="table__note c-text--sm-note">ご注文の際は必ずご入力頂いたメールアドレスをご入力ください。</p>
                                </td>
                            </tr>
                            <tr>
                                <th class="c-text--md-left is-required">メールアドレス(確認用)</th>
                                <td class="c-text--md-left"><span class="form__input" id="mail_form_again">
                                            <?php $form->inputMailCheck("メールアドレス(確認用)", "acry-ya@acry-ya.com"); ?><span
                                                class="form__effect"></span></span>
                                    <p class="table__note c-text--sm-note">同じアドレスをもう一度ご入力ください。</p>
                                </td>
                            </tr>
                            <tr>
                                <th class="c-text--md-left is-required">電話番号</th>
                                <td class="c-text--md-left"><span class="form__input">
                                            <?php $form->inputTel("電話番号", "必須"); ?><span
                                                class="form__effect"></span></span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                    <!--send-->
                    <div class="form__action">
                        <button type="reset" class="c-button--xl-gray js-disabledSwitch__content">リセット</button>
                        <?php $form->end('確認画面へ'); ?>
                    </div>
                </form>
            </div>
        </main>
        <?php echo $footer; ?>
    </div>
</div>
<script type="text/javascript" src="/assets/javascripts/form_validation.js"></script>
    <?php
    $jsonLD = [
      '@context' => 'http://schema.org',
      '@type' => 'website',
      'name' => 'アクリル板材料の加工とアクリル製品の専門店 | アクリ屋ドットコム',
      'inLanguage' => 'jp',
      'publisher' => [
        '@type' => 'Organization',
        'name' => '株式会社さくら樹脂',
      ],
      'headline' => 'アクリル板材料の加工とアクリル製品の専門店',
      'description' => 'アクリル板材料の加工とアクリル製品のことなら「アクリ屋ドットコム」。アクリル製品のセミオーダー加工や特注品のご注文も承っております。１万円以上は送料無料。',
      'url' => 'https://acry-ya.com/'
    ];
    ?>
    <script type="application/ld+json">
    <?= json_encode( $jsonLD, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT ) ?>
    </script>

    <?php
    $jsonLD = [
      '@context' => 'http://schema.org',
      '@type' => 'Organization',
      'name' => '株式会社さくら樹脂',
      'description' => "株式会社さくら樹脂は、アクリル材料加工・アクリル製品のネットショップ「アクリ屋ドットコム」の運営を主体に、その他、工業用樹脂部品の受託製造を行っています。製品は、精密で精度の要求される工業製品を制作する加工技術をベースに、最新設備を駆使し、各種の樹脂加工のノウハウを持つ専門の職人が制作致します。",
      'url' => 'https://'. $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'],
      'telephone' => '+81 45-547-6372',
      'address' => [
         '@type'=> 'PostalAddress',
         'streetAddress' => '樽町4-13-2',
         'addressLocality' =>  '港北区',
         'addressRegion' => '神奈川県',
         'postalCode' => '222-0001',
         'addressCountry'=> "JP"
      ]
    ];
    ?>
    <script type="application/ld+json">
    <?= json_encode( $jsonLD, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT ) ?>
    </script>
<?php echo $body_end; ?>
</body>
</html>
