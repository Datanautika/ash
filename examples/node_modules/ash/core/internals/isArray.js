'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Checks if `value` is an array.
 *
 * @param {*} value
 * @returns {boolean}
 */

exports.default = Array.isArray || function (value) {
  return Object.prototype.toString.call(value) === '[object Array]';
};