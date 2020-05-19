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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/fonts/stylesheet.css":
/*!*************************************!*\
  !*** ./assets/fonts/stylesheet.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/scripts/C_A_logo_title.js":
/*!**********************************************!*\
  !*** ./src/common/scripts/C_A_logo_title.js ***!
  \**********************************************/
/*! exports provided: Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Logo = /*#__PURE__*/function () {
  function Logo(root, classNameLogo, classNameTitle) {
    _classCallCheck(this, Logo);

    this.root = root;
    this.logoclass = classNameLogo;
    this.titleclass = classNameTitle;
    this.render();
  }

  _createClass(Logo, [{
    key: "render",
    value: function render() {
      this.logo = document.createElement('div');
      this.logo.classList.add(this.logoclass);
      this.logo.innerHTML = '<svg preserveAspectRatio="xMidYMid meet" data-bbox="73.5 60 53 80" viewBox="73.5 60 53 80" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img"><g><path d="M95.1 74l-21.6 32h9.4l21.6-32h-9.4z"></path><path d="M108 69c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5"></path><path d="M112.2 74l-34.7 52h9.3l34.7-52h-9.3z"></path><path d="M117.1 94l-21.6 32h9.4l21.6-32h-9.4z"></path><path d="M92 140c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5"></path></g></svg>';
      this.root.append(this.logo);
      this.title = document.createElement('span');
      this.title.classList.add(this.titleclass);
      this.title.textContent = 'Cielo Apparel';
      this.root.append(this.title);
    }
  }]);

  return Logo;
}();

/***/ }),

/***/ "./src/common/scripts/C_A_menu.js":
/*!****************************************!*\
  !*** ./src/common/scripts/C_A_menu.js ***!
  \****************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _create_menu_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_menu_element.js */ "./src/common/scripts/create_menu_element.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Menu = /*#__PURE__*/function () {
  function Menu(root, classNameUl, id) {
    _classCallCheck(this, Menu);

    this.root = root;
    this.ulclassname = classNameUl;
    this.ulid = id;
    this.render();
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      this.ul = document.createElement('ul');
      this.ul.classList.add(this.ulclassname);
      this.ul.id = this.ulid;
      this.root.append(this.ul);
      this.itemHome = new _create_menu_element_js__WEBPACK_IMPORTED_MODULE_0__["Item"](this.ul, 'menu__item', 'menu__home', 'HOME');
      this.itemShop = new _create_menu_element_js__WEBPACK_IMPORTED_MODULE_0__["Item"](this.ul, 'menu__item', 'menu__shop', 'SHOP');
      this.itemAbout = new _create_menu_element_js__WEBPACK_IMPORTED_MODULE_0__["Item"](this.ul, 'menu__item', 'menu__about', 'ABOUT');
      this.itemContact = new _create_menu_element_js__WEBPACK_IMPORTED_MODULE_0__["Item"](this.ul, 'menu__item', 'menu__contact', 'CONTACT');
      this.itemLogIn = new _create_menu_element_js__WEBPACK_IMPORTED_MODULE_0__["Item"](this.ul, 'menu__item', 'menu__login', "<a class='login-link'><div class=\"menu__login_svg\"><svg preserveAspectRatio=\"xMidYMid meet\" data-bbox=\"0 0 50 50\" data-type=\"shape\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 50 50\" role=\"img\">\n            \n                <path d=\"M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0\"></path>\n            \n                </svg></div><p class=\"menu__login_title\">Log In</p></a>");
      this.itemBasket = new _create_menu_element_js__WEBPACK_IMPORTED_MODULE_0__["Item"](this.ul, 'menu__item', 'menu__basket', "<div class=\"menu__basket_svg\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"132.7 354.3 329.7 134.5\" data-hook=\"svg-icon-6\"><path class=\"m8g_G\" d=\"M414.3 357.3c35.7 10.7 56 47.6 45.2 83.3s-47.6 56-83.3 45.2c-35.7-10.7-56-47.6-45.2-83.3C341.7 367.4 378.6 347.1 414.3 357.3z\"></path><polygon points=\"275.6 447.1 186.9 447.1 156 365 136.9 365 132.7 354.3 163.1 354.3 194.7 436.4 267.9 436.4 286.9 385.2 198.2 385.2 194.1 374.5 302.4 374.5 \"></polygon><rect x=\"206.6\" y=\"473.3\" width=\"42\" height=\"6\"></rect><rect x=\"165.8\" y=\"439.15\" transform=\"matrix(-0.3557 -0.9346 0.9346 -0.3557 -158.2731 774.512)\" width=\"44.1\" height=\"6\"></rect><path d=\"M196.4 460.2c-7.7 0-14.3 6.5-14.3 14.3 0 7.7 6.5 14.3 14.3 14.3 7.7 0 14.3-6.5 14.3-14.3C210.7 466.8 204.2 460.2 196.4 460.2zM196.4 482.9c-4.8 0-8.3-3.6-8.3-8.3 0-4.8 3.6-8.3 8.3-8.3 4.8 0 8.3 3.6 8.3 8.3C204.8 479.3 201.2 482.9 196.4 482.9z\"></path><path d=\"M261.9 460.2c-7.7 0-14.3 6.5-14.3 14.3 0 7.7 6.5 14.3 14.3 14.3 7.7 0 14.3-6.5 14.3-14.3C276.2 466.8 269.7 460.2 261.9 460.2zM261.9 482.9c-4.8 0-8.3-3.6-8.3-8.3 0-4.8 3.6-8.3 8.3-8.3 4.8 0 8.3 3.6 8.3 8.3C270.3 479.3 266.7 482.9 261.9 482.9z\"></path><text x=\"395\" y=\"423\" dy=\".35em\" text-anchor=\"middle\" class=\"_1INsc\" data-hook=\"items-count\">0</text></svg></div><span class=\"menu__basket_counter\">0</span>");
    }
  }]);

  return Menu;
}();

/***/ }),

/***/ "./src/common/scripts/content.js":
/*!***************************************!*\
  !*** ./src/common/scripts/content.js ***!
  \***************************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var _t_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./t_main.js */ "./src/common/scripts/t_main.js");
