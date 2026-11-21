<?php $__env->startSection('title', $title); ?>
<?php $__env->startSection('headCss'); ?>
<link rel="stylesheet" href="/assets/stylesheets/projects/product.css">
<link rel="stylesheet" href="/assets/rating/css/style.css">
<?php $__env->stopSection(); ?>
<?php $__env->startSection('description', $list_summary); ?>
<?php $__env->startSection('keywords', ''); ?>
<?php $__env->startSection('bodyId', 'p-product'); ?>
<?php $__env->startSection('headEnd'); ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('bodyEnd'); ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>

<?php $__env->startSection('headStart'); ?>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-56FGQ5X');</script>
<!-- End Google Tag Manager -->
<?php $__env->stopSection(); ?>

<?php $__env->startSection('bodyStart'); ?>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-56FGQ5X"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<?php $__env->stopSection(); ?>

<?php
$priceDisplayExclusion = require __DIR__.'/../../../config/price_display_exclusion.php';
?>


    <div class="main__sub--white">
        <nav class="c-pankuzu">
          <?php echo $__env->make('common.notice', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
            <ul class="pankuzu__list">
                <li><a href="<?php echo e(url('/')); ?>">HOME</a></li>
                <li><a href="<?php echo e(route('products.list')); ?>">商品一覧</a></li>
                <li><?php echo e($title); ?></li>
            </ul>
        </nav>
        <?php if( $title ): ?>
        <h1 class="main__title c-heading--xl"><?php echo e($title); ?></h1>
        <?php endif; ?>
        <?php if( $products->total() > 0 ): ?>
        <div class="l-list--card">
            <?php if( !empty($list_summary) ): ?>
              <div class="c-heading--sm-primary" id="list_content"><?php echo e($list_summary); ?></div>
            <?php endif; ?>
            <div class="c-listNavigation">
                <p class="listNavigation__infomation"><?php echo e($products->total()); ?><span>件中</span><?php echo e($products->firstItem()); ?>〜<?php echo e($products->lastItem()); ?><span>件</span></p>
                <?php echo e($products->appends(request()->input())->onEachSide(2)->links()); ?>

            </div>
            <div class="list__content c-cardGroup--4">
                <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <a href="<?php echo e(route('products.detail', ['id'=>$item->product_id])); ?>" class="c-card--sm">
                    <div class="card__head">
                        <?php if( $item->new_flag ): ?>
                        <div class="card__new">NEW</div>
                        <?php endif; ?>
                        <?php if( !empty($item->thumbnailPicture["picture_url"]) ): ?>
                            <div class="card__image">
                                <img src="<?php echo e($item->thumbnailPicture["picture_url"]); ?>">
                            </div>
                        <?php endif; ?>
                    </div>
                    <div class="card__body">
                        <p class="card__category c-text--xs"><?php echo e($item->productTopCategory->product_category_name); ?></p>
                        <p class="card__title c-heading--xs"><?php echo e($item->product_name); ?></p>

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
                        
                        <?php if( isset( $item->tax_price ) && $extName === false ): ?>
                            <p class="card__price c-price--md"><?php echo e(number_format($item->tax_price)); ?><span>円（税込）</span></p>
                        <?php endif; ?>
                        
                        <?php if( !empty($item->productFeatureTag) ): ?>
                            <div class="card__tag">
                                <?php $__currentLoopData = $item->productFeatureTag; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tag): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <p class="c-label--sm-black"><?php echo e($tag->product_feature_tag_name); ?></p>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </div>
                        <?php endif; ?>
                        <?php if(isset($reviewList[$item->customer_feedback_pc_word]) && $reviewList[$item->customer_feedback_pc_word]['allCount'] > 0): ?>
                            <div class="item-rating">
                              <div id="rating-id<?php echo e($item->product_id); ?>" class="item-rating js-rating" data-avarage="<?= $reviewList[$item->customer_feedback_pc_word]['avarage'] ?>">
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
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.css">
                <script src="/assets/rating/js/rating-list.js"></script>

            </div>
            <div class="c-listNavigation">
                <p class="listNavigation__infomation"><?php echo e($products->total()); ?><span>件中</span><?php echo e($products->firstItem()); ?>〜<?php echo e($products->lastItem()); ?><span>件</span></p>
                <?php echo e($products->appends(request()->input())->onEachSide(2)->links()); ?>

            </div>
        </div>
        <?php else: ?>
        <div class="l-notFound">
            <h2 class="c-heading--md"><?php echo e($not_found_message); ?></h2>
        </div>
        <?php endif; ?>
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
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.base', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/acry-ya.com/resources/views/products/list.blade.php ENDPATH**/ ?>