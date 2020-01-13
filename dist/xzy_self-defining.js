(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["xUtils"] = factory();
	else
		root["xUtils"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/*! exports provided: chunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return chunk; });\nfunction chunk (array, size = 1) {\r\n  const bigArr = []\r\n  let smallArr = []\r\n  if(array.length === 0){\r\n    return bigArr\r\n  }\r\n  if(size < 1){\r\n    size = 1\r\n  }else if(size > array.length){\r\n    size = array.length\r\n  }\r\n  array.forEach(item => {\r\n    if (smallArr.length === 0) {\r\n      bigArr.push(smallArr)\r\n    }\r\n    smallArr.push(item)\r\n    if(smallArr.length === size){\r\n      smallArr = []\r\n    }\r\n  })\r\n  return bigArr\r\n}\n\n//# sourceURL=webpack://xUtils/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/compact.js":
/*!******************************!*\
  !*** ./src/array/compact.js ***!
  \******************************/
/*! exports provided: compact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compact\", function() { return compact; });\n/* harmony import */ var _delcares_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delcares.js */ \"./src/array/delcares.js\");\n\r\nfunction compact (array) {\r\n  return Object(_delcares_js__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(array,item => item)\r\n}\n\n//# sourceURL=webpack://xUtils/./src/array/compact.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return concat; });\nfunction concat (array, ...values) {\r\n  const arr = [...array]\r\n  values.forEach(value => {\r\n    if (!Array.isArray(value)) {\r\n      arr.push(value)\r\n    }else{\r\n      arr.push(...value)\r\n    }\r\n  })\r\n\r\n  return arr\r\n}\n\n//# sourceURL=webpack://xUtils/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/delcares.js":
/*!*******************************!*\
  !*** ./src/array/delcares.js ***!
  \*******************************/
/*! exports provided: map, reduce, filter, find, findIndex, every, some */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return reduce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return findIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return every; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return some; });\nfunction map (array,callback) {\r\n  console.log('map--');\r\n  const arr = []\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element,index)\r\n    arr.push(result)\r\n  }\r\n  return arr\r\n}\r\n\r\nfunction reduce (array,callback,initValue) {\r\n  let total = initValue\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    total = callback(total,element,index)\r\n  }\r\n  return total\r\n}\r\n\r\nfunction filter (array,callback) {\r\n  let arr = []\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element,index)\r\n    if (result) {\r\n      arr.push(element)\r\n    }\r\n  }\r\n  return arr\r\n}\r\n\r\nfunction find (array,callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element,index)\r\n    if (result) {\r\n      return element\r\n    }\r\n  }\r\n  return undefined\r\n}\r\n\r\nfunction findIndex (array,callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element,index)\r\n    if (result) {\r\n      return index\r\n    }\r\n  }\r\n  return -1\r\n}\r\n\r\nfunction every (array,callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element,index)\r\n    if (!result) {\r\n      return false\r\n    }\r\n  }\r\n  return true\r\n}\r\n\r\nfunction some (array,callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element,index)\r\n    if (result) {\r\n      return true\r\n    }\r\n  }\r\n  return false\r\n}\n\n//# sourceURL=webpack://xUtils/./src/array/delcares.js?");

/***/ }),

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/*! exports provided: difference, differences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return difference; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"differences\", function() { return differences; });\n/* harmony import */ var _delcares_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delcares.js */ \"./src/array/delcares.js\");\n/* 1. difference(arr1, arr2): 得到当前数组中所有不在arr中的元素组成的数组(不改变原数组)\r\n如: difference([1,3,5,7], [5, 8])  ==> [1, 3, 7] */\r\n\r\n\r\nfunction difference (arr1,arr2){\r\n  if(arr1.length === 0){\r\n    return []\r\n  }else if(arr2.length === 0){\r\n    return [...arr1]\r\n  }\r\n  return Object(_delcares_js__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(arr1,item => arr2.indexOf(item) === -1)\r\n}\r\n\r\nfunction differences (arr1,...arr2){\r\n  if(arr1.length === 0){\r\n    return []\r\n  }else if(arr2.length === 0){\r\n    return [...arr1]\r\n  }\r\n  return Object(_delcares_js__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(arr1,item => {\r\n    arr2.forEach(arr => {\r\n      arr.indexOf(item) === -1\r\n    })\r\n  })\r\n}\n\n//# sourceURL=webpack://xUtils/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drap.js":
/*!***************************!*\
  !*** ./src/array/drap.js ***!
  \***************************/
