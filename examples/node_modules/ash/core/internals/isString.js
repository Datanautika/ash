'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isString;

var _isObjectLike = require('./isObjectLike');

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @param {*} value
 * @returns {boolean}
 */
function isString(value) {
  return typeof value === 'string' || (0, _isObjectLike2.default)(value) && Object.prototype.toString.call(value) === '[object String]' || false;
}