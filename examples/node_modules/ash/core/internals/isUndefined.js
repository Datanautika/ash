'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUndefined;
/**
 * Checks if `value` is `undefined`.
 *
 * @param {*} value
 * @returns {boolean}
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}