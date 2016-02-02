/**
 * Checks if `value` is an array.
 *
 * @param {*} value
 * @returns {boolean}
 */
export default Array.isArray || ((value) => Object.prototype.toString.call(value) === '[object Array]');
