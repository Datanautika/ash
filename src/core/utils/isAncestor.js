import isFunction from '../internals/isFunction';


let functionPrototype = Object.getPrototypeOf(Function);
let objectPrototype = Object.getPrototypeOf(Object);

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

	if (ancestor === objectPrototype || ancestor === value) {
		return true;
	}

	let prototype;
	let lastPrototype;

	while (prototype !== ancestor) {
		lastPrototype = prototype;
		prototype = Object.getPrototypeOf(value);

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
