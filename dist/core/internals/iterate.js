'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = iterate;
/**
 * Iterates over `iterable` and returns results in an array.
 *
 * @param {Iterable} iterable
 * @returns {Array}
 */
function iterate(iterable) {
	var result = [];

	if (typeof iterable.__iterator === 'function') {
		var iterator = iterable.__iterator();
		var iterationResult = iterator.next();

		while (!iterationResult.done) {
			result.push(iterationResult.value[1]);

			iterationResult = iterator.next();
		}
	} else if (typeof global.Symbol === 'function' && typeof iterable[global.Symbol.iterator] === 'function') {
		var _iterator = iterable[global.Symbol.iterator]();
		var _iterationResult = _iterator.next();

		while (!_iterationResult.done) {
			result.push(_iterationResult.value);

			_iterationResult = _iterator.next();
		}
	} else {
		throw new Error(iterable + ' (iterable) must be an iterable.');
	}

	return result;
}