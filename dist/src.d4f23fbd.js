// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"LDUH":[function(require,module,exports) {

},{"./..\\assets\\fonts\\Rubik-Regular.ttf":[["Rubik-Regular.eaf18516.ttf","XF2N"],"XF2N"],"./..\\assets\\fonts\\Rubik-Medium.ttf":[["Rubik-Medium.6ed3d8c1.ttf","Q9q0"],"Q9q0"],"./..\\assets\\images\\bg-dots.svg":[["bg-dots.fb79db68.svg","HT9A"],"HT9A"],"./..\\assets\\images\\icon-arrow.svg":[["icon-arrow.e074205f.svg","NLe5"],"NLe5"],"./..\\assets\\images\\icon-arrow2.svg":[["icon-arrow2.98ccc0a4.svg","U0Mo"],"U0Mo"],"./..\\assets\\images\\icon-error.svg":[["icon-error.74c5b56b.svg","hJfQ"],"hJfQ"]}],"Focm":[function(require,module,exports) {
"use strict";

require("./styles/main.scss");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var $hamburgerButton = document.getElementById('hamburgerButton');
var $closeButton = document.getElementById('closeButton');
var $menu = document.getElementById('menu');
var $carouselHero = document.getElementById('carouselHero');
var $accordionContainer = document.getElementById('accordion');

var toggleMenu = function toggleMenu() {
  var $mainHeader = document.getElementById('mainHeader');
  $menu.classList.toggle('nav-container--visible');
  if (innerWidth < 1440) $mainHeader.classList.toggle('header--sticky');
};

$hamburgerButton.addEventListener('click', toggleMenu);
$closeButton.addEventListener('click', toggleMenu);
$menu.addEventListener('click', function (e) {
  if (e.target.matches('.nav__link')) {
    toggleMenu();
  }
});

var changeActiveHero = function changeActiveHero(indexToActive) {
  var $navItems = _toConsumableArray(document.getElementById('carouselHero').children);

  var $heros = _toConsumableArray(document.getElementById('hero2').children);

  var $sections = _toConsumableArray(document.getElementById('section5').children);

  $heros.forEach(function ($e, i) {
    $navItems[i].classList.remove('nav__item--active');
    $e.classList.remove('hero__img--visible');
    $sections[i].classList.add('section--invisible');
  });
  $navItems[indexToActive].classList.add('nav__item--active');
  $heros[indexToActive].classList.add('hero__img--visible');
  $sections[indexToActive].classList.remove('section--invisible');
  $sections[indexToActive].classList.add('section--visible');
};

$carouselHero.addEventListener('click', function (e) {
  if (e.target.matches('.nav__item--carousel')) {
    e.target.classList.add('nav__item--active');
    changeActiveHero(e.target.dataset.id);
  }
});

var changeActiveAccordion = function changeActiveAccordion(element) {
  element.classList.toggle('accordion--active');
};

$accordionContainer.addEventListener('click', function (e) {
  if (e.target.matches('.accordion__title')) {
    changeActiveAccordion(e.target.parentElement);
  }
});

var validateForm = function validateForm(value) {
  var regexp = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
  var cleanValue = value.trim();
  return regexp.test(cleanValue);
};

input.addEventListener('keyup', function (e) {
  var value = e.target.value;

  if (validateForm(value)) {
    e.target.parentElement.classList.remove('input-container--error');
  } else {
    e.target.parentElement.classList.add('input-container--error');
  }
});
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (validateForm(e.target.contact.value)) {
    e.target.submit();
  }
});
},{"./styles/main.scss":"LDUH"}]},{},["Focm"], null)
//# sourceMappingURL=/src.d4f23fbd.js.map