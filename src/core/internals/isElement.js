import isObjectLike from './isObjectLike';


/**
 * Checks if `value` is a DOM element.
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isElement(value) {
	return value && value.nodeType === 1 && isObjectLike(value) && Object.prototype.toString.call(value).indexOf('Element') > -1 || false;
}
