<?php
require_once(__DIR__ . '/config/config.php');
$form = new web\Form();
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
    <meta name="description" content="">
    <meta name="keywords" content="">
    <title>エンプラ加工お見積り依頼フォーム｜アクリ屋ドットコム</title>
    <meta property="og:title" content="エンプラ加工お見積り依頼フォーム｜アクリ屋ドットコム">
    <meta property="og:type" content="website">
    <meta property="og:url" content="/free_orderEtcplastics/web/">
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
                        <li><a href="/free_orderEtcplastics/">エンプラ加工お見積り依頼</a></li>
                        <li>エンプラ加工お見積り依頼フォーム</li>
                    </ul>
                </nav>
                <?php $form->create(); ?>
                <h1 class="main__title c-heading--xl">エンプラ加工お見積り依頼フォーム</h1>
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
                              <th class="c-text--md-left is-required">法人名</th>
                              <td class="c-text--md-left"><span class="form__input ">
                                      <?php $form->inputCorporateName("法人名", "必須", "株式会社アクリ屋"); ?><span
                                              class="form__effect"></span></span>
                                  <p class="table__note c-text--sm-note">会社名・団体名など</p>
                              </td>
                          </tr>
                          <tr>
                              <th class="c-text--md-left is-required">法人名（ふりがな）</th>
                              <td class="c-text--md-left"><span class="form__input kana_form">
                                      <?php $form->inputCorporateNameKana("法人名（ふりがな）", "必須", "あくりや"); ?><span
                                              class="form__effect"></span></span>
                                  <p class="table__note c-text--sm-note">株式会社等の企業形態の入力は必要ありません。</p>
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
                              <th class="c-text--md-left ">FAX</th>
                              <td class="c-text--md-left"><span class="form__input ">
                                      <?php $form->inputFax("FAX"); ?><span
                                              class="form__effect"></span></span>
                              </td>
                          </tr>
                          </tbody>
                      </table>
                  </section>
                  <section class="form__section c-section">
                      <h2 class="c-heading--md-border">納品先の異なる場合のみご記入ください</h2>
                      <table class="c-table--form">
                          <tbody>
                          <tr>
                              <th class="c-text--md-left ">納品先名</th>
                              <td class="c-text--md-left"><span class="form__input ">
                              <?php $form->inputDeliveryName("納品先名", null,"株式会社さくら樹脂"); ?><span class="form__effect"></span></span>
                              </td>
                          </tr>
                          <tr>
                              <th class="c-text--md-left">納品先名（ふりがな）</th>
                              <td class="c-text--md-left"><span class="form__input kana_form">
                              <?php $form->inputDeliveryNameKana("納品先名（ふりがな）", null, "さくらじゅし"); ?><span class="form__effect"></span></span>
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
                              <th class="c-text--md-left is-required">製品</th>
                              <td class="c-text--md-left"><span class="form__input ">
                              <?php $form->inputProductionProduct("製品", "必須", "例：POMスペーサー"); ?><span class="form__effect"></span></span>
                              </td>
                          </tr>
                          <tr>
                              <th class="c-text--md-left">使用用途</th>
                              <td class="c-text--md-left"><span class="form__input ">
                              <?php $form->inputProductionApplication("使用用途", null, "計測機器部品"); ?><span class="form__effect"></span></span>
                              </td>
                          </tr>
                          <tr>
                              <th class="c-text--md-left is-required">製作数</th>
                              <td class="c-text--md-left"><span class="form__input ">
                              <?php $form->inputProductionApplication("製作数", "必須", "例：20 , 50 , 100"); ?><span class="form__effect"></span></span>
                                  <ul class="table__note c-list--sm-note">
                                      <li class="list__item">製作数によって価格が変わりますので、希望数量（ロット）を記載下さい。</li>
                                      <li class="list__item">複数可</li>
                                  </ul>
                              </td>
                          </tr>
                          <tr>
                              <th class="c-text--md-left">全体サイズ</th>
                              <td class="c-text--md-left">
                                  <div class="u-display--flex-center u-margin--bottom-8 u-width--90"><span class="u-margin--left-8">横（W）</span><span class="form__input">
                                      <?php $form->inputProductionSize("全体サイズ_横（W）", null, "000"); ?></span><span class="u-margin--left-8">mm</span>
                                  </div>
                                  <div class="u-display--flex-center u-margin--bottom-8 u-width--90"><span class="u-margin--left-8">奥行き（D）</span><span class="form__input">
                                      <?php $form->inputProductionDepth("全体サイズ_奥行き（D）", null, "000"); ?></span><span class="u-margin--left-8">mm</span>
                                  </div>
                                  <div class="u-display--flex-center u-width--90"><span class="u-margin--left-8">高さ（H）</span><span class="form__input">
                                      <?php $form->inputProductionheight("全体サイズ_高さ（H）", null, "000"); ?></span><span class="u-margin--left-8">mm</span>
                                  </div>
                                  <div class="js-modal"><a data-target="sizeWindow" class="table__question js-modal__trigger--open"><i class="c-icon--question"></i></a>
                                      <div id="sizeWindow" class="c-window--md js-modal__content">
                                          <p class="c-heading--md">全体サイズについて</p><img src="/assets/images/projects/full_order/web/img_01.jpg">
                                      </div>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <th class="c-text--md-left">材料</th>
                              <td class="c-text--md-left"><span class="form__input ">
                              <?php $form->inputProductionType("材料", null, "例：POM"); ?><span class="form__effect"></span></span>
                              </td>
                          </tr>
                          <tr>
                              <th class="c-text--md-left">材料の色</th>
                              <td class="c-text--md-left"><span class="form__input ">
                              <?php $form->inputProductionColor("材料の色", null, "例：ホワイト"); ?><span class="form__effect"></span></span>
                              </td>
                          </tr>
                          <tr>
                              <th class="c-text--md-left">切断端面</th>
                              <td class="c-text--md-left radio_group">
                                  <?php $params = array("カットのみ","細目仕上","磨き仕上"); $form->inputCutSection("切断端面", $params); ?>
                                  <p class="table__note c-text--sm-note">磨き仕上はアクリルのみのご対応となります。</p>
                              </td>
                          </tr>
                          <tr>
                              <th class="c-text--md-left">納品方法</th>
                              <td class="c-text--md-left radio_group">
                                  <?php $params = array("運送便","ご来社引取"); $form->inputProductionMethod("納品方法", $params); ?>
                              </td>
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
                                      <li class="list__item">上記が「はい」の場合、お分かりになりましたら、その際のお見積もり番号を記載下さい。</li>
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
                                  <p class="table__note c-text--sm-note">不明点があるとお見積もりができない場合があります。</p>
                              </td>
                          </tr>
                          <tr>
                              <th class="c-text--md-left">製作内容の詳細<br>(構造・注意事項等)</th>
                              <td class="c-text--md-left"><span class="form__textarea c-textarea">
                                  <?php $form->textareaProductionDetail("製作内容の詳細(構造・注意事項等)","",""); ?><span class="form__effect"></span></span>
                                  <ul class="table__note c-list--sm-note">
                                      <li class="list__item">詳しくご記入ください。</li>
                                      <li class="list__item">不明点があるとお見積もりができない場合があります。</li>
                                  </ul>
                              </td>
                          </tr>
                          <tr>
                              <th class="c-text--md-left">図面の添付</th>
                              <td class="c-text--md-left file_form">
                                  <span class="form__file u-margin--bottom-8">
                                      <button type="button" class="file__button c-button--md-white">ファイルを選択</button>
                                      <div class="file__name"></div>
                                      <?php $form->inputImage1("図面の添付1", ""); ?>
                                      <span class="form__effect"></span>
                                  </span>
                                  <span class="form__file u-margin--bottom-8">
                                      <button type="button" class="file__button c-button--md-white">ファイルを選択</button>
                                      <div class="file__name"></div>
                                      <?php $form->inputImage2("図面の添付2"); ?>
                                      <span class="form__effect"></span>
                                  </span>
                                  <span class="form__file u-margin--bottom-8">
                                      <button type="button" class="file__button c-button--md-white">ファイルを選択</button>
                                      <div class="file__name"></div>
                                      <?php $form->inputImage3("図面の添付3"); ?>
                                      <span class="form__effect"></span>
                                  </span>
                                  <ul class="table__note c-list--sm-note">
                                      <li class="list__item">合計6MB以内（圧縮可）</li>
                                      <li class="list__item">添付書類は「pdf・ai・dxf・step・jpg・zip・lzh」の形式（拡張子）でお願い致します。</li>
                                      <li class="list__item">Macでデータを作成する際は、必ず拡張子を付けて下さい。</li>
                                      <li class="list__item">DXFデータは文字化けする事がある為、詳細を明記したPDFデータを併せて添付下さい。</li>
                                      <li class="list__item">データには寸法と仕様詳細を必ずご記入下さい。</li>
                                      <li class="list__item">ファイルを3つ以上お送り頂く際は、1つのフォルダにまとめた後に圧縮して添付下さい。</li>
                                  </ul>
                              </td>
                          </tr>
                          <tr>
                              <th class="c-text--md-left">図面の添付数</th>
                              <td class="c-text--md-left"><span class="form__number is-value">
                              <button type="button" class="number__button--plus c-button--md-white"><i class="c-icon--plus"></i></button>
                              <?php $form->inputProductionQuantity1("図面の添付数", ""); ?>
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
  var type = ["pdf", "ai", "dxf", "step","stp", "jpeg", "jpg", "zip", "lzh"];
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
	let triggar = $('.js-formChange__trigger input:checked').val();
	if( triggar == 'アクリル' ) {
		selectColor = $('#color_acrylic').val();
		selectThickness = $('#thickness_acrylic').val();
		selectFinish = $('#finish_acrylic input:checked').val();
	}
	if( triggar == 'ポリカーボネート' ) {
		selectColor = $('#color_polyca').val();
		selectThickness = $('#thickness_polyca').val();
		selectFinish = $('#finish_polyca input:checked').val();
	}
	if( triggar == 'その他' ) {
		selectColor = $('#color_other').val();
		selectThickness = $('#thickness_other').val();
		selectFinish = $('#finish_other input:checked').val();
	}
	$('#color_value').val(selectColor);
	$('#thickness_value').val(selectThickness);
	$('#finish_value').val(selectFinish);
}
</script>
<?php echo $body_end; ?>
</body>
</html>
