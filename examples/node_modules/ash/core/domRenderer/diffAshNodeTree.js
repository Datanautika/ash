'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = diffAshNodeTree;

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PATCH_ELEMENT_ASH_NODE = _constants2.default.PATCH_ELEMENT_ASH_NODE;
var PATCH_TEXT_ASH_NODE = _constants2.default.PATCH_TEXT_ASH_NODE;
var PATCH_PROPERTIES = _constants2.default.PATCH_PROPERTIES;
var PATCH_ORDER = _constants2.default.PATCH_ORDER;
var PATCH_INSERT = _constants2.default.PATCH_INSERT;
var PATCH_REMOVE = _constants2.default.PATCH_REMOVE;

/**
 * Walks AshNode children.
 *
 * @param {Array<AshNode>} oldChildren
 * @param {Array<AshNode>} newChildren
 * @param {AshNode} oldAshNode
 * @param {AshNode} newAshNode
 * @param {Array<Object>} patches
 * @returns {Array<Object>}
 */
function walkDiffAshNodeChildren(oldChildren, newChildren, oldAshNode, newAshNode, patches) {
	var oldChildIndex = 0;
	var newChildIndex = 0;
	var key = 0;
	var isChildDirty = false;

	// lets fill in keys, if needed; simple first-to-first correspondence
	for (var i = 0, length = Math.max(oldChildren.length, newChildren.length); i < length; i++) {
		if (newChildren[i] && newChildren[i].isDirty) {
			isChildDirty = true;
		}

		if (oldChildren[i] && oldChildren[i].key) {
			oldChildren[i].computedKey = oldChildren[i].key;
		}

		if (newChildren[i] && newChildren[i].key) {
			newChildren[i].computedKey = newChildren[i].key;
		}

		while (oldChildren[oldChildIndex] && oldChildren[oldChildIndex].key) {
			oldChildIndex++;
		}

		while (newChildren[newChildIndex] && newChildren[newChildIndex].key) {
			newChildIndex++;
		}

		if (oldChildren[oldChildIndex]) {
			oldChildren[oldChildIndex].computedKey = key;
		}

		if (newChildren[newChildIndex]) {
			newChildren[newChildIndex].computedKey = key;
		}

		key++;
		oldChildIndex++;
		newChildIndex++;
	}

	// no children are dirty, walk them
	if (!isChildDirty && oldChildren.length === newChildren.length) {
		for (var _i = 0; _i < oldChildren.length; _i++) {
			walkDiffAshNodeTree(oldChildren[_i], newChildren[_i], patches);
		}

		return patches;
	}

	// keys are in; let's compare order of children
	var foundIndex = undefined;

	// first iterate over old children
	for (var _i2 = 0; _i2 < oldChildren.length; _i2++) {
		var isChildFound = false;

		for (var j = 0; j < newChildren.length; j++) {
			if (oldChildren[_i2].computedKey === newChildren[j].computedKey) {
				isChildFound = true;
				foundIndex = j;

				break;
			}
		}

		// node with matching key was found?
		if (isChildFound) {
			// is order same?
			if (_i2 !== foundIndex) {
				patches.push({
					type: PATCH_ORDER,
					newId: newChildren[foundIndex].id,
					id: oldChildren[_i2].id,
					indices: oldChildren[_i2].indices,
					streamId: oldChildren[_i2].streamId,
					index: foundIndex
				});
			}

			// now walk inside those children...
			walkDiffAshNodeTree(oldChildren[_i2], newChildren[foundIndex], patches);
		} else {
			// node is to be removed...
			patches.push({
				type: PATCH_REMOVE,
				id: oldChildren[_i2].id,
				indices: oldChildren[_i2].indices,
				streamId: oldChildren[_i2].streamId
			});
		}
	}

	// now iterate over new children, if there are any
	for (var _i3 = 0; _i3 < newChildren.length; _i3++) {
		var _isChildFound = false;

		for (var _j = 0; _j < oldChildren.length; _j++) {
			if (oldChildren[_j].computedKey === newChildren[_i3].computedKey) {
				_isChildFound = true;

				break;
			}
		}

		// new child was not found
		if (!_isChildFound) {
			patches.push({
				type: PATCH_INSERT,
				node: newChildren[_i3],
				id: newChildren[_i3].id,
				indices: newChildren[_i3].indices,
				parentId: oldAshNode.id,
				parentIndices: oldAshNode.indices
			});
		}
	}

	return patches;
}

/**
 * Walks AshNodes.
 *
 * @param {AshNode} oldAshNode
 * @param {AshNode} newAshNode
 * @param {Array<Object>} patches
 * @returns {Array<Object>}
 */