/*! exports provided: drop, dropRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return dropRight; });\n/* \r\n1. drop(array, count): \r\n    得到数组过滤掉左边count个后剩余元素组成的数组\r\n    说明: 不改变当前数组, count默认是1\r\n    如: drop([1,3,5,7], 2) ===> [5, 7]\r\n2. dropRight(array, count): \r\n    得到数组过滤掉右边count个后剩余元素组成的数组\r\n    说明: 不改变数组, count默认是1\r\n    如: dropRight([1,3,5,7], 2) ===> [1, 3]   \r\n*/\r\nfunction drop(array,count=1){\r\n  \r\n  if(array.length === 0){\r\n     return []\r\n  }\r\n  if(count < 1){\r\n    count = 1\r\n  }\r\n  return array.filter((item,index)=> index >= count)\r\n}\r\n\r\nfunction dropRight (array,count=1){\r\n \r\n if(array.length === 0){\r\n    return []\r\n }\r\n if(count < 1){\r\n    count = 1\r\n  }\r\n  return array.filter((item,index) => index < array.length - count)\r\n}\n\n//# sourceURL=webpack://xUtils/./src/array/drap.js?");

/***/ }),

/***/ "./src/array/flatten.js":
/*!******************************!*\
  !*** ./src/array/flatten.js ***!
  \******************************/
/*! exports provided: flatten1, flatten2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return flatten1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return flatten2; });\n/* harmony import */ var _delcares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delcares */ \"./src/array/delcares.js\");\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat */ \"./src/array/concat.js\");\n\r\n\r\nfunction flatten1(array) {\r\n  return Object(_delcares__WEBPACK_IMPORTED_MODULE_0__[\"reduce\"])(array,(pre,item) => {\r\n    if (!Array.isArray(item)) {\r\n      pre.push(item)\r\n    }else{\r\n      pre = Object(_concat__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(pre,flatten1(item))\r\n    }\r\n    return pre\r\n  },[])\r\n}\r\n\r\nfunction flatten2(array) {\r\n  let arr = Object(_concat__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])([],...array)\r\n  while (Object(_delcares__WEBPACK_IMPORTED_MODULE_0__[\"some\"])(arr,item => Array.isArray(item))) {\r\n    arr = Object(_concat__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])([],...arr)\r\n  }\r\n  return arr\r\n}\n\n//# sourceURL=webpack://xUtils/./src/array/flatten.js?");

/***/ }),

/***/ "./src/array/merge.js":
/*!****************************!*\
  !*** ./src/array/merge.js ***!
  \****************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"merge\", function() { return merge; });\n// 2. merge(arr1, arr2): 将arr2与arr1的元素进行合并组成一个新的数组(不改变原数组)\r\n// 如: merge([1,3,5,7,5], [1, 5, 8]) ==> [1, 3, 5, 7, 5, 8]\r\n\r\nfunction merge (arr1,arr2){\r\n  const result = [...arr1]\r\n  arr2.forEach(item => {\r\n    if(arr1.indexOf(item) === -1){\r\n      result.push(item)\r\n    }\r\n  })\r\n  return result\r\n}\n\n//# sourceURL=webpack://xUtils/./src/array/merge.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*\
  !*** ./src/array/pull.js ***!
  \***************************/
