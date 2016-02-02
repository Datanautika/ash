import constants from './constants';


const ELEMENT_ASH_NODE = constants.ELEMENT_ASH_NODE;

/**
 * Checks if `value` is AshNode with type of `ELEMENT_ASH_NODE`.
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isElementAshNode(value) {
	return value && value.type === ELEMENT_ASH_NODE;
}
