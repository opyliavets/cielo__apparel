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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/logIn/logIn.css":
/*!*****************************!*\
  !*** ./src/logIn/logIn.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/logIn/logIn.js":
/*!****************************!*\
  !*** ./src/logIn/logIn.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logIn_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logIn.css */ "./src/logIn/logIn.css");
/* harmony import */ var _logIn_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_logIn_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_wrapper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/wrapper.js */ "./src/logIn/scripts/wrapper.js");
/* harmony import */ var _styles_logInForm_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/logInForm.scss */ "./src/logIn/styles/logInForm.scss");
/* harmony import */ var _styles_logInForm_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_logInForm_scss__WEBPACK_IMPORTED_MODULE_2__);




var root = document.querySelector('body');
new _scripts_wrapper_js__WEBPACK_IMPORTED_MODULE_1__["Wrapper"](root, 'login__wrapper');

/***/ }),

/***/ "./src/logIn/scripts/logInForm.js":
/*!****************************************!*\
  !*** ./src/logIn/scripts/logInForm.js ***!
  \****************************************/
/*! exports provided: LogInForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInForm", function() { return LogInForm; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LogInForm = /*#__PURE__*/function () {
  function LogInForm(root, className) {
    _classCallCheck(this, LogInForm);

    this.root = root;
    this.className = className;
    this.render();
  }

  _createClass(LogInForm, [{
    key: "render",
    value: function render() {
      this.block = document.createElement('div');
      this.block.classList.add(this.className);
      this.titleBlock = document.createElement('span');
      this.titleBlock.classList.add(this.className + '__title-block');
      this.title = document.createElement('h3');
      this.title.classList.add(this.className + '__title');
      this.title.innerHTML = "Sign Up";
      this.description = document.createElement('p');
      this.description.classList.add(this.className + '__description');
      this.description.innerHTML = "Already a member?<a href = '' class = 'signIn-link'>Log In</a>";
      this.signUpFacebookBlock = document.createElement('button');
      this.signUpFacebookBlock.classList.add(this.className + '__with-facebook');
      this.signUpFacebookBlock.classList.add('btn-form');
      this.signUpFacebookBlock.insertAdjacentHTML('afterbegin', "<a class='sign-up__facebook'><div class = 'icon-box__facebook'></div><p class = 'sign-up__descrip'>Sign Up with Facebook</p></a>");
      this.signUpGoogleBlock = document.createElement('button');
      this.signUpGoogleBlock.classList.add(this.className + '__with-google');
      this.signUpGoogleBlock.classList.add('btn-form');
      this.signUpGoogleBlock.insertAdjacentHTML('afterbegin', "<a class='sign-up__google'><div class = 'icon-box__google'></div><p class = 'sign-up__descrip'>Sign Up with Google</p></a>");
      this.or = document.createElement('span');
      this.or.classList.add(this.className + '__or');
      this.or.insertAdjacentHTML('afterbegin', 'or');
      this.signUpEmailBlock = document.createElement('button');
      this.signUpEmailBlock.classList.add(this.className + '__with-email');
      this.signUpEmailBlock.classList.add('btn-form');
      this.signUpEmailBlock.insertAdjacentHTML('afterbegin', "<p class = 'sign-up__google'>Sign Up with Email</p>");
      this.titleBlock.append(this.title, this.description);
      this.block.append(this.titleBlock, this.signUpFacebookBlock, this.signUpGoogleBlock, this.or, this.signUpEmailBlock);
      this.root.append(this.block);
    }
  }]);

  return LogInForm;
}();

/***/ }),

/***/ "./src/logIn/scripts/wrapper.js":
/*!**************************************!*\
  !*** ./src/logIn/scripts/wrapper.js ***!
  \**************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var _common_scripts_t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/scripts//t_main_elements.js */ "./src/common/scripts/t_main_elements.js");
/* harmony import */ var _logInForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logInForm.js */ "./src/logIn/scripts/logInForm.js");
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
      this.main = document.createElement('main');
      this.main.classList.add(this.className);
      this.inner = new _common_scripts_t_main_elements_js__WEBPACK_IMPORTED_MODULE_0__["Blocks"](this.main, 1, 'login__div', 'inner-block', 'div');
      this.root.append(this.main);
      this.inner.logInForm = new _logInForm_js__WEBPACK_IMPORTED_MODULE_1__["LogInForm"](this.inner.elements[0], 'logInForm');
    }
  }]);

  return Wrapper;
}();

/***/ }),

/***/ "./src/logIn/styles/logInForm.scss":
/*!*****************************************!*\
  !*** ./src/logIn/styles/logInForm.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1:
/*!**********************************!*\
  !*** multi ./src/logIn/logIn.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/logIn/logIn.js */"./src/logIn/logIn.js");


/***/ })

/******/ });
//# sourceMappingURL=logIn.js.map