/*! exports provided: pull, pullAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return pull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pullAll\", function() { return pullAll; });\n/* \r\n1. pull(array, ...values): \r\n        删除数组中与value相同的元素, 返回所有删除元素的数组\r\n        说明: 数组发生了改变\r\n        如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 数组变为[1, 5], 返回值为[3,3,7]\r\n2. pullAll(array, values): \r\n    功能与pull一致, 只是参数变为数组\r\n    如: pullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组变为[1, 5], 返回值为[3,3,7]\r\n*/\r\n\r\nfunction pull (array, ...values){\r\n  const result = []\r\n  for(let index = 0;index < array.length ;index++){\r\n    const item = array[index]\r\n    if(values.indexOf(item) !== -1){\r\n    array.splice(index,1)\r\n    result.push(item)\r\n    index--\r\n    }\r\n  }\r\n  return result\r\n}\r\n\r\n\r\nfunction pullAll (array, values){\r\n  return pull(array, ...values)\r\n}\n\n//# sourceURL=webpack://xUtils/./src/array/pull.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return slice; });\nfunction slice(array, begin, end) {\r\n  const arr = []\r\n  if (array.length === 0) {\r\n    return arr\r\n  }\r\n  begin = begin || 0\r\n  end = end || array.length\r\n  if (end > array.length) {\r\n    end = array.length\r\n  }\r\n  for (let index = begin; index < end; index++) {\r\n    arr.push(array[index])\r\n  }\r\n  return arr\r\n}\n\n//# sourceURL=webpack://xUtils/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/*! exports provided: unique1, unique2, unique3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return unique1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return unique2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return unique3; });\n/* 方法1: 利用forEach()和indexOf()\r\n               说明: 本质是双重遍历, 效率差些\r\n方法2: 利用forEach() + 对象容器\r\n        说明: 只需一重遍历, 效率高些\r\n方法3: 利用ES6语法: from + Set 或者 ... + Set\r\n        说明: 编码简洁 */\r\nfunction unique1(array) {\r\n  const arr = []\r\n  array.forEach(item => {\r\n    if (arr.indexOf(item) === -1) {\r\n      arr.push(item)\r\n    }\r\n  })\r\n  return arr\r\n}\r\n\r\nfunction unique2 (array) {\r\n  const arr = []\r\n  const container = {}\r\n  array.forEach(item => {\r\n    if (!container.hasOwnProperty(item)) {\r\n      arr.push(item)\r\n      container[item] = true\r\n    }\r\n  })\r\n  return arr\r\n}\r\n\r\nfunction unique3 (array) {\r\n  // return Array.from(new Set(array))\r\n  return [...new Set(array)]\r\n}\n\n//# sourceURL=webpack://xUtils/./src/array/unique.js?");

/***/ }),

/***/ "./src/da/queue.js":
/*!*************************!*\
  !*** ./src/da/queue.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* \r\n自定义队列类型\r\n使用数组封装\r\n    入队列: enqueue()\r\n    出队列: dequeue()\r\n    查看队头: front()\r\n    查看元素的个数: size()\r\n    判断队列是否为空: isEmpty()\r\n*/\r\n\r\nfunction Queue(){\r\n  const arr = []\r\n  this.enqueue = function (element){\r\n    arr.push(element)\r\n  }\r\n  this.dequeue = function (){\r\n    return arr.shift()\r\n  }\r\n  this.front = function (){\r\n    return arr[0]\r\n  }\r\n  this.size= function (){\r\n    return arr.length\r\n  }\r\n  this.isEmpty = function (){\r\n    return arr.length === 0\r\n  }\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Queue);\n\n//# sourceURL=webpack://xUtils/./src/da/queue.js?");

/***/ }),

