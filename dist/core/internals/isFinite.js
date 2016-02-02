'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Checks if `value` is a finite primitive number.
 *
 * @param {*} value
 * @returns {boolean}
 */

exports.default = Number.isFinite || function (value) {
  return typeof value === 'number' && global.isFinite(value);
};