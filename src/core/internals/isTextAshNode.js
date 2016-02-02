import constants from './constants';


const TEXT_ASH_NODE = constants.TEXT_ASH_NODE;

/**
 * Checks if `value` is AshNode with type of `TEXT_ASH_NODE`.
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isTextAshNode(value) {
	return value && value.type === TEXT_ASH_NODE;
}
