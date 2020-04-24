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
/******/ 	__webpack_require__.p = "../../../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./SRC/pages/ui-kit/colors-type/colors-type.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./SRC/components sync recursive \\.scss$":
/*!*************************************!*\
  !*** ./SRC/components sync \.scss$ ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bullet/bullet.scss": "./SRC/components/bullet/bullet.scss",
	"./bullets-list/bullets-list.scss": "./SRC/components/bullets-list/bullets-list.scss",
	"./button-arrow/button-arrow.scss": "./SRC/components/button-arrow/button-arrow.scss",
	"./button-bordered/button-bordered.scss": "./SRC/components/button-bordered/button-bordered.scss",
	"./button-filled/button-filled.scss": "./SRC/components/button-filled/button-filled.scss",
	"./button-simple/button-simple.scss": "./SRC/components/button-simple/button-simple.scss",
	"./checkbox/checkbox.scss": "./SRC/components/checkbox/checkbox.scss",
	"./checkboxes-list/checkboxes-list.scss": "./SRC/components/checkboxes-list/checkboxes-list.scss",
	"./color-example/color-example.scss": "./SRC/components/color-example/color-example.scss",
	"./comfort-input/comfort-input.scss": "./SRC/components/comfort-input/comfort-input.scss",
	"./comfort-status-list/comfort-status-list.scss": "./SRC/components/comfort-status-list/comfort-status-list.scss",
	"./comfort-status/comfort-status.scss": "./SRC/components/comfort-status/comfort-status.scss",
	"./datepicker-input/datepicker-input.scss": "./SRC/components/datepicker-input/datepicker-input.scss",
	"./donut-chart/donut-chart.scss": "./SRC/components/donut-chart/donut-chart.scss",
	"./expandable-checkbox-list/expandable-checkbox-list.scss": "./SRC/components/expandable-checkbox-list/expandable-checkbox-list.scss",
	"./feedback-list/feedback-list.scss": "./SRC/components/feedback-list/feedback-list.scss",
	"./feedback/feedback.scss": "./SRC/components/feedback/feedback.scss",
	"./flexslider/flexslider.scss": "./SRC/components/flexslider/flexslider.scss",
	"./font-example/font-example.scss": "./SRC/components/font-example/font-example.scss",
	"./footer-menu/footer-menu.scss": "./SRC/components/footer-menu/footer-menu.scss",
	"./footer/footer.scss": "./SRC/components/footer/footer.scss",
	"./guests-input/guests-input.scss": "./SRC/components/guests-input/guests-input.scss",
	"./header-menu/header-menu.scss": "./SRC/components/header-menu/header-menu.scss",
	"./header/header.scss": "./SRC/components/header/header.scss",
	"./image-slider/image-slider.scss": "./SRC/components/image-slider/image-slider.scss",
	"./items-pad/items-pad.scss": "./SRC/components/items-pad/items-pad.scss",
	"./legend-list/legend-list.scss": "./SRC/components/legend-list/legend-list.scss",
	"./legend/legend.scss": "./SRC/components/legend/legend.scss",
	"./like-button/like-button.scss": "./SRC/components/like-button/like-button.scss",
	"./logo-with-text/logo-with-text.scss": "./SRC/components/logo-with-text/logo-with-text.scss",
	"./masked-input/masked-input.scss": "./SRC/components/masked-input/masked-input.scss",
	"./order-info-form/order-info-form.scss": "./SRC/components/order-info-form/order-info-form.scss",
	"./pagination/pagination.scss": "./SRC/components/pagination/pagination.scss",
	"./radio/radio.scss": "./SRC/components/radio/radio.scss",
	"./radios-list/radios-list.scss": "./SRC/components/radios-list/radios-list.scss",
	"./range-slider/range-slider.scss": "./SRC/components/range-slider/range-slider.scss",
	"./rate-button/rate-button.scss": "./SRC/components/rate-button/rate-button.scss",
	"./room-images/room-images.scss": "./SRC/components/room-images/room-images.scss",
	"./room-info-caption/room-info-caption.scss": "./SRC/components/room-info-caption/room-info-caption.scss",
	"./room-info/room-info.scss": "./SRC/components/room-info/room-info.scss",
	"./room-reservation-form/room-reservation-form.scss": "./SRC/components/room-reservation-form/room-reservation-form.scss",
	"./round-image/round-image.scss": "./SRC/components/round-image/round-image.scss",
	"./sign-in-form/sign-in-form.scss": "./SRC/components/sign-in-form/sign-in-form.scss",
	"./sign-up-form/sign-up-form.scss": "./SRC/components/sign-up-form/sign-up-form.scss",
	"./social-buttons/social-buttons.scss": "./SRC/components/social-buttons/social-buttons.scss",
	"./subscribe-area/subscribe-area.scss": "./SRC/components/subscribe-area/subscribe-area.scss",
	"./subscribe-input/subscribe-input.scss": "./SRC/components/subscribe-input/subscribe-input.scss",
	"./text-input/text-input.scss": "./SRC/components/text-input/text-input.scss",
	"./toggle/toggle.scss": "./SRC/components/toggle/toggle.scss",
	"./toggles-list/toggles-list.scss": "./SRC/components/toggles-list/toggles-list.scss",
	"./tooltip/tooltip.scss": "./SRC/components/tooltip/tooltip.scss",
	"./toxin-datepicker/toxin-datepicker.scss": "./SRC/components/toxin-datepicker/toxin-datepicker.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./SRC/components sync recursive \\.scss$";

/***/ }),

