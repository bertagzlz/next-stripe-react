module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/products/[productId].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./hooks/use-cart.js":
/*!***************************!*\
  !*** ./hooks/use-cart.js ***!
  \***************************/
/*! exports provided: CartContext, useCartState, useCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartContext", function() { return CartContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCartState", function() { return useCartState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCart", function() { return useCart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_payments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/payments.js */ "./lib/payments.js");
/* harmony import */ var _lib_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/storage.js */ "./lib/storage.js");
/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products.json */ "./products.json");
var _products_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../products.json */ "./products.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const CART_STATE_KEY = 'cart';
const defaultCart = {
  products: {}
};
const CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
function useCartState() {
  const {
    0: cart,
    1: updateCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultCart); // Runs ONCE after initial rendering

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const data = Object(_lib_storage_js__WEBPACK_IMPORTED_MODULE_2__["getStorageItem"])(CART_STATE_KEY);

    if (data) {
      updateCart(data);
    }
  }, []); // Runs ONCE after initial rendering
  // and after every rendering ONLY IF [cart] changes

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_lib_storage_js__WEBPACK_IMPORTED_MODULE_2__["setStorageItem"])(CART_STATE_KEY, cart);
  }, [cart]);
  const cartItems = Object.keys(cart.products).map(key => {
    const product = _products_json__WEBPACK_IMPORTED_MODULE_3__.find(({
      id
    }) => `${id}` === `${key}`);
    return _objectSpread(_objectSpread({}, cart.products[key]), {}, {
      pricePerUnit: product.price
    });
  });
  const subtotal = cartItems.reduce((accumulator, {
    pricePerUnit,
    quantity
  }) => {
    return accumulator + pricePerUnit * quantity;
  }, 0);
  const quantity = cartItems.reduce((accumulator, {
    quantity
  }) => {
    return accumulator + quantity;
  }, 0);

  function addToCart({
    id
  }) {
    updateCart(prev => {
      let cart = _objectSpread({}, prev);

      if (cart.products[id]) {
        cart.products[id].quantity = cart.products[id].quantity + 1;
      } else {
        cart.products[id] = {
          id,
          quantity: 1
        };
      }

      return cart;
    });
  }

  function checkout() {
    Object(_lib_payments_js__WEBPACK_IMPORTED_MODULE_1__["initiateCheckout"])({
      lineItems: cartItems.map(({
        id,
        quantity
      }) => {
        return {
          price: id,
          quantity
        };
      })
    });
  }
  /**
   * @lesson-15-solution Exercise 3
   * We can create a new function that when triggered
   * with an ID and quantity, finds that product in
   * our active cart state, and updates the quantity.
   * We can finally pass that function in the return
   * statement to make it available globally.
   */


  function updateItem({
    id,
    quantity
  }) {
    updateCart(prev => {
      let cart = _objectSpread({}, prev);

      if (cart.products[id]) {
        cart.products[id].quantity = quantity;
      } else {
        cart.products[id] = {
          id,
          quantity: 1
        };
      }

      return cart;
    });
  }

  return {
    cart,
    cartItems,
    subtotal,
    quantity,
    addToCart,
    checkout,
    updateItem
  };
}
function useCart() {
  const cart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(CartContext);
  return cart;
}

/***/ }),

/***/ "./lib/payments.js":
/*!*************************!*\
  !*** ./lib/payments.js ***!
  \*************************/
/*! exports provided: initiateCheckout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initiateCheckout", function() { return initiateCheckout; });
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);

const stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__["loadStripe"])("pk_test_LtebB582NS83XkmTeG38Tysy");
async function initiateCheckout({
  lineItems
} = {}) {
  const stripe = await stripePromise;
  await stripe.redirectToCheckout({
    mode: 'payment',
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin
  });
}

/***/ }),

/***/ "./lib/storage.js":
/*!************************!*\
  !*** ./lib/storage.js ***!
  \************************/
