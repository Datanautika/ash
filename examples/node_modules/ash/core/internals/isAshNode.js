'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAshNode;

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TEXT_ASH_NODE = _constants2.default.TEXT_ASH_NODE;
var ELEMENT_ASH_NODE = _constants2.default.ELEMENT_ASH_NODE;

/**
 * Checks if `value` is AshNode.
 *
 * @param {*} value
 * @returns {boolean}
 */
function isAshNode(value) {
  return value && (value.type === TEXT_ASH_NODE || value.type === ELEMENT_ASH_NODE);
}