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

/***/ "./src/js/Key.js":
/*!***********************!*\
  !*** ./src/js/Key.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Key)\n/* harmony export */ });\n/* harmony import */ var _utils_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/create.js */ \"./src/js/utils/create.js\");\n\r\n\r\nclass Key {\r\n  constructor({small, shift, code}) {\r\n    this.code = code;\r\n    this.small = small;\r\n    this.shift = shift;\r\n    this.isFnKey = Boolean(small.match(/Ctrl|arr|Alt|Shift|Tab|Del|Enter|Caps|Win/));\r\n    \r\n    if (shift && shift.match(/[^a-zA-Zа-яА-ЯЁ0-9]/)) {\r\n      this.sub = (0,_utils_create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'sub', this.shift);\r\n    } else {\r\n      this.sub = (0,_utils_create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'sub', '');\r\n    }\r\n\r\n    this.letter = (0,_utils_create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'letter', small);\r\n    this.div = (0,_utils_create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'keyboard__key', [this.sub, this.letter], null,['code', this.code]);\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/Key.js?");

/***/ }),

/***/ "./src/js/Keyboard.js":
/*!****************************!*\
  !*** ./src/js/Keyboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Keyboard)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/js/storage.js\");\n/* harmony import */ var _utils_create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/create.js */ \"./src/js/utils/create.js\");\n/* harmony import */ var _layouts_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/index.js */ \"./src/js/layouts/index.js\");\n/* harmony import */ var _Key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Key.js */ \"./src/js/Key.js\");\n\r\n\r\n\r\n\r\n\r\nconst main = (0,_utils_create_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('main', '', \r\n  [(0,_utils_create_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('h1', 'title', 'RSS Virtual Keyboard'),\r\n   (0,_utils_create_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('h3', 'subtitle', 'Windows keyboard that has been made under Linux'),\r\n   (0,_utils_create_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('p', 'hint', 'Use left <kbd>Ctrl</kbd> + <kbd>Alt</kbd> to switch language. Last language saves in localstorage')\r\n  ]\r\n);\r\n\r\nclass Keyboard {\r\n  constructor(rowsOrder) {\r\n    this.rowsOrder = rowsOrder;\r\n    this.keysPressed = {};\r\n    this.isCaps = false;\r\n  }\r\n\r\n  init(langCode) {\r\n    this.keyBase = _layouts_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][langCode];\r\n    this.output = (0,_utils_create_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('textarea', 'output', null, main,\r\n    ['placeholder', 'Start type something...'],\r\n    ['rows', 5],\r\n    ['cols', 50],\r\n    ['spellcheck', false],\r\n    ['autocorrect', 'off']\r\n    );\r\n    this.container = (0,_utils_create_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'keyboard', null, main, ['language', langCode]);\r\n    document.body.prepend(main);\r\n    return this;\r\n  }\r\n\r\n  generateLayout() {\r\n    this.keyButtons = [];\r\n    this.rowsOrder.forEach((row, i) => {\r\n      const rowElement = (0,_utils_create_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'keyboard-row', null, this.container, ['row', i + 1]);\r\n      rowElement.style.gridTemplateColumns = `repeat(${row.length}, 1fr)`;\r\n      row.forEach((code) => {\r\n        const keyObj = this.keyBase.find((key) => key.code === code);\r\n        if (keyObj) {\r\n          const keyButton = new _Key_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](keyObj);\r\n          this.keyButtons.push(keyButton);\r\n          rowElement.appendChild(keyButton.div);\r\n        }\r\n      })\r\n    });\r\n  }\r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/Keyboard.js?");

/***/ }),

