/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/detail/detail.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/detail/detail.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $('.js-inner-slider').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.js-inner-thumbnail',
    vertical: false,
    autoplay: false,
    verticalSwiping: false,
    centerMode: false,
    useTransform: false,
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true
      }
    }]
  });
  $('.js-inner-thumbnail').slick({
    slidesToShow: 3,
    vertical: true,
    focusOnSelect: true,
    verticalSwiping: false,
    autoplay: false,
    centerMode: false,
    asNavFor: '.js-inner-slider',
    prevArrow: $('.detail__arrow-btn_prev'),
    nextArrow: $('.detail__arrow-btn_next'),
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: false
      }
    }]
  });

  // Переключение фасовки: цена, граммы, артикул

  var tabs = document.querySelector('[data-selector="weight-tabs"]');
  if (!tabs) return;
  var weightEl = document.querySelector('[data-selector="detail-weight"]');
  var articleEl = document.querySelector('[data-selector="detail-article"]');
  var priceEl = document.querySelector('[data-selector="detail-price"]');
  var oldPriceEl = document.querySelector('[data-selector="detail-old-price"]');
  var tabButtons = tabs.querySelectorAll('.detail__weight-tab');
  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabButtons.forEach(function (item) {
        item.classList.remove('active');
      });
      this.classList.add('active');
      if (weightEl) {
        weightEl.textContent = this.dataset.weight + 'г';
      }
      if (articleEl) {
        articleEl.textContent = 'арт: ' + this.dataset.article;
      }
      if (priceEl) {
        priceEl.textContent = this.dataset.price;
      }
      if (oldPriceEl) {
        oldPriceEl.textContent = this.dataset.oldPrice;
      }
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/tab/tab.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/tab/tab.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var tabs = document.querySelectorAll('.tab');
  var initTab = function initTab(tab) {
    if (!tab || !tab.querySelectorAll('.js-tab-link').length) return;
    var clearContent = function clearContent() {
      var contentEl = tab.querySelector('.js-tab-content.active');
      contentEl === null || contentEl === void 0 || contentEl.classList.remove('active');
      var linkEl = tab.querySelector('.js-tab-link.active');
      linkEl === null || linkEl === void 0 || linkEl.classList.remove('active');
    };
    var onClickToggle = function onClickToggle(evt) {
      var _evt$target;
      clearContent(evt);
      var contentName = evt.currentTarget.dataset.toggle;
      var contentEl = tab.querySelector('#' + contentName);
      contentEl === null || contentEl === void 0 || contentEl.classList.add('active');
      (_evt$target = evt.target) === null || _evt$target === void 0 || _evt$target.classList.add('active');
    };
    var toggles = tab.querySelectorAll('.js-tab-link');
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener('click', onClickToggle);
    }
  };
  for (var i = 0; i < tabs.length; i++) {
    initTab(tabs[i]);
  }
})();

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tab_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/tab/tab */ "./src/blocks/modules/tab/tab.js");
/* harmony import */ var _modules_tab_tab__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_tab_tab__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_detail_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/detail/detail */ "./src/blocks/modules/detail/detail.js");
/* harmony import */ var _modules_detail_detail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_detail_detail__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map