/*! exports provided: getStorageItem, setStorageItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageItem", function() { return getStorageItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStorageItem", function() { return setStorageItem; });
const APP_KEY = 'SPACEJELLY';
/**
 * getStorageItem
 */

function getStorageItem(key) {
  if (true) return;
  let data = window.localStorage.getItem(`${APP_KEY}_${key}`);

  try {
    return JSON.parse(data);
  } catch (e) {
    throw new Error(`Failed to parse data from ${APP_KEY}_${key}`);
  }
}
/**
 * setStorageItem
 */

function setStorageItem(key, value) {
  if (true) return;
  const data = JSON.stringify(value);
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data);
}

/***/ }),

/***/ "./pages/products/[productId].js":
/*!***************************************!*\
  !*** ./pages/products/[productId].js ***!
  \***************************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Product.module.css */ "./styles/Product.module.css");
/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_cart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-cart.js */ "./hooks/use-cart.js");
/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../products.json */ "./products.json");
var _products_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../products.json */ "./products.json", 1);

var _jsxFileName = "D:\\home\\javaprojects\\react\\next-stripe-react\\lessons\\15 - Add a Quantity Input to the Cart Page to Add or Remove Items from a Shopping Cart in Next.js\\pages\\products\\[productId].js";




function Product({
  product
}) {
  const {
    id,
    title,
    image,
    price,
    description
  } = product;
  const {
    addToCart
  } = Object(_hooks_use_cart_js__WEBPACK_IMPORTED_MODULE_3__["useCart"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [title, " - Space Jelly"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.productImage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: image,
          alt: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
          children: ["$", price.toFixed(2)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,
            onClick: () => addToCart({
              id
            }),
            children: "Buy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        children: ["Powered by", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/vercel.svg",
          alt: "Vercel Logo",
          className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
async function getStaticProps({
  params = {}
}) {
  const product = _products_json__WEBPACK_IMPORTED_MODULE_4__.find(({
    id
  }) => `${id}` === `${params.productId}`);
  return {
    props: {
      product
    }
  };
}
async function getStaticPaths() {
  const paths = _products_json__WEBPACK_IMPORTED_MODULE_4__.map(product => {
    const {
      id
    } = product;
    return {
      params: {
        productId: id
      }
    };
  });
  return {
    paths,
    fallback: false
  };
}

/***/ }),

/***/ "./products.json":
/*!***********************!*\
  !*** ./products.json ***!
  \***********************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"price_abcd0001\",\"title\":\"Space Jelly Tshirt\",\"description\":\"Bring Cosmo the space Jellyfish to your wardrobe with this high quality tshirt.\",\"image\":\"/images/spacejelly-tshirt.jpg\",\"price\":20},{\"id\":\"price_abcd0002\",\"title\":\"Space Jelly Stickers\",\"description\":\"Add some flare to your laptop with a sticker of Cosmo the Space Jellyfish.\",\"image\":\"/images/spacejelly-stickers.jpg\",\"price\":10},{\"id\":\"price_abcd0003\",\"title\":\"Space Jelly Combo\",\"description\":\"Show your love for Cosmo with a tshirt and sticker combo pack!\",\"image\":\"/images/spacejelly-combo.jpg\",\"price\":25}]");

/***/ }),

/***/ "./styles/Product.module.css":
/*!***********************************!*\
  !*** ./styles/Product.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Product_container__1_5DU",
	"main": "Product_main__2AJqi",
	"productImage": "Product_productImage__zCvtJ",
	"footer": "Product_footer__nJ0ub",
	"logo": "Product_logo__20jfq",
	"button": "Product_button__20HXd"
};


/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlLWNhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3BheW1lbnRzLmpzIiwid2VicGFjazovLy8uL2xpYi9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Byb2R1Y3RzL1twcm9kdWN0SWRdLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9Qcm9kdWN0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN0cmlwZS9zdHJpcGUtanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNBUlRfU1RBVEVfS0VZIiwiZGVmYXVsdENhcnQiLCJwcm9kdWN0cyIsIkNhcnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNhcnRTdGF0ZSIsImNhcnQiLCJ1cGRhdGVDYXJ0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkYXRhIiwiZ2V0U3RvcmFnZUl0ZW0iLCJzZXRTdG9yYWdlSXRlbSIsImNhcnRJdGVtcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJwcm9kdWN0IiwiZmluZCIsImlkIiwicHJpY2VQZXJVbml0IiwicHJpY2UiLCJzdWJ0b3RhbCIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwicXVhbnRpdHkiLCJhZGRUb0NhcnQiLCJwcmV2IiwiY2hlY2tvdXQiLCJpbml0aWF0ZUNoZWNrb3V0IiwibGluZUl0ZW1zIiwidXBkYXRlSXRlbSIsInVzZUNhcnQiLCJ1c2VDb250ZXh0Iiwic3RyaXBlUHJvbWlzZSIsImxvYWRTdHJpcGUiLCJwcm9jZXNzIiwic3RyaXBlIiwicmVkaXJlY3RUb0NoZWNrb3V0IiwibW9kZSIsInN1Y2Nlc3NVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImNhbmNlbFVybCIsIkFQUF9LRVkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZSIsIkVycm9yIiwidmFsdWUiLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwiUHJvZHVjdCIsInRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJwcm9kdWN0SW1hZ2UiLCJ0b0ZpeGVkIiwiYnV0dG9uIiwiZm9vdGVyIiwibG9nbyIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwicHJvZHVjdElkIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmFsbGJhY2siXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNB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cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wcm9kdWN0cy9bcHJvZHVjdElkXS5qc1wiKTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbml0aWF0ZUNoZWNrb3V0IH0gZnJvbSAnLi4vbGliL3BheW1lbnRzLmpzJ1xuaW1wb3J0IHsgZ2V0U3RvcmFnZUl0ZW0sIHNldFN0b3JhZ2VJdGVtIH0gZnJvbSAnLi4vbGliL3N0b3JhZ2UuanMnXG5pbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi4vcHJvZHVjdHMuanNvbic7XG5cbmNvbnN0IENBUlRfU1RBVEVfS0VZID0gJ2NhcnQnO1xuY29uc3QgZGVmYXVsdENhcnQgPSB7XG4gIHByb2R1Y3RzOiB7fVxufVxuZXhwb3J0IGNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FydFN0YXRlKCkge1xuICBjb25zdCBbY2FydCwgdXBkYXRlQ2FydF0gPSB1c2VTdGF0ZShkZWZhdWx0Q2FydCk7XG5cbiAgLy8gUnVucyBPTkNFIGFmdGVyIGluaXRpYWwgcmVuZGVyaW5nXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGdldFN0b3JhZ2VJdGVtKENBUlRfU1RBVEVfS0VZKTtcbiAgICBpZiAoIGRhdGEgKSB7XG4gICAgICB1cGRhdGVDYXJ0KGRhdGEpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIC8vIFJ1bnMgT05DRSBhZnRlciBpbml0aWFsIHJlbmRlcmluZ1xuICAvLyBhbmQgYWZ0ZXIgZXZlcnkgcmVuZGVyaW5nIE9OTFkgSUYgW2NhcnRdIGNoYW5nZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdG9yYWdlSXRlbShDQVJUX1NUQVRFX0tFWSwgY2FydCk7XG4gIH0sIFtjYXJ0XSk7XG5cbiAgY29uc3QgY2FydEl0ZW1zID0gT2JqZWN0LmtleXMoY2FydC5wcm9kdWN0cykubWFwKGtleSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzLmZpbmQoKHsgaWQgfSkgPT4gYCR7aWR9YCA9PT0gYCR7a2V5fWApO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jYXJ0LnByb2R1Y3RzW2tleV0sXG4gICAgICBwcmljZVBlclVuaXQ6IHByb2R1Y3QucHJpY2VcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHN1YnRvdGFsID0gY2FydEl0ZW1zLnJlZHVjZSgoYWNjdW11bGF0b3IsIHsgcHJpY2VQZXJVbml0LCBxdWFudGl0eSB9KSA9PiB7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgKCBwcmljZVBlclVuaXQgKiBxdWFudGl0eSApO1xuICB9LCAwKTtcblxuICBjb25zdCBxdWFudGl0eSA9IGNhcnRJdGVtcy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCB7IHF1YW50aXR5IH0pID0+IHtcbiAgICByZXR1cm4gYWNjdW11bGF0b3IgKyBxdWFudGl0eTtcbiAgfSwgMCk7XG5cbiAgZnVuY3Rpb24gYWRkVG9DYXJ0KHsgaWQgfSkge1xuICAgIHVwZGF0ZUNhcnQoKHByZXYpID0+IHtcbiAgICAgIGxldCBjYXJ0ID0gey4uLnByZXZ9O1xuXG4gICAgICBpZiAoIGNhcnQucHJvZHVjdHNbaWRdICkge1xuICAgICAgICBjYXJ0LnByb2R1Y3RzW2lkXS5xdWFudGl0eSA9IGNhcnQucHJvZHVjdHNbaWRdLnF1YW50aXR5ICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcnQucHJvZHVjdHNbaWRdID0ge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHF1YW50aXR5OiAxXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhcnQ7XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrb3V0KCkge1xuICAgIGluaXRpYXRlQ2hlY2tvdXQoe1xuICAgICAgbGluZUl0ZW1zOiBjYXJ0SXRlbXMubWFwKCh7IGlkLCBxdWFudGl0eSB9KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJpY2U6IGlkLFxuICAgICAgICAgIHF1YW50aXR5XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAbGVzc29uLTE1LXNvbHV0aW9uIEV4ZXJjaXNlIDNcbiAgICogV2UgY2FuIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiB0aGF0IHdoZW4gdHJpZ2dlcmVkXG4gICAqIHdpdGggYW4gSUQgYW5kIHF1YW50aXR5LCBmaW5kcyB0aGF0IHByb2R1Y3QgaW5cbiAgICogb3VyIGFjdGl2ZSBjYXJ0IHN0YXRlLCBhbmQgdXBkYXRlcyB0aGUgcXVhbnRpdHkuXG4gICAqIFdlIGNhbiBmaW5hbGx5IHBhc3MgdGhhdCBmdW5jdGlvbiBpbiB0aGUgcmV0dXJuXG4gICAqIHN0YXRlbWVudCB0byBtYWtlIGl0IGF2YWlsYWJsZSBnbG9iYWxseS5cbiAgICovXG5cbiAgZnVuY3Rpb24gdXBkYXRlSXRlbSh7IGlkLCBxdWFudGl0eSB9KSB7XG4gICAgdXBkYXRlQ2FydCgocHJldikgPT4ge1xuICAgICAgbGV0IGNhcnQgPSB7Li4ucHJldn07XG5cbiAgICAgIGlmICggY2FydC5wcm9kdWN0c1tpZF0gKSB7XG4gICAgICAgIGNhcnQucHJvZHVjdHNbaWRdLnF1YW50aXR5ID0gcXVhbnRpdHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYXJ0LnByb2R1Y3RzW2lkXSA9IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBxdWFudGl0eTogMVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYXJ0O1xuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjYXJ0LFxuICAgIGNhcnRJdGVtcyxcbiAgICBzdWJ0b3RhbCxcbiAgICBxdWFudGl0eSxcbiAgICBhZGRUb0NhcnQsXG4gICAgY2hlY2tvdXQsXG4gICAgdXBkYXRlSXRlbVxuICB9XG5cbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VDYXJ0KCkge1xuICBjb25zdCBjYXJ0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XG4gIHJldHVybiBjYXJ0O1xufSIsImltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcyc7XG5cbmNvbnN0IHN0cmlwZVByb21pc2UgPSBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSVNIQUJMRV9LRVkpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhdGVDaGVja291dCh7IGxpbmVJdGVtcyB9ID0ge30pIHtcbiAgY29uc3Qgc3RyaXBlID0gYXdhaXQgc3RyaXBlUHJvbWlzZTtcblxuICBhd2FpdCBzdHJpcGUucmVkaXJlY3RUb0NoZWNrb3V0KHtcbiAgICBtb2RlOiAncGF5bWVudCcsXG5cbiAgICBsaW5lSXRlbXMsXG4gICAgc3VjY2Vzc1VybDogYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0/c2Vzc2lvbl9pZD17Q0hFQ0tPVVRfU0VTU0lPTl9JRH1gLFxuICAgIGNhbmNlbFVybDogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgfSk7XG59IiwiY29uc3QgQVBQX0tFWSA9ICdTUEFDRUpFTExZJztcblxuLyoqXG4gKiBnZXRTdG9yYWdlSXRlbVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yYWdlSXRlbShrZXkpIHtcbiAgaWYgKCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyApIHJldHVybjtcblxuICBsZXQgZGF0YSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtBUFBfS0VZfV8ke2tleX1gKTtcblxuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICB9IGNhdGNoKGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBkYXRhIGZyb20gJHtBUFBfS0VZfV8ke2tleX1gKTtcbiAgfVxufVxuXG4vKipcbiAqIHNldFN0b3JhZ2VJdGVtXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0b3JhZ2VJdGVtKGtleSwgdmFsdWUpIHtcbiAgaWYgKCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyApIHJldHVybjtcbiAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtBUFBfS0VZfV8ke2tleX1gLCBkYXRhKTtcbn0iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Qcm9kdWN0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlLWNhcnQuanMnO1xuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4uLy4uL3Byb2R1Y3RzLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0KHsgcHJvZHVjdCB9KSB7XG5cbiAgY29uc3QgeyBpZCwgdGl0bGUsIGltYWdlLCBwcmljZSwgZGVzY3JpcHRpb24gfSA9IHByb2R1Y3Q7XG5cbiAgY29uc3QgeyBhZGRUb0NhcnQgfSA9IHVzZUNhcnQoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+eyB0aXRsZSB9IC0gU3BhY2UgSmVsbHk8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RJbWFnZX0+XG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIHsgdGl0bGUgfVxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICB7IGRlc2NyaXB0aW9uIH1cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAkeyBwcmljZS50b0ZpeGVkKDIpIH1cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBhZGRUb0NhcnQoeyBpZCB9KX0+XG4gICAgICAgICAgICAgIEJ1eVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5eycgJ31cbiAgICAgICAgICA8aW1nIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgPSB7fSB9KSB7XG4gIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0cy5maW5kKCh7IGlkIH0pID0+IGAke2lkfWAgPT09IGAke3BhcmFtcy5wcm9kdWN0SWR9YCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3RcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gcHJvZHVjdDtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHByb2R1Y3RJZDogaWQsXG4gICAgICB9LFxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlXG4gIH07XG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUHJvZHVjdF9jb250YWluZXJfXzFfNURVXCIsXG5cdFwibWFpblwiOiBcIlByb2R1Y3RfbWFpbl9fMkFKcWlcIixcblx0XCJwcm9kdWN0SW1hZ2VcIjogXCJQcm9kdWN0X3Byb2R1Y3RJbWFnZV9fekN2dEpcIixcblx0XCJmb290ZXJcIjogXCJQcm9kdWN0X2Zvb3Rlcl9fbkowdWJcIixcblx0XCJsb2dvXCI6IFwiUHJvZHVjdF9sb2dvX18yMGpmcVwiLFxuXHRcImJ1dHRvblwiOiBcIlByb2R1Y3RfYnV0dG9uX18yMEhYZFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0cmlwZS9zdHJpcGUtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9