/***/ "./src/da/stack.js":
/*!*************************!*\
  !*** ./src/da/stack.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Stack(){\r\n  const arr = []\r\n  this.push = function (element){\r\n    arr.push(element)\r\n  }\r\n  this.pop = function (){\r\n    return arr.pop()\r\n  }\r\n  this.peek = function (){\r\n    return arr[arr.length-1]\r\n  }\r\n  this.size= function (){\r\n    return arr.length\r\n  }\r\n  this.isEmpty = function (){\r\n    return arr.length === 0\r\n  }\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stack);\n\n//# sourceURL=webpack://xUtils/./src/da/stack.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/*! exports provided: apply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return apply; });\nfunction apply (fn,obj,args) {\r\n  if (obj === undefined || obj === null) {\r\n    obj = window\r\n  }\r\n  obj.tempFn = fn\r\n  const result = obj.tempFn(...args)\r\n  delete obj.tempFn\r\n  return result\r\n}\n\n//# sourceURL=webpack://xUtils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/*! exports provided: bind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return bind; });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\nfunction bind (fn,obj,...args) {\r\n  // 返回一个新数组\r\n  return (...args2) => {\r\n    //调用原来的数组,指定this为obj,参数列表由args和args2组成\r\n    return Object(_call__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fn,obj, ...args, ...args2)\r\n  }\r\n}\n\n//# sourceURL=webpack://xUtils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return call; });\nfunction call (fn,obj,...args) {\r\n  if (obj === undefined || obj === null) {\r\n    obj = window\r\n  }\r\n  obj.tempFn = fn\r\n  const result = obj.tempFn(...args)\r\n  delete obj.tempFn\r\n  return result\r\n}\n\n//# sourceURL=webpack://xUtils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\nfunction debounce(callback,delay) {\r\n  return function (event) {\r\n    if (callback.hasOwnProperty('timeId')) {\r\n      clearTimeout(callback.timeId)\r\n    }\r\n    callback.timeId = setTimeout(() => {\r\n      callback.call(this,event)\r\n    }, delay)\r\n  }\r\n}\n\n//# sourceURL=webpack://xUtils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/*! exports provided: throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\nfunction throttle (callback,delay) {\r\n  let pre = 0\r\n  return function (event) {\r\n    const current = Date.now()\r\n    if (current - pre > delay) {\r\n      callback.call(this.event)\r\n      pre = current\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://xUtils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: call, apply, bind, throttle, debounce, map, reduce, filter, find, findIndex, every, some, unique1, unique2, unique3, concat, slice, flatten1, flatten2, compact, chunk, difference, differences, merge, pull, pullAll, drop, dropRight, newInstance, myInstanceOf, mergeObject, clone1, clone2, deepClone1, deepClone2, deepClone3, deepClone4, reverseString, palindrome, truncate, Stack, Queue, bubbleSort, selectSort, insertSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _function_call__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return _function_apply__WEBPACK_IMPORTED_MODULE_1__[\"apply\"]; });\n\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return _function_bind__WEBPACK_IMPORTED_MODULE_2__[\"bind\"]; });\n\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _function_throttle__WEBPACK_IMPORTED_MODULE_3__[\"throttle\"]; });\n\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _function_debounce__WEBPACK_IMPORTED_MODULE_4__[\"debounce\"]; });\n\n/* harmony import */ var _array_delcares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/delcares */ \"./src/array/delcares.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _array_delcares__WEBPACK_IMPORTED_MODULE_5__[\"map\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _array_delcares__WEBPACK_IMPORTED_MODULE_5__[\"reduce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _array_delcares__WEBPACK_IMPORTED_MODULE_5__[\"filter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _array_delcares__WEBPACK_IMPORTED_MODULE_5__[\"find\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _array_delcares__WEBPACK_IMPORTED_MODULE_5__[\"findIndex\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _array_delcares__WEBPACK_IMPORTED_MODULE_5__[\"every\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _array_delcares__WEBPACK_IMPORTED_MODULE_5__[\"some\"]; });\n\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique3\"]; });\n\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _array_concat__WEBPACK_IMPORTED_MODULE_7__[\"concat\"]; });\n\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return _array_slice__WEBPACK_IMPORTED_MODULE_8__[\"slice\"]; });\n\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten2\"]; });\n\n/* harmony import */ var _array_compact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/compact */ \"./src/array/compact.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compact\", function() { return _array_compact__WEBPACK_IMPORTED_MODULE_10__[\"compact\"]; });\n\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return _array_chunk__WEBPACK_IMPORTED_MODULE_11__[\"chunk\"]; });\n\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return _array_difference__WEBPACK_IMPORTED_MODULE_12__[\"difference\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"differences\", function() { return _array_difference__WEBPACK_IMPORTED_MODULE_12__[\"differences\"]; });\n\n/* harmony import */ var _array_merge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/merge */ \"./src/array/merge.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"merge\", function() { return _array_merge__WEBPACK_IMPORTED_MODULE_13__[\"merge\"]; });\n\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return _array_pull__WEBPACK_IMPORTED_MODULE_14__[\"pull\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pullAll\", function() { return _array_pull__WEBPACK_IMPORTED_MODULE_14__[\"pullAll\"]; });\n\n/* harmony import */ var _array_drap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./array/drap */ \"./src/array/drap.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return _array_drap__WEBPACK_IMPORTED_MODULE_15__[\"drop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return _array_drap__WEBPACK_IMPORTED_MODULE_15__[\"dropRight\"]; });\n\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return _object_newInstance__WEBPACK_IMPORTED_MODULE_16__[\"newInstance\"]; });\n\n/* harmony import */ var _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/myInstanceOf */ \"./src/object/myInstanceOf.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"myInstanceOf\", function() { return _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_17__[\"myInstanceOf\"]; });\n\n/* harmony import */ var _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./object/mergeObject */ \"./src/object/mergeObject.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__[\"mergeObject\"]; });\n\n/* harmony import */ var _object_clone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./object/clone */ \"./src/object/clone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clone1\", function() { return _object_clone__WEBPACK_IMPORTED_MODULE_19__[\"clone1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clone2\", function() { return _object_clone__WEBPACK_IMPORTED_MODULE_19__[\"clone2\"]; });\n\n/* harmony import */ var _object_deepClone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./object/deepClone */ \"./src/object/deepClone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone1\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone2\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone3\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone3\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone4\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone4\"]; });\n\n/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./string */ \"./src/string/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reverseString\", function() { return _string__WEBPACK_IMPORTED_MODULE_21__[\"reverseString\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"palindrome\", function() { return _string__WEBPACK_IMPORTED_MODULE_21__[\"palindrome\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"truncate\", function() { return _string__WEBPACK_IMPORTED_MODULE_21__[\"truncate\"]; });\n\n/* harmony import */ var _da_stack__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./da/stack */ \"./src/da/stack.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Stack\", function() { return _da_stack__WEBPACK_IMPORTED_MODULE_22__[\"default\"]; });\n\n/* harmony import */ var _da_queue__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./da/queue */ \"./src/da/queue.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Queue\", function() { return _da_queue__WEBPACK_IMPORTED_MODULE_23__[\"default\"]; });\n\n/* harmony import */ var _sort_bubbleSort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sort/bubbleSort */ \"./src/sort/bubbleSort.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bubbleSort\", function() { return _sort_bubbleSort__WEBPACK_IMPORTED_MODULE_24__[\"bubbleSort\"]; });\n\n/* harmony import */ var _sort_selectSort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sort/selectSort */ \"./src/sort/selectSort.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"selectSort\", function() { return _sort_selectSort__WEBPACK_IMPORTED_MODULE_25__[\"selectSort\"]; });\n\n/* harmony import */ var _sort_insertSort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./sort/insertSort */ \"./src/sort/insertSort.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"insertSort\", function() { return _sort_insertSort__WEBPACK_IMPORTED_MODULE_26__[\"insertSort\"]; });\n\n// 入口文件,向外暴露工具函数\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://xUtils/./src/main.js?");

