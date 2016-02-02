import constants from './constants';


const COMPONENT_ASH_ELEMENT = constants.COMPONENT_ASH_ELEMENT;

/**
 * Checks if `value` is AshElement with type of `COMPONENT_ASH_ELEMENT`.
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isComponentAshElement(value) {
	return value && value.type === COMPONENT_ASH_ELEMENT;
}
