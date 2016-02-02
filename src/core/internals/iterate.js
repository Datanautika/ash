/**
 * Iterates over `iterable` and returns results in an array.
 *
 * @param {Iterable} iterable
 * @returns {Array}
 */
export default function iterate(iterable) {
	let result = [];

	if (typeof iterable.__iterator === 'function') {
		let iterator = iterable.__iterator();
		let iterationResult = iterator.next();

		while (!iterationResult.done) {
			result.push(iterationResult.value[1]);

			iterationResult = iterator.next();
		}
	} else if (typeof global.Symbol === 'function' && typeof iterable[global.Symbol.iterator] === 'function') {
		let iterator = iterable[global.Symbol.iterator]();
		let iterationResult = iterator.next();

		while (!iterationResult.done) {
			result.push(iterationResult.value);

			iterationResult = iterator.next();
		}
	} else {
		throw new Error(`${iterable} (iterable) must be an iterable.`);
	}

	return result;
}
