'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFunctionAshElement;

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FUNCTION_ASH_ELEMENT = _constants2.default.FUNCTION_ASH_ELEMENT;

/**
 * Checks if `value` is AshElement with type of `FUNCTION_ASH_ELEMENT`.
 *
 * @param {*} value
 * @returns {boolean}
 */
function isFunctionAshElement(value) {
  return value && value.type === FUNCTION_ASH_ELEMENT;
}