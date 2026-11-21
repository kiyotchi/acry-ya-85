<div id="menu" class="column__left js-menu__content">
  <i class="column__close c-icon--cross-white js-menu__close"></i>
  <div class="l-sidebar">
    <nav class="sidebar__button">
      <a href="/guide/">
        <img src="/assets/images/icon/icon_guide_b.svg">
        <span>ご利用ガイド</span>
      </a>
      <a href="/support/">
        <img src="/assets/images/icon/icon_support_b.svg">
        <span>サポート</span>
      </a>
    </nav>
    <?php echo $__env->make('common.sidemenu-top', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <nav class="sidebar__navigation">
      <p class="navigation__caption"><a href="<?php echo e(route('products.list')); ?>" class="navigation__caption">製品カテゴリー</a></p>
      <ul class="navigation__list">
        <?php if(!empty($categories)): ?>
        <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <?php if( empty($category->parent_category_id) ): ?>
                <li class="list__item js-dropdown">
                    <a  href="<?php echo e($category->link_url_text); ?>" class="js-dropdown__trigger"><?php echo e($category->product_category_name); ?></a>
                    <div class="item__window c-window--full js-dropdown__content--right">
                      <ul class="window__list">

                        <li>
                          <a href="<?php echo e($category->link_url_text); ?>" class="window__title c-heading--sm">
                            <?php if( !empty($category->thumbnail_path) ): ?>
                              <img src="<?php echo e($category->thumbnail_path); ?>" class="window__thumbnail" width="32" height="32">
                            <?php else: ?>
                            <img src="http://placehold.it/32x32"
                                 class="window__thumbnail_category" width="32" height="32">
                            <?php endif; ?>
                            <?php echo e($category->product_category_name); ?><strong>　&raquo;</strong>
                          </a>
                        </li>

                      </ul>
                        <ul class="window__list">
                            <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $child_category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <?php if( $category->product_category_id == $child_category->parent_category_id ): ?>
                                    <li>
                                        <a href="<?php echo e($child_category->link_url_text); ?>">
                                            <?php if( !empty($child_category->thumbnail_path) ): ?>
                                                <img src="<?php echo e($child_category->thumbnail_path); ?>"
                                                     class="window__thumbnail" width="32" height="32">
                                            <?php else: ?>
                                                <img src="http://placehold.it/32x32"
                                                     class="window__thumbnail" width="32" height="32">
                                            <?php endif; ?>
                                            <?php echo e($child_category->product_category_name); ?></a>
                                    </li>
                                <?php endif; ?>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </ul>
                    </div>
                </li>
            <?php endif; ?>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <?php endif; ?>
        <?php if( $repair_part_groups ): ?>
          <li class="list__item js-dropdown">
            <a href="<?php echo e(route('parts.index')); ?>" class="js-dropdown__trigger">補修部品</a>
            <div class="item__window c-window--full js-dropdown__content--right">
              <ul class="window__list">
                <li>
                  <a href="<?php echo e(route('parts.index')); ?>" class="window__title c-heading--sm">
                    <img src="/storage/images/share/repair.svg" class="window__thumbnail" width="32" height="32">補修部品<strong>　&raquo;</strong>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        <?php endif; ?>
      </ul>
    </nav>

    <nav class="sidebar__navigation">
      <p class="navigation__caption"><span>特注品見積依頼フォーム</span></p>
      <ul class="navigation__list">
        <li class="list__item js-dropdown"><a href="/full_order/" class="js-dropdown__trigger">フルオーダー</a>
          <div class="item__window c-window--full js-dropdown__content--right"><a href="/full_order/" class="window__title c-heading--sm">フルオーダー</a>
            <ul class="window__list">
              <li><a href="/full_order/web/">フォームでのお見積もり依頼</a></li>
              <li><a href="/full_order/fax/print/fax-mitsumori.pdf" target="_blank">FAXでのお見積もり依頼</a></li>
            </ul>
          </div>
        </li>
        <li class="list__item js-dropdown"><a href="/naire_order/" class="js-dropdown__trigger">名入れオーダー</a>
          <div class="item__window c-window--full js-dropdown__content--right"><a href="/naire_order/" class="window__title c-heading--sm">名入れオーダー</a>
            <ul class="window__list">
              <li><a href="/naire_order/laser/">レーザー彫刻</a></li>
              <li><a href="/naire_order/machine/">機械彫刻</a></li>
              <li><a href="/naire_order/typeface/">書体彫刻</a></li>
              <li><a href="/naire_order/typeface_laser/">かんたん書体彫刻</a></li>
              <li><a href="/naire_order/silk/">シルク印刷</a></li>
              <li><a href="/naire_order/uv/">UVインクジェット印刷</a></li>
            </ul>
          </div>
        </li>
        <li class="list__item js-dropdown"><a href="/free_orderEtcplastics/" class="js-dropdown__trigger">エンプラ加工お見積り依頼</a>
          <div class="item__window c-window--full js-dropdown__content--right"><a href="/free_orderEtcplastics/" class="window__title c-heading--sm">エンプラ加工お見積り依頼</a>
            <ul class="window__list">
              <li><a href="/free_orderEtcplastics/web/">フォームでのお見積もり依頼</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
    <nav class="sidebar__navigation">
      <p class="navigation__caption"><span>設計補助</span></p>
      <ul class="navigation__list">
        <li class="list__item js-dropdown"><a href="/material/" class="js-dropdown__trigger">材料詳細</a>
          <div class="item__window c-window--full js-dropdown__content--right"><a href="/material/" class="window__title c-heading--sm">材料詳細</a>
            <ul class="window__list">
              <li><a href="/material/acrylic/">アクリルの特性と種類</a></li>
              <li><a href="/material/polycarbonate/">ポリカーボネートの特性と種類</a></li>
              <li><a href="/material/care/">お手入れ方法</a></li>
              <li><a href="/material/comparison/">アクリルとポリカーボネートの違い</a></li>
              <li><a href="/material/caution/">取り扱い注意</a></li>
              <li><a href="/material/property/">物性と耐薬品性</a></li>
              <li><a href="/material/weight/">許容寸法公差と重量</a></li>
            </ul>
          </div>
        </li>
        <li class="list__item js-dropdown"><a href="/material/acrylic/color/">アクリル色見本</a></li>
        <li class="list__item js-dropdown"><a href="/material/polycarbonate/color/">ポリカーボネート色見本</a></li>
        <li class="list__item js-dropdown"><a href="/diy_guide/" class="js-dropdown__trigger">DIYガイド</a>
          <div class="item__window c-window--full js-dropdown__content--right"><a href="/diy_guide/" class="window__title c-heading--sm">DIYガイド</a>
            <ul class="window__list">
              <li><a href="/diy_guide/prepare/">揃えておきたい基礎道具</a></li>
              <li><a href="/diy_guide/cut/">切る／削る</a></li>
              <li><a href="/diy_guide/drill/">穴を開ける</a></li>
              <li><a href="/diy_guide/edge/">端面仕上げ</a></li>
              <li><a href="/diy_guide/migaki/">磨き／面取り</a></li>
              <li><a href="/diy_guide/bend/">曲げる</a></li>
              <li><a href="/diy_guide/bond/">接着／シール</a></li>
              <li><a href="/diy_guide/maintenance/">メンテナンス</a></li>
              <li><a href="/diy_guide/acryya_column/">アクリ屋コラム</a></li>
            </ul>
          </div>
        </li>
        <li class="list__item js-dropdown">
          <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya" class="js-dropdown__trigger">活用事例 </a>
          <div class="item__window c-window--full js-dropdown__content--right">
            <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya" class="window__title c-heading--sm">活用事例 </a>
              <ul class="window__list">
                <li>
                  <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&word=&method=&group=&group=%83R%83%8C%83N%83V%83%87%83%93&word=">
                    コレクション</a>
                </li>
                <li>
                  <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&word=&method=&group=%83R%83%8C%83N%83V%83%87%83%93&group=%8Az%91%95%8A%D6%8CW&word=">
                    額装関係</a>
                </li>
                <li>
                  <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&word=&method=&group=%89%C6%8B%EF%8EG%89%DD&group=%89%C6%8B%EF%8EG%89%DD&word=">
                    家具雑貨</a>
                </li>
                <li>
                  <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&word=&method=&group=%89%C6%8B%EF%8EG%89%DD&group=%83%8A%83t%83H%81%5B%83%80%2F%89%AE%93%E0%8AO%91%95%8F%FC&word=">
                    リフォーム/屋内外装飾</a>
                </li>
                <li>
                  <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&word=&method=&group=%83%8A%83t%83H%81%5B%83%80%2F%89%AE%93%E0%8AO%91%95%8F%FC&group=%8F%C6%96%BE&word=">
                    照明</a>
                </li>
                <li>
                  <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&word=&method=&group=%8F%C6%96%BE&group=%83p%83%5C%83R%83%93%8A%D6%8CW&word=">
                    パソコン関係</a>
                </li>
                <li>
                  <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&word=&method=&group=%83p%83%5C%83R%83%93%8A%D6%8CW&group=Acky%2FM-acky&word=">
                    Acky/M-acky</a>
                </li>
                <li>
                  <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&word=&method=&group=Acky%2FM-acky&group=%83I%81%5B%83f%83B%83I%8A%D6%8CW&word=">
                    オーディオ関係</a>
                </li>
                <li>
                  <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&word=&method=&group=%83I%81%5B%83f%83B%83I%8A%D6%8CW&group=%8E%A9%93%AE%8E%D4%97p%95i&word=">
                    自動車用品</a>
                </li>
                <li>
                  <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&word=&method=&group=%8E%A9%93%AE%8E%D4%97p%95i&group=%83y%83b%83g%8A%D6%8CW&word=">
                    ペット関係</a>
                </li>
                <li>
                  <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&word=&method=&group=%83y%83b%83g%8A%D6%8CW&group=%83A%81%5B%83g%8D%EC%95i&word=">
                    アート作品</a>
                </li>
                <li>
                  <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&word=&method=&group=%83A%81%5B%83g%8D%EC%95i&group=%93X%95%DC%93W%8E%A6%2F%91%95%8F%FC%2F%8A%C5%94%C2&word=">
                    店舗展示/装飾/看板</a>
                </li>
                <li>
                  <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&word=&method=&group=%93X%95%DC%93W%8E%A6%2F%91%95%8F%FC%2F%8A%C5%94%C2&group=%83C%83x%83%93%83g&word=">
                    イベント</a>
                </li>
                <li>
                  <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&word=&method=&group=%83C%83x%83%93%83g&group=%8E%8E%8D%EC%2F%8F%A4%95i%2F%8Ci%95i&word=">
                    試作/商品/景品</a>
                </li>
                <li>
                  <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&word=&method=&group=%8E%8E%8D%EC%2F%8F%A4%95i%2F%8Ci%95i&group=%82%BB%82%CC%91%BC&word=">
                    その他</a>
                </li>
                <li>
                  <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&word=&method=&group=%82%BB%82%CC%91%BC&group=%83A%83N%83%8A%83%8BDIY&word=">
                    アクリルDIY</a>
                </li>
                <li>
                  <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&word=&method=&group=%83A%83N%83%8A%83%8BDIY&group=%83A%83N%83%8A%83%8B%83P%81%5B%83X&word=">
                    アクリルケース</a>
                </li>
                <li>
                  <a href="/cgibin/wl-news2/wlnews.cgi?id=acryya&word=&method=&group=%83A%83N%83%8A%83%8B%83P%81%5B%83X&group=%83t%83%8B%83I%81%5B%83_%81%5B&word=">
                    フルオーダー</a>
                </li>
              </ul>
          </div>
        </li>
      </ul>
    </nav>
    <nav class="sidebar__navigation">
      <p class="navigation__caption"><span>その他</span></p>
      <ul class="navigation__list">
        <li class="list__item js-dropdown"><a href="/voices/" class="js-dropdown__trigger">お客様の声</a>
          <div class="item__window c-window--full js-dropdown__content--right"><a href="/voices/" class="window__title c-heading--sm">お客様の声</a>
            <ul class="window__list">
              <li><a href="/voices/current/">ご購入時</a></li>
              <li><a href="/review/">ご購入後</a></li>
            </ul>
          </div>
        </li>
        <li class="list__item js-dropdown"><a href="/faq/" class="js-dropdown__trigger">よくあるご質問</a>
          <div class="item__window c-window--full js-dropdown__content--right"><a href="/faq/" class="window__title c-heading--sm">よくあるご質問</a>
            <ul class="window__list">
              <li><a href="/cgibin/wl-news/wlnews.cgi?id=acryya&word=&method=&type=index&group=%83t%83%8B%83I%81[%83_%81[(%93%C1%92%8D%95i)">フルオーダー（特注）</a></li>
              <li><a href="/cgibin/wl-news/wlnews.cgi?id=acryya&word=&method=&type=index&group=%83A%83N%83%8A%83%8B%94%C2">アクリル板</a></li>
              <li><a href="/cgibin/wl-news/wlnews.cgi?id=acryya&word=&method=&type=index&group=%83A%83N%83%8A%83%8B%83p%83C%83v%A5%96_%81E%8B%85%81E%94%BC%8B%85">アクリルパイプ・棒・球・半球</a></li>
              <li><a href="/cgibin/wl-news/wlnews.cgi?id=acryya&word=&method=&type=index&group=%83%7C%83%8A%83J%81%5B%83%7B%83l%81%5B%83g">ポリカーボネート板</a></li>
              <li><a href="/cgibin/wl-news/wlnews.cgi?id=acryya&word=&method=&type=index&group=%83A%83N%83%8A%83%8B%8DH%8B%EF%81E%97p%95i">アクリル工具・用品</a></li>
              <li><a href="/cgibin/wl-news/wlnews.cgi?id=acryya&word=&method=&type=index&group=%83%7C%83X%83%5E%81%5B%83t%83%8C%81%5B%83%80%81E%83t%83H%83g%83t%83%8C%81%5B%83%80">ポスターフレーム・フォトフレーム</a></li>
              <li><a href="/cgibin/wl-news/wlnews.cgi?id=acryya&word=&method=&type=index&group=%94%A0%8C%5E%83P%81%5B%83X%A5%83R%83%8C%83N%83V%83%87%83%93%83P%81%5B%83X">箱型ケース・コレクションケース</a></li>
              <li><a href="/cgibin/wl-news/wlnews.cgi?id=acryya&word=&method=&type=index&group=%89%C6%8B%EF%8EG%89%DD">家具・雑貨</a></li>
            </ul>
            <ul class="window__list">
              <li><a href="/cgibin/wl-news/wlnews.cgi?id=acryya&word=&method=&type=index&group=%82%B2%92%8D%95%B6%82%CC%95%FB%96@">ご注文の方法について</a></li>
              <li><a href="/cgibin/wl-news/wlnews.cgi?id=acryya&no=1">お支払い方法について</a></li>
              <li><a href="/cgibin/wl-news/wlnews.cgi?id=acryya&group=&type=index&word=%91%97%97%BF&method=AND">配送・送料について</a></li>
              <li><a href="/cgibin/wl-news/wlnews.cgi?id=acryya&word=&method=&type=index&group=%82%A8%8E%E6%88%F8%82%CC%95%FB%96@(%96@%90l%97l)">法人様お取引について</a></li>
              <li><a href="/cgibin/wl-news/wlnews.cgi?id=acryya&no=114">納期について</a></li>
              <li><a href="/cgibin/wl-news/wlnews.cgi?id=acryya&word=&method=&type=index&group=%83z%81[%83%80%83y%81[%83W%82%E2%83%81%81[%83%8B%82%CC%83G%83%89%81[">メールやホームページのエラー</a></li>
            </ul>
          </div>
        </li>
        <li class="list__item js-dropdown"><a href="/sample_item/" class="js-dropdown__trigger">無料サンプル請求</a>
          <div class="item__window c-window--full js-dropdown__content--right"><a href="/sample_item/" class="window__title c-heading--sm">無料サンプル請求</a>
            <ul class="window__list">
              <li><a href="https://pro.form-mailer.jp/lp/0205d50535194" target="_blank">アクリル板無料サンプルご請求フォーム</a></li>
              <li><a href="https://pro.form-mailer.jp/lp/28b9f44835448" target="_blank">ポリカーボネート・その他無料サンプルご請求フォーム</a></li>
              <li><a href="https://pro.form-mailer.jp/lp/c2fd1259203591" target="_blank">キャストカラー板サンプル請求</a></li>
              <li><a href="https://pro.form-mailer.jp/lp/1f89e8a469521" target="_blank">キャストカラーマット板サンプル請求</a></li>
            </ul>
          </div>
        </li>
        <li class="list__item js-dropdown"><a href="/blog/" class="js-dropdown__trigger">アクリ屋ブログ</a>
          <div class="item__window c-window--full js-dropdown__content--right">
            <a href="/blog/" class="window__title c-heading--sm">アクリ屋ブログ</a>
            <ul class="window__list">
              <li>
                <a href="/blog/">すべて</a>
              </li>
              <?php if(!empty($blog_categories)) : foreach($blog_categories as $key => $blog_category) :?>
              <li>
                <a href="<?php echo $blog_category["link"] ?>"><?php echo $blog_category["name"]; ?></a>
              </li>
              <?php endforeach; endif; ?>
            </ul>
          </div>
        </li>
        <li class="list__item js-dropdown"><a href="/about/" class="js-dropdown__trigger">アクリ屋について</a>
          <div class="item__window c-window--full js-dropdown__content--right"><a href="/about/" class="window__title c-heading--sm">アクリ屋について</a>
            <ul class="window__list">
              <li><a href="/about/outline/">会社概要</a></li>
              <li><a href="/about/calendar/">営業日のご案内</a></li>
              <li><a href="/about/disclaimer/">免責事項</a></li>
              <li><a href="/about/legal/">特定商取引に基づく表記</a></li>
              <li><a href="/about/privacy-policy/">プライバシーポリシー</a></li>
            </ul>
          </div>
        </li>
        <li class="list__item"><a href="/link/">取扱材料メーカーリンク</a></li>
        <li class="list__item"><a href="/recycle/">リサイクル回収について</a></li>
      </ul>
    </nav>
    <div class="sidebar__navigation">
      <div class="navigation__contact">
        <dl class="contact__item">
          <dt>TEL.</dt>
          <dd data-tel="0455476372" class="item__tel js-tellink">045-547-6372</dd>
        </dl>
        <dl class="contact__item">
          <dt>FAX.</dt>
          <dd class="item__tel">045-547-5945</dd>
        </dl>
        <dl class="contact__item">
          <dt>受付時間</dt>
          <dd>9:00～12:15 / 13:00～17:30 <br>（土日祝休業）</dd>
        </dl><a href="/about/calendar/" class="contact__button c-button--xs-gray"><i class="button__icon--before"><img src="/assets/images/icon/icon_calendar_b.svg"></i>営業日のご案内</a>
      </div>
    </div>
    <div class="sidebar__navigation">
      <p class="navigation__caption"><span>運営サイト</span></p>
      <div class="navigation__banner"><a href="/sakuraj/" target="_blank"><img src="/assets/images/banner/bn_sakura.jpg"></a></div>
    </div>
    <div class="sidebar__navigation">
      <p class="navigation__caption"><span>認証取得</span></p>
      <div class="navigation__banner"><a href="/sakuraj/" target="_blank"><img src="/assets/images/logo/logo_iso3.jpg"></a></div>
    </div>

  </div>
</div>
<?php /**PATH /var/www/acry-ya.com/resources/views/common/sidemenu.blade.php ENDPATH**/ ?>