/***/ "./SRC/components/bullet/bullet.scss":
/*!*******************************************!*\
  !*** ./SRC/components/bullet/bullet.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/bullets-list/bullets-list.scss":
/*!*******************************************************!*\
  !*** ./SRC/components/bullets-list/bullets-list.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/button-arrow/button-arrow.scss":
/*!*******************************************************!*\
  !*** ./SRC/components/button-arrow/button-arrow.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/button-bordered/button-bordered.scss":
/*!*************************************************************!*\
  !*** ./SRC/components/button-bordered/button-bordered.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/button-filled/button-filled.scss":
/*!*********************************************************!*\
  !*** ./SRC/components/button-filled/button-filled.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/button-simple/button-simple.scss":
/*!*********************************************************!*\
  !*** ./SRC/components/button-simple/button-simple.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/checkbox/checkbox.scss":
/*!***********************************************!*\
  !*** ./SRC/components/checkbox/checkbox.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/checkboxes-list/checkboxes-list.scss":
/*!*************************************************************!*\
  !*** ./SRC/components/checkboxes-list/checkboxes-list.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/color-example/color-example.scss":
/*!*********************************************************!*\
  !*** ./SRC/components/color-example/color-example.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/comfort-input/comfort-input.scss":
/*!*********************************************************!*\
  !*** ./SRC/components/comfort-input/comfort-input.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/comfort-status-list/comfort-status-list.scss":
/*!*********************************************************************!*\
  !*** ./SRC/components/comfort-status-list/comfort-status-list.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/comfort-status/comfort-status.scss":
/*!***********************************************************!*\
  !*** ./SRC/components/comfort-status/comfort-status.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/datepicker-input/datepicker-input.scss":
/*!***************************************************************!*\
  !*** ./SRC/components/datepicker-input/datepicker-input.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/donut-chart/donut-chart.scss":
/*!*****************************************************!*\
  !*** ./SRC/components/donut-chart/donut-chart.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/expandable-checkbox-list/expandable-checkbox-list.scss":
/*!*******************************************************************************!*\
  !*** ./SRC/components/expandable-checkbox-list/expandable-checkbox-list.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/feedback-list/feedback-list.scss":
/*!*********************************************************!*\
  !*** ./SRC/components/feedback-list/feedback-list.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/feedback/feedback.scss":
/*!***********************************************!*\
  !*** ./SRC/components/feedback/feedback.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/flexslider/flexslider.scss":
/*!***************************************************!*\
  !*** ./SRC/components/flexslider/flexslider.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/font-example/font-example.scss":
/*!*******************************************************!*\
  !*** ./SRC/components/font-example/font-example.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/footer-menu/footer-menu.scss":
/*!*****************************************************!*\
  !*** ./SRC/components/footer-menu/footer-menu.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/footer/footer.scss":
/*!*******************************************!*\
  !*** ./SRC/components/footer/footer.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/guests-input/guests-input.scss":
/*!*******************************************************!*\
  !*** ./SRC/components/guests-input/guests-input.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/header-menu/header-menu.scss":
/*!*****************************************************!*\
  !*** ./SRC/components/header-menu/header-menu.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/header/header.scss":
/*!*******************************************!*\
  !*** ./SRC/components/header/header.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/image-slider/image-slider.scss":
/*!*******************************************************!*\
  !*** ./SRC/components/image-slider/image-slider.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/items-pad/items-pad.scss":
/*!*************************************************!*\
  !*** ./SRC/components/items-pad/items-pad.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/legend-list/legend-list.scss":
/*!*****************************************************!*\
  !*** ./SRC/components/legend-list/legend-list.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/legend/legend.scss":
/*!*******************************************!*\
  !*** ./SRC/components/legend/legend.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/like-button/like-button.scss":
/*!*****************************************************!*\
  !*** ./SRC/components/like-button/like-button.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/logo-with-text/logo-with-text.scss":
/*!***********************************************************!*\
  !*** ./SRC/components/logo-with-text/logo-with-text.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/masked-input/masked-input.scss":
/*!*******************************************************!*\
  !*** ./SRC/components/masked-input/masked-input.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/order-info-form/order-info-form.scss":
/*!*************************************************************!*\
  !*** ./SRC/components/order-info-form/order-info-form.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/pagination/pagination.scss":
/*!***************************************************!*\
  !*** ./SRC/components/pagination/pagination.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/radio/radio.scss":
/*!*****************************************!*\
  !*** ./SRC/components/radio/radio.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/radios-list/radios-list.scss":
/*!*****************************************************!*\
  !*** ./SRC/components/radios-list/radios-list.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/range-slider/range-slider.scss":
/*!*******************************************************!*\
  !*** ./SRC/components/range-slider/range-slider.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/rate-button/rate-button.scss":
/*!*****************************************************!*\
  !*** ./SRC/components/rate-button/rate-button.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/room-images/room-images.scss":
/*!*****************************************************!*\
  !*** ./SRC/components/room-images/room-images.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/room-info-caption/room-info-caption.scss":
/*!*****************************************************************!*\
  !*** ./SRC/components/room-info-caption/room-info-caption.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/room-info/room-info.scss":
/*!*************************************************!*\
  !*** ./SRC/components/room-info/room-info.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/room-reservation-form/room-reservation-form.scss":
/*!*************************************************************************!*\
  !*** ./SRC/components/room-reservation-form/room-reservation-form.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/round-image/round-image.scss":
/*!*****************************************************!*\
  !*** ./SRC/components/round-image/round-image.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/sign-in-form/sign-in-form.scss":
/*!*******************************************************!*\
  !*** ./SRC/components/sign-in-form/sign-in-form.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/sign-up-form/sign-up-form.scss":
/*!*******************************************************!*\
  !*** ./SRC/components/sign-up-form/sign-up-form.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/social-buttons/social-buttons.scss":
/*!***********************************************************!*\
  !*** ./SRC/components/social-buttons/social-buttons.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/subscribe-area/subscribe-area.scss":
/*!***********************************************************!*\
  !*** ./SRC/components/subscribe-area/subscribe-area.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/subscribe-input/subscribe-input.scss":
/*!*************************************************************!*\
  !*** ./SRC/components/subscribe-input/subscribe-input.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/text-input/text-input.scss":
/*!***************************************************!*\
  !*** ./SRC/components/text-input/text-input.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/toggle/toggle.scss":
/*!*******************************************!*\
  !*** ./SRC/components/toggle/toggle.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/toggles-list/toggles-list.scss":
/*!*******************************************************!*\
  !*** ./SRC/components/toggles-list/toggles-list.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/tooltip/tooltip.scss":
/*!*********************************************!*\
  !*** ./SRC/components/tooltip/tooltip.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/components/toxin-datepicker/toxin-datepicker.scss":
/*!***************************************************************!*\
  !*** ./SRC/components/toxin-datepicker/toxin-datepicker.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/favicons sync recursive ./!./!./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./ \\.(svg|png|ico|xml|json|webmanifest)$":
/*!***************************************************************************************************************************!*\
  !*** ./SRC/favicons sync !./node_modules/file-loader/dist/cjs.js?name=[name].[ext] \.(svg|png|ico|xml|json|webmanifest)$ ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./android-chrome-192x192.png": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/android-chrome-192x192.png",
	"./android-chrome-512x512.png": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/android-chrome-512x512.png",
	"./apple-touch-icon.png": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/apple-touch-icon.png",
	"./browserconfig.xml": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/browserconfig.xml",
	"./favicon-16x16.png": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/favicon-16x16.png",
	"./favicon-32x32.png": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/favicon-32x32.png",
	"./favicon.ico": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/favicon.ico",
	"./mstile-150x150.png": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/mstile-150x150.png",
	"./safari-pinned-tab.svg": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/safari-pinned-tab.svg",
	"./site.webmanifest": "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/site.webmanifest"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./SRC/favicons sync recursive ./!./!./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./ \\.(svg|png|ico|xml|json|webmanifest)$";

/***/ }),

