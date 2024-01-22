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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_js_Genres__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/js/Genres */ \"./src/js/Genres.js\");\n/* harmony import */ var _src_js_Request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/js/Request */ \"./src/js/Request.js\");\n/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/scss/style.scss */ \"./src/scss/style.scss\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://online_bookstore_on_the_google_books_api/./index.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://online_bookstore_on_the_google_books_api/./src/scss/style.scss?");

/***/ }),

/***/ "./src/js/Genres.js":
/*!**************************!*\
  !*** ./src/js/Genres.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Genres = document.querySelectorAll('.genre-navigation__item');\r\nlet q = \"Architecture\";\r\n\r\nGenres.forEach((elem)=>{\r\n\telem.addEventListener('click',()=>{\r\n        Genres.forEach(element => {\r\n            element.classList = \"\";\r\n            element.classList = \"genre-navigation__item\";\r\n        });\r\n        elem.classList = \"genre-navigation__item2\";\r\n        q = elem.value;\r\n  })\r\n})\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (q);\n\n//# sourceURL=webpack://online_bookstore_on_the_google_books_api/./src/js/Genres.js?");

/***/ }),

/***/ "./src/js/Request.js":
/*!***************************!*\
  !*** ./src/js/Request.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Genres_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Genres.js */ \"./src/js/Genres.js\");\n\r\n\r\nconst keyAPI ='AIzaSyDtpNURBxE_hqMVuZES4s-zKoDkjyYRLNk';\r\nlet indexBook = 0;\r\nlet url = `https://www.googleapis.com/books/v1/volumes?q=\"subject:${_Genres_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}\"&key=${keyAPI}&printType=books&startIndex=${indexBook}&maxResults=6&langRestrict=en`\r\nfetch(url)\r\n  .then((response) => {\r\n    return response.json();\r\n})\n\n//# sourceURL=webpack://online_bookstore_on_the_google_books_api/./src/js/Request.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;