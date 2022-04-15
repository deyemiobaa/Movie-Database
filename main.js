/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font-weight: normal;\\n  background: none;\\n  box-sizing: border-box;\\n  text-decoration: none;\\n  color: #fff;\\n}\\n\\n.star {\\n  color: yellow;\\n}\\n\\nol,\\nul {\\n  list-style: none;\\n}\\n\\n:root {\\n  --color-primary: #eef5db;\\n  --color-secondary: #050f1a;\\n  --color-dark: #0a2239;\\n  --radius: 20px;\\n  --radius-small: 10px;\\n  --font: 500 1.1rem 'Poppins', sans-serif;\\n}\\n\\nbody {\\n  background: rgb(4, 19, 42);\\n  background: linear-gradient(90deg, rgba(4, 19, 42, 1) 0%, rgba(0, 0, 0, 0.95) 50%, rgba(4, 19, 42, 1) 100%);\\n}\\n\\nheader {\\n  background: var(--color-secondary);\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  z-index: 90;\\n}\\n\\n.logo-wrap {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.load-animation {\\n  display: none;\\n}\\n\\n.logo-name {\\n  font: var(--font);\\n}\\n\\n.logo {\\n  display: none;\\n}\\n\\n@keyframes logo-spin {\\n  from {\\n    transform: rotate(0deg);\\n  }\\n\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n#search-bar {\\n  width: 300px;\\n}\\n\\n.search-form {\\n  display: none;\\n}\\n\\n#menu-cover {\\n  display: flex;\\n  justify-content: center;\\n  position: fixed;\\n  padding-top: 200px;\\n  top: 0;\\n  left: 0;\\n  width: 0;\\n  height: 100%;\\n  background: var(--color-secondary);\\n  z-index: 80;\\n  transition: width 0.5s ease-in-out;\\n}\\n\\n.fa-times {\\n  position: absolute;\\n  top: 20px;\\n  right: 20px;\\n}\\n\\n.search {\\n  /* display: none; */\\n  flex-direction: column;\\n  align-items: center;\\n  row-gap: 20px;\\n  transition: all 0.5s ease-in-out;\\n}\\n\\n#notfound {\\n  color: var(--color-primary);\\n  font: var(--font);\\n  font-size: 1.5rem;\\n  text-align: center;\\n}\\n\\n.header-main-wrap {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 10px 30px;\\n}\\n\\n#movie-db-info {\\n  background: var(--color-dark);\\n  text-align: center;\\n  padding: 10px;\\n  font: var(--font);\\n}\\n\\n#all-shows {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\\n  justify-content: space-around;\\n  gap: 50px;\\n  width: 80%;\\n  margin: 200px auto;\\n  justify-items: center;\\n}\\n\\n.show {\\n  height: 350px;\\n  width: 200px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  background: #0a2239;\\n  border-radius: var(--radius);\\n  box-shadow:\\n    rgba(66, 84, 100, 0.48) 6px 2px 16px 0,\\n    rgba(66, 84, 100, 0.2) 6px 2px 16px 0;\\n}\\n\\n.show > h3 {\\n  font: var(--font);\\n  text-align: center;\\n  padding: 10px;\\n  line-height: 30px;\\n}\\n\\n.show > img {\\n  width: 100%;\\n  height: 240px;\\n}\\n\\n.show-btns {\\n  display: grid;\\n  grid-template-columns: 10px 10px auto;\\n  align-items: center;\\n  column-gap: 10px;\\n  padding: 10px;\\n}\\n\\n.fa-comment {\\n  justify-self: flex-end;\\n}\\n\\n.like-count {\\n  font: 500 0.9rem var(--font);\\n  margin-left: 12px;\\n}\\n\\ni {\\n  cursor: pointer;\\n}\\n\\n/* movie popup */\\n.movie-popup {\\n  display: none;\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  background: var(--color-secondary);\\n  justify-content: center;\\n  align-items: center;\\n  z-index: 120;\\n}\\n\\n.movie-popup-wrap {\\n  position: relative;\\n  overflow: auto;\\n  padding: 15px;\\n  width: 85%;\\n  height: 90vh;\\n  background-color: var(--color-dark);\\n  border-radius: var(--radius);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  row-gap: 30px;\\n  font: var(--font);\\n}\\n\\n/* body::-webkit-scrollbar */\\n.movie-popup-wrap::-webkit-scrollbar {\\n  width: 0%;\\n}\\n\\n.movie-popup-content {\\n  background: var(--color-secondary);\\n  padding: 20px;\\n  border-radius: var(--radius);\\n  display: grid;\\n  grid-template-rows: 1fr;\\n  row-gap: 20px;\\n}\\n\\n.movie-popup-close {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  padding: 5px 10px;\\n  cursor: pointer;\\n}\\n\\n.movie-popup-info {\\n  display: grid;\\n  grid-template-rows: auto;\\n  row-gap: 20px;\\n  padding: 10px 0;\\n  align-items: center;\\n}\\n\\n.movie-popup-img > img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  border-radius: var(--radius);\\n}\\n\\n/* movie popup end */\\n\\n.form-content {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 100%;\\n  background: var(--color-secondary);\\n  border-radius: var(--radius);\\n  padding: 20px;\\n}\\n\\n.comment-section,\\n.comment-list {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  padding: 20px;\\n  gap: 20px;\\n  font: 1em var(--font);\\n}\\n\\n.comment-list {\\n  align-items: flex-start;\\n}\\n\\nform {\\n  width: 70%;\\n  display: grid;\\n  grid-template-rows: auto;\\n  gap: 20px;\\n  justify-items: center;\\n  padding: 15px 0;\\n}\\n\\ninput,\\ntextarea {\\n  width: 100%;\\n  padding: 10px;\\n  font-size: 1.2em;\\n  border: 2px solid var(--color-primary);\\n  border-radius: var(--radius-small);\\n}\\n\\nlabel {\\n  display: none;\\n}\\n\\ninput::placeholder,\\ntextarea::placeholder {\\n  color: #bbbfc2;\\n  font: var(--font);\\n}\\n\\nbutton {\\n  border: 2px solid var(--color-primary);\\n  padding: 10px;\\n  text-align: center;\\n  text-decoration: none;\\n  display: inline-block;\\n  font-size: 1rem;\\n  cursor: pointer;\\n  border-radius: var(--radius-small);\\n}\\n\\n/* comment section end */\\nfooter {\\n  display: flex;\\n  align-items: center;\\n  padding: 20px;\\n  position: fixed;\\n  bottom: 0;\\n  width: 100%;\\n  height: 50px;\\n  background: var(--color-secondary);\\n  font: var(--font);\\n  z-index: 110;\\n}\\n\\nfooter > p {\\n  font-size: 0.8rem;\\n  padding-left: 20px;\\n}\\n\\nfooter > p > a {\\n  text-decoration: underline;\\n}\\n\\n.loader {\\n  display: none;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  backdrop-filter: blur(5px);\\n  width: 100%;\\n  height: 100%;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.overlay {\\n  display: block;\\n}\\n\\n.poster {\\n  display: none;\\n}\\n\\n.poster-mb {\\n  display: block;\\n}\\n\\n.img-container {\\n  width: 100%;\\n  height: 100%;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  z-index: 100;\\n  filter: blur(1px);\\n}\\n\\n.img-container > img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  object-position: center;\\n}\\n\\n.text-container {\\n  position: fixed;\\n  z-index: 105;\\n  top: 20%;\\n  left: 5%;\\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(10, 34, 57, 1));\\n  width: 90%;\\n  padding: 50px;\\n  height: 270px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  border-radius: var(--radius);\\n}\\n\\n.text-container > button {\\n  font-size: 1.1rem;\\n}\\n\\n.text {\\n  font: var(--font);\\n}\\n\\n.fa-play {\\n  margin-left: 10px;\\n}\\n\\n@media only screen and (min-width: 768px) {\\n  .logo-name {\\n    font-size: 2rem;\\n    padding-left: 20px;\\n  }\\n\\n  .logo {\\n    display: block;\\n    width: 60px;\\n    height: 60px;\\n    animation: logo-spin infinite 5s linear;\\n  }\\n\\n  .poster-mb {\\n    display: none;\\n  }\\n\\n  .poster {\\n    display: block;\\n  }\\n\\n  .search-form {\\n    display: flex;\\n  }\\n\\n  #menu,\\n  .mobile-only {\\n    display: none;\\n  }\\n\\n  .selection-wrap {\\n    display: flex;\\n    column-gap: 20px;\\n    align-items: center;\\n  }\\n\\n  .movie-popup-content {\\n    display: flex;\\n    flex-direction: row;\\n    gap: 30px;\\n    align-items: center;\\n    justify-content: space-around;\\n  }\\n\\n  .movie-popup-img {\\n    width: 40%;\\n    height: 600px;\\n  }\\n\\n  .movie-popup-info {\\n    width: 55%;\\n    height: max-content;\\n  }\\n\\n  .like-btn:active,\\n  .like-btn:hover {\\n    color: red;\\n    font-size: 1.3rem;\\n  }\\n\\n  .fa-comment:hover {\\n    font-size: 1.3rem;\\n  }\\n\\n  form {\\n    width: 50%;\\n  }\\n\\n  #submit:hover {\\n    padding: 12px;\\n    font-size: 1.2rem;\\n  }\\n\\n  body::-webkit-scrollbar {\\n    width: 10px;\\n    background: var(--color-primary);\\n  }\\n\\n  .scroll-hide::-webkit-scrollbar {\\n    width: 0%;\\n  }\\n\\n  .text-container {\\n    width: max-content;\\n    top: 30%;\\n    left: 20%;\\n    padding: 50px;\\n    height: 300px;\\n    border-radius: var(--radius);\\n  }\\n\\n  .text-container > button {\\n    font-size: 1.7rem;\\n  }\\n\\n  .text {\\n    font-size: 1.3rem;\\n  }\\n\\n  footer > p {\\n    font-size: 1.1rem;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://movie-database/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://movie-database/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://movie-database/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://movie-database/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://movie-database/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://movie-database/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://movie-database/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://movie-database/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://movie-database/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://movie-database/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_wallpaper_dk_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/wallpaper-dk.png */ \"./src/modules/wallpaper-dk.png\");\n/* harmony import */ var _modules_wallpaper_mb_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/wallpaper-mb.png */ \"./src/modules/wallpaper-mb.png\");\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _modules_search_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/search.js */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_animations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/animations.js */ \"./src/modules/animations.js\");\n/* harmony import */ var _modules_selectors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/selectors.js */ \"./src/modules/selectors.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n\n\n\n\n\n\n\n\n\n\ndocument.querySelector('.poster').src = _modules_wallpaper_dk_png__WEBPACK_IMPORTED_MODULE_1__;\ndocument.querySelector('.poster-mb').src = _modules_wallpaper_mb_png__WEBPACK_IMPORTED_MODULE_2__;\n\nconst hamburger = document.querySelector('#menu');\nhamburger.addEventListener('click', () => {\n  (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n});\n\nconst searchBtn = document.getElementById('search-btn');\nsearchBtn.addEventListener('click', (e) => {\n  e.preventDefault();\n  const load = document.querySelector('.load-animation');\n  load.style.cssText = 'display:block';\n  (0,_modules_search_js__WEBPACK_IMPORTED_MODULE_5__.search)();\n});\n\nconst sessionstore = sessionStorage.getItem('session') || false;\nif (sessionstore === false) {\n  (0,_modules_animations_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  sessionStorage.setItem('session', 'true');\n} else {\n  _modules_selectors_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].overlay.style.display = 'none';\n}\n\n(0,_modules_render_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_4__.postAComment)();\n\n\n//# sourceURL=webpack://movie-database/./src/index.js?");

