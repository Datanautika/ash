'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = mountComponents;

var _isComponentAshElement = require('../internals/isComponentAshElement');

var _isComponentAshElement2 = _interopRequireDefault(_isComponentAshElement);

var _isAshNodeAshElement = require('../internals/isAshNodeAshElement');

var _isAshNodeAshElement2 = _interopRequireDefault(_isAshNodeAshElement);

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LIFECYCLE_MOUNTING = _constants2.default.LIFECYCLE_MOUNTING;
var LIFECYCLE_MOUNTED = _constants2.default.LIFECYCLE_MOUNTED;

/**
 * Walks AshElement tree for mounting of components.
 *
 * @param {AshElement} ashElement
 */
function walkMountComponents(ashElement) {
	if ((0, _isAshNodeAshElement2.default)(ashElement)) {
		for (var i = 0; i < ashElement.children.length; i++) {
			if (ashElement.children[i]) {
				walkMountComponents(ashElement.children[i]);
			}
		}
	} else if ((0, _isComponentAshElement2.default)(ashElement)) {
		if (ashElement.instance && ashElement.instance.__lifecycle === LIFECYCLE_MOUNTING) {
			ashElement.instance.__lifecycle = LIFECYCLE_MOUNTED;
		}

		ashElement.instance.onRender();

		if (ashElement.children[0]) {
			walkMountComponents(ashElement.children[0]);
		}
	}
}

/**
 * Mounts components in AshElement tree.
 *
 * @param {AshElement} ashElement
 */
function mountComponents(ashElement) {
	walkMountComponents(ashElement);
}