/***/ "./src/js/layouts/en.js":
/*!******************************!*\
  !*** ./src/js/layouts/en.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\r\n  {\r\n    small: '`',\r\n    shift: '~',\r\n    code: 'Backquote',\r\n  },\r\n  {\r\n    small: '1',\r\n    shift: '!',\r\n    code: 'Digit1',\r\n  },\r\n  {\r\n    small: '2',\r\n    shift: '@',\r\n    code: 'Digit2',\r\n  },\r\n  {\r\n    small: '3',\r\n    shift: '#',\r\n    code: 'Digit3',\r\n  },\r\n  {\r\n    small: '4',\r\n    shift: '$',\r\n    code: 'Digit4',\r\n  },\r\n  {\r\n    small: '5',\r\n    shift: '%',\r\n    code: 'Digit5',\r\n  },\r\n  {\r\n    small: '6',\r\n    shift: '^',\r\n    code: 'Digit6',\r\n  },\r\n  {\r\n    small: '7',\r\n    shift: '&',\r\n    code: 'Digit7',\r\n  },\r\n  {\r\n    small: '8',\r\n    shift: '*',\r\n    code: 'Digit8',\r\n  },\r\n  {\r\n    small: '9',\r\n    shift: '(',\r\n    code: 'Digit9',\r\n  },\r\n  {\r\n    small: '0',\r\n    shift: ')',\r\n    code: 'Digit0',\r\n  },\r\n  {\r\n    small: '-',\r\n    shift: '_',\r\n    code: 'Minus',\r\n  },\r\n  {\r\n    small: '=',\r\n    shift: '+',\r\n    code: 'Equal',\r\n  },\r\n  {\r\n    small: 'Backspace',\r\n    shift: null,\r\n    code: 'Backspace',\r\n  },\r\n  {\r\n    small: 'Delete',\r\n    shift: null,\r\n    code: 'Delete',\r\n  },\r\n  {\r\n    small: 'Tab',\r\n    shift: null,\r\n    code: 'Tab',\r\n  },\r\n  {\r\n    small: 'q',\r\n    shift: 'Q',\r\n    code: 'KeyQ',\r\n  },\r\n  {\r\n    small: 'w',\r\n    shift: 'W',\r\n    code: 'KeyW',\r\n  },\r\n  {\r\n    small: 'e',\r\n    shift: 'E',\r\n    code: 'KeyE',\r\n  },\r\n  {\r\n    small: 'r',\r\n    shift: 'R',\r\n    code: 'KeyR',\r\n  },\r\n  {\r\n    small: 't',\r\n    shift: 'T',\r\n    code: 'KeyT',\r\n  },\r\n  {\r\n    small: 'y',\r\n    shift: 'Y',\r\n    code: 'KeyY',\r\n  },\r\n  {\r\n    small: 'u',\r\n    shift: 'U',\r\n    code: 'KeyU',\r\n  },\r\n  {\r\n    small: 'i',\r\n    shift: 'I',\r\n    code: 'KeyI',\r\n  },\r\n  {\r\n    small: 'o',\r\n    shift: 'O',\r\n    code: 'KeyO',\r\n  },\r\n  {\r\n    small: 'p',\r\n    shift: 'P',\r\n    code: 'KeyP',\r\n  },\r\n  {\r\n    small: '[',\r\n    shift: '{',\r\n    code: 'BracketLeft',\r\n  },\r\n  {\r\n    small: ']',\r\n    shift: '}',\r\n    code: 'BracketRight',\r\n  },\r\n  {\r\n    small: 'Enter',\r\n    shift: null,\r\n    code: 'Enter',\r\n  },\r\n  {\r\n    small: 'CapsLock',\r\n    shift: null,\r\n    code: 'CapsLock',\r\n  },\r\n  {\r\n    small: 'a',\r\n    shift: 'A',\r\n    code: 'KeyA',\r\n  },\r\n  {\r\n    small: 's',\r\n    shift: 'S',\r\n    code: 'KeyS',\r\n  },\r\n  {\r\n    small: 'd',\r\n    shift: 'D',\r\n    code: 'KeyD',\r\n  },\r\n  {\r\n    small: 'f',\r\n    shift: 'F',\r\n    code: 'KeyF',\r\n  },\r\n  {\r\n    small: 'g',\r\n    shift: 'G',\r\n    code: 'KeyG',\r\n  },\r\n  {\r\n    small: 'h',\r\n    shift: 'H',\r\n    code: 'KeyH',\r\n  },\r\n  {\r\n    small: 'j',\r\n    shift: 'J',\r\n    code: 'KeyJ',\r\n  },\r\n  {\r\n    small: 'k',\r\n    shift: 'K',\r\n    code: 'KeyK',\r\n  },\r\n  {\r\n    small: 'l',\r\n    shift: 'L',\r\n    code: 'KeyL',\r\n  },\r\n  {\r\n    small: ';',\r\n    shift: ':',\r\n    code: 'Semicolon',\r\n  },\r\n  {\r\n    small: \"'\",\r\n    shift: '\"',\r\n    code: 'Quote',\r\n  },\r\n  {\r\n    small: '\\\\',\r\n    shift: '|',\r\n    code: 'Backslash',\r\n  },\r\n  {\r\n    small: 'Shift',\r\n    shift: null,\r\n    code: 'ShiftLeft',\r\n  },\r\n  {\r\n    small: '<',\r\n    shift: '>',\r\n    code: 'IntlBackslash',\r\n  },\r\n  {\r\n    small: 'z',\r\n    shift: 'Z',\r\n    code: 'KeyZ',\r\n  },\r\n  {\r\n    small: 'x',\r\n    shift: 'X',\r\n    code: 'KeyX',\r\n  },\r\n  {\r\n    small: 'c',\r\n    shift: 'C',\r\n    code: 'KeyC',\r\n  },\r\n  {\r\n    small: 'v',\r\n    shift: 'V',\r\n    code: 'KeyV',\r\n  },\r\n  {\r\n    small: 'b',\r\n    shift: 'B',\r\n    code: 'KeyB',\r\n  },\r\n  {\r\n    small: 'n',\r\n    shift: 'N',\r\n    code: 'KeyN',\r\n  },\r\n  {\r\n    small: 'm',\r\n    shift: 'M',\r\n    code: 'KeyM',\r\n  },\r\n  {\r\n    small: ',',\r\n    shift: '<',\r\n    code: 'Comma',\r\n  },\r\n  {\r\n    small: '.',\r\n    shift: '>',\r\n    code: 'Period',\r\n  },\r\n  {\r\n    small: '/',\r\n    shift: '?',\r\n    code: 'Slash',\r\n  },\r\n  {\r\n    small: 'Shift',\r\n    shift: null,\r\n    code: 'ShiftRight',\r\n  },\r\n  {\r\n    small: 'Ctrl',\r\n    shift: null,\r\n    code: 'ControlLeft',\r\n  },\r\n  {\r\n    small: 'Alt',\r\n    shift: null,\r\n    code: 'AltLeft',\r\n  },\r\n  {\r\n    small: ' ',\r\n    shift: null,\r\n    code: 'Space',\r\n  },\r\n  {\r\n    small: 'Alt',\r\n    shift: null,\r\n    code: 'AltRight',\r\n  },\r\n  {\r\n    small: 'Ctrl',\r\n    shift: null,\r\n    code: 'ControlRight',\r\n  },\r\n  {\r\n    small: '&larr;',\r\n    shift: null,\r\n    code: 'ArrowLeft',\r\n  },\r\n  {\r\n    small: '&uarr;',\r\n    shift: null,\r\n    code: 'ArrowUp',\r\n  },\r\n  {\r\n    small: '&darr;',\r\n    shift: null,\r\n    code: 'ArrowDown',\r\n  },\r\n  {\r\n    small: '&rarr;',\r\n    shift: null,\r\n    code: 'ArrowRight',\r\n  },\r\n  {\r\n    small: 'Win',\r\n    shift: null,\r\n    code: 'Win',\r\n  },\r\n]);\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/layouts/en.js?");

/***/ }),