/***/ }),

/***/ "./src/modules/animations.js":
/*!***********************************!*\
  !*** ./src/modules/animations.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors.js */ \"./src/modules/selectors.js\");\n\n\nconst delayDisplay = () => {\n  _selectors_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].allShows.style.display = 'none';\n  _selectors_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].headerWrap.style.display = 'none';\n  document.body.classList.add('scroll-hide');\n\n  _selectors_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.addEventListener('click', () => {\n    _selectors_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].overlay.style.display = 'none';\n    document.body.classList.remove('scroll-hide');\n    _selectors_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].allShows.style.display = 'grid';\n    _selectors_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].headerWrap.style.display = 'flex';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (delayDisplay);\n\n//# sourceURL=webpack://movie-database/./src/modules/animations.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllComments\": () => (/* binding */ getAllComments),\n/* harmony export */   \"postAComment\": () => (/* binding */ postAComment)\n/* harmony export */ });\n/* harmony import */ var _getvshow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getvshow.js */ \"./src/modules/getvshow.js\");\n\n\nconst form = document.getElementById('form');\nconst username = document.getElementById('name');\nconst comment = document.getElementById('comment');\nconst commentCount = document.querySelector('.comment-count');\nconst commentList = document.querySelector('.comment-list');\n\nconst getAllComments = async (id) => {\n  const allComments = await (0,_getvshow_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);\n  commentCount.textContent = `Comments (${allComments.length})`;\n  commentList.innerHTML = '';\n  allComments.forEach((e) => {\n    commentList.innerHTML += `\n    <li>${e.creation_date}  ${e.username}:  ${e.comment}</li>\n    `;\n  });\n};\n\nconst postAComment = () => {\n  form.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    const movieId = form.parentNode.parentNode.id;\n    const response = await (0,_getvshow_js__WEBPACK_IMPORTED_MODULE_0__.addComments)(movieId, username.value, comment.value);\n    if (response === 201) {\n      await getAllComments(movieId);\n    }\n    form.reset();\n  });\n};\n\n\n\n//# sourceURL=webpack://movie-database/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/events.js":