/***/ }),

/***/ "./src/object/clone.js":
/*!*****************************!*\
  !*** ./src/object/clone.js ***!
  \*****************************/
/*! exports provided: clone1, clone2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone1\", function() { return clone1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone2\", function() { return clone2; });\n/* \r\n实现浅拷贝\r\n        方法一: 利用ES6语法\r\n        方法二: 利用ES5语法: for...in\r\n*/\r\n\r\n\r\nfunction clone1 (target){\r\n  if(target instanceof Array){\r\n    // return [...target]\r\n    // return target.splice()\r\n    // return [].concat(target)\r\n    // return Array.from(target)\r\n    // return target.filter(item => true)\r\n    // return target.map(item => item)\r\n    return target.reduce((pre,item) => {\r\n      pre.push(item)\r\n      return pre\r\n    },[])\r\n  }else if(target !== null && typeof target === 'object'){\r\n    return {...target}\r\n  }else{\r\n    return target\r\n  }\r\n}\r\n\r\nfunction clone2 (target) {\r\n  if(target instanceof Array || (target !== null && typeof target === 'object')){\r\n    const cloneTarget = target instanceof Array ? [] : {}\r\n    for(const key in target){\r\n      if(target.hasOwnProperty(key)){\r\n        cloneTarget[key] = target[key]\r\n      }\r\n    }\r\n    return cloneTarget\r\n  }else{\r\n    return target\r\n  }\r\n}\n\n//# sourceURL=webpack://xUtils/./src/object/clone.js?");

/***/ }),

