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
    this.renderSignUp();
    this.renderSignUpWithEmail();
  }

  _createClass(LogInForm, [{
    key: "renderSignUp",
    value: function renderSignUp() {
      var _this = this;

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
      this.buttonsBlock = document.createElement('div');
      this.buttonsBlock.classList.add(this.className + '__buttons-block');
      this.signUpFacebookBlock = document.createElement('button');
      this.signUpFacebookBlock.classList.add(this.className + '__with-facebook');
      this.signUpFacebookBlock.classList.add('btn-form');
      this.signUpFacebookBlock.insertAdjacentHTML('afterbegin', "<a class='sign-up__facebook'><div class = 'icon-box__facebook'><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 266.89 266.89\">\n        <g>\n            <g>\n                <path style=\"fill:#fff;\" d=\"M252.16,0H14.73A14.73,14.73,0,0,0,0,14.73V252.16a14.73,14.73,0,0,0,14.73,14.73H142.55V163.57H107.77V123.29h34.82V93.58c0-34.47,21.06-53.24,51.81-53.24a285.41,285.41,0,0,1,31.08,1.59v36H204.15c-16.76,0-20,8-20,19.61v25.72H224l-5.16,40.28H184.15V266.89h68a14.73,14.73,0,0,0,14.73-14.73V14.73A14.73,14.73,0,0,0,252.16,0Z\"></path>\n                <path style=\"fill:#3b5998;\" d=\"M218.84,163.54,224,123.26H184.15V97.54c0-11.66,3.24-19.61,20-19.61h21.33v-36a285.41,285.41,0,0,0-31.08-1.59c-30.75,0-51.81,18.77-51.81,53.24v29.71H107.77v40.28h34.78V266.89h41.6V163.54Z\"></path>\n            </g>\n        </g>\n    </svg></div><p class = 'sign-up__descrip'>Sign Up with Facebook</p></a>");
      this.signUpGoogleBlock = document.createElement('button');
      this.signUpGoogleBlock.classList.add(this.className + '__with-google');
      this.signUpGoogleBlock.classList.add('btn-form');
      this.signUpGoogleBlock.insertAdjacentHTML('afterbegin', "<a class='sign-up__google'><div class = 'icon-box__google'><svg class=\"login-svg\" xmlns=\"http://www.w3.org/2000/svg\" width=\"28px\" height=\"28px\" viewBox=\"0 0 512 512\" aria-label=\"Sign up with Google\">\n        <path style=\"fill:#FBBB00;\" d=\"M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256\nc0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456\nC103.821,274.792,107.225,292.797,113.47,309.408z\"></path>\n        <path style=\"fill:#518EF8;\" d=\"M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451\nc-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535\nc29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z\"></path>\n        <path style=\"fill:#28B446;\" d=\"M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512\nc-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771\nc28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z\"></path>\n        <path style=\"fill:#F14336;\" d=\"M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012\nc-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0\nC318.115,0,375.068,22.126,419.404,58.936z\"></path>\n    </svg></div><p class = 'sign-up__descrip'>Sign Up with Google</p></a>");
      this.or = document.createElement('span');
      this.or.classList.add(this.className + '__or');
      this.or.insertAdjacentHTML('afterbegin', 'or');
      this.signUpEmailBlock = document.createElement('button');
      this.signUpEmailBlock.classList.add(this.className + '__with-email');
      this.signUpEmailBlock.classList.add('btn-form');
      this.signUpEmailBlock.insertAdjacentHTML('afterbegin', "<p class = 'sign-up__email'>Sign up with email</p>");
      this.signUpEmailBlock.addEventListener('click', function () {
        _this.buttonsBlock.style.display = 'none';
        _this.emailForm.style.display = 'flex';
      });
      this.titleBlock.append(this.title, this.description);
      this.buttonsBlock.append(this.signUpFacebookBlock, this.signUpGoogleBlock, this.or, this.signUpEmailBlock);
      this.block.append(this.titleBlock, this.buttonsBlock);
      this.root.append(this.block);
    }
  }, {
    key: "renderSignUpWithEmail",
    value: function renderSignUpWithEmail() {
      this.emailForm = document.createElement('div');
      this.emailForm.classList.add(this.className + '__emailForm');
      this.email = document.createElement('input');
      this.email.classList.add(this.className + '__email');
      this.email.placeholder = 'Email';
      this.password = document.createElement('input');
      this.password.classList.add(this.className + '__password');
      this.password.placeholder = 'Password';
      this.signUpButton = document.createElement('button');
      this.signUpButton.classList.add(this.className + '__signUpButton');
      this.signUpButton.insertAdjacentHTML('afterbegin', 'Sign Up');
      this.orSignUp = document.createElement('span');
      this.orSignUp.classList.add(this.className + '__orSignUp');
      this.orSignUp.insertAdjacentHTML('afterbegin', 'or sign up with');
      this.networksBlock = document.createElement('div');
      this.networksBlock.classList.add(this.className + '__networks');
      this.facebook = document.createElement('div');
      this.facebook.classList.add(this.className + '__facebook-icon');
      this.facebook.insertAdjacentHTML('afterbegin', "<svg class=\"login-svg\" width=\"28px\" height=\"28px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 266.89 266.89\" aria-label=\"Sign up with Facebook\">\n        <g>\n            <rect style=\"fill:#3b5998;\" width=\"266.89\" height=\"266.89\" rx=\"14.73\" ry=\"14.73\"></rect>\n            <path style=\"fill:#fff;\" d=\"M184.15,266.89V163.54h34.69L224,123.26H184.15V97.54c0-11.66,3.24-19.61,20-19.61h21.33v-36a285.42,285.42,0,0,0-31.08-1.59c-30.75,0-51.81,18.77-51.81,53.24v29.71H107.77v40.28h34.78V266.89Z\"></path>\n\n        </g>\n    </svg>");
      this.google = document.createElement('div');
      this.google.classList.add(this.className + '__google-icon');
      this.google.insertAdjacentHTML('afterbegin', "<svg class=\"login-svg\" xmlns=\"http://www.w3.org/2000/svg\" width=\"28px\" height=\"28px\" viewBox=\"0 0 512 512\" aria-label=\"Sign up with Google\">\n        <path style=\"fill:#FBBB00;\" d=\"M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256\nc0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456\nC103.821,274.792,107.225,292.797,113.47,309.408z\"></path>\n        <path style=\"fill:#518EF8;\" d=\"M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451\nc-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535\nc29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z\"></path>\n        <path style=\"fill:#28B446;\" d=\"M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512\nc-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771\nc28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z\"></path>\n        <path style=\"fill:#F14336;\" d=\"M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012\nc-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0\nC318.115,0,375.068,22.126,419.404,58.936z\"></path>\n    </svg>");
      this.networksBlock.append(this.facebook, this.google);
      this.emailForm.append(this.email, this.password, this.signUpButton, this.orSignUp, this.networksBlock);
      this.block.append(this.emailForm);
      this.emailForm.style.display = 'none';
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