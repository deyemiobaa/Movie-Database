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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  font-size: 100%;\\r\\n  font-weight: normal;\\r\\n  background: none;\\r\\n  box-sizing: border-box;\\r\\n  text-decoration: none;\\r\\n  color: #fff;\\r\\n}\\r\\n.star{\\r\\n  color:yellow;\\r\\n}\\r\\nol,\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --color-primary: #eef5db;\\r\\n  --color-secondary: #050f1a;\\r\\n  --color-dark: #0a2239;\\r\\n  --radius: 20px;\\r\\n  --radius-small: 10px;\\r\\n  --font: 500 1.1rem 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: rgb(4, 19, 42);\\r\\n  background: linear-gradient(90deg, rgba(4, 19, 42, 1) 0%, rgba(0, 0, 0, 0.95) 50%, rgba(4, 19, 42, 1) 100%);\\r\\n}\\r\\n\\r\\nheader {\\r\\n  background: var(--color-secondary);\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  z-index: 90;\\r\\n}\\r\\n\\r\\n.logo-wrap {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n.load-animation{\\r\\n  display: none;\\r\\n}\\r\\n.logo-name {\\r\\n  font: var(--font);\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n@keyframes logo-spin {\\r\\n  from {\\r\\n    transform: rotate(0deg);\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    transform: rotate(360deg);\\r\\n  }\\r\\n}\\r\\n\\r\\n#search-bar {\\r\\n  width: 300px;\\r\\n}\\r\\n\\r\\n.search-form {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#menu-cover {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  position: fixed;\\r\\n  padding-top: 200px;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 0;\\r\\n  height: 100%;\\r\\n  background: var(--color-secondary);\\r\\n  z-index: 80;\\r\\n  transition: width 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n.fa-times {\\r\\n  position: absolute;\\r\\n  top: 20px;\\r\\n  right: 20px;\\r\\n}\\r\\n\\r\\n.search {\\r\\n  /* display: none; */\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  row-gap: 20px;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n#notfound {\\r\\n  color: var(--color-primary);\\r\\n  font: var(--font);\\r\\n  font-size: 1.5rem;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.header-main-wrap {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 10px 30px;\\r\\n}\\r\\n\\r\\n#movie-db-info {\\r\\n  background: var(--color-dark);\\r\\n  text-align: center;\\r\\n  padding: 10px;\\r\\n  font: var(--font);\\r\\n}\\r\\n\\r\\n#all-shows {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\\r\\n  justify-content: space-around;\\r\\n  gap: 50px;\\r\\n  width: 80%;\\r\\n  margin: 200px auto;\\r\\n  justify-items: center;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  height: 350px;\\r\\n  width: 200px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-around;\\r\\n  background: #0a2239;\\r\\n  border-radius: var(--radius);\\r\\n  box-shadow:\\r\\n    rgba(66, 84, 100, 0.48) 6px 2px 16px 0,\\r\\n    rgba(66, 84, 100, 0.2) 6px 2px 16px 0;\\r\\n}\\r\\n\\r\\n.show > h3 {\\r\\n  font: var(--font);\\r\\n  text-align: center;\\r\\n  padding: 10px;\\r\\n  line-height: 30px;\\r\\n}\\r\\n\\r\\n.show > img {\\r\\n  width: 100%;\\r\\n  height: 240px;\\r\\n}\\r\\n\\r\\n.show-btns {\\r\\n  display: grid;\\r\\n  grid-template-columns: 10px 10px auto;\\r\\n  align-items: center;\\r\\n  column-gap: 10px;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.fa-comment {\\r\\n  justify-self: flex-end;\\r\\n}\\r\\n\\r\\n.like-count {\\r\\n  font: 500 0.9rem var(--font);\\r\\n  margin-left: 12px;\\r\\n}\\r\\n\\r\\ni {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* movie popup */\\r\\n.movie-popup {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background: var(--color-secondary);\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  z-index: 120;\\r\\n}\\r\\n\\r\\n.movie-popup-wrap {\\r\\n  position: relative;\\r\\n  overflow: auto;\\r\\n  padding: 15px;\\r\\n  width: 85%;\\r\\n  height: 90vh;\\r\\n  background-color: var(--color-dark);\\r\\n  border-radius: var(--radius);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  row-gap: 30px;\\r\\n  font: var(--font);\\r\\n}\\r\\n\\r\\n/* body::-webkit-scrollbar */\\r\\n.movie-popup-wrap::-webkit-scrollbar {\\r\\n  width: 0%;\\r\\n}\\r\\n\\r\\n.movie-popup-content {\\r\\n  background: var(--color-secondary);\\r\\n  padding: 20px;\\r\\n  border-radius: var(--radius);\\r\\n  display: grid;\\r\\n  grid-template-rows: 1fr;\\r\\n  row-gap: 20px;\\r\\n}\\r\\n\\r\\n.movie-popup-close {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  right: 0;\\r\\n  padding: 5px 10px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.movie-popup-info {\\r\\n  display: grid;\\r\\n  grid-template-rows: auto;\\r\\n  row-gap: 20px;\\r\\n  padding: 10px 0;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.movie-popup-img > img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  object-fit: cover;\\r\\n  border-radius: var(--radius);\\r\\n}\\r\\n\\r\\n/* movie popup end */\\r\\n\\r\\n.form-content {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  background: var(--color-secondary);\\r\\n  border-radius: var(--radius);\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.comment-section,\\r\\n.comment-list {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  padding: 20px;\\r\\n  gap: 20px;\\r\\n  font: 1em var(--font);\\r\\n}\\r\\n\\r\\n.comment-list {\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\nform {\\r\\n  width: 70%;\\r\\n  display: grid;\\r\\n  grid-template-rows: auto;\\r\\n  gap: 20px;\\r\\n  justify-items: center;\\r\\n  padding: 15px 0;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  width: 100%;\\r\\n  padding: 10px;\\r\\n  font-size: 1.2em;\\r\\n  border: 2px solid var(--color-primary);\\r\\n  border-radius: var(--radius-small);\\r\\n}\\r\\n\\r\\nlabel {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\ninput::placeholder,\\r\\ntextarea::placeholder {\\r\\n  color: #bbbfc2;\\r\\n  font: var(--font);\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  border: 2px solid var(--color-primary);\\r\\n  padding: 10px;\\r\\n  text-align: center;\\r\\n  text-decoration: none;\\r\\n  display: inline-block;\\r\\n  font-size: 1rem;\\r\\n  cursor: pointer;\\r\\n  border-radius: var(--radius-small);\\r\\n}\\r\\n\\r\\n/* comment section end */\\r\\nfooter {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 20px;\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  background: var(--color-secondary);\\r\\n  font: var(--font);\\r\\n  z-index: 110;\\r\\n}\\r\\n\\r\\nfooter > p {\\r\\n  font-size: 0.8rem;\\r\\n  padding-left: 20px;\\r\\n}\\r\\n\\r\\nfooter > p > a {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.loader {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  backdrop-filter: blur(5px);\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.overlay {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.poster {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.poster-mb {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.img-container {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  z-index: 100;\\r\\n  filter: blur(1px);\\r\\n}\\r\\n\\r\\n.img-container > img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  object-fit: cover;\\r\\n  object-position: center;\\r\\n}\\r\\n\\r\\n.text-container {\\r\\n  position: fixed;\\r\\n  z-index: 105;\\r\\n  top: 20%;\\r\\n  left: 5%;\\r\\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(10, 34, 57, 1));\\r\\n  width: 90%;\\r\\n  padding: 50px;\\r\\n  height: 270px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  border-radius: var(--radius);\\r\\n}\\r\\n\\r\\n.text-container > button {\\r\\n  font-size: 1.1rem;\\r\\n}\\r\\n\\r\\n.text {\\r\\n  font: var(--font);\\r\\n}\\r\\n\\r\\n.fa-play {\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 768px) {\\r\\n  .logo-name {\\r\\n    font-size: 2rem;\\r\\n    padding-left: 20px;\\r\\n  }\\r\\n\\r\\n  .logo {\\r\\n    display: block;\\r\\n    width: 60px;\\r\\n    height: 60px;\\r\\n    animation: logo-spin infinite 5s linear;\\r\\n  }\\r\\n\\r\\n  .poster-mb {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .poster {\\r\\n    display: block;\\r\\n  }\\r\\n\\r\\n  .search-form {\\r\\n    display: flex;\\r\\n  }\\r\\n\\r\\n  #menu,\\r\\n  .mobile-only {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .selection-wrap {\\r\\n    display: flex;\\r\\n    column-gap: 20px;\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  .movie-popup-content {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    gap: 30px;\\r\\n    align-items: center;\\r\\n    justify-content: space-around;\\r\\n  }\\r\\n\\r\\n  .movie-popup-img {\\r\\n    width: 40%;\\r\\n    height: 600px;\\r\\n  }\\r\\n\\r\\n  .movie-popup-info {\\r\\n    width: 55%;\\r\\n    height: max-content;\\r\\n  }\\r\\n\\r\\n  .like-btn:active,\\r\\n  .like-btn:hover {\\r\\n    color: red;\\r\\n    font-size: 1.3rem;\\r\\n  }\\r\\n\\r\\n  .fa-comment:hover {\\r\\n    font-size: 1.3rem;\\r\\n  }\\r\\n\\r\\n  form {\\r\\n    width: 50%;\\r\\n  }\\r\\n\\r\\n  #submit:hover {\\r\\n    padding: 12px;\\r\\n    font-size: 1.2rem;\\r\\n  }\\r\\n\\r\\n  body::-webkit-scrollbar {\\r\\n    width: 10px;\\r\\n    background: var(--color-primary);\\r\\n  }\\r\\n\\r\\n  .scroll-hide::-webkit-scrollbar {\\r\\n    width: 0%;\\r\\n  }\\r\\n\\r\\n  .text-container {\\r\\n    width: max-content;\\r\\n    top: 30%;\\r\\n    left: 20%;\\r\\n    padding: 50px;\\r\\n    height: 300px;\\r\\n    border-radius: var(--radius);\\r\\n  }\\r\\n\\r\\n  .text-container > button {\\r\\n    font-size: 1.7rem;\\r\\n  }\\r\\n\\r\\n  .text {\\r\\n    font-size: 1.3rem;\\r\\n  }\\r\\n\\r\\n  footer > p {\\r\\n    font-size: 1.1rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://movie-database/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_wallpaper_dk_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/wallpaper-dk.svg */ \"./src/modules/wallpaper-dk.svg\");\n/* harmony import */ var _modules_wallpaper_mb_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/wallpaper-mb.svg */ \"./src/modules/wallpaper-mb.svg\");\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _modules_search_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/search.js */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_animations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/animations.js */ \"./src/modules/animations.js\");\n/* harmony import */ var _modules_selectors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/selectors.js */ \"./src/modules/selectors.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.querySelector('.poster').src = _modules_wallpaper_dk_svg__WEBPACK_IMPORTED_MODULE_1__;\r\ndocument.querySelector('.poster-mb').src = _modules_wallpaper_mb_svg__WEBPACK_IMPORTED_MODULE_2__;\r\n\r\nconst hamburger = document.querySelector('#menu');\r\nhamburger.addEventListener('click', () => {\r\n  (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n});\r\n\r\nconst searchBtn = document.getElementById('search-btn');\r\nsearchBtn.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  const load = document.querySelector('.load-animation');\r\n  load.style.cssText=\"display:block\";\r\n  (0,_modules_search_js__WEBPACK_IMPORTED_MODULE_5__.search)();\r\n});\r\n\r\nconst sessionstore = sessionStorage.getItem('session') || false;\r\nif (sessionstore === false) {\r\n  (0,_modules_animations_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n  sessionStorage.setItem('session', 'true');\r\n} else {\r\n  _modules_selectors_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].overlay.style.display = 'none';\r\n}\r\n\r\n(0,_modules_render_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_4__.postAComment)();\r\n\n\n//# sourceURL=webpack://movie-database/./src/index.js?");