/***/ "./src/js/layouts/index.js":
/*!*********************************!*\
  !*** ./src/js/layouts/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ru_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ru.js */ \"./src/js/layouts/ru.js\");\n/* harmony import */ var _en_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en.js */ \"./src/js/layouts/en.js\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ru: _ru_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], en: _en_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]});\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/layouts/index.js?");

/***/ }),

/***/ "./src/js/layouts/ru.js":
/*!******************************!*\
  !*** ./src/js/layouts/ru.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\r\n  {\r\n    small: 'CapsLock',\r\n    shift: null,\r\n    code: 'CapsLock',\r\n  },\r\n  {\r\n    small: 'ё',\r\n    shift: 'Ё',\r\n    code: 'Backquote',\r\n  },\r\n  {\r\n    small: '1',\r\n    shift: '!',\r\n    code: 'Digit1',\r\n  },\r\n  {\r\n    small: '2',\r\n    shift: '\"',\r\n    code: 'Digit2',\r\n  },\r\n  {\r\n    small: '3',\r\n    shift: '№',\r\n    code: 'Digit3',\r\n  },\r\n  {\r\n    small: '4',\r\n    shift: ';',\r\n    code: 'Digit4',\r\n  },\r\n  {\r\n    small: '5',\r\n    shift: '%',\r\n    code: 'Digit5',\r\n  },\r\n  {\r\n    small: '6',\r\n    shift: ':',\r\n    code: 'Digit6',\r\n  },\r\n  {\r\n    small: '7',\r\n    shift: '?',\r\n    code: 'Digit7',\r\n  },\r\n  {\r\n    small: '8',\r\n    shift: '*',\r\n    code: 'Digit8',\r\n  },\r\n  {\r\n    small: '9',\r\n    shift: '(',\r\n    code: 'Digit9',\r\n  },\r\n  {\r\n    small: '0',\r\n    shift: ')',\r\n    code: 'Digit0',\r\n  },\r\n  {\r\n    small: '-',\r\n    shift: '_',\r\n    code: 'Minus',\r\n  },\r\n  {\r\n    small: '=',\r\n    shift: '+',\r\n    code: 'Equal',\r\n  },\r\n  {\r\n    small: 'Backspace',\r\n    shift: null,\r\n    code: 'Backspace',\r\n  },\r\n  {\r\n    small: 'Delete',\r\n    shift: null,\r\n    code: 'Delete',\r\n  },\r\n  {\r\n    small: 'Tab',\r\n    shift: null,\r\n    code: 'Tab',\r\n  },\r\n  {\r\n    small: 'й',\r\n    shift: 'Й',\r\n    code: 'KeyQ',\r\n  },\r\n  {\r\n    small: 'ц',\r\n    shift: 'Ц',\r\n    code: 'KeyW',\r\n  },\r\n  {\r\n    small: 'у',\r\n    shift: 'У',\r\n    code: 'KeyE',\r\n  },\r\n  {\r\n    small: 'к',\r\n    shift: 'К',\r\n    code: 'KeyR',\r\n  },\r\n  {\r\n    small: 'е',\r\n    shift: 'Е',\r\n    code: 'KeyT',\r\n  },\r\n  {\r\n    small: 'н',\r\n    shift: 'Н',\r\n    code: 'KeyY',\r\n  },\r\n  {\r\n    small: 'г',\r\n    shift: 'Г',\r\n    code: 'KeyU',\r\n  },\r\n  {\r\n    small: 'ш',\r\n    shift: 'Ш',\r\n    code: 'KeyI',\r\n  },\r\n  {\r\n    small: 'щ',\r\n    shift: 'Щ',\r\n    code: 'KeyO',\r\n  },\r\n  {\r\n    small: 'з',\r\n    shift: 'З',\r\n    code: 'KeyP',\r\n  },\r\n  {\r\n    small: 'х',\r\n    shift: 'Х',\r\n    code: 'BracketLeft',\r\n  },\r\n  {\r\n    small: 'ъ',\r\n    shift: 'Ъ',\r\n    code: 'BracketRight',\r\n  },\r\n  {\r\n    small: 'Enter',\r\n    shift: null,\r\n    code: 'Enter',\r\n  },\r\n  {\r\n    small: 'ф',\r\n    shift: 'Ф',\r\n    code: 'KeyA',\r\n  },\r\n  {\r\n    small: 'ы',\r\n    shift: 'Ы',\r\n    code: 'KeyS',\r\n  },\r\n  {\r\n    small: 'в',\r\n    shift: 'В',\r\n    code: 'KeyD',\r\n  },\r\n  {\r\n    small: 'а',\r\n    shift: 'А',\r\n    code: 'KeyF',\r\n  },\r\n  {\r\n    small: 'п',\r\n    shift: 'П',\r\n    code: 'KeyG',\r\n  },\r\n  {\r\n    small: 'р',\r\n    shift: 'Р',\r\n    code: 'KeyH',\r\n  },\r\n  {\r\n    small: 'о',\r\n    shift: 'О',\r\n    code: 'KeyJ',\r\n  },\r\n  {\r\n    small: 'л',\r\n    shift: 'Л',\r\n    code: 'KeyK',\r\n  },\r\n  {\r\n    small: 'д',\r\n    shift: 'Д',\r\n    code: 'KeyL',\r\n  },\r\n  {\r\n    small: 'ж',\r\n    shift: 'Ж',\r\n    code: 'Semicolon',\r\n  },\r\n  {\r\n    small: 'э',\r\n    shift: 'Э',\r\n    code: 'Quote',\r\n  },\r\n  {\r\n    small: '\\\\',\r\n    shift: '/',\r\n    code: 'Backslash',\r\n  },\r\n  {\r\n    small: 'Shift',\r\n    shift: null,\r\n    code: 'ShiftLeft',\r\n  },\r\n  {\r\n    small: '/',\r\n    shift: '|',\r\n    code: 'IntlBackslash',\r\n  },\r\n  {\r\n    small: 'я',\r\n    shift: 'Я',\r\n    code: 'KeyZ',\r\n  },\r\n  {\r\n    small: 'ч',\r\n    shift: 'Ч',\r\n    code: 'KeyX',\r\n  },\r\n  {\r\n    small: 'с',\r\n    shift: 'С',\r\n    code: 'KeyC',\r\n  },\r\n  {\r\n    small: 'м',\r\n    shift: 'М',\r\n    code: 'KeyV',\r\n  },\r\n  {\r\n    small: 'и',\r\n    shift: 'И',\r\n    code: 'KeyB',\r\n  },\r\n  {\r\n    small: 'т',\r\n    shift: 'Т',\r\n    code: 'KeyN',\r\n  },\r\n  {\r\n    small: 'ь',\r\n    shift: 'Ь',\r\n    code: 'KeyM',\r\n  },\r\n  {\r\n    small: 'б',\r\n    shift: 'Б',\r\n    code: 'Comma',\r\n  },\r\n  {\r\n    small: 'ю',\r\n    shift: 'Ю',\r\n    code: 'Period',\r\n  },\r\n  {\r\n    small: '.',\r\n    shift: ',',\r\n    code: 'Slash',\r\n  },\r\n  {\r\n    small: 'Shift',\r\n    shift: null,\r\n    code: 'ShiftRight',\r\n  },\r\n  {\r\n    small: 'Ctrl',\r\n    shift: null,\r\n    code: 'ControlLeft',\r\n  },\r\n  {\r\n    small: 'Alt',\r\n    shift: null,\r\n    code: 'AltLeft',\r\n  },\r\n  {\r\n    small: ' ',\r\n    shift: null,\r\n    code: 'Space',\r\n  },\r\n  {\r\n    small: 'Alt',\r\n    shift: null,\r\n    code: 'AltRight',\r\n  },\r\n  {\r\n    small: 'Ctrl',\r\n    shift: null,\r\n    code: 'ControlRight',\r\n  },\r\n  {\r\n    small: '&larr;',\r\n    shift: null,\r\n    code: 'ArrowLeft',\r\n  },\r\n  {\r\n    small: '&uarr;',\r\n    shift: null,\r\n    code: 'ArrowUp',\r\n  },\r\n  {\r\n    small: '&darr;',\r\n    shift: null,\r\n    code: 'ArrowDown',\r\n  },\r\n  {\r\n    small: '&rarr;',\r\n    shift: null,\r\n    code: 'ArrowRight',\r\n  },\r\n  {\r\n    small: 'Win',\r\n    shift: null,\r\n    code: 'Win',\r\n  },\r\n]);\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/layouts/ru.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/js/storage.js\");\n/* harmony import */ var _Keyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Keyboard.js */ \"./src/js/Keyboard.js\");\n\r\n\r\n\r\nconst rowsOrder = [\r\n  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Delete'],\r\n  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backspace'],\r\n  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'],\r\n  ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],\r\n  ['ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],\r\n];\r\n\r\nconst lang = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.get)('kblang', '\"ru\"');\r\n\r\nnew _Keyboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](rowsOrder).init(lang).generateLayout();\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/script.js?");

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get\": () => (/* binding */ get),\n/* harmony export */   \"set\": () => (/* binding */ set)\n/* harmony export */ });\nfunction set(name, value) {\r\n  window.localStorage.setItem(name, JSON.stringify(value));\r\n}\r\n\r\nfunction get(name, subst = null) {\r\n  return JSON.parse(window.localStorage.getItem(name) || subst); \r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/storage.js?");

