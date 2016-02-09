'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = updateAshElementTree;

var _createAshElementTree = require('./createAshElementTree');

var _createAshElementTree2 = _interopRequireDefault(_createAshElementTree);

var _unmountComponents = require('./unmountComponents');

var _unmountComponents2 = _interopRequireDefault(_unmountComponents);

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_ASH_ELEMENT = _constants2.default.COMPONENT_ASH_ELEMENT;
var ASH_NODE_ASH_ELEMENT = _constants2.default.ASH_NODE_ASH_ELEMENT;
var FUNCTION_ASH_ELEMENT = _constants2.default.FUNCTION_ASH_ELEMENT;

/**
 * Walks AshElement tree for updating.
 *
 * @param {AshElement} oldAshElement
 * @param {AshElement} newAshElement
 * @param {Stream} stream
 * @param {boolean} isParentComponentDirty
 */
function walkUpdateAshElementTree(oldAshElement, newAshElement, stream, isParentComponentDirty) {
	if (newAshElement === null && oldAshElement) {
		// deleting old children
		while (oldAshElement.parent.children.length) {
			(0, _unmountComponents2.default)(oldAshElement.parent.children[oldAshElement.parent.children.length - 1]);

			oldAshElement.parent.children.pop();
		}
	} else if (newAshElement && oldAshElement === null) {
		// the element tree is not complete
		(0, _createAshElementTree2.default)(newAshElement, stream);

		// new element must be added as a child
		newAshElement.parent.children[newAshElement.index] = newAshElement;
	} else if (newAshElement.type === COMPONENT_ASH_ELEMENT && oldAshElement.type === COMPONENT_ASH_ELEMENT && newAshElement.Spec === oldAshElement.Spec) {
		var newAshElementArgs = newAshElement.args && newAshElement.args[0] ? newAshElement.args[0] : null;

		if (oldAshElement.instance.__isDirty || oldAshElement.instance.shouldUpdate(newAshElementArgs)) {
			oldAshElement.args = newAshElement.args;
			oldAshElement.isDirty = true;
			oldAshElement.instance.__isDirty = false;

			oldAshElement.instance.onBeforeReceiveProps(newAshElementArgs);

			oldAshElement.instance.props = newAshElementArgs;

			// create child for the new element
			var render = oldAshElement.instance.render(oldAshElement.instance.props, oldAshElement.instance.state);

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
				(0, _unmountComponents2.default)(oldAshElement.children[0]);
				oldAshElement.children.pop();
			}
		} else {
			walkUpdateAshElementTree(oldAshElement.children[0], oldAshElement.children[0], stream, false);
		}
	} else if (newAshElement.type === FUNCTION_ASH_ELEMENT && oldAshElement.type === FUNCTION_ASH_ELEMENT && newAshElement.spec === oldAshElement.spec) {
		var newAshElementArgs = newAshElement.args && newAshElement.args[0] ? newAshElement.args[0] : null;
		var oldAshElementArgs = oldAshElement.args && oldAshElement.args[0] ? oldAshElement.args[0] : null;

		if (newAshElementArgs !== oldAshElementArgs) {
			// create child for the new element
			var render = oldAshElement.spec(newAshElement.args[0], oldAshElement.args[0]);

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
				(0, _unmountComponents2.default)(oldAshElement.children[0]);
				oldAshElement.children.pop();
			}
		} else {
			walkUpdateAshElementTree(oldAshElement.children[0], oldAshElement.children[0], stream, false);
		}
	} else if (newAshElement.type === ASH_NODE_ASH_ELEMENT && oldAshElement.type === ASH_NODE_ASH_ELEMENT) {
		if (isParentComponentDirty) {
			oldAshElement.args = newAshElement.args;
			oldAshElement.stream = stream;

			oldAshElement.instantiate();
		}

		// adding children to the queue
		for (var i = 0; i < newAshElement.children.length; i++) {
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
			(0, _unmountComponents2.default)(oldAshElement.children[oldAshElement.children.length - 1]);
			oldAshElement.children.pop();
		}
	} else if (newAshElement.type === COMPONENT_ASH_ELEMENT && oldAshElement.type === COMPONENT_ASH_ELEMENT || newAshElement.type === COMPONENT_ASH_ELEMENT && oldAshElement.type === ASH_NODE_ASH_ELEMENT || newAshElement.type === COMPONENT_ASH_ELEMENT && oldAshElement.type === FUNCTION_ASH_ELEMENT || newAshElement.type === ASH_NODE_ASH_ELEMENT && oldAshElement.type === COMPONENT_ASH_ELEMENT || newAshElement.type === ASH_NODE_ASH_ELEMENT && oldAshElement.type === FUNCTION_ASH_ELEMENT || newAshElement.type === FUNCTION_ASH_ELEMENT && oldAshElement.type === FUNCTION_ASH_ELEMENT || newAshElement.type === FUNCTION_ASH_ELEMENT && oldAshElement.type === COMPONENT_ASH_ELEMENT || newAshElement.type === FUNCTION_ASH_ELEMENT && oldAshElement.type === ASH_NODE_ASH_ELEMENT) {
		newAshElement.owner = oldAshElement.owner;
		newAshElement.parent = oldAshElement.parent;
		newAshElement.index = oldAshElement.index;

		(0, _createAshElementTree2.default)(newAshElement, stream);
		(0, _unmountComponents2.default)(oldAshElement);

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
 * @param {AshElement} componentAshElement
 * @param {ViewStream} stream
 * @returns {AshElement}
 */
function updateAshElementTree(componentAshElement, stream) {
	var newAshElement = undefined;
	var oldAshElement = componentAshElement.children[0] || null;

	if (componentAshElement.instance.__isDirty) {
		newAshElement = componentAshElement.instance.render(componentAshElement.instance.props, componentAshElement.instance.state);

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