/***/ "./SRC/favicons/favicons.js":
/*!**********************************!*\
  !*** ./SRC/favicons/favicons.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const faviconsContext = __webpack_require__("./SRC/favicons sync recursive ./!./!./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./ \\.(svg|png|ico|xml|json|webmanifest)$");

faviconsContext.keys().forEach(faviconsContext);

/***/ }),

/***/ "./SRC/fonts sync recursive \\.css$":
/*!*******************************!*\
  !*** ./SRC/fonts sync \.css$ ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./fa5-brands-regular-400/fonts.css": "./SRC/fonts/fa5-brands-regular-400/fonts.css",
	"./material-icons/material-icons.css": "./SRC/fonts/material-icons/material-icons.css",
	"./montserrat/fonts.css": "./SRC/fonts/montserrat/fonts.css",
	"./open-sans/fonts.css": "./SRC/fonts/open-sans/fonts.css",
	"./quicksand/fonts.css": "./SRC/fonts/quicksand/fonts.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./SRC/fonts sync recursive \\.css$";

/***/ }),

/***/ "./SRC/fonts/fa5-brands-regular-400/fonts.css":
/*!****************************************************!*\
  !*** ./SRC/fonts/fa5-brands-regular-400/fonts.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/fonts/material-icons/material-icons.css":
/*!*****************************************************!*\
  !*** ./SRC/fonts/material-icons/material-icons.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/fonts/montserrat/fonts.css":
/*!****************************************!*\
  !*** ./SRC/fonts/montserrat/fonts.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/fonts/open-sans/fonts.css":
/*!***************************************!*\
  !*** ./SRC/fonts/open-sans/fonts.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/fonts/quicksand/fonts.css":
/*!***************************************!*\
  !*** ./SRC/fonts/quicksand/fonts.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./SRC/pages/ui-kit/colors-type/colors-type.js":
/*!*****************************************************!*\
  !*** ./SRC/pages/ui-kit/colors-type/colors-type.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors_type_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors-type.scss */ "./SRC/pages/ui-kit/colors-type/colors-type.scss");
