'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isComponentAshElement;

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_ASH_ELEMENT = _constants2.default.COMPONENT_ASH_ELEMENT;

/**
 * Checks if `value` is AshElement with type of `COMPONENT_ASH_ELEMENT`.
 *
 * @param {*} value
 * @returns {boolean}
 */
function isComponentAshElement(value) {
  return value && value.type === COMPONENT_ASH_ELEMENT;
}