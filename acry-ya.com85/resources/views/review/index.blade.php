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
    <title>ご購入後｜アクリ屋ドットコム</title>
    <meta property="og:title" content="ご購入後｜アクリ屋ドットコム">
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
    <link rel="stylesheet" href="/assets/rating/css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
    <script src="/assets/javascripts/common.js"></script>
    <script src="/assets/javascripts/function.js"></script>
    <script src="/assets/javascripts/plugins/cookie.js"></script>
    <script src="/assets/javascripts/plugins/slick-1.6.0.min.js"></script>
    <script src="/assets/javascripts/plugins/slick-1.6.0.setting.js"></script>
  </head>
  <body id="p-voice">
    <div id="wrapper" class="l-column js-menu">
      @include('common.header')
      @include('common.sidemenu')
      <div class="column__right">
        <main class="l-main">
          <div class="main__sub--white">

            <!--初期選択処理 -->
            <?php
            $request = app('request')->input('s');
            ?>
            <script>
            var reviewPageRequest = {!! json_encode($request) !!};
            var sortRequest = "{!! app('request')->input('sort') !!}";
            var dirRequest = "{!! app('request')->input('dir') !!}";
            var photoonlyRequest = "{!! app('request')->input('photoonly') !!}";
            </script>
            <!--/初期選択処理 -->


            <!-- パンくず -->
            <nav class="c-pankuzu--scroll">
              <ul class="pankuzu__list">
                <li><a href="/">HOME</a></li>
                <li><a href="/voices/">お客様の声</a></li>
                <?php /*
                @if( isset($request['keyword'] ) && $request['keyword'] != '')
                <li>{{$request['keyword']}}</li>
                @else
                  <li>ご購入後</li>
                @endif
                */
                ?>
                <li>ご購入後</li>
              </ul>
            </nav>
            <!--/パンくず -->


            @if( isset($request['keyword'] ) && $request['keyword'] != '')
              <h1 class="main__title c-heading--xl review-h1">
                ご購入後
              </h1>
              <h2 class="review-h2">
                {{$request['keyword']}}
              </h2>
            @else
              <h1 class="main__title c-heading--xl">ご購入後</h1>
            @endif



            <div class="main__lead">
                <section class="p-voice c-section">
                    <p>最新のお客様の声（製品ご使用後のご感想）です。<br>弊社は、お客様より頂きましたご声援・ご指摘をもとに、今後のサービス向上・製品開発・ホームページ改善などを行ってまいります。</p>
                    <!-- 星平均 -->
                    <div class="customer-review-header">
                        <?php /*
                        <div class="review-rating review-rating<?= $num ?>" data-star="{{$pageInfoList" data-revire-val="star">
                          <div class="detail-rating-avarage-star"></div>
                        </div>
                        <div class="detail-rating" data-avarage="">
                          <div class="detail-rating-avarage-star"></div>
                        </div>
                        */?>

                        <!-- 星平均 -->
                        <div class="star-avarage">
                          <div class="detail-rating" data-avarage="<?= $pageInfoList['avarage'] ?>">
                            <div class="detail-rating-avarage-star"></div>
                          </div>
                          <div class="avarage">星5つ中の<?= $pageInfoList['avarage'] ?></div>
                          <div class="count"><?= number_format( $pageInfoList['allCount'] ) ?>件</div>
                        </div>
                        <!-- /星平均 -->

                        <!-- 星別合計 -->
                        <div class="star-list">
                          <table class="star-table">
                            <tbody>
                              @php
                              $starCnt = 5;
                              @endphp
                              @foreach($pageInfoList['stars'] as $star => $point )
                                <tr class="list-item">
                                  <td>
                                    <div
                                      class="list-rating list-rating{{$starCnt}} count"
                                      data-star="{{$starCnt}}"
                                      data-target-point="{{$starCnt}}"
                                    >
                                      <div class="detail-rating-avarage-star"></div>
                                    </div>
                                  </td>
                                  <td>
                                    <span class="count" data-target-point="{{$starCnt}}">(<?= number_format($point) ?>)</span>
                                  </td>
                                  <td>
                                    <span
                                      class="star-percentage star-percentage-{{$starCnt}}"
                                      data-progress-all="{{$pageInfoList['allCount']}}"
                                      data-progress-this="{{$point}}"
                                      data-progress-star="{{$starCnt}}"
                                    ></span>
                                  </td>
                                </tr>
                              @php
                              $starCnt --;
                              @endphp
                              @endforeach
                            </tbody>
                          </table>
                        </div>
                        <!-- /星別合計 -->

                    </div>
                    <!-- /星平均 -->


                    <!-- レビュー並び替え -->
                    <div class="review-sort">
                      <p class="review-sort-heading">並び替え</p>
                      <div class="review-sort-inner">
                        <form class="">
                          <select class="review-sort-select" name="">
                            <option value="新着順">新着順</option>
                            <option value="古い順">古い順</option>
                            <option value="評価が高い順">評価が高い順</option>
                            <option value="評価が低い順">評価が低い順</option>
                            <option value="写真付">写真付</option>
                          </select>
                        </form>
                      </div>
                    </div>
                    <!-- /レビュー並び替え -->


                  <!-- 埋め込み版レビュー -->
                  <section class="p-voice c-section">
                        <?php
                            $weekday = ['日', '月', '火', '水', '木', '金', '土', '日'];
                            $stars = [
                                '0',
                                '1',
                                '2',
                                '3',
                                '4',
                                '5',
                            ];
                        ?>



                        <!-- レビューリスト -->

                        <div class="customer-review-list">
                          @foreach ($reviews ?? [] as $num => $review)
                            <div class="customer-review-item review-page">
                              <img class="user-icon" src="/assets/images/icon/icon_user.svg">

                              <?php
                                  $w = date('w', strtotime(data_get($review, 'created_at')));
                                  $wStr = data_get($weekday, $w, '-');
                              ?>
                              <p class="review-date">{{ date("Y年m月d日({$wStr})", strtotime(data_get($review, 'created_at'))) }}</p>
                              <div class="item-row review-star">
                                <span class="text">製品評価</span>
                                <div class="review-rating review-rating<?= $num ?>" data-star="{{ data_get($stars, data_get($review, 'star'), '0') }}" data-revire-val="star">
                                  <div class="detail-rating-avarage-star"></div>
                                </div>
                              </div>
                              <div class="item-row">
                                <p class="review-name" data-revire-val="name">{{ data_get($review, 'name') }} 様</p>
                                <p class="review-productname" data-revire-val="productname">{{$review->keyword1}}</p>
                              </div>
                              <p class="review-title" data-revire-val="title">{{ data_get($review, 'title') }}</p>
                              <div class="review-content-full" data-revire-val="content">
                                {!! nl2br(e(data_get($review, 'content'))) !!}
                              </div>
                              <a href="javascript:void(0);" class="fold-btn">▼続きを読む</a>
                              <div class="review-img-area <?php if(empty(data_get($review, 'file'))): ?>rating-hidden<?php endif; ?>">
                                <img
                                  class="js-modal--image review-img"
                                  @if( data_get($review, 'file') != '' )
                                    src="/storage/reviewimages{{env('FRONT_REVIEW_IMAGES_DIR')}}{{data_get($review, 'file')}}"
                                  @else
                                    src=""
                                  @endif
                                  data-revire-val="image"
                                >
                              </div>
                              
                              <div class="review-good" data-review-count="<?= $reviews_array[$num]->id ?>">
                                  <p
                                    data-good-count-area="<?= $reviews_array[$num]->id ?>"
                                    class="<?php if( $reviews_array[$num]->good_count == 0): ?>rating-hidden<?php endif; ?>"
                                  >
                                    <span
                                      class="review-good-count c-text-weightBold"
                                      data-good-count="<?= $reviews_array[$num]->id ?>"
                                    >
                                      <?= $reviews_array[$num]->good_count ?>
                                    </span>人のお客様が参考になったと回答
                                  </p>
                                  <p>
                                      レビューは参考になりましたか？
                                      <a
                                        href="javascript:void(0)"
                                        data-send-good="<?= $reviews_array[$num]->id ?>"
                                        class="<?php if( $reviews_array[$num]->good === true ): ?>review-good-disabled<?php else: ?>review-good-enable<?php endif; ?>"
                                      >
                                        参考になった
                                      </a>
                                  </p>
                              </div>


                            </div>
                          @endforeach
                        </div>
                        <!-- /レビューリスト -->

                        <?php //レビュー操作系 ?>
                        <script>
                        @if( isset($request['keyword'] ) && $request['keyword'] != '')
                          var customer_feedback_pc_word = "{{ $request['keyword'] }}";
                        @else
                        var customer_feedback_pc_word = "";
                        @endif
                        var isReviewPage = true;
                        </script>
                        <script src="/assets/rating/js/progressbar.js?version=20211030"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.js?vewsion=20211030"></script>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.css?vewsion=20211030">
                        <script src="/assets/rating/js/rating-detail.js?vewsion=20211030"></script>
                        <script src="/assets/rating/js/review-ajax.js?vewsion=20211030"></script>

                  {{ $reviews->appends(request()->input())->onEachSide(2)->links() }}
                  @if( isset($request['keyword'] ) && $request['keyword'] == '')
                  ページ数: <span data-allpagecount="1"><?= $pageInfoList['pageCount'] ?></span>ページ　
                  @endif
                  現在表示の評価:
                  <span data-current-start="1">全て表示</span>
                  @if( isset($request['star'] ) && $request['star'] != '')
                  <a href="javascript:void(0);" class="rating-hidden" data-star-reset="1">[選択解除]</a>　
                  <span data-current-sort="1">新着順</span>　
                  @endif
              </section>

            </div>
          </div>
        </main>
        @include('common.footer')
      </div>
    </div>
    @include('common.body_end')
  </body>
</html>
