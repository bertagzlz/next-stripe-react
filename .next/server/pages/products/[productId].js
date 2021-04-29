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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5Lgh");


/***/ }),

/***/ "5Lgh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("C+gL");
/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_cart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MzdG");
/* harmony import */ var _shared_products_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9exX");
var _shared_products_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t("9exX", 1);






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
  } = Object(_hooks_use_cart_js__WEBPACK_IMPORTED_MODULE_3__[/* useCart */ "b"])();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("title", {
        children: [title, " - Space Jelly"]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("main", {
      className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.productImage,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          src: image,
          alt: title
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
          children: title
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
          children: description
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
          className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
          children: ["$", price.toFixed(2)]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,
            onClick: () => addToCart({
              id
            }),
            children: "Buy"
          })
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("footer", {
      className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
        href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        children: ["Powered by", ' ', /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          src: "/vercel.svg",
          alt: "Vercel Logo",
          className: _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo
        })]
      })
    })]
  });
}
async function getStaticProps({
  params = {}
}) {
  const product = _shared_products_json__WEBPACK_IMPORTED_MODULE_4__.find(({
    id
  }) => `${id}` === `${params.productId}`);
  return {
    props: {
      product
    }
  };
}
async function getStaticPaths() {
  const paths = _shared_products_json__WEBPACK_IMPORTED_MODULE_4__.map(product => {
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

/***/ "9exX":
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"price_abcd0001\",\"title\":\"Space Jelly Tshirt\",\"description\":\"Bring Cosmo the space Jellyfish to your wardrobe with this high quality tshirt.\",\"image\":\"/images/spacejelly-tshirt.jpg\",\"price\":20},{\"id\":\"price_abcd0002\",\"title\":\"Space Jelly Stickers\",\"description\":\"Add some flare to your laptop with a sticker of Cosmo the Space Jellyfish.\",\"image\":\"/images/spacejelly-stickers.jpg\",\"price\":10},{\"id\":\"price_abcd0003\",\"title\":\"Space Jelly Combo\",\"description\":\"Show your love for Cosmo with a tshirt and sticker combo pack!\",\"image\":\"/images/spacejelly-combo.jpg\",\"price\":25}]");

/***/ }),

/***/ "C+gL":
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

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "MzdG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CartContext; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ useCartState; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useCart; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@stripe/stripe-js"
var stripe_js_ = __webpack_require__("RkzC");

// CONCATENATED MODULE: ./lib/payments.js

const stripePromise = Object(stripe_js_["loadStripe"])("pk_test_LtebB582NS83XkmTeG38Tysy");
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
// CONCATENATED MODULE: ./lib/storage.js
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
// EXTERNAL MODULE: ../shared/products.json
var products = __webpack_require__("9exX");

// CONCATENATED MODULE: ./hooks/use-cart.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const CART_STATE_KEY = 'cart';
const defaultCart = {
  products: {}
};
const CartContext = /*#__PURE__*/Object(external_react_["createContext"])();
function useCartState() {
  const {
    0: cart,
    1: updateCart
  } = Object(external_react_["useState"])(defaultCart); // Runs ONCE after initial rendering

  Object(external_react_["useEffect"])(() => {
    const data = getStorageItem(CART_STATE_KEY);

    if (data) {
      updateCart(data);
    }
  }, []); // Runs ONCE after initial rendering
  // and after every rendering ONLY IF [cart] changes

  Object(external_react_["useEffect"])(() => {
    setStorageItem(CART_STATE_KEY, cart);
  }, [cart]);
  const cartItems = Object.keys(cart.products).map(key => {
    const product = products.find(({
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
    initiateCheckout({
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
  const cart = Object(external_react_["useContext"])(CartContext);
  return cart;
}

/***/ }),

/***/ "RkzC":
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });