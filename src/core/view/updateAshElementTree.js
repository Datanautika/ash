/* eslint-disable complexity */

import createAshElementTree from './createAshElementTree';
import unmountComponents from './unmountComponents';
import constants from '../internals/constants';


const COMPONENT_ASH_ELEMENT = constants.COMPONENT_ASH_ELEMENT;
const ASH_NODE_ASH_ELEMENT = constants.ASH_NODE_ASH_ELEMENT;
const FUNCTION_ASH_ELEMENT = constants.FUNCTION_ASH_ELEMENT;

/**
 * Walks AshElement tree for updating.
 *
 * @param {AshElement} oldAshElement Old Ash Element
 * @param {AshElement} newAshElement New Ash Element
 * @param {Stream} stream View Stream
 * @param {boolean} isParentComponentDirty `True` if parent Component is dirty, else `false`
 * @returns {undefined} Always returns `undefined`
 */
function walkUpdateAshElementTree(oldAshElement, newAshElement, stream, isParentComponentDirty) {
	if (newAshElement === null && oldAshElement) {
		// deleting old children
		while (oldAshElement.parent.children.length) {
			unmountComponents(oldAshElement.parent.children[oldAshElement.parent.children.length - 1]);

			oldAshElement.parent.children.pop();
		}
	} else if (newAshElement && oldAshElement === null) {
		// the element tree is not complete
		createAshElementTree(newAshElement, stream);

		// new element must be added as a child
		newAshElement.parent.children[newAshElement.index] = newAshElement;
	} else if (newAshElement.type === COMPONENT_ASH_ELEMENT && oldAshElement.type === COMPONENT_ASH_ELEMENT && newAshElement.Spec === oldAshElement.Spec) {
		let newAshElementProps = newAshElement.args && newAshElement.args[0] ? newAshElement.args[0] : null;
		let newAshElementPassedChildren = newAshElement.args && newAshElement.args[1] ? newAshElement.args[1] : null;
		let oldAshElementPassedChildren = oldAshElement.args && oldAshElement.args[1] ? oldAshElement.args[1] : null;

		if (oldAshElement.instance.__isDirty || oldAshElement.instance.shouldUpdate(newAshElementProps) || newAshElementPassedChildren !== oldAshElementPassedChildren) {
			oldAshElement.args = newAshElement.args;
			oldAshElement.isDirty = true;
			oldAshElement.instance.__isDirty = false;

			oldAshElement.instance.onBeforeReceiveProps(newAshElementProps);
			
			oldAshElement.instance.props = newAshElementProps;
			oldAshElement.instance.children = newAshElementPassedChildren;

			// create child for the new element
			let render = oldAshElement.instance.render(oldAshElement.instance.props, oldAshElement.instance.state);

			oldAshElement.wasRendered = true;

			// adding children to the queue
			if (render) {
				render.owner = oldAshElement;
				render.parent = oldAshElement;
				render.index = 0;

				if (oldAshElement.children[0]) {
					walkUpdateAshElementTree(oldAshElement.children[0], render, stream, true);
				} else {
					walkUpdateAshElementTree(null, render, stream, true);
				}
			} else if (oldAshElement.children[0]) {
				// deleting old surplus children
				unmountComponents(oldAshElement.children[0]);
				oldAshElement.children.pop();
			}
		} else {
			walkUpdateAshElementTree(oldAshElement.children[0], oldAshElement.children[0], stream, false);
		}
	} else if (newAshElement.type === FUNCTION_ASH_ELEMENT && oldAshElement.type === FUNCTION_ASH_ELEMENT && newAshElement.spec === oldAshElement.spec) {
		let newAshElementProps = newAshElement.args && newAshElement.args[0] ? newAshElement.args[0] : null;
		let oldAshElementProps = oldAshElement.args && oldAshElement.args[0] ? oldAshElement.args[0] : null;
		let newAshElementPassedChildren = newAshElement.args && newAshElement.args[1] ? newAshElement.args[1] : null;
		let oldAshElementPassedChildren = oldAshElement.args && oldAshElement.args[1] ? oldAshElement.args[1] : null;

		if (newAshElementProps === oldAshElementProps && newAshElementPassedChildren === oldAshElementPassedChildren) {
			walkUpdateAshElementTree(oldAshElement.children[0], oldAshElement.children[0], stream, false);
		} else {
			// create child for the new element
			let render = oldAshElement.spec(newAshElement.args[0], newAshElement.args[1]);

			oldAshElement.args = newAshElement.args;
			oldAshElement.isDirty = true;

			// adding children to the queue
			if (render) {
				render.owner = oldAshElement;
				render.parent = oldAshElement;
				render.index = 0;

				if (oldAshElement.children[0]) {
					walkUpdateAshElementTree(oldAshElement.children[0], render, stream, true);
				} else {
					walkUpdateAshElementTree(null, render, stream, true);
				}
			} else if (oldAshElement.children[0]) {
				// deleting old surplus children
				unmountComponents(oldAshElement.children[0]);
				oldAshElement.children.pop();
			}
		}
	} else if (newAshElement.type === ASH_NODE_ASH_ELEMENT && oldAshElement.type === ASH_NODE_ASH_ELEMENT) {
		if (isParentComponentDirty) {
			oldAshElement.args = newAshElement.args;
			oldAshElement.stream = stream;

			oldAshElement.instantiate();
		}

		// adding children to the queue
		for (let i = 0; i < newAshElement.children.length; i++) {
			if (newAshElement.children[i] && oldAshElement.children[i]) {
				newAshElement.children[i].owner = oldAshElement.owner;
				newAshElement.children[i].parent = oldAshElement;
				newAshElement.children[i].index = i;

				walkUpdateAshElementTree(oldAshElement.children[i], newAshElement.children[i], stream, isParentComponentDirty);
			} else if (newAshElement.children[i] && !oldAshElement.children[i]) {
				newAshElement.children[i].owner = oldAshElement.owner;
				newAshElement.children[i].parent = oldAshElement;
				newAshElement.children[i].index = i;

				walkUpdateAshElementTree(null, newAshElement.children[i], stream, isParentComponentDirty);
			}
		}

		// deleting old surplus children
		while (oldAshElement.children.length > newAshElement.children.length) {
			unmountComponents(oldAshElement.children[oldAshElement.children.length - 1]);
			oldAshElement.children.pop();
		}
	} else if (newAshElement.type === COMPONENT_ASH_ELEMENT && oldAshElement.type === COMPONENT_ASH_ELEMENT ||
		newAshElement.type === COMPONENT_ASH_ELEMENT && oldAshElement.type === ASH_NODE_ASH_ELEMENT ||
		newAshElement.type === COMPONENT_ASH_ELEMENT && oldAshElement.type === FUNCTION_ASH_ELEMENT ||
		newAshElement.type === ASH_NODE_ASH_ELEMENT && oldAshElement.type === COMPONENT_ASH_ELEMENT ||
		newAshElement.type === ASH_NODE_ASH_ELEMENT && oldAshElement.type === FUNCTION_ASH_ELEMENT ||
		newAshElement.type === FUNCTION_ASH_ELEMENT && oldAshElement.type === FUNCTION_ASH_ELEMENT ||
		newAshElement.type === FUNCTION_ASH_ELEMENT && oldAshElement.type === COMPONENT_ASH_ELEMENT ||
		newAshElement.type === FUNCTION_ASH_ELEMENT && oldAshElement.type === ASH_NODE_ASH_ELEMENT) {
		newAshElement.owner = oldAshElement.owner;
		newAshElement.parent = oldAshElement.parent;
		newAshElement.index = oldAshElement.index;

		createAshElementTree(newAshElement, stream);
		unmountComponents(oldAshElement);

		// replace the old element
		if (oldAshElement.parent.type === COMPONENT_ASH_ELEMENT || oldAshElement.parent.type === FUNCTION_ASH_ELEMENT) {
			oldAshElement.parent.children[0] = newAshElement;
		} else if (oldAshElement.parent.type === ASH_NODE_ASH_ELEMENT) {
			oldAshElement.parent.children[oldAshElement.index] = newAshElement;
		}
	}
}

/**
 * Updates dirty component elements in AshElement tree.
 *
 * @param {AshElement} componentAshElement Component Ash Element to update
 * @param {ViewStream} stream ViewStream
 * @returns {AshElement} Updated Component Ash Element
 */
export default function updateAshElementTree(componentAshElement, stream) {
	let newAshElement;
	let oldAshElement = componentAshElement.children[0] || null;

	if (componentAshElement.instance.__isDirty) {
		newAshElement = componentAshElement.instance.render(componentAshElement.instance.props, componentAshElement.instance.state);
		newAshElement.wasRendered = true;
		componentAshElement.isDirty = true;

		if (newAshElement) {
			newAshElement.owner = componentAshElement;
			newAshElement.parent = componentAshElement;
			newAshElement.index = 0;
		}
	} else {
		newAshElement = componentAshElement.children[0] || null;
	}

	walkUpdateAshElementTree(oldAshElement, newAshElement, stream, componentAshElement.isDirty);

	return componentAshElement;
}
