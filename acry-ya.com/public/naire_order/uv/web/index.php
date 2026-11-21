<?php
require_once(__DIR__ . '/config/config.php');
$form = new web\Form();
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
<meta name="description" content="">
<meta name="keywords" content="">
<title>UVインクジェット印刷でのお見積り依頼｜アクリ屋ドットコム</title>
<meta property="og:title" content="UVインクジェット印刷でのお見積り依頼｜アクリ屋ドットコム">
<meta property="og:type" content="website">
<meta property="og:url" content="/naire_order/uv/web/">
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
<link rel="stylesheet" href="/assets/stylesheets/projects/full-order-web.css">
<link rel="stylesheet" href="/assets/stylesheets/acry-ya.css?ver=20230202">
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
                <li><a href="/naire_order/">名入れオーダー</a></li>
                <li><a href="/naire_order/uv/">UVインクジェット印刷</a></li>
                <li>UVインクジェット印刷でのお見積り依頼</li>
              </ul>
            </nav>
            <?php $form->create(); ?>
            <h1 class="main__title c-heading--xl">UVインクジェット印刷でのお見積り依頼</h1>
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
                    <th class="c-text--md-left">お名前（ふりがな）</th>
                    <td class="c-text--md-left"><span class="form__input kana_form">
                      <?php $form->inputNameKana("お名前（ふりがな）", null, "あくりや たろう"); ?><span
                      class="form__effect"></span></span>
                    </td>
                  </tr>
                  <tr>
                    <th class="c-text--md-left">法人名</th>
                    <td class="c-text--md-left"><span class="form__input ">
                      <?php $form->inputCorporateName("法人名", null, "アクリ屋"); ?><span
                      class="form__effect"></span></span>
                      <p class="table__note c-text--sm-note">会社名・団体名など</p>
                    </td>
                  </tr>
                  <tr>
                    <th class="c-text--md-left">法人名（ふりがな）</th>
                    <td class="c-text--md-left"><span class="form__input kana_form">
                      <?php $form->inputCorporateNameKana("法人名（ふりがな）", null, "あくりや"); ?><span
                      class="form__effect"></span></span>
                    </td>
                  </tr>
                  <tr>
                    <th class="c-text--md-left">法人部署名</th>
                    <td class="c-text--md-left"><span class="form__input ">
                      <?php $form->inputCorporateDepartment("法人部署名", null, "商品開発部"); ?><span
                      class="form__effect"></span></span>
                    </td>
                  </tr>
                  <tr>
                    <th class="c-text--md-left is-required">メールアドレス</th>
                    <td class="c-text--md-left"><span class="form__input " id="mail_form">
                      <?php $form->inputMail("メールアドレス", "acry-ya@acry-ya.com"); ?><span
                      class="form__effect"></span></span>
                    </td>
                  </tr>
                  <tr>
                    <th class="c-text--md-left is-required">メールアドレス(確認用)</th>
                    <td class="c-text--md-left"><span class="form__input " id="mail_form_again">
                      <?php $form->inputMailCheck("メールアドレス(確認用)", "acry-ya@acry-ya.com"); ?><span
                      class="form__effect"></span></span>
                      <p class="table__note c-text--sm-note">同じアドレスをもう一度ご入力ください。</p>
                    </td>
                  </tr>
                  <tr>
                    <th class="c-text--md-left is-required">郵便番号</th>
                    <td class="c-text--md-left">
                      <div class="u-display--flex-center"><span class="form__input ">
                        <?php $form->inputZip("郵便番号", "必須", "000-0000"); ?><span
                        class="form__effect"></span></span>
                        <button type="button" class="c-button--xs-gray u-margin--left-8" onclick="AjaxZip3.zip2addr('郵便番号[value]', '',  '都道府県[value]', '住所[value]');">
                          住所自動入力
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th class="c-text--md-left is-required">都道府県</th>
                    <td class="c-text--md-left"><span class="form__select ">
                      <?php
                      $params = array(
                        // "選択してください",
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
                      <?php $form->inputAddress("住所", "必須"); ?><span
                      class="form__effect"></span></span>
                      <p class="table__note c-text--sm-note">マンション名も省略せず記入下さい。</p>
                    </td>
                  </tr>
                  <tr>
                    <th class="c-text--md-left is-required">電話番号</th>
                    <td class="c-text--md-left"><span class="form__input ">
                      <?php $form->inputTel("電話番号", "必須"); ?><span
                      class="form__effect"></span></span>
                    </td>
                  </tr>
                  <tr>
                    <th class="c-text--md-left is-required">弊社からの電話連絡</th>
                    <td class="c-text--md-left radio_group">
                      <?php $params = array("可", "不可");
                      $form->inputPhoneContactFromOur("弊社からの電話連絡", $params); ?>
                    </td>
                  </tr>
                  <tr>
                    <th class="c-text--md-left is-required">納品先</th>
                    <td class="c-text--md-left radio_group">
                      <?php $params = array("法人宛", "個人宛");
                      $form->inputCustomerType("納品先", $params); ?>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section class="form__section c-section">
              <h2 class="c-heading--md-border">納品先</h2>
              <p class="table__note c-text--sm-note">納品先がお客様情報と異なる場合、配送料計算の為、都道府県(選択)以外もご記入下さい。</p>
              <table class="c-table--form">
                <tbody>
                  <tr>
                    <th class="c-text--md-left ">納品先名</th>
                    <td class="c-text--md-left">
                      <span class="form__input ">
                        <?php $form->inputDeliveryName("納品先名", null,"アクリ屋工務店"); ?><span class="form__effect"></span></span>
                      </td>
                    </tr>
                    <tr>
                      <th class="c-text--md-left">納品先名（ふりがな）</th>
                      <td class="c-text--md-left"><span class="form__input kana_form">
                        <?php $form->inputDeliveryNameKana("納品先名（ふりがな）", null, "あくりやこうむてん"); ?><span class="form__effect"></span></span>
                      </td>
                    </tr>
                    <tr>
                      <th class="c-text--md-left">郵便番号</th>
                      <td class="c-text--md-left">
                        <div class="u-display--flex-center"><span class="form__input ">
                          <?php $form->inputDeliveryZip("郵便番号_納品先", null, "000-0000"); ?><span class="form__effect"></span></span>
                          <button type="button" class="c-button--xs-gray u-margin--left-8" onclick="AjaxZip3.zip2addr('郵便番号_納品先[value]', '',  '都道府県_納品先[value]', '住所_納品先[value]');">
                            住所自動入力
                          </button>

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th class="c-text--md-left">都道府県</th>
                      <td class="c-text--md-left"><span class="form__select ">
                        <?php
                        $params = array(
                          // "選択してください",
                          "お客様情報と同じ",
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
                        $form->selectDeliveryPrefectures("都道府県_納品先", $params, null);
                        ?>
                        <span class="form__effect"></span></span>
                      </td>
                    </tr>
                    <tr>
                      <th class="c-text--md-left">住所</th>
                      <td class="c-text--md-left"><span class="form__input ">
                        <?php $form->inputDeliveryAddress("住所_納品先", ""); ?><span class="form__effect"></span></span>
                        <p class="table__note c-text--sm-note">マンション名も省略せず記入下さい。</p>
                      </td>
                    </tr>
                    <tr>
                      <th class="c-text--md-left">電話番号</th>
                      <td class="c-text--md-left"><span class="form__input ">
                        <?php $form->inputDeliveryTel("電話番号_納品先", ""); ?><span
                        class="form__effect"></span></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section class="form__section c-section">
                <h2 class="c-heading--md-border">製作内容</h2>
                <table class="c-table--form js-formChange">
                  <tbody>

                    <tr>
                      <th class="c-text--md-left is-required">使用環境</th>
                      <td class="c-text--md-left radio_group">
                        <?php $params = array("屋内","屋外"); $form->inputUsageEnvironment("使用環境", $params); ?>
                        <p class="table__note c-text--sm-note">屋外での使用は、ご使用環境によっては印刷部の剥がれ・亀裂等の劣化が生じる場合がある為、推奨致しません。</p>
                      </td>
                    </tr>
                    <tr>
                      <th class="c-text--md-left is-required">製作数</th>
                      <td class="c-text--md-left"><span class="form__input ">
                        <?php $form->inputProductionApplication("製作数", "必須", "例1：10、50 例2：各3セット"); ?><span class="form__effect"></span></span>
                        <ul class="table__note c-list--sm-note">
                          <li class="list__item">製作数によって価格が変わりますので、希望数量（ロット）を記載下さい。</li>
                          <li class="list__item">複数可</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th class="c-text--md-left is-required">全体サイズ</th>
                      <td class="c-text--md-left">
                        <div class="u-display--flex-center u-margin--bottom-8 u-width--90"><span class="u-margin--left-8">横（W）</span><span class="form__input">
                          <?php $form->inputProductionSize("全体サイズ_横（W）", "必須", "000"); ?></span><span class="u-margin--left-8">mm</span>
                        </div>
                        <div class="u-display--flex-center u-margin--bottom-8 u-width--90"><span class="u-margin--left-8">奥行き（D）</span><span class="form__input">
                          <?php $form->inputProductionDepth("全体サイズ_奥行き（D）", "必須", "000"); ?></span><span class="u-margin--left-8">mm</span>
                        </div>
                        <div class="u-display--flex-center u-width--90"><span class="u-margin--left-8">高さ（H）</span><span class="form__input">
                          <?php $form->inputProductionheight("全体サイズ_高さ（H）", "必須", "000"); ?></span><span class="u-margin--left-8">mm</span>
                        </div>
                        <div class="js-modal"><a data-target="sizeWindow" class="table__question js-modal__trigger--open"><i class="c-icon--question"></i></a>
                          <div id="sizeWindow" class="c-window--md js-modal__content">
                            <p class="c-heading--md">全体サイズについて</p><img src="/assets/images/projects/full_order/web/img_01.jpg">
                          </div>
                        </div>
                        <p class="table__note c-text--sm-note">複数のサイズをご希望の場合は、代表的なサイズを記載下さい。</p>
                      </td>
                    </tr>
                    <tr>
                      <th class="c-text--md-left is-required">材料</th>
                      <td class="c-text--md-left radio_group">
                        <?php $params = array("acrylic"=>"アクリル","polyca"=>"ポリカーボネート"); $form->inputProductionType("材料", $params); ?>
                        <p class="table__note c-text--sm-note">その他の材料の場合は、製作内容の詳細・図面にご記入ください。</p>
                      </td>
                    </tr>
                    <tr>
                      <th class="c-text--md-left is-required noValid">材料の色</th>
                      <td class="c-text--md-left">
                        <input type="hidden" name="材料の色[params]" value="">
                        <input type="hidden" name="材料の色[value]" id="color_value" value="">
                        <div data-type="acrylic" class="js-formChange__content is-active">
                          <span class="form__select u-width--50">
                            <?php $params = array(
                              "noValue",
                              "クリアー",
                              "グレースモーク",
                              "ブラウンスモーク",
                              "オパール",
                              "クリアー両面マット",
                              "ブラック両面マット",
                              "ホワイト両面マット",
                              "ピンクエッジ",
                              "ブルーエッジ",
                              "ガラスエッジ",
                              "蛍光オレンジエッジ",
                              "蛍光グリーンエッジ",
                              "蛍光バイオレットエッジ",
                              "蛍光ピンクエッジ",
                              "オレンジ",
                              "カーマイン",
                              "スカイブルー",
                              "レモン",
                              "UVカットクリアー",
                              "クリアー耐擦傷(両面)MR",
                              "クリアーノングレア(片面)76300",
                              "クリアー制電(両面)SC",
                              "集光グリーン",
                              "集光レッド",
                              "集光オレンジ",
                              "集光ピンク",
                              "集光バイオレット",
                              "その他"
                            );
                            $form->selectProductionColor("材料の色-acrylic", $params, "", 'acrylic'); ?>
                            <span class="form__effect"></span></span>
                          </div>
                          <div data-type="polyca" class="js-formChange__content">
                            <span class="form__select u-width--50">
                              <?php $params = array(
                                "noValue",
                                "クリアー",
                                "クリアー両面マット",
                                "シルク調クリアー両面マット",
                                "クリアー片面マット",
                                "クリアー片面マット熱線カット",
                                "オパール乳半",
                                "ポリッシュホワイト",
                                "ガラスクリアー",
                                "ガラスクリアー両面マット",
                                "シルク調ガラス色両面マット",
                                "ブルースモーク",
                                "ブルースモーク両面マット",
                                "ブラウンスモーク",
                                "ブラウンスモーク両面マット",
                                "ブラウンスモーク片面マット",
                                "グレースモーク",
                                "グレースモーク片面マット",
                                "ブロンズ",
                                "ブロンズ片面マット"
                              );
                              $form->selectProductionColor("材料の色-polyca", $params, "", 'polyca'); ?>
                              <span class="form__effect"></span></span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th class="c-text--md-left is-required noValid">材料の厚み</th>
                          <td class="c-text--md-left">
                            <input type="hidden" name="材料の厚み[params]" value="">
                            <input type="hidden" name="材料の厚み[value]" id="thickness_value" value="">
                            <div class="u-display--flex-center">
                              <div data-type="acrylic" class="js-formChange__content is-active"><span class="form__select ">
                                <?php $params = array(
                                  "1",
                                  "2",
                                  "3",
                                  "5",
                                  "8",
                                  "10",
                                  "13",
                                  "15",
                                  "20",
                                  "25",
                                  "30",
                                  "35",
                                  "40",
                                  "45",
                                  "50",
                                  "その他"); $form->selectProductionThickness("材料の厚み-acrylic", $params, "", 'acrylic'); ?>
                                  <span class="form__effect"></span></span>
                                </div>
                                <div data-type="polyca" class="js-formChange__content"><span class="form__select ">
                                  <?php $params = array(
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "8",
                                    "10",
                                    "12",
                                    "15",
                                    "その他"); $form->selectProductionThickness("材料の厚み-polyca", $params, "", 'polyca'); ?>
                                    <span class="form__effect"></span></span>
                                  </div>
                                  <span class="u-margin--left-8">mm</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th class="c-text--md-left is-required noValid">端面仕上</th>
                              <td class="c-text--md-left radio_group">
                                <input type="hidden" name="端面仕上[params]" value="">
                                <input type="hidden" name="端面仕上[value]" id="finish_value" value="">
                                <div data-type="acrylic" class="l-article--column-3-vertical js-formChange__content is-active" id="finish_acrylic">
                                  <?php $params = array("切断のみ","細目仕上","磨き仕上げ"); $form->inputProductionFinish("端面仕上-acrylic", $params); ?>
                                </div>
                                <div data-type="polyca" class="l-article--column-3-vertical js-formChange__content" id="finish_polyca">
                                  <?php $params = array("切断のみ","細目仕上"); $form->inputProductionFinish("端面仕上-polyca", $params); ?>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th class="c-text--md-left is-required">印刷面</th>
                              <td class="c-text--md-left radio_group">
                                <?php $params = array("板の表から","板の裏から"); $form->inputPrintingSide("印刷面", $params); ?>
                              </td>
                            </tr>
                            <tr>
                              <th class="c-text--md-left is-required noValid">白打ちの有無</th>
                              <td class="c-text--md-left radio_group">
                                <input type="hidden" name="白打ちの有無[params]" value="">
                                <input type="hidden" name="白打ちの有無[value]" id="white_value" value="">
                                <div data-type="acrylic" class="l-article--column-3-vertical js-formChange__content is-active" id="white_acrylic">
                                  <?php $params = array("あり","あり（板の全面）","なし"); $form->inputWhitePress("白打ちの有無-acrylic", $params); ?>
                                </div>
                                <div data-type="polyca" class="l-article--column-3-vertical js-formChange__content" id="white_polyca">
                                  <?php $params = array("あり","あり（板の全面）","なし"); $form->inputWhitePress("白打ちの有無-polyca", $params); ?>
                                </div>                              </td>
                              </tr>
                              <tr>
                                <th class="c-text--md-left">希望納期</th>
                                <td class="c-text--md-left">
                                  <div class="u-display--flex-center"><span class="form__input u-width--50">
                                    <?php $form->inputProductionBudget("希望納期", "", ""); ?><span class="form__effect"></span></span><span class="u-margin--left-8"></span>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th class="c-text--md-left is-required">以前に弊社へ同類のお見積もりのご依頼はございますでしょうか。</th>
                                <td class="c-text--md-left radio_group">
                                  <?php $params = array("あり","なし"); $form->inputProductionPresence("以前に弊社へ同類のお見積もりのご依頼はございますでしょうか。", $params); ?>
                                  <ul class="table__note c-list--sm-note">
                                    <li class="list__item">上記が「はい」の場合、お分かりになりましたら、その際のお見積番号を記載下さい。</li>
                                    <li class="list__item">「なし」の場合はお見積番号は不要。</li>
                                  </ul>
                                </td>
                              </tr>
                              <tr>
                                <th class="c-text--md-left">類似見積番号</th>
                                <td class="c-text--md-left">
                                  <div class="u-display--flex-center"><span class="form__input u-width--50">
                                    <?php $form->inputProductionBudget("類似見積番号", "", "00000"); ?><span class="form__effect"></span></span><span class="u-margin--left-8"></span>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th class="c-text--md-left">製作内容の詳細<br>(構造・材質など)</th>
                                <td class="c-text--md-left"><span class="form__textarea c-textarea">
                                  <?php $form->textareaProductionDetail("製作内容の詳細(構造・材質など)", null, "印刷の他に壁に取り付ける穴開けもお願いしたい"); ?><span class="form__effect"></span></span>
                                  <ul class="table__note c-list--sm-note">
                                    <li class="list__item">詳しくご記入ください。</li>
                                    <li class="list__item">ギガファイル便をご利用の際は、上記欄にその旨をご記入ください。あわせて、発行されたURLとパスワードをご入力いただくか、アップロード情報メールを弊社宛に転送をお願いいたします。</li>
                                  </ul>
                                </td>
                              </tr>
                              <tr>
                                  <th class="c-text--md-left">入稿データ</th>
                                  <td class="c-text--md-left file_form">
                                    <span class="form__file u-margin--bottom-8">
                                      <button type="button" class="file__button c-button--md-white">ファイルを選択</button>
                                      <div class="file__name" style="display:inline-block;"></div>
                                      <span class="file__remove" style="display:none; cursor:pointer; margin-left:10px; color:black;">×</span>
                                      <?php $form->inputImage1("入稿データ1", ""); ?>
                                      <span class="form__effect"></span>
                                    </span>
                                    <span class="form__file u-margin--bottom-8">
                                      <button type="button" class="file__button c-button--md-white">ファイルを選択</button>
                                      <div class="file__name" style="display:inline-block;"></div>
                                      <span class="file__remove" style="display:none; cursor:pointer; margin-left:10px; color:black;">×</span>
                                      <?php $form->inputImage2("入稿データ2"); ?>
                                      <span class="form__effect"></span>
                                    </span>
                                    <span class="form__file u-margin--bottom-8">
                                      <button type="button" class="file__button c-button--md-white">ファイルを選択</button>
                                      <div class="file__name" style="display:inline-block;"></div>
                                      <span class="file__remove" style="display:none; cursor:pointer; margin-left:10px; color:black;">×</span>
                                      <?php $form->inputImage3("入稿データ3"); ?>
                                      <span class="form__effect"></span>
                                    </span>
                                  <ul class="table__note c-list--sm-note">
                                    <li class="list__item">合計6MB以内（圧縮可）</li>
                                    <li class="list__item">添付書類は「pdf・ai・psd・zip」の形式（拡張子）でお願い致します。</li>
                                    <li class="list__item">Macでデータを作成する際は、必ず拡張子を付けて下さい。</li>
                                    <li class="list__item">データには寸法と仕様詳細を必ずご記入下さい。</li>
                                    <li class="list__item">ファイルを3つ以上お送り頂く際は、1つのフォルダにまとめた後に圧縮して添付下さい。</li>
                                  </ul>
                                </td>
                              </tr>
                              <tr>
                                <th class="c-text--md-left">データの添付数</th>
                                <td class="c-text--md-left"><span class="form__number is-value">
                                  <button type="button" class="number__button--plus c-button--md-white"><i class="c-icon--plus"></i></button>
                                  <?php $form->inputProductionQuantity1("データの添付数", ""); ?>
                                  <button type="button" class="number__button--minus c-button--md-white"><i class="c-icon--minus"></i></button><span class="form__effect"></span></span>
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

                      </form>
                    </div>
                  </main>
                  <?php echo $footer; ?>
                </div>
              </div>
              <script type="text/javascript">
              var type = ["pdf", "ai", "psd", "zip"];
              var size = 6000000;

              function num_change(obj) {
                var el = $(obj);
                var num = el.val();
                var hidden = el.next('input[type="hidden"]');
                hidden.val(num);
              }

            </script>
            <script type="text/javascript" src="/assets/javascripts/form_validation.js"></script>
            <script>
            $(function(){
              $('.js-formChange__trigger input').on('click', function(){
                updateSpec();
              });

              // --- ファイル添付機能の改善（ここから上書き） ---

              function setupFileUploader() {
                // すべてのファイル入力を一度強制的にクリアして監視を開始
                $('input[type="file"]').each(function() {
                  // ページ読み込み時にファイル名をチェックして、もし残っていれば表示
                  var file = $(this).prop('files')[0];
                  var $parent = $(this).closest('.form__file');
                  if (file) {
                    $parent.find('.file__name').text(file.name);
                    $parent.find('.file__remove').show();
                  } else {
                    $parent.find('.file__name').text('');
                    $parent.find('.file__remove').hide();
                  }
                });

                // 1. ファイル選択時の挙動
                $('input[type="file"]').off('change').on('change', function() {
                  var file = $(this).prop('files')[0];
                  var $parent = $(this).closest('.form__file');
                  if (file) {
                    $parent.find('.file__name').text(file.name);
                    $parent.find('.file__remove').show();
                  }
                });

                // 2. 削除ボタンクリック時の処理
                $('.file__remove').off('click').on('click', function() {
                  var $parent = $(this).closest('.form__file');
                  var $input = $parent.find('input[type="file"]');

                  // ファイル選択を完全に空にする
                  $input.val('');

                  // 重要：同じファイルを再度選べるように、input要素自体を新しく作り直す（クローン）
                  var $newInput = $input.clone(true);
                  $input.replaceWith($newInput);

                  $parent.find('.file__name').text('');
                  $(this).hide();

                  // 作り直したinputに対して再度監視をつける
                  setupFileUploader();
                });
              }

              // 初回実行
              $(document).ready(function() {
                setupFileUploader();
              });

              // 問題①対策：ページが「戻る」などで表示された際の強制リフレッシュ
              window.addEventListener('pageshow', function (event) {
                // ブラウザのキャッシュから読み込まれた場合も強制実行
                setupFileUploader();
              });

              // 問題②対策：リセットボタン
              $('button[type="reset"], input[type="reset"]').on('click', function() {
                setTimeout(function() {
                  $('.file__name').text('');
                  $('.file__remove').hide();
                  // 入力欄自体もクローンして完全に真っさらにする
                  $('input[type="file"]').val('').each(function() {
                    $(this).replaceWith($(this).clone(true));
                  });
                  setupFileUploader();
                }, 10);
              });

              // --- ファイル添付機能の改善（ここまで上書き） ---

              $('form#contactForm').submit(function() {
                updateSpec();
                // 入力必須&ラジオボタン
                flag = false;
                if(!$('#color_value').val()) {
                  let target = $('#color_value');
                  $(target).parent().append('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
                  $(target).parent().find('select').addClass('is-error');
                  flag = true;
                }
                if(!$('#thickness_value').val()) {
                  let target = $('#thickness_value');
                  $(target).parent().append('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
                  $(target).parent().find('select').addClass('is-error');
                  flag = true;
                }
                if(!$('#finish_value').val()) {
                  let target = $('#finish_value');
                  $(target).parent().append('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
                  $(target).parent().find('i.radio__button').addClass('is-error');
                  flag = true;
                }
                if(!$('#white_value').val()) {
                  let target = $('#white_value');
                  $(target).parent().append('<p class="table__note c-text--sm-danger">入力内容に誤りがあります</p>');
                  $(target).parent().find('i.radio__button').addClass('is-error');
                  flag = true;
                }
                // 処理を中断
                if (flag == true) {
                  var position = $('.is-error:first').parents('tr').offset().top;
                  $("html, body").animate({
                    scrollTop: position
                  }, 200, "swing");
                  return false;
                }
              });
            });

            function updateSpec() {
              let selectColor = '';
              let selectThickness = '';
              let selectFinish = '';
              let selectWhite = '';
              let triggar = $('.js-formChange__trigger input:checked').val();
              if( triggar == 'アクリル' ) {
                selectColor = $('#color_acrylic').val();
                selectThickness = $('#thickness_acrylic').val();
                selectFinish = $('#finish_acrylic input:checked').val();
                selectWhite = $('#white_acrylic input:checked').val();
              }
              if( triggar == 'ポリカーボネート' ) {
                selectColor = $('#color_polyca').val();
                selectThickness = $('#thickness_polyca').val();
                selectFinish = $('#finish_polyca input:checked').val();
                selectWhite = $('#white_polyca input:checked').val();
              }
              $('#color_value').val(selectColor);
              $('#thickness_value').val(selectThickness);
              $('#finish_value').val(selectFinish);
              $('#white_value').val(selectWhite);
            }
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