/***/ "./src/object/deepClone.js":
/*!*********************************!*\
  !*** ./src/object/deepClone.js ***!
  \*********************************/
/*! exports provided: deepClone1, deepClone2, deepClone3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone1\", function() { return deepClone1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone2\", function() { return deepClone2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone3\", function() { return deepClone3; });\nfunction deepClone1 (target){\r\n  return JSON.parse(JSON.stringify(target))\r\n}\r\n\r\nfunction deepClone2 (target) {\r\n  if (target instanceof Array || (target!==null && typeof target==='object')) {\r\n    const cloneTarget = target instanceof Array ? [] : {}\r\n    for (const key in target) {\r\n      if (target.hasOwnProperty(key)) {\r\n        cloneTarget[key] = deepClone2(target[key])  // 对属性值进行递归处理\r\n      }\r\n    }\r\n    return cloneTarget\r\n  } else {\r\n    return target\r\n  }\r\n}\r\n\r\nfunction deepClone3 (target, map = new Map()) {\r\n  if (target instanceof Array || (target!==null && typeof target==='object')) {\r\n    let cloneTarget = map.get(target)\r\n    if(cloneTarget){\r\n      return cloneTarget\r\n    }\r\n    cloneTarget = target instanceof Array ? [] : {}\r\n    map.set(target, cloneTarget)\r\n    for (const key in target) {\r\n      if (target.hasOwnProperty(key)) {\r\n        cloneTarget[key] = deepClone3(target[key])  // 对属性值进行递归处理\r\n      }\r\n    }\r\n    return cloneTarget\r\n  } else {\r\n    return target\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://xUtils/./src/object/deepClone.js?");

/***/ }),

/***/ "./src/object/mergeObject.js":
/*!***********************************!*\
  !*** ./src/object/mergeObject.js ***!
  \***********************************/
/*! exports provided: mergeObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return mergeObject; });\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/concat */ \"./src/array/concat.js\");\n/* \r\n  语法: object mergeObject(...objs)\r\n    功能: 合并多个对象, 返回一个合并后对象(不改变原对象)\r\n    合并前:\r\n        { a: [{ x: 2 }, { y: 4 }], b: 1}\r\n        { a: { z: 3}, b: [2, 3], c: 'foo'}\r\n    合并后: \r\n        { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }\r\n*/\r\n\r\nfunction mergeObject(...objs){\r\n  const result = {}\r\n  objs.forEach(obj => {\r\n    Object.keys(obj).forEach(key => {\r\n      const value = obj[key]\r\n      if(!result.hasOwnProperty(key)){\r\n        result[key] = value\r\n      }else{\r\n        result[key] = Object(_array_concat__WEBPACK_IMPORTED_MODULE_0__[\"concat\"])([],result[key],value)\r\n      }\r\n    })\r\n  })\r\n  return result\r\n}\r\n\n\n//# sourceURL=webpack://xUtils/./src/object/mergeObject.js?");

/***/ }),

/***/ "./src/object/myInstanceOf.js":
/*!************************************!*\
  !*** ./src/object/myInstanceOf.js ***!
  \************************************/
/*! exports provided: myInstanceOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myInstanceOf\", function() { return myInstanceOf; });\n/* 2. 自定义instanceof工具函数\r\n  语法: myInstanceOf(obj, Type)\r\n  功能: 判断obj是否是Type类型的实例\r\n  实现: Type的原型对象是否是obj的原型链上的某个对象, 如果是返回tru, 否则返回false\r\n*/\r\n\r\nfunction myInstanceOf (obj, Type){\r\n  let protoObj = obj.__proto__\r\n  while(protoObj !== null){\r\n    if(protoObj === Type.prototype){\r\n      return true\r\n    }\r\n    protoObj = protoObj.__proto__\r\n  }\r\n  return false\r\n}\n\n//# sourceURL=webpack://xUtils/./src/object/myInstanceOf.js?");

/***/ }),

/***/ "./src/object/newInstance.js":
/*!***********************************!*\
  !*** ./src/object/newInstance.js ***!
  \***********************************/