/***/ }),

/***/ "./src/modules/animations.js":
/*!***********************************!*\
  !*** ./src/modules/animations.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors.js */ \"./src/modules/selectors.js\");\n\r\n\r\nconst delayDisplay = () => {\r\n  _selectors_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].allShows.style.display = 'none';\r\n  _selectors_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].headerWrap.style.display = 'none';\r\n  document.body.classList.add('scroll-hide');\r\n\r\n  _selectors_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.addEventListener('click', () => {\r\n    _selectors_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].overlay.style.display = 'none';\r\n    document.body.classList.remove('scroll-hide');\r\n    _selectors_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].allShows.style.display = 'grid';\r\n    _selectors_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].headerWrap.style.display = 'flex';\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (delayDisplay);\n\n//# sourceURL=webpack://movie-database/./src/modules/animations.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllComments\": () => (/* binding */ getAllComments),\n/* harmony export */   \"postAComment\": () => (/* binding */ postAComment)\n/* harmony export */ });\n/* harmony import */ var _getvshow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getvshow.js */ \"./src/modules/getvshow.js\");\n\r\n\r\nconst form = document.getElementById('form');\r\nconst username = document.getElementById('name');\r\nconst comment = document.getElementById('comment');\r\nconst commentCount = document.querySelector('.comment-count');\r\nconst commentList = document.querySelector('.comment-list');\r\n\r\nconst getAllComments = async (id) => {\r\n  const allComments = await (0,_getvshow_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);\r\n  commentCount.textContent = `Comments (${allComments.length})`;\r\n  commentList.innerHTML = '';\r\n  allComments.forEach((e) => {\r\n    commentList.innerHTML += `\r\n    <li>${e.creation_date}  ${e.username}:  ${e.comment}</li>\r\n    `;\r\n  });\r\n};\r\n\r\nconst postAComment = () => {\r\n  form.addEventListener('submit', async (e) => {\r\n    e.preventDefault();\r\n    const movieId = form.parentNode.parentNode.id;\r\n    const response = await (0,_getvshow_js__WEBPACK_IMPORTED_MODULE_0__.addComments)(movieId, username.value, comment.value);\r\n    if (response === 201) {\r\n      await getAllComments(movieId);\r\n    }\r\n    form.reset();\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://movie-database/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/events.js":
