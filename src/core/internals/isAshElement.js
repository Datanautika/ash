import constants from './constants';


const COMPONENT_ASH_ELEMENT = constants.COMPONENT_ASH_ELEMENT;
const ASH_NODE_ASH_ELEMENT = constants.ASH_NODE_ASH_ELEMENT;
const FUNCTION_ASH_ELEMENT = constants.FUNCTION_ASH_ELEMENT;

/**
 * Checks if `value` is AshElement with type of `COMPONENT_ASH_ELEMENT`, `ASH_NODE_ASH_ELEMENT` or `FUNCTION_ASH_ELEMENT`.
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isAshElement(value) {
	return value && (value.type === COMPONENT_ASH_ELEMENT || value.type === ASH_NODE_ASH_ELEMENT || value.type === FUNCTION_ASH_ELEMENT);
}
