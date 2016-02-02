'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTextAshNode;

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TEXT_ASH_NODE = _constants2.default.TEXT_ASH_NODE;

/**
 * Checks if `value` is AshNode with type of `TEXT_ASH_NODE`.
 *
 * @param {*} value
 * @returns {boolean}
 */
function isTextAshNode(value) {
  return value && value.type === TEXT_ASH_NODE;
}