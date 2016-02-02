import isFunction from '../internals/isFunction';


/**
 * Checks if `ancestor` class/constructor function is ancestor of `value`.
 *
 * @param {Function} ancestor
 * @param {Function} value
 * @returns {boolean}
 */
export default function isAncestor(ancestor, value) {
	if (!isFunction(ancestor) || !isFunction(value)) {
		return false;
	}

	if (ancestor === Object || ancestor === value) {
		return true;
	}

	let prototype, lastPrototype;

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
