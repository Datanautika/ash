import constants from './constants';


const TEXT_ASH_NODE = constants.TEXT_ASH_NODE;
const ELEMENT_ASH_NODE = constants.ELEMENT_ASH_NODE;

/**
 * Checks if `value` is AshNode.
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isAshNode(value) {
	return value && (value.type === TEXT_ASH_NODE || value.type === ELEMENT_ASH_NODE);
}
