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
        @if($login_status == "true")
            <span>マイページ</span>
        @else
            <span>ログイン<br>会員登録</span>
        @endif
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
        <form class="toolbar__search c-form" action="{{ route('products.search') }}">
          <span class="search__select form__select">
            <select id="" name="cat">
              <option value="" selected>すべて</option>
                @foreach($categories as $category)
                    @if( empty($category->parent_category_id) )
                        @if($category->product_category_id ==  $search_category_id)
                            <option value="{{ $category->product_category_id }}"
                                    selected>{{ $category->product_category_name }}</option>
                        @else
                            <option value="{{ $category->product_category_id }}">{{ $category->product_category_name }}</option>
                        @endif
                    @endif
                @endforeach
            </select>
          </span>
          <span class="search__input form__input">
            <input type="text" id="" name="word" placeholder="フリーワード検索" value="{{ $search_word }}">
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
            @if($login_status == "true")
                <span>マイページ</span>
            @else
                <span>ログイン<br>会員登録</span>
            @endif
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
    @if($login_status == "true")
    <div class="header__user" style="">
    @else
    <div class="header__user" style="display: none;">
    @endif
        <p class="user__name">{{$user_name}}</p>
        <dl class="user__point">
            <dt>利用可能ポイント：</dt>
            <dd>{{$user_point}}<span>PT</span></dd>
        </dl>
    </div>
    <script type="text/javascript">
			function logout() {
				var returnURL = encodeURIComponent(location.href);
				location.href = '/cgibin/memberadmin/member.cgi?mode=gadgetLogout&U=' + returnURL;
			}

			function login() {
                @if( empty($is_error_page) )
				var returnURL = encodeURIComponent(location.href);
				location.href = '/cgibin/memberadmin/register.cgi?U=' + returnURL;
				@else
                location.href = '/cgibin/memberadmin/register.cgi';
				@endif
			}
    </script>
  </div>
</header>