/*!*******************************!*\
  !*** ./src/modules/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickEvents\": () => (/* binding */ clickEvents),\n/* harmony export */   \"popupEvents\": () => (/* binding */ popupEvents)\n/* harmony export */ });\n/* harmony import */ var _getvshow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getvshow.js */ \"./src/modules/getvshow.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.js */ \"./src/modules/search.js\");\n/* eslint-disable import/no-cycle */\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst clickEvents = () => {\r\n  const likeBtn = document.querySelectorAll('.like-btn');\r\n  likeBtn.forEach((e) => {\r\n    e.addEventListener('click', () => {\r\n      const { id } = e.parentNode.parentNode;\r\n      (0,_getvshow_js__WEBPACK_IMPORTED_MODULE_0__.addLikes)(id);\r\n      setTimeout(() => {\r\n        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_search_js__WEBPACK_IMPORTED_MODULE_4__.shows);\r\n      }, 500);\r\n    });\r\n  });\r\n};\r\n\r\nconst openShow = (e, id) => {\r\n  const popup = new _popup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n  e.addEventListener('click', async () => {\r\n    document.querySelector('.loader').style.display = 'flex';\r\n    const movieId = id;\r\n    const currentShow = await popup.getPopup(movieId);\r\n    popup.populatePopup(currentShow);\r\n    (0,_comments_js__WEBPACK_IMPORTED_MODULE_3__.getAllComments)(movieId);\r\n    setTimeout(() => {\r\n      document.querySelector('.loader').style.display = 'none';\r\n    }, 1000);\r\n  });\r\n};\r\n\r\nconst popupEvents = () => {\r\n  const popup = new _popup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n  const showList = document.querySelectorAll('.fa-comment');\r\n  const poster = document.querySelectorAll('.movie-poster');\r\n  showList.forEach((e) => {\r\n    const { id } = e.parentNode.parentNode;\r\n    openShow(e, id);\r\n  });\r\n  poster.forEach((e) => {\r\n    const { id } = e.parentNode;\r\n    openShow(e, id);\r\n  });\r\n  popup.closePopup();\r\n};\r\n\n\n//# sourceURL=webpack://movie-database/./src/modules/events.js?");