function walkDiffAshNodeTree(oldAshNode, newAshNode, patches) {
	var differentProperties = false;
	var propertiesToChange = {};
	var propertiesToRemove = [];

	if (newAshNode === null) {
		// node is to be removed...
		patches.push({
			type: PATCH_REMOVE,
			id: oldAshNode.id,
			indices: oldAshNode.indices,
			streamId: oldAshNode.streamId
		});

		return patches;
	}

	if (oldAshNode === newAshNode || !newAshNode.isDirty) {
		if (oldAshNode.oldChildren && oldAshNode.oldChildren.length) {
			walkDiffAshNodeChildren(oldAshNode.oldChildren, newAshNode.children, oldAshNode, newAshNode, patches);

			// we must delete old children, because in next diff they would be "old old children", and we dont want that
			oldAshNode.oldChildren = newAshNode.oldChildren = null;
		} else if (oldAshNode.children && oldAshNode.children.length || newAshNode.children && newAshNode.children.length) {
			walkDiffAshNodeChildren(oldAshNode.children, newAshNode.children, oldAshNode, newAshNode, patches);
		}

		return patches;
	}

	if (oldAshNode.type === newAshNode.type && oldAshNode.text !== newAshNode.text) {
		patches.push({
			type: PATCH_TEXT_ASH_NODE,
			id: oldAshNode.id,
			indices: oldAshNode.indices,
			text: newAshNode.text
		});

		// text ash node cannot generate another type of patch
		return patches;
	}

	// which properties are different or new
	for (var newProperty in newAshNode.properties) {
		if (newAshNode.properties.hasOwnProperty(newProperty) && oldAshNode.properties && newAshNode.properties[newProperty] !== oldAshNode.properties[newProperty]) {
			if (typeof newAshNode.properties[newProperty] === 'object' && oldAshNode.properties[newProperty] && typeof oldAshNode.properties[newProperty] === 'object') {
				// which propertie are different or new
				for (var newSubproperty in newAshNode.properties[newProperty]) {
					if (newAshNode.properties[newProperty].hasOwnProperty(newSubproperty) && newAshNode.properties[newProperty][newSubproperty] !== oldAshNode.properties[newProperty][newSubproperty]) {
						propertiesToChange[newProperty] = propertiesToChange[newProperty] || {};
						propertiesToChange[newProperty][newSubproperty] = newAshNode.properties[newProperty][newSubproperty];
						differentProperties = true;
					}
				}

				// which properties are to be removed
				for (var oldSubproperty in oldAshNode.properties[newProperty]) {
					if (oldAshNode.properties[newProperty].hasOwnProperty(oldSubproperty) && typeof newAshNode.properties[newProperty][oldSubproperty] === 'undefined') {
						propertiesToRemove.push(newProperty + '.' + oldSubproperty);

						differentProperties = true;
					}
				}
			} else {
				propertiesToChange[newProperty] = newAshNode.properties[newProperty];
				differentProperties = true;
			}
		}
	}

	// which properties are to be removed
	for (var oldProperty in oldAshNode.properties) {
		if (oldAshNode.properties.hasOwnProperty(oldProperty) && newAshNode.properties && typeof newAshNode.properties[oldProperty] === 'undefined') {
			differentProperties = true;
			propertiesToRemove.push(oldProperty);
		}
	}

	if (oldAshNode.type !== newAshNode.type || oldAshNode.tagName !== newAshNode.tagName) {
		patches.push({
			type: PATCH_ELEMENT_ASH_NODE,
			id: oldAshNode.id,
			indices: oldAshNode.indices,
			streamId: oldAshNode.streamId,
			node: newAshNode
		});

		// whole node must be replaced; no sense in finding other differences
		return patches;
	}

	if (differentProperties) {
		patches.push({
			type: PATCH_PROPERTIES,
			id: oldAshNode.id,
			indices: oldAshNode.indices,
			streamId: oldAshNode.streamId,
			propertiesToChange: propertiesToChange,
			propertiesToRemove: propertiesToRemove
		});
	}

	// diff the children...
	if (oldAshNode.oldChildren && oldAshNode.oldChildren.length) {
		walkDiffAshNodeChildren(oldAshNode.oldChildren, newAshNode.children, oldAshNode, newAshNode, patches);

		// we must delete old children, because in next diff they would be "old old children", and we dont want that
		oldAshNode.oldChildren = newAshNode.oldChildren = null;
	} else if (oldAshNode.children && oldAshNode.children.length || newAshNode.children && newAshNode.children.length) {
		walkDiffAshNodeChildren(oldAshNode.children, newAshNode.children, oldAshNode, newAshNode, patches);
	}

	return patches;
}

/**
 * Diff two AshNode trees.
 *
 * @param {AshNode} oldAshNodeTree
 * @param {AshNode} newAshNodeTree
 * @returns {Array}
 */
function diffAshNodeTree(oldAshNodeTree, newAshNodeTree) {
	return walkDiffAshNodeTree(oldAshNodeTree, newAshNodeTree, []);
}