/* harmony import */ var _t_shop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./t_shop.js */ "./src/common/scripts/t_shop.js");
/* harmony import */ var _t_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./t_about.js */ "./src/common/scripts/t_about.js");
/* harmony import */ var _t_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./t_contact.js */ "./src/common/scripts/t_contact.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Content = /*#__PURE__*/function () {
  function Content(root, className) {
    _classCallCheck(this, Content);

    this.root = root;
    this.className = className;
    this.render();
  }

  _createClass(Content, [{
    key: "render",
    value: function render() {
      this.page = document.createElement('div');
      this.page.classList.add(this.className);
      this.homePage = new _t_main_js__WEBPACK_IMPORTED_MODULE_0__["Main"](this.page, 'home', 'tab');
      this.shopPage = new _t_shop_js__WEBPACK_IMPORTED_MODULE_1__["Shop"](this.page, 'shop', 'tab');
      this.aboutPage = new _t_about_js__WEBPACK_IMPORTED_MODULE_2__["About"](this.page, 'about', 'tab');
      this.contactPage = new _t_contact_js__WEBPACK_IMPORTED_MODULE_3__["Contact"](this.page, 'contact', 'tab');
      this.root.append(this.page);
    }
  }]);

  return Content;
}();

/***/ }),

/***/ "./src/common/scripts/create_menu_element.js":
/*!***************************************************!*\
  !*** ./src/common/scripts/create_menu_element.js ***!
  \***************************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Item = /*#__PURE__*/function () {
  function Item(root, itemsClassName, itemName, innerHTML) {
    _classCallCheck(this, Item);

    this.root = root;
    this.itemClassName = itemsClassName;
    this.innHTML = innerHTML;
    this.itemName = itemName;
    this.render();
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      this.item = document.createElement('li');
      this.item.classList.add(this.itemClassName);
      this.item.classList.add(this.itemName);
      this.item.innerHTML = this.innHTML;
      this.root.append(this.item);
    }
  }]);

  return Item;
}();

/***/ }),

/***/ "./src/common/scripts/foot_header_items.js":
/*!*************************************************!*\
  !*** ./src/common/scripts/foot_header_items.js ***!
  \*************************************************/
/*! exports provided: FootHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootHeader", function() { return FootHeader; });
/* harmony import */ var _C_A_logo_title_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./C_A_logo_title.js */ "./src/common/scripts/C_A_logo_title.js");
/* harmony import */ var _C_A_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./C_A_menu.js */ "./src/common/scripts/C_A_menu.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FootHeader = /*#__PURE__*/function () {
  function FootHeader(root, classNameImg, classNameMenu) {
    _classCallCheck(this, FootHeader);

    this.root = root;
    this.classNameImg = classNameImg;
    this.classNameMenu = classNameMenu;
    this.render();
  }

  _createClass(FootHeader, [{
    key: "render",
    value: function render() {
      this.logoBlock = document.createElement('div');
      this.logoBlock.classList.add(this.classNameImg);
      this.root.append(this.logoBlock);
      this.logo = new _C_A_logo_title_js__WEBPACK_IMPORTED_MODULE_0__["Logo"](this.logoBlock, 'header__logo', 'header__title');
      this.menuBlock = document.createElement('div');
      this.menuBlock.classList.add(this.classNameMenu);
      this.root.append(this.menuBlock);
      this.menu = new _C_A_menu_js__WEBPACK_IMPORTED_MODULE_1__["Menu"](this.menuBlock, 'menu', 'idMenu');
    }
  }]);

  return FootHeader;
}();

/***/ }),

/***/ "./src/common/scripts/footer.js":
/*!**************************************!*\
  !*** ./src/common/scripts/footer.js ***!
  \**************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var _footer_blocks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer_blocks.js */ "./src/common/scripts/footer_blocks.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Footer = /*#__PURE__*/function () {
  function Footer(root, className) {
    _classCallCheck(this, Footer);

    this.root = root;
    this.className = className;
    this.render();
    this.addBlocks();
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      this.footer = document.createElement('footer');
      this.footer.classList.add(this.className);
      this.root.append(this.footer);
    }
  }, {
    key: "addBlocks",
    value: function addBlocks() {
      this.block = new _footer_blocks_js__WEBPACK_IMPORTED_MODULE_0__["FooterBlock"](this.footer, 'footer__top-block', 'footer__copyrights-block', '© 2023 by Cielo Apparel. Proudly created with Wix.com', 'copyright-style');
    }
  }]);

  return Footer;
}();

/***/ }),

/***/ "./src/common/scripts/footer_blocks.js":
/*!*********************************************!*\
  !*** ./src/common/scripts/footer_blocks.js ***!
  \*********************************************/
/*! exports provided: FooterBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBlock", function() { return FooterBlock; });
/* harmony import */ var _footer_nav_elems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer_nav_elems.js */ "./src/common/scripts/footer_nav_elems.js");
/* harmony import */ var _footer_nav_blocks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer_nav_blocks.js */ "./src/common/scripts/footer_nav_blocks.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FooterBlock = /*#__PURE__*/function () {
  function FooterBlock(root, classNameFirst, classNameSecond, copyRightText, copyRightTextclass) {
    _classCallCheck(this, FooterBlock);

    this.root = root;
    this.classNameFirst = classNameFirst;
    this.classNameSecond = classNameSecond;
    this.copyRightText = copyRightText;
    this.copyRightTextClass = copyRightTextclass;
    this.renderFirst();
    this.renderSecond();
  } // renderFirst створює верхній блок з навігаційними блоками


  _createClass(FooterBlock, [{
    key: "renderFirst",
    value: function renderFirst() {
      this.element = document.createElement('div');
      this.element.classList.add(this.classNameFirst);
      this.root.append(this.element);
      this.cieApp = new _footer_nav_blocks_js__WEBPACK_IMPORTED_MODULE_1__["FooterNavBlock"](this.element, 'footer__nav-block', 'footer__title', 'footer__content', 'Cielo Apparel', 'idFooterMenu');
      this.cieApp.innerContent = new _footer_nav_elems_js__WEBPACK_IMPORTED_MODULE_0__["List"](this.cieApp.content, 'a', 5, 'Home', 'Shop', 'About', 'Contact', 'Forum');
      this.explore = new _footer_nav_blocks_js__WEBPACK_IMPORTED_MODULE_1__["FooterNavBlock"](this.element, 'footer__nav-block', 'footer__title', 'footer__content', 'Explore', 'idExplore');
      this.explore.innerContent = new _footer_nav_elems_js__WEBPACK_IMPORTED_MODULE_0__["List"](this.explore.content, 'a', 4, 'FAQ', 'Shipping and Returns', 'Store Policy', 'Payment Methods', '');
      this.joinUs = new _footer_nav_blocks_js__WEBPACK_IMPORTED_MODULE_1__["FooterNavBlock"](this.element, 'footer__nav-block', 'footer__title', 'footer__content', 'Join Our NewsLetter', 'idJoinUs');
      this.joinUs.innerContent = new _footer_nav_elems_js__WEBPACK_IMPORTED_MODULE_0__["List"](this.joinUs.content, 'b', 0);
      this.joinUs.innerContent.email.placeholder = 'Enter your email here*';
      this.followUs = new _footer_nav_blocks_js__WEBPACK_IMPORTED_MODULE_1__["FooterNavBlock"](this.element, 'footer__nav-block', 'footer__title', 'footer__content', 'Follow Us', 'idFollowUs');
      this.followUs.innerContent = new _footer_nav_elems_js__WEBPACK_IMPORTED_MODULE_0__["List"](this.followUs.content, 'a', 4, 'Facebook', 'Twitter', 'Instagram', 'Pinterest', '');
    } // renderSecond створює нижній блок з copyrigths

  }, {
    key: "renderSecond",
    value: function renderSecond() {
      this.element = document.createElement('div');
      this.innerContent = document.createElement('span');
      this.innerContent.classList.add(this.copyRightTextClass);
      this.innerContent.textContent = this.copyRightText;
      this.element.classList.add(this.classNameSecond);
      this.element.append(this.innerContent);
      this.root.append(this.element);
    }
  }]);

  return FooterBlock;
}();

