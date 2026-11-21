var slickStart = function() {
  var breakpoint = 768;

  // default slick
  $('.mainVisual__slick.js-slick').slick({
    // 矢印キーでスライドを切り替えるか [初期値:true]
    accessibility: true,
    // スライドの高さが違うときに自動調整するか [初期値:false]
    adaptiveHeight: false,
    // 自動再生するか [初期値:false]
    autoplay: true,
    // 自動再生で切り替えする時間(ミリ秒) [初期値:3000]
    autoplaySpeed: 3000,
    // 前次ボタンを表示するか [初期値:true]
    arrows: true,
    // 別のスライドと連携したいときにクラス名を指定 [初期値:null]
    asNavFor: null,
    // 矢印ボタンの生成位置を変更 [初期値:$('.my-slide)]
    appendArrows: $('.js-slick'),
    // ドットナビゲーションの生成位置を変更 [初期値:$('.my-slide)]
    appendDots: $('.js-slick'),
    // 前ボタンの要素を変更 [初期値:'<button type="button" class="slick-prev">Previous</button>']
    prevArrow: '<span type="button" class="slick-prev"><i class="c-icon--arrow-l"></i></span>',
    // 次ボタンの要素を変更 [初期値:'<button type="button" class="slick-next">Next</button>']
    nextArrow: '<span type="button" class="slick-next"><i class="c-icon--arrow-r"></i></span>',
    // slidesToShowが奇数のとき、現在のスライドを中央に表示するか [初期値:false]
    centerMode: false,
    // centerMode:trueのとき、左右のスライドをチラ見せさせる幅 [初期値:'50px']
    centerPadding: '60px',
    // ease-in,ease-in-outなどCSSのイージング [初期値:'ease']
    cssEase: 'linear',
    // dots:trueのとき、ドットをサムネイルなどにカスタマイズ [初期値:n/a]
    //customPaging: '',
    // ドットナビゲーションを表示するか [初期値:false]
    dots: true,
    // ドットナビゲーションのクラス名を変更 [初期値:slick-dots]
    dotsClass: 'slick-dots',
    // マウスドラッグでスライドの切り替えをするか [初期値:true]
    draggable: true,
    // スライド切り替えをフェードするか [初期値:false]
    fade: false,
    // クリックでメインのスライドを切り替えるか
    focusOnSelect: false,
    // jQueryのイージング [初期値:'linear']
    easing: 'linear',
    // スライドをループさせるか [初期値:true]
    infinite: true,
    // infinite:falseのとき、両端のスライドをドラッグしようとした際のバウンドスクロール値 [初期値:0.15]
    edgeFriction: 0.2,
    // 開始スライド（0から始まるので注意） [初期値:0]
    initialSlide: 0,
    // 画像の遅延表示タイプ（ondemand/progressive) [初期値:'ondemand']
    lazyLoad: 'ondemand',
    // モバイルファーストにするか [初期値:false]
    mobileFirst: false,
    // autoplay:trueのとき、マウスフォーカスしたら一時停止させるか [初期値:true]
    pauseOnFocus: false,
    // autoplay:trueのとき、マウスホバーしたら一時停止させるか [初期値:true]
    pauseOnHover: false,
    // autoplay:trueのとき、ドットナビゲーションをマウスホバーしたら一時停止させるか [初期値:false]
    pauseOnDotsHover: false,
    // 行数 [初期値:1]
    rows: 1,
    // スライド部分の要素のタグ名 [初期値:'']
    slide: '',
    // rowsの値が2以上のとき、1行あたりに表示させるスライド数 [初期値:1]
    slidesPerRow: 5,
    // 表示させるスライド数 [初期値:1]
    slidesToShow: 1,
    // 一度に移動させるスライド数 [初期値:1]
    slidesToScroll: 1,
    // スライド/フェードさせるスピード（ミリ秒） [初期値:300]
    speed: 200,
    // スワイプを検知するか [初期値:true]
    swipe: true,
    // slidesToScrollの値に関係なく、マウスドラッグやスワイプでスライドさせる際は1スライドずつ動かす [初期値:false]
    swipeToSlide: false,
    // タッチでスライドさせるか [初期値:true]
    touchMove: true,
    // (1/touchThreshold)*スライダーの横幅 分マウスドラッグするとスライドされる [初期値:5]
    touchThreshold: 5,
    // CSSのtransitionを使用するか [初期値:true]
    useCSS: true,
    // CSSのtransformを使用するか [初期値:true]
    useTransform: true,
    // 横幅がバラバラなスライドにするか [初期値:false]
    variableWidth: false,
    // 縦方向にスライドさせるか [初期値:false]
    vertical: false,
    // 縦方向のスワイプを有効にするか [初期値:false]
    verticalSwiping: false,
    // スライドの順番を逆にするか [初期値:false]
    rtl: false,
    // スライドアニメーション中サムネイルをクリックしたとき反応させないか [初期値:true]
    waitForAnimate: true,
    // z-index値 [初期値:1000]
    zIndex: 1000,
    // レスポンシブ設定の基準（window/slider/min） [初期値:'window']
    respondTo: 'window',
    // レスポンシブ設定
    responsive: [
      {
        breakpoint: breakpoint - 1,
        settings: {
          arrows: false,
        }
      }
    ],
  });

  $('.relation__slick.js-slick').slick({
    // 矢印キーでスライドを切り替えるか [初期値:true]
    accessibility: true,
    // スライドの高さが違うときに自動調整するか [初期値:false]
    adaptiveHeight: false,
    // 自動再生するか [初期値:false]
    autoplay: true,
    // 自動再生で切り替えする時間(ミリ秒) [初期値:3000]
    autoplaySpeed: 3000,
    // 前次ボタンを表示するか [初期値:true]
    arrows: true,
    // 別のスライドと連携したいときにクラス名を指定 [初期値:null]
    asNavFor: null,
    // 矢印ボタンの生成位置を変更 [初期値:$('.my-slide)]
    appendArrows: $('.js-slick'),
    // ドットナビゲーションの生成位置を変更 [初期値:$('.my-slide)]
    appendDots: $('.js-slick'),
    // 前ボタンの要素を変更 [初期値:'<button type="button" class="slick-prev">Previous</button>']
    prevArrow: '<span type="button" class="slick-prev"><i class="c-icon--arrow-l"></i></span>',
    // 次ボタンの要素を変更 [初期値:'<button type="button" class="slick-next">Next</button>']
    nextArrow: '<span type="button" class="slick-next"><i class="c-icon--arrow-r"></i></span>',
    // slidesToShowが奇数のとき、現在のスライドを中央に表示するか [初期値:false]
    centerMode: false,
    // centerMode:trueのとき、左右のスライドをチラ見せさせる幅 [初期値:'50px']
    centerPadding: '60px',
    // ease-in,ease-in-outなどCSSのイージング [初期値:'ease']
    cssEase: 'linear',
    // dots:trueのとき、ドットをサムネイルなどにカスタマイズ [初期値:n/a]
    //customPaging: '',
    // ドットナビゲーションを表示するか [初期値:false]
    dots: true,
    // ドットナビゲーションのクラス名を変更 [初期値:slick-dots]
    dotsClass: 'slick-dots',
    // マウスドラッグでスライドの切り替えをするか [初期値:true]
    draggable: true,
    // スライド切り替えをフェードするか [初期値:false]
    fade: false,
    // クリックでメインのスライドを切り替えるか
    focusOnSelect: false,
    // jQueryのイージング [初期値:'linear']
    easing: 'linear',
    // スライドをループさせるか [初期値:true]
    infinite: true,
    // infinite:falseのとき、両端のスライドをドラッグしようとした際のバウンドスクロール値 [初期値:0.15]
    edgeFriction: 0.2,
    // 開始スライド（0から始まるので注意） [初期値:0]
    initialSlide: 0,
    // 画像の遅延表示タイプ（ondemand/progressive) [初期値:'ondemand']
    lazyLoad: 'ondemand',
    // モバイルファーストにするか [初期値:false]
    mobileFirst: false,
    // autoplay:trueのとき、マウスフォーカスしたら一時停止させるか [初期値:true]
    pauseOnFocus: false,
    // autoplay:trueのとき、マウスホバーしたら一時停止させるか [初期値:true]
    pauseOnHover: false,
    // autoplay:trueのとき、ドットナビゲーションをマウスホバーしたら一時停止させるか [初期値:false]
    pauseOnDotsHover: false,
    // 行数 [初期値:1]
    rows: 1,
    // スライド部分の要素のタグ名 [初期値:'']
    slide: '',
    // rowsの値が2以上のとき、1行あたりに表示させるスライド数 [初期値:1]
    slidesPerRow: 5,
    // 表示させるスライド数 [初期値:1]
    slidesToShow: 5,
    // 一度に移動させるスライド数 [初期値:1]
    slidesToScroll: 1,
    // スライド/フェードさせるスピード（ミリ秒） [初期値:300]
    speed: 200,
    // スワイプを検知するか [初期値:true]
    swipe: true,
    // slidesToScrollの値に関係なく、マウスドラッグやスワイプでスライドさせる際は1スライドずつ動かす [初期値:false]
    swipeToSlide: false,
    // タッチでスライドさせるか [初期値:true]
    touchMove: true,
    // (1/touchThreshold)*スライダーの横幅 分マウスドラッグするとスライドされる [初期値:5]
    touchThreshold: 5,
    // CSSのtransitionを使用するか [初期値:true]
    useCSS: true,
    // CSSのtransformを使用するか [初期値:true]
    useTransform: true,
    // 横幅がバラバラなスライドにするか [初期値:false]
    variableWidth: false,
    // 縦方向にスライドさせるか [初期値:false]
    vertical: false,
    // 縦方向のスワイプを有効にするか [初期値:false]
    verticalSwiping: false,
    // スライドの順番を逆にするか [初期値:false]
    rtl: false,
    // スライドアニメーション中サムネイルをクリックしたとき反応させないか [初期値:true]
    waitForAnimate: true,
    // z-index値 [初期値:1000]
    zIndex: 1000,
    // レスポンシブ設定の基準（window/slider/min） [初期値:'window']
    respondTo: 'window',
    // レスポンシブ設定
    responsive: [
      {
        breakpoint: breakpoint - 1,
        settings: {
          // rowsの値が2以上のとき、1行あたりに表示させるスライド数 [初期値:1]
          slidesPerRow: 2,
          // 表示させるスライド数 [初期値:1]
          slidesToShow: 2,
        }
      }
    ],
  });
};
