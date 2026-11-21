@extends('layouts.base')
@section('title', $title)
@section('headCss')
<link rel="stylesheet" href="/assets/stylesheets/projects/product-parts.css">
@endsection
@section('bodyId', 'p-product-parts')
@section('headEnd')
    <script src="/assets/javascripts/plugins/slick-1.6.0.min.js"></script>
    <script src="/assets/javascripts/plugins/slick-1.6.0.setting.js"></script>
@endsection
@section('bodyEnd')
<script>
    $(function(){
        $('.quantity').on('change', function(){
            let orderArea = $(this).parents('tr');
            let quantity = orderArea.find('.quantity').val();
            let quantityMax = orderArea.find('.quantity').data('max');
            let unitPrice = orderArea.find('.unit_price').val();
            if( typeof quantity !== 'undefined' ) {
				if( quantity > quantityMax ) quantity = quantityMax;
                orderArea.find('[name=suryo]').val(quantity);
				let total = unitPrice * quantity;
				let total_tax = Math.round(total * {{$tax}});
    			total = String(total).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                orderArea.find('.total_price').html(total + '<span>円（税抜）</span>');
                total_tax  = String(total_tax).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                orderArea.find('.total_price_tax').html(total_tax + '<span>円（税込）</span>');
            }
        });
    });
</script>
@endsection
@section('content')

    <div class="main__sub--white">
        <nav class="c-pankuzu--scroll">
          @include('common.notice')
            <ul class="pankuzu__list">
                <li><a href="{{ url('/') }}">HOME</a></li>
                <li><a href="{{ route('parts.index') }}">補修部品</a></li>
                <li>{{ $repair_part_group->repair_part_group_name }} 補修部品</li>
            </ul>
        </nav>
        <h1 class="main__title c-heading--xl">{{ $repair_part_group->repair_part_group_name }} 補修部品</h1>
        <div class="p-parts c-form">
            <div class="parts__size">
                <p>サイズにより補修部品が異なります。ご注意ください。</p>
                <p>本製品はフレーム本体をお求め頂いた際の補修部品です。 そのため、最大50個までの販売になります。予めご了承願います。</p>
            </div>
            <table class="parts__table c-table--border">
                <thead>
                <tr>
                    <th></th>
                    <th>商品名</th>
                    <th>個数</th>
                    <th>単価</th>
                    <th>合計</th>
                    <th>合計</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                @if( !empty($repair_part_group->repairParts) )
                    @foreach ($repair_part_group->repairParts as $item)
                        <tr>
                            <td class="table__image">
                                @isset($item->thumbnailPicture)
                                    <img src="{{ $item->thumbnailPicture->picture_url }}" class=""/>
                                @endisset
                            </td>
                            <td class="table__name">
                                <div class="table__content">{{ $item->product_name }}<span class="c-text--xs u-display--block">@if( !empty($item->set_name) ){{ $item->set_name }}<br>@endif @if( !empty($item->product_detail) ){{ $item->product_detail }}@endif</span></div>
                            </td>
                            <td class="table__num">
                                <div class="table__item">個数：</div>
                                <div class="table__content"><span class="form__number">
                              <button type="button" class="number__button--plus c-button--md-white"><i class="c-icon--plus"></i></button>
                              <input type="number" class="quantity" name="" placeholder="1" data-max="50" data-min="0">
                              <button type="button" class="number__button--minus c-button--md-white"><i class="c-icon--minus"></i></button><span class="form__effect"></span></span>
                                </div>
                            </td>
                            <td class="table__price">
                                <div class="table__item">単価：</div>
                                <div class="table__content c-price--sm u-whitespace--nowrap">{{ number_format($item->price) }}<span>円（税抜）</span></div>
                                <input type="hidden" class="unit_price" value="{{ $item->price }}">
                            </td>
                            <td class="table__total">
                                <div class="table__item">合計：</div>
                                <div class="table__content c-price--sm u-whitespace--nowrap total_price">{{ number_format($item->price) }}<span>円（税抜）</span></div>
                            </td>
                            <td class="table__total">
                                <div class="table__item">合計：</div>
                                <div class="table__content c-price--sm u-whitespace--nowrap total_price_tax">{{ number_format($item->tax_price) }}<span>円（税込）</span></div>
                            </td>
                            <td class="table__button">
                                <form action="/cgibin/cart-n/ex/cart.cgi" method="post">
                                    <input type="hidden" name="url" id="url" value="<?php echo $_SERVER['REQUEST_URI']; ?>">
                                    <input type="hidden" name="suryo" value="1">
                                    <input type="hidden" name="itemno" value="{{ $item->product_code }}">
                                    <input type="hidden" name="itemna" id="itemna" value="{{ $item->product_name_displayed_cart_text }}">
                                    <input type="hidden" name="sipri" value="::{{ $item->price }}">
                                    <button type="submit" class="order__button c-button--sm-cart">カートに入れる</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                @else
                    <div class="l-notFound">
                        <h2 class="c-heading--md">{{ $not_found_message }}</h2>
                    </div>
                @endif
                </tbody>
            </table>
            @isset($html_parts[\App\Services\HtmlPartService::PART_TYPE_ID_REPAIR_PART_NOTICE]->html_part)
                <section class="p-spec c-section">
                    {!! $html_parts[\App\Services\HtmlPartService::PART_TYPE_ID_REPAIR_PART_NOTICE]->html_part !!}
                </section>
            @endisset
        </div>
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
                  '@id' =>  route('parts.index'),
                  'name' =>  '補修部品'
              ]
         ],
         [
             '@type' =>  'ListItem',
             'position' =>  3,
             'item' =>  [
                 '@id' => 'https://'. $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'],
                 'name' =>  $title .' 補修部品'
             ]
         ]
      ]
    ];
    ?>
    <script type="application/ld+json">
    <?= json_encode( $jsonLD, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT ) ?>
    </script>

@endsection
