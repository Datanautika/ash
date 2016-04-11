'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isMatching;

var _isArray = require('./isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if the chains of ; i.e all categories from the template chain must be present in the second chain, and in the same order.
 * Strict comparison (===) is used.
 * If strict is true, the order must be precisely the same
 *
 * @param {array} chain1 Template chain, ie. the chain to check against.
 * @param {array} chain2 The chain being checked.
 * @param {boolean} strict
 * @returns {boolean} Returns true if the second chain matches the first, else false.
 *
 * @example
 * ash.isMatching([1, 2, 3], [1, 2, 3]); // -> true
 * ash.isMatching([1, 2, 3], [1, 2, 3, 4, 5]); // -> true
 * ash.isMatching([1, 2, 3], [1, 4, 2, 5, 3]); // -> true
 * ash.isMatching([1, 2, 3], [1, 2]); // -> false
 * ash.isMatching([1, 2, 3], [1, 3, 2]); // -> false
 * ash.isMatching([1, 2, 3], [1, 4, 2, 5, 3], true); // -> false
 * ash.isMatching([1, 2, 3], [1, 2, 3, 5, 5], true); // -> true
 */
function isMatching(chain1, chain2, strict) {
	if (!(0, _isArray2.default)(chain1) || !(0, _isArray2.default)(chain2)) {
		return false;
	}

	var indexes = [];

	if (strict) {
		for (var i = 0; i < chain1.length; i++) {
			if (chain1[i] !== chain2[i]) {
				return false;
			}
		}

		return true;
	} else {
		for (var _i = 0; _i < chain1.length; _i++) {
			for (var j = 0; j < chain2.length; j++) {
				if (chain1[_i] === chain2[j]) {
					indexes.push(j);

					break;
				}

				if (j === chain2.length - 1) {
					return false; // item from chain1 is not in chain2, therefore there is no match
				}
			}
		}

		for (var _i2 = 0; _i2 < indexes.length - 1; _i2++) {
			if (indexes[_i2] >= indexes[_i2 + 1]) {
				// indexes are't ordered, therefore there is no match
				return false;
			}
		}
	}

	return true;
}