/*!*******************************!*\
  !*** ./src/modules/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickEvents\": () => (/* binding */ clickEvents),\n/* harmony export */   \"popupEvents\": () => (/* binding */ popupEvents)\n/* harmony export */ });\n/* harmony import */ var _getvshow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getvshow.js */ \"./src/modules/getvshow.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.js */ \"./src/modules/search.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\n\n\nconst clickEvents = () => {\n  const likeBtn = document.querySelectorAll('.like-btn');\n  likeBtn.forEach((e) => {\n    e.addEventListener('click', () => {\n      const { id } = e.parentNode.parentNode;\n      (0,_getvshow_js__WEBPACK_IMPORTED_MODULE_0__.addLikes)(id);\n      setTimeout(() => {\n        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_search_js__WEBPACK_IMPORTED_MODULE_4__.shows);\n      }, 500);\n    });\n  });\n};\n\nconst openShow = (e, id) => {\n  const popup = new _popup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  e.addEventListener('click', async () => {\n    document.querySelector('.loader').style.display = 'flex';\n    const movieId = id;\n    const currentShow = await popup.getPopup(movieId);\n    popup.populatePopup(currentShow);\n    (0,_comments_js__WEBPACK_IMPORTED_MODULE_3__.getAllComments)(movieId);\n    setTimeout(() => {\n      document.querySelector('.loader').style.display = 'none';\n    }, 1000);\n  });\n};\n\nconst popupEvents = () => {\n  const popup = new _popup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  const showList = document.querySelectorAll('.fa-comment');\n  const poster = document.querySelectorAll('.movie-poster');\n  showList.forEach((e) => {\n    const { id } = e.parentNode.parentNode;\n    openShow(e, id);\n  });\n  poster.forEach((e) => {\n    const { id } = e.parentNode;\n    openShow(e, id);\n  });\n  popup.closePopup();\n};\n\n\n//# sourceURL=webpack://movie-database/./src/modules/events.js?");

