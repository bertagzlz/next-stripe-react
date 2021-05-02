module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/cart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Table/Table.js":
/*!***********************************!*\
  !*** ./components/Table/Table.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Table_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.module.css */ "./components/Table/Table.module.css");
/* harmony import */ var _Table_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Table_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\home\\javaprojects\\react\\next-stripe-react\\lessons\\15 - Add a Quantity Input to the Cart Page to Add or Remove Items from a Shopping Cart in Next.js\\components\\Table\\Table.js";


const Table = ({
  className,
  data,
  columns
}) => {
  let tableClassName = _Table_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.table;

  if (className) {
    tableClassName = `${tableClassName} ${className}`;
  }

  const rows = [...new Array(data.length)].map((item, index) => {
    return columns.map(({
      columnId
    }) => data[index][columnId]);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
    className: tableClassName,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
        children: columns.map(({
          columnId,
          Header
        }) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: Header
          }, columnId, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
      children: rows.map((row, index) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: row.map((cell, index) => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: cell
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 24
            }, undefined);
          })
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./components/Table/Table.module.css":
/*!*******************************************!*\
  !*** ./components/Table/Table.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"table": "Table_table__2zsdR"
};


/***/ }),

/***/ "./components/Table/index.js":
/*!***********************************!*\
  !*** ./components/Table/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table */ "./components/Table/Table.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Table__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

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

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Cart.module.css */ "./styles/Cart.module.css");
/* harmony import */ var _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_use_cart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-cart.js */ "./hooks/use-cart.js");
/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products.json */ "./products.json");
var _products_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../products.json */ "./products.json", 1);
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Table */ "./components/Table/index.js");

var _jsxFileName = "D:\\home\\javaprojects\\react\\next-stripe-react\\lessons\\15 - Add a Quantity Input to the Cart Page to Add or Remove Items from a Shopping Cart in Next.js\\pages\\cart.js";






const columns = [{
  columnId: 'title',
  Header: 'Product Name'
}, {
  columnId: 'quantity',
  Header: 'Quantity'
}, {
  columnId: 'pricePerUnit',
  Header: 'Price Per Item'
}, {
  columnId: 'total',
  Header: 'Item Total'
}];
function Home() {
  const {
    cartItems,
    checkout,
    updateItem
  } = Object(_hooks_use_cart_js__WEBPACK_IMPORTED_MODULE_4__["useCart"])();
  const data = cartItems.map(({
    id,
    quantity,
    pricePerUnit
  }) => {
    const product = _products_json__WEBPACK_IMPORTED_MODULE_5__.find(({
      id: pid
    }) => pid === id);
    const {
      title
    } = product || {};

    const Quantity = () => {
      /**
       * @lesson-15-solution Exercise 2
       * With our form, we can attach an onSubmit event
       * listener, and when someone submits that form,
       * we can use the event that's passed as an argument
       * to prevent the default behavior of the form.
       */
      function handleOnSubmit(e) {
        var _inputs$find;

        e.preventDefault();
        /**
         * @lesson-15-solution Exercise 4
         * We can extra the input elements from our form,
         * find the quantity input by its name, and use
         * its value to call the updateItem function that
         * we created and made available in our global state.
         */

        const {
          currentTarget
        } = e;
        const inputs = Array.from(currentTarget.elements);
        const quantity = (_inputs$find = inputs.find(input => input.name === 'quantity')) === null || _inputs$find === void 0 ? void 0 : _inputs$find.value;
        updateItem({
          id,
          quantity: quantity && parseInt(quantity)
        });
      }
      /**
       * @lesson-15-solution Exercise 1
       * We can use a number type input element as well
       * as a button element that lets us give our customers
       * a way to change the quantity.
       */


      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cartQuantity,
        onSubmit: handleOnSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          name: "quantity",
          type: "number",
          min: 0,
          defaultValue: quantity
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, this);
    };

    return {
      id,
      title,
      quantity: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Quantity, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this),
      pricePerUnit: pricePerUnit.toFixed(2),
      total: (quantity * pricePerUnit).toFixed(2)
    };
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Shopping Cart - Space Jelly"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaShoppingCart"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }, this), " Cart"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.table,
        data: data,
        columns: columns
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.checkout,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
          onClick: checkout,
          children: "Check Out"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        children: ["Powered by", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/vercel.svg",
          alt: "Vercel Logo",
          className: _styles_Cart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 7
  }, this);
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