/*! exports provided: newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return newInstance; });\n/* \r\n 1. 自定义new工具函数\r\n  语法: newInstance(Fn, ...args)\r\n  功能: 创建Fn构造函数的实例对象\r\n  实现: 创建空对象obj, 调用Fn指定this为obj, 返回obj\r\n*/\r\n\r\nfunction newInstance (Fn, ...args){\r\n  //创建空对象\r\n  const obj = {}\r\n  //调用Fn指定this为obj\r\n  const result = Fn.call(obj, ...args)\r\n  if(result instanceof Object) {\r\n    return result\r\n  }\r\n  obj.__proto__ = Fn.prototype\r\n  //返回obj\r\n  return obj\r\n}\n\n//# sourceURL=webpack://xUtils/./src/object/newInstance.js?");

/***/ }),

/***/ "./src/sort/bubbleSort.js":
/*!********************************!*\
  !*** ./src/sort/bubbleSort.js ***!
  \********************************/
/*! exports provided: bubbleSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubbleSort\", function() { return bubbleSort; });\nfunction bubbleSort(arr){\r\n  for(let i = 0; i < arr.length - 1; i++){\r\n    for(let j = 0; j < arr.length -1-i ;j++){\r\n      if(arr[j] > arr[j + 1]){\r\n        let temp = arr[j]\r\n        arr[j] = arr[j+1]\r\n        arr[j+1] = temp\r\n      }\r\n    }\r\n  }\r\n  return arr\r\n}\n\n//# sourceURL=webpack://xUtils/./src/sort/bubbleSort.js?");

/***/ }),

/***/ "./src/sort/insertSort.js":
/*!********************************!*\
  !*** ./src/sort/insertSort.js ***!
  \********************************/
/*! exports provided: insertSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertSort\", function() { return insertSort; });\nfunction insertSort (arr){\r\n  const len = arr.length\r\n  for(let i = 0;i<len ;i++){\r\n    let start = arr[i]\r\n    for(let j = i-1; j>=0; j--){\r\n      if(arr[j]>start){\r\n        arr[j+1] = arr[j]\r\n      }else{\r\n        arr[j+1] = start\r\n        break\r\n      }\r\n    }\r\n  }\r\n  return arr \r\n}\n\n//# sourceURL=webpack://xUtils/./src/sort/insertSort.js?");

/***/ }),

/***/ "./src/sort/selectSort.js":
/*!********************************!*\
  !*** ./src/sort/selectSort.js ***!
  \********************************/
/*! exports provided: selectSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectSort\", function() { return selectSort; });\nfunction selectSort (arr){\r\n  const len = arr.length\r\n  for(let i = 0;i < len -1;i++){\r\n    let minIndex = i\r\n    for(let j = i+1;j < len;j++){\r\n      if(arr[minIndex] > arr[j]){\r\n        minIndex = j\r\n      }\r\n    }\r\n    if(minIndex !== i){\r\n      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]\r\n    }\r\n  }\r\n  return arr\r\n}\n\n//# sourceURL=webpack://xUtils/./src/sort/selectSort.js?");

/***/ }),

/***/ "./src/string/index.js":
/*!*****************************!*\
  !*** ./src/string/index.js ***!
  \*****************************/
/*! exports provided: reverseString, palindrome, truncate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reverseString\", function() { return reverseString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"palindrome\", function() { return palindrome; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"truncate\", function() { return truncate; });\n/* \r\n1. 字符串倒序: reverseString(str)  生成一个倒序的字符串\r\n2. 字符串是否是回文: palindrome(str) 如果给定的字符串是回文，则返回 true ；否则返回 false\r\n3. 截取字符串: truncate(str, num) 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束\r\n*/\r\n\r\n\r\nfunction reverseString(str){\r\n  return str.split('').reverse().join('')\r\n}\r\n\r\nfunction palindrome(str){\r\n  return str === reverseString(str)\r\n}\r\n\r\nfunction truncate(str, num){\r\n  return str.length > num ? str.substring(0,num) + '...' : str\r\n}\n\n//# sourceURL=webpack://xUtils/./src/string/index.js?");

/***/ })

/******/ });
});