/***/ }),

/***/ "./src/common/scripts/footer_nav_blocks.js":
/*!*************************************************!*\
  !*** ./src/common/scripts/footer_nav_blocks.js ***!
  \*************************************************/
/*! exports provided: FooterNavBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterNavBlock", function() { return FooterNavBlock; });
/* harmony import */ var _footer_nav_elems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer_nav_elems.js */ "./src/common/scripts/footer_nav_elems.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var FooterNavBlock = /*#__PURE__*/function () {
  function FooterNavBlock(root, classNameBlocks, classNameSpan, classNameBlock, titleName, id) {
    _classCallCheck(this, FooterNavBlock);

    this.root = root;
    this.blocksClassName = classNameBlocks;
    this.classNameSpan = classNameSpan;
    this.classNameBlock = classNameBlock;
    this.titleName = titleName;
    this.id = id;
    this.render();
  }

  _createClass(FooterNavBlock, [{
    key: "render",
    value: function render() {
      this.block = document.createElement('div');
      this.block.classList.add(this.blocksClassName);
      this.block.id = this.id;
      this.span = document.createElement('span');
      this.span.classList.add(this.classNameSpan);
      this.span.textContent = this.titleName;
      this.content = document.createElement('div');
      this.content.classList.add(this.classNameBlock);
      this.block.append(this.span, this.content);
      this.root.append(this.block);
    }
  }]);

  return FooterNavBlock;
}();

/***/ }),

/***/ "./src/common/scripts/footer_nav_elems.js":
/*!************************************************!*\
  !*** ./src/common/scripts/footer_nav_elems.js ***!
  \************************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List = /*#__PURE__*/function () {
  function List(root, typeOfContentAorB, numberOfAelements, nameFirst, nameSecond, nameThird, nameFourth, nameFifth) {
    _classCallCheck(this, List);

    this.root = root;
    this.type = typeOfContentAorB;
    this.number = numberOfAelements;
    this.name = [nameFirst, nameSecond, nameThird, nameFourth, nameFifth];
    this.render();
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      if (this.type === 'a') {
        this.element = document.createElement('ul');

        for (var i = 0; i < this.number; i++) {
          this.listEl = document.createElement('li');
          this.listEl.classList.add('footer__list' + [i], 'footer__list');
          this.listEl.textContent = this.name[i];
          this.element.append(this.listEl);
        }

        this.root.append(this.element);
      } else if (this.type === 'b') {
        this.email = document.createElement('input');
        this.email.style.placeholder = 'Enter your email here*';
        this.email.classList.add('footer__email');
        this.button = document.createElement('button');
        this.button.textContent = 'Subscribe now';
        this.button.classList.add('home__button', 'footer__button');
        this.root.append(this.email, this.button);
      }
    }
  }]);

  return List;
}();

/***/ }),

/***/ "./src/common/scripts/header.js":
/*!**************************************!*\
  !*** ./src/common/scripts/header.js ***!
  \**************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _header_blocks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header_blocks.js */ "./src/common/scripts/header_blocks.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Header = /*#__PURE__*/function () {
  function Header(root, className) {
    _classCallCheck(this, Header);

    this.root = root;
    this.className = className;
    this.render();
    this.addBlocks();
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      this.element = document.createElement('header');
      this.element.classList.add(this.className);
      this.root.append(this.element);
    }
  }, {
    key: "addBlocks",
    value: function addBlocks() {
      this.topBlock = new _header_blocks_js__WEBPACK_IMPORTED_MODULE_0__["topBlock"](this.element, 'header__top-block', 'header__foot-block', 'Get 15% OFF - Use Coupon Code CIELO', 'header__top-block_title-style');
    }
  }]);

  return Header;
}();

/***/ }),

/***/ "./src/common/scripts/header_blocks.js":
/*!*********************************************!*\
  !*** ./src/common/scripts/header_blocks.js ***!
  \*********************************************/
/*! exports provided: topBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topBlock", function() { return topBlock; });
/* harmony import */ var _foot_header_items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foot_header_items.js */ "./src/common/scripts/foot_header_items.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var topBlock = /*#__PURE__*/function () {
  function topBlock(root, classNameFirst, classNameSecond, advText, advTextclass) {
    _classCallCheck(this, topBlock);

    this.root = root;
    this.classNameFirst = classNameFirst;
    this.classNameSecond = classNameSecond;
    this.advertText = advText;
    this.advertTextClass = advTextclass;
    this.renderFirst();
    this.renderSecond();
  } // renderFirst створює верхній блок з рекламним надписом в header


  _createClass(topBlock, [{
    key: "renderFirst",
    value: function renderFirst() {
      this.element = document.createElement('div');
      this.innerContent = document.createElement('span');
      this.innerContent.classList.add(this.advertTextClass);
      this.innerContent.textContent = this.advertText;
      this.element.classList.add(this.classNameFirst);
      this.element.append(this.innerContent);
      this.root.append(this.element);
    } // renderSecond створює нижній блок з лого і меню в header

  }, {
    key: "renderSecond",
    value: function renderSecond() {
      this.element = document.createElement('div');
      this.element.classList.add(this.classNameSecond);
      this.root.append(this.element);
      this.innerBlock = new _foot_header_items_js__WEBPACK_IMPORTED_MODULE_0__["FootHeader"](this.element, 'header__logo-block', 'header__menu-block');
    }
  }]);

  return topBlock;
}();

/***/ }),

/***/ "./src/common/scripts/shop__menu.js":
/*!******************************************!*\
  !*** ./src/common/scripts/shop__menu.js ***!
  \******************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu = /*#__PURE__*/function () {
  function Menu(root, classNameSpan, classNameUl, classNameLi) {
    _classCallCheck(this, Menu);

    this.root = root;
    this.spanclassname = classNameSpan;
    this.ulclassname = classNameUl;
    this.liclassname = classNameLi;
    this.render();
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      this.collection = document.createElement('span');
      this.collection.innerHTML = 'Collection';
      this.collection.classList.add(this.spanclassname);
      this.ul = document.createElement('ul');
      this.ul.classList.add(this.ulclassname);
      this.collectionBlock = document.createElement('div');
      this.collectionBlock.classList.add('catalogue__collection-block');
      this.collectionBlock.append(this.collection, this.ul);
      this.price = document.createElement('span');
      this.price.innerHTML = 'Price';
      this.price.classList.add(this.spanclassname);
      this.priceContent = document.createElement('div');
      this.priceContent.classList.add('catalogue__price-content');
      this.priceBlock = document.createElement('div');
      this.priceBlock.classList.add('catalogue__price-block');
      this.priceBlock.append(this.price, this.priceContent);
      this.color = document.createElement('span');
      this.color.innerHTML = 'Color';
      this.color.classList.add(this.spanclassname);
      this.colorContent = document.createElement('div');
      this.colorContent.classList.add('catalogue__color-content');
      this.colorBlock = document.createElement('div');
      this.colorBlock.classList.add('catalogue__color-block');
      this.colorBlock.append(this.color, this.colorContent);
      this.size = document.createElement('span');
      this.size.innerHTML = 'Size';
      this.size.classList.add(this.spanclassname);
      this.sizeContent = document.createElement('div');
      this.sizeContent.classList.add('catalogue__size-content');
      this.sizeBlock = document.createElement('div');
      this.sizeBlock.classList.add("catalogue__size-block");
      this.sizeBlock.append(this.size, this.sizeContent);
      this.root.append(this.collectionBlock, this.priceBlock, this.colorBlock, this.sizeBlock);
      this.li = new createCollection(this.ul, 'catalogue__list', 'hidden');
      this.range = new createPrice(this.priceContent, 'catalogue__range', 'hidden');
      this.colors = new createColors(this.colorContent, 'catalogue__colors', 'hidden');
      this.sizes = new createSize(this.sizeContent, 'catalogue__sizes', 'hidden');
    }
  }]);

  return Menu;
}();

var createCollection = /*#__PURE__*/function () {
  function createCollection(root, classNameLi, classHidden) {
    _classCallCheck(this, createCollection);

    this.root = root;
    this.liclassname = classNameLi;
    this.hiddenclass = classHidden;
    this.render();
  }

  _createClass(createCollection, [{
    key: "render",
    value: function render() {
      this.all = document.createElement('li');
      this.all.innerHTML = 'All';
      this.all.classList.add(this.liclassname);
      this.sportbras = document.createElement('li');
      this.sportbras.innerHTML = 'Sport bras';
      this.sportbras.classList.add(this.liclassname);
      this.leggins = document.createElement('li');
      this.leggins.innerHTML = 'Leggins';
      this.leggins.classList.add(this.liclassname);
      this.shirts = document.createElement('li');
      this.shirts.innerHTML = 'Shirts';
      this.shirts.classList.add(this.liclassname);
      this.shorts = document.createElement('li');
      this.shorts.innerHTML = 'Shorts';
      this.shorts.classList.add(this.liclassname);
      this.newarrivals = document.createElement('li');
      this.newarrivals.innerHTML = 'New Arrivals';
      this.newarrivals.classList.add(this.liclassname);
      this.bestsellers = document.createElement('li');
      this.bestsellers.innerHTML = 'Best Sellers';
      this.bestsellers.classList.add(this.liclassname);
      this.root.classList.add(this.hiddenclass);
      this.root.append(this.all, this.sportbras, this.leggins, this.shirts, this.shorts, this.newarrivals, this.bestsellers);
    }
  }]);

  return createCollection;
}();

var createPrice = /*#__PURE__*/function () {
  function createPrice(root, classNameInput, classHidden) {
    _classCallCheck(this, createPrice);

    this.root = root;
    this.classNameInput = classNameInput;
    this.hiddenclass = classHidden;
    this.render();
  }

  _createClass(createPrice, [{
    key: "render",
    value: function render() {
      this.input = document.createElement('input');
      this.input.type = 'range';
      this.input.max = '40';
      this.input.min = '0';
      this.input.step = '1';
      this.input.value = '1';
      this.input.classList.add(this.classNameInput);
      this.root.classList.add(this.hiddenclass);
      this.root.append(this.input);
    }
  }]);

  return createPrice;
}();

var createColors = /*#__PURE__*/function () {
  function createColors(root, classNameColors, classHidden) {
    _classCallCheck(this, createColors);

    this.root = root;
    this.classNameColors = classNameColors;
    this.hiddenclass = classHidden;
    this.render();
  }

  _createClass(createColors, [{
    key: "render",
    value: function render() {
      var colors = [];

      for (var i = 0; i < 12; i++) {
        colors[i] = document.createElement('div');
        colors[i].classList.add(this.classNameColors, 'color#' + [i]);
        this.root.classList.add(this.hiddenclass);
        this.root.append(colors[i]);
      }
    }
  }]);

  return createColors;
}();

var createSize = /*#__PURE__*/function () {
  function createSize(root, classNameElement, classHidden) {
    _classCallCheck(this, createSize);

    this.root = root;
    this.classNameEl = classNameElement;
    this.hiddenclass = classHidden;
    this.render();
  }

  _createClass(createSize, [{
    key: "render",
    value: function render() {
      this.small = document.createElement('input');
      this.small.type = 'checkbox';
      this.small.value = 'Small';
      this.small.name = 'small';
      this.small.id = 'small';
      this.small.classList.add(this.classNameEl);
      this.medium = document.createElement('input');
      this.medium.type = 'checkbox';
      this.medium.value = 'Medium';
      this.medium.name = 'medium';
      this.medium.id = 'medium';
      this.medium.classList.add(this.classNameEl);
      this.large = document.createElement('input');
      this.large.type = 'checkbox';
      this.large.value = 'Large';
      this.large.name = 'large';
      this.large.id = 'large';
      this.large.classList.add(this.classNameEl);
      this.root.append(this.small, this.medium, this.large);
      this.root.classList.add(this.hiddenclass);
      this.addLabel();
    }
  }, {
    key: "addLabel",
    value: function addLabel() {
      this.checkBoxArray = [this.small, this.medium, this.large];

      for (var i = 0; i < this.checkBoxArray.length; i++) {
        var label = document.createElement('label');
        label.setAttribute('for', this.checkBoxArray[i].name);
        label.innerHTML = this.checkBoxArray[i].value;
        this.checkBoxArray[i].after(label);
      }
    }
  }]);

  return createSize;
}();

/***/ }),