/***/ }),

/***/ "./src/modules/getvshow.js":
/*!*********************************!*\
  !*** ./src/modules/getvshow.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComments\": () => (/* binding */ addComments),\n/* harmony export */   \"addLikes\": () => (/* binding */ addLikes),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getlikes\": () => (/* binding */ getlikes),\n/* harmony export */   \"getvShow\": () => (/* binding */ getvShow)\n/* harmony export */ });\n/* eslint-disable import/no-cycle */\r\nconst getvShow = async (showurl) => {\r\n  if (showurl === undefined) {\r\n    const response = await fetch('https://api.tvmaze.com/shows');\r\n    return response.json();\r\n  }\r\n\r\n  const response = await fetch(showurl);\r\n  return response.json();\r\n};\r\n\r\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ED1rQK1snOoAMYBCYLLf/likes';\r\nconst addLikes = async (id) => {\r\n  await fetch(url,\r\n    {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: id,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    });\r\n};\r\nconst getlikes = (async () => {\r\n  const response = await fetch(url, { method: 'GET' });\r\n  return response.json();\r\n});\r\n\r\nconst addComments = async (itemId, username, comment) => {\r\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ED1rQK1snOoAMYBCYLLf/comments', {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: itemId,\r\n      username,\r\n      comment,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  return response.status;\r\n};\r\n\r\nconst getComments = async (id) => {\r\n  let response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ED1rQK1snOoAMYBCYLLf/comments?item_id=${id}`);\r\n  if (response.status === 400) {\r\n    response = [];\r\n    return response;\r\n  }\r\n  return response.json();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://movie-database/./src/modules/getvshow.js?");

