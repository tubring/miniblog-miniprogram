require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/article/detail"],{

/***/ "./src/components/Comments/index.css?modules":
/*!***************************************************!*\
  !*** ./src/components/Comments/index.css?modules ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"comment_container":"comment_container___1btCt","comment_item":"comment_item___1n4GG","left":"left___1m--6","avatar":"avatar___2oXvn","right":"right___1Sb9Z","post_info":"post_info___2iJJv","username":"username___RnKss","posted_at":"posted_at___a2fFT","comment":"comment___2HtEh"};

/***/ }),

/***/ "./src/components/Comments/index.js":
/*!******************************************!*\
  !*** ./src/components/Comments/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css?modules */ "./src/components/Comments/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var comments = props.comments ? props.comments : [];
  var commentList = comments.map(function (comment) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.comment_item,
      key: comment.id,
      __key: comment.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
      class: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.left
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
      src: comment.user ? comment.user.avatar : ''
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.right
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.post_info
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.username
    }, comment.user ? comment.user.nickname : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.posted_at
    }, comment.created_at)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.comment
    }, comment.content)));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.comment_container
  }, commentList);
});

/***/ }),

/***/ "./src/components/Toast/index.jsx":
/*!****************************************!*\
  !*** ./src/components/Toast/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/framework-shared */ "./node_modules/@remax/framework-shared/esm/index.js");

var toast = Object(_remax_framework_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.toast);
/* harmony default export */ __webpack_exports__["default"] = (toast);

/***/ }),

/***/ "./src/pages/article/detail.css":
/*!**************************************!*\
  !*** ./src/pages/article/detail.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/article/detail.css?modules":
/*!**********************************************!*\
  !*** ./src/pages/article/detail.css?modules ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"container___1FqA5","photo":"photo___3tQAn","title":"title___7HuY7","article_info":"article_info___22Q3q","author":"author___1lpOf","posted_at":"posted_at___ojiaR","tags":"tags___f02Be","label":"label___3Kchz","content":"content___3F1Xb","reply":"reply___3lQgr","input":"input___38Jd9","submit":"submit___ua2dL"};

/***/ }),

/***/ "./src/pages/article/detail.entry.js":
/*!*******************************************!*\
  !*** ./src/pages/article/detail.entry.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _detail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.js */ "./src/pages/article/detail.js");
__webpack_require__(/*! ./detail.css */ "./src/pages/article/detail.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_detail_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/article/detail'));

/***/ }),

/***/ "./src/pages/article/detail.js":
/*!*************************************!*\
  !*** ./src/pages/article/detail.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax */ "./node_modules/remax/esm/index.js");
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _detail_css_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail.css?modules */ "./src/pages/article/detail.css?modules");
/* harmony import */ var _detail_css_modules__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_detail_css_modules__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Comments_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Comments/index */ "./src/components/Comments/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/AppContext */ "./src/context/AppContext.js");
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Toast */ "./src/components/Toast/index.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var query = Object(remax__WEBPACK_IMPORTED_MODULE_1__["useQuery"])();

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_context_AppContext__WEBPACK_IMPORTED_MODULE_7__["AppContext"]),
      appInfo = _React$useContext.appInfo;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      article = _React$useState2[0],
      setArticle = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      commentTxt = _React$useState4[0],
      setCommentTxt = _React$useState4[1];

  var id = query.id;
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    Object(_api__WEBPACK_IMPORTED_MODULE_6__["requestArticle"])(id).then(function (res) {
      console.log(res);

      if (res.statusCode == 200) {
        setArticle(res.data);
      } else if (res.statusCode == 401) {
        Object(_components_Toast__WEBPACK_IMPORTED_MODULE_8__["default"])({
          title: '您没有访问权限!'
        });
      }
    });
  }, []);

  var commentInput = function commentInput(event) {
    console.log(event.target.value);
    setCommentTxt(event.target.value);
  };

  var submitComment = function submitComment(event) {
    console.log(event);
    console.log(commentTxt);

    if (appInfo['app.commentable'] !== 1) {
      Object(_components_Toast__WEBPACK_IMPORTED_MODULE_8__["default"])({
        title: '评论功能未开启!'
      });
      return;
    }

    Object(_api__WEBPACK_IMPORTED_MODULE_6__["postComment"])(id, commentTxt).then(function (res) {
      if (res.statusCode == 201) {}
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _detail_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: _detail_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.photo,
    src: "/examples/example.jpg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: _detail_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.title
  }, article.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _detail_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.article_info
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: _detail_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.author
  }, "\u4F5C\u8005\uFF1A", article.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: _detail_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.posted_at
  }, article.created_at)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _detail_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.tags
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: _detail_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.label
  }, "\u6807\u7B7E1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: _detail_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.label
  }, "\u6807\u7B7E2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _detail_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    nodes: article.content
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _detail_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.comments
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Comments_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    comments: article.comments
  })), appInfo['commentable'] && article.commentable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _detail_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.reply
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    className: _detail_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.input,
    value: commentTxt,
    onInput: function onInput(event) {
      commentInput(event);
    },
    placeholder: "\u53D1\u8868\u60A8\u7684\u770B\u6CD5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: _detail_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.submit,
    onTap: function onTap(event) {
      return submitComment(event);
    }
  }, "\u63D0\u4EA4")) : '');
});

/***/ }),

/***/ 7:
/*!*************************************************!*\
  !*** multi ./src/pages/article/detail.entry.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Servers\PhpStudy8\WWW\blog\frontend\blog\src\pages\article\detail.entry.js */"./src/pages/article/detail.entry.js");


/***/ })

},[[7,"runtime","remax-vendors"]]]);