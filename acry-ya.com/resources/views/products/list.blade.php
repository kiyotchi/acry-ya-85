@extends('layouts.base')
@section('title', $title)
@section('headCss')
<link rel="stylesheet" href="/assets/stylesheets/projects/product.css">
<link rel="stylesheet" href="/assets/rating/css/style.css">
@endsection
@section('description', $list_summary)
@section('keywords', '')
@section('bodyId', 'p-product')
@section('headEnd')
@endsection
@section('bodyEnd')
@endsection
@section('content')

@section('headStart')
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-56FGQ5X');</script>
<!-- End Google Tag Manager -->
@endsection

@section('bodyStart')
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-56FGQ5X"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
@endsection

<?php
$priceDisplayExclusion = require __DIR__.'/../../../config/price_display_exclusion.php';
?>


    <div class="main__sub--white">
        <nav class="c-pankuzu">
          @include('common.notice')
            <ul class="pankuzu__list">
                <li><a href="{{ url('/') }}">HOME</a></li>
                <li><a href="{{ route('products.list') }}">商品一覧</a></li>
                <li>{{ $title }}</li>
            </ul>
        </nav>
        @if( $title )
        <h1 class="main__title c-heading--xl">{{ $title }}</h1>
        @endif
        @if( $products->total() > 0 )
        <div class="l-list--card">
            @if( !empty($list_summary) )
              <div class="c-heading--sm-primary" id="list_content">{{ $list_summary }}</div>
            @endif
            <div class="c-listNavigation">
                <p class="listNavigation__infomation">{{ $products->total() }}<span>件中</span>{{ $products->firstItem() }}〜{{ $products->lastItem() }}<span>件</span></p>
                {{ $products->appends(request()->input())->onEachSide(2)->links() }}
            </div>
            <div class="list__content c-cardGroup--4">
                @foreach ($products as $item)
                <a href="{{ route('products.detail', ['id'=>$item->product_id]) }}" class="c-card--sm">
                    <div class="card__head">
                        @if( $item->new_flag )
                        <div class="card__new">NEW</div>
                        @endif
                        @if( !empty($item->thumbnailPicture["picture_url"]) )
                            <div class="card__image">
                                <img src="{{ $item->thumbnailPicture["picture_url"] }}">
                            </div>
                        @endif
                    </div>
                    <div class="card__body">
                        <p class="card__category c-text--xs">{{ $item->productTopCategory->product_category_name }}</p>
                        <p class="card__title c-heading--xs">{{ $item->product_name }}</p>

                        <?php
                        $extName = false;
                        foreach( $priceDisplayExclusion as $one ){
                          $one = preg_quote($one, '/');
                          if( preg_match( '/'.$one.'/', $item->product_name ) ){
                            $extName = true;
                            break;
                          }
                        }
                        ?>
                        
                        @if( isset( $item->tax_price ) && $extName === false )
                            <p class="card__price c-price--md">{{ number_format($item->tax_price) }}<span>円（税込）</span></p>
                        @endif
                        
                        @if( !empty($item->productFeatureTag) )
                            <div class="card__tag">
                                @foreach($item->productFeatureTag as $tag)
                                    <p class="c-label--sm-black">{{ $tag->product_feature_tag_name }}</p>
                                @endforeach
                            </div>
                        @endif
                        <?php if(isset($reviewList[$item->customer_feedback_pc_word]) && $reviewList[$item->customer_feedback_pc_word]['allCount'] > 0): ?>
                            <div class="item-rating">
                              <div id="rating-id{{ $item->product_id }}" class="item-rating js-rating" data-avarage="<?= $reviewList[$item->customer_feedback_pc_word]['avarage'] ?>">
                                <div class="detail-rating-avarage-star"></div>
                              </div>
                              <!--
                              <span class="item-rating-avarage">平均: <?= $reviewList[$item->customer_feedback_pc_word]['avarage'] ?></span>
                              -->
                              <span class="item-rating-review"><?= number_format($reviewList[$item->customer_feedback_pc_word]['allCount']) ?>件のレビュー</span>
                            </div>
                        <?php endif; ?>
                    </div>
                </a>
                @endforeach

                <script src="https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.css">
                <script src="/assets/rating/js/rating-list.js"></script>

            </div>
            <div class="c-listNavigation">
                <p class="listNavigation__infomation">{{ $products->total() }}<span>件中</span>{{ $products->firstItem() }}〜{{ $products->lastItem() }}<span>件</span></p>
                {{ $products->appends(request()->input())->onEachSide(2)->links() }}
            </div>
        </div>
        @else
        <div class="l-notFound">
            <h2 class="c-heading--md">{{ $not_found_message }}</h2>
        </div>
        @endif
    </div>


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


    <?php
    $jsonLD = [
        '@context' =>  'http://schema.org',
        '@type' =>  'BreadcrumbList',
        'itemListElement' =>  [
        [
            '@type' =>  'ListItem',
            'position' =>  1,
            'item' =>  [
                 '@id' =>  url('/'),
                 'name' =>  'HOME'
            ]
        ],
        [
             '@type' =>  'ListItem',
             'position' =>  2,
             'item' =>  [
                  '@id' =>  route('products.list'),
                  'name' =>  '商品一覧'
              ]
         ],
         [
               '@type' =>  'ListItem',
               'position' =>  3,
               'item' =>  [
                    '@id' =>  'https://'. $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'],
                    'name' =>  $title
               ]
          ]
      ]
    ];
    ?>
    <script type="application/ld+json">
    <?= json_encode( $jsonLD, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT ) ?>
    </script>


    <?php
    $jsonLD = [
      '@context' =>  'http://schema.org',
      '@type' =>  'Article',
      'mainEntityOfPage' =>  [
          '@type' =>  'WebPage',
          '@id' =>  'https://acry-ya.com/'
      ],
      'headline' =>  $title,
      'alternativeHeadline' =>  $list_summary,
      'description' =>  $list_summary,
      'image' =>  [],
      'datePublished' =>  date('Y-m-dT00:00:00+09:00'), //記事の投稿日
      //'dateModified' =>  '2019-01-07T08:20:00+08:00',  //記事の更新日
      'publisher' =>  [
        '@type' =>  'Organization',
        'name' =>  '株式会社さくら樹脂',
        'logo' =>  [
            '@type' =>  'ImageObject',
            'url' => 'https://www.acry-ya.com/sakuraj/photo/top-img/sakura-header-09.jpg'
        ]
      ],
      'author' =>  [
          '@type' =>  'Person',
          'name' =>  '株式会社さくら樹脂'
      ],
    ];
    foreach( $products as $item ){
      $jsonLD['image'][] = $item->thumbnailPicture["picture_url"];
    }
    ?>
    <script type="application/ld+json">
    <?= json_encode( $jsonLD, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT ) ?>
    </script>
@endsection