/***/ }),

/***/ "./src/js/utils/create.js":
/*!********************************!*\
  !*** ./src/js/utils/create.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ create)\n/* harmony export */ });\nfunction create(el, classNames, child, parent, ...dataAttr) {\r\n  let element = null;\r\n  try {\r\n    element = document.createElement(el);\r\n  } catch (error) {\r\n    throw new Error('Oshibka peredachi tag name');\r\n  }\r\n\r\n  if (classNames) element.classList.add(...classNames.split(' '));\r\n\r\n  if (child && Array.isArray(child)) {\r\n    child.forEach(childElement => childElement && element.appendChild(childElement));\r\n  } else if (child && typeof child === 'object') {\r\n    element.appendChild(child);\r\n  } else if (child && typeof child === 'string') {\r\n    element.innerHTML = child;\r\n  }\r\n\r\n  if (parent) {\r\n    parent.appendChild(element);\r\n  }\r\n\r\n  if (dataAttr.length) {\r\n    dataAttr.forEach(([attrName, attrValue]) => {\r\n      if (attrValue === '') {\r\n        element.setAttribute(attrName, '');\r\n      } \r\n      if (attrName.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck/)) {\r\n          element.setAttribute(attrName, attrValue);\r\n        } else {\r\n          element.dataset[attrName] = attrValue;\r\n        }\r\n    });\r\n  }\r\n  return element;\r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/utils/create.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;