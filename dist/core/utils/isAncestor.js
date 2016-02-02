'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isAncestor;

var _isFunction = require('../internals/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	if (ancestor === Object || ancestor === value) {
		return true;
	}

	var prototype = undefined,
	    lastPrototype = undefined;

	while (prototype !== ancestor) {
		lastPrototype = prototype;
		prototype = Object.getPrototypeOf(value);

		if (lastPrototype === prototype) {
			return false;
		}

		if (prototype === ancestor) {
			return true;
		} else if (prototype === Function || prototype === Object) {
			return false;
		}
	}

	return false;
}