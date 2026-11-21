<?php $__env->startSection('title', 'アクリル板材料の加工とアクリル製品の専門店'); ?>
<?php $__env->startSection('description', 'アクリル板材料の加工とアクリル製品のことなら「アクリ屋ドットコム」。アクリル製品のセミオーダー加工や特注品のご注文も承っております。１万円以上は送料無料。'); ?>
<?php $__env->startSection('keywords', 'アクリル板,アクリルケース,アクリル加工,販売,通販,価格,当日出荷,当日発送,ポスターフレーム,フォトフレーム,樹脂,アクリ屋'); ?>
<?php $__env->startSection('headCss'); ?>
<link rel="stylesheet" href="/assets/stylesheets/projects/top.css?ver=2022.04.21.2">
<link rel="stylesheet" href="/assets/stylesheets/projects/slick-slide.css?ver=2022.04.21.2">
<?php $__env->stopSection(); ?>
<?php $__env->startSection('bodyId', 'p-top'); ?>
<?php $__env->startSection('headEnd'); ?>
<script src="/assets/javascripts/plugins/slick-1.6.0.min.js"></script>
<script src="/assets/javascripts/plugins/slick-1.6.0.setting.js?ver=2022.04.21.2"></script>
<script>
    $(window).on('load', function() {
        slickStart();
    });
</script>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>

<!-- p-mainVisual-->