/* harmony import */ var _colors_type_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_colors_type_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _favicons_favicons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../favicons/favicons */ "./SRC/favicons/favicons.js");
/* harmony import */ var _favicons_favicons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_favicons_favicons__WEBPACK_IMPORTED_MODULE_1__);



const fonts = __webpack_require__("./SRC/fonts sync recursive \\.css$");

fonts.keys().forEach(fonts);

const imports = __webpack_require__("./SRC/components sync recursive \\.scss$");

imports.keys().forEach(imports);

/***/ }),

/***/ "./SRC/pages/ui-kit/colors-type/colors-type.scss":
/*!*******************************************************!*\
  !*** ./SRC/pages/ui-kit/colors-type/colors-type.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/android-chrome-192x192.png":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/android-chrome-192x192.png ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "android-chrome-192x192.png";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/android-chrome-512x512.png":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/android-chrome-512x512.png ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "android-chrome-512x512.png";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/apple-touch-icon.png":
/*!****************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/apple-touch-icon.png ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "apple-touch-icon.png";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/browserconfig.xml":
/*!*************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/browserconfig.xml ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "browserconfig.xml";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/favicon-16x16.png":
/*!*************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/favicon-16x16.png ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicon-16x16.png";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/favicon-32x32.png":
/*!*************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/favicon-32x32.png ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicon-32x32.png";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/favicon.ico":
/*!*******************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/favicon.ico ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicon.ico";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/mstile-150x150.png":
/*!**************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/mstile-150x150.png ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mstile-150x150.png";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/safari-pinned-tab.svg":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/safari-pinned-tab.svg ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "safari-pinned-tab.svg";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/site.webmanifest":
/*!************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./SRC/favicons/site.webmanifest ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "site.webmanifest";

/***/ })

/******/ });
//# sourceMappingURL=colors-type.js.map