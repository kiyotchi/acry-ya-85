@extends('layouts.base')
@section('title', '補修部品')
@section('headCss')
<link rel="stylesheet" href="/assets/stylesheets/projects/product-parts.css">
@endsection
@section('bodyId', 'p-product-parts')
@section('headEnd')
@endsection
@section('bodyEnd')
@endsection
@section('content')

    <div class="main__sub--white">
        <nav class="c-pankuzu--scroll">
          @include('common.notice')
            <ul class="pankuzu__list">
                <li><a href="{{ url('/') }}">HOME</a></li>
                <li>補修部品</li>
            </ul>
        </nav>
        <h1 class="main__title c-heading--xl">補修部品</h1>
          @foreach($category_ids as $category_id)
            <section class="p-category c-section">
              <div><h2 class="overview__title c-heading--sm">{{$category_id->product_category_name}}</h2></div>
              <div class="c-cardGroup--2-vertical">
                @foreach($repair_part_groups as $groups)
                  @if( $category_id->product_category_id == $groups->product_category_id )
                    <div class="c-card--category">
                        <div class="card__body">
                            <h3 class="card__title c-heading--sm-primary"><a href="{{ route('parts.detail', ['id'=>$groups->repair_part_groups_id]) }}" class="c-link"><i class="link__icon--before c-icon--triangle-r"></i>{{ $groups->repair_part_group_name }}</a></h3>
                        </div>
                    </div>
                  @endif
                @endforeach
              </div>
            </section>
          @endforeach
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
@endsection
