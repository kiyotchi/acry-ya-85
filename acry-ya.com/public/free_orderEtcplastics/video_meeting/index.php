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
    <title>Zoom面談予約依頼｜アクリ屋ドットコム</title>
    <meta property="og:title" content="Zoom面談予約依頼｜アクリ屋ドットコム">
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
                        <li>Zoom面談予約依頼</li>
                    </ul>
                </nav>
                <?php $form->create(); ?>
                <h1 class="main__title c-heading--xl">Zoom面談予約依頼</h1>
                  <section class="form__section c-section">
                    <h2 class="c-heading--md-border">ご希望面談日時（翌日以降１～３日。土日祝日除く）</h2>
                      <table class="c-table--form">
                        <tbody>
                          <tr>
                            <th class="c-text--md-left is-required">第一希望</th>
                            <td class="c-text--md-left">
                              <div class="u-display--flex-center u-margin--bottom-8 u-width--90">
                                <span class="u-margin--left-8">年月日</span>
                                <span class="form__input u-margin--left-8">
                                  <?php $form->inputPreferredDate1("年月日1", "必須", date("Y/m/d", strtotime("1 day"))); ?>
                                </span>
                              </div>
                              <div class="u-display--flex-center u-margin--bottom-8 u-width--90">
                                <span class="u-margin--left-8">時間帯</span>
                                <span class="form__select u-margin--left-8">
                                  <?php $params = array("午前(9:00～12:00)","午後(13:00～15:00)","午後(15:00～17:30)");
                                        $form->selectPreferredTime1("時間帯1", $params, "必須");
                                  ?>
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th class="c-text--md-left">第二希望</th>
                            <td class="c-text--md-left">
                              <div class="u-display--flex-center u-margin--bottom-8 u-width--90">
                                <span class="u-margin--left-8">年月日</span>
                                <span class="form__input u-margin--left-8">
                                  <?php $form->inputPreferredDate2("年月日2", "", date("Y/m/d", strtotime("2 day"))); ?>
                                </span>
                              </div>
                              <div class="u-display--flex-center u-margin--bottom-8 u-width--90">
                                <span class="u-margin--left-8">時間帯</span>
                                <span class="form__select u-margin--left-8">
                                  <?php $params = array("午前(9:00～12:00)","午後(13:00～15:00)","午後(15:00～17:30)");
                                        $form->selectPreferredTime2("時間帯2", $params, "");
                                  ?>
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th class="c-text--md-left">第三希望</th>
                            <td class="c-text--md-left">
                              <div class="u-display--flex-center u-margin--bottom-8 u-width--90">
                                <span class="u-margin--left-8">年月日</span>
                                <span class="form__input u-margin--left-8">
                                  <?php $form->inputPreferredDate3("年月日3", "", date("Y/m/d", strtotime("3 day"))); ?>
                                </span>
                              </div>
                              <div class="u-display--flex-center u-margin--bottom-8 u-width--90">
                                <span class="u-margin--left-8">時間帯</span>
                                <span class="form__select u-margin--left-8">
                                  <?php $params = array("午前(9:00～12:00)","午後(13:00～15:00)","午後(15:00～17:30)");
                                        $form->selectPreferredTime3("時間帯3", $params, "");
                                  ?>
                                </span>
                              </div>
                              <ul class="table__note c-list--sm-note">
                                <li class="list__item">お客様へのお返事は弊社営業日の場合、午前中の依頼は当日、午後の依頼は翌営業日にさせていただきます。</li>
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
                                      <?php $form->inputCorporateName("法人名", null, "株式会社アクリ屋"); ?><span
                                              class="form__effect"></span></span>
                                  <p class="table__note c-text--sm-note">会社名・団体名など</p>
                              </td>
                          </tr>
                          <tr>
                              <th class="c-text--md-left">法人名（ふりがな）</th>
                              <td class="c-text--md-left"><span class="form__input kana_form">
                                      <?php $form->inputCorporateNameKana("法人名（ふりがな）", null, "あくりや"); ?><span
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
                              <ul class="table__note c-list--sm-note">
                                <li class="list__item__red">携帯電話の場合は「acry-ya.com」からのメールを受信出来るよう設定をお願い致します。</li>
                              </ul>
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
                      <h2 class="c-heading--md-border">ご依頼内容</h2>
                      <table class="c-table--form js-formChange">
                          <tbody>
                          <tr>
                              <th class="c-text--md-left is-required">製作内容の概要<br>(構造・材質など)</th>
                              <td class="c-text--md-left"><span class="form__textarea c-textarea">
                                  <?php $form->textareaProductionDetail("製作内容の概要(構造・材質など)", "必須", ""); ?><span class="form__effect"></span></span>
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
