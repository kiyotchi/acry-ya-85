/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/*@cc_on _d=document;eval('var document=_d')@*/
	/*===========================================
	    FUNCTION
	===========================================*/
	var products       = __webpack_require__(6);

	var accordiion     = __webpack_require__(7);
	var anchorScroll   = __webpack_require__(8);
	var dropdown       = __webpack_require__(9);
	var modal          = __webpack_require__(10);
	var toggle         = __webpack_require__(11);
	var tab            = __webpack_require__(12);
	var form           = __webpack_require__(13);
	var formChange     = __webpack_require__(14);
	var ellipsis       = __webpack_require__(15);

	var menu           = __webpack_require__(16);
	var imageSwitch    = __webpack_require__(17);
	var imageZoom      = __webpack_require__(18);
	// var scrollHidden   = require('_functions/_scroll-hidden');
	var scrollFixed    = __webpack_require__(19);
	var disabledSwitch = __webpack_require__(20);
	var flow           = __webpack_require__(21);
	var addContent     = __webpack_require__(22);
	var selectButton   = __webpack_require__(23);

	var caseStudy      = __webpack_require__(24);

	// var loading        = require('_functions/_loading');

	$(function() {
	  products();

	  accordiion();
	  anchorScroll();
	  dropdown();
	  modal();
	  toggle();
	  tab();
	  form();
	  formChange();
	  ellipsis();

	  menu();
	  imageSwitch();
	  imageZoom();
	  // scrollHidden();
	  disabledSwitch();
	  flow();
	  addContent();
	  selectButton();

	  caseStudy();
	  scrollFixed();
	  // loading();
	});


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

	/*===========================================
	    products
	===========================================*/
	module.exports = function() {

	  var basis      = '.js-products';
	  var semiorder  = '.js-products__semiorder';
	  var mainVisual = '.js-products__mainVisual';
	  var price      = '.js-products__price';
	  var haisou     = '.js-products__haisou';

	  var active  = 'is-active';
	  var clone   = 'is-clone';

	  /*-----------------------------------------*/

	  if($(basis).length) {

	    // レスポンシブ時に料金部分を移動
	    var semiorderDom = function() {
	      if (windowW <= breakPoint[0]) {
	        $(semiorder).insertAfter('.overview__detail');
	      } else
	      if (windowW >= breakPoint[0] + 1) {
	        $(semiorder).insertAfter('.overview__tag');
	      }

	      var thisWidth = $(window).width();
	      window.addEventListener("resize", function () {
	        if (thisWidth != $(window).width()) {
	          semiorderDom();
	          thisWidth = $(window).width();
	        }
	      });
	    }

	    // レスポンシブ時にメインビジュアル部分を移動
	    var mainVisualDom = function() {
	      if (windowW <= breakPoint[0]) {
	        // alert('bb')
	        $(mainVisual).insertAfter('.overview__tag');
	      } else
	      if (windowW >= breakPoint[0] + 1) {
	        // alert('aa')
	        if($('.promotion__detail').length) {
	          $(mainVisual).insertBefore('.promotion__detail');
	        } else {
	          $(mainVisual).insertBefore('.overview__detail');
	        }
	      }
	    };

	    // 入力項目に tabindex を付与する
	    var tabIndex = (function() {
	      var range = 'input[type="text"], input[type="checkbox"], select';
	      var notTarget = '#suu, #price, #total, .form__output, [tabindex="-1"]';
	      var target = $(basis).find(range).not(notTarget);
	      var targetNum = target.length;

	      $(target).each(function(i) {
	        $(this).attr('tabindex', i+1);
	      });
	      $('#suu').attr('tabindex', targetNum + 1);
	      $('.order__action .action__button').attr('tabindex', targetNum + 2);
	    }());

	    // 入力中はエンターキーを無効
	    var enterDisabled = (function () {
	      var range = 'input[type="text"]';
	      var target = $('.overview__information').find(range);

	      target.on('keydown', function(e) {
	        if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
	          return false;
	        } else {
	          return true;
	        }
	      });
	    }());

	    // スクロール時に料金部分を fixed するための調整
	    var fixedDomLayout = function() {
	      if (windowW <= breakPoint[0]) {
	        var fixed = '.overview__fixed';
	        var fixedH = $(fixed).outerHeight();

	        if($(fixed).length) {
	          $('.l-footer').css({
	            paddingBottom: fixedH
	          });
	          $('.l-gotop').css({
	            bottom: 14 + fixedH
	          });
	        }
	      } else {
	        $('.l-footer').css({
	          paddingBottom: 0
	        });
	        $('.l-gotop').css({
	          bottom: '1rem'
	        });
	      }
	    }

	    // スクロール時に料金部分を fixed
	    var fixedDom = function() {
	      var fixed = '.overview__fixed';
	      var priceInput = function(time) {
	        setTimeout(function(){
	          //var priceVal = $(price).val();
	          var priceVal = $('#total_price_tax').val();
	          $('.fixed__price p').html(priceVal);
	        }, time);
	      }
	      priceInput(200);

	      $(basis).find('input, select').on('change', function() {
	        priceInput(200);
	      });

	      $(basis).find('#input button').on('click', function() {
	        priceInput(200);
	      });

	      fixedDomLayout();
	    };

	    // 配送料をコピー
	    var haisouPrice = function() {
	      $('input, select').on('change', function() {
	        setTimeout(function() {
	          var haisouVal = $('#haisou_cost').val();
	          var areaVal = $('#area_cost').val();

	          $('#haisou_price').text(haisouVal);
	          $('#area_price').text(areaVal);
	        }, 50);
	      });
	    };


	    /*-----------------------------------------*/

	    var domEvent = function() {
	      return new Promise(function(resolve, reject) {
	        console.log('dom - start');
	        if($('.p-overview--semiorder').length) {
	          semiorderDom();
	        };
	        if(!$('body').hasClass('is-tb')) {
	          mainVisualDom();
	          fixedDom();
	        }
	        haisouPrice();
	        console.log('dom - end');
	        resolve();
	      });
	    }

	    var loadingEvent = function() {
	      return new Promise(function(resolve, reject) {
	        productsFlag = true;
	        loadingStop();
	        resolve();
	      });
	    }

	    $(document).ready(function(){
	      domEvent().then(loadingEvent);
	    });

	    // $.when(
	    //   console.log('products - start'),
	    //   domEvent(),
	    //   console.log('products - end')
	    // ).done(function(){
	    //   loadingFlag = true;
	    //   loadingStop();
	    // });


	    var resizeWidth = $(window).width();
	    $(window).on('resize', function() {
	      setTimeout(function() {
	        if(windowW !== resizeWidth) {
	          mainVisualDom();
	          fixedDomLayout();
	          resizeWidth = $(window).width();
	        }
	      },200);

	    });
	  };
	}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/*===========================================
	    accordion
	===========================================*/
	module.exports = function() {

	  var basis   = '.js-accordion';
	  var trigger = '.js-accordion__trigger';
	  var content = '.js-accordion__content';
	  var active  = 'is-active';
	  var speed   = 400;

	  /*-----------------------------------------*/

	  if($(basis).length) {

	    // デフォルトイベント
	    var defaultEvent = (function() {
	      // $(trigger).css({
	      //   cursor: 'pointer'
	      // });

	      // $(content).not('.' + active).hide();
	      // $(content).each(function() {
	      //   if(!$(content).hasClass(active)) {
	      //     $(this).hide();
	      //   }
	      // });
	    }());

	    // トグルイベント
	    var toggleEvent = function(t) {
	      var data = {
	        target: t.attr('data-target'),
	        group: t.closest(basis).attr('data-group'),
	        href: t.attr('href'),
	        type: t.closest(basis).attr('type')
	      };

	      // data-target、href の有無
	      if($.type(data.target) !== 'undefined' && data.target !== '') {
	        var target = '#' + data.target;
	      } else {
	        if($.type(data.href) !== 'undefined' && data.href !== '') {
	          var target = '#' + data.href;
	        } else {
	          var target = t.closest(basis).find(content);
	        }
	      }

	      // data-group の有無
	      if($.type(data.group) !== 'undefined' && data.group !== '') {
	        var groupTarget = $(basis + '[data-group="' + data.group + '"]');
	        if(!t.hasClass(active)) {
	          groupTarget.find(trigger).removeClass(active);
	          groupTarget.find(content).removeClass(active);
	        }
	      }

	      // 開閉、active クラスの追加
	      if(t.hasClass(active)) {
	        t.removeClass(active);
	      } else {
	        t.addClass(active);
	      }

	      // 開閉、active クラスの追加
	      if($(target).hasClass(active)) {
	        $(target)
	          .removeClass(active)
	          .slideUp(speed);
	      } else {
	        $(target)
	          .slideDown(speed)
	          .addClass(active);
	      }
	    };

	    /*-----------------------------------------*/

	    $(document).on('click', trigger, function(){
	      toggleEvent($(this));
	      return false;
	    });
	  };
	}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/*===========================================
	    anchorScroll
	===========================================*/
	module.exports = function() {

	  var trigger = '.js-anchorScroll';
	  var delay   = 0;
	  var speed   = 500;
	  var not     = 'is-not';

	  /*-----------------------------------------*/

	  var scrollEvent = function(t) {
	    var targetOffset = $(t).offset().top;
	    // console.log(targetOffset);
	    $('body').css({
	      overflow: 'hidden'
	    });
	    $('html').css({
	      overflow: 'auto'
	    });
	    $("html, body")
	      .stop()
	      .animate({
	        scrollTop: targetOffset - delay
	      }, speed);
	  };

	  /*-----------------------------------------*/

	  $(document).on('click', trigger + ':not(.' + not + ')', function(){
	    var split = $(this).attr('href').split('#');
	    var target = '#' + split[1];
	    scrollEvent(target);
	    return false;
	  });

	  // 読み込みの順序によるアンカーリンクの挙動を制御
	  $(window).on('load', function() {
	    var location = window.location.href;
	    if(location.indexOf('#') != -1) {
	      $(window).scrollTop(0);

	      setTimeout(function() {
	        var split = location.split('#');
	        var target = '#' + split[1];
	        scrollEvent(target);
	        return false;
	      }, 300);
	    }
	  });
	}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/*===========================================
	    dropdown
	===========================================*/
	module.exports = function() {

	  var basis   = '.js-dropdown';
	  var trigger = '.js-dropdown__trigger';
	  var content = '.js-dropdown__content';
	  var active  = 'is-active';

	  /*-----------------------------------------*/

	  if($(basis).length) {

	    // デフォルトイベント
	    var defaultEvent = (function() {
	    }());

	    // オープンイベント
	    var openEvent = function(t) {
	      var target = t;
	      var targetTrigger = target.closest(basis).find(trigger);
	      var targetContent = target.closest(basis).find('[class*="' + content.replace('.', '') + '"]');

	      target.addClass(active);
	      $(targetTrigger).addClass(active);
	      $(targetContent).addClass(active);
	    };

	    // クローズイベント
	    var closeEvent = function(t) {
	      var target = t;
	      var targetTrigger = target.closest(basis).find(trigger);
	      var targetContent = target.closest(basis).find('[class*="' + content.replace('.', '') + '"]');

	      target.removeClass(active);
	      $(targetTrigger).removeClass(active);
	      $(targetContent).removeClass(active);

	    };

	    /*-----------------------------------------*/

	    $(document).on('mouseenter', basis, function(){
	      openEvent($(this));
	      return false;
	    });

	    $(document).on('mouseleave', basis, function(){
	      closeEvent($(this));
	      return false;
	    });
	  };
	}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/*===========================================
	    modal
	===========================================*/
	module.exports = function() {

	  var basis        = '.js-modal';
	  var openTrigger  = '.js-modal__trigger--open';
	  var closeTrigger = '.js-modal__trigger--close';
	  var prev         = '.js-modal__prev';
	  var next         = '.js-modal__next';
	  var wrapper      = '.js-modal__wrapper';
	  var content      = '.js-modal__content';
	  var origin       = '.js-modal__origin';
	  var clone        = '.js-modal__clone';
	  var overlay      = '.js-modal__overlay';
	  var active       = 'is-active';

	  var typeImage    = '.js-modal--image';

	  /*-----------------------------------------*/

	  if($(basis).length || $(typeImage).length) {

	    // デフォルトイベント
	    var defaultEvent = (function() {
	      // wrapper 追加
	      $('#wrapper').after('<div class="' + wrapper.replace('.', '') + '"></div>');

	      // overlay 追加
	      $(wrapper).append('<div class="c-overlay ' + overlay.replace('.', '') + '"></div>');
	    }());

	    // モーダルポジション
	    var positionEvent = function(t) {
	      var modalW = $(t).outerWidth();
	      var modalH = $(t).outerHeight();

	      if(windowH >= modalH) {
	        $(t).css({
	          top: (windowH - modalH) / 2,
	          left: (windowW - modalW) / 2
	        });
	      } else
	      if(windowH <= modalH) {
	        $(t).css({
	          top: 40,
	          left: (windowW - modalW) / 2
	        });
	      }
	    };

	    // オープンイベント
	    var openEvent = function(t) {

	      var data = {
	        target: t.attr('data-target'),
	        group: t.attr('data-group'),
	        href: t.attr('href')
	      };

	      // data-target、href の有無
	      if($.type(data.target) !== 'undefined' && data.target !== '') {
	        var target = '#' + data.target;
	      } else {
	        if($.type(data.href) !== 'undefined' && data.href !== '') {
	          var target = '#' + data.href;
	        }
	      }

	      // 開閉、active クラスの追加
	      if(t.hasClass(active)) {
	        t.removeClass(active);
	      } else {
	        t.addClass(active);
	      }

	      // 表示
	      $.when(
	        $(wrapper).show(),
	        $(overlay).addClass(active),
	        $(target).show(),
	        positionEvent(target)
	      )
	      .done(function() {
	        setTimeout(function() {
	          $(target).addClass(active);
	        }, 200);
	      });

	      // モーダル表示時のスクロール制御
	      $('html, body').css({
	        overflow: 'hidden'
	      });
	    };

	    // クローズイベント
	    var closeEvent = function() {
	      $(content).removeClass(active);
	      setTimeout(function (){
	        $(overlay).removeClass(active);
	      }, 200);
	      $(openTrigger).removeClass(active);

	      setTimeout(function() {
	        $(content).hide();
	        $(wrapper).hide();
	      }, 600);

	      $('html').css({
	        overflow: 'auto'
	      });
	    };

	    // origin イベント
	    var originEvent = function(t) {
	      var data = {
	        target: t.attr('data-target'),
	        group: t.attr('data-group'),
	        href: t.attr('href')
	      };

	      // data-target、href の有無
	      if($.type(data.target) !== 'undefined' && data.target !== '') {
	        var originTarget = '#' + data.target;
	      } else {
	        if($.type(data.href) !== 'undefined' && data.href !== '') {
	          var originTarget = '#' + data.href;
	        }
	      }

	      if(!$(originTarget).hasClass(clone.replace('.', ''))) {
	        //modalCon 複製して modalWrap に追加
	        var targetId = $(originTarget).attr('id');
	        $(originTarget)
	          .removeAttr('id')
	          .addClass(origin.replace('.', ''))
	          .clone()
	          .prependTo(wrapper)
	          .attr('id', targetId)
	          .removeClass(origin.replace('.', ''))
	          .hide()
	          .addClass(clone.replace('.', ''))
	          .prepend('<a class="window__close ' + closeTrigger.replace('.', '') + '"><i class="c-icon--cross-black"></a>');
	        $('.l-main ' + originTarget).removeAttr('id');
	        $(origin + ' *').removeAttr('id');
	      }
	      setTimeout(function() {
	        openEvent(t);
	      }, 200);
	    };

	    // typeImage イベント
	    var typeImageEvent = function(t) {
	      var index = $(typeImage).index(t);

	      if(!$(t).hasClass(openTrigger.replace('.', ''))) {
	        $(t)
	          .attr('data-target', 'modalImage_' + index)
	          .addClass(openTrigger.replace('.', ''))
	          .clone()
	          .prependTo(wrapper)
	          .removeAttr('data-target href')
	          .removeClass(openTrigger.replace('.', ''))
	          .removeClass(typeImage.replace('.', ''))
	          .wrap('<div class="c-window--md js-modal__content"></>')
	            .parent()
	            .hide()
	            .addClass(clone.replace('.', ''))
	            .attr('id', 'modalImage_' + index)
	            .append('<a class="window__close ' + closeTrigger.replace('.', '') + '"><i class="c-icon--cross-black"></a>');
	      }
	      setTimeout(function() {
	        openEvent(t);
	      }, 200);
	    };

	    /*-----------------------------------------*/

	    // openTrigger 押下時
	    $(document).on('click', openTrigger, function(){
	      originEvent($(this));
	      return false;
	    });

	    // closeTrigger 押下時
	    $(document).on('click', closeTrigger, function(){
	      closeEvent();
	      return false;
	    });

	    $(document).on('click', typeImage, function() {
	      typeImageEvent($(this));
	      return false;
	    });

	    // overlay 押下時
	    $(document).on('click', overlay, function() {
	      closeEvent();
	      return false;
	    });

	    // ウィンドウリサイズ時
	    $(window).on('resize', function() {
	      var target = $(content + '.' + active);
	      if(target.length) {
	        positionEvent(target);
	      }
	    });
	  }
	}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/*===========================================
	    toggle
	===========================================*/
	module.exports = function() {

	  var basis   = '.js-toggle';
	  var trigger = '.js-toggle__trigger';
	  var content = '.js-toggle__content';
	  var active  = 'is-active';

	  /*-----------------------------------------*/

	  if($(basis).length) {

	    // デフォルトイベント
	    var defaultEvent = (function() {
	      $(trigger).css({
	        cursor: 'pointer'
	      });
	    }());

	    // トグルイベント
	    var toggleEvent = function(t) {
	      var data = {
	        target: t.attr('data-target'),
	        href: t.attr('href')
	      };

	      // data-target、href の有無
	      if($.type(data.target) !== 'undefined' && data.target !== '') {
	        var target = '#' + data.target;
	      } else {
	        if($.type(data.href) !== 'undefined' && data.href !== '') {
	          var target = '#' + data.href;
	        } else {
	          var target = t.closest(basis).find(content);
	        }
	      }

	      // 開閉、active クラスの追加
	      if(t.hasClass(active)) {
	        t.removeClass(active);
	      } else {
	        t.addClass(active);
	      }

	      // 開閉、active クラスの追加
	      if($(target).hasClass(active)) {
	        $(target).removeClass(active)
	      } else {
	        $(target).addClass(active);
	      }
	    };

	    /*-----------------------------------------*/

	    $(document).on('click', trigger, function(){
	      toggleEvent($(this));
	      return false;
	    });
	  };
	}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/*===========================================
	    tab
	===========================================*/
	module.exports = function() {

	  var basis      = '.js-tab';
	  var navigation = '.js-tab__navigation';
	  var trigger    = '.js-tab__trigger'
	  var content    = '.js-tab__content';
	  var item       = '.js-tab__item';
	  var active     = 'is-active';

	  /*-----------------------------------------*/

	  if($(basis).length) {

	    // デフォルトイベント
	    var defaultEvent = (function() {
	      $(trigger).css({
	        cursor: 'pointer'
	      });

	      $(navigation).each(function () {
	        if(!$(this).find(trigger).hasClass(active)) {
	          $(this).find(trigger).eq(0).addClass(active);
	        }
	      });

	      $(content).each(function () {
	        if(!$(this).find(item).hasClass(active)) {
	          $(this).find(item).eq(0).addClass(active);
	        }
	      });

	    }());

	    // トグルイベント
	    var toggleEvent = function(t) {
	      var data = {
	        target: t.attr('data-target'),
	        href: t.attr('href')
	      };

	      // data-target、href の有無
	      if($.type(data.target) !== 'undefined' && data.target !== '') {
	        var target = '#' + data.target;
	      } else {
	        if($.type(data.href) !== 'undefined' && data.href !== '') {
	          var target = '#' + data.href;
	        }
	      }

	      // タブナビゲーション、active クラスの追加
	      t.closest(navigation).find(trigger).removeClass(active);
	      if(!t.hasClass(active)) {
	        t.addClass(active);
	      }

	      // タブコンテンツ、active クラスの追加
	      $(target).closest(content).find(item).removeClass(active);
	      if(!$(target).hasClass(active)) {
	        $(target).addClass(active);
	      }
	    };

	    /*-----------------------------------------*/

	    $(document).on('click', trigger, function(){
	      toggleEvent($(this));
	      return false;
	    });
	  };
	}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	/*===========================================
	    form
	===========================================*/
	module.exports = function() {

	  var basis = '.c-form';

	  var file = '.form__file';
	  var number = '.form__number';

	  /*-----------------------------------------*/

	  if($(basis).length) {

	    /*-------------------------------------------
	        セミオーダーページの入力欄フォーカス時の処理
	    -------------------------------------------*/
	    $(basis).find('input, select').on("focusin", function(e) {
	      // breakPoint が1つの場合
	      if(breakPoint[1] < 0) {
	        if (windowW <= breakPoint[0]) {
	          $('.overview__fixed').hide();
	        } else
	        if (windowW >= breakPoint[0] + 1) {
	          // $('.l-header, .overview__fixed').hide();
	        }
	      }
	      else {
	      // breakPoint が2つの場合
	        if (windowW <= breakPoint[0]) {
	          $('.overview__fixed').hide();
	        } else
	        if ((windowW >= breakPoint[0] + 1) && (windowW <= breakPoint[1])) {
	          // $('.l-header, .overview__fixed').hide();
	        } else
	        if (windowW >= breakPoint[1] + 1) {
	          // $('.l-header, .overview__fixed').hide();
	        }
	      }
	    });

	    $(basis).find('input, select').on("focusout", function(e) {
	      // breakPoint が1つの場合
	      if(breakPoint[1] < 0) {
	        if (windowW <= breakPoint[0]) {
	          $('.l-header, .overview__fixed').show();
	        } else
	        if (windowW >= breakPoint[0] + 1) {
	          // $('.l-header, .overview__fixed').hide();
	        }
	      }
	      else {
	      // breakPoint が2つの場合
	        if (windowW <= breakPoint[0]) {
	          $('.l-header, .overview__fixed').show();
	        } else
	        if ((windowW >= breakPoint[0] + 1) && (windowW <= breakPoint[1])) {
	          // $('.l-header, .overview__fixed').hide();
	        } else
	        if (windowW >= breakPoint[1] + 1) {
	          // $('.l-header, .overview__fixed').hide();
	        }
	      }
	    });

	    /*-------------------------------------------
	        input[type="file"]
	    -------------------------------------------*/
	    if($(file).length) {

	      var fileEvent = (function() {
	        $('[type="file"]').on('change', function() {
	          var fileValue = $(this).prop('files')[0].name;
	          $(this).closest(file).find('.file__name').html(fileValue);
	        });

	        $(document).on('load', function() {
	          $('[type="file"]').each(function() {
	            if($(this).prop('files')[0].size !== 0) {
	              var fileValue = $(this).prop('files')[0].name;
	              $(this).closest(file).find('.file__name').html(fileValue);
	            }
	          });
	        });
	      }());

	      $('.file__button').on('click', function() {
	        $(this).closest(file).find('input[type="file"]').click();
	        return false;
	      });

	      $('[type="reset"]').on('click', function() {
	        $(file).find('.file__name').html('');
	      });
	    }


	    /*-------------------------------------------
	        input[type="number"]
	    -------------------------------------------*/
	    if($(number).length) {

	      var numberDefaultEvent = function() {
	        $(number).each(function() {
	          if(!$(this).hasClass('is-value')) {
	            var placeholder = $(this).find('input').attr('placeholder');
	            $(this).find('input').val(placeholder);
	          }
	        });
	      };

	      var numberPlusEvent = function(t) {
	        var input = $(t).closest(number).find('input');
	        var numberMax = input.data('max');
	        var numberValue = input.val();

	        if(numberMax - 1 >= numberValue) {
	          input.val(++numberValue).change();
	        }
	      };

	      var numberMinusEvent = function(t) {
	        var input = $(t).closest(number).find('input');
	        var numberMin = input.data('min');
	        var numberValue = input.val();

	        if(numberMin + 1 <= numberValue) {
	          input.val(--numberValue).change();
	        }
	      };

	      var numberInputEvent = function(t) {
	        var numberMax = $(t).data('max');
	        var numberMin = $(t).data('min');

	        if($(t).val() >= numberMax) {
	          $(t).val(numberMax);
	        }

	        if($(t).val() <= numberMin) {
	          $(t).val(numberMin);
	        }
	      }

	      $(window).on('load', function() {
	        numberDefaultEvent();
	      });

	      $(document).on('click', '.number__button--plus', function() {
	        numberPlusEvent($(this));
	        return false;
	      });

	      $(document).on('click', '.number__button--minus', function() {
	        numberMinusEvent($(this));
	        return false;
	      });

	      $(document).on('change', number + ' input', function() {
	        numberInputEvent($(this));
	        return false;
	      });

	      $('[type="reset"]').on('click', function() {
	        $(number).find('input').value('');
	      });
	    }
	  };
	}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	/*===========================================
	    formChange
	===========================================*/
	module.exports = function() {
	  var basis   = '.js-formChange';
	  var trigger = '.js-formChange__trigger';
	  var content = '.js-formChange__content';

	  var active  = 'is-active';

	  /*-----------------------------------------*/

	  if($(basis).length) {
	    // デフォルトイベント
	    var defaultEvent = (function() {
	      $(content).hide();
	      $(content + '.' + active).show();
	    }());

	    var changeEvent = function(t) {
	      var target = t.attr('data-target');
	      $(content)
	        .hide()
	        .removeClass(active);
	      $(content + '[data-type="' + target + '"]')
	        .show()
	        .addClass(active);
	    };

	    /*-----------------------------------------*/
	    $(document).on('click', trigger, function() {
	      changeEvent($(this));
	    });
	  };
	}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/*===========================================
	    ellipsis
	===========================================*/
	module.exports = function() {

	  var basis = '.js-ellipsis';
	  var ellipsisText = '…';

	  /*-----------------------------------------*/

	  var loadingEvent = function(){
	    $(basis).each(function(){
	      var maxCount = $(this).data('maxchar');
	      var wordCount = $(this).text().length;

	      if(maxCount < wordCount){
	        var text = $(this).html().substr(0,(maxCount - 1));
	        $(this).html(text + ' ' + ellipsisText);
	      }
	    });
	  };

	  $(window).on('ready', function() {
	    loadingEvent();
	  });
	}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/*===========================================
	    menu
	===========================================*/
	module.exports = function() {

	  var basis   = '.js-menu';
	  var trigger = '.js-menu__trigger';
	  var close   = '.js-menu__close';
	  var content = '.js-menu__content';
	  var overlay = '.js-menu__overlay';
	  var active  = 'is-active';

	  /*-----------------------------------------*/

	  if($(basis).length) {

	    // デフォルトイベント
	    var defaultEvent = (function() {
	      $(trigger).css({
	        cursor: 'pointer'
	      });

	      // overlay 追加
	      $(wrapper).append('<div class="c-overlay ' + overlay.replace('.', '') + '"></div>');
	    }());

	    // トグルイベント
	    var menuEvent = function(t) {
	      var data = {
	        target: t.attr('data-target'),
	        href: t.attr('href')
	      };

	      // data-target、href の有無
	      if($.type(data.target) !== 'undefined' && data.target !== '') {
	        var target = '#' + data.target;
	      } else {
	        if($.type(data.href) !== 'undefined' && data.href !== '') {
	          var target = '#' + data.href;
	        } else {
	          var target = t.closest(basis).find(content);
	        }
	      }

	      // 開閉、active クラスの追加
	      if($(trigger).hasClass(active)) {
	        $(trigger).removeClass(active);
	      } else {
	        $(trigger).addClass(active);
	      }

	      // 開閉、active クラスの追加
	      if($(target).hasClass(active)) {
	        $(target).removeClass(active);
	        $(overlay).removeClass(active);
	        $('html, body').css({
	          overflow: 'auto'
	        });
	      } else {
	        $(target).addClass(active);
	        $(overlay).addClass(active);
	        $('html, body').css({
	          overflow: 'hidden'
	        });
	      }
	    };

	    /*-----------------------------------------*/

	    $(document).on('click', trigger, function(){
	      menuEvent($(this));
	      return false;
	    });

	    $(document).on('click', close, function(){
	      menuEvent($(this));
	      return false;
	    });

	    $(document).on('click', overlay, function(){
	      menuEvent($(this));
	      return false;
	    });
	  };
	}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	/*===========================================
	    imageSwitch
	===========================================*/
	module.exports = function() {
	  var basis = '.js-imageSwitch';
	  var target = '.js-imageSwitch__target';
	  var thumb = '.js-imageSwitch__thumbnail';
	  var item = '.js-imageSwitch__item';
	  var speed = 500;

	  var active = 'is-active';

	  /*-----------------------------------------*/

	  if($(basis).length) {

	    // デフォルトの表示
	    var defaultEvent = (function() {
	      if($(target).children().length >= 2) {
	        $(target).children().each(function(i) {
	          $(this).attr('data-num', i);
	        });

	        if(!$(thumb).length) {
	          $(target).after('<div class="mainVisual__slider--thumbnail js-imageSwitch__thumbnail"></div>')
	          $(target).find(item).each(function(i) {
	            $(this)
	            .clone()
	            .appendTo(thumb)
	            .attr('data-num', i)
	            .removeClass(function(index, className) {
	              return (className.match(/\bjs-\S+/g) || []).join(' ');
	            })
	            .addClass(item.replace('.', '') + '--thumb')
	            .children()
	            .removeClass(function(index, className) {
	              return (className.match(/\bjs-\S+/g) || []).join(' ');
	            });
	          });
	        }

	        $(thumb).find(item).each(function(i) {
	          $(this).attr('data-num', i);
	          if($(this).find('iframe').length) {
	            $(this)
	              .append('<img src="http://placehold.it/600x420/000/fff.jpg?text=あ">')
	              .find('iframe')
	              .remove();
	              // $(this)
	              //   .removeClass(function(index, className) {
	              //     return (className.match(/\bjs-\S+/g) || []).join(' ');
	              //   })
	              //   .children()
	              //     .removeClass(function(index, className) {
	              //       return (className.match(/\bjs-\S+/g) || []).join(' ');
	              //     });
	          }
	        });
	      }
	    }());

	    var clickEvent = function(t) {
	      var num = t.attr('data-num');
	      $(target).children().removeClass(active);
	      $(target).children('[data-num="' + num + '"]').addClass(active);

	      $(thumb).find(item + '--thumb').removeClass(active);
	      $(t).addClass(active);
	    }

	    /*-----------------------------------------*/

	    $(document).on('click', thumb + ' ' + item + '--thumb', function(){
	      clickEvent($(this));
	      return false;
	    });
	  };
	}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	/*===========================================
	    imageZoom
	===========================================*/
	module.exports = function() {
	  var basis   = '.js-imageZoom';
	  var trigger = '.js-imageZoom__trigger';
	  var content = '.js-imageZoom__content';
	  var active  = 'is-active';

	  /*-----------------------------------------*/

	  if($(basis).length) {

	    // デフォルトイベント
	    var defaultEvent = (function() {
	      // $(basis).append('<div class="' + content.replace('.', '') + '"></div>');
	    }());

	    var openEvent = function(){

	    };

	    /*-----------------------------------------*/

	    // $(document).on('mouseenter', basis, function(){
	    //   openEvent($(this));
	    //   return false;
	    // });
	    //
	    // $(document).on('mouseleave', basis, function(){
	    //   closeEvent($(this));
	    //   return false;
	    // });
	  }
	}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	/*===========================================
	    scrollFixed
	===========================================*/
	module.exports = function() {

	  var basis    = '.js-scrollFixed';
	  var target   = '.js-scrollFixed__target';
	  var standard = '.js-scrollFixed__standard';
	  var fixed    = 'is-fixed';
	  var delay    = 32;

	  /*-----------------------------------------*/

	  if($(basis).length) {
	    var basisHeight;
	    var basisOffsetTop;
	    var basisOffsetLeft;

	    var standardWidth;
	    var standardHeight;
	    var standardOffsetTop;
	    var standardOffsetLeft;


	    var defaultEvent = (function() {
	    }());


	    var getValue = function() {
	      basisHeight = $(basis).outerHeight();
	      basisOffsetTop = $(basis).offset().top;
	      basisOffsetLeft = $(basis).offset().left;

	      standardWidth = $(standard).outerWidth();
	      standardHeight = $(standard).outerHeight();
	      standardOffsetTop = $(standard).offset().top;
	      standardOffsetLeft = $(standard).offset().left;
	    };


	    var scrollEvent = function(scrollValueY, scrollValueX) {
	      getValue();

	      $(target).each(function() {
	        var targetWidth = $(this).outerWidth();
	        var targetHeight = $(this).outerHeight();
	        var targetOffsetTop = $(this).offset().top;
	        var targetOffsetLeft = $(this).offset().left;
	        var targetType = $(this).data('type');

	        if(scrollValueY >= standardOffsetTop - delay) {

	          if(scrollValueY <= standardOffsetTop + standardHeight - targetHeight - delay) {
	            $(target).addClass(fixed);
	            $(target).css({
	              // position: 'fixed',
	              top: delay,
	              left: standardOffsetLeft + standardWidth - targetWidth - scrollValueX
	            });
	            if(targetType == 'left') {
	              $(target).css({
	                left: basisOffsetLeft - scrollValueX
	              });
	            } else
	            if(targetType == 'right') {
	              $(target).css({
	                left: standardOffsetLeft + standardWidth - targetWidth - scrollValueX
	              });
	            }
	          } else {
	            $(target).removeClass(fixed);
	            $(target).css({
	              // position: 'absolute',
	              top: standardHeight - targetHeight,
	            });
	            if(targetType == 'left') {
	              $(target).css({
	                left: 0
	              });
	            } else
	            if(targetType == 'right') {
	              $(target).css({
	                left: standardWidth - targetWidth
	              });
	            }
	          }

	        } else {
	          $(target).removeClass(fixed);
	          $(this).css({
	            // position: 'absolute',
	            top: 0,
	          });
	          if(targetType == 'left') {
	            $(target).css({
	              left: 0
	            });
	          } else
	          if(targetType == 'right') {
	            $(target).css({
	              left: standardWidth - targetWidth
	            });
	          }
	        }
	      });
	    };

	    /*-----------------------------------------*/

	    var domEvent = function() {
	      return new Promise(function(resolve, reject) {
	        console.log('fixed - start');
	        if (windowW >= breakPoint[0] + 1) {
	          var scrollValueY = $(window).scrollTop();
	          var scrollValueX = $(window).scrollLeft();
	          scrollEvent(scrollValueY, scrollValueX);
	        }
	        console.log('fixed - end');
	        resolve();
	      });
	    }

	    var loadingEvent = function() {
	      return new Promise(function(resolve, reject) {
	        fixedFlag = true;
	        loadingStop();
	        resolve();
	      });
	    }

	    $(document).ready(function(){
	      domEvent().then(loadingEvent);
	    });

	    $(window).on('resize scroll', function() {
	      if (windowW >= breakPoint[0] + 1) {
	        var scrollValueY = $(window).scrollTop();
	        var scrollValueX = $(window).scrollLeft();
	        scrollEvent(scrollValueY, scrollValueX);
	      }
	    });
	  };
	}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	/*===========================================
	    toggle
	===========================================*/
	module.exports = function() {

	  var basis    = '.js-disabledSwitch';
	  var trigger  = '.js-disabledSwitch__trigger';
	  var content  = '.js-disabledSwitch__content';
	  var disabled = 'is-disabled';

	  /*-----------------------------------------*/

	  if($(basis).length) {

	    // デフォルトイベント
	    var defaultEvent = (function() {
	      if(!$(content).hasClass(disabled)) {
	        $(content).addClass(disabled);
	      }

	      $(window).on('load', function() {
	        $(basis).each(function() {
	          if($(this).find(trigger).prop('checked')) {
	            $(this).find(content).removeClass(disabled);
	         }
	        });
	      });

	    }());

	    // トグルイベント
	    var toggleEvent = function(t) {
	      var target = t.closest(basis).find(content);

	      // 開閉、active クラスの追加
	      if($(target).hasClass(disabled)) {
	        $(target).removeClass(disabled);
	      } else {
	        $(target).addClass(disabled);
	      }
	    };

	    /*-----------------------------------------*/

	    $(document).on('change', trigger, function(){
	      toggleEvent($(this));
	      return false;
	    });
	  };
	}


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	/*===========================================
	    flow
	===========================================*/
	module.exports = function() {

	  var basis      = '.js-flow';
	  var navigation = '.js-flow__navigation';
	  var step       = '.js-flow__step';
	  var progress   = '.js-flow__progress';
	  var target     = '.js-flow__target';
	  var on         = 'is-on';
	  var delay      = 0;

	  /*-----------------------------------------*/

	  if($(basis).length) {
	    var navigationNum;
	    var targetNum;

	    // デフォルトイベント
	    var defaultEvent = (function(){
	      navigationNum = $(navigation + ':not(".is-clone")').find(step).children().length;
	      targetNum = $(target).children('section').length;
	    }());

	    // スクロールイベント
	    var scrollEvent = function(scrollValue) {
	      $(target).children('section').each(function() {
	        var thisNum = $(target).children().index(this);
	        var thisOffsetTop = $(this).offset().top;
	        // alert(thisNum);
	        if(scrollValue + 1 >= thisOffsetTop - delay) {
	          setTimeout(function() {
	            $(navigation).find(step).children().eq(thisNum).addClass(on);
	            $(navigation + ".is-clone").find(step).children().eq(thisNum).addClass(on);
	          }, 1);

	          var navigationW = 1 / (navigationNum - 1) * thisNum;
	          setTimeout(function() {
	            $(progress).css({
	              transform: 'scaleX(' + navigationW + ')'
	            });
	          }, 1);
	          setTimeout(function() {
	            $(navigation + ' .is-active').removeClass('is-active');
	          }, 500);
	        } else {
	          $(navigation).find(step).children().eq(thisNum).removeClass(on);
	          $(navigation + ".is-clone").find(step).children().eq(thisNum).removeClass(on);
	        }
	      });
	    }

	    $(window).on('scroll', function() {
	      var flug = true;
	      var scrollValue = $(window).scrollTop();
	      if(flug){
	        flug = false;
	        setTimeout(function(){
	          scrollEvent(scrollValue);
	          flug = true;
	          return flug;
	        }, 200);
	      }

	    });

	    $('body input').on('keydown', function(e) {
	      if((e.which && e.which === 9) || (e.keyCode && e.keyCode === 9)) {
	        var scrollValue = $(window).scrollTop();
	        scrollEvent(scrollValue);
	      }
	    });
	  }
	}


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	/*===========================================
	    add content
	===========================================*/
	module.exports = function() {

	  var basis         = '.js-addContent';
	  var addTrigger    = '.js-addContent__trigger--add';
	  var removeTrigger = '.js-addContent__trigger--remove';
	  var content       = '.js-addContent__content';

	  var active        = 'is-active';
	  var speed         = 400;

	  /*-----------------------------------------*/

	  if($(basis).length) {

	    var defaultEvent = (function(){
	      $(basis).each(function() {
	        var num = $(this).find(content).length;
	        $(this).attr('data-max', num);
	        $(this).find(content).eq(0).addClass(active);
	      })
	    }());

	    var clickEvent = function(t) {
	      t.closest(basis).each(function() {
	        var target = $(this).find(content + '.' + active);
	        var countNum = $(this).find(content + '.' + active).length;

	        if(countNum + 1 < $(this).attr('data-max')) {
	          addEvent(target);
	          // alert(countNum);
	        } else
	        if(countNum + 1 == $(this).attr('data-max'))  {
	          addEvent(target);
	          t.addClass('is-disabled');
	        }
	      });
	    };

	    var addEvent = function(t) {
	      t.next(content).addClass(active);
	    };

	  /*-----------------------------------------*/
	    $(document).on('click', addTrigger, function() {
	      clickEvent($(this));
	    });
	  };
	}


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	/*===========================================
	    selectButton
	===========================================*/
	module.exports = function() {

	  var basis   = '.js-selectButton';
	  var select   = '.js-selectButton__select';
	  var active = 'is-active'

	  /*-----------------------------------------*/

	  if($(basis).length) {

	    // デフォルトイベント
	    var defaultEvent = (function() {
	      $(basis).each(function() {
	        $(this).after('<div class="form__select ' +  select.replace('.', '') + '"><select onChange="location.href=value;"></select></div>');
	      });

	      $(basis + ' a').each(function() {
	        var url = $(this).attr('href');
	        var value = $(this).text();

	        if($(this).hasClass(active)) {
	          $(select + ' select').append('<option value="' + url + '" selected>'+ value +'</option>')
	        } else {
	          $(select + ' select').append('<option value="' + url + '">'+ value +'</option>')
	        }

	      });
	    }());

	    var resizeEvent = function() {
	      if (windowW <= breakPoint[0]) {
	        $(basis).hide();
	        $(select).show();
	      } else
	      if (windowW >= breakPoint[0] + 1) {
	        $(basis).show();
	        $(select).hide();
	      }
	    };

	    /*-----------------------------------------*/

	    $(window).on('load resize', function() {
	      resizeEvent();
	    });
	  };
	}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	/*===========================================
	    products
	===========================================*/
	module.exports = function() {

	  var basis      = '.js-caseStudy';
	  var product    = '.js-caseStudy__product';

	  /*-----------------------------------------*/

	  if($(basis).length) {

	    var productDom = function() {
	      if (windowW <= breakPoint[0]) {
	        $(product).insertAfter('.content__detail');
	      } else
	      if (windowW >= breakPoint[0] + 1) {
	        $(product).insertAfter('.information__title');
	      }
	    }


	    /*-----------------------------------------*/

	    $(window).on('load', function() {
	      productDom();
	    });

	    $(window).on('resize', function() {
	      productDom();
	    });
	  };
	}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDc1YTg1MTNkNjMwNTY3MWZkZjA/YTQ0YiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXNzZXRzL2phdmFzY3JpcHRzL2Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9hc3NldHMvamF2YXNjcmlwdHMvX2Z1bmN0aW9ucy9fcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fZnVuY3Rpb25zL19hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fZnVuY3Rpb25zL19hbmNob3Itc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9hc3NldHMvamF2YXNjcmlwdHMvX2Z1bmN0aW9ucy9fZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fZnVuY3Rpb25zL19tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXNzZXRzL2phdmFzY3JpcHRzL19mdW5jdGlvbnMvX3RvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXNzZXRzL2phdmFzY3JpcHRzL19mdW5jdGlvbnMvX3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXNzZXRzL2phdmFzY3JpcHRzL19mdW5jdGlvbnMvX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fZnVuY3Rpb25zL19mb3JtLWNoYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXNzZXRzL2phdmFzY3JpcHRzL19mdW5jdGlvbnMvX2VsbGlwc2lzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9hc3NldHMvamF2YXNjcmlwdHMvX2Z1bmN0aW9ucy9fbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXNzZXRzL2phdmFzY3JpcHRzL19mdW5jdGlvbnMvX2ltYWdlLXN3aXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXNzZXRzL2phdmFzY3JpcHRzL19mdW5jdGlvbnMvX2ltYWdlLXpvb20uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fZnVuY3Rpb25zL19zY3JvbGwtZml4ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fZnVuY3Rpb25zL19kaXNhYmxlZC1zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fZnVuY3Rpb25zL19mbG93LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9hc3NldHMvamF2YXNjcmlwdHMvX2Z1bmN0aW9ucy9fYWRkLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fZnVuY3Rpb25zL19zZWxlY3QtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9hc3NldHMvamF2YXNjcmlwdHMvX2Z1bmN0aW9ucy9fY2FzZS1zdHVkeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7Ozs7OztBQ3ZERDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVAsTUFBSztBQUNMO0FBQ0E7Ozs7Ozs7QUNoTUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVixNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOzs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxJQUFHO0FBQ0g7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOzs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7Ozs7OztBQ2pOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVAsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOzs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYLFVBQVM7QUFDVCxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBLFFBQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7QUN4S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOzs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFlBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSx1QkFBc0I7QUFDdEI7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxNQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7O0FBRUEsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7Ozs7OztBQzlJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTzs7QUFFUCxNQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOzs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFlBQVc7QUFDWDtBQUNBO0FBQ0EsWUFBVztBQUNYLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOzs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7Ozs7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlIQUF3SDtBQUN4SCxRQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUEsUUFBTztBQUNQLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSIsImZpbGUiOiJmdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA3NWE4NTEzZDYzMDU2NzFmZGYwIiwiLypAY2Nfb24gX2Q9ZG9jdW1lbnQ7ZXZhbCgndmFyIGRvY3VtZW50PV9kJylAKi9cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEZVTkNUSU9OXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbnZhciBwcm9kdWN0cyAgICAgICA9IHJlcXVpcmUoJ19mdW5jdGlvbnMvX3Byb2R1Y3RzJyk7XG5cbnZhciBhY2NvcmRpaW9uICAgICA9IHJlcXVpcmUoJ19mdW5jdGlvbnMvX2FjY29yZGlvbicpO1xudmFyIGFuY2hvclNjcm9sbCAgID0gcmVxdWlyZSgnX2Z1bmN0aW9ucy9fYW5jaG9yLXNjcm9sbCcpO1xudmFyIGRyb3Bkb3duICAgICAgID0gcmVxdWlyZSgnX2Z1bmN0aW9ucy9fZHJvcGRvd24nKTtcbnZhciBtb2RhbCAgICAgICAgICA9IHJlcXVpcmUoJ19mdW5jdGlvbnMvX21vZGFsJyk7XG52YXIgdG9nZ2xlICAgICAgICAgPSByZXF1aXJlKCdfZnVuY3Rpb25zL190b2dnbGUnKTtcbnZhciB0YWIgICAgICAgICAgICA9IHJlcXVpcmUoJ19mdW5jdGlvbnMvX3RhYicpO1xudmFyIGZvcm0gICAgICAgICAgID0gcmVxdWlyZSgnX2Z1bmN0aW9ucy9fZm9ybScpO1xudmFyIGZvcm1DaGFuZ2UgICAgID0gcmVxdWlyZSgnX2Z1bmN0aW9ucy9fZm9ybS1jaGFuZ2UnKTtcbnZhciBlbGxpcHNpcyAgICAgICA9IHJlcXVpcmUoJ19mdW5jdGlvbnMvX2VsbGlwc2lzJyk7XG5cbnZhciBtZW51ICAgICAgICAgICA9IHJlcXVpcmUoJ19mdW5jdGlvbnMvX21lbnUnKTtcbnZhciBpbWFnZVN3aXRjaCAgICA9IHJlcXVpcmUoJ19mdW5jdGlvbnMvX2ltYWdlLXN3aXRjaCcpO1xudmFyIGltYWdlWm9vbSAgICAgID0gcmVxdWlyZSgnX2Z1bmN0aW9ucy9faW1hZ2Utem9vbScpO1xuLy8gdmFyIHNjcm9sbEhpZGRlbiAgID0gcmVxdWlyZSgnX2Z1bmN0aW9ucy9fc2Nyb2xsLWhpZGRlbicpO1xudmFyIHNjcm9sbEZpeGVkICAgID0gcmVxdWlyZSgnX2Z1bmN0aW9ucy9fc2Nyb2xsLWZpeGVkJyk7XG52YXIgZGlzYWJsZWRTd2l0Y2ggPSByZXF1aXJlKCdfZnVuY3Rpb25zL19kaXNhYmxlZC1zd2l0Y2gnKTtcbnZhciBmbG93ICAgICAgICAgICA9IHJlcXVpcmUoJ19mdW5jdGlvbnMvX2Zsb3cnKTtcbnZhciBhZGRDb250ZW50ICAgICA9IHJlcXVpcmUoJ19mdW5jdGlvbnMvX2FkZC1jb250ZW50Jyk7XG52YXIgc2VsZWN0QnV0dG9uICAgPSByZXF1aXJlKCdfZnVuY3Rpb25zL19zZWxlY3QtYnV0dG9uJyk7XG5cbnZhciBjYXNlU3R1ZHkgICAgICA9IHJlcXVpcmUoJ19mdW5jdGlvbnMvX2Nhc2Utc3R1ZHknKTtcblxuLy8gdmFyIGxvYWRpbmcgICAgICAgID0gcmVxdWlyZSgnX2Z1bmN0aW9ucy9fbG9hZGluZycpO1xuXG4kKGZ1bmN0aW9uKCkge1xuICBwcm9kdWN0cygpO1xuXG4gIGFjY29yZGlpb24oKTtcbiAgYW5jaG9yU2Nyb2xsKCk7XG4gIGRyb3Bkb3duKCk7XG4gIG1vZGFsKCk7XG4gIHRvZ2dsZSgpO1xuICB0YWIoKTtcbiAgZm9ybSgpO1xuICBmb3JtQ2hhbmdlKCk7XG4gIGVsbGlwc2lzKCk7XG5cbiAgbWVudSgpO1xuICBpbWFnZVN3aXRjaCgpO1xuICBpbWFnZVpvb20oKTtcbiAgLy8gc2Nyb2xsSGlkZGVuKCk7XG4gIGRpc2FibGVkU3dpdGNoKCk7XG4gIGZsb3coKTtcbiAgYWRkQ29udGVudCgpO1xuICBzZWxlY3RCdXR0b24oKTtcblxuICBjYXNlU3R1ZHkoKTtcbiAgc2Nyb2xsRml4ZWQoKTtcbiAgLy8gbG9hZGluZygpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZS9hc3NldHMvamF2YXNjcmlwdHMvZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgcHJvZHVjdHNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICB2YXIgYmFzaXMgICAgICA9ICcuanMtcHJvZHVjdHMnO1xuICB2YXIgc2VtaW9yZGVyICA9ICcuanMtcHJvZHVjdHNfX3NlbWlvcmRlcic7XG4gIHZhciBtYWluVmlzdWFsID0gJy5qcy1wcm9kdWN0c19fbWFpblZpc3VhbCc7XG4gIHZhciBwcmljZSAgICAgID0gJy5qcy1wcm9kdWN0c19fcHJpY2UnO1xuICB2YXIgaGFpc291ICAgICA9ICcuanMtcHJvZHVjdHNfX2hhaXNvdSc7XG5cbiAgdmFyIGFjdGl2ZSAgPSAnaXMtYWN0aXZlJztcbiAgdmFyIGNsb25lICAgPSAnaXMtY2xvbmUnO1xuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIGlmKCQoYmFzaXMpLmxlbmd0aCkge1xuXG4gICAgLy8g44Os44K544Od44Oz44K344OW5pmC44Gr5paZ6YeR6YOo5YiG44KS56e75YuVXG4gICAgdmFyIHNlbWlvcmRlckRvbSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHdpbmRvd1cgPD0gYnJlYWtQb2ludFswXSkge1xuICAgICAgICAkKHNlbWlvcmRlcikuaW5zZXJ0QWZ0ZXIoJy5vdmVydmlld19fZGV0YWlsJyk7XG4gICAgICB9IGVsc2VcbiAgICAgIGlmICh3aW5kb3dXID49IGJyZWFrUG9pbnRbMF0gKyAxKSB7XG4gICAgICAgICQoc2VtaW9yZGVyKS5pbnNlcnRBZnRlcignLm92ZXJ2aWV3X190YWcnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRoaXNXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpc1dpZHRoICE9ICQod2luZG93KS53aWR0aCgpKSB7XG4gICAgICAgICAgc2VtaW9yZGVyRG9tKCk7XG4gICAgICAgICAgdGhpc1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIOODrOOCueODneODs+OCt+ODluaZguOBq+ODoeOCpOODs+ODk+OCuOODpeOCouODq+mDqOWIhuOCkuenu+WLlVxuICAgIHZhciBtYWluVmlzdWFsRG9tID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAod2luZG93VyA8PSBicmVha1BvaW50WzBdKSB7XG4gICAgICAgIC8vIGFsZXJ0KCdiYicpXG4gICAgICAgICQobWFpblZpc3VhbCkuaW5zZXJ0QWZ0ZXIoJy5vdmVydmlld19fdGFnJyk7XG4gICAgICB9IGVsc2VcbiAgICAgIGlmICh3aW5kb3dXID49IGJyZWFrUG9pbnRbMF0gKyAxKSB7XG4gICAgICAgIC8vIGFsZXJ0KCdhYScpXG4gICAgICAgIGlmKCQoJy5wcm9tb3Rpb25fX2RldGFpbCcpLmxlbmd0aCkge1xuICAgICAgICAgICQobWFpblZpc3VhbCkuaW5zZXJ0QmVmb3JlKCcucHJvbW90aW9uX19kZXRhaWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKG1haW5WaXN1YWwpLmluc2VydEJlZm9yZSgnLm92ZXJ2aWV3X19kZXRhaWwnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDlhaXlipvpoIXnm67jgasgdGFiaW5kZXgg44KS5LuY5LiO44GZ44KLXG4gICAgdmFyIHRhYkluZGV4ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJhbmdlID0gJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sIHNlbGVjdCc7XG4gICAgICB2YXIgbm90VGFyZ2V0ID0gJyNzdXUsICNwcmljZSwgI3RvdGFsLCAuZm9ybV9fb3V0cHV0LCBbdGFiaW5kZXg9XCItMVwiXSc7XG4gICAgICB2YXIgdGFyZ2V0ID0gJChiYXNpcykuZmluZChyYW5nZSkubm90KG5vdFRhcmdldCk7XG4gICAgICB2YXIgdGFyZ2V0TnVtID0gdGFyZ2V0Lmxlbmd0aDtcblxuICAgICAgJCh0YXJnZXQpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAkKHRoaXMpLmF0dHIoJ3RhYmluZGV4JywgaSsxKTtcbiAgICAgIH0pO1xuICAgICAgJCgnI3N1dScpLmF0dHIoJ3RhYmluZGV4JywgdGFyZ2V0TnVtICsgMSk7XG4gICAgICAkKCcub3JkZXJfX2FjdGlvbiAuYWN0aW9uX19idXR0b24nKS5hdHRyKCd0YWJpbmRleCcsIHRhcmdldE51bSArIDIpO1xuICAgIH0oKSk7XG5cbiAgICAvLyDlhaXlipvkuK3jga/jgqjjg7Pjgr/jg7zjgq3jg7zjgpLnhKHlirlcbiAgICB2YXIgZW50ZXJEaXNhYmxlZCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmFuZ2UgPSAnaW5wdXRbdHlwZT1cInRleHRcIl0nO1xuICAgICAgdmFyIHRhcmdldCA9ICQoJy5vdmVydmlld19faW5mb3JtYXRpb24nKS5maW5kKHJhbmdlKTtcblxuICAgICAgdGFyZ2V0Lm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoKGUud2hpY2ggJiYgZS53aGljaCA9PT0gMTMpIHx8IChlLmtleUNvZGUgJiYgZS5rZXlDb2RlID09PSAxMykpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0oKSk7XG5cbiAgICAvLyDjgrnjgq/jg63jg7zjg6vmmYLjgavmlpnph5Hpg6jliIbjgpIgZml4ZWQg44GZ44KL44Gf44KB44Gu6Kq/5pW0XG4gICAgdmFyIGZpeGVkRG9tTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAod2luZG93VyA8PSBicmVha1BvaW50WzBdKSB7XG4gICAgICAgIHZhciBmaXhlZCA9ICcub3ZlcnZpZXdfX2ZpeGVkJztcbiAgICAgICAgdmFyIGZpeGVkSCA9ICQoZml4ZWQpLm91dGVySGVpZ2h0KCk7XG5cbiAgICAgICAgaWYoJChmaXhlZCkubGVuZ3RoKSB7XG4gICAgICAgICAgJCgnLmwtZm9vdGVyJykuY3NzKHtcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IGZpeGVkSFxuICAgICAgICAgIH0pO1xuICAgICAgICAgICQoJy5sLWdvdG9wJykuY3NzKHtcbiAgICAgICAgICAgIGJvdHRvbTogMTQgKyBmaXhlZEhcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLmwtZm9vdGVyJykuY3NzKHtcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiAwXG4gICAgICAgIH0pO1xuICAgICAgICAkKCcubC1nb3RvcCcpLmNzcyh7XG4gICAgICAgICAgYm90dG9tOiAnMXJlbSdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g44K544Kv44Ot44O844Or5pmC44Gr5paZ6YeR6YOo5YiG44KSIGZpeGVkXG4gICAgdmFyIGZpeGVkRG9tID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZml4ZWQgPSAnLm92ZXJ2aWV3X19maXhlZCc7XG4gICAgICB2YXIgcHJpY2VJbnB1dCA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgIHZhciBwcmljZVZhbCA9ICQocHJpY2UpLnZhbCgpO1xuICAgICAgICAgICQoJy5maXhlZF9fcHJpY2UgcCcpLmh0bWwocHJpY2VWYWwpO1xuICAgICAgICB9LCB0aW1lKTtcbiAgICAgIH1cbiAgICAgIHByaWNlSW5wdXQoMjAwKTtcblxuICAgICAgJChiYXNpcykuZmluZCgnaW5wdXQsIHNlbGVjdCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcHJpY2VJbnB1dCgyMDApO1xuICAgICAgfSk7XG5cbiAgICAgICQoYmFzaXMpLmZpbmQoJyNpbnB1dCBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcHJpY2VJbnB1dCgyMDApO1xuICAgICAgfSk7XG5cbiAgICAgIGZpeGVkRG9tTGF5b3V0KCk7XG4gICAgfTtcblxuICAgIC8vIOmFjemAgeaWmeOCkuOCs+ODlOODvFxuICAgIHZhciBoYWlzb3VQcmljZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgJCgnaW5wdXQsIHNlbGVjdCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgaGFpc291VmFsID0gJCgnI2hhaXNvdV9jb3N0JykudmFsKCk7XG4gICAgICAgICAgdmFyIGFyZWFWYWwgPSAkKCcjYXJlYV9jb3N0JykudmFsKCk7XG5cbiAgICAgICAgICAkKCcjaGFpc291X3ByaWNlJykudGV4dChoYWlzb3VWYWwpO1xuICAgICAgICAgICQoJyNhcmVhX3ByaWNlJykudGV4dChhcmVhVmFsKTtcbiAgICAgICAgfSwgNTApO1xuICAgICAgfSk7XG4gICAgfTtcblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICB2YXIgZG9tRXZlbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RvbSAtIHN0YXJ0Jyk7XG4gICAgICAgIGlmKCQoJy5wLW92ZXJ2aWV3LS1zZW1pb3JkZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICBzZW1pb3JkZXJEb20oKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYoISQoJ2JvZHknKS5oYXNDbGFzcygnaXMtdGInKSkge1xuICAgICAgICAgIG1haW5WaXN1YWxEb20oKTtcbiAgICAgICAgICBmaXhlZERvbSgpO1xuICAgICAgICB9XG4gICAgICAgIGhhaXNvdVByaWNlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkb20gLSBlbmQnKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGxvYWRpbmdFdmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBwcm9kdWN0c0ZsYWcgPSB0cnVlO1xuICAgICAgICBsb2FkaW5nU3RvcCgpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgZG9tRXZlbnQoKS50aGVuKGxvYWRpbmdFdmVudCk7XG4gICAgfSk7XG5cbiAgICAvLyAkLndoZW4oXG4gICAgLy8gICBjb25zb2xlLmxvZygncHJvZHVjdHMgLSBzdGFydCcpLFxuICAgIC8vICAgZG9tRXZlbnQoKSxcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdwcm9kdWN0cyAtIGVuZCcpXG4gICAgLy8gKS5kb25lKGZ1bmN0aW9uKCl7XG4gICAgLy8gICBsb2FkaW5nRmxhZyA9IHRydWU7XG4gICAgLy8gICBsb2FkaW5nU3RvcCgpO1xuICAgIC8vIH0pO1xuXG5cbiAgICB2YXIgcmVzaXplV2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYod2luZG93VyAhPT0gcmVzaXplV2lkdGgpIHtcbiAgICAgICAgICBtYWluVmlzdWFsRG9tKCk7XG4gICAgICAgICAgZml4ZWREb21MYXlvdXQoKTtcbiAgICAgICAgICByZXNpemVXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICB9XG4gICAgICB9LDIwMCk7XG5cbiAgICB9KTtcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fZnVuY3Rpb25zL19wcm9kdWN0cy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBhY2NvcmRpb25cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICB2YXIgYmFzaXMgICA9ICcuanMtYWNjb3JkaW9uJztcbiAgdmFyIHRyaWdnZXIgPSAnLmpzLWFjY29yZGlvbl9fdHJpZ2dlcic7XG4gIHZhciBjb250ZW50ID0gJy5qcy1hY2NvcmRpb25fX2NvbnRlbnQnO1xuICB2YXIgYWN0aXZlICA9ICdpcy1hY3RpdmUnO1xuICB2YXIgc3BlZWQgICA9IDQwMDtcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBpZigkKGJhc2lzKS5sZW5ndGgpIHtcblxuICAgIC8vIOODh+ODleOCqeODq+ODiOOCpOODmeODs+ODiFxuICAgIHZhciBkZWZhdWx0RXZlbnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAvLyAkKHRyaWdnZXIpLmNzcyh7XG4gICAgICAvLyAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICAvLyB9KTtcblxuICAgICAgLy8gJChjb250ZW50KS5ub3QoJy4nICsgYWN0aXZlKS5oaWRlKCk7XG4gICAgICAvLyAkKGNvbnRlbnQpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAvLyAgIGlmKCEkKGNvbnRlbnQpLmhhc0NsYXNzKGFjdGl2ZSkpIHtcbiAgICAgIC8vICAgICAkKHRoaXMpLmhpZGUoKTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSk7XG4gICAgfSgpKTtcblxuICAgIC8vIOODiOOCsOODq+OCpOODmeODs+ODiFxuICAgIHZhciB0b2dnbGVFdmVudCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICB0YXJnZXQ6IHQuYXR0cignZGF0YS10YXJnZXQnKSxcbiAgICAgICAgZ3JvdXA6IHQuY2xvc2VzdChiYXNpcykuYXR0cignZGF0YS1ncm91cCcpLFxuICAgICAgICBocmVmOiB0LmF0dHIoJ2hyZWYnKSxcbiAgICAgICAgdHlwZTogdC5jbG9zZXN0KGJhc2lzKS5hdHRyKCd0eXBlJylcbiAgICAgIH07XG5cbiAgICAgIC8vIGRhdGEtdGFyZ2V044CBaHJlZiDjga7mnInnhKFcbiAgICAgIGlmKCQudHlwZShkYXRhLnRhcmdldCkgIT09ICd1bmRlZmluZWQnICYmIGRhdGEudGFyZ2V0ICE9PSAnJykge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gJyMnICsgZGF0YS50YXJnZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZigkLnR5cGUoZGF0YS5ocmVmKSAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YS5ocmVmICE9PSAnJykge1xuICAgICAgICAgIHZhciB0YXJnZXQgPSAnIycgKyBkYXRhLmhyZWY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHRhcmdldCA9IHQuY2xvc2VzdChiYXNpcykuZmluZChjb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBkYXRhLWdyb3VwIOOBruacieeEoVxuICAgICAgaWYoJC50eXBlKGRhdGEuZ3JvdXApICE9PSAndW5kZWZpbmVkJyAmJiBkYXRhLmdyb3VwICE9PSAnJykge1xuICAgICAgICB2YXIgZ3JvdXBUYXJnZXQgPSAkKGJhc2lzICsgJ1tkYXRhLWdyb3VwPVwiJyArIGRhdGEuZ3JvdXAgKyAnXCJdJyk7XG4gICAgICAgIGlmKCF0Lmhhc0NsYXNzKGFjdGl2ZSkpIHtcbiAgICAgICAgICBncm91cFRhcmdldC5maW5kKHRyaWdnZXIpLnJlbW92ZUNsYXNzKGFjdGl2ZSk7XG4gICAgICAgICAgZ3JvdXBUYXJnZXQuZmluZChjb250ZW50KS5yZW1vdmVDbGFzcyhhY3RpdmUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIOmWi+mWieOAgWFjdGl2ZSDjgq/jg6njgrnjga7ov73liqBcbiAgICAgIGlmKHQuaGFzQ2xhc3MoYWN0aXZlKSkge1xuICAgICAgICB0LnJlbW92ZUNsYXNzKGFjdGl2ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0LmFkZENsYXNzKGFjdGl2ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIOmWi+mWieOAgWFjdGl2ZSDjgq/jg6njgrnjga7ov73liqBcbiAgICAgIGlmKCQodGFyZ2V0KS5oYXNDbGFzcyhhY3RpdmUpKSB7XG4gICAgICAgICQodGFyZ2V0KVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhhY3RpdmUpXG4gICAgICAgICAgLnNsaWRlVXAoc3BlZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0YXJnZXQpXG4gICAgICAgICAgLnNsaWRlRG93bihzcGVlZClcbiAgICAgICAgICAuYWRkQ2xhc3MoYWN0aXZlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0cmlnZ2VyLCBmdW5jdGlvbigpe1xuICAgICAgdG9nZ2xlRXZlbnQoJCh0aGlzKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZS9hc3NldHMvamF2YXNjcmlwdHMvX2Z1bmN0aW9ucy9fYWNjb3JkaW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGFuY2hvclNjcm9sbFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXG4gIHZhciB0cmlnZ2VyID0gJy5qcy1hbmNob3JTY3JvbGwnO1xuICB2YXIgZGVsYXkgICA9IDA7XG4gIHZhciBzcGVlZCAgID0gNTAwO1xuICB2YXIgbm90ICAgICA9ICdpcy1ub3QnO1xuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIHZhciBzY3JvbGxFdmVudCA9IGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgdGFyZ2V0T2Zmc2V0ID0gJCh0KS5vZmZzZXQoKS50b3A7XG4gICAgLy8gY29uc29sZS5sb2codGFyZ2V0T2Zmc2V0KTtcbiAgICAkKCdib2R5JykuY3NzKHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH0pO1xuICAgICQoJ2h0bWwnKS5jc3Moe1xuICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgIH0pO1xuICAgICQoXCJodG1sLCBib2R5XCIpXG4gICAgICAuc3RvcCgpXG4gICAgICAuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0T2Zmc2V0IC0gZGVsYXlcbiAgICAgIH0sIHNwZWVkKTtcbiAgfTtcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0cmlnZ2VyICsgJzpub3QoLicgKyBub3QgKyAnKScsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHNwbGl0ID0gJCh0aGlzKS5hdHRyKCdocmVmJykuc3BsaXQoJyMnKTtcbiAgICB2YXIgdGFyZ2V0ID0gJyMnICsgc3BsaXRbMV07XG4gICAgc2Nyb2xsRXZlbnQodGFyZ2V0KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIC8vIOiqreOBv+i+vOOBv+OBrumghuW6j+OBq+OCiOOCi+OCouODs+OCq+ODvOODquODs+OCr+OBruaMmeWLleOCkuWItuW+oVxuICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBpZihsb2NhdGlvbi5pbmRleE9mKCcjJykgIT0gLTEpIHtcbiAgICAgICQod2luZG93KS5zY3JvbGxUb3AoMCk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGxvY2F0aW9uLnNwbGl0KCcjJyk7XG4gICAgICAgIHZhciB0YXJnZXQgPSAnIycgKyBzcGxpdFsxXTtcbiAgICAgICAgc2Nyb2xsRXZlbnQodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2UvYXNzZXRzL2phdmFzY3JpcHRzL19mdW5jdGlvbnMvX2FuY2hvci1zY3JvbGwuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZHJvcGRvd25cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICB2YXIgYmFzaXMgICA9ICcuanMtZHJvcGRvd24nO1xuICB2YXIgdHJpZ2dlciA9ICcuanMtZHJvcGRvd25fX3RyaWdnZXInO1xuICB2YXIgY29udGVudCA9ICcuanMtZHJvcGRvd25fX2NvbnRlbnQnO1xuICB2YXIgYWN0aXZlICA9ICdpcy1hY3RpdmUnO1xuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIGlmKCQoYmFzaXMpLmxlbmd0aCkge1xuXG4gICAgLy8g44OH44OV44Kp44Or44OI44Kk44OZ44Oz44OIXG4gICAgdmFyIGRlZmF1bHRFdmVudCA9IChmdW5jdGlvbigpIHtcbiAgICB9KCkpO1xuXG4gICAgLy8g44Kq44O844OX44Oz44Kk44OZ44Oz44OIXG4gICAgdmFyIG9wZW5FdmVudCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciB0YXJnZXQgPSB0O1xuICAgICAgdmFyIHRhcmdldFRyaWdnZXIgPSB0YXJnZXQuY2xvc2VzdChiYXNpcykuZmluZCh0cmlnZ2VyKTtcbiAgICAgIHZhciB0YXJnZXRDb250ZW50ID0gdGFyZ2V0LmNsb3Nlc3QoYmFzaXMpLmZpbmQoJ1tjbGFzcyo9XCInICsgY29udGVudC5yZXBsYWNlKCcuJywgJycpICsgJ1wiXScpO1xuXG4gICAgICB0YXJnZXQuYWRkQ2xhc3MoYWN0aXZlKTtcbiAgICAgICQodGFyZ2V0VHJpZ2dlcikuYWRkQ2xhc3MoYWN0aXZlKTtcbiAgICAgICQodGFyZ2V0Q29udGVudCkuYWRkQ2xhc3MoYWN0aXZlKTtcbiAgICB9O1xuXG4gICAgLy8g44Kv44Ot44O844K644Kk44OZ44Oz44OIXG4gICAgdmFyIGNsb3NlRXZlbnQgPSBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gdDtcbiAgICAgIHZhciB0YXJnZXRUcmlnZ2VyID0gdGFyZ2V0LmNsb3Nlc3QoYmFzaXMpLmZpbmQodHJpZ2dlcik7XG4gICAgICB2YXIgdGFyZ2V0Q29udGVudCA9IHRhcmdldC5jbG9zZXN0KGJhc2lzKS5maW5kKCdbY2xhc3MqPVwiJyArIGNvbnRlbnQucmVwbGFjZSgnLicsICcnKSArICdcIl0nKTtcblxuICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKGFjdGl2ZSk7XG4gICAgICAkKHRhcmdldFRyaWdnZXIpLnJlbW92ZUNsYXNzKGFjdGl2ZSk7XG4gICAgICAkKHRhcmdldENvbnRlbnQpLnJlbW92ZUNsYXNzKGFjdGl2ZSk7XG5cbiAgICB9O1xuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAkKGRvY3VtZW50KS5vbignbW91c2VlbnRlcicsIGJhc2lzLCBmdW5jdGlvbigpe1xuICAgICAgb3BlbkV2ZW50KCQodGhpcykpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ21vdXNlbGVhdmUnLCBiYXNpcywgZnVuY3Rpb24oKXtcbiAgICAgIGNsb3NlRXZlbnQoJCh0aGlzKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZS9hc3NldHMvamF2YXNjcmlwdHMvX2Z1bmN0aW9ucy9fZHJvcGRvd24uanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgbW9kYWxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICB2YXIgYmFzaXMgICAgICAgID0gJy5qcy1tb2RhbCc7XG4gIHZhciBvcGVuVHJpZ2dlciAgPSAnLmpzLW1vZGFsX190cmlnZ2VyLS1vcGVuJztcbiAgdmFyIGNsb3NlVHJpZ2dlciA9ICcuanMtbW9kYWxfX3RyaWdnZXItLWNsb3NlJztcbiAgdmFyIHByZXYgICAgICAgICA9ICcuanMtbW9kYWxfX3ByZXYnO1xuICB2YXIgbmV4dCAgICAgICAgID0gJy5qcy1tb2RhbF9fbmV4dCc7XG4gIHZhciB3cmFwcGVyICAgICAgPSAnLmpzLW1vZGFsX193cmFwcGVyJztcbiAgdmFyIGNvbnRlbnQgICAgICA9ICcuanMtbW9kYWxfX2NvbnRlbnQnO1xuICB2YXIgb3JpZ2luICAgICAgID0gJy5qcy1tb2RhbF9fb3JpZ2luJztcbiAgdmFyIGNsb25lICAgICAgICA9ICcuanMtbW9kYWxfX2Nsb25lJztcbiAgdmFyIG92ZXJsYXkgICAgICA9ICcuanMtbW9kYWxfX292ZXJsYXknO1xuICB2YXIgYWN0aXZlICAgICAgID0gJ2lzLWFjdGl2ZSc7XG5cbiAgdmFyIHR5cGVJbWFnZSAgICA9ICcuanMtbW9kYWwtLWltYWdlJztcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBpZigkKGJhc2lzKS5sZW5ndGggfHwgJCh0eXBlSW1hZ2UpLmxlbmd0aCkge1xuXG4gICAgLy8g44OH44OV44Kp44Or44OI44Kk44OZ44Oz44OIXG4gICAgdmFyIGRlZmF1bHRFdmVudCA9IChmdW5jdGlvbigpIHtcbiAgICAgIC8vIHdyYXBwZXIg6L+95YqgXG4gICAgICAkKCcjd3JhcHBlcicpLmFmdGVyKCc8ZGl2IGNsYXNzPVwiJyArIHdyYXBwZXIucmVwbGFjZSgnLicsICcnKSArICdcIj48L2Rpdj4nKTtcblxuICAgICAgLy8gb3ZlcmxheSDov73liqBcbiAgICAgICQod3JhcHBlcikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiYy1vdmVybGF5ICcgKyBvdmVybGF5LnJlcGxhY2UoJy4nLCAnJykgKyAnXCI+PC9kaXY+Jyk7XG4gICAgfSgpKTtcblxuICAgIC8vIOODouODvOODgOODq+ODneOCuOOCt+ODp+ODs1xuICAgIHZhciBwb3NpdGlvbkV2ZW50ID0gZnVuY3Rpb24odCkge1xuICAgICAgdmFyIG1vZGFsVyA9ICQodCkub3V0ZXJXaWR0aCgpO1xuICAgICAgdmFyIG1vZGFsSCA9ICQodCkub3V0ZXJIZWlnaHQoKTtcblxuICAgICAgaWYod2luZG93SCA+PSBtb2RhbEgpIHtcbiAgICAgICAgJCh0KS5jc3Moe1xuICAgICAgICAgIHRvcDogKHdpbmRvd0ggLSBtb2RhbEgpIC8gMixcbiAgICAgICAgICBsZWZ0OiAod2luZG93VyAtIG1vZGFsVykgLyAyXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlXG4gICAgICBpZih3aW5kb3dIIDw9IG1vZGFsSCkge1xuICAgICAgICAkKHQpLmNzcyh7XG4gICAgICAgICAgdG9wOiA0MCxcbiAgICAgICAgICBsZWZ0OiAod2luZG93VyAtIG1vZGFsVykgLyAyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDjgqrjg7zjg5fjg7PjgqTjg5njg7Pjg4hcbiAgICB2YXIgb3BlbkV2ZW50ID0gZnVuY3Rpb24odCkge1xuXG4gICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgdGFyZ2V0OiB0LmF0dHIoJ2RhdGEtdGFyZ2V0JyksXG4gICAgICAgIGdyb3VwOiB0LmF0dHIoJ2RhdGEtZ3JvdXAnKSxcbiAgICAgICAgaHJlZjogdC5hdHRyKCdocmVmJylcbiAgICAgIH07XG5cbiAgICAgIC8vIGRhdGEtdGFyZ2V044CBaHJlZiDjga7mnInnhKFcbiAgICAgIGlmKCQudHlwZShkYXRhLnRhcmdldCkgIT09ICd1bmRlZmluZWQnICYmIGRhdGEudGFyZ2V0ICE9PSAnJykge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gJyMnICsgZGF0YS50YXJnZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZigkLnR5cGUoZGF0YS5ocmVmKSAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YS5ocmVmICE9PSAnJykge1xuICAgICAgICAgIHZhciB0YXJnZXQgPSAnIycgKyBkYXRhLmhyZWY7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8g6ZaL6ZaJ44CBYWN0aXZlIOOCr+ODqeOCueOBrui/veWKoFxuICAgICAgaWYodC5oYXNDbGFzcyhhY3RpdmUpKSB7XG4gICAgICAgIHQucmVtb3ZlQ2xhc3MoYWN0aXZlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHQuYWRkQ2xhc3MoYWN0aXZlKTtcbiAgICAgIH1cblxuICAgICAgLy8g6KGo56S6XG4gICAgICAkLndoZW4oXG4gICAgICAgICQod3JhcHBlcikuc2hvdygpLFxuICAgICAgICAkKG92ZXJsYXkpLmFkZENsYXNzKGFjdGl2ZSksXG4gICAgICAgICQodGFyZ2V0KS5zaG93KCksXG4gICAgICAgIHBvc2l0aW9uRXZlbnQodGFyZ2V0KVxuICAgICAgKVxuICAgICAgLmRvbmUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0YXJnZXQpLmFkZENsYXNzKGFjdGl2ZSk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgICB9KTtcblxuICAgICAgLy8g44Oi44O844OA44Or6KGo56S65pmC44Gu44K544Kv44Ot44O844Or5Yi25b6hXG4gICAgICAkKCdodG1sLCBib2R5JykuY3NzKHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8g44Kv44Ot44O844K644Kk44OZ44Oz44OIXG4gICAgdmFyIGNsb3NlRXZlbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICQoY29udGVudCkucmVtb3ZlQ2xhc3MoYWN0aXZlKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCl7XG4gICAgICAgICQob3ZlcmxheSkucmVtb3ZlQ2xhc3MoYWN0aXZlKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgICAkKG9wZW5UcmlnZ2VyKS5yZW1vdmVDbGFzcyhhY3RpdmUpO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAkKGNvbnRlbnQpLmhpZGUoKTtcbiAgICAgICAgJCh3cmFwcGVyKS5oaWRlKCk7XG4gICAgICB9LCA2MDApO1xuXG4gICAgICAkKCdodG1sJykuY3NzKHtcbiAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIG9yaWdpbiDjgqTjg5njg7Pjg4hcbiAgICB2YXIgb3JpZ2luRXZlbnQgPSBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgdGFyZ2V0OiB0LmF0dHIoJ2RhdGEtdGFyZ2V0JyksXG4gICAgICAgIGdyb3VwOiB0LmF0dHIoJ2RhdGEtZ3JvdXAnKSxcbiAgICAgICAgaHJlZjogdC5hdHRyKCdocmVmJylcbiAgICAgIH07XG5cbiAgICAgIC8vIGRhdGEtdGFyZ2V044CBaHJlZiDjga7mnInnhKFcbiAgICAgIGlmKCQudHlwZShkYXRhLnRhcmdldCkgIT09ICd1bmRlZmluZWQnICYmIGRhdGEudGFyZ2V0ICE9PSAnJykge1xuICAgICAgICB2YXIgb3JpZ2luVGFyZ2V0ID0gJyMnICsgZGF0YS50YXJnZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZigkLnR5cGUoZGF0YS5ocmVmKSAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YS5ocmVmICE9PSAnJykge1xuICAgICAgICAgIHZhciBvcmlnaW5UYXJnZXQgPSAnIycgKyBkYXRhLmhyZWY7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoISQob3JpZ2luVGFyZ2V0KS5oYXNDbGFzcyhjbG9uZS5yZXBsYWNlKCcuJywgJycpKSkge1xuICAgICAgICAvL21vZGFsQ29uIOikh+ijveOBl+OBpiBtb2RhbFdyYXAg44Gr6L+95YqgXG4gICAgICAgIHZhciB0YXJnZXRJZCA9ICQob3JpZ2luVGFyZ2V0KS5hdHRyKCdpZCcpO1xuICAgICAgICAkKG9yaWdpblRhcmdldClcbiAgICAgICAgICAucmVtb3ZlQXR0cignaWQnKVxuICAgICAgICAgIC5hZGRDbGFzcyhvcmlnaW4ucmVwbGFjZSgnLicsICcnKSlcbiAgICAgICAgICAuY2xvbmUoKVxuICAgICAgICAgIC5wcmVwZW5kVG8od3JhcHBlcilcbiAgICAgICAgICAuYXR0cignaWQnLCB0YXJnZXRJZClcbiAgICAgICAgICAucmVtb3ZlQ2xhc3Mob3JpZ2luLnJlcGxhY2UoJy4nLCAnJykpXG4gICAgICAgICAgLmhpZGUoKVxuICAgICAgICAgIC5hZGRDbGFzcyhjbG9uZS5yZXBsYWNlKCcuJywgJycpKVxuICAgICAgICAgIC5wcmVwZW5kKCc8YSBjbGFzcz1cIndpbmRvd19fY2xvc2UgJyArIGNsb3NlVHJpZ2dlci5yZXBsYWNlKCcuJywgJycpICsgJ1wiPjxpIGNsYXNzPVwiYy1pY29uLS1jcm9zcy1ibGFja1wiPjwvYT4nKTtcbiAgICAgICAgJCgnLmwtbWFpbiAnICsgb3JpZ2luVGFyZ2V0KS5yZW1vdmVBdHRyKCdpZCcpO1xuICAgICAgICAkKG9yaWdpbiArICcgKicpLnJlbW92ZUF0dHIoJ2lkJyk7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBvcGVuRXZlbnQodCk7XG4gICAgICB9LCAyMDApO1xuICAgIH07XG5cbiAgICAvLyB0eXBlSW1hZ2Ug44Kk44OZ44Oz44OIXG4gICAgdmFyIHR5cGVJbWFnZUV2ZW50ID0gZnVuY3Rpb24odCkge1xuICAgICAgdmFyIGluZGV4ID0gJCh0eXBlSW1hZ2UpLmluZGV4KHQpO1xuXG4gICAgICBpZighJCh0KS5oYXNDbGFzcyhvcGVuVHJpZ2dlci5yZXBsYWNlKCcuJywgJycpKSkge1xuICAgICAgICAkKHQpXG4gICAgICAgICAgLmF0dHIoJ2RhdGEtdGFyZ2V0JywgJ21vZGFsSW1hZ2VfJyArIGluZGV4KVxuICAgICAgICAgIC5hZGRDbGFzcyhvcGVuVHJpZ2dlci5yZXBsYWNlKCcuJywgJycpKVxuICAgICAgICAgIC5jbG9uZSgpXG4gICAgICAgICAgLnByZXBlbmRUbyh3cmFwcGVyKVxuICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXRhcmdldCBocmVmJylcbiAgICAgICAgICAucmVtb3ZlQ2xhc3Mob3BlblRyaWdnZXIucmVwbGFjZSgnLicsICcnKSlcbiAgICAgICAgICAucmVtb3ZlQ2xhc3ModHlwZUltYWdlLnJlcGxhY2UoJy4nLCAnJykpXG4gICAgICAgICAgLndyYXAoJzxkaXYgY2xhc3M9XCJjLXdpbmRvdy0tbWQganMtbW9kYWxfX2NvbnRlbnRcIj48Lz4nKVxuICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAuaGlkZSgpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoY2xvbmUucmVwbGFjZSgnLicsICcnKSlcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsICdtb2RhbEltYWdlXycgKyBpbmRleClcbiAgICAgICAgICAgIC5hcHBlbmQoJzxhIGNsYXNzPVwid2luZG93X19jbG9zZSAnICsgY2xvc2VUcmlnZ2VyLnJlcGxhY2UoJy4nLCAnJykgKyAnXCI+PGkgY2xhc3M9XCJjLWljb24tLWNyb3NzLWJsYWNrXCI+PC9hPicpO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgb3BlbkV2ZW50KHQpO1xuICAgICAgfSwgMjAwKTtcbiAgICB9O1xuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAvLyBvcGVuVHJpZ2dlciDmirzkuIvmmYJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBvcGVuVHJpZ2dlciwgZnVuY3Rpb24oKXtcbiAgICAgIG9yaWdpbkV2ZW50KCQodGhpcykpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gY2xvc2VUcmlnZ2VyIOaKvOS4i+aZglxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGNsb3NlVHJpZ2dlciwgZnVuY3Rpb24oKXtcbiAgICAgIGNsb3NlRXZlbnQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHR5cGVJbWFnZSwgZnVuY3Rpb24oKSB7XG4gICAgICB0eXBlSW1hZ2VFdmVudCgkKHRoaXMpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIG92ZXJsYXkg5oq85LiL5pmCXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgb3ZlcmxheSwgZnVuY3Rpb24oKSB7XG4gICAgICBjbG9zZUV2ZW50KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyDjgqbjgqPjg7Pjg4njgqbjg6rjgrXjgqTjgrrmmYJcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRhcmdldCA9ICQoY29udGVudCArICcuJyArIGFjdGl2ZSk7XG4gICAgICBpZih0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgIHBvc2l0aW9uRXZlbnQodGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2UvYXNzZXRzL2phdmFzY3JpcHRzL19mdW5jdGlvbnMvX21vZGFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICB0b2dnbGVcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICB2YXIgYmFzaXMgICA9ICcuanMtdG9nZ2xlJztcbiAgdmFyIHRyaWdnZXIgPSAnLmpzLXRvZ2dsZV9fdHJpZ2dlcic7XG4gIHZhciBjb250ZW50ID0gJy5qcy10b2dnbGVfX2NvbnRlbnQnO1xuICB2YXIgYWN0aXZlICA9ICdpcy1hY3RpdmUnO1xuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIGlmKCQoYmFzaXMpLmxlbmd0aCkge1xuXG4gICAgLy8g44OH44OV44Kp44Or44OI44Kk44OZ44Oz44OIXG4gICAgdmFyIGRlZmF1bHRFdmVudCA9IChmdW5jdGlvbigpIHtcbiAgICAgICQodHJpZ2dlcikuY3NzKHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0pO1xuICAgIH0oKSk7XG5cbiAgICAvLyDjg4jjgrDjg6vjgqTjg5njg7Pjg4hcbiAgICB2YXIgdG9nZ2xlRXZlbnQgPSBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgdGFyZ2V0OiB0LmF0dHIoJ2RhdGEtdGFyZ2V0JyksXG4gICAgICAgIGhyZWY6IHQuYXR0cignaHJlZicpXG4gICAgICB9O1xuXG4gICAgICAvLyBkYXRhLXRhcmdldOOAgWhyZWYg44Gu5pyJ54ShXG4gICAgICBpZigkLnR5cGUoZGF0YS50YXJnZXQpICE9PSAndW5kZWZpbmVkJyAmJiBkYXRhLnRhcmdldCAhPT0gJycpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9ICcjJyArIGRhdGEudGFyZ2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYoJC50eXBlKGRhdGEuaHJlZikgIT09ICd1bmRlZmluZWQnICYmIGRhdGEuaHJlZiAhPT0gJycpIHtcbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gJyMnICsgZGF0YS5ocmVmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0YXJnZXQgPSB0LmNsb3Nlc3QoYmFzaXMpLmZpbmQoY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8g6ZaL6ZaJ44CBYWN0aXZlIOOCr+ODqeOCueOBrui/veWKoFxuICAgICAgaWYodC5oYXNDbGFzcyhhY3RpdmUpKSB7XG4gICAgICAgIHQucmVtb3ZlQ2xhc3MoYWN0aXZlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHQuYWRkQ2xhc3MoYWN0aXZlKTtcbiAgICAgIH1cblxuICAgICAgLy8g6ZaL6ZaJ44CBYWN0aXZlIOOCr+ODqeOCueOBrui/veWKoFxuICAgICAgaWYoJCh0YXJnZXQpLmhhc0NsYXNzKGFjdGl2ZSkpIHtcbiAgICAgICAgJCh0YXJnZXQpLnJlbW92ZUNsYXNzKGFjdGl2ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQodGFyZ2V0KS5hZGRDbGFzcyhhY3RpdmUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRyaWdnZXIsIGZ1bmN0aW9uKCl7XG4gICAgICB0b2dnbGVFdmVudCgkKHRoaXMpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fZnVuY3Rpb25zL190b2dnbGUuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHRhYlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXG4gIHZhciBiYXNpcyAgICAgID0gJy5qcy10YWInO1xuICB2YXIgbmF2aWdhdGlvbiA9ICcuanMtdGFiX19uYXZpZ2F0aW9uJztcbiAgdmFyIHRyaWdnZXIgICAgPSAnLmpzLXRhYl9fdHJpZ2dlcidcbiAgdmFyIGNvbnRlbnQgICAgPSAnLmpzLXRhYl9fY29udGVudCc7XG4gIHZhciBpdGVtICAgICAgID0gJy5qcy10YWJfX2l0ZW0nO1xuICB2YXIgYWN0aXZlICAgICA9ICdpcy1hY3RpdmUnO1xuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIGlmKCQoYmFzaXMpLmxlbmd0aCkge1xuXG4gICAgLy8g44OH44OV44Kp44Or44OI44Kk44OZ44Oz44OIXG4gICAgdmFyIGRlZmF1bHRFdmVudCA9IChmdW5jdGlvbigpIHtcbiAgICAgICQodHJpZ2dlcikuY3NzKHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0pO1xuXG4gICAgICAkKG5hdmlnYXRpb24pLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZighJCh0aGlzKS5maW5kKHRyaWdnZXIpLmhhc0NsYXNzKGFjdGl2ZSkpIHtcbiAgICAgICAgICAkKHRoaXMpLmZpbmQodHJpZ2dlcikuZXEoMCkuYWRkQ2xhc3MoYWN0aXZlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgICQoY29udGVudCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCEkKHRoaXMpLmZpbmQoaXRlbSkuaGFzQ2xhc3MoYWN0aXZlKSkge1xuICAgICAgICAgICQodGhpcykuZmluZChpdGVtKS5lcSgwKS5hZGRDbGFzcyhhY3RpdmUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH0oKSk7XG5cbiAgICAvLyDjg4jjgrDjg6vjgqTjg5njg7Pjg4hcbiAgICB2YXIgdG9nZ2xlRXZlbnQgPSBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgdGFyZ2V0OiB0LmF0dHIoJ2RhdGEtdGFyZ2V0JyksXG4gICAgICAgIGhyZWY6IHQuYXR0cignaHJlZicpXG4gICAgICB9O1xuXG4gICAgICAvLyBkYXRhLXRhcmdldOOAgWhyZWYg44Gu5pyJ54ShXG4gICAgICBpZigkLnR5cGUoZGF0YS50YXJnZXQpICE9PSAndW5kZWZpbmVkJyAmJiBkYXRhLnRhcmdldCAhPT0gJycpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9ICcjJyArIGRhdGEudGFyZ2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYoJC50eXBlKGRhdGEuaHJlZikgIT09ICd1bmRlZmluZWQnICYmIGRhdGEuaHJlZiAhPT0gJycpIHtcbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gJyMnICsgZGF0YS5ocmVmO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIOOCv+ODluODiuODk+OCsuODvOOCt+ODp+ODs+OAgWFjdGl2ZSDjgq/jg6njgrnjga7ov73liqBcbiAgICAgIHQuY2xvc2VzdChuYXZpZ2F0aW9uKS5maW5kKHRyaWdnZXIpLnJlbW92ZUNsYXNzKGFjdGl2ZSk7XG4gICAgICBpZighdC5oYXNDbGFzcyhhY3RpdmUpKSB7XG4gICAgICAgIHQuYWRkQ2xhc3MoYWN0aXZlKTtcbiAgICAgIH1cblxuICAgICAgLy8g44K/44OW44Kz44Oz44OG44Oz44OE44CBYWN0aXZlIOOCr+ODqeOCueOBrui/veWKoFxuICAgICAgJCh0YXJnZXQpLmNsb3Nlc3QoY29udGVudCkuZmluZChpdGVtKS5yZW1vdmVDbGFzcyhhY3RpdmUpO1xuICAgICAgaWYoISQodGFyZ2V0KS5oYXNDbGFzcyhhY3RpdmUpKSB7XG4gICAgICAgICQodGFyZ2V0KS5hZGRDbGFzcyhhY3RpdmUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRyaWdnZXIsIGZ1bmN0aW9uKCl7XG4gICAgICB0b2dnbGVFdmVudCgkKHRoaXMpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fZnVuY3Rpb25zL190YWIuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGZvcm1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICB2YXIgYmFzaXMgPSAnLmMtZm9ybSc7XG5cbiAgdmFyIGZpbGUgPSAnLmZvcm1fX2ZpbGUnO1xuICB2YXIgbnVtYmVyID0gJy5mb3JtX19udW1iZXInO1xuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIGlmKCQoYmFzaXMpLmxlbmd0aCkge1xuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIOOCu+ODn+OCquODvOODgOODvOODmuODvOOCuOOBruWFpeWKm+ashOODleOCqeODvOOCq+OCueaZguOBruWHpueQhlxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICQoYmFzaXMpLmZpbmQoJ2lucHV0LCBzZWxlY3QnKS5vbihcImZvY3VzaW5cIiwgZnVuY3Rpb24oZSkge1xuICAgICAgLy8gYnJlYWtQb2ludCDjgYwx44Gk44Gu5aC05ZCIXG4gICAgICBpZihicmVha1BvaW50WzFdIDwgMCkge1xuICAgICAgICBpZiAod2luZG93VyA8PSBicmVha1BvaW50WzBdKSB7XG4gICAgICAgICAgJCgnLm92ZXJ2aWV3X19maXhlZCcpLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIGlmICh3aW5kb3dXID49IGJyZWFrUG9pbnRbMF0gKyAxKSB7XG4gICAgICAgICAgLy8gJCgnLmwtaGVhZGVyLCAub3ZlcnZpZXdfX2ZpeGVkJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgIC8vIGJyZWFrUG9pbnQg44GMMuOBpOOBruWgtOWQiFxuICAgICAgICBpZiAod2luZG93VyA8PSBicmVha1BvaW50WzBdKSB7XG4gICAgICAgICAgJCgnLm92ZXJ2aWV3X19maXhlZCcpLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIGlmICgod2luZG93VyA+PSBicmVha1BvaW50WzBdICsgMSkgJiYgKHdpbmRvd1cgPD0gYnJlYWtQb2ludFsxXSkpIHtcbiAgICAgICAgICAvLyAkKCcubC1oZWFkZXIsIC5vdmVydmlld19fZml4ZWQnKS5oaWRlKCk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICBpZiAod2luZG93VyA+PSBicmVha1BvaW50WzFdICsgMSkge1xuICAgICAgICAgIC8vICQoJy5sLWhlYWRlciwgLm92ZXJ2aWV3X19maXhlZCcpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChiYXNpcykuZmluZCgnaW5wdXQsIHNlbGVjdCcpLm9uKFwiZm9jdXNvdXRcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgLy8gYnJlYWtQb2ludCDjgYwx44Gk44Gu5aC05ZCIXG4gICAgICBpZihicmVha1BvaW50WzFdIDwgMCkge1xuICAgICAgICBpZiAod2luZG93VyA8PSBicmVha1BvaW50WzBdKSB7XG4gICAgICAgICAgJCgnLmwtaGVhZGVyLCAub3ZlcnZpZXdfX2ZpeGVkJykuc2hvdygpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgaWYgKHdpbmRvd1cgPj0gYnJlYWtQb2ludFswXSArIDEpIHtcbiAgICAgICAgICAvLyAkKCcubC1oZWFkZXIsIC5vdmVydmlld19fZml4ZWQnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgLy8gYnJlYWtQb2ludCDjgYwy44Gk44Gu5aC05ZCIXG4gICAgICAgIGlmICh3aW5kb3dXIDw9IGJyZWFrUG9pbnRbMF0pIHtcbiAgICAgICAgICAkKCcubC1oZWFkZXIsIC5vdmVydmlld19fZml4ZWQnKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICBpZiAoKHdpbmRvd1cgPj0gYnJlYWtQb2ludFswXSArIDEpICYmICh3aW5kb3dXIDw9IGJyZWFrUG9pbnRbMV0pKSB7XG4gICAgICAgICAgLy8gJCgnLmwtaGVhZGVyLCAub3ZlcnZpZXdfX2ZpeGVkJykuaGlkZSgpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgaWYgKHdpbmRvd1cgPj0gYnJlYWtQb2ludFsxXSArIDEpIHtcbiAgICAgICAgICAvLyAkKCcubC1oZWFkZXIsIC5vdmVydmlld19fZml4ZWQnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGlmKCQoZmlsZSkubGVuZ3RoKSB7XG5cbiAgICAgIHZhciBmaWxlRXZlbnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJ1t0eXBlPVwiZmlsZVwiXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgZmlsZVZhbHVlID0gJCh0aGlzKS5wcm9wKCdmaWxlcycpWzBdLm5hbWU7XG4gICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KGZpbGUpLmZpbmQoJy5maWxlX19uYW1lJykuaHRtbChmaWxlVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoJ1t0eXBlPVwiZmlsZVwiXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZigkKHRoaXMpLnByb3AoJ2ZpbGVzJylbMF0uc2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICB2YXIgZmlsZVZhbHVlID0gJCh0aGlzKS5wcm9wKCdmaWxlcycpWzBdLm5hbWU7XG4gICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdChmaWxlKS5maW5kKCcuZmlsZV9fbmFtZScpLmh0bWwoZmlsZVZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KCkpO1xuXG4gICAgICAkKCcuZmlsZV9fYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdChmaWxlKS5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmNsaWNrKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgICAkKCdbdHlwZT1cInJlc2V0XCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQoZmlsZSkuZmluZCgnLmZpbGVfX25hbWUnKS5odG1sKCcnKTtcbiAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlucHV0W3R5cGU9XCJudW1iZXJcIl1cbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBpZigkKG51bWJlcikubGVuZ3RoKSB7XG5cbiAgICAgIHZhciBudW1iZXJEZWZhdWx0RXZlbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJChudW1iZXIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYoISQodGhpcykuaGFzQ2xhc3MoJ2lzLXZhbHVlJykpIHtcbiAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9ICQodGhpcykuZmluZCgnaW5wdXQnKS5hdHRyKCdwbGFjZWhvbGRlcicpO1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dCcpLnZhbChwbGFjZWhvbGRlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBudW1iZXJQbHVzRXZlbnQgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBpbnB1dCA9ICQodCkuY2xvc2VzdChudW1iZXIpLmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgIHZhciBudW1iZXJNYXggPSBpbnB1dC5kYXRhKCdtYXgnKTtcbiAgICAgICAgdmFyIG51bWJlclZhbHVlID0gaW5wdXQudmFsKCk7XG5cbiAgICAgICAgaWYobnVtYmVyTWF4IC0gMSA+PSBudW1iZXJWYWx1ZSkge1xuICAgICAgICAgIGlucHV0LnZhbCgrK251bWJlclZhbHVlKS5jaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIG51bWJlck1pbnVzRXZlbnQgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBpbnB1dCA9ICQodCkuY2xvc2VzdChudW1iZXIpLmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgIHZhciBudW1iZXJNaW4gPSBpbnB1dC5kYXRhKCdtaW4nKTtcbiAgICAgICAgdmFyIG51bWJlclZhbHVlID0gaW5wdXQudmFsKCk7XG5cbiAgICAgICAgaWYobnVtYmVyTWluICsgMSA8PSBudW1iZXJWYWx1ZSkge1xuICAgICAgICAgIGlucHV0LnZhbCgtLW51bWJlclZhbHVlKS5jaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIG51bWJlcklucHV0RXZlbnQgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBudW1iZXJNYXggPSAkKHQpLmRhdGEoJ21heCcpO1xuICAgICAgICB2YXIgbnVtYmVyTWluID0gJCh0KS5kYXRhKCdtaW4nKTtcblxuICAgICAgICBpZigkKHQpLnZhbCgpID49IG51bWJlck1heCkge1xuICAgICAgICAgICQodCkudmFsKG51bWJlck1heCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZigkKHQpLnZhbCgpIDw9IG51bWJlck1pbikge1xuICAgICAgICAgICQodCkudmFsKG51bWJlck1pbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWJlckRlZmF1bHRFdmVudCgpO1xuICAgICAgfSk7XG5cbiAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubnVtYmVyX19idXR0b24tLXBsdXMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtYmVyUGx1c0V2ZW50KCQodGhpcykpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5udW1iZXJfX2J1dHRvbi0tbWludXMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtYmVyTWludXNFdmVudCgkKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCBudW1iZXIgKyAnIGlucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWJlcklucHV0RXZlbnQoJCh0aGlzKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgICAkKCdbdHlwZT1cInJlc2V0XCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQobnVtYmVyKS5maW5kKCdpbnB1dCcpLnZhbHVlKCcnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fZnVuY3Rpb25zL19mb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBmb3JtQ2hhbmdlXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBiYXNpcyAgID0gJy5qcy1mb3JtQ2hhbmdlJztcbiAgdmFyIHRyaWdnZXIgPSAnLmpzLWZvcm1DaGFuZ2VfX3RyaWdnZXInO1xuICB2YXIgY29udGVudCA9ICcuanMtZm9ybUNoYW5nZV9fY29udGVudCc7XG5cbiAgdmFyIGFjdGl2ZSAgPSAnaXMtYWN0aXZlJztcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBpZigkKGJhc2lzKS5sZW5ndGgpIHtcbiAgICAvLyDjg4fjg5Xjgqnjg6vjg4jjgqTjg5njg7Pjg4hcbiAgICB2YXIgZGVmYXVsdEV2ZW50ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgJChjb250ZW50KS5oaWRlKCk7XG4gICAgICAkKGNvbnRlbnQgKyAnLicgKyBhY3RpdmUpLnNob3coKTtcbiAgICB9KCkpO1xuXG4gICAgdmFyIGNoYW5nZUV2ZW50ID0gZnVuY3Rpb24odCkge1xuICAgICAgdmFyIHRhcmdldCA9IHQuYXR0cignZGF0YS10YXJnZXQnKTtcbiAgICAgICQoY29udGVudClcbiAgICAgICAgLmhpZGUoKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoYWN0aXZlKTtcbiAgICAgICQoY29udGVudCArICdbZGF0YS10eXBlPVwiJyArIHRhcmdldCArICdcIl0nKVxuICAgICAgICAuc2hvdygpXG4gICAgICAgIC5hZGRDbGFzcyhhY3RpdmUpO1xuICAgIH07XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0cmlnZ2VyLCBmdW5jdGlvbigpIHtcbiAgICAgIGNoYW5nZUV2ZW50KCQodGhpcykpO1xuICAgIH0pO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2UvYXNzZXRzL2phdmFzY3JpcHRzL19mdW5jdGlvbnMvX2Zvcm0tY2hhbmdlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBlbGxpcHNpc1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXG4gIHZhciBiYXNpcyA9ICcuanMtZWxsaXBzaXMnO1xuICB2YXIgZWxsaXBzaXNUZXh0ID0gJ+KApic7XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgdmFyIGxvYWRpbmdFdmVudCA9IGZ1bmN0aW9uKCl7XG4gICAgJChiYXNpcykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgdmFyIG1heENvdW50ID0gJCh0aGlzKS5kYXRhKCdtYXhjaGFyJyk7XG4gICAgICB2YXIgd29yZENvdW50ID0gJCh0aGlzKS50ZXh0KCkubGVuZ3RoO1xuXG4gICAgICBpZihtYXhDb3VudCA8IHdvcmRDb3VudCl7XG4gICAgICAgIHZhciB0ZXh0ID0gJCh0aGlzKS5odG1sKCkuc3Vic3RyKDAsKG1heENvdW50IC0gMSkpO1xuICAgICAgICAkKHRoaXMpLmh0bWwodGV4dCArICcgJyArIGVsbGlwc2lzVGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgJCh3aW5kb3cpLm9uKCdyZWFkeScsIGZ1bmN0aW9uKCkge1xuICAgIGxvYWRpbmdFdmVudCgpO1xuICB9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fZnVuY3Rpb25zL19lbGxpcHNpcy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgbWVudVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXG4gIHZhciBiYXNpcyAgID0gJy5qcy1tZW51JztcbiAgdmFyIHRyaWdnZXIgPSAnLmpzLW1lbnVfX3RyaWdnZXInO1xuICB2YXIgY2xvc2UgICA9ICcuanMtbWVudV9fY2xvc2UnO1xuICB2YXIgY29udGVudCA9ICcuanMtbWVudV9fY29udGVudCc7XG4gIHZhciBvdmVybGF5ID0gJy5qcy1tZW51X19vdmVybGF5JztcbiAgdmFyIGFjdGl2ZSAgPSAnaXMtYWN0aXZlJztcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBpZigkKGJhc2lzKS5sZW5ndGgpIHtcblxuICAgIC8vIOODh+ODleOCqeODq+ODiOOCpOODmeODs+ODiFxuICAgIHZhciBkZWZhdWx0RXZlbnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAkKHRyaWdnZXIpLmNzcyh7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICB9KTtcblxuICAgICAgLy8gb3ZlcmxheSDov73liqBcbiAgICAgICQod3JhcHBlcikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiYy1vdmVybGF5ICcgKyBvdmVybGF5LnJlcGxhY2UoJy4nLCAnJykgKyAnXCI+PC9kaXY+Jyk7XG4gICAgfSgpKTtcblxuICAgIC8vIOODiOOCsOODq+OCpOODmeODs+ODiFxuICAgIHZhciBtZW51RXZlbnQgPSBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgdGFyZ2V0OiB0LmF0dHIoJ2RhdGEtdGFyZ2V0JyksXG4gICAgICAgIGhyZWY6IHQuYXR0cignaHJlZicpXG4gICAgICB9O1xuXG4gICAgICAvLyBkYXRhLXRhcmdldOOAgWhyZWYg44Gu5pyJ54ShXG4gICAgICBpZigkLnR5cGUoZGF0YS50YXJnZXQpICE9PSAndW5kZWZpbmVkJyAmJiBkYXRhLnRhcmdldCAhPT0gJycpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9ICcjJyArIGRhdGEudGFyZ2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYoJC50eXBlKGRhdGEuaHJlZikgIT09ICd1bmRlZmluZWQnICYmIGRhdGEuaHJlZiAhPT0gJycpIHtcbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gJyMnICsgZGF0YS5ocmVmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0YXJnZXQgPSB0LmNsb3Nlc3QoYmFzaXMpLmZpbmQoY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8g6ZaL6ZaJ44CBYWN0aXZlIOOCr+ODqeOCueOBrui/veWKoFxuICAgICAgaWYoJCh0cmlnZ2VyKS5oYXNDbGFzcyhhY3RpdmUpKSB7XG4gICAgICAgICQodHJpZ2dlcikucmVtb3ZlQ2xhc3MoYWN0aXZlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQodHJpZ2dlcikuYWRkQ2xhc3MoYWN0aXZlKTtcbiAgICAgIH1cblxuICAgICAgLy8g6ZaL6ZaJ44CBYWN0aXZlIOOCr+ODqeOCueOBrui/veWKoFxuICAgICAgaWYoJCh0YXJnZXQpLmhhc0NsYXNzKGFjdGl2ZSkpIHtcbiAgICAgICAgJCh0YXJnZXQpLnJlbW92ZUNsYXNzKGFjdGl2ZSk7XG4gICAgICAgICQob3ZlcmxheSkucmVtb3ZlQ2xhc3MoYWN0aXZlKTtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmNzcyh7XG4gICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQodGFyZ2V0KS5hZGRDbGFzcyhhY3RpdmUpO1xuICAgICAgICAkKG92ZXJsYXkpLmFkZENsYXNzKGFjdGl2ZSk7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5jc3Moe1xuICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0cmlnZ2VyLCBmdW5jdGlvbigpe1xuICAgICAgbWVudUV2ZW50KCQodGhpcykpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgY2xvc2UsIGZ1bmN0aW9uKCl7XG4gICAgICBtZW51RXZlbnQoJCh0aGlzKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBvdmVybGF5LCBmdW5jdGlvbigpe1xuICAgICAgbWVudUV2ZW50KCQodGhpcykpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2UvYXNzZXRzL2phdmFzY3JpcHRzL19mdW5jdGlvbnMvX21lbnUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGltYWdlU3dpdGNoXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBiYXNpcyA9ICcuanMtaW1hZ2VTd2l0Y2gnO1xuICB2YXIgdGFyZ2V0ID0gJy5qcy1pbWFnZVN3aXRjaF9fdGFyZ2V0JztcbiAgdmFyIHRodW1iID0gJy5qcy1pbWFnZVN3aXRjaF9fdGh1bWJuYWlsJztcbiAgdmFyIGl0ZW0gPSAnLmpzLWltYWdlU3dpdGNoX19pdGVtJztcbiAgdmFyIHNwZWVkID0gNTAwO1xuXG4gIHZhciBhY3RpdmUgPSAnaXMtYWN0aXZlJztcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBpZigkKGJhc2lzKS5sZW5ndGgpIHtcblxuICAgIC8vIOODh+ODleOCqeODq+ODiOOBruihqOekulxuICAgIHZhciBkZWZhdWx0RXZlbnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICBpZigkKHRhcmdldCkuY2hpbGRyZW4oKS5sZW5ndGggPj0gMikge1xuICAgICAgICAkKHRhcmdldCkuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtbnVtJywgaSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCEkKHRodW1iKS5sZW5ndGgpIHtcbiAgICAgICAgICAkKHRhcmdldCkuYWZ0ZXIoJzxkaXYgY2xhc3M9XCJtYWluVmlzdWFsX19zbGlkZXItLXRodW1ibmFpbCBqcy1pbWFnZVN3aXRjaF9fdGh1bWJuYWlsXCI+PC9kaXY+JylcbiAgICAgICAgICAkKHRhcmdldCkuZmluZChpdGVtKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgIC5jbG9uZSgpXG4gICAgICAgICAgICAuYXBwZW5kVG8odGh1bWIpXG4gICAgICAgICAgICAuYXR0cignZGF0YS1udW0nLCBpKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGZ1bmN0aW9uKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChjbGFzc05hbWUubWF0Y2goL1xcYmpzLVxcUysvZykgfHwgW10pLmpvaW4oJyAnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2xhc3MoaXRlbS5yZXBsYWNlKCcuJywgJycpICsgJy0tdGh1bWInKVxuICAgICAgICAgICAgLmNoaWxkcmVuKClcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhmdW5jdGlvbihpbmRleCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoY2xhc3NOYW1lLm1hdGNoKC9cXGJqcy1cXFMrL2cpIHx8IFtdKS5qb2luKCcgJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGh1bWIpLmZpbmQoaXRlbSkuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgJCh0aGlzKS5hdHRyKCdkYXRhLW51bScsIGkpO1xuICAgICAgICAgIGlmKCQodGhpcykuZmluZCgnaWZyYW1lJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgIC5hcHBlbmQoJzxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC82MDB4NDIwLzAwMC9mZmYuanBnP3RleHQ944GCXCI+JylcbiAgICAgICAgICAgICAgLmZpbmQoJ2lmcmFtZScpXG4gICAgICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgLy8gJCh0aGlzKVxuICAgICAgICAgICAgICAvLyAgIC5yZW1vdmVDbGFzcyhmdW5jdGlvbihpbmRleCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgIC8vICAgICByZXR1cm4gKGNsYXNzTmFtZS5tYXRjaCgvXFxianMtXFxTKy9nKSB8fCBbXSkuam9pbignICcpO1xuICAgICAgICAgICAgICAvLyAgIH0pXG4gICAgICAgICAgICAgIC8vICAgLmNoaWxkcmVuKClcbiAgICAgICAgICAgICAgLy8gICAgIC5yZW1vdmVDbGFzcyhmdW5jdGlvbihpbmRleCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgIC8vICAgICAgIHJldHVybiAoY2xhc3NOYW1lLm1hdGNoKC9cXGJqcy1cXFMrL2cpIHx8IFtdKS5qb2luKCcgJyk7XG4gICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0oKSk7XG5cbiAgICB2YXIgY2xpY2tFdmVudCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBudW0gPSB0LmF0dHIoJ2RhdGEtbnVtJyk7XG4gICAgICAkKHRhcmdldCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcyhhY3RpdmUpO1xuICAgICAgJCh0YXJnZXQpLmNoaWxkcmVuKCdbZGF0YS1udW09XCInICsgbnVtICsgJ1wiXScpLmFkZENsYXNzKGFjdGl2ZSk7XG5cbiAgICAgICQodGh1bWIpLmZpbmQoaXRlbSArICctLXRodW1iJykucmVtb3ZlQ2xhc3MoYWN0aXZlKTtcbiAgICAgICQodCkuYWRkQ2xhc3MoYWN0aXZlKTtcbiAgICB9XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRodW1iICsgJyAnICsgaXRlbSArICctLXRodW1iJywgZnVuY3Rpb24oKXtcbiAgICAgIGNsaWNrRXZlbnQoJCh0aGlzKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZS9hc3NldHMvamF2YXNjcmlwdHMvX2Z1bmN0aW9ucy9faW1hZ2Utc3dpdGNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBpbWFnZVpvb21cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGJhc2lzICAgPSAnLmpzLWltYWdlWm9vbSc7XG4gIHZhciB0cmlnZ2VyID0gJy5qcy1pbWFnZVpvb21fX3RyaWdnZXInO1xuICB2YXIgY29udGVudCA9ICcuanMtaW1hZ2Vab29tX19jb250ZW50JztcbiAgdmFyIGFjdGl2ZSAgPSAnaXMtYWN0aXZlJztcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBpZigkKGJhc2lzKS5sZW5ndGgpIHtcblxuICAgIC8vIOODh+ODleOCqeODq+ODiOOCpOODmeODs+ODiFxuICAgIHZhciBkZWZhdWx0RXZlbnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAvLyAkKGJhc2lzKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCInICsgY29udGVudC5yZXBsYWNlKCcuJywgJycpICsgJ1wiPjwvZGl2PicpO1xuICAgIH0oKSk7XG5cbiAgICB2YXIgb3BlbkV2ZW50ID0gZnVuY3Rpb24oKXtcblxuICAgIH07XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgIC8vICQoZG9jdW1lbnQpLm9uKCdtb3VzZWVudGVyJywgYmFzaXMsIGZ1bmN0aW9uKCl7XG4gICAgLy8gICBvcGVuRXZlbnQoJCh0aGlzKSk7XG4gICAgLy8gICByZXR1cm4gZmFsc2U7XG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyAkKGRvY3VtZW50KS5vbignbW91c2VsZWF2ZScsIGJhc2lzLCBmdW5jdGlvbigpe1xuICAgIC8vICAgY2xvc2VFdmVudCgkKHRoaXMpKTtcbiAgICAvLyAgIHJldHVybiBmYWxzZTtcbiAgICAvLyB9KTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2UvYXNzZXRzL2phdmFzY3JpcHRzL19mdW5jdGlvbnMvX2ltYWdlLXpvb20uanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHNjcm9sbEZpeGVkXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgdmFyIGJhc2lzICAgID0gJy5qcy1zY3JvbGxGaXhlZCc7XG4gIHZhciB0YXJnZXQgICA9ICcuanMtc2Nyb2xsRml4ZWRfX3RhcmdldCc7XG4gIHZhciBzdGFuZGFyZCA9ICcuanMtc2Nyb2xsRml4ZWRfX3N0YW5kYXJkJztcbiAgdmFyIGZpeGVkICAgID0gJ2lzLWZpeGVkJztcbiAgdmFyIGRlbGF5ICAgID0gMzI7XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgaWYoJChiYXNpcykubGVuZ3RoKSB7XG4gICAgdmFyIGJhc2lzSGVpZ2h0O1xuICAgIHZhciBiYXNpc09mZnNldFRvcDtcbiAgICB2YXIgYmFzaXNPZmZzZXRMZWZ0O1xuXG4gICAgdmFyIHN0YW5kYXJkV2lkdGg7XG4gICAgdmFyIHN0YW5kYXJkSGVpZ2h0O1xuICAgIHZhciBzdGFuZGFyZE9mZnNldFRvcDtcbiAgICB2YXIgc3RhbmRhcmRPZmZzZXRMZWZ0O1xuXG5cbiAgICB2YXIgZGVmYXVsdEV2ZW50ID0gKGZ1bmN0aW9uKCkge1xuICAgIH0oKSk7XG5cblxuICAgIHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgYmFzaXNIZWlnaHQgPSAkKGJhc2lzKS5vdXRlckhlaWdodCgpO1xuICAgICAgYmFzaXNPZmZzZXRUb3AgPSAkKGJhc2lzKS5vZmZzZXQoKS50b3A7XG4gICAgICBiYXNpc09mZnNldExlZnQgPSAkKGJhc2lzKS5vZmZzZXQoKS5sZWZ0O1xuXG4gICAgICBzdGFuZGFyZFdpZHRoID0gJChzdGFuZGFyZCkub3V0ZXJXaWR0aCgpO1xuICAgICAgc3RhbmRhcmRIZWlnaHQgPSAkKHN0YW5kYXJkKS5vdXRlckhlaWdodCgpO1xuICAgICAgc3RhbmRhcmRPZmZzZXRUb3AgPSAkKHN0YW5kYXJkKS5vZmZzZXQoKS50b3A7XG4gICAgICBzdGFuZGFyZE9mZnNldExlZnQgPSAkKHN0YW5kYXJkKS5vZmZzZXQoKS5sZWZ0O1xuICAgIH07XG5cblxuICAgIHZhciBzY3JvbGxFdmVudCA9IGZ1bmN0aW9uKHNjcm9sbFZhbHVlWSwgc2Nyb2xsVmFsdWVYKSB7XG4gICAgICBnZXRWYWx1ZSgpO1xuXG4gICAgICAkKHRhcmdldCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRhcmdldFdpZHRoID0gJCh0aGlzKS5vdXRlcldpZHRoKCk7XG4gICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSAkKHRoaXMpLm91dGVySGVpZ2h0KCk7XG4gICAgICAgIHZhciB0YXJnZXRPZmZzZXRUb3AgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgdmFyIHRhcmdldE9mZnNldExlZnQgPSAkKHRoaXMpLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgIHZhciB0YXJnZXRUeXBlID0gJCh0aGlzKS5kYXRhKCd0eXBlJyk7XG5cbiAgICAgICAgaWYoc2Nyb2xsVmFsdWVZID49IHN0YW5kYXJkT2Zmc2V0VG9wIC0gZGVsYXkpIHtcblxuICAgICAgICAgIGlmKHNjcm9sbFZhbHVlWSA8PSBzdGFuZGFyZE9mZnNldFRvcCArIHN0YW5kYXJkSGVpZ2h0IC0gdGFyZ2V0SGVpZ2h0IC0gZGVsYXkpIHtcbiAgICAgICAgICAgICQodGFyZ2V0KS5hZGRDbGFzcyhmaXhlZCk7XG4gICAgICAgICAgICAkKHRhcmdldCkuY3NzKHtcbiAgICAgICAgICAgICAgLy8gcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgIHRvcDogZGVsYXksXG4gICAgICAgICAgICAgIGxlZnQ6IHN0YW5kYXJkT2Zmc2V0TGVmdCArIHN0YW5kYXJkV2lkdGggLSB0YXJnZXRXaWR0aCAtIHNjcm9sbFZhbHVlWFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZih0YXJnZXRUeXBlID09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAkKHRhcmdldCkuY3NzKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBiYXNpc09mZnNldExlZnQgLSBzY3JvbGxWYWx1ZVhcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGlmKHRhcmdldFR5cGUgPT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAkKHRhcmdldCkuY3NzKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBzdGFuZGFyZE9mZnNldExlZnQgKyBzdGFuZGFyZFdpZHRoIC0gdGFyZ2V0V2lkdGggLSBzY3JvbGxWYWx1ZVhcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGFyZ2V0KS5yZW1vdmVDbGFzcyhmaXhlZCk7XG4gICAgICAgICAgICAkKHRhcmdldCkuY3NzKHtcbiAgICAgICAgICAgICAgLy8gcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIHRvcDogc3RhbmRhcmRIZWlnaHQgLSB0YXJnZXRIZWlnaHQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmKHRhcmdldFR5cGUgPT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICQodGFyZ2V0KS5jc3Moe1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGlmKHRhcmdldFR5cGUgPT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAkKHRhcmdldCkuY3NzKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBzdGFuZGFyZFdpZHRoIC0gdGFyZ2V0V2lkdGhcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJCh0YXJnZXQpLnJlbW92ZUNsYXNzKGZpeGVkKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZih0YXJnZXRUeXBlID09ICdsZWZ0Jykge1xuICAgICAgICAgICAgJCh0YXJnZXQpLmNzcyh7XG4gICAgICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgIGlmKHRhcmdldFR5cGUgPT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgJCh0YXJnZXQpLmNzcyh7XG4gICAgICAgICAgICAgIGxlZnQ6IHN0YW5kYXJkV2lkdGggLSB0YXJnZXRXaWR0aFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICB2YXIgZG9tRXZlbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZpeGVkIC0gc3RhcnQnKTtcbiAgICAgICAgaWYgKHdpbmRvd1cgPj0gYnJlYWtQb2ludFswXSArIDEpIHtcbiAgICAgICAgICB2YXIgc2Nyb2xsVmFsdWVZID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgIHZhciBzY3JvbGxWYWx1ZVggPSAkKHdpbmRvdykuc2Nyb2xsTGVmdCgpO1xuICAgICAgICAgIHNjcm9sbEV2ZW50KHNjcm9sbFZhbHVlWSwgc2Nyb2xsVmFsdWVYKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnZml4ZWQgLSBlbmQnKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGxvYWRpbmdFdmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmaXhlZEZsYWcgPSB0cnVlO1xuICAgICAgICBsb2FkaW5nU3RvcCgpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgZG9tRXZlbnQoKS50aGVuKGxvYWRpbmdFdmVudCk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZSBzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh3aW5kb3dXID49IGJyZWFrUG9pbnRbMF0gKyAxKSB7XG4gICAgICAgIHZhciBzY3JvbGxWYWx1ZVkgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIHZhciBzY3JvbGxWYWx1ZVggPSAkKHdpbmRvdykuc2Nyb2xsTGVmdCgpO1xuICAgICAgICBzY3JvbGxFdmVudChzY3JvbGxWYWx1ZVksIHNjcm9sbFZhbHVlWCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZS9hc3NldHMvamF2YXNjcmlwdHMvX2Z1bmN0aW9ucy9fc2Nyb2xsLWZpeGVkLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICB0b2dnbGVcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICB2YXIgYmFzaXMgICAgPSAnLmpzLWRpc2FibGVkU3dpdGNoJztcbiAgdmFyIHRyaWdnZXIgID0gJy5qcy1kaXNhYmxlZFN3aXRjaF9fdHJpZ2dlcic7XG4gIHZhciBjb250ZW50ICA9ICcuanMtZGlzYWJsZWRTd2l0Y2hfX2NvbnRlbnQnO1xuICB2YXIgZGlzYWJsZWQgPSAnaXMtZGlzYWJsZWQnO1xuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIGlmKCQoYmFzaXMpLmxlbmd0aCkge1xuXG4gICAgLy8g44OH44OV44Kp44Or44OI44Kk44OZ44Oz44OIXG4gICAgdmFyIGRlZmF1bHRFdmVudCA9IChmdW5jdGlvbigpIHtcbiAgICAgIGlmKCEkKGNvbnRlbnQpLmhhc0NsYXNzKGRpc2FibGVkKSkge1xuICAgICAgICAkKGNvbnRlbnQpLmFkZENsYXNzKGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQoYmFzaXMpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYoJCh0aGlzKS5maW5kKHRyaWdnZXIpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKGNvbnRlbnQpLnJlbW92ZUNsYXNzKGRpc2FibGVkKTtcbiAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIH0oKSk7XG5cbiAgICAvLyDjg4jjgrDjg6vjgqTjg5njg7Pjg4hcbiAgICB2YXIgdG9nZ2xlRXZlbnQgPSBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gdC5jbG9zZXN0KGJhc2lzKS5maW5kKGNvbnRlbnQpO1xuXG4gICAgICAvLyDplovplonjgIFhY3RpdmUg44Kv44Op44K544Gu6L+95YqgXG4gICAgICBpZigkKHRhcmdldCkuaGFzQ2xhc3MoZGlzYWJsZWQpKSB7XG4gICAgICAgICQodGFyZ2V0KS5yZW1vdmVDbGFzcyhkaXNhYmxlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHRhcmdldCkuYWRkQ2xhc3MoZGlzYWJsZWQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCB0cmlnZ2VyLCBmdW5jdGlvbigpe1xuICAgICAgdG9nZ2xlRXZlbnQoJCh0aGlzKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZS9hc3NldHMvamF2YXNjcmlwdHMvX2Z1bmN0aW9ucy9fZGlzYWJsZWQtc3dpdGNoLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBmbG93XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgdmFyIGJhc2lzICAgICAgPSAnLmpzLWZsb3cnO1xuICB2YXIgbmF2aWdhdGlvbiA9ICcuanMtZmxvd19fbmF2aWdhdGlvbic7XG4gIHZhciBzdGVwICAgICAgID0gJy5qcy1mbG93X19zdGVwJztcbiAgdmFyIHByb2dyZXNzICAgPSAnLmpzLWZsb3dfX3Byb2dyZXNzJztcbiAgdmFyIHRhcmdldCAgICAgPSAnLmpzLWZsb3dfX3RhcmdldCc7XG4gIHZhciBvbiAgICAgICAgID0gJ2lzLW9uJztcbiAgdmFyIGRlbGF5ICAgICAgPSAwO1xuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIGlmKCQoYmFzaXMpLmxlbmd0aCkge1xuICAgIHZhciBuYXZpZ2F0aW9uTnVtO1xuICAgIHZhciB0YXJnZXROdW07XG5cbiAgICAvLyDjg4fjg5Xjgqnjg6vjg4jjgqTjg5njg7Pjg4hcbiAgICB2YXIgZGVmYXVsdEV2ZW50ID0gKGZ1bmN0aW9uKCl7XG4gICAgICBuYXZpZ2F0aW9uTnVtID0gJChuYXZpZ2F0aW9uICsgJzpub3QoXCIuaXMtY2xvbmVcIiknKS5maW5kKHN0ZXApLmNoaWxkcmVuKCkubGVuZ3RoO1xuICAgICAgdGFyZ2V0TnVtID0gJCh0YXJnZXQpLmNoaWxkcmVuKCdzZWN0aW9uJykubGVuZ3RoO1xuICAgIH0oKSk7XG5cbiAgICAvLyDjgrnjgq/jg63jg7zjg6vjgqTjg5njg7Pjg4hcbiAgICB2YXIgc2Nyb2xsRXZlbnQgPSBmdW5jdGlvbihzY3JvbGxWYWx1ZSkge1xuICAgICAgJCh0YXJnZXQpLmNoaWxkcmVuKCdzZWN0aW9uJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRoaXNOdW0gPSAkKHRhcmdldCkuY2hpbGRyZW4oKS5pbmRleCh0aGlzKTtcbiAgICAgICAgdmFyIHRoaXNPZmZzZXRUb3AgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgLy8gYWxlcnQodGhpc051bSk7XG4gICAgICAgIGlmKHNjcm9sbFZhbHVlICsgMSA+PSB0aGlzT2Zmc2V0VG9wIC0gZGVsYXkpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChuYXZpZ2F0aW9uKS5maW5kKHN0ZXApLmNoaWxkcmVuKCkuZXEodGhpc051bSkuYWRkQ2xhc3Mob24pO1xuICAgICAgICAgICAgJChuYXZpZ2F0aW9uICsgXCIuaXMtY2xvbmVcIikuZmluZChzdGVwKS5jaGlsZHJlbigpLmVxKHRoaXNOdW0pLmFkZENsYXNzKG9uKTtcbiAgICAgICAgICB9LCAxKTtcblxuICAgICAgICAgIHZhciBuYXZpZ2F0aW9uVyA9IDEgLyAobmF2aWdhdGlvbk51bSAtIDEpICogdGhpc051bTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChwcm9ncmVzcykuY3NzKHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKCcgKyBuYXZpZ2F0aW9uVyArICcpJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQobmF2aWdhdGlvbiArICcgLmlzLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQobmF2aWdhdGlvbikuZmluZChzdGVwKS5jaGlsZHJlbigpLmVxKHRoaXNOdW0pLnJlbW92ZUNsYXNzKG9uKTtcbiAgICAgICAgICAkKG5hdmlnYXRpb24gKyBcIi5pcy1jbG9uZVwiKS5maW5kKHN0ZXApLmNoaWxkcmVuKCkuZXEodGhpc051bSkucmVtb3ZlQ2xhc3Mob24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGZsdWcgPSB0cnVlO1xuICAgICAgdmFyIHNjcm9sbFZhbHVlID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgaWYoZmx1Zyl7XG4gICAgICAgIGZsdWcgPSBmYWxzZTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgIHNjcm9sbEV2ZW50KHNjcm9sbFZhbHVlKTtcbiAgICAgICAgICBmbHVnID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gZmx1ZztcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgJCgnYm9keSBpbnB1dCcpLm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYoKGUud2hpY2ggJiYgZS53aGljaCA9PT0gOSkgfHwgKGUua2V5Q29kZSAmJiBlLmtleUNvZGUgPT09IDkpKSB7XG4gICAgICAgIHZhciBzY3JvbGxWYWx1ZSA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgc2Nyb2xsRXZlbnQoc2Nyb2xsVmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZS9hc3NldHMvamF2YXNjcmlwdHMvX2Z1bmN0aW9ucy9fZmxvdy5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgYWRkIGNvbnRlbnRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICB2YXIgYmFzaXMgICAgICAgICA9ICcuanMtYWRkQ29udGVudCc7XG4gIHZhciBhZGRUcmlnZ2VyICAgID0gJy5qcy1hZGRDb250ZW50X190cmlnZ2VyLS1hZGQnO1xuICB2YXIgcmVtb3ZlVHJpZ2dlciA9ICcuanMtYWRkQ29udGVudF9fdHJpZ2dlci0tcmVtb3ZlJztcbiAgdmFyIGNvbnRlbnQgICAgICAgPSAnLmpzLWFkZENvbnRlbnRfX2NvbnRlbnQnO1xuXG4gIHZhciBhY3RpdmUgICAgICAgID0gJ2lzLWFjdGl2ZSc7XG4gIHZhciBzcGVlZCAgICAgICAgID0gNDAwO1xuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIGlmKCQoYmFzaXMpLmxlbmd0aCkge1xuXG4gICAgdmFyIGRlZmF1bHRFdmVudCA9IChmdW5jdGlvbigpe1xuICAgICAgJChiYXNpcykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG51bSA9ICQodGhpcykuZmluZChjb250ZW50KS5sZW5ndGg7XG4gICAgICAgICQodGhpcykuYXR0cignZGF0YS1tYXgnLCBudW0pO1xuICAgICAgICAkKHRoaXMpLmZpbmQoY29udGVudCkuZXEoMCkuYWRkQ2xhc3MoYWN0aXZlKTtcbiAgICAgIH0pXG4gICAgfSgpKTtcblxuICAgIHZhciBjbGlja0V2ZW50ID0gZnVuY3Rpb24odCkge1xuICAgICAgdC5jbG9zZXN0KGJhc2lzKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5maW5kKGNvbnRlbnQgKyAnLicgKyBhY3RpdmUpO1xuICAgICAgICB2YXIgY291bnROdW0gPSAkKHRoaXMpLmZpbmQoY29udGVudCArICcuJyArIGFjdGl2ZSkubGVuZ3RoO1xuXG4gICAgICAgIGlmKGNvdW50TnVtICsgMSA8ICQodGhpcykuYXR0cignZGF0YS1tYXgnKSkge1xuICAgICAgICAgIGFkZEV2ZW50KHRhcmdldCk7XG4gICAgICAgICAgLy8gYWxlcnQoY291bnROdW0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgaWYoY291bnROdW0gKyAxID09ICQodGhpcykuYXR0cignZGF0YS1tYXgnKSkgIHtcbiAgICAgICAgICBhZGRFdmVudCh0YXJnZXQpO1xuICAgICAgICAgIHQuYWRkQ2xhc3MoJ2lzLWRpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgYWRkRXZlbnQgPSBmdW5jdGlvbih0KSB7XG4gICAgICB0Lm5leHQoY29udGVudCkuYWRkQ2xhc3MoYWN0aXZlKTtcbiAgICB9O1xuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGFkZFRyaWdnZXIsIGZ1bmN0aW9uKCkge1xuICAgICAgY2xpY2tFdmVudCgkKHRoaXMpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fZnVuY3Rpb25zL19hZGQtY29udGVudC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgc2VsZWN0QnV0dG9uXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgdmFyIGJhc2lzICAgPSAnLmpzLXNlbGVjdEJ1dHRvbic7XG4gIHZhciBzZWxlY3QgICA9ICcuanMtc2VsZWN0QnV0dG9uX19zZWxlY3QnO1xuICB2YXIgYWN0aXZlID0gJ2lzLWFjdGl2ZSdcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBpZigkKGJhc2lzKS5sZW5ndGgpIHtcblxuICAgIC8vIOODh+ODleOCqeODq+ODiOOCpOODmeODs+ODiFxuICAgIHZhciBkZWZhdWx0RXZlbnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAkKGJhc2lzKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmFmdGVyKCc8ZGl2IGNsYXNzPVwiZm9ybV9fc2VsZWN0ICcgKyAgc2VsZWN0LnJlcGxhY2UoJy4nLCAnJykgKyAnXCI+PHNlbGVjdCBvbkNoYW5nZT1cImxvY2F0aW9uLmhyZWY9dmFsdWU7XCI+PC9zZWxlY3Q+PC9kaXY+Jyk7XG4gICAgICB9KTtcblxuICAgICAgJChiYXNpcyArICcgYScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gJCh0aGlzKS50ZXh0KCk7XG5cbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcyhhY3RpdmUpKSB7XG4gICAgICAgICAgJChzZWxlY3QgKyAnIHNlbGVjdCcpLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT1cIicgKyB1cmwgKyAnXCIgc2VsZWN0ZWQ+JysgdmFsdWUgKyc8L29wdGlvbj4nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoc2VsZWN0ICsgJyBzZWxlY3QnKS5hcHBlbmQoJzxvcHRpb24gdmFsdWU9XCInICsgdXJsICsgJ1wiPicrIHZhbHVlICsnPC9vcHRpb24+JylcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9KCkpO1xuXG4gICAgdmFyIHJlc2l6ZUV2ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAod2luZG93VyA8PSBicmVha1BvaW50WzBdKSB7XG4gICAgICAgICQoYmFzaXMpLmhpZGUoKTtcbiAgICAgICAgJChzZWxlY3QpLnNob3coKTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYgKHdpbmRvd1cgPj0gYnJlYWtQb2ludFswXSArIDEpIHtcbiAgICAgICAgJChiYXNpcykuc2hvdygpO1xuICAgICAgICAkKHNlbGVjdCkuaGlkZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICQod2luZG93KS5vbignbG9hZCByZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICAgIHJlc2l6ZUV2ZW50KCk7XG4gICAgfSk7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZS9hc3NldHMvamF2YXNjcmlwdHMvX2Z1bmN0aW9ucy9fc2VsZWN0LWJ1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgcHJvZHVjdHNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICB2YXIgYmFzaXMgICAgICA9ICcuanMtY2FzZVN0dWR5JztcbiAgdmFyIHByb2R1Y3QgICAgPSAnLmpzLWNhc2VTdHVkeV9fcHJvZHVjdCc7XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgaWYoJChiYXNpcykubGVuZ3RoKSB7XG5cbiAgICB2YXIgcHJvZHVjdERvbSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHdpbmRvd1cgPD0gYnJlYWtQb2ludFswXSkge1xuICAgICAgICAkKHByb2R1Y3QpLmluc2VydEFmdGVyKCcuY29udGVudF9fZGV0YWlsJyk7XG4gICAgICB9IGVsc2VcbiAgICAgIGlmICh3aW5kb3dXID49IGJyZWFrUG9pbnRbMF0gKyAxKSB7XG4gICAgICAgICQocHJvZHVjdCkuaW5zZXJ0QWZ0ZXIoJy5pbmZvcm1hdGlvbl9fdGl0bGUnKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICBwcm9kdWN0RG9tKCk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgcHJvZHVjdERvbSgpO1xuICAgIH0pO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2UvYXNzZXRzL2phdmFzY3JpcHRzL19mdW5jdGlvbnMvX2Nhc2Utc3R1ZHkuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=
