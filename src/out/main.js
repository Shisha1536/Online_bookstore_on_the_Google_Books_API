/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Genres = document.querySelectorAll('.genre-navigation__item');
let q = "Architecture";
Genres.forEach(elem => {
  elem.addEventListener('click', () => {
    Genres.forEach(element => {
      element.classList = "";
      element.classList = "genre-navigation__item";
    });
    elem.classList = "genre-navigation__item2";
    q = elem.value;
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (q);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Genres_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _FormationStructure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


const books = document.getElementsByClassName('books');
const keyAPI = 'AIzaSyDtpNURBxE_hqMVuZES4s-zKoDkjyYRLNk';
let indexBook = 0;
let url = `https://www.googleapis.com/books/v1/volumes?q="subject:${_Genres_js__WEBPACK_IMPORTED_MODULE_0__["default"]}"&key=${keyAPI}&printType=books&startIndex=${indexBook}&maxResults=6&langRestrict=en`;

//const bookResponse = fetch(url)
//const booksAPI =  bookResponse.json();
//let arrayBooks = booksAPI.items;

//let B = buildingStructure(arrayBooks);
function requestingData() {
  fetch(url).then(response => response.json()).then(data => {
    debugger;
    let arrayBooks = data.items;
    arrayBooks.forEach(element => {
      console.log(element);
    });
  }).catch(err => {
    console.log(err);
  });
}
requestingData();
//export default requestingData();

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function buildingStructure(arrayData) {
  //arrayData.forEach(element => {
  //    let booksItem = document.createElement('div');
  //    let booksItemImg = document.createElement('img');
  //    let booksItemBlock = document.createElement('div');
  //    let blockInfWriter = document.createElement('p');
  //    let blockInfName = document.createElement('h3');
  //    let blockInfWhereof = document.createElement('p');
  //    let blockInfPrice = document.createElement('p');
  //    let blockInfBnt = document.createElement('button');
  //
  //
  //});
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildingStructure());

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_js_Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
//import "./src/js/Genres"


})();

/******/ })()
;