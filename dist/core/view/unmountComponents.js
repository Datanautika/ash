'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unmountComponents;

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LIFECYCLE_UNMOUNTED = _constants2.default.LIFECYCLE_UNMOUNTED;
var COMPONENT_ASH_ELEMENT = _constants2.default.COMPONENT_ASH_ELEMENT;

/**
 * Walks AshElement tree for unmounting of components.
 *
 * @param {AshElement} ashElement
 */
function walkUnmountComponents(ashElement) {
  if (ashElement.type === COMPONENT_ASH_ELEMENT) {
    ashElement.instance.__lifecycle = LIFECYCLE_UNMOUNTED;
  }

  for (var i = 0; i < ashElement.children.length; i++) {
    walkUnmountComponents(ashElement.children[i]);
  }
}
/**
 * Unmounts components in AshElement tree.
 *
 * @param {AshElement} ashElement
 */
function unmountComponents(ashElement) {
  walkUnmountComponents(ashElement);
}