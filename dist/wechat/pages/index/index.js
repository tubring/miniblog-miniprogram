require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./src/components/Banner/index.css?modules":
/*!*************************************************!*\
  !*** ./src/components/Banner/index.css?modules ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"banner_container":"banner_container___1DOf0","banner":"banner___2mu1m","copy":"copy___T91Rv","copy_content":"copy_content___2D1Pk","banner_buttons":"banner_buttons___1iJIw","buttons":"buttons___21-IN"};

/***/ }),

/***/ "./src/components/Banner/index.js":
/*!****************************************!*\
  !*** ./src/components/Banner/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css?modules */ "./src/components/Banner/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var banners = props.banners;
  var itemList = banners.map(function (banner) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["SwiperItem"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.banner_container,
      key: banner.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.banner,
      src: banner.image_url,
      onTap: function onTap() {
        return Object(remax_one__WEBPACK_IMPORTED_MODULE_1__["navigateTo"])('/pages/articles/detail?id=' + banner.link_url);
      }
    }));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Swiper"], {
    indicatorColor: "red",
    indicatorDots: true,
    indicatorActiveColor: "green",
    autoplay: "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["SwiperItem"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.banner,
    src: "/examples/example.jpg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["SwiperItem"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.banner,
    src: "/examples/example.jpg"
  })), itemList);
});

/***/ }),

/***/ "./src/components/LoginButton/index.css?modules":
/*!******************************************************!*\
  !*** ./src/components/LoginButton/index.css?modules ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"header___IDQPI","avatar":"avatar___oEqV9","text_info":"text_info___1-9Tf","auth_button":"auth_button___2WnDv"};

/***/ }),

/***/ "./src/components/LoginButton/index.js":
/*!*********************************************!*\
  !*** ./src/components/LoginButton/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css?modules */ "./src/components/LoginButton/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.avatar,
    src: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], null, "\u7533\u8BF7\u83B7\u5F97\u4EE5\u4E0B\u6743\u9650"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.text_info
  }, "\u83B7\u5F97\u4F60\u7684\u516C\u5F00\u4FE1\u606F(\u6635\u79F0\uFF0C\u5934\u50CF\u7B49)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.auth_buttuon,
    openType: "getUserInfo",
    lang: "zh_CN",
    onGetUserInfo: function onGetUserInfo(event) {
      console.log(event.detail.userInfo);
    }
  }, "\u6388\u6743\u767B\u5F55")));
});

/***/ }),

/***/ "./src/pages/index/index.css":
/*!***********************************!*\
  !*** ./src/pages/index/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.css?modules":
/*!*******************************************!*\
  !*** ./src/pages/index/index.css?modules ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___2lhPP","search":"search___194UG","article_container":"article_container___1TIMl","article":"article___1RBZL","photo":"photo___1XJ8s","content":"content___2xTIE","posted_at":"posted_at___13QMH","title":"title___2mr8X","brief":"brief___Vs0by"};

/***/ }),

/***/ "./src/pages/index/index.entry.js":
/*!****************************************!*\
  !*** ./src/pages/index/index.entry.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/index/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages/index/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index'));

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css?modules */ "./src/pages/index/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ArticleList_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ArticleList/index */ "./src/components/ArticleList/index.js");
/* harmony import */ var _components_Banner_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Banner/index */ "./src/components/Banner/index.js");
/* harmony import */ var _components_LoginButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/LoginButton */ "./src/components/LoginButton/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    banners: [{
      id: 1,
      image_url: '/examples/example.jpg',
      link_url: 1
    }],
    articles: []
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      data = _React$useState2[0],
      setData = _React$useState2[1];

  var requestData = function requestData() {
    Object(_api__WEBPACK_IMPORTED_MODULE_6__["requestIndex"])().then(function (res) {
      console.log('indexRequest:', res);

      if (res.statusCode == 200) {
        console.log('success:');
        setData(res.data);
      }
    });
  };

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    requestData();
  }, []);

  var searchArticle = function searchArticle(event) {
    console.log(event);
    var keywords = event.target.value;

    if (keywords.trim()) {
      return;
    }

    Object(remax_one__WEBPACK_IMPORTED_MODULE_1__["navigateTo"])('/pages/article/index?keywords=' + keywords);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.app
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Banner_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    banners: data.banners
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.search,
    onConfirm: function onConfirm(event) {
      searchArticle(event);
    },
    placeholder: "\u641C\u7D22"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.article_container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ArticleList_index__WEBPACK_IMPORTED_MODULE_3__["ArticleList"], {
    articles: data.articles
  })));
});

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./src/pages/index/index.entry.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Servers\PhpStudy8\WWW\blog\frontend\blog\src\pages\index\index.entry.js */"./src/pages/index/index.entry.js");


/***/ })

},[[1,"runtime","remax-vendors","remax-styles"]]]);