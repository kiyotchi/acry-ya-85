<!DOCTYPE html>
<html lang="ja" prefix="og: http://ogp.me/ns#">
  <head>
    @include('common.head_start')
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta meta http-equiv="Expires" content="604800">
    <meta name="format-detection" content="telephone=no">
    <meta name="description" content="">
    <meta name="keywords" content="アクリル板,アクリルケース,アクリル加工,販売,通販,価格,当日出荷,当日発送,ポスターフレーム,フォトフレーム,樹脂,アクリ屋">
    <title>ご購入後のアンケート｜アクリ屋ドットコム</title>
    <meta property="og:title" content="ご購入後のアンケート｜アクリ屋ドットコム">
    <meta property="og:type" content="website">
    <meta property="og:url" content="/review/thanks">
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
    <link rel="stylesheet" href="/assets/stylesheets/projects/voice.css">
    <link rel="stylesheet" href="/assets/stylesheets/acry-ya.css">
    <link rel="stylesheet" href="/assets/stylesheets/acry/voice.css">
    <link rel="stylesheet" href="/assets/rating/css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
    <script src="/assets/javascripts/common.js"></script>
    <script src="/assets/javascripts/function.js"></script>
    <script src="/assets/javascripts/plugins/cookie.js"></script>
    <script src="/assets/javascripts/plugins/slick-1.6.0.min.js"></script>
    <script src="/assets/javascripts/plugins/slick-1.6.0.setting.js"></script>

    <script src="/assets/rating/js/form.js"></script>
    <style>
    .hide {
      display: none;
    }
    </style>
  </head>
  <body id="p-voice">
    <div id="wrapper" class="l-column js-menu">
      @include('common.header')
      @include('common.sidemenu')
      <div class="column__right">
        <main class="l-main">
          <div class="main__sub--white">

            <a id="review-reset" name="review-reset"></a>

            <!-- 入力画面 -->
            <div class="review-input">
                <nav class="c-pankuzu--scroll">
                  <ul class="pankuzu__list">
                    <li><a href="/">HOME</a></li>
                    <li>ご購入後のアンケート</li>
                  </ul>
                </nav>
                <h1 class="main__title c-heading--xl">ご購入後のアンケート</h1>
                <section class="c-section">
                  <p class="c-text--md">
                    当店は、ご利用頂きましたお客様のご感想をお聞きして、より良いサービス・製品開発・ホームページ作成などに役立てさせて頂きたく、アンケートを実施しております。
                    大変お手数ですがご協力を宜しくお願い致します。
                  </p>
                </section>

                <form id="contactForm" class="l-form--content c-form" method="POST" action="/review?inputkey={{ request()->input('inputkey') }}" enctype="multipart/form-data">
                  @csrf
                  <section class="form__section c-section">
                    <h2 class="c-heading--md-border">アンケート内容</h2>
                    <table class="c-table--form">
                      <tbody>
                        <tr class="p-cheak">
                          <th colspan="2" class="c-heading--xs-left cheak__question">
                            今回お求め頂きました商品を1点チェック下さい。（複数ご購入の場合はメインとなる商品を選択して下さい）
                            <span class="form__effect" style="color:red;">
                                @if ($errors->has('review.keyword1'))
                                    <br>
                                    {!! implode('<br>', $errors->get('review.keyword1')) !!}
                                @endif
                            </span>
                          </th>
                        </tr>
                        <tr class="p-cheak">
                          <td colspan="2" class="cheak__answer">
                            <p class="c-heading--sm-blockcategory">フルオーダー</p>
                            <div class="l-article--column-2-vertical p-questionnaire">
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="フルオーダー（特注）"><i class="radio__button"></i><span>フルオーダー（特注）</span>
                                </label>
                              </div>
                            </div>

                            <p class="c-heading--sm-blockcategory u-margin--top-32">アクリル板</p>
                            <div class="l-article--column-2-vertical p-questionnaire">
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル押出板"><i class="radio__button"></i><span>アクリル押出板</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルキャスト板"><i class="radio__button"></i><span>アクリルキャスト板</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル低反射板（ノングレア）"><i class="radio__button"></i><span>アクリル低反射板（ノングレア）</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル精密薄板"><i class="radio__button"></i><span>アクリル精密薄板</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル集光板"><i class="radio__button"></i><span>アクリル集光板</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルミラー板"><i class="radio__button"></i><span>アクリルミラー板</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルハーフミラー（マジックミラー）板"><i class="radio__button"></i><span>アクリルハーフミラー（マジックミラー）板</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル紫外線カット（UVカット）板"><i class="radio__button"></i><span>アクリル紫外線カット（UVカット）板</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルハードコート（耐擦傷）板"><i class="radio__button"></i><span>アクリルハードコート（耐擦傷）板</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル制電板（静電気防止）"><i class="radio__button"></i><span>アクリル制電板（静電気防止）</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルプリズムシート"><i class="radio__button"></i><span>アクリルプリズムシート</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル厚板"><i class="radio__button"></i><span>アクリル厚板</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="特売アクリル・カラーキャスト板"><i class="radio__button"></i><span>特売アクリル・カラーキャスト板</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル端材（薄板・厚板）"><i class="radio__button"></i><span>アクリル端材（薄板・厚板）</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル端材セット（極厚）"><i class="radio__button"></i><span>アクリル端材セット（極厚）</span>
                                </label>
                              </div>
                            </div>

                            <p class="c-heading--sm-blockcategory u-margin--top-32">アクリル板加工・DIY</p>
                            <div class="l-article--column-2-vertical p-questionnaire">
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル板加工　セミオーダー"><i class="radio__button"></i><span>アクリル板加工　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル円板加工　セミオーダー"><i class="radio__button"></i><span>アクリル円板加工　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="Lの字曲げ加工　セミオーダー"><i class="radio__button"></i><span>Lの字曲げ加工　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="コの字ディスプレイ台　セミオーダー"><i class="radio__button"></i><span>コの字ディスプレイ台　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="階段手すりアクリルパネル　セミオーダー"><i class="radio__button"></i><span>階段手すりアクリルパネル　セミオーダー</span>
                                </label>
                              </div>
                            </div>

                            <p class="c-heading--sm-blockcategory u-margin--top-32">アクリルプリント</p>
                            <div class="l-article--column-2-vertical p-questionnaire">
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル板UV印刷 セミオーダー"><i class="radio__button"></i><span>アクリル板UV印刷 セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルブロックUV印刷 規格サイズ"><i class="radio__button"></i><span>アクリルブロックUV印刷 規格サイズ</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルケースUV印刷 セミオーダー"><i class="radio__button"></i><span>アクリルケースUV印刷 セミオーダー</span>
                                </label>
                              </div>
                            </div>

                            <p class="c-heading--sm-blockcategory u-margin--top-32">その他アクリル材料・加工</p>
                            <div class="l-article--column-2-vertical p-questionnaire">
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルパイプ/丸棒加工　セミオーダー"><i class="radio__button"></i><span>アクリルパイプ/丸棒加工　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="UVプリント用 アクリルブロックセット（透明）"><i class="radio__button"></i><span>UVプリント用 アクリルブロックセット（透明）</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルブロック　クリアー"><i class="radio__button"></i><span>アクリルブロック　クリアー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルブロック　クリアー　正方形厚板"><i class="radio__button"></i><span>アクリルブロック　クリアー　正方形厚板</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルドーム（半球）　射出成形品"><i class="radio__button"></i><span>アクリルドーム（半球）　射出成形品</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルドーム（半球）　フリーブロー成形品"><i class="radio__button"></i><span>アクリルドーム（半球）　フリーブロー成形品</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルドーム（半球）　セミオーダー"><i class="radio__button"></i><span>アクリルドーム（半球）　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル球　クリアー	"><i class="radio__button"></i><span>アクリル球　クリアー	</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル大型円柱"><i class="radio__button"></i><span>アクリル大型円柱</span>
                                </label>
                              </div>
                            </div>

                            <p class="c-heading--sm-blockcategory u-margin--top-32">実験装置</p>
                            <div class="l-article--column-2-vertical p-questionnaire">
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルフランジ　セミオーダー"><i class="radio__button"></i><span>アクリルフランジ　セミオーダー</span>
                                </label>
                              </div>
                            </div>

                            <p class="c-heading--sm-blockcategory u-margin--top-32">ポリカーボネート板</p>
                            <div class="l-article--column-2-vertical p-questionnaire">
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ポリカーボネート板"><i class="radio__button"></i><span>ポリカーボネート板</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アイリスポリカシート 規格サイズ"><i class="radio__button"></i><span>アイリスポリカシート 規格サイズ</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ポリカーボネート板加工　セミオーダー"><i class="radio__button"></i><span>ポリカーボネート板加工　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ポリカーボネート円板 セミオーダー"><i class="radio__button"></i><span>ポリカーボネート円板 セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="階段手すりパネル　セミオーダー"><i class="radio__button"></i><span>階段手すりパネル　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="カーポート屋根修理材（ポリカーボネート）・バルコニー・テラス"><i class="radio__button"></i><span>カーポート屋根修理材（ポリカーボネート）・バルコニー・テラス</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ツインカーボ・ポリカツイン（中空ポリカ板）"><i class="radio__button"></i><span>ツインカーボ・ポリカツイン（中空ポリカ板）</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ポリカーボネート型模様板"><i class="radio__button"></i><span>ポリカーボネート型模様板</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ポリカーボネート板端材（格安小片板）セット"><i class="radio__button"></i><span>ポリカーボネート板端材（格安小片板）セット</span>
                                </label>
                              </div>
                            </div>

                            <p class="c-heading--sm-blockcategory u-margin--top-32">その他の樹脂</p>
                            <div class="l-article--column-2-vertical p-questionnaire">
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ポリスチレン型板"><i class="radio__button"></i><span>ポリスチレン型板</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="塩ビパンチング（穴開き）板"><i class="radio__button"></i><span>塩ビパンチング（穴開き）板</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ワーロンパワーマット　セミオーダー"><i class="radio__button"></i><span>ワーロンパワーマット　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="PET板加工 セミオーダー"><i class="radio__button"></i><span>PET板加工 セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="PET板 Lの字曲げ加工 セミオーダー"><i class="radio__button"></i><span>PET板 Lの字曲げ加工 セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="PET板 コの字曲げ加工 セミオーダー"><i class="radio__button"></i><span>PET板 コの字曲げ加工 セミオーダー</span>
                                </label>
                              </div>
                            </div>

                            <p class="c-heading--sm-blockcategory u-margin--top-32">ポスターフレーム</p>
                            <div class="l-article--column-2-vertical p-questionnaire">
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ポスターフレーム　スタンダード"><i class="radio__button"></i><span>ポスターフレーム　スタンダード</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ポスターフレーム　フロートタイプ"><i class="radio__button"></i><span>ポスターフレーム　フロートタイプ</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ポスターフレーム　フロート・ピクチャーレール用"><i class="radio__button"></i><span>ポスターフレーム　フロート・ピクチャーレール用</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ポスターフレーム　プロスタイル"><i class="radio__button"></i><span>ポスターフレーム　プロスタイル</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ポスターフレーム　屋外用・簡易防水"><i class="radio__button"></i><span>ポスターフレーム　屋外用・簡易防水</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ポスターフレーム スタンダード スタンド専用"><i class="radio__button"></i><span>ポスターフレーム スタンダード スタンド専用</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="大型ポスターフレームスタンドタイプ"><i class="radio__button"></i><span>大型ポスターフレームスタンドタイプ</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="透明イーゼル"><i class="radio__button"></i><span>透明イーゼル</span>
                                </label>
                              </div>
                            </div>

                            <p class="c-heading--sm-blockcategory u-margin--top-32">フォトフレーム</p>
                            <div class="l-article--column-2-vertical p-questionnaire">
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="フォトフレーム　スタンダード"><i class="radio__button"></i><span>フォトフレーム　スタンダード</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="フォトフレーム　フロートタイプ"><i class="radio__button"></i><span>フォトフレーム　フロートタイプ</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="フォトフレーム　テーパードタイプ"><i class="radio__button"></i><span>フォトフレーム　テーパードタイプ</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="マグネットフォトフレーム"><i class="radio__button"></i><span>マグネットフォトフレーム</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="フォトフレーム　プロスタイル　マグネットタイプ"><i class="radio__button"></i><span>フォトフレーム　プロスタイル　マグネットタイプ</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="フォトフレーム　テーブルトップ"><i class="radio__button"></i><span>フォトフレーム　テーブルトップ</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="フォトフレーム　ソリッドタイプ"><i class="radio__button"></i><span>フォトフレーム　ソリッドタイプ</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="フォトフレーム　チェキ専用"><i class="radio__button"></i><span>フォトフレーム　チェキ専用</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="L判フォトフレーム カラーズフィット"><i class="radio__button"></i><span>L判フォトフレーム カラーズフィット</span>
                                </label>
                              </div>
                            </div>

                            <p class="c-heading--sm-blockcategory u-margin--top-32">専用額</p>
                            <div class="l-article--column-2-vertical p-questionnaire">
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ユニフォーム額"><i class="radio__button"></i><span>ユニフォーム額</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="色紙額"><i class="radio__button"></i><span>色紙額</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="小色紙額"><i class="radio__button"></i><span>小色紙額</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ミニ色紙額"><i class="radio__button"></i><span>ミニ色紙額</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ジグソーパズル額　セミオーダー"><i class="radio__button"></i><span>ジグソーパズル額　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="厚物フレーム　セミオーダー"><i class="radio__button"></i><span>厚物フレーム　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="LPレコード額"><i class="radio__button"></i><span>LPレコード額</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="LPレコード盤フレーム"><i class="radio__button"></i><span>LPレコード盤フレーム</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="レコード額シングルサイズ"><i class="radio__button"></i><span>レコード額シングルサイズ</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="CDフレーム"><i class="radio__button"></i><span>CDフレーム</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="賞状額　セミオーダー"><i class="radio__button"></i><span>賞状額　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="手ぬぐい額"><i class="radio__button"></i><span>手ぬぐい額</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="コレクションフレーム　セミオーダー"><i class="radio__button"></i><span>コレクションフレーム　セミオーダー</span>
                                </label>
                              </div>
                            </div>

                            <p class="c-heading--sm-blockcategory u-margin--top-32">立体額・キャンバス額</p>
                            <div class="l-article--column-2-vertical p-questionnaire">
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル立体額"><i class="radio__button"></i><span>アクリル立体額</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル立体額　ボックスタイプ"><i class="radio__button"></i><span>アクリル立体額　ボックスタイプ</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="油彩キャンバス立体額"><i class="radio__button"></i><span>油彩キャンバス立体額</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="油彩キャンバス立体額　かぶせ　セミオーダー"><i class="radio__button"></i><span>油彩キャンバス立体額　かぶせ　セミオーダー</span>
                                </label>
                              </div>
                            </div>
                            <p class="c-heading--sm-blockcategory u-margin--top-32">店舗用什器</p>
                            <div class="l-article--column-2-vertical p-questionnaire">
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="カタログスタンド"><i class="radio__button"></i><span>カタログスタンド</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="カタログケース屋外用　ステン蝶番タイプ"><i class="radio__button"></i><span>カタログケース屋外用　ステン蝶番タイプ</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="説教台"><i class="radio__button"></i><span>説教台</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="貴名受（名刺入れ）"><i class="radio__button"></i><span>貴名受（名刺入れ）</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルフードカバー セミオーダー"><i class="radio__button"></i><span>アクリルフードカバー セミオーダー</span>
                                </label>
                              </div>
                            </div>

                            <p class="c-heading--sm-blockcategory u-margin--top-32">アクリルケース</p>
                            <div class="l-article--column-2-vertical p-questionnaire">
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="箱型アクリルケース"><i class="radio__button"></i><span>箱型アクリルケース　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="円柱アクリルケース　セミオーダー"><i class="radio__button"></i><span>円柱アクリルケース　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="サッカーボールケース"><i class="radio__button"></i><span>サッカーボールケース</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="鍵付きアクリルショーケース　セミオーダー"><i class="radio__button"></i><span>鍵付きアクリルショーケース　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="鉄道模型Nゲージ用アクリルケース"><i class="radio__button"></i><span>鉄道模型Nゲージ用アクリルケース</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ミニカー専用アクリルコレクションケース"><i class="radio__button"></i><span>ミニカー専用アクリルコレクションケース</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="けんどん式アクリルケース"><i class="radio__button"></i><span>けんどん式アクリルケース</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ガルウイングケース"><i class="radio__button"></i><span>ガルウイングケース</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル オープンボックス　セミオーダー"><i class="radio__button"></i><span>アクリル オープンボックス　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルひな壇ディスプレイ台　セミオーダー"><i class="radio__button"></i><span>アクリルひな壇ディスプレイ台　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル四面体ケース セミオーダー"><i class="radio__button"></i><span>アクリル四面体ケース セミオーダー</span>
                                </label>
                              </div>
                            </div>

                            <p class="c-heading--sm-blockcategory u-margin--top-32">アクリル家具</p>
                            <div class="l-article--column-2-vertical p-questionnaire">
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリル壁面棚"><i class="radio__button"></i><span>アクリル壁面棚</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="メタルラック棚板シート"><i class="radio__button"></i><span>メタルラック棚板シート</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルラック"><i class="radio__button"></i><span>アクリルラック</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ディスプレイラック　セミオーダー"><i class="radio__button"></i><span>ディスプレイラック　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ワゴン"><i class="radio__button"></i><span>ワゴン</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルキャビネット"><i class="radio__button"></i><span>アクリルキャビネット</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アレンジシェルフ"><i class="radio__button"></i><span>アレンジシェルフ</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="アクリルテーブル"><i class="radio__button"></i><span>アクリルテーブル</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="コレクションテーブル"><i class="radio__button"></i><span>コレクションテーブル</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="液晶テレビ保護パネル　ベルトタイプ　セミオーダー"><i class="radio__button"></i><span>液晶テレビ保護パネル　ベルトタイプ　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="液晶テレビ保護パネルＬ型　セミオーダー"><i class="radio__button"></i><span>液晶テレビ保護パネルＬ型　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="テーブルマット　セミオーダー"><i class="radio__button"></i><span>テーブルマット　セミオーダー</span>
                                </label>
                              </div>
                            </div>

                            <p class="c-heading--sm-blockcategory u-margin--top-32">インテリア・雑貨</p>
                            <div class="l-article--column-2-vertical p-questionnaire">
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ウェルカムボード　セミオーダー"><i class="radio__button"></i><span>ウェルカムボード　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="レコードプレーヤーカバー　セミオーダー"><i class="radio__button"></i><span>レコードプレーヤーカバー　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="キーボードラック"><i class="radio__button"></i><span>キーボードラック</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="抽選箱"><i class="radio__button"></i><span>抽選箱</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="フォトフレームクロック"><i class="radio__button"></i><span>フォトフレームクロック</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ビスマスキューブ（アクリルキューブ）"><i class="radio__button"></i><span>ビスマスキューブ（アクリルキューブ）</span>
                                </label>
                              </div>
                            </div>

                            <p class="c-heading--sm-blockcategory u-margin--top-32">ペット用品</p>
                            <div class="l-article--column-2-vertical p-questionnaire">
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="犬トイレ"><i class="radio__button"></i><span>犬トイレ</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="犬トイレ　コーナータイプ"><i class="radio__button"></i><span>犬トイレ　コーナータイプ</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="バードケージ（鳥かご）ケース"><i class="radio__button"></i><span>バードケージ（鳥かご）ケース</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="バードケージ（鳥かご）ケース　扉付き"><i class="radio__button"></i><span>バードケージ（鳥かご）ケース　扉付き</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="水槽ふた用ポリカーボネート板加工　セミオーダー"><i class="radio__button"></i><span>水槽ふた用ポリカーボネート板加工　セミオーダー</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="爬虫類ケージ（水槽）"><i class="radio__button"></i><span>爬虫類ケージ（水槽）</span>
                                </label>
                              </div>
                              <div class="article__content questionnaire__content">
                                <label class="form__radio">
                                  <input type="radio" name="review[keyword1]" value="ハムスターケース"><i class="radio__button"></i><span>ハムスターケース</span>
                                </label>
                              </div>
                            </div>

                            <div class="list__content  u-margin--top-30">
                              <ul class="faq__faqList c-faqList">
                                <li class="faqList__item js-accordion">
                                  <a class="item__question js-accordion__trigger">
                                    <i class="question__icon c-icon--toggle"></i>
                                    <p class="question__title c-heading--sm-category">リビングプラス</p>
                                  </a>
                                  <div class="js-accordion__content">
                                    <div class="l-article--column-2-vertical p-questionnaire">
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="ドロップレット・インセンスホルダー"><i class="radio__button"></i><span>ドロップレット・インセンスホルダー</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="アクリル　ラウンド　ボウル"><i class="radio__button"></i><span>アクリル　ラウンド　ボウル</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="カトリ・スタンド"><i class="radio__button"></i><span>カトリ・スタンド</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="アクリル　ペントレイ"><i class="radio__button"></i><span>アクリル　ペントレイ</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="キギ"><i class="radio__button"></i><span>キギ</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="ブロックベース"><i class="radio__button"></i><span>ブロックベース</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="キュービック・サークル"><i class="radio__button"></i><span>キュービック・サークル</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="カップ フロート"><i class="radio__button"></i><span>カップ フロート</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="ドロップレット"><i class="radio__button"></i><span>ドロップレット</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="マガジンハンガー"><i class="radio__button"></i><span>マガジンハンガー</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="アクリ・ラック"><i class="radio__button"></i><span>アクリ・ラック</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="プライベート　アクアリウム"><i class="radio__button"></i><span>プライベート　アクアリウム</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="ミズ・アカリ"><i class="radio__button"></i><span>ミズ・アカリ</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="プラトニックライトシリーズ"><i class="radio__button"></i><span>プラトニックライトシリーズ</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="フラグメント"><i class="radio__button"></i><span>フラグメント</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="ベース　ライトシリーズ"><i class="radio__button"></i><span>ベース　ライトシリーズ</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="コンポジット　ベース　シリーズ"><i class="radio__button"></i><span>コンポジット　ベース　シリーズ</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="イージースツール　コンプリート"><i class="radio__button"></i><span>イージースツール　コンプリート</span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div class="list__content  u-margin--top-30">
                              <ul class="faq__faqList c-faqList">
                                <li class="faqList__item js-accordion">
                                  <a class="item__question js-accordion__trigger">
                                    <i class="question__icon c-icon--toggle"></i>
                                    <p class="question__title c-heading--sm-category">工具・用品</p>
                                  </a>
                                  <div class="js-accordion__content">
                                    <div class="l-article--column-2-vertical p-questionnaire">
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="オルファ　アクリルカッター"><i class="radio__button"></i><span>オルファ　アクリルカッター</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="オルファ　スクレーパーM型"><i class="radio__button"></i><span>オルファ　スクレーパーM型</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="現場屋　アクリル専用鋸"><i class="radio__button"></i><span>現場屋　アクリル専用鋸</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="エンジニア　糸ノコ（自在型）"><i class="radio__button"></i><span>エンジニア　糸ノコ（自在型）</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="螺旋糸ノコ替刃"><i class="radio__button"></i><span>螺旋糸ノコ替刃</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="アクリサンデー　アクリル専用ビット"><i class="radio__button"></i><span>アクリサンデー　アクリル専用ビット</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="ヤナセ　ビーコング（電動ペンシル型ルーター）"><i class="radio__button"></i><span>ヤナセ　ビーコング（電動ペンシル型ルーター）</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="アクリサンデー　接着剤"><i class="radio__button"></i><span>アクリサンデー　接着剤</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="アクリル接着剤用　注射器"><i class="radio__button"></i><span>アクリル接着剤用　注射器</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="シリコンシール剤"><i class="radio__button"></i><span>シリコンシール剤</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="セメダイン　スーパーXゴールド"><i class="radio__button"></i><span>セメダイン　スーパーXゴールド</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="VHB　超強力透明両面テープ"><i class="radio__button"></i><span>VHB　超強力透明両面テープ</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="ニチバン　ナイスタック両面テープ（弱粘着タイプ）"><i class="radio__button"></i><span>ニチバン　ナイスタック両面テープ（弱粘着タイプ）</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="ミラーマット（両面テープ）"><i class="radio__button"></i><span>ミラーマット（両面テープ）</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="アクリサンデー　ヒーターキット"><i class="radio__button"></i><span>アクリサンデー　ヒーターキット</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="アクリサンデー　ヒートコントローラー"><i class="radio__button"></i><span>アクリサンデー　ヒートコントローラー</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="ニトフロン粘着テープ"><i class="radio__button"></i><span>ニトフロン粘着テープ</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="アクリサンデー　静電気防止ポリケア"><i class="radio__button"></i><span>アクリサンデー　静電気防止ポリケア</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="アクリサンデー　ウェルシーA"><i class="radio__button"></i><span>アクリサンデー　ウェルシーA</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="静電防止手袋"><i class="radio__button"></i><span>静電防止手袋</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="プレクサス"><i class="radio__button"></i><span>プレクサス</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="QUIXX（クイックス）"><i class="radio__button"></i><span>QUIXX（クイックス）</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="アクリサンデー　研磨剤"><i class="radio__button"></i><span>アクリサンデー　研磨剤</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="スポンジ研磨材"><i class="radio__button"></i><span>スポンジ研磨材</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="アクリサンデー　ミラー調スプレー"><i class="radio__button"></i><span>アクリサンデー　ミラー調スプレー</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="プレスタ（クロスセーム付）"><i class="radio__button"></i><span>プレスタ（クロスセーム付）</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="マイクロファイバー"><i class="radio__button"></i><span>マイクロファイバー</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="IROMIZU　スターターキット"><i class="radio__button"></i><span>IROMIZU　スターターキット</span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>


                            <div class="list__content  u-margin--top-30">
                              <ul class="faq__faqList c-faqList">
                                <li class="faqList__item js-accordion">
                                  <a class="item__question js-accordion__trigger">
                                    <i class="question__icon c-icon--toggle"></i>
                                    <p class="question__title c-heading--sm-category">部品・装飾品</p>
                                  </a>
                                  <div class="js-accordion__content">
                                    <div class="l-article--column-2-vertical p-questionnaire">
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="バンポン"><i class="radio__button"></i><span>バンポン</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="オリジナル透明蝶番"><i class="radio__button"></i><span>オリジナル透明蝶番</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="ステンレス蝶番"><i class="radio__button"></i><span>ステンレス蝶番</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="ガラス蝶番"><i class="radio__button"></i><span>ガラス蝶番</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="マグネット＆アクリルツマミ"><i class="radio__button"></i><span>マグネット＆アクリルツマミ</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="アクリルツマミ"><i class="radio__button"></i><span>アクリルツマミ</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="アクリルツマミ　ねじ止め"><i class="radio__button"></i><span>アクリルツマミ　ねじ止め</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="アクリル補強棒（細棒）セット"><i class="radio__button"></i><span>アクリル補強棒（細棒）セット</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="ビーニングサッシ"><i class="radio__button"></i><span>ビーニングサッシ</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="アクリサンデー　ポリカねじ"><i class="radio__button"></i><span>アクリサンデー　ポリカねじ</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="光ファイバーエスカ"><i class="radio__button"></i><span>光ファイバーエスカ</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="どこでもミラー（ポリカーボネートミラー・粘着タイプ）"><i class="radio__button"></i><span>どこでもミラー（ポリカーボネートミラー・粘着タイプ）</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="アクリサンデー　アクリアイス"><i class="radio__button"></i><span>アクリサンデー　アクリアイス</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="フォトスタンドDIY金具セット"><i class="radio__button"></i><span>フォトスタンドDIY金具セット</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="ポスターフレームDIY金具セット"><i class="radio__button"></i><span>ポスターフレームDIY金具セット</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="ピクチャーレール用ワイヤーフック（ピクチャーハンガー）"><i class="radio__button"></i><span>ピクチャーレール用ワイヤーフック（ピクチャーハンガー）</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="パーテーション専用アクリルスタンド　3mm/5mm"><i class="radio__button"></i><span>パーテーション専用アクリルスタンド　3mm/5mm</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="アクリルスタンドセット"><i class="radio__button"></i><span>アクリルスタンドセット</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="Scotch（スコッチ） はってはがせるテープ"><i class="radio__button"></i><span>Scotch（スコッチ） はってはがせるテープ</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="フォトフレーム専用包装箱"><i class="radio__button"></i><span>フォトフレーム専用包装箱</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="ツインカーボ用補助部材　ツインカバー"><i class="radio__button"></i><span>ツインカーボ用補助部材　ツインカバー</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="ツインカーボ用補助部材　ツインジョイナー"><i class="radio__button"></i><span>ツインカーボ用補助部材　ツインジョイナー</span>
                                        </label>
                                      </div>
                                      <div class="article__content questionnaire__content">
                                        <label class="form__radio">
                                          <input type="radio" name="review[keyword1]" value="IROMIZU（イロミズ） 装飾用透明カラーシート"><i class="radio__button"></i><span>IROMIZU（イロミズ） 装飾用透明カラーシート</span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th class="c-text--md-left is-required">ニックネーム（匿名、イニシャル等）</th>
                          <td class="c-text--md-left">
                            <div class="u-display--flex-center">
                              <span class="form__input">
                                <input type="text" name="review[name]" placeholder="記入例： ・神奈川県 R.S ・やまちゃん" value="{{ old('review.name') }}" required>
                                <span class="form__effect" style="color:red;">
                                  @if ($errors->has('review.name'))
                                    {!! implode('<br>', $errors->get('review.name')) !!}
                                  @endif
                                </span>
                              </span>
                              <span class="u-margin--left-8 u-width--5">様</span>
                            </div>
                            <p class="table__note c-text--sm-note">本名・社名はご遠慮下さい</p>
                        </tr>
                        <tr>
                          <th class="c-text--md-left">タイトル</th>
                          <td class="c-text--md-left">
                            <div class="u-display--flex-center">
                              <span class="form__input">
                                <input type="text" name="review[title]" value="{{ old('review.title') }}" required>
                                <span class="form__effect" style="color:red;">
                                  @if ($errors->has('review.title'))
                                    {!! implode('<br>', $errors->get('review.title')) !!}
                                  @endif
                                </span>
                              </span>
                            </div>
                        </tr>
                        <tr>
                          <th class="c-text--md-left is-required">ご感想内容</th>
                          <td class="c-text--md-left">
                            <span class="form__textarea">
                              <textarea name="review[content]" placeholder="商品をご使用頂いた感想やお気づきの点をお書き下さい。" required>{{ old('review.content') }}</textarea>
                              <span class="form__effect" style="color:red;">
                                @if ($errors->has('review.content'))
                                  {!! implode('<br>', $errors->get('review.content')) !!}
                                @endif
                              </span>
                            </span>
                            <ul class="table__note c-list--sm-note">
                              <li class="list__item">個別のご質問・ご要望・ご指摘にはお答えできかねます。</li>
                              <li class="list__item">ニックネーム・ご感想は、当ホームページにてご紹介させていただきますので、本名やメールアドレスなど個人情報の記載はご遠慮ください。</li>
                              <li class="list__item">弊社の回答やご対応が必要なご質問・ご要望・クレームは、<a href="/support/contact/">お問い合わせフォーム</a>をご利用ください。</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <th class="c-text--md-left is-required">評価を★ の数で評価下さい</th>
                          <td class="c-text--md-left">
                            <span class="form__select u-width--100">
                              <select name="review[star]" required>
                                @php($value = old('review.star'))
                                <option value="">選択して下さい</option>
                                <option value="5" @if ((string) $value === "5") selected @endif >★ ★ ★ ★ ★  非常に良い</option>
                                <option value="4" @if ((string) $value === "4") selected @endif >★ ★ ★ ★  良い</option>
                                <option value="3" @if ((string) $value === "3") selected @endif >★ ★ ★  普通</option>
                                <option value="2" @if ((string) $value === "2") selected @endif >★ ★  少し悪い</option>
                                <option value="1" @if ((string) $value === "1") selected @endif >★  悪い</option>
                              </select>
                              <span class="form__effect" style="color:red;">
                                @if ($errors->has('review.star'))
                                  {!! implode('<br>', $errors->get('review.star')) !!}
                                @endif
                              </span>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th class="c-text--md-left">商品の画像</th>
                          <td class="c-text--md-left">
                            <div class="u-display--flex-center">
                              <input type="file" name="file" class="form-control" accept="image/jpeg, image/png">
                            </div>
                            <ul class="table__note c-list--sm-note">
                              <li class="list__item">添付画像は「jpg ・ png」の形式（拡張子）でお願いいたします。</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <th class="c-text--md-left is-required">SNSでの紹介</th>
                          <td class="c-text--md-left">
                            <span class="form__select u-width--100">
                              <select name="review[sns]" required>
                                @php($value = old('review.sns'))
                                <option value="">選択して下さい</option>
                                <option value="OK" @if ((string) $value === "OK") selected @endif >OK</option>
                                <option value="NG" @if ((string) $value === "NG") selected @endif >NG</option>
                              </select>
                            </span>
                            <span class="form__effect" style="color:red;">
                              @if ($errors->has('review.sns'))
                                {!! implode('<br>', $errors->get('review.sns')) !!}
                              @endif
                            </span>
                            <ul class="table__note c-list--sm-note">
                              <li class="list__item">ご投稿いただいたお写真をInstagramやX(旧Twitter)で紹介してもよろしいでしょうか。<br>(OKをご選択いただいてもSNSでの紹介ができない場合がございます。何卒ご了承ください。)</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </section>

                  <div class="form__action justify-center">
                    <button class="c-button--xl-primary" type="button" data-review-toggle="comfirm">確認画面へ</button>
                  </div>
                </form>
          </div>
          <!-- /入力画面 -->


          <!-- 確認画面 -->
          <div class="review-confirm hide">
              <nav class="c-pankuzu--scroll">
                <ul class="pankuzu__list">
                  <li><a href="/">HOME</a></li>
                  <li>ご購入後のアンケート</li>
                </ul>
              </nav>
              <h1 class="main__title c-heading--xl">入力内容の確認</h1>

              <h2 class="review-confirm-heading">アンケート内容</h2>
              <section class="c-section">

                <table class="c-table--border-cart">
                  <tbody>
                    <tr>
                      <th class="c-text--md-left">ご選択いただいた商品</th>
                      <td class="c-text--md-left"><span data-review-confirm="review[keyword1]"></span></td>
                    </tr>
                    <tr>
                      <th class="c-text--md-left">ニックネーム（匿名、イニシャル等）</th>
                      <td class="c-text--md-left"><span data-review-confirm="review[name]"></span></td>
                    </tr>
                    <tr>
                      <th class="c-text--md-left">タイトル</th>
                      <td class="c-text--md-left"><span data-review-confirm="review[title]"></span></td>
                    </tr>
                    <tr>
                      <th class="c-text--md-left">ご感想内容</th>
                      <td class="c-text--md-left"><span data-review-confirm="review[content]"></span></td>
                    </tr>
                    <tr>
                      <th class="c-text--md-left">ご購入商品の評価</th>
                      <td class="c-text--md-left"><span data-review-confirm="review[star]"></span></td>
                    </tr>
                    <tr>
                      <th class="c-text--md-left">商品の画像</th>
                      <td class="c-text--md-left"><span data-review-confirm="file"></span></td>
                    </tr>
                    <tr>
                      <th class="c-text--md-left">SNSでのご紹介</th>
                      <td class="c-text--md-left"><span data-review-confirm="review[sns]"></span></td>
                    </tr>
                  </tbody>
                </table>

              </section>

              <div class="l-form">
                <p class="c-text-center">上記内容で、お間違いがなければ「送信する」を押してください</p>
                <div class="form__action">
                  <button class="c-button--xl-gray" type="button" data-review-toggle="form">入力内容を修正する</button>
                  <button class="c-button--xl-primary" type="button" data-review-toggle="send">送信する</button>
                </div>
              </div>

          </div>
          <!-- /確認画面 -->



          </div>
        </main>
        @include('common.footer')
      </div>
    </div>
    @include('common.body_end')
  </body>
</html>
