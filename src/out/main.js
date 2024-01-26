/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestingData: () => (/* binding */ requestingData)
/* harmony export */ });
/* harmony import */ var _Genres_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _FormationStructure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


const keyAPI = 'AIzaSyDtpNURBxE_hqMVuZES4s-zKoDkjyYRLNk';
let indexBook = 0;
let url = `https://www.googleapis.com/books/v1/volumes?q="subject:${_Genres_js__WEBPACK_IMPORTED_MODULE_0__.q.data}"&key=${keyAPI}&printType=books&startIndex=${indexBook}&maxResults=6&langRestrict=en`;
function requestingData() {
  fetch(url).then(response => response.json()).then(data => {
    let arrayBooks = data.items;
    (0,_FormationStructure_js__WEBPACK_IMPORTED_MODULE_1__.buildingStructure)(arrayBooks);
    url = `https://www.googleapis.com/books/v1/volumes?q="subject:${_Genres_js__WEBPACK_IMPORTED_MODULE_0__.q.data}"&key=${keyAPI}&printType=books&startIndex=${indexBook += 6}&maxResults=6&langRestrict=en`;
    debugger;
  }).catch(err => {
    console.log(err);
  });
}
requestingData();

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ q)
/* harmony export */ });
const Genres = document.querySelectorAll('.genre-navigation__item');
let q = {
  data: "Architecture"
};
Genres.forEach(elem => {
  elem.addEventListener('click', () => {
    Genres.forEach(element => {
      element.classList = "";
      element.classList = "genre-navigation__item";
    });
    elem.classList = "genre-navigation__item2";
    debugger;
    q.data = elem.textContent;
  });
});

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildingStructure: () => (/* binding */ buildingStructure)
/* harmony export */ });
//import { requestingData } from "./Request";
function buildingStructure(arrayData) {
  let books = document.querySelector('.books');
  arrayData.forEach(element => {
    let img = element.volumeInfo.imageLinks.smallThumbnail;
    let writer = element.volumeInfo.publisher;
    let name = element.volumeInfo.title;
    let whereof = element.volumeInfo.description;
    let price;
    if (element.saleInfo.isEbook == true) {
      price = `${element.saleInfo.listPrice.amount} ${element.saleInfo.listPrice.currencyCode}`;
    } else {
      price = "";
    }
    const btn = 'buy now';
    let booksItem = document.createElement('div');
    let booksItemImg = document.createElement('img');
    let booksItemBlockInf = document.createElement('div');
    let blockInfWriter = document.createElement('p');
    let blockInfName = document.createElement('h3');
    let blockInfWhereof = document.createElement('p');
    let blockInfPrice = document.createElement('p');
    let blockInfBtn = document.createElement('button');
    booksItem.classList = 'books__item';
    booksItemImg.classList = 'books__item_img';
    booksItemBlockInf.classList = 'books__item_block-inf';
    blockInfWriter.classList = 'block-inf__writer';
    blockInfName.classList = 'block-inf__name';
    blockInfWhereof.classList = 'block-inf__whereof';
    blockInfPrice.classList = 'block-inf__price';
    blockInfBtn.classList = 'block-inf__btn';
    booksItemImg.src = img;
    blockInfWriter.textContent = writer;
    blockInfName.textContent = name;
    blockInfWhereof.textContent = whereof;
    blockInfPrice.textContent = price;
    blockInfBtn.textContent = btn;
    booksItemBlockInf.append(blockInfWriter);
    booksItemBlockInf.append(blockInfName);
    booksItemBlockInf.append(blockInfWhereof);
    booksItemBlockInf.append(blockInfPrice);
    booksItemBlockInf.append(blockInfBtn);
    booksItem.append(booksItemImg);
    booksItem.append(booksItemBlockInf);
    books.append(booksItem);
  });
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

const btnLoadMore = document.querySelector('.loading-animation-block__Btn');
const loadingAnimation = document.querySelector('.loading-animation-block__loader');
btnLoadMore.addEventListener('click', () => {
  btnLoadMore.style.display = 'none';
  loadingAnimation.style.display = 'inline-block';
  debugger;
  (0,_Request__WEBPACK_IMPORTED_MODULE_0__.requestingData)();
  btnLoadMore.style.display = 'block';
  loadingAnimation.style.display = 'none';
});

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
/* harmony import */ var _src_js_LoadMore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


})();

/******/ })()
;