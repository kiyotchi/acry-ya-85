<?php
require_once(__DIR__ . '/config/config.php');
$form = new repair\Form();
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
    <title>不良／破損／製品違いの交換・不足部品ご請求のお申込みフォーム｜アクリ屋ドットコム</title>
    <meta property="og:title" content="不良／破損／製品違いの交換・不足部品ご請求のお申込みフォーム｜アクリ屋ドットコム">
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
                        <li>不良/破損/製品違いの交換・不足部品ご請求のお申込み</li>
                    </ul>
                </nav>
                <h1 class="main__title c-heading--xl">不良/破損/製品違いの交換・不足部品ご請求のお申込み</h1>
                <!-- <form class="l-form--contact c-form"> -->
                <?php echo $notice; ?>
                <?php $form->create(); ?>
                <section class="c-section">
                  <ul class="c-list">
                    <li class="list__item">	この度は、大変ご迷惑をお掛けいたしましたことを深くお詫び申し上げます。交換と不足品のご請求は下記の通りになります。  	</li>
                  </ul>
                </section>
                <section class="c-section">
                  <h2 class="c-heading--md-border">不良・破損・製品違い・品質による交換の条件</h2>
                  <h3 class="c-heading--sm">交換の条件</h3>
                  <ul class="c-list--disc">
                    <li class="list__item">未使用の製品に限り、代替品と交換させていただきます。</li>
                    <li class="list__item">温度や湿度、経年変化にて接着部分が白くなることや、板に反り(特に薄く大きい板、ミラー板等)が生じる場合がございます。こちらは材料特性のため、良品扱いとなります。	</li>
                    <li class="list__item">アクリル加工品の接着は細心の注意を払って行っておりますが、手作業の特性上、一定の品質差や気泡が生じる場合がございます。良否は製品を確認した上で、最終的に弊社判断となります。	</li>
                    <li class="list__item"><span class="c-text--weightBold-danger">【お客様都合による返品・交換】 はお断りさせていただきます。</span></li>
                  </ul>
                </section>
                <section class="c-section">
                  <h2 class="c-heading--md-border">交換と不足部品の請求期間</h2>
                  <section class="section__sub">
                    <h3 class="c-heading--sm">製品の破損</h3>
                    <p><span class="c-text--weightBold-danger">お受取り後10日以内</span><br>製品お受取り後10日を過ぎますと、運送会社の破損保証が無効となり、商品の交換をお受け致しておりません。 <br>また、製品お受取りの場所から他へ移動された場合は、運送会社の破損保証が無効となり、商品の交換をお受け致しておりません。</p>
                  </section>
                  <section class="section__sub">
                    <h3 class="c-heading--sm">不良／製品違いによる交換・不足部品の請求</h3>
                    <p><span class="c-text--weightBold-danger">製品の到着日から30日以内</span><br>その期間を過ぎてのご対応はお断りさせて頂きます。</p>
                  </section>
                </section>
                <section class="c-section">
                  <h2 class="c-heading--md-border">交換のながれ</h2>
                  <ul class="c-list--disc">
                    <li class="list__item">	交換に伴う往復の送料は弊社が負担いたします。ただし、必ず本フォームよりご連絡いただき、弊社からの連絡後にご返送くださいますようお願いいたします。  	</li>
                    <li class="list__item">	返品時の梱包はお客様にてお願いいたします。製品到着時の梱包材を再利用していただけますようお願いいたします。	</li>
                    <li class="list__item">	代替品を再製作する場合、お届けまでにお時間をいただきますので、予めご了承ください。	</li>
                  </ul>
                </section>
                <section class="p-hidden">
                  <div class="c-text--center">
                    <label for="label1" class="hidden__button c-button--xl c-text--center-primary u-margin--bottom-32">上記の内容を確認しました<i class="button__icon--after c-icon--arrow-b-white"></i></label>
                    <input id="label1" type="checkbox" class="hidden__input">
                    <div class="hidden__show">
                      <section class="form__section c-section">
                          <h2 class="c-heading--md-border">不良／破損／製品違いの交換・不足部品ご請求のお申込み内容</h2>
                          <table class="c-table--form">
                              <tbody>
                              <tr>
                                  <th class="c-text--md-left is-required">ご注文番号（半角）</th>
                                  <td class="c-text--md-left">
                                      <span class="form__input "><?php $form->inputOrderNumber("ご注文番号（半角）", "必須",
                                              "00000000"); ?><span class="form__effect"></span></span>
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
                                          <?php $form->inputOrderDate("ご注文日(日)", "必須", "1"); ?>
                                          <span class="form__effect"></span>
                                        </span>
                                        <span class="u-margin--left-8 u-width--10">日</span>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <th class="c-text--md-left is-required">破損状況</th>
                                  <td class="c-text--md-left">
                              <span class="form__select ">
                                <?php
                                $params = array(
                                    "製品の破損",
                                    "製品の不良",
                                    "製品が注文品と違う",
                                    "製品の不足部品",
                                );
                                $form->selectFailureType("破損状況", $params, "必須");
                                ?>
                                  <span class="form__effect"></span>
                              </span>
                                  </td>
                              </tr>
                              <tr>
                                  <th class="c-text--md-left is-required">破損状況の詳細</th>
                                  <td class="c-text--md-left">
                              <span class="form__textarea ">
                                <?php $form->textareaFailureDetail("破損状況の詳細", "必須", "不良/破損/状況（不足部品や製品違いの詳細）をお教え下さい。"); ?>
                                  <span class="form__effect"></span>
                              </span>
                                  </td>
                              </tr>
                              <tr>
                                  <th class="c-text--md-left">画像の添付</th>
                                  <td class="c-text--md-left file_form">
                                      <p class="c-text--sm-weightBold-danger u-margin--bottom-8">破損の場合は、破損ヶ所の写真を添付頂くと、ご対応がスピーディです。ご協力をお願いします。</p>
                                      <span class="form__file u-margin--bottom-8">
                                  <button type="button" class="file__button c-button--md-white">ファイルを選択</button>
                                  <div class="file__name"></div>
                                          <?php $form->inputImage1("画像の添付1"); ?>
                                          <span class="form__effect"></span>
                                </span>
                                      <span class="form__file u-margin--bottom-8">
                                  <button type="button" class="file__button c-button--md-white">ファイルを選択</button>
                                  <div class="file__name"></div>
                                          <?php $form->inputImage2("画像の添付2"); ?>
                                          <span class="form__effect"></span>
                                </span>
                                      <span class="form__file ">
                                  <button type="button" class="file__button c-button--md-white">ファイルを選択</button>
                                  <div class="file__name"></div>
                                          <?php $form->inputImage3("画像の添付3"); ?>
                                          <span class="form__effect"></span>
                                </span>
                                      <ul class="table__note c-list--sm-note">
                                            <li class="list__item">合計6MB以内（圧縮可）</li>
                                            <li class="list__item">添付書類は「jpg・zip・lzh」の形式（拡張子）でお願い致します。</li>
                                            <li class="list__item">ファイルを３つ以上お送り頂く際は、1つのフォルダにまとめた後に圧縮して添付下さい。</li>
                                      </ul>
                                  </td>
                              </tr>
                              <tr>
                                  <th class="c-text--md-left">運送伝票番号</th>
                                  <td class="c-text--md-left"><span class="form__input">
                              <?php $form->inputDeliveryNumber("運送伝票番号", null, '1234-5678-9000'); ?>
                                          <span class="form__effect"></span></span>
                                      <ul class="table__note c-list--sm-note">
                                          <li class="list__item">運送伝票番号は発送の際のダンボールに貼り付いています。</li>
                                          <li class="list__item">製品破損の場合のみご入力をお願いいたします。（不明の場合は未入力で可）</li>
                                      </ul>
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
                                      <p class="table__note c-text--sm-note">ご注文時にご入力頂いたお名前、法人様の場合はご担当者名をご入力下さい。</p>
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
                                  <th class="c-text--md-left">メールアドレス</th>
                                  <td class="c-text--md-left"><span class="form__input">
                                    <?php $form->inputMail("メールアドレス", "acry-ya@acry-ya.com"); ?><span
                                                  class="form__effect"></span></span>
                                      <p class="table__note c-text--sm-note">ご注文時にご入力頂いたメールアドレスをご入力下さい。</p>
                                  </td>
                              </tr>
                              <tr>
                                  <th class="c-text--md-left">メールアドレス(確認用)</th>
                                  <td class="c-text--md-left"><span class="form__input">
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
                                      <p class="table__note c-text--sm-note">弊社より破損や不良ヶ所の詳細をお電話にてお伺いする場合がございます。</p>
                                      <p class="table__note c-text--sm-note">日中の電話連絡がお受けできない場合は、【電話不可】とご入力下さい。</p>
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
                      <!--cookie-->
                      <!--send-->
                      <div class="form__action">
                          <button type="reset" class="c-button--xl-gray js-disabledSwitch__content">リセット</button>
                          <?php $form->end('確認画面へ'); ?>
                      </div>
                  </div>
                </div>
              </section>
                </form>
            </div>
        </main>
        <?php echo $footer; ?>
    </div>
</div>
<script type="text/javascript">
  var type = ["jpg", "jpeg", "zip", "lzh"];
  var size = 6000000;
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
