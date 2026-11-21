<?php
require_once(__DIR__ . '/config/config.php');
$form = new order\Form();
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
    <meta name="description" content="アクリ屋ドットコムはアクリル製品とアクリル板,名入れほかアクリル樹脂加工の通信販売サイトです">
    <meta name="keywords" content="アクリル板,アクリルケース,アクリル加工,販売,通販,価格,当日出荷,当日発送,ポスターフレーム,フォトフレーム,樹脂,アクリ屋">
    <title>書体彫刻オーダーフォーム｜アクリ屋ドットコム</title>
    <meta property="og:title" content="書体彫刻オーダーフォーム｜アクリ屋ドットコム">
    <meta property="og:type" content="website">
    <meta property="og:url" content="/naire_order/typeface/order/">
    <meta property="og:image" content="/assets/images/ogp.jpg">
    <meta property="og:site_name" content="アクリ屋ドットコム">
    <meta property="og:description" content="アクリ屋ドットコムはアクリル製品とアクリル板,名入れほかアクリル樹脂加工の通信販売サイトです">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="アクリ屋ドットコム">
    <meta name="twitter:description" content="アクリ屋ドットコムはアクリル製品とアクリル板,名入れほかアクリル樹脂加工の通信販売サイトです">
    <meta name="twitter:image" content="/assets/images/ogp.jpg">
    <meta itemprop="image" content="/assets/images/ogp.jpg">
    <!--meta(property='fb:app_id', content='')-->
    <link rel="shortcut icon" href="/assets/images/favicon.ico">
    <link rel="apple-touch-icon" href="/assets/images/favicon.png">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
    <link rel="stylesheet" href="/assets/stylesheets/base.css">
    <link rel="stylesheet" href="/assets/stylesheets/layout.css">
    <link rel="stylesheet" href="/assets/stylesheets/style.css">
    <link rel="stylesheet" href="/assets/stylesheets/projects/naire-order.css">
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
                        <li><a href="/naire_order/">名入れオーダー</a></li>
                        <li><a href="/naire_order/typeface/">書体彫刻</a></li>
                        <li>書体彫刻オーダーフォーム</li>
                    </ul>
                </nav>
                <?php echo $notice; ?>
                <h1 class="main__title c-heading--xl">書体彫刻オーダーフォーム</h1>
                <?php $form->create(); ?>
                <section class="c-section">
                    <div class="c-flame--sm-danger">
                        <p class="c-heading--md">ご注意</p>
                        <p class="c-text--md">本ページは彫刻のみの注文フォームです。彫刻のご注文の前に、必ず彫刻する本体を製品ページにてご注文願います。<br>本体ご注文の際には、コメント欄に彫刻が入る旨をお書き添え下さい。<br>後日担当より正式な金額をご連絡致します。その際、再度ご注文手続きが必要になる場合がございますので、ご了承下さい。
                        </p>
                    </div>
                </section>
                <form class="l-form--contact c-form">
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
                                <th class="c-text--md-left is-required">電話番号</th>
                                <td class="c-text--md-left"><span class="form__input ">
                                            <?php $form->inputTel("電話番号", "必須"); ?><span
                                                class="form__effect"></span></span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                    <section class="form__section c-section">
                        <h2 class="c-heading--md-border">納品先</h2>
                        <div class="c-flame--sm-danger">
                            <p class="c-text--center-weightBold">先にご注文頂きました製品のお届け先になります。</p>
                        </div>
                    </section>
                    <section class="form__section c-section">
                        <h2 class="c-heading--md-border">制作内容</h2>
                        <table class="c-table--form">
                            <tbody>
                            <tr>
                                <th class="c-text--md-left is-required">ご注文番号（半角）</th>
                                <td class="c-text--md-left">
                                    <?php $form->inputOrderConfirmation("ご注文番号（半角）", "必須", "00000000"); ?>
                                    <p class="table__note c-text--sm-note">ご注文番号はお客様にお送りしておりますオーダーメールの件名(8桁の番号)になります。</p>
                                </td>
                            </tr>
                            <tr>
                                <th class="c-text--md-left is-required">本体製品名</th>
                                <td class="c-text--md-left"><span class="form__input ">
                                        <?php $form->inputProductName("本体製品名", "必須", "例：フォトフレーム＜スタンダード＞Ｂ５サイズ（クリアー）"); ?>
                                        <span class="form__effect"></span></span>
                                    <p class="table__note c-text--sm-note">彫刻する弊社製品の品名をお書き下さい。</p>
                                    <p class="table__note c-text--sm-note">製品は別ページからのご注文になります。</p>
                                </td>
                            </tr>
                            <tr>
                                <th class="c-text--md-left is-required">製作数</th>
                                <td class="c-text--md-left"><span class="form__number is-value">
                                          <button type="button" class="number__button--plus c-button--md-white"><i
                                                      class="c-icon--plus"></i></button>
                                        <?php $form->inputProductionNumber("製作数", ""); ?>
                                        <button type="button" class="number__button--minus c-button--md-white"><i
                                                    class="c-icon--minus"></i></button><span
                                                class="form__effect"></span></span>
                                </td>
                            </tr>
                            <tr>
                                <th class="c-text--md-left is-required">彫刻タイプ</th>
                                <td class="c-text--md-left"><span class="form__select">
                                            <?php
                                            $params = array(
                                                "（丸ゴシック体） 文字高さ5mmまで",
                                                "（丸ゴシック体）文字高さ10mmまで",
                                                "（丸ゴシック体）文字高さ20mmまで",
                                                "（丸ゴシック体）文字高さ30mmまで",
                                                "（明朝体）文字高さ5mmまで",
                                                "（明朝体）文字高さ10mmまで",
                                                "（明朝体）文字高さ20mmまで",
                                                "（明朝体）文字高さ30mmまで"
                                            );
                                            $form->selectSculptureType("彫刻タイプ", $params, "必須");
                                            ?>
                                </td>
                            </tr>
                            <tr>
                                <th class="c-text--md-left is-required">彫刻の面方向</th>
                                <td class="c-text--md-left"><span class="form__select form__half">
                                            <?php
                                            $params = array(
                                                "フレーム前板の裏から彫刻",
                                                "フレーム前板の表から彫刻",
                                                "アクリル板の裏から彫刻",
                                                "アクリル板の表から彫刻"
                                            );
                                            $form->inputSculptureDirection("彫刻の面方向", $params);
                                            ?>
                                    </span>
                                    <ul class="table__note c-list--sm-note">
                                      <li class="list__item">透明系のアクリル板は裏からの彫刻がお勧めです（不透明系は表からの彫刻）。</li>
                                      <li class="list__item">フォトフレームの場合、フレーム前板への彫刻になります。</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th class="c-text--md-left is-required">彫刻の色入れ</th>
                                <td class="c-text--md-left"><span class="form__select">
                                            <?php
                                            $params = array(
                                                "無し",
                                                "赤",
                                                "黒",
                                                "白"
                                            );
                                            $form->selectSculptureColor("彫刻の色入れ", $params, "必須");
                                            ?><span class="form__effect"></span></span>
                                    <a data-target="colorWindow" class="js-modal__trigger--open c-link table__note">
                                        <i class="link__icon--before c-icon--triangle-r"></i>色見本</a>
                                    <div class="js-modal">
                                        <div id="colorWindow" class="c-window--md js-modal__content">
                                            <p class="c-heading--md">色見本</p><img src="/assets/images/projects/naire_order/typeface/order/img_01.jpg">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th class="c-text--md-left is-required">原稿のタイプ</th>
                                <td class="c-text--md-left"><span class="form__select">
                                    <?php
                                    $params = array(
                                        "テキスト・レイアウトデータ（既製書体のみ）",
                                        "テキスト指定データ無し（既製書体のみ）"
                                    );
                                    $form->selectManuscriptType("原稿のタイプ", $params, "必須");
                                    ?>
                                　<p class="table__note c-text--sm-note">テキスト指定以外は添付データが必要</p>
                                </td>
                            </tr>
                            <tr>
                                <th class="c-text--md-left">原稿の添付</th>
                                <td class="c-text--md-left file_form"><span class="form__file u-margin--bottom-8">
                                          <button type="button" class="file__button c-button--md-white">ファイルを選択</button>
                                          <div class="file__name"></div>
                                        <?php $form->inputImage1("原稿の添付1"); ?><span
                                                class="form__effect"></span></span><span
                                            class="form__file u-margin--bottom-8">
                                          <button type="button" class="file__button c-button--md-white">ファイルを選択</button>
                                          <div class="file__name"></div>
                                        <?php $form->inputImage2("原稿の添付2"); ?>
                                        <span class="form__effect"></span></span><span class="form__file ">
                                          <button type="button" class="file__button c-button--md-white">ファイルを選択</button>
                                          <div class="file__name"></div>
                                        <?php $form->inputImage3("原稿の添付3"); ?>
                                        <span class="form__effect"></span></span>
                                    <ul class="table__note c-list--sm-note">
                                        <li class="list__item">合計6MB以内（圧縮可）</li>
                                        <li class="list__item">添付書類は「pdf・ai・dxf・jpg・zip・lzh」の形式でお願い致します。</li>
                                        <li class="list__item">DXFデータは文字化けする事がある為、詳細を明記したPDFデータを併せて添付下さい。</li>
                                        <li class="list__item">データには寸法と仕様詳細を必ずご記入下さい。</li>
                                        <li class="list__item">ファイルを３つ以上お送り頂く際は、1つのフォルダにまとめた後に圧縮して添付下さい。</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                              <th class="c-text--md-left">原稿の添付数</th>
                              <td class="c-text--md-left"><span class="form__number is-value">
                                <button type="button" class="number__button--plus c-button--md-white"><i class="c-icon--plus"></i></button>
                                <?php $form->inputManuscriptNumber("原稿の添付数"); ?>
                                <button type="button" class="number__button--minus c-button--md-white"><i class="c-icon--minus"></i></button><span class="form__effect"></span></span>
                              </td>
                            </tr>

                                <tr>
                                  <th class="c-text--md-left ">テキスト位置指定<br><span class="c-text--sm">(レイアウトデータが無い場合のみ</span>)</th>
                                  <td class="c-text--md-left">
                                    <div class="u-margin--bottom-16 form__half"><img src="/assets/images/projects/naire_order/typeface/order/img_02.jpg" class="js-modal--image"></div>
                                    <div class="u-display--flex u-margin--bottom-8">
                                      <span class="form__logo">
                                      <i class="c-icon--number--black">1</i>彫刻文字</span><span class="form__input u-width--70">
                                            <?php $form->inputSculptureCharacter("彫刻文字", "", "例：アクリ屋15周年記念"); ?><span class="form__effect"></span></span>
                                    </div>
                                    <div class="u-display--flex u-margin--bottom-8">
                                      <span class="form__logo">
                                        <i class="c-icon--number--black">2</i>彫刻板サイズ： 縦<sup>※</sup>
                                      </span>
                                      <span class="form__input u-margin--left-8">
                                        <?php $form->inputSculptureBoardSize1("彫刻板サイズ：縦", "", "000"); ?>
                                        <span class="form__effect"></span>
                                      </span>
                                      <span class="u-margin--left-8">mm</span>
                                    </div>
                                    <div class="u-display--flex u-margin--bottom-8">
                                      <span class="form__logo">
                                        <i class="c-icon--number--black">3</i>彫刻板サイズ： 横
                                      </span>
                                      <span class="form__input u-margin--left-8">
                                        <?php $form->inputSculptureBoardSize2("彫刻板サイズ：横", "", "000"); ?>
                                        <span class="form__effect"></span>
                                      </span>
                                      <span class="u-margin--left-8">mm</span>
                                    </div>
                                    <div class="u-display--flex u-margin--bottom-8">
                                      <span class="form__logo">
                                        <i class="c-icon--number--black">4</i>彫刻位置： 左端から
                                      </span>
                                      <span class="form__input u-margin--left-8">
                                        <?php $form->inputSculpturePosition1("彫刻位置：左端から", "", "000"); ?>
                                        <span class="form__effect"></span>
                                      </span>
                                      <span class="u-margin--left-8">mm</span>
                                    </div>
                                    <div class="u-display--flex u-margin--bottom-8">
                                      <span class="form__logo">
                                        <i class="c-icon--number--black">5</i>彫刻位置： 右端から
                                      </span>
                                      <span class="form__input u-margin--left-8">
                                        <?php $form->inputSculpturePosition2("彫刻位置：右端から", "", "000"); ?>
                                        <span class="form__effect"></span>
                                      </span>
                                      <span class="u-margin--left-8">mm</span>
                                    </div>
                                    <div class="u-display--flex u-margin--bottom-8">
                                      <span class="form__logo">
                                        <i class="c-icon--number--black">6</i>彫刻位置： 下から
                                      </span>
                                      <span class="form__input u-margin--left-8">
                                        <?php $form->inputSculpturePosition3("彫刻位置：下から", "", "000"); ?>
                                        <span class="form__effect"></span>
                                      </span>
                                      <span class="u-margin--left-8">mm</span>
                                    </div>
                                    <div class="u-display--flex u-margin--bottom-8">
                                      <span class="form__logo">
                                      <i class="c-icon--number--black">7</i>彫刻文字の高さ</span>
                                      <span class="form__input u-margin--left-8">
                                        <?php $form->inputSculptureCharacterHeight("彫刻文字の高さ", "", "000"); ?>
                                        <span class="form__effect"></span>
                                      </span>
                                      <span class="u-margin--left-8">mm</span>
                                    </div>
                                    <div class="u-display--flex u-margin--bottom-8">
                                      <span class="form__logo">
                                        <i class="c-icon--number--black">8</i>彫刻文字の全体幅
                                      </span>
                                      <span class="form__input u-margin--left-8">
                                        <?php $form->inputSculptureCharacterWidth("彫刻文字の全体幅", "", "000"); ?>
                                        <span class="form__effect"></span>
                                      </span>
                                      <span class="u-margin--left-8">mm</span>
                                    </div>
                                    <p class="table__note c-text--sm-note">フォトフレームの場合はフレームの全体サイズを入力</p>
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
        </main>
        <?php echo $footer; ?>
    </div>
</div>
<script type="text/javascript">
  var type = ["pdf", "ai", "dxf", "jpg", "jpeg", "zip", "lzh"];
  var size = 6000000;

  function num_change(obj) {
    var el = $(obj);
    var num = el.val();
    var hidden = el.next('input[type="hidden"]');
    hidden.val(num);
  }

</script>
<script type="text/javascript" src="/assets/javascripts/form_validation.js">
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
