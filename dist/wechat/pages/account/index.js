require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/account/index"],{

/***/ "./src/components/UserInfo/index.css?modules":
/*!***************************************************!*\
  !*** ./src/components/UserInfo/index.css?modules ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"user_info":"user_info___2Mr6K","avatar":"avatar___1EbFV","nickname":"nickname___3_h1V"};

/***/ }),

/***/ "./src/components/UserInfo/index.js":
/*!******************************************!*\
  !*** ./src/components/UserInfo/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/AppContext */ "./src/context/AppContext.js");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css?modules */ "./src/components/UserInfo/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_context_AppContext__WEBPACK_IMPORTED_MODULE_3__["AppContext"]),
      userInfo = _React$useContext.userInfo;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.user_info
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.avatar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["OpenData"], {
    type: "userAvatarUrl"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.nickname
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["OpenData"], {
    type: "userNickName"
  })));
});

/***/ }),

/***/ "./src/pages/account/index.css":
/*!*************************************!*\
  !*** ./src/pages/account/index.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/account/index.css?modules":
/*!*********************************************!*\
  !*** ./src/pages/account/index.css?modules ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"container___3Zqud","header":"header___2mGhL","my_info":"my_info___2AD5l","nav":"nav___UGdzF","nav_item":"nav_item___rEgep","active":"active___qYOKj","nav_content":"nav_content___3tVps","content_list":"content_list___2jlXj","show":"show___31ZZd","hidden":"hidden___2RnIa"};

/***/ }),

/***/ "./src/pages/account/index.entry.js":
/*!******************************************!*\
  !*** ./src/pages/account/index.entry.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/account/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages/account/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/account/index'));

/***/ }),

/***/ "./src/pages/account/index.js":
/*!************************************!*\
  !*** ./src/pages/account/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css?modules */ "./src/pages/account/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/UserInfo */ "./src/components/UserInfo/index.js");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/AppContext */ "./src/context/AppContext.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var value = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_context_AppContext__WEBPACK_IMPORTED_MODULE_4__["AppContext"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentTabId = _React$useState2[0],
      setCurrentTabId = _React$useState2[1];

  var navActive = function navActive(event) {
    var currentId = event.currentTarget.dataset.id;
    setCurrentTabId(currentId);
  };

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    console.log(value);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_UserInfo__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.my_info
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.nav
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.nav_item + (currentTabId == 0 ? ' ' + _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.active : ''),
    onTap: function onTap(event) {
      navActive(event);
    },
    "data-id": "0"
  }, "\u6D4F\u89C8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.nav_item + (currentTabId == 1 ? ' ' + _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.active : ''),
    onTap: function onTap(event) {
      navActive(event);
    },
    "data-id": "1"
  }, "\u70B9\u8D5E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.nav_item + (currentTabId == 2 ? ' ' + _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.active : ''),
    onTap: function onTap(event) {
      navActive(event);
    },
    "data-id": "2"
  }, "\u8BC4\u8BBA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.nav_content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.content_list + ' ' + (currentTabId == 0 ? _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.show : _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.hidden)
  }, "\u6D4F\u89C8\u5386\u53F2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.content_list + ' ' + (currentTabId == 1 ? _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.show : _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.hidden)
  }, "\u70B9\u8D5E\u5217\u8868/\u6536\u85CF\u5217\u8868"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.content_list + ' ' + (currentTabId == 2 ? _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.show : _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.hidden)
  }, "\u8BC4\u8BBA\u5217\u8868"))));
});

/***/ }),

/***/ 4:
/*!************************************************!*\
  !*** multi ./src/pages/account/index.entry.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Servers\PhpStudy8\WWW\blog\frontend\blog\src\pages\account\index.entry.js */"./src/pages/account/index.entry.js");


/***/ })

},[[4,"runtime","remax-vendors"]]]);