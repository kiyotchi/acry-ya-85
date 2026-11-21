<?php
require_once(__DIR__ . '/config/config.php');
$form = new cancel\Form();
?>
<?php include $_SERVER['DOCUMENT_ROOT'] . 'static.php'; ?>
<!DOCTYPE html>
<html lang="ja" prefix="og: http://ogp.me/ns#">
<head>
    <?php echo $head_start; ?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta meta http-equiv="Expires" content="604800">
    <meta name="format-detection" content="telephone=no">
    <meta name="description" content="アクリル板材料の加工とアクリル製品のことなら「アクリ屋ドットコム」。アクリル製品のセミオーダー加工や特注品のご注文も承っております。１万円以上は送料無料。">
    <meta name="keywords" content="アクリル板,アクリルケース,アクリル加工,販売,通販,価格,当日出荷,当日発送,ポスターフレーム,フォトフレーム,樹脂,アクリ屋">
    <title>キャンセルお申込み｜アクリ屋ドットコム</title>
    <meta property="og:title" content="キャンセルお申込み｜アクリ屋ドットコム">
    <meta property="og:type" content="website">
    <meta property="og:url" content="/support/cancel/">
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
    <link rel="stylesheet" href="/assets/stylesheets/projects/support.css">
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
<body id="p-support">
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
                        <li><a href="/support/">サポート</a></li>
                        <li>注文キャンセル依頼</li>
                    </ul>
                </nav>
                <?php echo $notice; ?>
                <h1 class="main__title c-heading--xl">注文キャンセル依頼</h1>
                <?php $form->create(); ?>
                <!--<form class="l-form--contact c-form">-->
                <section class="c-section">
                    <div class="c-flame--sm-gray">
                        <p>
                            弊社は少量多品種の製品を取り扱っておりますため、ご注文をお受けしてから材料の手配や製品の製造を行なっております。また、お客様にスピーディに製品をお届けするため、ご注文を頂いて<span class="c-text--md-weightBold-danger"> 1時間 </span>後には作業に入ります。<br>お手続きは、全てご注文後<span class="c-text--md-weightBold-danger"> 1時間 </span>以内とさせて頂きます。<br>それを過ぎた場合はご対応できませんので、ご了承願います。
                        </p>
                    </div>
                </section>
                <section class="c-section">
                    <h2 class="c-heading--md-border">キャンセルの期限</h2>
                    <p>商品のキャンセルは、ご注文後1時間以内とさせて頂きます。それを過ぎてのご対応はお受け致しておりません。</p>
                </section>
                <section class="c-section">
                    <h2 class="c-heading--md-border">一部キャンセル</h2>
                    <p>複数のご注文の中から、一部キャンセルの場合は、注文番号分を全量キャンセルして頂き、ご希望商品を再注文願います。<br>商品のキャンセルは、ご注文後1時間以内とさせて頂きます。それを過ぎてのご対応はお受け致しておりません。
                    </p>
                </section>
                <section class="c-section">
                    <h2 class="c-heading--md-border">注文内容の変更</h2>
                    <p>ご注文内容（一部または全部）を変更したい場合は、注文番号分を全量キャンセルして頂き、ご希望商品を再注文願います。<br>商品のキャンセルは、ご注文後1時間以内とさせて頂きます。それを過ぎてのご対応はお受け致しておりません。
                    </p>
                </section>
                <section class="c-section">
                    <h2 class="c-heading--md-border">追加注文</h2>
                    <section class="section__sub">
                        <h3 class="c-heading--sm">既にご注文を頂いている商品と追加注文を同時発送ご希望の場合</h3>
                        <p>追加注文の場合、諸費用が再計算になりますので、注文番号分を全量キャンセルして頂き、ご希望商品を再注文願います。<br>商品のキャンセルは、ご注文後1時間以内とさせて頂きます。それを過ぎた場合はキャンセルできませんので、追加のご注文分は別のご注文とさせて頂きます。
                        </p>
                    </section>
                </section>
                <section class="p-hidden">
                    <div class="c-text--center">
                        <label for="label1" class="hidden__button c-button--xl c-text--center-primary u-margin--bottom-32">上記の内容を確認しました<i class="button__icon--after c-icon--arrow-b-white"></i></label>
                        <input id="label1" type="checkbox" class="hidden__input">
                        <div class="hidden__show">
                            <section class="form__section c-section">
                                <h2 class="c-heading--md-border">キャンセルしたい注文</h2>
                                <table class="c-table--form">
                                    <tbody>
                                    <tr>
                                        <th class="c-text--md-left is-required">ご注文番号（半角）</th>
                                        <td class="c-text--md-left">
                                            <span class="form__input "><?php $form->inputOrderNumber("ご注文番号（半角）", "必須","00000000"); ?><span class="form__effect"></span></span>

                                            <p class="table__note c-text--sm-note">ご注文番号はお客様にお送りしておりますオーダーメールの件名(8桁の番号)になります。</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="c-text--md-left is-required">ご注文日</th>
                                        <td class="c-text--md-left date_form">
                                            <div class="u-display--flex-center form__orderdata">
                                                <span class="form__orderday">
                                                  <?php $form->inputOrderMounth("ご注文日(月)", "必須", "1"); ?>
                                                  <span class="form__effect"></span>
                                                </span>
                                                <span class="u-margin--left-8 u-width--10">月</span>
                                                <span class="form__orderday">
                                                  <?php $form->inputOrderDate("ご注文日(日)", "必須","1"); ?>
                                                  <span class="form__effect"></span>
                                                </span>
                                                <span class="u-margin--left-8 u-width--10">日</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="c-text--md-left is-required">キャンセル目的</th>
                                        <td class="c-text--md-left"><span class="form__select ">
                                                        <?php
                                                        $params = array(
                                                            "キャンセル(再注文は無し)",
                                                            "注文間違えのため、全部キャンセルして、後ほど再注文",
                                                            "注文内容変更のため、全部キャンセルして、後ほど再注文",
                                                            "追加注文のため、全部キャンセルして後ほど再注文",
                                                        );
                                                        $form->selectCancelReason("キャンセル目的", $params, "必須");
                                                        ?>
                                                <span class="form__effect"></span></span>
                                            <p class="table__note c-text--sm-note">キャンセル処理の可否は弊社営業時間内にご回答差し上げます。</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </section>
                            <section class="form__section c-section">
                                <h2 class="c-heading--md-border">お客様情報</h2>
                                <table class="c-table--form">
                                    <tbody>
                                    <tr>
                                        <th class="c-text--md-left is-required">お名前</th>
                                        <td class="c-text--md-left"><span class="form__input ">
                                                        <?php $form->inputName("お名前", "アクリ屋 太郎"); ?><span
                                                        class="form__effect"></span></span>
                                            <p class="table__note c-text--sm-note">法人の場合はご担当者名</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="c-text--md-left is-required">お名前（ふりがな）</th>
                                        <td class="c-text--md-left"><span class="form__input kana_form">
                                                        <?php $form->inputNameKana("お名前（ふりがな）", "必須", "あくりや たろう"); ?><span
                                                        class="form__effect"></span></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="c-text--md-left">法人名</th>
                                        <td class="c-text--md-left"><span class="form__input ">
                                                        <?php $form->inputCorporateName("法人名", null , "アクリ屋"); ?><span
                                                        class="form__effect"></span></span>
                                            <p class="table__note c-text--sm-note">会社名・団体名など</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="c-text--md-left">法人名（ふりがな）</th>
                                        <td class="c-text--md-left"><span class="form__input kana_form">
                                                        <?php $form->inputCorporateNameKana("法人名（ふりがな）", null , "あくりや"); ?><span
                                                        class="form__effect"></span></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="c-text--md-left">法人部署名</th>
                                        <td class="c-text--md-left"><span class="form__input ">
                                                        <?php $form->inputCorporateDepartment("法人部署名", null , "商品開発部"); ?><span
                                                        class="form__effect"></span></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="c-text--md-left is-required">メールアドレス</th>
                                        <td class="c-text--md-left"><span class="form__input ">
                                                        <?php $form->inputMail("メールアドレス", "acry-ya@acry-ya.com"); ?><span
                                                        class="form__effect"></span></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="c-text--md-left is-required">メールアドレス(確認用)</th>
                                        <td class="c-text--md-left"><span class="form__input ">
                                                        <?php $form->inputMailCheck("メールアドレス(確認用)", "acry-ya@acry-ya.com"); ?><span
                                                        class="form__effect"></span></span>
                                            <p class="table__note c-text--sm-note">同じアドレスをもう一度ご入力ください。</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="c-text--md-left is-required">電話番号</th>
                                        <td class="c-text--md-left"><span class="form__input ">
                                                        <?php $form->inputTel("電話番号", null); ?><span
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
                        </div>
                    </div>
                </section>
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
