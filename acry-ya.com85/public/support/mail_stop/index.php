<?php include $_SERVER['DOCUMENT_ROOT'].'static.php'; ?>
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
    <title>アクリ屋ドットコムNEWS 配信停止の申し込み｜アクリ屋ドットコム</title>
    <meta property="og:title" content="アクリ屋ドットコムNEWS 配信停止の申し込み｜アクリ屋ドットコム">
    <meta property="og:type" content="website">
    <meta property="og:url" content="/support/mail_stop/">
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
    <script src="https://jpostal-1006.appspot.com/jquery.jpostal.js"></script>
    <script src="/assets/javascripts/common.js"></script>
    <script src="/assets/javascripts/function.js" defer></script>
    <script src="/assets/javascripts/plugins/cookie.js" defer></script>
    <script src="/assets/javascripts/plugins/add-comma.js" defer></script>
    <script src="/assets/javascripts/plugins/form-address.js" defer></script>
    <script src="/assets/javascripts/plugins/slick-1.6.0.min.js"></script>
    <script src="/assets/javascripts/plugins/slick-1.6.0.setting.js"></script>
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
                <li>メルマガ配信の停止</li>
              </ul>
            </nav>
<?php echo $notice; ?>
            <h1 class="main__title c-heading--xl">メルマガ配信の停止</h1>
            <form id="contactForm" class="l-form--contact c-form" action="/cgibin/news_reject/news_reject.cgi" method="post">
              <section class="form__section c-section">
                <p>メールマガジン配信停止を希望されるメールアドレスを入力して下さい。</p>
                <table class="c-table--form">
                  <tbody>
                                <tr>
                                  <th class="c-text--md-left is-required">メールアドレス</th>
                                  <td class="c-text--md-left"><span class="form__input " id="mail_form">
                                          <input type="email" id="" name="MAIL" placeholder="acry-ya@acry-ya.com"><span class="form__effect"></span></span>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left is-required">メールアドレス(確認用)</th>
                                  <td class="c-text--md-left"><span class="form__input " id="mail_form_again">
                                          <input type="email" id="" name="MAIL2" placeholder="acry-ya@acry-ya.com"><span class="form__effect"></span></span>
                                    <p class="table__note c-text--sm-note">同じアドレスをもう一度ご入力ください。</p>
                                  </td>
                                </tr>
                  </tbody>
                </table>
              </section>
              <p class="c-text--notes">配信停止処理はなるべく早めに手続きを行いますが、事務処理の都合により数回メールマガジンが配信される可能性がございます。予めご了承下さい。</p>
              <!--cookie-->
              <!--send-->
              <div class="form__action">
			  <input type="hidden" name="MUST" value="MAIL">
			  <input type="hidden" name="MAILCHECK" value="1">
			  <input type="hidden" name="SUBJECT" value="送信ありがとうございました">
                <button type="reset" class="c-button--xl-gray js-disabledSwitch__content">リセット</button>
                <button type="send" class="c-button--xl-primary js-disabledSwitch__content">確認画面へ</button>
              </div>
            </form>
          </div>
        </main>
<?php echo $footer; ?>
        <div class="l-loading js-loading">
          <img src="/assets/images/loading.gif" class="loading__image">
        </div>
      </div>
    </div>
<script type="text/javascript" src="/assets/javascripts/form_validation.js"></script>
<script src="https://ssl.google-analytics.com/urchin.js" type="text/javascript">
</script>
<script type="text/javascript">
_uacct = "UA-3172569-1";
urchinTracker();
</script>
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
