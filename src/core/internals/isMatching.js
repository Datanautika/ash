import isArray from './isArray';


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
export default function isMatching(chain1, chain2, strict) {
	if (!isArray(chain1) || !isArray(chain2)) {
		return false;
	}

	let indexes = [];

	if (strict) {
		for (let i = 0; i < chain1.length; i++) {
			if (chain1[i] !== chain2[i]) {
				return false;
			}
		}

		return true;
	} else {
		for (let i = 0; i < chain1.length; i++) {
			for (let j = 0; j < chain2.length; j++) {
				if (chain1[i] === chain2[j]) {
					indexes.push(j);
					
					break;
				}

				if (j === chain2.length - 1) {
					return false; // item from chain1 is not in chain2, therefore there is no match
				}
			}
		}

		for (let i = 0; i < indexes.length - 1; i++) {
			if (indexes[i] >= indexes[i + 1]) {
				// indexes are't ordered, therefore there is no match
				return false;
			}
		}
	}

	return true;
}