/***/ }),

/***/ "./src/modules/getvshow.js":
/*!*********************************!*\
  !*** ./src/modules/getvshow.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComments\": () => (/* binding */ addComments),\n/* harmony export */   \"addLikes\": () => (/* binding */ addLikes),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getlikes\": () => (/* binding */ getlikes),\n/* harmony export */   \"getvShow\": () => (/* binding */ getvShow)\n/* harmony export */ });\n/* eslint-disable import/no-cycle */\nconst getvShow = async (showurl) => {\n  if (showurl === undefined) {\n    const response = await fetch('https://api.tvmaze.com/shows');\n    return response.json();\n  }\n\n  const response = await fetch(showurl);\n  return response.json();\n};\n\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ED1rQK1snOoAMYBCYLLf/likes';\nconst addLikes = async (id) => {\n  await fetch(url,\n    {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n};\nconst getlikes = (async () => {\n  const response = await fetch(url, { method: 'GET' });\n  return response.json();\n});\n\nconst addComments = async (itemId, username, comment) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ED1rQK1snOoAMYBCYLLf/comments', {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: itemId,\n      username,\n      comment,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  return response.status;\n};\n\nconst getComments = async (id) => {\n  let response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ED1rQK1snOoAMYBCYLLf/comments?item_id=${id}`);\n  if (response.status === 400) {\n    response = [];\n    return response;\n  }\n  return response.json();\n};\n\n\n\n\n//# sourceURL=webpack://movie-database/./src/modules/getvshow.js?");

