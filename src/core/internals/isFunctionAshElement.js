import constants from './constants';


const FUNCTION_ASH_ELEMENT = constants.FUNCTION_ASH_ELEMENT;

/**
 * Checks if `value` is AshElement with type of `FUNCTION_ASH_ELEMENT`.
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isFunctionAshElement(value) {
	return value && value.type === FUNCTION_ASH_ELEMENT;
}