/***/ "./src/common/scripts/t_about.js":
/*!***************************************!*\
  !*** ./src/common/scripts/t_about.js ***!
  \***************************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./t_main_elements.js */ "./src/common/scripts/t_main_elements.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var About = /*#__PURE__*/function () {
  function About(root, className, classNameAll) {
    _classCallCheck(this, About);

    this.root = root;
    this.className = className;
    this.classNameAll = classNameAll;
    this.render();
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      this.homePage = document.createElement('div');
      this.homePage.classList.add(this.className);
      this.homePage.classList.add(this.classNameAll);
      this.root.append(this.homePage);
      this.innerElement = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.homePage, 1, 'about__blocks', 'idAboutPageBlock', 'div');
      this.innerElement.content = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[0], 2, 'about__intro', 'idAboutIntro', 'div');
      this.innerElement.content.elements[0].innerHTML = "\n        <h3 class='about__intro_title'>ABOUT</h3>\n        <p class='about__intro_paragraph'>I'm a paragraph. Click here to add your</br>\n        own text and edit me. It\u2019s easy. Just click</br>\n        \u201CEdit Text\u201D or double click me to add your</br>\n        own content and make changes to the font.</br>\n        Feel free to drag and drop me anywhere you</br>\n        like on your page. I\u2019m a great place for you</br>\n        to tell a story and let your users know a</br>\n        little more about you.</br>\n        </br>     \u200B\n        This is a great space to write long text about</br>\n        your company and your services. You can use</br>\n        this space to go into a little more detail</br>\n        about your company. Talk about your team and</br>\n        what services you provide. Tell your visitors</br>\n        the story of how you came up with the idea for</br>\n        your business and what makes you different from</br>\n        your competitors. Make your company stand out</br>\n        and show your visitors who you are.</p>";
    }
  }]);

  return About;
}();

/***/ }),

/***/ "./src/common/scripts/t_contact.js":
/*!*****************************************!*\
  !*** ./src/common/scripts/t_contact.js ***!
  \*****************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./t_main_elements.js */ "./src/common/scripts/t_main_elements.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Contact = /*#__PURE__*/function () {
  function Contact(root, className, classNameAll) {
    _classCallCheck(this, Contact);

    this.root = root;
    this.className = className;
    this.classNameAll = classNameAll;
    this.render();
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      this.homePage = document.createElement('div');
      this.homePage.classList.add(this.className);
      this.homePage.classList.add(this.classNameAll);
      this.root.append(this.homePage);
      this.innerElement = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.homePage, 1, 'contact__blocks', 'idContactPageBlock', 'div');
      this.innerElement.content = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[0], 2, 'contact__intro', 'idContactIntro', 'div');
      this.innerElement.content.wrapper = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.content.elements[0], 1, 'contact__wrapper', 'idContactWrapper', 'div');
      this.innerElement.content.wrapper.elements[0].innerHTML = "\n        <h3 class='about__intro_title'>CONTACT</h3>\n        <h4 class='contact__intro_header'>VISIT OUR STORES</h4>\n        <p class='contact__intro_descrip'>\n        Address: 500 Terry Francois Street</br>\n        San Francisco, CA 94158</br>      \n        Phone: 123-456-7890</br>        \n        Email:  info@my-domain.com</br></p>\n        <div class='contact__user-data-block'>\n        <div class='contact__name-and-email'>\n        <input class='contact__input' placeholder='Name*'>\n        <input class='contact__input' placeholder='Email*'>\n        </div>\n        <textarea class='contact__comment' placeholder='Type your message here...'></textarea>\n        <button class='contact__subbtn'>Submit</button></div>\n        <h4 class='contact__intro_header'>STOCKLISTS</h4>\n        <p class='contact__intro_descrip'>\n        Store 1</br>\n        Address: 500 Terry Francois Street</br>\n        San Francisco, CA 94158</br>      \n        Phone: 123-456-7890</br>        \n        Email:  info@my-domain.com</br></p></br>\n        <p class='contact__intro_descrip'>\n        Store 2</br>\n        Address: 500 Terry Francois Street</br>\n        San Francisco, CA 94158</br>      \n        Phone: 123-456-7890</br>        \n        Email:  info@my-domain.com</br></p></br>\n        <p class='contact__intro_descrip'>\n        Store 3</br>\n        Address: 500 Terry Francois Street</br>\n        San Francisco, CA 94158</br>      \n        Phone: 123-456-7890</br>        \n        Email:  info@my-domain.com</br></p></br>\n        <p class='contact__intro_descrip'>\n        Store 4</br>\n        Address: 500 Terry Francois Street</br>\n        San Francisco, CA 94158</br>      \n        Phone: 123-456-7890</br>        \n        Email:  info@my-domain.com</br></p>\n        ";
    }
  }]);

  return Contact;
}();

/***/ }),

/***/ "./src/common/scripts/t_main.js":
/*!**************************************!*\
  !*** ./src/common/scripts/t_main.js ***!
  \**************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./t_main_elements.js */ "./src/common/scripts/t_main_elements.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Main = /*#__PURE__*/function () {
  function Main(root, className, classNameAll) {
    _classCallCheck(this, Main);

    this.root = root;
    this.className = className;
    this.classNameAll = classNameAll;
    this.render();
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      this.homePage = document.createElement('div');
      this.homePage.classList.add(this.className);
      this.homePage.classList.add(this.classNameAll);
      this.root.append(this.homePage); //Here will be addition of all blocks for 1 PAGE "Home"

      this.innerElement = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.homePage, 6, 'home__blocks', 'idHomePageBlock', 'div'); //First introduction block on home page

      this.innerElement.content = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[0], 2, 'home__intro', 'idHomeIntro', 'div');
      this.innerElement.title = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[0].children[0], 1, 'home__title', 'idHomeTitle', 'span');
      this.innerElement.title.elements[0].innerHTML = 'Introducing Your New Workout Wardrobe';
      this.innerElement.button = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[0].children[0], 1, 'home__button', 'idHomeButton', 'button');
      this.innerElement.button.elements[0].innerHTML = 'Start Shopping'; // Second block - SECTIONS

      this.innerElement.content = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[1], 3, 'home__sections', 'idHomeSectio', 'div');
      this.innerElement.title = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[1].children[0], 1, 'home__sections_titles', 'idHomeCieloStory', 'span');
      this.innerElement.title.elements[0].innerHTML = 'The Cielo Story';
      this.innerElement.title = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[1].children[1], 1, 'home__sections_titles', 'idHomeViewCollect', 'span');
      this.innerElement.title.elements[0].innerHTML = 'View Our Collection';
      this.innerElement.title = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[1].children[2], 1, 'home__sections_titles', 'idHomeJoinOurCom', 'span');
      this.innerElement.title.elements[0].innerHTML = 'Join Our Community'; // Third block - LATEST ARRIVALS

      this.innerElement.content = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[2], 1, 'home__latest', 'idHomeLatest', 'div');
      this.innerElement.title = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[2].children[0], 1, 'home__latest_title', 'idHomeLatestTitle', 'span');
      this.innerElement.title.elements[0].innerHTML = 'Latest arrivals'; // Fourth block - LATEST ARRIVALS - ITEMS - GOODS

      this.innerElement.content = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[3], 4, 'home__goods', 'idHomeGoods', 'div');
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[3].children[0], 3, 'home__goods_items-1-', 'idHomeGoodsItems-1-', 'div');
      this.innerElement.item.elements[2].innerHTML = 'Running Top';
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[3].children[1], 3, 'home__goods_items-2-', 'idHomeGoodsItems-2-', 'div');
      this.innerElement.item.elements[2].innerHTML = 'Running Shorts';
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[3].children[2], 3, 'home__goods_items-3-', 'idHomeGoodsItems-3-', 'div');
      this.innerElement.item.elements[2].innerHTML = 'Seamless Bra';
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[3].children[3], 3, 'home__goods_items-4-', 'idHomeGoodsItems-4-', 'div');
      this.innerElement.item.elements[2].innerHTML = 'Printed Leggins'; // Fifth block - GIRLS

      this.innerElement.content = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[4], 5, 'home__girls', 'idHomeGirls', 'div'); //Sixth blocks - FOLLOW US ON INSTAGRAM

      this.innerElement.content = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[5], 1, 'home__follow', 'idHomeFollow', 'div');
      this.innerElement.title = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[5].children[0], 1, 'home__latest_title', 'idHomeFollowUsTitle', 'span');
      this.innerElement.title.elements[0].innerHTML = 'FOLLOW US ON </br> INSTAGRAM';
    }
  }]);

  return Main;
}();

