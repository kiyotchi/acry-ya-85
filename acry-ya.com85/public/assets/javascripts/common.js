/*@cc_on _d=document;eval('var document=_d')@*/
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

	/*===========================================
	    COMMON
	===========================================*/
	/*
	  breakPoint [breakPoint-0(sm), breakPoint-1(md)]
	  breakPoint-1を指定しない場合は、「-1」と記入
	  breakPoint[0]、breakPoint[1]で使用する
	*/

	// グローバル ブレイクポイント
	breakPoint = [600, -1];

	// グローバル ウィンドウ幅
	windowW = $(window).width();
	windowH = $(window).height();

	//ローディングフラグ
	loadingFlag  = false;
	fixedFlag    = false;
	productsFlag = false;

	loadingStop = function() {
	  var loadingBase  = '.js-loading';
	  var loadingActive = 'is-active';
	  if(fixedFlag == true && productsFlag == true) {
	    loadingFlag = true;
	  };
	  if(loadingFlag == true) {
	    $(loadingBase).delay(500).queue(function(){
	      console.log('loading - start');
	      $(this).addClass(loadingActive);
	      console.log('loading - end');
	    });
	  }
	};

	loadingDirection = function() {
	  if(!$('.js-scrollFixed').length) {
	    fixedFlag = true;
	  };
	  if(!$('.js-products__semiorder').length) {
	    productsFlag = true;
	  };
	}

	$(window).on('load resize', function() {
	  windowW = $(window).width();
	  windowH = $(window).height();
	});


	var userAgent = __webpack_require__(1);
	var windowSize = __webpack_require__(2);
	var displayOrientation = __webpack_require__(3);
	var responsiveViewport = __webpack_require__(4);
	var telLink = __webpack_require__(5);

	$(function() {
	  userAgent();
	  windowSize();
	  displayOrientation();
	  responsiveViewport();
	  telLink();
	});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/*===========================================
	    get-user-agent
	===========================================*/
	module.exports = function() {
	  var target = 'body';
	  var ua = navigator.userAgent;

	  // デバイスを判定
	  var device = function() {
	    var deviceType = {
	      sp: 'is-sp',
	      tb: 'is-tb',
	      pc: 'is-pc'
	    };

	    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
	      return deviceType.sp;
	    } else
	    if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') === -1){
	      return deviceType.tb;
	    } else {
	      return deviceType.pc;
	    }
	  };

	  // OSを判定
	  var os = function() {
	    var osType = {
	      windows: 'is-windows',
	      mac:     'is-mac',
	      android: 'is-android',
	      ios:     'is-ios'
	    };

	    if(ua.indexOf('Win') > 0) {
	      return osType.windows
	    } else
	    if(ua.indexOf('Mac') > 0) {
	      return osType.mac;
	    } else
	    if(ua.indexOf('Android') > 0) {
	      return osType.android;
	    } else
	    if((ua.indexOf('iPhone') > 0) || (ua.indexOf('iPod') > 0)) {
	      return osType.ios;
	    }
	  };

	  // ブラウザを判定
	  var browser = function() {
	    var browserType = {
	      ie7:            'is-ie7',
	      ie8:            'is-ie8',
	      ie9:            'is-ie9',
	      ie10:           'is-ie10',
	      ie11:           'is-ie11',
	      edge:           'is-edge',
	      chrome:         'is-chrome',
	      safari:         'is-safari',
	      firefox:        'is-firefox',
	      androidBrowser: 'is-androidBrowser',
	      otherBrowser:   'is-otherBrowser',
	    };
	    if(ua.indexOf('MSIE 7.0') > 0) {
	      return browserType.ie7;
	    } else
	    if(ua.indexOf('MSIE 8.0') > 0) {
	      return browserType.ie8;
	    } else
	    if(ua.indexOf('MSIE 9.0') > 0) {
	      return browserType.ie9;
	    } else
	    if(ua.indexOf('MSIE 10.0') > 0) {
	      return browserType.ie10;
	    } else
	    if(ua.indexOf('rv:11.0') > 0) {
	      return browserType.ie11;
	    } else
	    if(ua.indexOf('Edge') > 0) {
	      return browserType.edge;
	    } else
	    if(ua.indexOf('Chrome') > 0) {
	      return browserType.chrome;
	    } else
	    if(ua.indexOf('Safari') > 0) {
	      return browserType.safari;
	    } else
	    if(ua.indexOf('Firefox') > 0) {
	      return browserType.firefox;
	    } else
	    if(/Android/.test(ua) && /Linux; U;/.test(ua) && !/Chrome/.test(ua)) {
	      return browserType.androidBrowser;
	    } else {
	      return browserType.otherBrowser;
	    }
	  };

	  $(document).ready(function(){
	    device();
	    os();
	    browser();

	    $(target)
	      .addClass(device)
	      .addClass(os)
	      .addClass(browser);

	    return [device, os, browser];
	  });
	}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/*===========================================
	    get-window-size
	===========================================*/
	module.exports = function() {
	  var target = 'body';

	  // ウィンドウサイズ判定
	  var display = function(){
	    var displayType = {
	      sm: 'is-sm',
	      md: 'is-md',
	      lg: 'is-lg'
	    };

	    $(target)
	      .removeClass(displayType.sm)
	      .removeClass(displayType.md)
	      .removeClass(displayType.lg);

	    // breakPoint が1つの場合
	    if(breakPoint[1] < 0) {
	      if (windowW <= breakPoint[0]) {
	        return displayType.sm
	      } else
	      if (windowW >= breakPoint[0] + 1) {
	        return displayType.lg
	      }
	    }
	    else {
	    // breakPoint が2つの場合
	      if (windowW <= breakPoint[0]) {
	        return displayType.sm
	      } else
	      if ((windowW >= breakPoint[0] + 1) && (windowW <= breakPoint[1])) {
	        return displayType.md
	      } else
	      if (windowW >= breakPoint[1] + 1) {
	        return displayType.lg
	      }
	    }
	  };

	  // ウィンドウサイズ判定
	  $(document).ready(function(){
	    display();
	    $(target).addClass(display);

	    return display;
	  });

	  $(window).on('resize', function() {
	    display();
	    $(target).addClass(display);

	    return display;
	  });
	}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*===========================================
	    get-display-orientation
	===========================================*/
	module.exports = function() {
	  var target = 'body';
	  var ua = navigator.userAgent;

	  // デバイスを判定
	  var orientation = function() {
	    var orientationType = {
	      landscape: 'is-landscape',
	      portrait: 'is-portrait'
	    };

	    $(target)
	      .removeClass(orientationType.landscape)
	      .removeClass(orientationType.portrait);

	    if(Math.abs(window.orientation) === 90) {
	      return orientationType.landscape;
	    } else {
	      return orientationType.portrait;
	    }
	  };

	  $(document).ready(function(){
	    orientation();
	    $(target).addClass(orientation);

	    return orientation;
	  });

	  $(window).on('orientationchange', function() {
	    orientation();
	    $(target).addClass(orientation);

	    return orientation;
	  });
	}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*===========================================
	    responsive-viewport
	===========================================*/
	module.exports = function(){
	  var basis = 'body'
	  var target = $('head').find('meta[name="viewport"]');
	  var deviceType = {
	    sp: 'is-sp',
	    tb: 'is-tb',
	    pc: 'is-pc'
	  };
	  var defaultWidth = '1280';

	  var set = function(content) {
	    $(target).attr('content', content);
	  };

	  $(document).ready(function(){
	    if($(basis).hasClass(deviceType.sp)) {
	      if(breakPoint[0] < 0) {
	        set('width=' + defaultWidth);
	      } else {
	        set('width=device-width, initial-scale=1, minimum-scale=1.0');
	      }
	    } else
	    if($(basis).hasClass(deviceType.tb)) {
	      if(breakPoint[1] < 0) {
	        set('width=' + defaultWidth);
	      } else {
	        set('width=device-width, initial-scale=1, minimum-scale=1.0');
	      }
	    } else
	    if($(basis).hasClass(deviceType.pc)) {
	      set('width=device-width, initial-scale=1, minimum-scale=1.0');
	    }
	  });
	}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/*===========================================
	    tel-link
	===========================================*/
	module.exports = function() {
	  var target = '.js-tellink';
	  var ua = navigator.userAgent;

	  if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
	    $(target).wrapInner('<a href="tel:0455476372"></a>');
	  }
	}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGViNGNjZGUxOWQ2MDAwN2MwNDkiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fY29tbW9ucy9fZ2V0LXVzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fY29tbW9ucy9fZ2V0LXdpbmRvdy1zaXplLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9hc3NldHMvamF2YXNjcmlwdHMvX2NvbW1vbnMvX2dldC1kaXNwbGF5LW9yaWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9hc3NldHMvamF2YXNjcmlwdHMvX2NvbW1vbnMvX3Jlc3BvbnNpdmUtdmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fY29tbW9ucy9fdGVsLWxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUMvREQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTCxxQ0FBb0MsR0FBRztBQUN2QztBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHO0FBQ0g7Ozs7Ozs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIOzs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRlYjRjY2RlMTlkNjAwMDdjMDQ5IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgQ09NTU9OXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qXG4gIGJyZWFrUG9pbnQgW2JyZWFrUG9pbnQtMChzbSksIGJyZWFrUG9pbnQtMShtZCldXG4gIGJyZWFrUG9pbnQtMeOCkuaMh+WumuOBl+OBquOBhOWgtOWQiOOBr+OAgeOAjC0x44CN44Go6KiY5YWlXG4gIGJyZWFrUG9pbnRbMF3jgIFicmVha1BvaW50WzFd44Gn5L2/55So44GZ44KLXG4qL1xuXG4vLyDjgrDjg63jg7zjg5Djg6sg44OW44Os44Kk44Kv44Od44Kk44Oz44OIXG5icmVha1BvaW50ID0gWzYwMCwgLTFdO1xuXG4vLyDjgrDjg63jg7zjg5Djg6sg44Km44Kj44Oz44OJ44Km5bmFXG53aW5kb3dXID0gJCh3aW5kb3cpLndpZHRoKCk7XG53aW5kb3dIID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuXG4vL+ODreODvOODh+OCo+ODs+OCsOODleODqeOCsFxubG9hZGluZ0ZsYWcgID0gZmFsc2U7XG5maXhlZEZsYWcgICAgPSBmYWxzZTtcbnByb2R1Y3RzRmxhZyA9IGZhbHNlO1xuXG5sb2FkaW5nU3RvcCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbG9hZGluZ0Jhc2UgID0gJy5qcy1sb2FkaW5nJztcbiAgdmFyIGxvYWRpbmdBY3RpdmUgPSAnaXMtYWN0aXZlJztcbiAgaWYoZml4ZWRGbGFnID09IHRydWUgJiYgcHJvZHVjdHNGbGFnID09IHRydWUpIHtcbiAgICBsb2FkaW5nRmxhZyA9IHRydWU7XG4gIH07XG4gIGlmKGxvYWRpbmdGbGFnID09IHRydWUpIHtcbiAgICAkKGxvYWRpbmdCYXNlKS5kZWxheSg1MDApLnF1ZXVlKGZ1bmN0aW9uKCl7XG4gICAgICBjb25zb2xlLmxvZygnbG9hZGluZyAtIHN0YXJ0Jyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKGxvYWRpbmdBY3RpdmUpO1xuICAgICAgY29uc29sZS5sb2coJ2xvYWRpbmcgLSBlbmQnKTtcbiAgICB9KTtcbiAgfVxufTtcblxubG9hZGluZ0RpcmVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICBpZighJCgnLmpzLXNjcm9sbEZpeGVkJykubGVuZ3RoKSB7XG4gICAgZml4ZWRGbGFnID0gdHJ1ZTtcbiAgfTtcbiAgaWYoISQoJy5qcy1wcm9kdWN0c19fc2VtaW9yZGVyJykubGVuZ3RoKSB7XG4gICAgcHJvZHVjdHNGbGFnID0gdHJ1ZTtcbiAgfTtcbn1cblxuJCh3aW5kb3cpLm9uKCdsb2FkIHJlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICB3aW5kb3dXID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gIHdpbmRvd0ggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG59KTtcblxuXG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnX2NvbW1vbnMvX2dldC11c2VyLWFnZW50Jyk7XG52YXIgd2luZG93U2l6ZSA9IHJlcXVpcmUoJ19jb21tb25zL19nZXQtd2luZG93LXNpemUnKTtcbnZhciBkaXNwbGF5T3JpZW50YXRpb24gPSByZXF1aXJlKCdfY29tbW9ucy9fZ2V0LWRpc3BsYXktb3JpZW50YXRpb24nKTtcbnZhciByZXNwb25zaXZlVmlld3BvcnQgPSByZXF1aXJlKCdfY29tbW9ucy9fcmVzcG9uc2l2ZS12aWV3cG9ydCcpO1xudmFyIHRlbExpbmsgPSByZXF1aXJlKCdfY29tbW9ucy9fdGVsLWxpbmsnKTtcblxuJChmdW5jdGlvbigpIHtcbiAgdXNlckFnZW50KCk7XG4gIHdpbmRvd1NpemUoKTtcbiAgZGlzcGxheU9yaWVudGF0aW9uKCk7XG4gIHJlc3BvbnNpdmVWaWV3cG9ydCgpO1xuICB0ZWxMaW5rKCk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21tb24uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZ2V0LXVzZXItYWdlbnRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHRhcmdldCA9ICdib2R5JztcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuICAvLyDjg4fjg5DjgqTjgrnjgpLliKTlrppcbiAgdmFyIGRldmljZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkZXZpY2VUeXBlID0ge1xuICAgICAgc3A6ICdpcy1zcCcsXG4gICAgICB0YjogJ2lzLXRiJyxcbiAgICAgIHBjOiAnaXMtcGMnXG4gICAgfTtcblxuICAgIGlmKHVhLmluZGV4T2YoJ2lQaG9uZScpID4gMCB8fCB1YS5pbmRleE9mKCdpUG9kJykgPiAwIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQnKSA+IDAgJiYgdWEuaW5kZXhPZignTW9iaWxlJykgPiAwKXtcbiAgICAgIHJldHVybiBkZXZpY2VUeXBlLnNwO1xuICAgIH0gZWxzZVxuICAgIGlmKHVhLmluZGV4T2YoJ2lQYWQnKSA+IDAgfHwgdWEuaW5kZXhPZignQW5kcm9pZCcpID4gMCAmJiB1YS5pbmRleE9mKCdNb2JpbGUnKSA9PT0gLTEpe1xuICAgICAgcmV0dXJuIGRldmljZVR5cGUudGI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkZXZpY2VUeXBlLnBjO1xuICAgIH1cbiAgfTtcblxuICAvLyBPU+OCkuWIpOWumlxuICB2YXIgb3MgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgb3NUeXBlID0ge1xuICAgICAgd2luZG93czogJ2lzLXdpbmRvd3MnLFxuICAgICAgbWFjOiAgICAgJ2lzLW1hYycsXG4gICAgICBhbmRyb2lkOiAnaXMtYW5kcm9pZCcsXG4gICAgICBpb3M6ICAgICAnaXMtaW9zJ1xuICAgIH07XG5cbiAgICBpZih1YS5pbmRleE9mKCdXaW4nKSA+IDApIHtcbiAgICAgIHJldHVybiBvc1R5cGUud2luZG93c1xuICAgIH0gZWxzZVxuICAgIGlmKHVhLmluZGV4T2YoJ01hYycpID4gMCkge1xuICAgICAgcmV0dXJuIG9zVHlwZS5tYWM7XG4gICAgfSBlbHNlXG4gICAgaWYodWEuaW5kZXhPZignQW5kcm9pZCcpID4gMCkge1xuICAgICAgcmV0dXJuIG9zVHlwZS5hbmRyb2lkO1xuICAgIH0gZWxzZVxuICAgIGlmKCh1YS5pbmRleE9mKCdpUGhvbmUnKSA+IDApIHx8ICh1YS5pbmRleE9mKCdpUG9kJykgPiAwKSkge1xuICAgICAgcmV0dXJuIG9zVHlwZS5pb3M7XG4gICAgfVxuICB9O1xuXG4gIC8vIOODluODqeOCpuOCtuOCkuWIpOWumlxuICB2YXIgYnJvd3NlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBicm93c2VyVHlwZSA9IHtcbiAgICAgIGllNzogICAgICAgICAgICAnaXMtaWU3JyxcbiAgICAgIGllODogICAgICAgICAgICAnaXMtaWU4JyxcbiAgICAgIGllOTogICAgICAgICAgICAnaXMtaWU5JyxcbiAgICAgIGllMTA6ICAgICAgICAgICAnaXMtaWUxMCcsXG4gICAgICBpZTExOiAgICAgICAgICAgJ2lzLWllMTEnLFxuICAgICAgZWRnZTogICAgICAgICAgICdpcy1lZGdlJyxcbiAgICAgIGNocm9tZTogICAgICAgICAnaXMtY2hyb21lJyxcbiAgICAgIHNhZmFyaTogICAgICAgICAnaXMtc2FmYXJpJyxcbiAgICAgIGZpcmVmb3g6ICAgICAgICAnaXMtZmlyZWZveCcsXG4gICAgICBhbmRyb2lkQnJvd3NlcjogJ2lzLWFuZHJvaWRCcm93c2VyJyxcbiAgICAgIG90aGVyQnJvd3NlcjogICAnaXMtb3RoZXJCcm93c2VyJyxcbiAgICB9O1xuICAgIGlmKHVhLmluZGV4T2YoJ01TSUUgNy4wJykgPiAwKSB7XG4gICAgICByZXR1cm4gYnJvd3NlclR5cGUuaWU3O1xuICAgIH0gZWxzZVxuICAgIGlmKHVhLmluZGV4T2YoJ01TSUUgOC4wJykgPiAwKSB7XG4gICAgICByZXR1cm4gYnJvd3NlclR5cGUuaWU4O1xuICAgIH0gZWxzZVxuICAgIGlmKHVhLmluZGV4T2YoJ01TSUUgOS4wJykgPiAwKSB7XG4gICAgICByZXR1cm4gYnJvd3NlclR5cGUuaWU5O1xuICAgIH0gZWxzZVxuICAgIGlmKHVhLmluZGV4T2YoJ01TSUUgMTAuMCcpID4gMCkge1xuICAgICAgcmV0dXJuIGJyb3dzZXJUeXBlLmllMTA7XG4gICAgfSBlbHNlXG4gICAgaWYodWEuaW5kZXhPZigncnY6MTEuMCcpID4gMCkge1xuICAgICAgcmV0dXJuIGJyb3dzZXJUeXBlLmllMTE7XG4gICAgfSBlbHNlXG4gICAgaWYodWEuaW5kZXhPZignRWRnZScpID4gMCkge1xuICAgICAgcmV0dXJuIGJyb3dzZXJUeXBlLmVkZ2U7XG4gICAgfSBlbHNlXG4gICAgaWYodWEuaW5kZXhPZignQ2hyb21lJykgPiAwKSB7XG4gICAgICByZXR1cm4gYnJvd3NlclR5cGUuY2hyb21lO1xuICAgIH0gZWxzZVxuICAgIGlmKHVhLmluZGV4T2YoJ1NhZmFyaScpID4gMCkge1xuICAgICAgcmV0dXJuIGJyb3dzZXJUeXBlLnNhZmFyaTtcbiAgICB9IGVsc2VcbiAgICBpZih1YS5pbmRleE9mKCdGaXJlZm94JykgPiAwKSB7XG4gICAgICByZXR1cm4gYnJvd3NlclR5cGUuZmlyZWZveDtcbiAgICB9IGVsc2VcbiAgICBpZigvQW5kcm9pZC8udGVzdCh1YSkgJiYgL0xpbnV4OyBVOy8udGVzdCh1YSkgJiYgIS9DaHJvbWUvLnRlc3QodWEpKSB7XG4gICAgICByZXR1cm4gYnJvd3NlclR5cGUuYW5kcm9pZEJyb3dzZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBicm93c2VyVHlwZS5vdGhlckJyb3dzZXI7XG4gICAgfVxuICB9O1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgZGV2aWNlKCk7XG4gICAgb3MoKTtcbiAgICBicm93c2VyKCk7XG5cbiAgICAkKHRhcmdldClcbiAgICAgIC5hZGRDbGFzcyhkZXZpY2UpXG4gICAgICAuYWRkQ2xhc3Mob3MpXG4gICAgICAuYWRkQ2xhc3MoYnJvd3Nlcik7XG5cbiAgICByZXR1cm4gW2RldmljZSwgb3MsIGJyb3dzZXJdO1xuICB9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fY29tbW9ucy9fZ2V0LXVzZXItYWdlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZ2V0LXdpbmRvdy1zaXplXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciB0YXJnZXQgPSAnYm9keSc7XG5cbiAgLy8g44Km44Kj44Oz44OJ44Km44K144Kk44K65Yik5a6aXG4gIHZhciBkaXNwbGF5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgZGlzcGxheVR5cGUgPSB7XG4gICAgICBzbTogJ2lzLXNtJyxcbiAgICAgIG1kOiAnaXMtbWQnLFxuICAgICAgbGc6ICdpcy1sZydcbiAgICB9O1xuXG4gICAgJCh0YXJnZXQpXG4gICAgICAucmVtb3ZlQ2xhc3MoZGlzcGxheVR5cGUuc20pXG4gICAgICAucmVtb3ZlQ2xhc3MoZGlzcGxheVR5cGUubWQpXG4gICAgICAucmVtb3ZlQ2xhc3MoZGlzcGxheVR5cGUubGcpO1xuXG4gICAgLy8gYnJlYWtQb2ludCDjgYwx44Gk44Gu5aC05ZCIXG4gICAgaWYoYnJlYWtQb2ludFsxXSA8IDApIHtcbiAgICAgIGlmICh3aW5kb3dXIDw9IGJyZWFrUG9pbnRbMF0pIHtcbiAgICAgICAgcmV0dXJuIGRpc3BsYXlUeXBlLnNtXG4gICAgICB9IGVsc2VcbiAgICAgIGlmICh3aW5kb3dXID49IGJyZWFrUG9pbnRbMF0gKyAxKSB7XG4gICAgICAgIHJldHVybiBkaXNwbGF5VHlwZS5sZ1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAvLyBicmVha1BvaW50IOOBjDLjgaTjga7loLTlkIhcbiAgICAgIGlmICh3aW5kb3dXIDw9IGJyZWFrUG9pbnRbMF0pIHtcbiAgICAgICAgcmV0dXJuIGRpc3BsYXlUeXBlLnNtXG4gICAgICB9IGVsc2VcbiAgICAgIGlmICgod2luZG93VyA+PSBicmVha1BvaW50WzBdICsgMSkgJiYgKHdpbmRvd1cgPD0gYnJlYWtQb2ludFsxXSkpIHtcbiAgICAgICAgcmV0dXJuIGRpc3BsYXlUeXBlLm1kXG4gICAgICB9IGVsc2VcbiAgICAgIGlmICh3aW5kb3dXID49IGJyZWFrUG9pbnRbMV0gKyAxKSB7XG4gICAgICAgIHJldHVybiBkaXNwbGF5VHlwZS5sZ1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyDjgqbjgqPjg7Pjg4njgqbjgrXjgqTjgrrliKTlrppcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICBkaXNwbGF5KCk7XG4gICAgJCh0YXJnZXQpLmFkZENsYXNzKGRpc3BsYXkpO1xuXG4gICAgcmV0dXJuIGRpc3BsYXk7XG4gIH0pO1xuXG4gICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgZGlzcGxheSgpO1xuICAgICQodGFyZ2V0KS5hZGRDbGFzcyhkaXNwbGF5KTtcblxuICAgIHJldHVybiBkaXNwbGF5O1xuICB9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fY29tbW9ucy9fZ2V0LXdpbmRvdy1zaXplLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGdldC1kaXNwbGF5LW9yaWVudGF0aW9uXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciB0YXJnZXQgPSAnYm9keSc7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgLy8g44OH44OQ44Kk44K544KS5Yik5a6aXG4gIHZhciBvcmllbnRhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvcmllbnRhdGlvblR5cGUgPSB7XG4gICAgICBsYW5kc2NhcGU6ICdpcy1sYW5kc2NhcGUnLFxuICAgICAgcG9ydHJhaXQ6ICdpcy1wb3J0cmFpdCdcbiAgICB9O1xuXG4gICAgJCh0YXJnZXQpXG4gICAgICAucmVtb3ZlQ2xhc3Mob3JpZW50YXRpb25UeXBlLmxhbmRzY2FwZSlcbiAgICAgIC5yZW1vdmVDbGFzcyhvcmllbnRhdGlvblR5cGUucG9ydHJhaXQpO1xuXG4gICAgaWYoTWF0aC5hYnMod2luZG93Lm9yaWVudGF0aW9uKSA9PT0gOTApIHtcbiAgICAgIHJldHVybiBvcmllbnRhdGlvblR5cGUubGFuZHNjYXBlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3JpZW50YXRpb25UeXBlLnBvcnRyYWl0O1xuICAgIH1cbiAgfTtcblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgIG9yaWVudGF0aW9uKCk7XG4gICAgJCh0YXJnZXQpLmFkZENsYXNzKG9yaWVudGF0aW9uKTtcblxuICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgfSk7XG4gIFxuICAkKHdpbmRvdykub24oJ29yaWVudGF0aW9uY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgb3JpZW50YXRpb24oKTtcbiAgICAkKHRhcmdldCkuYWRkQ2xhc3Mob3JpZW50YXRpb24pO1xuXG4gICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICB9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fY29tbW9ucy9fZ2V0LWRpc3BsYXktb3JpZW50YXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgcmVzcG9uc2l2ZS12aWV3cG9ydFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBiYXNpcyA9ICdib2R5J1xuICB2YXIgdGFyZ2V0ID0gJCgnaGVhZCcpLmZpbmQoJ21ldGFbbmFtZT1cInZpZXdwb3J0XCJdJyk7XG4gIHZhciBkZXZpY2VUeXBlID0ge1xuICAgIHNwOiAnaXMtc3AnLFxuICAgIHRiOiAnaXMtdGInLFxuICAgIHBjOiAnaXMtcGMnXG4gIH07XG4gIHZhciBkZWZhdWx0V2lkdGggPSAnMTI4MCc7XG5cbiAgdmFyIHNldCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAkKHRhcmdldCkuYXR0cignY29udGVudCcsIGNvbnRlbnQpO1xuICB9O1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgaWYoJChiYXNpcykuaGFzQ2xhc3MoZGV2aWNlVHlwZS5zcCkpIHtcbiAgICAgIGlmKGJyZWFrUG9pbnRbMF0gPCAwKSB7XG4gICAgICAgIHNldCgnd2lkdGg9JyArIGRlZmF1bHRXaWR0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXQoJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtaW5pbXVtLXNjYWxlPTEuMCcpO1xuICAgICAgfVxuICAgIH0gZWxzZVxuICAgIGlmKCQoYmFzaXMpLmhhc0NsYXNzKGRldmljZVR5cGUudGIpKSB7XG4gICAgICBpZihicmVha1BvaW50WzFdIDwgMCkge1xuICAgICAgICBzZXQoJ3dpZHRoPScgKyBkZWZhdWx0V2lkdGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0KCd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgbWluaW11bS1zY2FsZT0xLjAnKTtcbiAgICAgIH1cbiAgICB9IGVsc2VcbiAgICBpZigkKGJhc2lzKS5oYXNDbGFzcyhkZXZpY2VUeXBlLnBjKSkge1xuICAgICAgc2V0KCd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgbWluaW11bS1zY2FsZT0xLjAnKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2UvYXNzZXRzL2phdmFzY3JpcHRzL19jb21tb25zL19yZXNwb25zaXZlLXZpZXdwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHRlbC1saW5rXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciB0YXJnZXQgPSAnLmpzLXRlbGxpbmsnO1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gIGlmKHVhLmluZGV4T2YoJ2lQaG9uZScpID4gMCB8fCB1YS5pbmRleE9mKCdpUGFkJykgPiAwIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQnKSA+IDApIHtcbiAgICAkKHRhcmdldCkud3JhcElubmVyKCc8YSBocmVmPVwidGVsOjA0NTU0NzYzNzJcIj48L2E+Jyk7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL2Fzc2V0cy9qYXZhc2NyaXB0cy9fY29tbW9ucy9fdGVsLWxpbmsuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
