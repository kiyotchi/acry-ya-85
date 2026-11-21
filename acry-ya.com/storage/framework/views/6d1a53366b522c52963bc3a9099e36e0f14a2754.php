  <header class="l-header js-accordion">

  <div class="head__banner--wrap">
      <span class="head__banner"></span>
  </div>

    <div class="header__logo">
      <div class="logo__button--left">
        <a data-target="menu" class="js-menu__trigger">
          <i class="c-icon--menu">
            <span class="icon__border"></span>
            <span class="icon__border"></span>
            <span class="icon__border"></span>
          </i>
          <span>メニュー</span>
        </a>
        <a data-target="search" class="js-accordion__trigger">
          <img src="/assets/images/icon/icon_search_b.svg">
          <span>商品検索</span>
        </a>
      </div>
      <a href="/" class="logo__image">
        <img src="/assets/images/logo/logo_acryya.svg" alt="acry-ya.com">
      </a>
      <div class="logo__button--right">
        <a class="logo__search" id="nav_login_sp" onclick="login();">
          <img src="/assets/images/icon/icon_login_b.svg">
        <?php if($login_status == "true"): ?>
            <span>マイページ</span>
        <?php else: ?>
            <span>ログイン<br>会員登録</span>
        <?php endif; ?>
        </a>
        <a href="/cgibin/cart-n/ex/cart.cgi" class="logo__search">
          <img src="/assets/images/icon/icon_cart_b.svg">
          <span>カート</span>
        </a>
      </div>
    </div>
  <div class="header__inner">
    <div class="header__toolbar c-toolbar">
      <div id="search" class="toolbar__inner js-accordion__content">
        <form class="toolbar__search c-form" action="<?php echo e(route('products.search')); ?>">
          <span class="search__select form__select">
            <select id="" name="cat">
              <option value="" selected>すべて</option>
                <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <?php if( empty($category->parent_category_id) ): ?>
                        <?php if($category->product_category_id ==  $search_category_id): ?>
                            <option value="<?php echo e($category->product_category_id); ?>"
                                    selected><?php echo e($category->product_category_name); ?></option>
                        <?php else: ?>
                            <option value="<?php echo e($category->product_category_id); ?>"><?php echo e($category->product_category_name); ?></option>
                        <?php endif; ?>
                    <?php endif; ?>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </select>
          </span>
          <span class="search__input form__input">
            <input type="text" id="" name="word" placeholder="フリーワード検索" value="<?php echo e($search_word); ?>">
          </span>
          <button type="send" id="" name="" class="search__button c-button--md-primary">
            <i class="button__icon">
              <img src="/assets/images/icon/icon_search_w.svg">
            </i>
          </button>
        </form>
      </div>
      <nav class="toolbar__navigation">
        <ul class="navigation__list">
          <li class="list__item js-dropdown">
            <a href="/guide/" class="js-dropdown__trigger">
              <img src="/assets/images/icon/icon_guide_b.svg">
              <span>ご利用<br>ガイド</span>
            </a>
            <div class="item__window c-window--full js-dropdown__content--bottom">
              <ul class="window__list">
                <li><a href="/guide/order/">商品の注文について</a></li>
                <li><a href="/guide/payment/">お支払いについて</a></li>
                <li><a href="/guide/point/">ポイント会員について</a></li>
                <li><a href="/guide/delivery/">配送・送料について</a></li>
                <li><a href="/guide/change/">注文の内容の変更、返品・交換について</a></li>
                <li><a href="/guide/use/">サイトの使い方</a></li>
              </ul>
            </div>
          </li>
          <li class="list__item js-dropdown">
            <a href="/support/" class="js-dropdown__trigger">
              <img src="/assets/images/icon/icon_support_b.svg">
              <span>サポート</span>
            </a>
            <div class="item__window c-window--full js-dropdown__content--bottom">
              <form class="window__siteSearch c-form" action="https://search.yahoo.co.jp/search" target="_blank">
                <span class="siteSearch__input form__input">
                  <input type="text" id="" name="p" placeholder="サイト内検索" tabindex="-1">
                  <input type="hidden" name="fr" value="ysin">
                  <input type="hidden" name="ei" value="UTF-8">
                  <input name="vs" type="hidden" value="https://www.acry-ya.com/">
                </span>
                <button type="send" id="" name="" class="siteSearch__button c-button--md-primary" tabindex="-1">
                  <i class="button__icon">
                    <img src="/assets/images/icon/icon_search_w.svg">
                  </i>
                </button>
              </form>
              <ul class="window__list">
                <li><a href="/support/contact/">お問い合わせ</a></li>
                <li><a href="/support/free_order/">フリー注文</a></li>
                <li><a href="/support/fax/">FAX注文に関するご案内</a></li>
                <li><a href="/support/cancel/">注文キャンセル依頼</a></li>
                <li><a href="/support/repair/">不良/破損/製品違いの交換・不足部品ご請求のお申込み</a></li>
              </ul>
            </div>
          </li>
          <li class="list__item">
            <a onclick="login();" id="nav_login">
              <img src="/assets/images/icon/icon_login_b.svg">
            <?php if($login_status == "true"): ?>
                <span>マイページ</span>
            <?php else: ?>
                <span>ログイン<br>会員登録</span>
            <?php endif; ?>
            </a>
          </li>
          <li class="list__item">
            <a href="/cgibin/cart-n/ex/cart.cgi">
              <img src="/assets/images/icon/icon_cart_b.svg">
              <span>カート</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- .header__user-->
    <?php if($login_status == "true"): ?>
    <div class="header__user" style="">
    <?php else: ?>
    <div class="header__user" style="display: none;">
    <?php endif; ?>
        <p class="user__name"><?php echo e($user_name); ?></p>
        <dl class="user__point">
            <dt>利用可能ポイント：</dt>
            <dd><?php echo e($user_point); ?><span>PT</span></dd>
        </dl>
    </div>
    <script type="text/javascript">
			function logout() {
				var returnURL = encodeURIComponent(location.href);
				location.href = '/cgibin/memberadmin/member.cgi?mode=gadgetLogout&U=' + returnURL;
			}

			function login() {
                <?php if( empty($is_error_page) ): ?>
				var returnURL = encodeURIComponent(location.href);
				location.href = '/cgibin/memberadmin/register.cgi?U=' + returnURL;
				<?php else: ?>
                location.href = '/cgibin/memberadmin/register.cgi';
				<?php endif; ?>
			}
    </script>
  </div>
</header>
<?php /**PATH /var/www/acry-ya.com/resources/views/common/header.blade.php ENDPATH**/ ?>