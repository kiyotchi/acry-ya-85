<?php
require_once(__DIR__ . '/config/config.php');
$form = new recycle\Form();
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
    <meta name="description" content="当社でお買い上げいただいたアクリルをリサイクル回収いたします">
    <meta name="keywords" content="アクリルリサイクル,リサイクル">
    <title>リサイクル回収について｜アクリ屋ドットコム</title>
    <meta property="og:title" content="アクリルのリサイクル回収について｜アクリ屋ドットコム">
    <meta property="og:type" content="website">
    <meta property="og:url" content="/recycle/">
    <meta property="og:image" content="/assets/images/ogp.jpg">
    <meta property="og:site_name" content="アクリ屋ドットコム">
    <meta property="og:description" content="当社でお買い上げいただいたアクリルをリサイクル回収いたします">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="アクリ屋ドットコム">
    <meta name="twitter:description" content="当社でお買い上げいただいたアクリルをリサイクル回収いたします">
    <meta name="twitter:image" content="/assets/images/ogp.jpg">
    <meta itemprop="image" content="/assets/images/ogp.jpg">
    <!--meta(property='fb:app_id', content='')-->
    <link rel="shortcut icon" href="/assets/images/favicon.ico">
    <link rel="apple-touch-icon" href="/assets/images/favicon.png">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
    <link rel="stylesheet" href="/assets/stylesheets/base.css">
    <link rel="stylesheet" href="/assets/stylesheets/layout.css">
    <link rel="stylesheet" href="/assets/stylesheets/style.css">
    <link rel="stylesheet" href="/assets/stylesheets/projects/recycle.css">
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
                        <li>リサイクル回収について</li>
                    </ul>
                </nav>
                <?php echo $notice; ?>
                <?php $form->create(); ?>
                <h1 class="main__title c-heading--xl">リサイクル回収について</h1>
                <section class="c-section">
                  <p class="c-text--md">
        アクリ屋ドットコムでは、役目を終えたアクリルを「ゴミ」ではなく、再び未来へつなぐ「資源」として循環させる取り組みを行っております。<br>
        回収したアクリルは、株式会社興和商会様の協力のもと、油化によるリサイクルを経てプラスチック原料へ再生されます。役目を終えたアクリルをゴミにせず、再び社会を支える大切な資源へと繋いでいきます。<br>
        アクリ屋ドットコムでお買上げ頂きましたアクリル製品がご不要になりましたら、本ページ下部のフォームよりお申込みください。
    </p>
                </section>

                <div style="margin: 30px 0; text-align: center;">
                    <style>
                        .recycle-img {
                            width: 80%; /* パソコン（基本設定）では80% */
                            height: auto;
                        }
                        @media screen and (max-width: 768px) {
                            .recycle-img {
                                width: 100%; /* スマホ（画面幅768px以下）では100% */
                            }
                        }
                    </style>
                    <img src="/assets/images/projects/recycle/recycle-1.jpg" alt="リサイクルの流れ" class="recycle-img">
                </div>


                <section class="c-section">
                    <h2 class="c-heading--lg">ご利用方法</h2>

                    <div class="l-articleBottom">
                        <div class="article__content">
                            <h3 class="c-heading--md">
                                <span class="c-icon--num_circle">1</span>フォームよりお申込み
                            </h3>
                            <ul class="c-list--disc">
                                <li class="list__item">下記の「リサイクルお申込みフォーム」より必要事項をご入力ください。</li>
                                <li class="list__item">お申し込み頂ける品は、<strong>弊社からお買上げ頂きましたアクリル製品のみ</strong>となります。</li>
                                <li class="list__item">送り先住所は、お申込み後に自動返信メールにてお知らせいたします。</li>
                            </ul>
                        </div>

                        <div class="article__content">
                            <h3 class="c-heading--md">
                                <span class="c-icon--num_circle">2</span>製品を梱包（異物の取り外し）
                            </h3>
                            <ul class="c-list--disc">
                                <li class="list__item">ネジや脚などの<strong>金属パーツ、ゴム足、両面テープなどは必ず取り外してください。</strong></li>
                                <li class="list__item">お客様にて梱包をお願いいたします。梱包は簡易的で結構です。</li>
                            </ul>
                        </div>

                        <div class="article__content">
                            <h3 class="c-heading--md">
                                <span class="c-icon--num_circle">3</span>製品を発送
                            </h3>
                            <ul class="c-list--disc">
                                <li class="list__item">送料はお客様ご負担（元払い）にてお願いいたします。</li>
                                <li class="list__item">送り状品名には「注文番号」を記載の上ご発送ください。</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section class="c-inportantNews">
                    <div class="l-article">
                        <div class="article__content">
                            <h3 class="c-text--md-weightBold">注意事項</h3>
                            <ul class="c-list--note">
                                <li class="list__item">金属などの異物がついたまま等、リサイクルが困難な場合は弊社にて処分させていただく場合がございます。</li>
                                <li class="list__item">アクリル同士の接着品や割れ、傷がついていても回収可能です。</li>
                                <li class="list__item">ペット用品としてご使用いただいた製品につきましては、恐れ入りますが水洗いした上でのご発送をお願いいたします。</li>
                                <li class="list__item">衛生面で著しい汚れがある場合はお断りさせていただく場合がございます。予めご了承ください。</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section class="c-sectionTop">
                    <h2 class="c-heading-primary">よくあるご質問</h2>

                    <ul class="c-list">
                      <li class="list__item" style="margin-bottom: 1.5rem;">
                          <p style="font-weight: bold; color: #009A98; margin-bottom: 0.4rem;">
                              <span class="c-icon-hatena">Q</span>
                              注文番号が分からなくなってしまったのですが…
                          </p>
                          <p style="padding-left: 2.2em;">
                              仮の番号「<strong>00000000</strong>（ゼロ8つ）」でお申込みください。</br>
                              また、ご注文時の「<strong>お電話番号</strong>」または「<strong>メールアドレス</strong>」と「<strong>商品名</strong>」を必ずご記入ください。
                          </p>
                      </li>

                        <li class="list__item" style="margin-bottom: 1.5rem;">
                            <p style="font-weight: bold; color: #009A98; margin-bottom: 0.4rem;">
                                <span class="c-icon-hatena">Q</span>
                                カラー板や印刷がある製品、傷があるものでも大丈夫？
                            </p>
                            <p style="padding-left: 2.2em;">
                                はい、すべて回収可能です。アクリル製品であれば、色・印刷・傷の有無を問わずリサイクルいただけます。
                            </p>
                        </li>

                        <li class="list__item" style="margin-bottom: 1.5rem;">
                            <p style="font-weight: bold; color: #009A98; margin-bottom: 0.4rem;">
                                <span class="c-icon-hatena">Q</span>
                                表面に保護フィルムが貼ってあってもいい？
                            </p>
                            <p style="padding-left: 2.2em;">
                                剥がさず、貼ったままの状態で送っていただいて問題ありません。
                            </p>
                        </li>
                    </ul>
                </section>

                <section class="form__section c-section">
                  <div class="c-flame--lg">
                    <p class="c-heading--lg">リサイクルお申込みフォーム</p>
                      <table class="c-table--form">
                        <tbody>
                        <tr>
                          <th class="c-text--md-left is-required">ご注文番号（半角）</th>
                          <td class="c-text--md-left">
                            <span class="form__input ">
                              <?php $form->inputProductNum("ご注文番号（半角）", "1か4で始まる8桁の数字を入力ください"); ?>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th class="c-text--md-left is-required">お名前</th>
                          <td class="c-text--md-left">
                            <span class="form__input ">
                              <?php $form->inputName("お名前", "ご注文時にご入力いただいたお名前を入力ください"); ?><span class="form__effect">
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th class="c-text--md-left">法人名</th>
                          <td class="c-text--md-left">
                            <span class="form__input ">
                              <?php $form->inputCorporateName("法人名", "", "会社名を入力ください"); ?><span class="form__effect">
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th class="c-text--md-left is-required">メールアドレス</th>
                          <td class="c-text--md-left">
                            <span class="form__input" id="mail_form">
                              <?php $form->inputMail("メールアドレス", "メールアドレスを入力ください"); ?><span class="form__effect">
                            </span>
                            <p class="table__note c-text--sm-note">お申込みの際は必ずご注文いただいたメールアドレスをご入力ください。</p>
                          </td>
                        </tr>
                        <tr>
                          <th class="c-text--md-left is-required">メールアドレス(確認用)</th>
                          <td class="c-text--md-left">
                            <span class="form__input" id="mail_form_again">
                              <?php $form->inputMailCheck("メールアドレス(確認用)", "メールアドレスを入力ください"); ?><span class="form__effect">
                            </span>
                            <p class="table__note c-text--sm-note">同じメールアドレスをもう一度ご入力ください。</p>
                          </td>
                        </tr>
                        <tr>
                          <th class="c-text--md-left is-required">郵便番号</th>
                          <td class="c-text--md-left">
                            <div class="u-display--flex-center">
                              <span class="form__input ">
                                <?php $form->inputZip("郵便番号", "必須", "0000000"); ?>
                              </span>
                              <button type="button" class="c-button--xs-gray u-margin--left-8" onclick="AjaxZip3.zip2addr('郵便番号[value]','','都道府県[value]','住所[value]');">住所自動入力</button>
                            </div>
                            <p class="table__note c-text--sm-note">ハイフンは不要です。</p>
                          </td>
                        </tr>

                        <tr>
                          <th class="c-text--md-left is-required">都道府県</th>
                          <td class="c-text--md-left">
                            <span class="form__select ">
                              <?php
                              $params = array(
                                "北海道",
                                "青森県",
                                "岩手県",
                                "秋田県",
                                "宮城県",
                                "山形県",
                                "福島県",
                                "栃木県",
                                "群馬県",
                                "茨城県",
                                "埼玉県",
                                "東京都",
                                "千葉県",
                                "神奈川県",
                                "山梨県",
                                "長野県",
                                "新潟県",
                                "富山県",
                                "石川県",
                                "福井県",
                                "静岡県",
                                "岐阜県",
                                "愛知県",
                                "三重県",
                                "滋賀県",
                                "京都府",
                                "大阪府",
                                "兵庫県",
                                "奈良県",
                                "和歌山県",
                                "徳島県",
                                "香川県",
                                "愛媛県",
                                "高知県",
                                "鳥取県",
                                "島根県",
                                "岡山県",
                                "広島県",
                                "山口県",
                                "福岡県",
                                "佐賀県",
                                "長崎県",
                                "大分県",
                                "熊本県",
                                "宮崎県",
                                "鹿児島県",
                                "沖縄県"
                              );
                              $form->selectPrefectures("都道府県", $params, "必須");?>
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <th class="c-text--md-left is-required">住所</th>
                          <td class="c-text--md-left">
                            <span class="form__input ">
                              <?php $form->inputAddress("住所", "必須"); ?>
                            </span>
                            <p class="table__note c-text--sm-note">マンション名も省略せず記入下さい。</p>
                          </td>
                        </tr>

                        <tr>
                          <th class="c-text--md-left is-required">電話番号</th>
                          <td class="c-text--md-left">
                            <span class="form__input">
                              <?php $form->inputTel("電話番号", "必須","00000000000"); ?>
                            </span>
                            <p class="table__note c-text--sm-note">ハイフンは不要です。</p>
                          </td>
                        </tr>

                        <tr>
                            <th class="c-text--md-left">リサイクル希望商品</th>
                            <td class="c-text--md-left">
                              <span class="form__input ">
                                <?php $form->inputProductsRecycled("リサイクル希望商品", null, "アクリルケース、アクリル板等をご記載ください"); ?>
                              </span>
                              <p class="table__note c-text--sm-note">出来る限り具体的にお願いします。</p>
                            </td>
                        </tr>

                        <tr>
                            <th class="c-text--md-left">回収希望数</th>
                            <td class="c-text--md-left">
                              <span class="form__input ">
                                <?php $form->inputRecycleCount("回収希望数", null, ""); ?>
                              </span>
                            </td>
                        </tr>

                        <tr>
                          <th class="c-text--md-left is-required">引き渡し方法</th>
                          <td class="c-text--md-left radio_group">
                            <?php $params = array("発送", "持ち込み");$form->inputDeliveryMethod("引き渡し方法", $params); ?>
                          </td>
                        </tr>



                        <tr>
                          <th class="c-text--md-left is-required">発送／持ち込み予定日</th>
                          <td class="c-text--md-left">
                            <span class="form__input">
                              <?php $form->inputDeliveryDate("発送／持ち込み予定日", "必須", "YYYY/MM/DD"); ?>
                              <span class="form__effect"></span>
                            </span>
                          </td>
                        </tr>



                      </tbody>
                    </table>
                  </div>
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
