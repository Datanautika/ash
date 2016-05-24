'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isAncestor;

var _isFunction = require('../internals/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var functionPrototype = Object.getPrototypeOf(Function);
var objectPrototype = Object.getPrototypeOf(Object);

/**
 * Checks if `ancestor` class/constructor function is ancestor of `value`.
 *
 * @param {Function} ancestor
 * @param {Function} value
 * @returns {boolean}
 */
function isAncestor(ancestor, value) {
	if (!(0, _isFunction2.default)(ancestor) || !(0, _isFunction2.default)(value)) {
		return false;
	}

	if (ancestor === objectPrototype || ancestor === value) {
		return true;
	}

	var prototype = value;
	var lastPrototype = undefined;

	while (prototype !== ancestor) {
		lastPrototype = prototype;
		prototype = Object.getPrototypeOf(lastPrototype);

		if (lastPrototype === prototype) {
			return false;
		}

		if (prototype === ancestor) {
			return true;
		} else if (prototype === functionPrototype || prototype === objectPrototype) {
			return false;
		}
	}

	return false;
}