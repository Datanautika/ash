import isAshElement from '../internals/isAshElement';
import isComponentAshElement from '../internals/isComponentAshElement';
import isAshNodeAshElement from '../internals/isAshNodeAshElement';
import isFunctionAshElement from '../internals/isFunctionAshElement';
import constants from '../internals/constants';


const LIFECYCLE_MOUNTING = constants.LIFECYCLE_MOUNTING;

/**
 * Walks AshElement tree.
 *
 * @param {AshElement} ashElement
 * @param {AshElement} owner
 * @param {number} index
 */
function walkCreateAshElementTree(ashElement, owner, index) {
	if (!isComponentAshElement(owner)) {
		throw new Error(`${owner} (owner) must be a Component type AshElement Object.`);
	}

	let newOwner = owner;

	ashElement.index = index;
	ashElement.owner = owner;
	ashElement.stream = owner.stream;

	if (isComponentAshElement(ashElement)) {
		newOwner = ashElement;

		ashElement.instantiate();

		// create child by rendering component
		ashElement.instance.__lifecycle = LIFECYCLE_MOUNTING;
		ashElement.children[0] = ashElement.instance.render(ashElement.instance.props, ashElement.instance.state);
	} else if (isAshNodeAshElement(ashElement)) {
		ashElement.instantiate();
	} else if (isFunctionAshElement(ashElement)) {
		// create child by running function
		ashElement.children[0] = ashElement.spec(ashElement.args[0], ashElement.args[1]);
	}

	for (let i = 0; i < ashElement.children.length; i++) {
		if (ashElement.children[i]) {
			// set up parent
			ashElement.children[i].parent = ashElement;

			// walk the child
			walkCreateAshElementTree(ashElement.children[i], newOwner, i);
		}
	}
}

/**
 * Creates full AshElement tree, ie. instantiates Specs and calls component render methods.
 *
 * @param {AshElement} ashElement
 * @param {ViewStream} stream
 * @returns {AshElement}
 */
export default function createAshElementTree(ashElement, stream) {
	if (!isAshElement(ashElement)) {
		throw new Error(`${ashElement} (ashElement) must be an AshElement object instance.`);
	}

	if (!stream) {
		throw new Error(`${stream} (stream) must be a Stream object instance.`);
	}

	let ashElementTree = ashElement;
	let owner = ashElementTree.owner;

	ashElementTree.stream = stream;
	ashElementTree.index = typeof ashElementTree.index === 'undefined' ? 0 : ashElementTree.index;

	if (isComponentAshElement(ashElementTree)) {
		owner = ashElementTree;

		ashElementTree.instantiate();

		// create child by rendering component
		ashElementTree.instance.__lifecycle = LIFECYCLE_MOUNTING;
		ashElementTree.children[0] = ashElementTree.instance.render(ashElementTree.instance.props, ashElementTree.instance.state);
	} else if (isAshNodeAshElement(ashElementTree)) {
		ashElementTree.instantiate();
	} else if (isFunctionAshElement(ashElementTree)) {
		// create child by running function
		ashElementTree.children[0] = ashElementTree.spec(ashElementTree.args[0], ashElementTree.args[1]);
	}

	for (let i = 0; i < ashElementTree.children.length; i++) {
		if (ashElementTree.children[i]) {
			// set up a parent
			ashElementTree.children[i].parent = ashElementTree;

			// walk the child
			walkCreateAshElementTree(ashElementTree.children[i], owner, i);
		}
	}

	return ashElementTree;
}
