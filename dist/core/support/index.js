'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLIENT_PLATFORM = _constants2.default.CLIENT_PLATFORM;
var SERVER_PLATFORM = _constants2.default.SERVER_PLATFORM;
var DOCUMENT_FRAGMENT_NODE = 11;

var testObject = { __proto__: [] };

/**
 * An object environment feature flags.
 */
var support = {};

/**
 * Is true if certain javascript features are supported.
 */
support.modernJavascript = typeof Object.getOwnPropertyNames && typeof Object.getPrototypeOf === 'function' && typeof Object.defineProperties === 'function' && typeof Object.freeze === 'function' && typeof Object.freeze === 'function' && typeof Function.prototype.bind === 'function' && typeof Array.isArray === 'function' && testObject instanceof Array;

/**
 * Is true if all needed browser APIs are supported.
 */
support.browser = !!(global.history && global.history.pushState && global.requestAnimationFrame && global.getComputedStyle);

/**
 * Detect if the DOM is supported.
 */
try {
  support.dom = global.document.createDocumentFragment().nodeType === DOCUMENT_FRAGMENT_NODE && typeof global.addEventListener === 'function';
} catch (error) {
  support.dom = false;
}

// add supported class to <html>
if (support.modernJavascript && support.browser && support.dom) {
  global.document.documentElement.className = global.document.documentElement.className.replace(new RegExp('(^|\\b)' + 'no-js'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  global.document.documentElement.className += ' js ash--supported';
  global.document.documentElement.className = global.document.documentElement.className.trim();
}

/**
 * Returns string based on the platform (ie. server or client) ash is running on.
 */
support.platform = typeof exports !== 'undefined' && typeof global.process === 'object' ? SERVER_PLATFORM : CLIENT_PLATFORM;

if (!support.modernJavascript) {
  throw new Error('Unsupported javascript engine.');
}

exports.default = support;