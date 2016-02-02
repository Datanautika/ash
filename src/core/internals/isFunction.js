/**
 * Checks if `value` is a `Function` object.
 *
 * @param {*} value
 * @returns {boolean}
 */
let isFunction = (value) => typeof value === 'function' || false; // Avoid a Chakra JIT bug in compatibility modes of IE 11; https://github.com/jashkenas/underscore/issues/1621

// fallback for environments that return incorrect `typeof` operator results.
if (isFunction(/x/) || global.Uint8Array && !isFunction(global.Uint8Array)) {
	isFunction = (value) => Object.prototype.toString.call(value) === '[object Function]';
}

export default isFunction;