/***/ }),

/***/ "./src/common/scripts/t_main_elements.js":
/*!***********************************************!*\
  !*** ./src/common/scripts/t_main_elements.js ***!
  \***********************************************/
/*! exports provided: Blocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blocks", function() { return Blocks; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Blocks = /*#__PURE__*/function () {
  function Blocks(root, numberOfBlocks, classNameBlocks, id, typeOfElem) {
    _classCallCheck(this, Blocks);

    this.root = root;
    this.number = numberOfBlocks;
    this.className = classNameBlocks;
    this.id = id;
    this.type = typeOfElem;
    this.render();
  }

  _createClass(Blocks, [{
    key: "render",
    value: function render() {
      this.elements = new Array(this.number);

      for (var i = 0; i < this.number; i++) {
        this.elements[i] = document.createElement(this.type);
        this.elements[i].classList.add(this.className);
        this.elements[i].classList.add(this.className + [i]);
        this.elements[i].id = this.id + [i];
        this.root.append(this.elements[i]);
      }
    }
  }]);

  return Blocks;
}();

/***/ }),

/***/ "./src/common/scripts/t_shop.js":
/*!**************************************!*\
  !*** ./src/common/scripts/t_shop.js ***!
  \**************************************/
/*! exports provided: Shop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shop", function() { return Shop; });
/* harmony import */ var _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./t_main_elements.js */ "./src/common/scripts/t_main_elements.js");
/* harmony import */ var _shop_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop__menu.js */ "./src/common/scripts/shop__menu.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Shop = /*#__PURE__*/function () {
  function Shop(root, className, classNameAll) {
    _classCallCheck(this, Shop);

    this.root = root;
    this.className = className;
    this.classNameAll = classNameAll;
    this.render();
  }

  _createClass(Shop, [{
    key: "render",
    value: function render() {
      this.homePage = document.createElement('div');
      this.homePage.classList.add(this.className);
      this.homePage.classList.add(this.classNameAll);
      var goodName = "I'm a product";
      this.root.append(this.homePage);
      this.innerElement = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.homePage, 2, 'shop__blocks', 'idShopPageBlock', 'div');
      this.innerElement.content = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[0], 2, 'shop__intro', 'idShopIntro', 'div');
      this.innerElement.content.elements[0].innerHTML = "<h3 class='about__intro_title shop__title'>SHOP</h3>";
      this.innerElement.catalogue = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.elements[1], 2, 'shop__catalogue', 'idShopShop', 'div');
      this.innerElement.catalogue.elements[0].innerHTML = "<h3 class='catalogue__filterBy'>Filter by</h3>";
      this.innerElement.shopMenu = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.catalogue.elements[0], 1, 'catalogue__filters', 'idCatalogueFilters', 'div');
      this.innerElement.catalogue.menu = new _shop_menu_js__WEBPACK_IMPORTED_MODULE_1__["Menu"](this.innerElement.shopMenu.elements[0], 'catalogue__span', 'catalogue__ul', 'catalogue__li'); //Block with shop goods

      this.innerElement.goods = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.catalogue.elements[1], 16, 'shop__goods', 'idShopGoods', 'div');
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.catalogue.elements[1].children[0], 3, 'shop__goods_items-1-', 'idShopGoodsItems-1-', 'div');
      this.innerElement.item.elements[2].innerHTML = goodName;
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.catalogue.elements[1].children[1], 3, 'shop__goods_items-2-', 'idShopGoodsItems-2-', 'div');
      this.innerElement.item.elements[2].innerHTML = goodName;
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.catalogue.elements[1].children[2], 3, 'shop__goods_items-3-', 'idShopGoodsItems-3-', 'div');
      this.innerElement.item.elements[2].innerHTML = goodName;
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.catalogue.elements[1].children[3], 3, 'shop__goods_items-4-', 'idShopGoodsItems-4-', 'div');
      this.innerElement.item.elements[2].innerHTML = goodName;
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.catalogue.elements[1].children[4], 3, 'shop__goods_items-5-', 'idShopGoodsItems-5-', 'div');
      this.innerElement.item.elements[2].innerHTML = goodName;
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.catalogue.elements[1].children[5], 3, 'shop__goods_items-6-', 'idShopGoodsItems-6-', 'div');
      this.innerElement.item.elements[2].innerHTML = goodName;
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.catalogue.elements[1].children[6], 3, 'shop__goods_items-7-', 'idShopGoodsItems-7-', 'div');
      this.innerElement.item.elements[2].innerHTML = goodName;
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.catalogue.elements[1].children[7], 3, 'shop__goods_items-8-', 'idShopGoodsItems-8-', 'div');
      this.innerElement.item.elements[2].innerHTML = goodName;
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.catalogue.elements[1].children[8], 3, 'shop__goods_items-9-', 'idShopGoodsItems-9-', 'div');
      this.innerElement.item.elements[2].innerHTML = goodName;
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.catalogue.elements[1].children[9], 3, 'shop__goods_items-10-', 'idShopGoodsItems-10-', 'div');
      this.innerElement.item.elements[2].innerHTML = goodName;
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.catalogue.elements[1].children[10], 3, 'shop__goods_items-11-', 'idShopGoodsItems-11-', 'div');
      this.innerElement.item.elements[2].innerHTML = goodName;
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.catalogue.elements[1].children[11], 3, 'shop__goods_items-12-', 'idShopGoodsItems-12-', 'div');
      this.innerElement.item.elements[2].innerHTML = goodName;
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.catalogue.elements[1].children[12], 3, 'shop__goods_items-13-', 'idShopGoodsItems-13-', 'div');
      this.innerElement.item.elements[2].innerHTML = goodName;
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.catalogue.elements[1].children[13], 3, 'shop__goods_items-14-', 'idShopGoodsItems-14-', 'div');
      this.innerElement.item.elements[2].innerHTML = goodName;
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.catalogue.elements[1].children[14], 3, 'shop__goods_items-15-', 'idShopGoodsItems-15-', 'div');
      this.innerElement.item.elements[2].innerHTML = goodName;
      this.innerElement.item = new _t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.innerElement.catalogue.elements[1].children[15], 3, 'shop__goods_items-16-', 'idShopGoodsItems-16-', 'div');
      this.innerElement.item.elements[2].innerHTML = goodName;
    }
  }]);

  return Shop;
}();

