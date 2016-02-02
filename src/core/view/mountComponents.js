import isComponentAshElement from '../internals/isComponentAshElement';
import isAshNodeAshElement from '../internals/isAshNodeAshElement';
import constants from '../internals/constants';


const LIFECYCLE_MOUNTING = constants.LIFECYCLE_MOUNTING;
const LIFECYCLE_MOUNTED = constants.LIFECYCLE_MOUNTED;

/**
 * Walks AshElement tree for mounting of components.
 *
 * @param {AshElement} ashElement
 */
function walkMountComponents(ashElement) {
	if (isAshNodeAshElement(ashElement)) {
		for (let i = 0; i < ashElement.children.length; i++) {
			if (ashElement.children[i]) {
				walkMountComponents(ashElement.children[i]);
			}
		}
	} else if (isComponentAshElement(ashElement)) {
		if (ashElement.instance && ashElement.instance.__lifecycle === LIFECYCLE_MOUNTING) {
			ashElement.instance.__lifecycle = LIFECYCLE_MOUNTED;
		}

		ashElement.instance.onRender();

		if (ashElement.children[0]) {
			walkMountComponents(ashElement.children[0]);
		}
	}
}

/**
 * Mounts components in AshElement tree.
 *
 * @param {AshElement} ashElement
 */
export default function mountComponents(ashElement) {
	walkMountComponents(ashElement);
}