/***/ }),

/***/ "./src/modules/likeCounter.js":
/*!************************************!*\
  !*** ./src/modules/likeCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"likeCounter\": () => (/* binding */ likeCounter),\n/* harmony export */   \"showCounter\": () => (/* binding */ showCounter)\n/* harmony export */ });\nconst showCounter = (movie) => movie.length;\r\n\r\nconst likeCounter = (e, likeCount, likes) => {\r\n  likes.forEach((eachLikes) => {\r\n    let id;\r\n    try {\r\n      id = e.show.id;\r\n    } catch (err) {\r\n      id = e.id;\r\n    }\r\n    if (String(eachLikes.item_id) === String(id)) {\r\n      likeCount = eachLikes.likes;\r\n    }\r\n  });\r\n\r\n  return likeCount;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://movie-database/./src/modules/likeCounter.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ \"./src/modules/search.js\");\n\r\n\r\nconst container = document.getElementById('menu-cover');\r\n\r\n\r\n\r\nconst closeMenu = () => {\r\n  const searchContainer = document.querySelector('.search');\r\n  searchContainer.style.display = 'none';\r\n  setTimeout(() => {\r\n    container.style.width = '0';\r\n    container.innerHTML = '';\r\n  }, 500);\r\n};\r\nconst menu = () => {\r\n \r\n \r\n\r\n\r\n  container.innerHTML = `\r\n  <div class=\"close-menu\">\r\n    <i class=\"fas fa-times fa-2x\"></i>\r\n  </div>\r\n  <div class=\"search\">\r\n    <input class=\"search-bar\" type=\"text\" id=\"menu-search-bar\" required placeholder=\"Search Movies\">\r\n    <button id=\"search-btn\">Search</button>\r\n  </div>`;\r\n  container.style.width = '100%';\r\n  const searchContainer = document.querySelector('.search');\r\n  setTimeout(() => {\r\n    searchContainer.style.display = 'flex';\r\n  }, 700);\r\n  const searchBtn = document.querySelector('#search-btn');\r\n  searchBtn.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    console.log(\"calling search! and closing\");\r\n    (0,_search_js__WEBPACK_IMPORTED_MODULE_0__.search)();\r\n    closeMenu();\r\n  });\r\n  const closeBtn = document.querySelector('.close-menu');\r\n  closeBtn.addEventListener('click', ()=>{\r\n    closeMenu();\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack://movie-database/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst moviePopup = document.querySelector('.movie-popup');\r\nconst moviePosters = document.querySelector('.movie-poster');\r\nconst movieTitle = document.querySelector('.movie-title');\r\nconst movieLanguage = document.querySelector('.movie-language');\r\nconst movieYear = document.querySelector('.movie-year');\r\nconst movieGenre = document.querySelector('.movie-genre');\r\nconst movieType = document.querySelector('.movie-type');\r\nconst movieRating = document.querySelector('.movie-rating');\r\nconst movieDescription = document.querySelector('.movie-description');\r\nconst moviePopupWrap = document.querySelector('.movie-popup-wrap');\r\n\r\nclass Popup {\r\n  replaceMultipleString = (str) => str.replace('</b>', '').replace('<b>', '').replace('</p>', '').replace('<p>', '')\r\n    .replace('<i>', '')\r\n    .replace('</i>', '')\r\n\r\n  getMovieGenres = (array) => {\r\n    let res = '';\r\n    for (let i = 0; i < array.length; i += 1) {\r\n      res += `\"${array[i]}\" `;\r\n    }\r\n    return res;\r\n  }\r\n\r\n  getPopup = async (movieId) => {\r\n    const response = await fetch(`https://api.tvmaze.com/shows/${movieId}`);\r\n    return response.json();\r\n  }\r\n\r\n  populatePopup(currentShow) {\r\n    moviePopupWrap.id = currentShow.id;\r\n    moviePosters.src = currentShow.image.original;\r\n    movieTitle.textContent = `Name: ${currentShow.name}`;\r\n    movieYear.innerHTML = `Year: <i class=\"fa-solid fa-calendar star\"></i> ${currentShow.premiered.slice(0, 4)}`;\r\n    movieGenre.textContent = `Genres: ${this.getMovieGenres(currentShow.genres)}`;\r\n    movieType.textContent =`Type: ${currentShow.type}`;\r\n    movieLanguage.textContent = `Language: ${currentShow.language}`;\r\n    movieRating.innerHTML = `Average rating:  <i class=\"fa-solid fa-star-half-stroke star\"></i> ${currentShow.rating.average}`;\r\n    movieDescription.textContent = `Summary: ${this.replaceMultipleString(currentShow.summary)}`;\r\n    moviePopup.style.display = 'flex';\r\n  }\r\n\r\n  closePopup = () => {\r\n    const moviePopupClose = document.querySelector('.movie-popup-close');\r\n    moviePopupClose.addEventListener('click', () => {\r\n      moviePopup.style.display = 'none';\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);\n\n//# sourceURL=webpack://movie-database/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getvshow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getvshow.js */ \"./src/modules/getvshow.js\");\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors.js */ \"./src/modules/selectors.js\");\n/* harmony import */ var _likeCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likeCounter.js */ \"./src/modules/likeCounter.js\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.js */ \"./src/modules/events.js\");\n/* eslint-disable import/no-cycle */\r\n\r\n\r\n\r\n\r\n\r\nconst renderShows = (async (shows) => {\r\n  let render;\r\n  let showsData = [];\r\n  if (shows === undefined) {\r\n    showsData = await (0,_getvshow_js__WEBPACK_IMPORTED_MODULE_0__.getvShow)();\r\n  } else {\r\n    showsData = shows;\r\n  }\r\n  const likes = await (0,_getvshow_js__WEBPACK_IMPORTED_MODULE_0__.getlikes)();\r\n  let likeCount = 0;\r\n  if (showsData.length === 0) {\r\n    _selectors_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].allShows.innerHTML = '<h3 id=\"notfound\">No results found for your query </h3>';\r\n  } else {\r\n    showsData.forEach((e) => {\r\n      likeCount = (0,_likeCounter_js__WEBPACK_IMPORTED_MODULE_2__.likeCounter)(e, likeCount, likes);\r\n      let id; let showName; let img1;\r\n      if (shows === undefined) {\r\n        id = e.id;\r\n        showName = e.name;\r\n        img1 = e.image.medium;\r\n      } else {\r\n        id = e.show.id;\r\n        showName = e.show.name;\r\n\r\n        try {\r\n          img1 = e.show.image.medium;\r\n        } catch (err) {\r\n          img1 = 'https://img.icons8.com/external-others-iconmarket/344/external-error-search-others-iconmarket-3.png';\r\n        }\r\n      }\r\n      render += `\r\n    <li class=\"show\"  id=${id}>\r\n      <h3 class=\"show-name\">${showName}</h3>\r\n      <img src=${img1} alt=\"movie-poster\" class=\"movie-poster\">\r\n      <div class=\"show-btns\">\r\n        <i class=\"fa-solid fa-heart like-btn\"></i>\r\n        <p>${likeCount}</p>\r\n        <i class=\"fa-solid fa-comment\"></i>\r\n      </div>\r\n    </li>\r\n    `;\r\n      likeCount = 0;\r\n    });\r\n    _selectors_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].allShows.innerHTML = render.replace('undefined', '');\r\n  }\r\n  const movieSize = `<h3>${(0,_likeCounter_js__WEBPACK_IMPORTED_MODULE_2__.showCounter)(showsData)} shows found in the Movie ShowBox</h3>`;\r\n  _selectors_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].movieDbInfo.innerHTML = movieSize;\r\n  (0,_events_js__WEBPACK_IMPORTED_MODULE_3__.clickEvents)();\r\n  (0,_events_js__WEBPACK_IMPORTED_MODULE_3__.popupEvents)();\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderShows);\n\n//# sourceURL=webpack://movie-database/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"search\": () => (/* binding */ search),\n/* harmony export */   \"shows\": () => (/* binding */ shows)\n/* harmony export */ });\n/* harmony import */ var _getvshow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getvshow.js */ \"./src/modules/getvshow.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/modules/render.js\");\n/* eslint-disable import/no-cycle */\r\n\r\n/* eslint-disable import/no-mutable-exports */\r\n\r\n\r\n\r\nlet shows;\r\nconst search = async () => {\r\n  try {\r\n    const cover = document.getElementById('menu-wraper');\r\n    cover.style.cssText = 'display:none;';\r\n    const { value } = document.querySelector('.search-bar');\r\n    const url = `https://api.tvmaze.com/search/shows?q=${value}`;\r\n    shows = await (0,_getvshow_js__WEBPACK_IMPORTED_MODULE_0__.getvShow)(url);\r\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(shows);\r\n  } catch (err) {\r\n    const { value } = document.querySelector('.search-bar');\r\n    const url = `https://api.tvmaze.com/search/shows?q=${value}`;\r\n    shows = await (0,_getvshow_js__WEBPACK_IMPORTED_MODULE_0__.getvShow)(url);\r\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(shows);\r\n  }\r\n  finally{\r\n      const load = document.querySelector('.load-animation');\r\n      setTimeout(() => {\r\n        console.log(\"removing ani...of \",load);\r\n         load.style.cssText=\"display:none\";\r\n      }, 800);\r\n  }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://movie-database/./src/modules/search.js?");

