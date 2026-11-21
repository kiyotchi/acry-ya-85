<?php
require_once(__DIR__ . '/config/config.php');
$form = new free_order\Form();
?>
<?php include $_SERVER['DOCUMENT_ROOT'] . 'static.php'; ?>
<!DOCTYPE html>
<html lang="ja" prefix="og: http://ogp.me/ns#">
<head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-56FGQ5X');</script>
    <!-- End Google Tag Manager -->
    <?php echo $head_start; ?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta meta http-equiv="Expires" content="604800">
    <meta name="format-detection" content="telephone=no">
    <meta name="description" content="アクリル板材料の加工とアクリル製品のことなら「アクリ屋ドットコム」。アクリル製品のセミオーダー加工や特注品のご注文も承っております。１万円以上は送料無料。">
    <meta name="keywords" content="アクリル板,アクリルケース,アクリル加工,販売,通販,価格,当日出荷,当日発送,ポスターフレーム,フォトフレーム,樹脂,アクリ屋">
    <title>フリー注文フォーム｜アクリ屋ドットコム</title>
    <meta property="og:title" content="フリー注文フォーム｜アクリ屋ドットコム">
    <meta property="og:type" content="website">
    <meta property="og:url" content="/support/repair/">
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
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-56FGQ5X"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
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
                        <li>フリー注文</li>
                    </ul>
                </nav>
                <h1 class="main__title c-heading--xl">フリー注文</h1>
                <?php $form->create(); ?>

              <section class="c-section">
                <p>ショッピングカートがご利用できない場合や図面添付のご注文の場合は、以下のフォームをご利用下さい。<br>尚、この注文フォームもご利用できない場合には、<a href="mailto:order_form@acry-ya.com">Eメール</a>でのご注文もお受け致します。 以下と同様の内容をご記入の上、お送り下さい。後ほど金額を含めた確認メールをお送り致します。</p>
              </section>
              <section class="form__section c-section">
                <h2 class="c-heading--md-border">商品情報</h2>
                <table class="c-table--form p-free_order">
                  <tbody>
                                <tr>
                                  <th class="c-text--md-left is-required noValid">品名</th>
                                  <td class="c-text--md-left products_form">
                                    <p class="u-margin--bottom-8">板やパイプ等は全体寸法・厚さ・色・端面仕上を入力してください。</p>
                                    <div class="u-display--flex u-margin--bottom-8 product_input">
                                      <div class="free_order__product">
                                        <p class="c-text--center-weightBold">商品1　</p>
                                        <div class="free_order__frame"><span class="form__input ">
                                                <?php $form->inputProduct1("商品1", "必須"); ?><span class="form__effect"></span></span>
                                        </div>
                                      </div>
                                      <div class="free_order__amount">
                                        <p class="c-text--center-weightBold">数量：　</p><span class="form__number is-value">
                                              <button type="button" class="number__button--plus c-button--md-white"><i class="c-icon--plus"></i></button>
                                              <?php $form->inputQuantity1("商品1-数量", "必須"); ?>
                                              <button type="button" class="number__button--minus c-button--md-white"><i class="c-icon--minus"></i></button><span class="form__effect"></span></span>
                                      </div>
                                    </div>
                                    <div class="u-display--flex u-margin--bottom-8">
                                      <div class="free_order__product">
                                        <p class="c-text--center-weightBold">商品2　</p>
                                        <div class="free_order__frame"><span class="form__input ">
                                                <?php $form->inputProduct2("商品2"); ?><span class="form__effect"></span></span>
                                        </div>
                                      </div>
                                      <div class="free_order__amount">
                                        <p class="c-text--center-weightBold">数量：　</p><span class="form__number is-value">
                                              <button type="button" class="number__button--plus c-button--md-white"><i class="c-icon--plus"></i></button>
                                              <?php $form->inputQuantity2("商品2-数量", null); ?>
                                              <button type="button" class="number__button--minus c-button--md-white"><i class="c-icon--minus"></i></button><span class="form__effect"></span></span>
                                      </div>
                                    </div>
                                    <div class="u-display--flex u-margin--bottom-8">
                                      <div class="free_order__product">
                                        <p class="c-text--center-weightBold">商品3　</p>
                                        <div class="free_order__frame"><span class="form__input ">
                                                <?php $form->inputProduct3("商品3"); ?><span class="form__effect"></span></span>
                                        </div>
                                      </div>
                                      <div class="free_order__amount">
                                        <p class="c-text--center-weightBold">数量：　</p><span class="form__number is-value">
                                              <button type="button" class="number__button--plus c-button--md-white"><i class="c-icon--plus"></i></button>
                                              <?php $form->inputQuantity3("商品3-数量", null); ?>
                                              <button type="button" class="number__button--minus c-button--md-white"><i class="c-icon--minus"></i></button><span class="form__effect"></span></span>
                                      </div>
                                    </div>
                                    <div class="u-display--flex u-margin--bottom-8">
                                      <div class="free_order__product">
                                        <p class="c-text--center-weightBold">商品4　</p>
                                        <div class="free_order__frame"><span class="form__input ">
                                                <?php $form->inputProduct4("商品4"); ?><span class="form__effect"></span></span>
                                        </div>
                                      </div>
                                      <div class="free_order__amount">
                                        <p class="c-text--center-weightBold">数量：　</p><span class="form__number is-value">
                                              <button type="button" class="number__button--plus c-button--md-white"><i class="c-icon--plus"></i></button>
                                              <?php $form->inputQuantity4("商品4-数量", null); ?>
                                              <button type="button" class="number__button--minus c-button--md-white"><i class="c-icon--minus"></i></button><span class="form__effect"></span></span>
                                      </div>
                                    </div>
                                    <div class="u-display--flex u-margin--bottom-8">
                                      <div class="free_order__product">
                                        <p class="c-text--center-weightBold">商品5　</p>
                                        <div class="free_order__frame"><span class="form__input ">
                                                <?php $form->inputProduct5("商品5"); ?><span class="form__effect"></span></span>
                                        </div>
                                      </div>
                                      <div class="free_order__amount">
                                        <p class="c-text--center-weightBold">数量：　</p><span class="form__number is-value">
                                              <button type="button" class="number__button--plus c-button--md-white"><i class="c-icon--plus"></i></button>
                                              <?php $form->inputQuantity5("商品5-数量", null); ?>
                                              <button type="button" class="number__button--minus c-button--md-white"><i class="c-icon--minus"></i></button><span class="form__effect"></span></span>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left ">図面の添付</th>
                                  <td class="c-text--md-left file_form"><span class="form__file u-margin--bottom-8">
                                          <button type="button" class="file__button c-button--md-white">ファイルを選択</button>
                                          <div class="file__name"></div>
                                          <?php $form->inputImage1("図面の添付1"); ?><span class="form__effect"></span></span><span class="form__file u-margin--bottom-8">
                                          <button type="button" class="file__button c-button--md-white">ファイルを選択</button>
                                          <div class="file__name"></div>
                                          <?php $form->inputImage2("図面の添付2"); ?><span class="form__effect"></span></span><span class="form__file ">
                                          <button type="button" class="file__button c-button--md-white">ファイルを選択</button>
                                          <div class="file__name"></div>
                                          <?php $form->inputImage3("図面の添付3"); ?><span class="form__effect"></span></span>
                                    <ul class="table__note c-list--sm-note">
                                      <li class="list__item">合計6MB以内（圧縮可）</li>
                                      <li class="list__item">添付書類は「pdf・ai・dxf・jpg・zip・izh」の形式（拡張子）でお願い致します。</li>
                                      <li class="list__item">DXFデータは文字化けする事がある為、詳細を明記したPDFデータを併せて添付下さい。</li>
                                      <li class="list__item">データには寸法と仕様詳細を必ずご記入ください。</li>
                                      <li class="list__item">ファイルを3つ以上お送り頂く際は、1つのフォルダにまとめた後に圧縮して添付下さい。</li>
                                    </ul>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left ">図面の添付数</th>
                                  <td class="c-text--md-left"><span class="form__number is-value">
                                          <button type="button" class="number__button--plus c-button--md-white"><i class="c-icon--plus"></i></button>
                                          <?php $form->inputDrowingNumber("図面の添付数", null); ?>
                                          <button type="button" class="number__button--minus c-button--md-white"><i class="c-icon--minus"></i></button><span class="form__effect"></span></span>
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
                                  <th class="c-text--md-left is-required">お届け先</th>
                                  <td class="c-text--md-left radio_group">
                                <?php $params = array("法人様", "個人様");
                                $form->inputCustomerType("お届け先", $params); ?>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left is-required">お名前</th>
                                  <td class="c-text--md-left"><span class="form__input ">
                                          <?php $form->inputName("お名前", "アクリ屋 太郎", "必須"); ?><span class="form__effect"></span></span>
                                    <p class="table__note c-text--sm-note">法人の場合はご担当者名</p>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left is-required">お名前（ふりがな）</th>
                                  <td class="c-text--md-left"><span class="form__input kana_form">
                                          <?php $form->inputNameKana("お名前（ふりがな）", "必須", "あくりや たろう"); ?><span class="form__effect"></span></span>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left ">法人名</th>
                                  <td class="c-text--md-left"><span class="form__input ">
                                          <?php $form->inputCorporateName("法人名", null, "アクリ屋"); ?><span class="form__effect"></span></span>
                                    <p class="table__note c-text--sm-note">会社名・団体名など</p>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left ">法人名（ふりがな）</th>
                                  <td class="c-text--md-left"><span class="form__input kana_form">
                                          <?php $form->inputCorporateNameKana("法人名（ふりがな）", null, "あくりや"); ?><span class="form__effect"></span></span>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left ">法人部署名</th>
                                  <td class="c-text--md-left"><span class="form__input ">
                                          <?php $form->inputCorporateDepartment("法人部署名", null, "商品開発部"); ?><span class="form__effect"></span></span>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left is-required">メールアドレス</th>
                                  <td class="c-text--md-left"><span class="form__input " id="mail_form">
                                          <?php $form->inputMail("メールアドレス", "acry-ya@acry-ya.com"); ?><span class="form__effect"></span></span>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left is-required">メールアドレス(確認用)</th>
                                  <td class="c-text--md-left"><span class="form__input " id="mail_form_again">
                                          <?php $form->inputMailCheck("メールアドレス(確認用)", "acry-ya@acry-ya.com"); ?><span class="form__effect"></span></span>
                                    <p class="table__note c-text--sm-note">同じアドレスをもう一度ご入力ください。</p>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left is-required">郵便番号</th>
                                  <td class="c-text--md-left">
                                    <div class="u-display--flex-center"><span class="form__input ">
                                            <?php $form->inputZip("郵便番号", "必須", "000-0000"); ?><span class="form__effect"></span></span>
                                      <button type="button" id="btn" name="btn" class="c-button--xs-gray u-margin--left-8"
                                            onclick="AjaxZip3.zip2addr('郵便番号[value]','','都道府県[value]','住所[value]');">住所自動入力</button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left is-required">都道府県</th>
                                  <td class="c-text--md-left"><span class="form__select pref">
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
                                                $form->selectPrefectures("都道府県", $params, "必須");
                                                ?>
                                    <span class="form__effect"></span></span>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left is-required">住所</th>
                                  <td class="c-text--md-left"><span class="form__input ">
                                          <?php $form->inputAddress("住所", "必須"); ?><span class="form__effect"></span></span>
                                    <p class="table__note c-text--sm-note">マンション名も省略せず記入下さい。</p>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left is-required">電話番号</th>
                                  <td class="c-text--md-left"><span class="form__input ">
                                          <?php $form->inputTel("電話番号", "必須"); ?><span class="form__effect"></span></span>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left ">FAX</th>
                                  <td class="c-text--md-left"><span class="form__input ">
                                          <?php $form->inputFax("FAX"); ?><span class="form__effect"></span></span>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left ">コメント</th>
                                  <td class="c-text--md-left"><span class="form__input ">
                                          <?php $form->inputComment("コメント"); ?><span class="form__effect"></span></span>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left is-required">入金方法</th>
                                  <td class="c-text--md-left"><span class="form__select ">
                                                <?php
                                                $params = array(
                                                    "銀行振込(前払い)",
                                                    "代引き"
                                                );
                                                $form->selectDeposit("入金方法", $params, "必須");
                                                ?>
                                          <span class="form__effect"></span></span>
                                  </td>
                                </tr>
                  </tbody>
                </table>
              </section>
              <section class="form__section c-section">
                <h2 class="c-heading--md-border">納品先</h2>
                <div class="c-flame--gray-sm">
                  <p class="c-text--lg-weightBold">納品先が上記と同じ場合は不要です。</p>
                </div>
                <table class="c-table--form">
                  <tbody>
                                <tr>
                                  <th class="c-text--md-left ">納品先名</th>
                                  <td class="c-text--md-left"><span class="form__input ">
                                          <?php $form->inputDeliveryName("納品先名", "アクリ屋工務店" ); ?><span class="form__effect"></span></span>
                                    <p class="table__note c-text--sm-note">法人の場合は、 法人名、法人部署名、ご担当者様名をご記入下さい。</p>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left ">納品先名（ふりがな）</th>
                                  <td class="c-text--md-left"><span class="form__input kana_form">
                                          <?php $form->inputDeliveryNameKana("納品先名（ふりがな）", null ,
                                                        "あくりやこうむてん"); ?><span class="form__effect"></span></span>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left ">郵便番号</th>
                                  <td class="c-text--md-left">
                                    <div class="u-display--flex-center"><span class="form__input ">
                                            <?php $form->inputDeliveryZip("納品先_郵便番号", null, "000-0000"); ?><span class="form__effect"></span></span>
                                      <button type="button" class="c-button--xs-gray u-margin--left-8"
                                            onclick="AjaxZip3.zip2addr('納品先_郵便番号[value]','','納品先_都道府県[value]','納品先_住所[value]');">
                                        住所自動入力
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left ">都道府県</th>
                                  <td class="c-text--md-left"><span class="form__select pref">
                                          <?php
                                                    $params = array(
                                                        "選択してください",
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
                                                    $form->selectDeliveryPrefectures("納品先_都道府県", $params );
                                                    ?>
                                          <span class="form__effect"></span></span>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left ">住所</th>
                                  <td class="c-text--md-left"><span class="form__input ">
                                          <?php $form->inputDeliveryAddress("納品先_住所"); ?><span class="form__effect"></span></span>
                                    <p class="table__note c-text--sm-note">マンション名も省略せず記入下さい。</p>
                                  </td>
                                </tr>
                                <tr>
                                  <th class="c-text--md-left ">電話番号</th>
                                  <td class="c-text--md-left"><span class="form__input ">
                                          <?php $form->inputDeliveryTel("納品先_電話番号"); ?><span class="form__effect"></span></span>
                                  </td>
                                </tr>
                  </tbody>
                </table>
              </section>
                <!--cookie-->
                <div class="form__cookie c-flame--md-border">
                    <h3 class="c-heading--md-center">お客様情報の保存</h3>
                    <p class="cookie__text c-text--md-center">入力した情報（メールアドレス・お名前・住所・電話番号など）を<br>保存します。保存すると次回の入力が不要になります。
                    </p>
                    <ul class="c-list--note">
                        <li class="list__itme c-text--sm-center">※複数人で１台のパソコンを使う場合はチェックしないことをお勧めします。</li>
                    </ul>
                    <div class="cookie__check">
                        <?php $form->inputInformationSave("お客様情報の保存", "情報を保存する"); ?>
                    </div>
                </div>
                <!--send-->
                <div class="form__action">
                    <button type="reset" class="c-button--xl-gray js-disabledSwitch__content">リセット</button>
                    <?php $form->end('確認画面へ'); ?>
                </div>
            </div>
        </main>
        <?php echo $footer; ?>
    </div>
</div>
<script type="text/javascript">
  var type = ["pdf", "ai", "dxf", "jpg", "jpeg", "zip", "izh"];
  var size = 6000000;

  function num_change(obj) {
    var el = $(obj);
    var num = el.val();
    var hidden = el.next('input[type="hidden"]');
    hidden.val(num);
  }

</script>
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
