'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObjectLike;
/**
 * Checks if `value` is object-like.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return value && typeof value === 'object' || false;
}