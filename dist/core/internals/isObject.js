'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
/**
 * Checks if `value` is the language type of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @param {*} value
 * @returns {boolean}
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  return typeof value === 'function' || value && typeof value === 'object' || false;
}