/***/ }),

/***/ "./src/common/scripts/tabs.js":
/*!************************************!*\
  !*** ./src/common/scripts/tabs.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.onload = function total() {
  hideAllTabs();
  quickView();
  quickViewonShopPage();
  openingMenu();
  makeBurgerMenu();
  logInForm(); // FUNCTION HIDE ALL TABS - EXECUTIVE FOR HIDING OF SHOWING TABS LOGIC

  function hideAllTabs() {
    clickOnStShopButton();
    clickOnCeiloStory();
    clickOnOurCollectio();
    clickOnOurContactUs();
    var tab; // заголовок вкладки

    var tabContent; // блок содержащий контент вкладки

    var footerMenutab;
    tab = document.querySelectorAll('.menu__item');
    tabContent = document.querySelectorAll('.tab');
    footerMenuTab = document.querySelectorAll('.footer__list');
    var body = document.querySelector('body');

    for (var i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }

    tabContent[0].classList.add('show');

    document.getElementById('idMenu').onclick = function (event) {
      var target = event.target;

      if (target.classList.contains('menu__item')) {
        for (var _i = 0; _i < tab.length; _i++) {
          if (target == tab[_i]) {
            showTabsContent(_i);
            break;
          }
        }
      }
    };

    document.getElementById('idFooterMenu').onclick = function (event) {
      var target = event.target;

      if (target.classList.contains('footer__list')) {
        for (var _i2 = 0; _i2 < footerMenuTab.length; _i2++) {
          if (target == footerMenuTab[_i2]) {
            showTabsContent(_i2);
            break;
          }
        }
      }
    };

    function hideTabsContent(a) {
      for (var _i3 = a; _i3 < tabContent.length; _i3++) {
        tabContent[_i3].classList.remove('show');

        tabContent[_i3].classList.add("hide");
      }
    }

    function showTabsContent(b) {
      if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
      }
    }

    function clickOnStShopButton() {
      var button = document.getElementById('idHomeButton0');
      button.addEventListener('click', function () {
        hideTabsContent(0);
        showTabsContent(1);
      });
    }

    function clickOnCeiloStory() {
      var button = document.getElementById('idHomeSectio0');
      button.addEventListener('click', function () {
        hideTabsContent(0);
        showTabsContent(2);
      });
    }

    function clickOnOurCollectio() {
      var button = document.getElementById('idHomeSectio1');
      button.addEventListener('click', function () {
        hideTabsContent(0);
        showTabsContent(1);
      });
    }

    function clickOnOurContactUs() {
      var button = document.getElementById('idHomeSectio2');
      button.addEventListener('click', function () {
        hideTabsContent(0);
        showTabsContent(3);
      });
    }
  } // FUNCTION QUICK VIEW - EXECUTIVE FOR SHOVING ANIMATION "QUICK VIEW" OF PART WITH NEW ARRIVALS


  function quickView() {
    var block = document.querySelector('.home__blocks3');
    var items = document.querySelectorAll('.home__goods > div');
    var pointingBlock = [items[0], items[3], items[6], items[9]];
    var item = [items[1], items[4], items[7], items[10]];

    for (var y = 0; y < items.length; y++) {
      items[y].classList.add('pointing__blocks');
    }

    ;

    for (var x = 0; x < item.length; x++) {
      item[x].textContent = 'Quick View';
    }

    ;

    block.onmouseover = function (event) {
      var target = event.target;

      if (target.classList.contains('pointing__blocks')) {
        for (var i = 0; i < pointingBlock.length; i++) {
          if (target === pointingBlock[i]) {
            item[i].classList.add('coverage');
            break;
          }
        }
      }
    };

    block.onmouseout = function (event) {
      var target = event.target;

      if (target.classList.contains('pointing__blocks')) {
        for (var i = 0; i < pointingBlock.length; i++) {
          if (target === pointingBlock[i]) {
            item[i].classList.remove('coverage');
            break;
          }
        }
      }
    };
  } // FUNCTION QUICK VIEW SHOP PAGE - EXECUTIVE FOR SHOVING ANIMATION "QUICK VIEW" SHOP 


  function quickViewonShopPage() {
    var block = document.querySelector('.shop__catalogue1');
    var items = document.querySelectorAll('.shop__goods');
    var item = [];

    for (var z = 0; z < items.length; z++) {
      item[z] = items[z].children[1];
    }

    ;

    for (var y = 0; y < items.length; y++) {
      items[y].classList.add('pointing__blocks');
    }

    ;

    for (var x = 0; x < item.length; x++) {
      item[x].textContent = 'Quick View';
    }

    ;

    block.onmouseover = function (event) {
      var target = event.target;
      console.log(target);

      if (target.classList.contains('pointing__blocks')) {
        for (var i = 0; i < items.length; i++) {
          if (target === items[i]) {
            item[i].classList.add('coverage');
            break;
          }
        }
      }
    };

    block.onmouseout = function (event) {
      var target = event.target;

      if (target.classList.contains('pointing__blocks')) {
        for (var i = 0; i < items.length; i++) {
          if (target === items[i]) {
            item[i].classList.remove('coverage');
            break;
          }
        }
      }
    };
  } // HERE WILL BE FUNCTION FOR SHOWING AND HIDING MENU ITEMS ON PAGE SHOP


  function openingMenu() {
    var titleItem = document.querySelector('.catalogue__collection-block');
    var body = document.querySelector('body');

    body.onclick = function (event) {
      var target = event.target;
    };
  }
}; // FUNCTION THAN MAKES BURGER MENU FOR SMALL DISPLAYS


function makeBurgerMenu() {
  var Burger = /*#__PURE__*/function () {
    function Burger(root) {
      _classCallCheck(this, Burger);

      this.root = root;
      this.render();
    }

    _createClass(Burger, [{
      key: "render",
      value: function render() {
        var _this = this;

        this.burger = document.createElement('button');
        this.burger.classList.add('hamburger');
        this.burger.classList.add('hamburger--squeeze');
        this.burger.addEventListener('click', function () {
          if (_this.burger.classList.contains('is-active')) {
            _this.burger.classList.remove('is-active');
          } else {
            _this.burger.classList.add('is-active');
          }
        });
        this.burgerbox = document.createElement('span');
        this.burgerbox.classList.add('hamburger-box');
        this.burgerinner = document.createElement('span');
        this.burgerinner.classList.add('hamburger-inner');
        this.burgerbox.append(this.burgerinner);
        this.burger.append(this.burgerbox);
        this.burger.addEventListener('click', function () {
          var item = document.querySelector('.menu');
          item.classList.toggle('menu__active');
          var menu = document.querySelector('.header__menu-block');
          menu.classList.toggle('menu__fixed');
          _this.burger.style.transform = 'translate(420%, -90%)';
        });
        this.root.append(this.burger);
      }
    }]);

    return Burger;
  }();

  ;
  var headerMenu = document.querySelector('.header__menu-block');
  var windowWidth = window.innerWidth;
  var item;

  if (windowWidth < 776) {
    item = new Burger(headerMenu);
  }
} // FUNCTION FOR LOGIN FORM