/***/ }),

/***/ "./src/modules/likeCounter.js":
/*!************************************!*\
  !*** ./src/modules/likeCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"likeCounter\": () => (/* binding */ likeCounter),\n/* harmony export */   \"showCounter\": () => (/* binding */ showCounter)\n/* harmony export */ });\nconst showCounter = (movie) => movie.length;\n\nconst likeCounter = (e, likeCount, likes) => {\n  likes.forEach((eachLikes) => {\n    let id;\n    try {\n      id = e.show.id;\n    } catch (err) {\n      id = e.id;\n    }\n    if (String(eachLikes.item_id) === String(id)) {\n      likeCount = eachLikes.likes;\n    }\n  });\n\n  return likeCount;\n};\n\n\n\n//# sourceURL=webpack://movie-database/./src/modules/likeCounter.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ \"./src/modules/search.js\");\n\n\nconst container = document.getElementById('menu-cover');\n\nconst closeMenu = () => {\n  const searchContainer = document.querySelector('.search');\n  searchContainer.style.display = 'none';\n  setTimeout(() => {\n    container.style.width = '0';\n    container.innerHTML = '';\n  }, 500);\n};\nconst menu = () => {\n  container.innerHTML = `\n  <div class=\"close-menu\">\n    <i class=\"fas fa-times fa-2x\"></i>\n  </div>\n  <div class=\"search\">\n    <input class=\"search-bar\" type=\"text\" id=\"menu-search-bar\" required placeholder=\"Search Movies\">\n    <button id=\"search-btn\">Search</button>\n  </div>`;\n  container.style.width = '100%';\n  const searchContainer = document.querySelector('.search');\n  setTimeout(() => {\n    searchContainer.style.display = 'flex';\n  }, 700);\n  const searchBtn = document.querySelector('#search-btn');\n  searchBtn.addEventListener('click', (e) => {\n    e.preventDefault();\n    (0,_search_js__WEBPACK_IMPORTED_MODULE_0__.search)();\n    closeMenu();\n  });\n  const closeBtn = document.querySelector('.close-menu');\n  closeBtn.addEventListener('click', () => {\n    closeMenu();\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://movie-database/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst moviePopup = document.querySelector('.movie-popup');\nconst moviePosters = document.querySelector('.movie-poster');\nconst movieTitle = document.querySelector('.movie-title');\nconst movieLanguage = document.querySelector('.movie-language');\nconst movieYear = document.querySelector('.movie-year');\nconst movieGenre = document.querySelector('.movie-genre');\nconst movieType = document.querySelector('.movie-type');\nconst movieRating = document.querySelector('.movie-rating');\nconst movieDescription = document.querySelector('.movie-description');\nconst moviePopupWrap = document.querySelector('.movie-popup-wrap');\n\nclass Popup {\n  replaceMultipleString = (str) => str.replace('</b>', '').replace('<b>', '').replace('</p>', '').replace('<p>', '')\n    .replace('<i>', '')\n    .replace('</i>', '')\n\n  getMovieGenres = (array) => {\n    let res = '';\n    for (let i = 0; i < array.length; i += 1) {\n      res += `\"${array[i]}\" `;\n    }\n    return res;\n  }\n\n  getPopup = async (movieId) => {\n    const response = await fetch(`https://api.tvmaze.com/shows/${movieId}`);\n    return response.json();\n  }\n\n  populatePopup(currentShow) {\n    moviePopupWrap.id = currentShow.id;\n    moviePosters.src = currentShow.image.original;\n    movieTitle.textContent = `Name: ${currentShow.name}`;\n    movieYear.innerHTML = `Year: <i class=\"fa-solid fa-calendar star\"></i> ${currentShow.premiered.slice(0, 4)}`;\n    movieGenre.textContent = `Genres: ${this.getMovieGenres(currentShow.genres)}`;\n    movieType.textContent = `Type: ${currentShow.type}`;\n    movieLanguage.textContent = `Language: ${currentShow.language}`;\n    movieRating.innerHTML = `Average rating:  <i class=\"fa-solid fa-star-half-stroke star\"></i> ${currentShow.rating.average}`;\n    movieDescription.textContent = `Summary: ${this.replaceMultipleString(currentShow.summary)}`;\n    moviePopup.style.display = 'flex';\n  }\n\n  closePopup = () => {\n    const moviePopupClose = document.querySelector('.movie-popup-close');\n    moviePopupClose.addEventListener('click', () => {\n      moviePopup.style.display = 'none';\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);\n\n//# sourceURL=webpack://movie-database/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getvshow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getvshow.js */ \"./src/modules/getvshow.js\");\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors.js */ \"./src/modules/selectors.js\");\n/* harmony import */ var _likeCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likeCounter.js */ \"./src/modules/likeCounter.js\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.js */ \"./src/modules/events.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\n\nconst renderShows = (async (shows) => {\n  let render;\n  let showsData = [];\n  if (shows === undefined) {\n    showsData = await (0,_getvshow_js__WEBPACK_IMPORTED_MODULE_0__.getvShow)();\n  } else {\n    showsData = shows;\n  }\n  const likes = await (0,_getvshow_js__WEBPACK_IMPORTED_MODULE_0__.getlikes)();\n  let likeCount = 0;\n  if (showsData.length === 0) {\n    _selectors_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].allShows.innerHTML = '<h3 id=\"notfound\">No results found for your query </h3>';\n  } else {\n    showsData.forEach((e) => {\n      likeCount = (0,_likeCounter_js__WEBPACK_IMPORTED_MODULE_2__.likeCounter)(e, likeCount, likes);\n      let id; let showName; let img1;\n      if (shows === undefined) {\n        id = e.id;\n        showName = e.name;\n        img1 = e.image.medium;\n      } else {\n        id = e.show.id;\n        showName = e.show.name;\n\n        try {\n          img1 = e.show.image.medium;\n        } catch (err) {\n          img1 = 'https://img.icons8.com/external-others-iconmarket/344/external-error-search-others-iconmarket-3.png';\n        }\n      }\n      render += `\n    <li class=\"show\"  id=${id}>\n      <h3 class=\"show-name\">${showName}</h3>\n      <img src=${img1} alt=\"movie-poster\" class=\"movie-poster\">\n      <div class=\"show-btns\">\n        <i class=\"fa-solid fa-heart like-btn\"></i>\n        <p>${likeCount}</p>\n        <i class=\"fa-solid fa-comment\"></i>\n      </div>\n    </li>\n    `;\n      likeCount = 0;\n    });\n    _selectors_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].allShows.innerHTML = render.replace('undefined', '');\n  }\n  const movieSize = `<h3>${(0,_likeCounter_js__WEBPACK_IMPORTED_MODULE_2__.showCounter)(showsData)} shows found in the Movie ShowBox</h3>`;\n  _selectors_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].movieDbInfo.innerHTML = movieSize;\n  (0,_events_js__WEBPACK_IMPORTED_MODULE_3__.clickEvents)();\n  (0,_events_js__WEBPACK_IMPORTED_MODULE_3__.popupEvents)();\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderShows);\n\n//# sourceURL=webpack://movie-database/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"search\": () => (/* binding */ search),\n/* harmony export */   \"shows\": () => (/* binding */ shows)\n/* harmony export */ });\n/* harmony import */ var _getvshow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getvshow.js */ \"./src/modules/getvshow.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/modules/render.js\");\n/* eslint-disable import/no-cycle */\n\n/* eslint-disable import/no-mutable-exports */\n\n\n\nlet shows;\nconst search = async () => {\n  try {\n    const cover = document.getElementById('menu-wraper');\n    cover.style.cssText = 'display:none;';\n    const { value } = document.querySelector('.search-bar');\n    const url = `https://api.tvmaze.com/search/shows?q=${value}`;\n    shows = await (0,_getvshow_js__WEBPACK_IMPORTED_MODULE_0__.getvShow)(url);\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(shows);\n  } catch (err) {\n    const { value } = document.querySelector('.search-bar');\n    const url = `https://api.tvmaze.com/search/shows?q=${value}`;\n    shows = await (0,_getvshow_js__WEBPACK_IMPORTED_MODULE_0__.getvShow)(url);\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(shows);\n  } finally {\n    const load = document.querySelector('.load-animation');\n    setTimeout(() => {\n      load.style.cssText = 'display:none';\n    }, 800);\n  }\n};\n\n\n\n//# sourceURL=webpack://movie-database/./src/modules/search.js?");

/***/ }),

/***/ "./src/modules/selectors.js":
/*!**********************************!*\
  !*** ./src/modules/selectors.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst allShows = document.getElementById('all-shows');\nconst movieDbInfo = document.getElementById('movie-db-info');\nconst overlay = document.querySelector('.overlay');\nconst button = document.querySelector('.overlay-button');\nconst headerWrap = document.querySelector('.header-main-wrap');\n\nconst selector = {\n  allShows,\n  movieDbInfo,\n  overlay,\n  button,\n  headerWrap,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selector);\n\n//# sourceURL=webpack://movie-database/./src/modules/selectors.js?");

/***/ }),

/***/ "./src/modules/wallpaper-dk.png":
/*!**************************************!*\
  !*** ./src/modules/wallpaper-dk.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/e9fdcbda271eda4dbf4b.png\";\n\n//# sourceURL=webpack://movie-database/./src/modules/wallpaper-dk.png?");

/***/ }),

/***/ "./src/modules/wallpaper-mb.png":
/*!**************************************!*\
  !*** ./src/modules/wallpaper-mb.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/6241f736931108d2bf54.png\";\n\n//# sourceURL=webpack://movie-database/./src/modules/wallpaper-mb.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;