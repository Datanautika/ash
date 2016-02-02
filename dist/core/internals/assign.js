'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = assign;
var HAS_SYMBOLS = global.Symbol && Object.getOwnPropertySymbols;

/**
 * Copies enumerable properties of source objects onto `target`.
 *
 * @param {Object} target
 * @param {...Object} sources
 * @returns {Object}
 */
function assign() {
	var target = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		sources[_key - 1] = arguments[_key];
	}

	for (var i = 0; i < sources.length; i++) {
		if (typeof sources[i] !== 'object') {
			continue;
		}

		if (HAS_SYMBOLS) {
			var symbols = Object.getOwnPropertySymbols(sources[i]);

			for (var j = 0; j < symbols.length; j++) {
				if (sources[i].propertyIsEnumerable(symbols[j])) {
					target[symbols[j]] = sources[i][symbols[j]];
				}
			}
		}

		for (var prop in sources[i]) {
			if (sources[i].hasOwnProperty(prop) && typeof sources[i][prop] !== 'undefined' && sources[i][prop] !== null) {
				target[prop] = sources[i][prop];
			}
		}
	}

	return target;
}