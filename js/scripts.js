"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./source/js/index.js");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./source/js/index.js":
  /*!****************************!*\
    !*** ./source/js/index.js ***!
    \****************************/

  /*! no exports provided */

  /***/
  function sourceJsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_popups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/popups */ \"./source/js/parts/popups.js\");\n/* harmony import */ var _parts_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/sliders */ \"./source/js/parts/sliders.js\");\n/* harmony import */ var _parts_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/form */ \"./source/js/parts/form.js\");\n/* harmony import */ var _parts_local__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/local */ \"./source/js/parts/local.js\");\n/* harmony import */ var _parts_valid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/valid */ \"./source/js/parts/valid.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n$(document).ready(() => {\r\n  Object(_parts_popups__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  Object(_parts_sliders__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  Object(_parts_local__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  Object(_parts_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  Object(_parts_valid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n});\n\n//# sourceURL=webpack:///./source/js/index.js?");
    /***/
  },

  /***/
  "./source/js/parts/form.js":
  /*!*********************************!*\
    !*** ./source/js/parts/form.js ***!
    \*********************************/

  /*! exports provided: default */

  /***/
  function sourceJsPartsFormJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handleFormSubmit; });\nfunction handleFormSubmit() {\r\n\r\n    $('.js-form').on('submit', e => {\r\n        e.preventDefault();\r\n\r\n        const $form = $(e.target);\r\n\r\n        const params = {\r\n            formData: $form.serializeArray()\r\n        };\r\n\r\n        const callbackSuccess = () => {\r\n            $('.contact-us__form').css('display', 'none');\r\n            $('.form-success').removeClass('hidden');\r\n        }\r\n\r\n        const callbackError = errors => {\r\n            console.group('Ошибка');\r\n            errors.forEach(error => {\r\n                console.log(`${ error.fieldName }: ${ error.message}`)\r\n            });\r\n            console.groupEnd();\r\n        };\r\n\r\n        window.API.onFormSubmit(params, callbackSuccess, callbackError)\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./source/js/parts/form.js?");
    /***/
  },

  /***/
  "./source/js/parts/local.js":
  /*!**********************************!*\
    !*** ./source/js/parts/local.js ***!
    \**********************************/

  /*! exports provided: default */

  /***/
  function sourceJsPartsLocalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return saveToLocalStorage; });\nfunction saveToLocalStorage() {\r\n\r\n    formEmail.value = localStorage.getItem('email');\r\n    formEmail.oninput = () => {\r\n        localStorage.setItem('email', formEmail.value)\r\n    }\r\n}\n\n//# sourceURL=webpack:///./source/js/parts/local.js?");
    /***/
  },

  /***/
  "./source/js/parts/popups.js":
  /*!***********************************!*\
    !*** ./source/js/parts/popups.js ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function sourceJsPartsPopupsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initPopups; });\nfunction initPopups() {\r\n\r\n    $('.popup-content').magnificPopup({\r\n        type: 'inline'\r\n    });\r\n    \r\n}\r\n\n\n//# sourceURL=webpack:///./source/js/parts/popups.js?");
    /***/
  },

  /***/
  "./source/js/parts/sliders.js":
  /*!************************************!*\
    !*** ./source/js/parts/sliders.js ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function sourceJsPartsSlidersJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initSliders; });\nfunction initSliderTop() {\r\n\r\n    $('.slider-top').slick({\r\n        infinite: false,\r\n        dots: true,\r\n        vertical: true,\r\n        customPaging : function(slider, i) {\r\n            var targetImage = slider.$slides.eq(i).find('img').data(\"image\");\r\n            return '<img src=\"'+targetImage+'\"/>';\r\n        },  \r\n    });\r\n\r\n}\r\n\r\nfunction initSliderPopular() {\r\n    $('.slider-popular').slick({\r\n        slidesToShow: 3,\r\n        slidesToScroll: 1,\r\n        autoplay: true,\r\n        autoplaySpeed: 4000,\r\n        variableWidth: true,\r\n        centerPadding: '60px',\r\n    });\r\n}\r\n\r\nfunction initShadowColor() {\r\n    \r\n    let images = $('.slider-popular__image');\r\n    $.each(images, function () {\r\n        let shadowColor = $(this).attr('data-shadow');\r\n        $(this).css('color', shadowColor);\r\n    })\r\n   \r\n}\r\n\r\nfunction initSliders() {\r\n    initSliderTop();\r\n    initSliderPopular();\r\n    initShadowColor();\r\n  }\r\n  \n\n//# sourceURL=webpack:///./source/js/parts/sliders.js?");
    /***/
  },

  /***/
  "./source/js/parts/valid.js":
  /*!**********************************!*\
    !*** ./source/js/parts/valid.js ***!
    \**********************************/

  /*! exports provided: default */

  /***/
  function sourceJsPartsValidJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validEmail; });\nfunction validEmail() {\r\n    $('#formEmail').on('input focus blur', function() {\r\n\r\n        if (this.validity.valueMissing) {\r\n            $(this).css('border', '2px solid red').css('color', 'red');\r\n            $('.form-error').removeClass('hidden');\r\n        }\r\n        \r\n        if (this.validity.patternMismatch) {\r\n            $(this).css('border', '2px solid red').css('color', 'red');\r\n            $('.form-error').removeClass('hidden');\r\n        } else {$(this).css('border', '2px solid green').css('color', 'black');\r\n        $('.form-error').addClass('hidden');\r\n    }\r\n\r\n    });\r\n    \r\n}\n\n//# sourceURL=webpack:///./source/js/parts/valid.js?");
    /***/
  }
  /******/

});