'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isElement;

var _isObjectLike = require('./isObjectLike');

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `value` is a DOM element.
 *
 * @param {*} value
 * @returns {boolean}
 */
function isElement(value) {
  return value && value.nodeType === 1 && (0, _isObjectLike2.default)(value) && Object.prototype.toString.call(value).indexOf('Element') > -1 || false;
}