import isObjectLike from './isObjectLike';


/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isString(value) {
  return typeof value === 'string' || isObjectLike(value) && Object.prototype.toString.call(value) === '[object String]' || false;
}
