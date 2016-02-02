const HAS_SYMBOLS = global.Symbol && Object.getOwnPropertySymbols;

/**
 * Copies enumerable properties of source objects onto `target`.
 *
 * @param {Object} target
 * @param {...Object} sources
 * @returns {Object}
 */
export default function assign(target = {}, ...sources) {
	for (let i = 0; i < sources.length; i++) {
		if (typeof sources[i] !== 'object') {
			continue;
		}

		if (HAS_SYMBOLS) {
			let symbols = Object.getOwnPropertySymbols(sources[i]);

			for (let j = 0; j < symbols.length; j++) {
				if (sources[i].propertyIsEnumerable(symbols[j])) {
					target[symbols[j]] = sources[i][symbols[j]];
				}
			}
		}

		for (let prop in sources[i]) {
			if (sources[i].hasOwnProperty(prop) && typeof sources[i][prop] !== 'undefined' && sources[i][prop] !== null) {
				target[prop] = sources[i][prop];
			}
		}
	}

	return target;
}