<div class="main__sub--white top__slide--wrap">
    <?php echo $__env->make('common.notice', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->make('top.topInfo', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <div class="p-mainVisual">
        <div class="mainVisual__slick js-slick2">


            <div class="slick__item">
                <div class="item__pc">
                    <img src="/assets/images/projects/top/img_main_visual_01-01.jpg">
                </div>
                <div class="item__sp">
                    <img src="/assets/images/projects/top/img_main_visual_sp_01-01.jpg">
                </div>
                <div class="item__text text__position--center text__color--black">
                    <p class="item__copy size__lg text__bold">店舗・販促・個人・<br>学校・研究機関向けに最適な<br>アクリル・ポリカーボネート・<br>樹脂加工品のご依頼なら</p>
                    <p class="item__title size__lg size__sm--sp text__color--main">アクリ屋ドットコム</p>
                </div>
            </div>

            <div class="slick__item">
                <div class="item__pc">
                    <img src="/assets/images/projects/top/img_main_visual_05.jpg">
                </div>
                <div class="item__sp">
                    <img src="/assets/images/projects/top/img_main_visual_sp_05.jpg">
                </div>
                <div class="item__text text__position--left text__color--white">
                  <p class="item__title"><br><br><br><br><br></p>
                    <a class="item__link link__color--white" href="/products/list/204/">詳細はこちら</a>
                </div>
            </div>

            <div class="slick__item">
                <div class="item__pc">
                    <img src="/assets/images/projects/top/img_main_visual_02.jpg">
                </div>
                <div class="item__sp">
                    <img src="/assets/images/projects/top/img_main_visual_sp_02.jpg">
                </div>
                <div class="item__text text__position--left text__color--black">
                    <p class="item__title size__sm">50種類以上の<br>豊富なセミオーダー商品を<br>ラインナップ</p>
                    <p class="item__copy">mm単位のサイズ指定<br>自動数量割引<br>一部製品は2D・3D図面表示</p>
                </div>
            </div>

            <div class="slick__item">
                <div class="item__pc">
                    <img src="/assets/images/projects/top/img_main_visual_03.jpg">
                </div>
                <div class="item__sp">
                    <img src="/assets/images/projects/top/img_main_visual_sp_03.jpg">
                </div>
                <div class="item__text text__position--center text__color--white">
                    <p class="item__title size__lg">特注品制作<br>ご依頼下さい</p>
                    <p class="item__copy size__lg">ご相談・お見積り無料<br>一台～量産まで</p>
                    <a class="item__link link__color--white" href="/full_order/">詳細はこちら</a>
                </div>
            </div>

            <div class="slick__item">
                <div class="item__pc">
                    <img src="/assets/images/projects/top/img_main_visual_04.jpg">
                </div>
                <div class="item__sp">
                    <img src="/assets/images/projects/top/img_main_visual_sp_04.jpg">
                </div>
                <div class="item__text text__position--right text__color--white">
                    <p class="item__title">樹脂専門の<br>自社工場にて生産</p>
                    <p class="item__copy size__lg--sp">高品質な製品を<br>お求めやすい価格でご提供</p>
                </div>
            </div>



        </div>
    </div>
</div>
<!-- p-banner-->
<div class="p-banner">
    <div class="banner__inner">
        <?php echo $__env->make('top.banner', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
</div>
<div class="main__sub--white">
    <!-- p-mitsumori-->
    <section class="p-mitsumori">
        <h2 class="c-heading--md"><img src="/assets/images/icon/icon_ruler_b.svg" class="heading__image">簡単自動見積り</h2>
        <p class="mitsumori__lead">「ミリ単位」でお好みのサイズにカット・加工</p>
        <div class="mitsumori__list">
            <div class="list__item c-flame--xs-acrylic">
                <h3 class="item__title c-heading--sm">アクリル板</h3>
                <div class="item__type">
                    <div class="type__block"><img src="/assets/images/projects/top/img_acrylic_01.svg" class="type__image"><a href="/products/detail/2/" class="type__button c-button--md-secondary">カット<i class="c-icon--arrow-r-white button__icon--after"></i></a>
                    </div>
                    <div class="type__block"><img src="/assets/images/projects/top/img_acrylic_02.svg" class="type__image"><a href="/products/detail/283/" class="type__button c-button--md-secondary">カット＋加工<i class="c-icon--arrow-r-white button__icon--after"></i></a>
                    </div>
                </div>
            </div>
            <div class="list__item c-flame--xs-polyca">
                <h3 class="item__title c-heading--sm">ポリカーボネート板</h3>
                <div class="item__type">
                    <div class="type__block"><img src="/assets/images/projects/top/img_polyca_01.svg" class="type__image"><a href="/article/polyca/" class="type__button c-button--md-tertiary">カット<i class="c-icon--arrow-r-white button__icon--after"></i></a>
                    </div>
                    <div class="type__block"><img src="/assets/images/projects/top/img_polyca_02.svg" class="type__image"><a href="/products/detail/292/" class="type__button c-button--md-tertiary">カット＋加工<i class="c-icon--arrow-r-white button__icon--after"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- p-category-->
    <section class="p-category">
        <h2 class="c-heading--md"><img src="/assets/images/icon/icon_folder_b.svg" class="heading__image">カテゴリーから探す</h2>
        <div class="category__list"><a href="/products/list/1/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_01.jpg"></div>
          <p class="item__title">アクリル板</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/21/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_20.jpg"></div>
          <p class="item__title">アクリルキャスト規格板</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/2/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_02.jpg"></div>
          <p class="item__title">アクリル板加工DIY</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/204/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_30.jpg"></div>
          <p class="item__title">アクリルプリント</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/3/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_03.jpg"></div>
          <p class="item__title">その他アクリル材料・加工</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/4/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_04.jpg"></div>
          <p class="item__title">実験装置</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/5/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_05.jpg"></div>
          <p class="item__title">ポリカーボネート板</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/6/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_06.jpg"></div>
          <p class="item__title">その他の樹脂</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/7/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_07.jpg"></div>
          <p class="item__title">ポスターフレーム</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/8/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_08.jpg"></div>
          <p class="item__title">フォトフレーム</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/9/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_09.jpg"></div>
          <p class="item__title">専用額</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/10/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_10.jpg"></div>
          <p class="item__title">立体額・キャンバス額</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/11/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_11.jpg"></div>
          <p class="item__title">店舗用什器</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/12/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_12.jpg"></div>
          <p class="item__title">アクリルケース</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/13/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_13.jpg"></div>
          <p class="item__title">アクリル家具</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/14/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_14.jpg"></div>
          <p class="item__title">インテリア・雑貨</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/15/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_15.jpg"></div>
          <p class="item__title">ペット用品</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/16/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_16.jpg"></div>
          <p class="item__title">リビングプラス</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/17/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_17.jpg"></div>
          <p class="item__title">工具・用品</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/products/list/18/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_18.jpg"></div>
          <p class="item__title">部品・装飾品</p><i class="c-icon--arrow-r-primary"></i>
        </a><a href="/parts/" class="list__item">
          <div class="item__image"><img src="/assets/images/projects/top/img_category_19.jpg"></div>
          <p class="item__title">補修部品</p><i class="c-icon--arrow-r-primary"></i>
        </a></div>
    </section>
</div>
<!-- p-recommend-->
<section class="p-recommend">
    <h2 class="c-heading--md"><img src="/assets/images/icon/icon_star_b.svg" class="heading__image">おすすめ商品</h2>
    <div class="l-list--card recommend__list">
        <div class="list__content c-cardGroup--4">
            <?php echo $__env->make('top.recommend', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        </div>
    </div>
</section>
<!-- p-new-->
<section class="p-new">
    <h2 class="c-heading--md"><img src="/assets/images/icon/icon_new_b.svg" class="heading__image">新着商品</h2>
    <div class="l-list--card new__list">
        <div class="list__content c-cardGroup--4">
            <?php echo $__env->make('top.newproducts', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        </div>
    </div>
</section>
<!-- p-caseStudy-->
<section class="p-caseStudy">
    <div class="caseStudy__inner">
        <h2 class="c-heading--md-center">お客様活用事例</h2>
        <p class="c-text--md-center">実際にアクリ屋の材料や製品を<br class="u-display--none-lg">ご購入頂いたお客様の活用事例をご紹介します。</p>
        <div class="caseStudy__content">
            <?php echo $__env->make('top.casestudy', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        </div><a href="/cgibin/wl-news2/wlnews.cgi?id=acryya" class="caseStudy__button c-button--md-primary">一覧はこちら<i class="c-icon--arrow-r-white button__icon--after"></i></a>
    </div>
</section>

<!-- ブログ -->
<?php
$proto = $_SERVER['HTTP_X_FORWARDED_PROTO'] ?? 'http';
$feedUrl = $proto . '://' . $_SERVER['HTTP_HOST'] . '/blog/feed';
$rss = @simplexml_load_file($feedUrl, 'SimpleXMLElement', LIBXML_NOCDATA);
$rssCachePath = __DIR__ . '/../../../_blog_rss.json';
if (
    $rss !== false
    && (
        !file_exists($rssCachePath)
        || (time() - filemtime($rssCachePath))  > 3600
    )
) {
    $datas = [];
    foreach ($rss->channel->item as $entry) {
        $datas[] = [
            'title' => $entry->title,
            'link' => $entry->link,
            'pubDate' => date('Y/m/d', strtotime($entry->pubDate)),
            'thumb' => $entry->thumb->url,
            'desctiption' => $entry->description
        ];
    }
    file_put_contents($rssCachePath, json_encode($datas, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
    chmod($rssCachePath, 0666);
}
?>
<section class="p-blog">
    <h2 class="c-heading--md"><img src="/assets/images/icon/icon_news_d.svg" class="heading__image">アクリ屋ブログ</h2>
    <div class="l-list--card recommend__list">
        <div class="list__content c-cardGroup--4">
            <?php
            $x = 0;
            $rssCacheJson = file_exists($rssCachePath) ? file_get_contents($rssCachePath) : '[]';
            $rssEntries = json_decode($rssCacheJson);
            if (!is_array($rssEntries)) {
                $rssEntries = [];
            }
            foreach ($rssEntries as $entry): ?>
                <div class="blogList__item">
                    <a class="c-card--blog" href="<?= $entry->link->{0} ?>">
    
                        <?php if (isset($entry->thumb->{0})): ?>
                            <div class="card__head">
                                <div class="card__image">
                                    <img src="<?= $entry->thumb->{0} ?>">
                                </div>
                            </div>
                        <?php else: ?>
                            <div class="card__head">
                                <div class="card__image">
                                    <img src="/blog/bn_products_thumbnail.jpg">
                                </div>
                            </div>
                        <?php endif; ?>
                        <div class="card__body">
                            <time class="card__time c-text--sm"><?= $entry->pubDate; ?></time>
                            <p class="card__title c-heading--sm"><?= $entry->title->{0} ?></p>
                            <p class="card__discription c-text--sm"><?= $entry->desctiption->{0} ?></p>
                        </div>
                    </a>
                </div>
            <?php $x++;
                if ($x == 4) {
                    break;
                }
            endforeach; ?>
        </div>
    </div>
    <a href="/blog/" class="blog__button c-button--md-primary">もっと見る<i class="c-icon--arrow-r-white button__icon--after"></i></a>
</section>
<!-- /ブログ -->

<div class="main__sub--white">
    <!-- p-news-->
    <section class="p-news">
        <h2 class="c-heading--md"><img src="/assets/images/icon/icon_news_b.svg" class="heading__image">お知らせ</h2>
        <div class="l-list p-news">
            <div class="list__content">
                <ul class="news__newsList c-newsList">
                    <?php echo $__env->make('top.acryyanew', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                </ul>
            </div>
        </div><a href="/cgibin/wl-news3/wlnews.cgi?id=acryyanews" class="news__more c-link"><i class="c-icon--triangle-r"></i>もっと見る</a>
    </section>
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
    <?= json_encode($jsonLD, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) ?>
</script>

<?php
$jsonLD = [
    '@context' => 'http://schema.org',
    '@type' => 'Organization',
    'name' => '株式会社さくら樹脂',
    'description' => "株式会社さくら樹脂は、アクリル材料加工・アクリル製品のネットショップ「アクリ屋ドットコム」の運営を主体に、その他、工業用樹脂部品の受託製造を行っています。製品は、精密で精度の要求される工業製品を制作する加工技術をベースに、最新設備を駆使し、各種の樹脂加工のノウハウを持つ専門の職人が制作致します。",
    'url' => 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'],
    'telephone' => '+81 45-547-6372',
    'address' => [
        '@type' => 'PostalAddress',
        'streetAddress' => '樽町4-13-2',
        'addressLocality' =>  '港北区',
        'addressRegion' => '神奈川県',
        'postalCode' => '222-0001',
        'addressCountry' => "JP"
    ]
];
?>
<script type="application/ld+json">
    <?= json_encode($jsonLD, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) ?>
</script>

<?php
$jsonLD = [
    '@context' =>  'http://schema.org',
    '@type' =>  'WebSite',
    'url' => 'https://acry-ya.com/',
    'potentialAction' =>  [
        '@type' =>  'SearchAction',
        'target' =>  'https://www.acry-ya.com/products/search/?cat=&word={query_string}',
        'query-input' =>  'required name=query_string'
    ]
]
?>
<script type="application/ld+json">
    <?= json_encode($jsonLD, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) ?>
</script>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.base', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/acry-ya.com85/resources/views/index.blade.php ENDPATH**/ ?>