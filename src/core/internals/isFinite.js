/**
 * Checks if `value` is a finite primitive number.
 *
 * @param {*} value
 * @returns {boolean}
 */
export default Number.isFinite || ((value) => typeof value === 'number' && global.isFinite(value));
