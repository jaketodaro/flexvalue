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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/flexValue.js":
/*!**************************!*\
  !*** ./src/flexValue.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = flexValue;\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nfunction flexValue(value) {\n  while ((0, _utils.isFunction)(value)) {\n    value = value();\n  }\n\n  return value;\n}\n\n//# sourceURL=webpack:///./src/flexValue.js?");

/***/ }),

/***/ "./src/flexValueAsync.js":
/*!*******************************!*\
  !*** ./src/flexValueAsync.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = flexValueAsync;\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nfunction flexValueAsync(value) {\n  while ((0, _utils.isFunction)(value)) {\n    value = value();\n  }\n\n  if ((0, _utils.isPromise)(value)) {\n    return value.then(function (x) {\n      return flexValueAsync(x);\n    });\n  }\n\n  return Promise.resolve(value);\n}\n\n//# sourceURL=webpack:///./src/flexValueAsync.js?");

/***/ }),

/***/ "./src/flexifyArgs.js":
/*!****************************!*\
  !*** ./src/flexifyArgs.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = flexifyArgs;\n\nvar _flexValue = __webpack_require__(/*! ./flexValue */ \"./src/flexValue.js\");\n\nvar _flexValue2 = _interopRequireDefault(_flexValue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction flexifyArgs() {\n  var _arguments = Array.prototype.slice.call(arguments),\n      fn = _arguments[0],\n      argConverters = _arguments.slice(1);\n\n  return function () {\n    var args = Array.from(arguments).map(function (arg, i) {\n      var argConverter = i >= argConverters.length ? argConverters.slice(-1)[0] : argConverters[i];\n\n      return argConverter(arg);\n    });\n\n    return fn.apply(this, args);\n  };\n}\n\n//# sourceURL=webpack:///./src/flexifyArgs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _flexifyArgs = __webpack_require__(/*! ./flexifyArgs */ \"./src/flexifyArgs.js\");\n\nvar _flexifyArgs2 = _interopRequireDefault(_flexifyArgs);\n\nvar _flexValue = __webpack_require__(/*! ./flexValue */ \"./src/flexValue.js\");\n\nvar _flexValue2 = _interopRequireDefault(_flexValue);\n\nvar _flexValueAsync = __webpack_require__(/*! ./flexValueAsync */ \"./src/flexValueAsync.js\");\n\nvar _flexValueAsync2 = _interopRequireDefault(_flexValueAsync);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = {\n  flexifyArgs: _flexifyArgs2.default,\n  flexValue: _flexValue2.default,\n  flexValueAsync: _flexValueAsync2.default\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.isFunction = isFunction;\nexports.isPromise = isPromise;\nfunction isFunction(value) {\n  return typeof value === \"function\";\n}\n\nfunction isPromise(value) {\n  return value instanceof Promise;\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });