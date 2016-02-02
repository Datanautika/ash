import constants from '../internals/constants';


const LIFECYCLE_UNMOUNTED = constants.LIFECYCLE_UNMOUNTED;
const COMPONENT_ASH_ELEMENT = constants.COMPONENT_ASH_ELEMENT;

/**
 * Walks AshElement tree for unmounting of components.
 *
 * @param {AshElement} ashElement
 */
function walkUnmountComponents(ashElement) {
	if (ashElement.type === COMPONENT_ASH_ELEMENT) {
		ashElement.instance.__lifecycle = LIFECYCLE_UNMOUNTED;
	}

	for (let i = 0; i < ashElement.children.length; i++) {
		walkUnmountComponents(ashElement.children[i]);
	}
}
/**
 * Unmounts components in AshElement tree.
 *
 * @param {AshElement} ashElement
 */
export default function unmountComponents(ashElement) {
	walkUnmountComponents(ashElement);
}
