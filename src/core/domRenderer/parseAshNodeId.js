/**
 * Converts id string to the indices array.
 *
 * @param {string} id
 * @returns {Array<number>}
 *
 * @example
 * parseAshNodeId('0.15.9.1.0'); // -> [0, 15, 9, 1, 0]
 */
export default function parseAshNodeId(id) {
	let result = id.split('.');
	
	for (let i = 0; i < result.length; i++) {
		result[i] |= 0;
	}

	return result;
}