function logInForm() {
  var logInButton = document.querySelector('.login-link');
  logInButton.href = 'logIn.html';
}

/***/ }),

/***/ "./src/common/scripts/wrapper.js":
/*!***************************************!*\
  !*** ./src/common/scripts/wrapper.js ***!
  \***************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/common/scripts/header.js");
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.js */ "./src/common/scripts/content.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ "./src/common/scripts/footer.js");
/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.js */ "./src/common/scripts/tabs.js");
/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tabs_js__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Wrapper = /*#__PURE__*/function () {
  function Wrapper(root, className) {
    _classCallCheck(this, Wrapper);

    this.root = root;
    this.className = className;
    this.render();
  }

  _createClass(Wrapper, [{
    key: "render",
    value: function render() {
      this.page = document.createElement('div');
      this.page.classList.add(this.className);
      this.root.append(this.page);
      this.header = new _header_js__WEBPACK_IMPORTED_MODULE_0__["Header"](this.page, 'header');
      this.content = new _content_js__WEBPACK_IMPORTED_MODULE_1__["Content"](this.page, 'content');
      this.footer = new _footer_js__WEBPACK_IMPORTED_MODULE_2__["Footer"](this.page, 'footer');
    }
  }]);

  return Wrapper;
}();

/***/ }),

/***/ "./src/common/styles/about_page.scss":
/*!*******************************************!*\
  !*** ./src/common/styles/about_page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/styles/base.scss":
/*!*************************************!*\
  !*** ./src/common/styles/base.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/styles/contact_page.scss":
/*!*********************************************!*\
  !*** ./src/common/styles/contact_page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/styles/content.scss":
/*!****************************************!*\
  !*** ./src/common/styles/content.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/styles/footer.scss":
/*!***************************************!*\
  !*** ./src/common/styles/footer.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/styles/hamburger.scss":
/*!******************************************!*\
  !*** ./src/common/styles/hamburger.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/styles/header.scss":
/*!***************************************!*\
  !*** ./src/common/styles/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/styles/home_page.scss":
/*!******************************************!*\
  !*** ./src/common/styles/home_page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/styles/normalize.scss":
/*!******************************************!*\
  !*** ./src/common/styles/normalize.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/styles/shop_page.scss":
/*!******************************************!*\
  !*** ./src/common/styles/shop_page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index/index.css":
/*!*****************************!*\
  !*** ./src/index/index.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index/index.js":
/*!****************************!*\
  !*** ./src/index/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/index/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_styles_base_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/styles/base.scss */ "./src/common/styles/base.scss");
/* harmony import */ var _common_styles_base_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_styles_base_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_styles_header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/styles/header.scss */ "./src/common/styles/header.scss");
/* harmony import */ var _common_styles_header_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_styles_header_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_styles_home_page_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/styles/home_page.scss */ "./src/common/styles/home_page.scss");
/* harmony import */ var _common_styles_home_page_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_styles_home_page_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_styles_shop_page_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/styles/shop_page.scss */ "./src/common/styles/shop_page.scss");
/* harmony import */ var _common_styles_shop_page_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_common_styles_shop_page_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_styles_about_page_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/styles/about_page.scss */ "./src/common/styles/about_page.scss");
/* harmony import */ var _common_styles_about_page_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_common_styles_about_page_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_styles_contact_page_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/styles/contact_page.scss */ "./src/common/styles/contact_page.scss");
/* harmony import */ var _common_styles_contact_page_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_common_styles_contact_page_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_styles_footer_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/styles/footer.scss */ "./src/common/styles/footer.scss");
/* harmony import */ var _common_styles_footer_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_common_styles_footer_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_styles_content_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/styles/content.scss */ "./src/common/styles/content.scss");
/* harmony import */ var _common_styles_content_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_common_styles_content_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_styles_normalize_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/styles/normalize.scss */ "./src/common/styles/normalize.scss");
/* harmony import */ var _common_styles_normalize_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_common_styles_normalize_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_styles_hamburger_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/styles/hamburger.scss */ "./src/common/styles/hamburger.scss");
/* harmony import */ var _common_styles_hamburger_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_common_styles_hamburger_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_fonts_stylesheet_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/fonts/stylesheet.css */ "./assets/fonts/stylesheet.css");
/* harmony import */ var _assets_fonts_stylesheet_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_stylesheet_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_scripts_wrapper_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/scripts/wrapper.js */ "./src/common/scripts/wrapper.js");














var root = document.querySelector('body');
new _common_scripts_wrapper_js__WEBPACK_IMPORTED_MODULE_13__["Wrapper"](root, 'wrapper');

/***/ }),

/***/ "./src/index/styles/styles.scss":
/*!**************************************!*\
  !*** ./src/index/styles/styles.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/index/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index/index.js */"./src/index/index.js");


/***/ })

/******/ });
//# sourceMappingURL=index.js.map