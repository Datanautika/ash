'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAshNodeAshElement;

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ASH_NODE_ASH_ELEMENT = _constants2.default.ASH_NODE_ASH_ELEMENT;

/**
 * Checks if `value` is AshElement with type of `ASH_NODE_ASH_ELEMENT`.
 *
 * @param {*} value
 * @returns {boolean}
 */
function isAshNodeAshElement(value) {
  return value && value.type === ASH_NODE_ASH_ELEMENT;
}