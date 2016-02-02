import constants from './constants';


const ASH_NODE_ASH_ELEMENT = constants.ASH_NODE_ASH_ELEMENT;

/**
 * Checks if `value` is AshElement with type of `ASH_NODE_ASH_ELEMENT`.
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isAshNodeAshElement(value) {
	return value && value.type === ASH_NODE_ASH_ELEMENT;
}