/***/ }),

/***/ "./src/modules/selectors.js":
/*!**********************************!*\
  !*** ./src/modules/selectors.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst allShows = document.getElementById('all-shows');\r\nconst movieDbInfo = document.getElementById('movie-db-info');\r\nconst overlay = document.querySelector('.overlay');\r\nconst button = document.querySelector('.overlay-button');\r\nconst headerWrap = document.querySelector('.header-main-wrap');\r\n\r\nconst selector = {\r\n  allShows,\r\n  movieDbInfo,\r\n  overlay,\r\n  button,\r\n  headerWrap,\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selector);\n\n//# sourceURL=webpack://movie-database/./src/modules/selectors.js?");

/***/ }),

/***/ "./src/modules/wallpaper-dk.svg":
/*!**************************************!*\
  !*** ./src/modules/wallpaper-dk.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/a298ff4973c0f171959d.svg\";\n\n//# sourceURL=webpack://movie-database/./src/modules/wallpaper-dk.svg?");

/***/ }),

/***/ "./src/modules/wallpaper-mb.svg":
/*!**************************************!*\
  !*** ./src/modules/wallpaper-mb.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/e278f7e17ca5d0f17669.svg\";\n\n//# sourceURL=webpack://movie-database/./src/modules/wallpaper-mb.svg?");

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