/***/ "./styles/Cart.module.css":
/*!********************************!*\
  !*** ./styles/Cart.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Cart_container__2EqT4",
	"main": "Cart_main__36kVF",
	"title": "Cart_title__2FiOT",
	"checkout": "Cart_checkout__1-DP-",
	"table": "Cart_table__2KU9j",
	"footer": "Cart_footer__34_Wn",
	"description": "Cart_description__UPuwO",
	"code": "Cart_code__3Ol_B",
	"grid": "Cart_grid__3L1m0",
	"card": "Cart_card__3Fzde",
	"logo": "Cart_logo__2wLIm",
	"button": "Cart_button__1fEKW",
	"cart": "Cart_cart__2pudL",
	"cartButton": "Cart_cartButton__3zlh3",
	"cartQuantity": "Cart_cartQuantity__J-V6S"
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

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJsZS9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhYmxlL1RhYmxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2UtY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvcGF5bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvQ2FydC5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzdHJpcGUvc3RyaXBlLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlRhYmxlIiwiY2xhc3NOYW1lIiwiZGF0YSIsImNvbHVtbnMiLCJ0YWJsZUNsYXNzTmFtZSIsInN0eWxlcyIsInRhYmxlIiwicm93cyIsIkFycmF5IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiY29sdW1uSWQiLCJIZWFkZXIiLCJyb3ciLCJjZWxsIiwiQ0FSVF9TVEFURV9LRVkiLCJkZWZhdWx0Q2FydCIsInByb2R1Y3RzIiwiQ2FydENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2FydFN0YXRlIiwiY2FydCIsInVwZGF0ZUNhcnQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldFN0b3JhZ2VJdGVtIiwic2V0U3RvcmFnZUl0ZW0iLCJjYXJ0SXRlbXMiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwicHJvZHVjdCIsImZpbmQiLCJpZCIsInByaWNlUGVyVW5pdCIsInByaWNlIiwic3VidG90YWwiLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsInF1YW50aXR5IiwiYWRkVG9DYXJ0IiwicHJldiIsImNoZWNrb3V0IiwiaW5pdGlhdGVDaGVja291dCIsImxpbmVJdGVtcyIsInVwZGF0ZUl0ZW0iLCJ1c2VDYXJ0IiwidXNlQ29udGV4dCIsInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwicHJvY2VzcyIsInN0cmlwZSIsInJlZGlyZWN0VG9DaGVja291dCIsIm1vZGUiLCJzdWNjZXNzVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJjYW5jZWxVcmwiLCJBUFBfS0VZIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImUiLCJFcnJvciIsInZhbHVlIiwic3RyaW5naWZ5Iiwic2V0SXRlbSIsIkhvbWUiLCJwaWQiLCJ0aXRsZSIsIlF1YW50aXR5IiwiaGFuZGxlT25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJpbnB1dHMiLCJmcm9tIiwiZWxlbWVudHMiLCJpbnB1dCIsIm5hbWUiLCJwYXJzZUludCIsImNhcnRRdWFudGl0eSIsImJ1dHRvbiIsInRvRml4ZWQiLCJ0b3RhbCIsImNvbnRhaW5lciIsIm1haW4iLCJmb290ZXIiLCJsb2dvIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNB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Y0FBTSxFQUFDLFFBRlg7QUFHSSxXQUFHLEVBQUMscUJBSFI7QUFBQSxpQ0FLYSxHQUxiLGVBTUU7QUFBSyxhQUFHLEVBQUMsYUFBVDtBQUF1QixhQUFHLEVBQUMsYUFBM0I7QUFBeUMsbUJBQVMsRUFBRXJGLDhEQUFNLENBQUNzRjtBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlIRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pCQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9jYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9jYXJ0LmpzXCIpO1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RhYmxlLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBUYWJsZSA9ICh7IGNsYXNzTmFtZSwgZGF0YSwgY29sdW1ucyB9KSA9PiB7XG4gIGxldCB0YWJsZUNsYXNzTmFtZSA9IHN0eWxlcy50YWJsZTtcblxuICBpZiAoIGNsYXNzTmFtZSApIHtcbiAgICB0YWJsZUNsYXNzTmFtZSA9IGAke3RhYmxlQ2xhc3NOYW1lfSAke2NsYXNzTmFtZX1gXG4gIH1cblxuICBjb25zdCByb3dzID0gWy4uLm5ldyBBcnJheShkYXRhLmxlbmd0aCldLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gY29sdW1ucy5tYXAoKHsgY29sdW1uSWQgfSkgPT4gZGF0YVtpbmRleF1bY29sdW1uSWRdKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8dGFibGUgY2xhc3NOYW1lPXt0YWJsZUNsYXNzTmFtZX0+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICB7Y29sdW1ucy5tYXAoKHsgY29sdW1uSWQsIEhlYWRlciB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dGQga2V5PXtjb2x1bW5JZH0+eyBIZWFkZXIgfTwvdGQ+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgICB7cm93cy5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICB7IHJvdy5tYXAoKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBrZXk9e2luZGV4fT57IGNlbGwgfTwvdGQ+XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRhYmxlXCI6IFwiVGFibGVfdGFibGVfXzJ6c2RSXCJcbn07XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UYWJsZSc7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5pdGlhdGVDaGVja291dCB9IGZyb20gJy4uL2xpYi9wYXltZW50cy5qcydcbmltcG9ydCB7IGdldFN0b3JhZ2VJdGVtLCBzZXRTdG9yYWdlSXRlbSB9IGZyb20gJy4uL2xpYi9zdG9yYWdlLmpzJ1xuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4uL3Byb2R1Y3RzLmpzb24nO1xuXG5jb25zdCBDQVJUX1NUQVRFX0tFWSA9ICdjYXJ0JztcbmNvbnN0IGRlZmF1bHRDYXJ0ID0ge1xuICBwcm9kdWN0czoge31cbn1cbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhcnRTdGF0ZSgpIHtcbiAgY29uc3QgW2NhcnQsIHVwZGF0ZUNhcnRdID0gdXNlU3RhdGUoZGVmYXVsdENhcnQpO1xuXG4gIC8vIFJ1bnMgT05DRSBhZnRlciBpbml0aWFsIHJlbmRlcmluZ1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBnZXRTdG9yYWdlSXRlbShDQVJUX1NUQVRFX0tFWSk7XG4gICAgaWYgKCBkYXRhICkge1xuICAgICAgdXBkYXRlQ2FydChkYXRhKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyBSdW5zIE9OQ0UgYWZ0ZXIgaW5pdGlhbCByZW5kZXJpbmdcbiAgLy8gYW5kIGFmdGVyIGV2ZXJ5IHJlbmRlcmluZyBPTkxZIElGIFtjYXJ0XSBjaGFuZ2VzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RvcmFnZUl0ZW0oQ0FSVF9TVEFURV9LRVksIGNhcnQpO1xuICB9LCBbY2FydF0pO1xuXG4gIGNvbnN0IGNhcnRJdGVtcyA9IE9iamVjdC5rZXlzKGNhcnQucHJvZHVjdHMpLm1hcChrZXkgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0cy5maW5kKCh7IGlkIH0pID0+IGAke2lkfWAgPT09IGAke2tleX1gKTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY2FydC5wcm9kdWN0c1trZXldLFxuICAgICAgcHJpY2VQZXJVbml0OiBwcm9kdWN0LnByaWNlXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzdWJ0b3RhbCA9IGNhcnRJdGVtcy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCB7IHByaWNlUGVyVW5pdCwgcXVhbnRpdHkgfSkgPT4ge1xuICAgIHJldHVybiBhY2N1bXVsYXRvciArICggcHJpY2VQZXJVbml0ICogcXVhbnRpdHkgKTtcbiAgfSwgMCk7XG5cbiAgY29uc3QgcXVhbnRpdHkgPSBjYXJ0SXRlbXMucmVkdWNlKChhY2N1bXVsYXRvciwgeyBxdWFudGl0eSB9KSA9PiB7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgcXVhbnRpdHk7XG4gIH0sIDApO1xuXG4gIGZ1bmN0aW9uIGFkZFRvQ2FydCh7IGlkIH0pIHtcbiAgICB1cGRhdGVDYXJ0KChwcmV2KSA9PiB7XG4gICAgICBsZXQgY2FydCA9IHsuLi5wcmV2fTtcblxuICAgICAgaWYgKCBjYXJ0LnByb2R1Y3RzW2lkXSApIHtcbiAgICAgICAgY2FydC5wcm9kdWN0c1tpZF0ucXVhbnRpdHkgPSBjYXJ0LnByb2R1Y3RzW2lkXS5xdWFudGl0eSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYXJ0LnByb2R1Y3RzW2lkXSA9IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBxdWFudGl0eTogMVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYXJ0O1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBjaGVja291dCgpIHtcbiAgICBpbml0aWF0ZUNoZWNrb3V0KHtcbiAgICAgIGxpbmVJdGVtczogY2FydEl0ZW1zLm1hcCgoeyBpZCwgcXVhbnRpdHkgfSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHByaWNlOiBpZCxcbiAgICAgICAgICBxdWFudGl0eVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQGxlc3Nvbi0xNS1zb2x1dGlvbiBFeGVyY2lzZSAzXG4gICAqIFdlIGNhbiBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gdGhhdCB3aGVuIHRyaWdnZXJlZFxuICAgKiB3aXRoIGFuIElEIGFuZCBxdWFudGl0eSwgZmluZHMgdGhhdCBwcm9kdWN0IGluXG4gICAqIG91ciBhY3RpdmUgY2FydCBzdGF0ZSwgYW5kIHVwZGF0ZXMgdGhlIHF1YW50aXR5LlxuICAgKiBXZSBjYW4gZmluYWxseSBwYXNzIHRoYXQgZnVuY3Rpb24gaW4gdGhlIHJldHVyblxuICAgKiBzdGF0ZW1lbnQgdG8gbWFrZSBpdCBhdmFpbGFibGUgZ2xvYmFsbHkuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUl0ZW0oeyBpZCwgcXVhbnRpdHkgfSkge1xuICAgIHVwZGF0ZUNhcnQoKHByZXYpID0+IHtcbiAgICAgIGxldCBjYXJ0ID0gey4uLnByZXZ9O1xuXG4gICAgICBpZiAoIGNhcnQucHJvZHVjdHNbaWRdICkge1xuICAgICAgICBjYXJ0LnByb2R1Y3RzW2lkXS5xdWFudGl0eSA9IHF1YW50aXR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FydC5wcm9kdWN0c1tpZF0gPSB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgcXVhbnRpdHk6IDFcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FydDtcbiAgICB9KVxuICB9XG4gIHJldHVybiB7XG4gICAgY2FydCxcbiAgICBjYXJ0SXRlbXMsXG4gICAgc3VidG90YWwsXG4gICAgcXVhbnRpdHksXG4gICAgYWRkVG9DYXJ0LFxuICAgIGNoZWNrb3V0LFxuICAgIHVwZGF0ZUl0ZW1cbiAgfVxuXG59XG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FydCgpIHtcbiAgY29uc3QgY2FydCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xuICByZXR1cm4gY2FydDtcbn0iLCJpbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSAnQHN0cmlwZS9zdHJpcGUtanMnO1xuXG5jb25zdCBzdHJpcGVQcm9taXNlID0gbG9hZFN0cmlwZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElTSEFCTEVfS0VZKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYXRlQ2hlY2tvdXQoeyBsaW5lSXRlbXMgfSA9IHt9KSB7XG4gIGNvbnN0IHN0cmlwZSA9IGF3YWl0IHN0cmlwZVByb21pc2U7XG5cbiAgYXdhaXQgc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dCh7XG4gICAgbW9kZTogJ3BheW1lbnQnLFxuXG4gICAgbGluZUl0ZW1zLFxuICAgIHN1Y2Nlc3NVcmw6IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59P3Nlc3Npb25faWQ9e0NIRUNLT1VUX1NFU1NJT05fSUR9YCxcbiAgICBjYW5jZWxVcmw6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXG4gIH0pO1xufSIsImNvbnN0IEFQUF9LRVkgPSAnU1BBQ0VKRUxMWSc7XG5cbi8qKlxuICogZ2V0U3RvcmFnZUl0ZW1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmFnZUl0ZW0oa2V5KSB7XG4gIGlmICggdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgKSByZXR1cm47XG5cbiAgbGV0IGRhdGEgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7QVBQX0tFWX1fJHtrZXl9YCk7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgfSBjYXRjaChlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2UgZGF0YSBmcm9tICR7QVBQX0tFWX1fJHtrZXl9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBzZXRTdG9yYWdlSXRlbVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdG9yYWdlSXRlbShrZXksIHZhbHVlKSB7XG4gIGlmICggdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgKSByZXR1cm47XG4gIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7QVBQX0tFWX1fJHtrZXl9YCwgZGF0YSk7XG59IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgRmFTaG9wcGluZ0NhcnQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DYXJ0Lm1vZHVsZS5jc3MnXG5cbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICcuLi9ob29rcy91c2UtY2FydC5qcyc7XG5cbmltcG9ydCBwcm9kdWN0cyBmcm9tICcuLi9wcm9kdWN0cy5qc29uJztcblxuaW1wb3J0IFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvVGFibGUnO1xuXG5jb25zdCBjb2x1bW5zID0gW1xuICB7XG4gICAgY29sdW1uSWQ6ICd0aXRsZScsXG4gICAgSGVhZGVyOiAnUHJvZHVjdCBOYW1lJ1xuICB9LFxuICB7XG4gICAgY29sdW1uSWQ6ICdxdWFudGl0eScsXG4gICAgSGVhZGVyOiAnUXVhbnRpdHknXG4gIH0sXG4gIHtcbiAgICBjb2x1bW5JZDogJ3ByaWNlUGVyVW5pdCcsXG4gICAgSGVhZGVyOiAnUHJpY2UgUGVyIEl0ZW0nXG4gIH0sXG4gIHtcbiAgICBjb2x1bW5JZDogJ3RvdGFsJyxcbiAgICBIZWFkZXI6ICdJdGVtIFRvdGFsJ1xuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IHsgY2FydEl0ZW1zLCBjaGVja291dCwgdXBkYXRlSXRlbSB9ID0gdXNlQ2FydCgpO1xuXG4gIGNvbnN0IGRhdGEgPSBjYXJ0SXRlbXMubWFwKCh7IGlkLCBxdWFudGl0eSwgcHJpY2VQZXJVbml0IH0pID0+IHtcbiAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHMuZmluZCgoeyBpZDogcGlkIH0pID0+IHBpZCA9PT0gaWQpO1xuICAgIGNvbnN0IHsgdGl0bGUgfSA9IHByb2R1Y3QgfHwge307XG5cbiAgICBjb25zdCBRdWFudGl0eSA9ICgpID0+IHtcblxuICAgICAgLyoqXG4gICAgICAgKiBAbGVzc29uLTE1LXNvbHV0aW9uIEV4ZXJjaXNlIDJcbiAgICAgICAqIFdpdGggb3VyIGZvcm0sIHdlIGNhbiBhdHRhY2ggYW4gb25TdWJtaXQgZXZlbnRcbiAgICAgICAqIGxpc3RlbmVyLCBhbmQgd2hlbiBzb21lb25lIHN1Ym1pdHMgdGhhdCBmb3JtLFxuICAgICAgICogd2UgY2FuIHVzZSB0aGUgZXZlbnQgdGhhdCdzIHBhc3NlZCBhcyBhbiBhcmd1bWVudFxuICAgICAgICogdG8gcHJldmVudCB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiB0aGUgZm9ybS5cbiAgICAgICAqL1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVPblN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQGxlc3Nvbi0xNS1zb2x1dGlvbiBFeGVyY2lzZSA0XG4gICAgICAgICAqIFdlIGNhbiBleHRyYSB0aGUgaW5wdXQgZWxlbWVudHMgZnJvbSBvdXIgZm9ybSxcbiAgICAgICAgICogZmluZCB0aGUgcXVhbnRpdHkgaW5wdXQgYnkgaXRzIG5hbWUsIGFuZCB1c2VcbiAgICAgICAgICogaXRzIHZhbHVlIHRvIGNhbGwgdGhlIHVwZGF0ZUl0ZW0gZnVuY3Rpb24gdGhhdFxuICAgICAgICAgKiB3ZSBjcmVhdGVkIGFuZCBtYWRlIGF2YWlsYWJsZSBpbiBvdXIgZ2xvYmFsIHN0YXRlLlxuICAgICAgICAgKi9cblxuICAgICAgICBjb25zdCB7IGN1cnJlbnRUYXJnZXQgfSA9IGU7XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oY3VycmVudFRhcmdldC5lbGVtZW50cyk7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gaW5wdXRzLmZpbmQoaW5wdXQgPT4gaW5wdXQubmFtZSA9PT0gJ3F1YW50aXR5Jyk/LnZhbHVlO1xuXG4gICAgICAgIHVwZGF0ZUl0ZW0oe1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHF1YW50aXR5OiBxdWFudGl0eSAmJiBwYXJzZUludChxdWFudGl0eSlcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQGxlc3Nvbi0xNS1zb2x1dGlvbiBFeGVyY2lzZSAxXG4gICAgICAgKiBXZSBjYW4gdXNlIGEgbnVtYmVyIHR5cGUgaW5wdXQgZWxlbWVudCBhcyB3ZWxsXG4gICAgICAgKiBhcyBhIGJ1dHRvbiBlbGVtZW50IHRoYXQgbGV0cyB1cyBnaXZlIG91ciBjdXN0b21lcnNcbiAgICAgICAqIGEgd2F5IHRvIGNoYW5nZSB0aGUgcXVhbnRpdHkuXG4gICAgICAgKi9cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0UXVhbnRpdHl9IG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdH0+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInF1YW50aXR5XCIgdHlwZT1cIm51bWJlclwiIG1pbj17MH0gZGVmYXVsdFZhbHVlPXtxdWFudGl0eX0gLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgdGl0bGUsXG4gICAgICBxdWFudGl0eTogPFF1YW50aXR5IC8+LFxuICAgICAgcHJpY2VQZXJVbml0OiBwcmljZVBlclVuaXQudG9GaXhlZCgyKSxcbiAgICAgIHRvdGFsOiAocXVhbnRpdHkgKiBwcmljZVBlclVuaXQpLnRvRml4ZWQoMilcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5TaG9wcGluZyBDYXJ0IC0gU3BhY2UgSmVsbHk8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgIDxGYVNob3BwaW5nQ2FydCAvPiBDYXJ0XG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIDxUYWJsZSBjbGFzc05hbWU9e3N0eWxlcy50YWJsZX0gZGF0YT17ZGF0YX0gY29sdW1ucz17Y29sdW1uc30gLz5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrb3V0fT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXtjaGVja291dH0+XG4gICAgICAgICAgICAgIENoZWNrIE91dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L21haW4+XG5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBQb3dlcmVkIGJ5eycgJ31cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICApXG59XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJDYXJ0X2NvbnRhaW5lcl9fMkVxVDRcIixcblx0XCJtYWluXCI6IFwiQ2FydF9tYWluX18zNmtWRlwiLFxuXHRcInRpdGxlXCI6IFwiQ2FydF90aXRsZV9fMkZpT1RcIixcblx0XCJjaGVja291dFwiOiBcIkNhcnRfY2hlY2tvdXRfXzEtRFAtXCIsXG5cdFwidGFibGVcIjogXCJDYXJ0X3RhYmxlX18yS1U5alwiLFxuXHRcImZvb3RlclwiOiBcIkNhcnRfZm9vdGVyX18zNF9XblwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiQ2FydF9kZXNjcmlwdGlvbl9fVVB1d09cIixcblx0XCJjb2RlXCI6IFwiQ2FydF9jb2RlX18zT2xfQlwiLFxuXHRcImdyaWRcIjogXCJDYXJ0X2dyaWRfXzNMMW0wXCIsXG5cdFwiY2FyZFwiOiBcIkNhcnRfY2FyZF9fM0Z6ZGVcIixcblx0XCJsb2dvXCI6IFwiQ2FydF9sb2dvX18yd0xJbVwiLFxuXHRcImJ1dHRvblwiOiBcIkNhcnRfYnV0dG9uX18xZkVLV1wiLFxuXHRcImNhcnRcIjogXCJDYXJ0X2NhcnRfXzJwdWRMXCIsXG5cdFwiY2FydEJ1dHRvblwiOiBcIkNhcnRfY2FydEJ1dHRvbl9fM3psaDNcIixcblx0XCJjYXJ0UXVhbnRpdHlcIjogXCJDYXJ0X2NhcnRRdWFudGl0eV9fSi1WNlNcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHJpcGUvc3RyaXBlLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==