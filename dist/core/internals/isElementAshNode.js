'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isElementAshNode;

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ELEMENT_ASH_NODE = _constants2.default.ELEMENT_ASH_NODE;

/**
 * Checks if `value` is AshNode with type of `ELEMENT_ASH_NODE`.
 *
 * @param {*} value
 * @returns {boolean}
 */
function isElementAshNode(value) {
  return value && value.type === ELEMENT_ASH_NODE;
}