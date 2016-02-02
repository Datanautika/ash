import constants from '../internals/constants';


const PATCH_ELEMENT_ASH_NODE = constants.PATCH_ELEMENT_ASH_NODE;
const PATCH_TEXT_ASH_NODE = constants.PATCH_TEXT_ASH_NODE;
const PATCH_PROPERTIES = constants.PATCH_PROPERTIES;
const PATCH_ORDER = constants.PATCH_ORDER;
const PATCH_INSERT = constants.PATCH_INSERT;
const PATCH_REMOVE = constants.PATCH_REMOVE;

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
	let oldChildIndex = 0;
	let newChildIndex = 0;
	let key = 0;
	let isChildDirty = false;

	// lets fill in keys, if needed; simple first-to-first correspondence
	for (let i = 0, length = Math.max(oldChildren.length, newChildren.length); i < length; i++) {
		if (newChildren[i] && newChildren[i].isDirty) {
			isChildDirty = true;
		}

		while (oldChildren[oldChildIndex] && (typeof oldChildren[oldChildIndex].key !== 'undefined' && oldChildren[oldChildIndex].key !== null)) {
			oldChildIndex++;
		}

		while (newChildren[newChildIndex] && (typeof newChildren[newChildIndex].key !== 'undefined' && newChildren[newChildIndex].key !== null)) {
			newChildIndex++;
		}

		if (oldChildren[oldChildIndex]) {
			oldChildren[oldChildIndex].key = key;
		}

		if (newChildren[newChildIndex]) {
			newChildren[newChildIndex].key = key;
		}
		
		key++;
		oldChildIndex++;
		newChildIndex++;
	}

	// no children are dirty, walk them
	if (!isChildDirty && oldChildren.length === newChildren.length) {
		for (let i = 0; i < oldChildren.length; i++) {
			walkDiffAshNodeTree(oldChildren[i], newChildren[i], patches);
		}

		return patches;
	}

	// keys are in; let's compare order of children
	let foundIndex;

	// first iterate over old children
	for (let i = 0; i < oldChildren.length; i++) {
		let isChildFound = false;

		for (let j = 0; j < newChildren.length; j++) {
			if (oldChildren[i].key === newChildren[j].key) {
				isChildFound = true;
				foundIndex = j;

				break;
			}
		}

		// node with matching key was found?
		if (isChildFound) {
			// is order same?
			if (i !== foundIndex) {
				patches.push({
					type: PATCH_ORDER,
					newId: newChildren[foundIndex].id,
					id: oldChildren[i].id,
					indices: oldChildren[i].indices,
					streamId: oldChildren[i].streamId,
					index: foundIndex
				});
			}

			// now walk inside those children...
			walkDiffAshNodeTree(oldChildren[i], newChildren[foundIndex], patches);
		} else {
			// node is to be removed...
			patches.push({
				type: PATCH_REMOVE,
				id: oldChildren[i].id,
				indices: oldChildren[i].indices,
				streamId: oldChildren[i].streamId,
			});
		}
	}

	// now iterate over new children, if there are any
	for (let i = 0; i < newChildren.length; i++) {
		let isChildFound = false;

		for (let j = 0; j < oldChildren.length; j++) {
			if (oldChildren[j].key === newChildren[i].key) {
				isChildFound = true;

				break;
			}
		}

		// new child was not found
		if (!isChildFound) {
			patches.push({
				type: PATCH_INSERT,
				node: newChildren[i],
				id: newChildren[i].id,
				indices: newChildren[i].indices,
				parentId: oldAshNode.id,
				parentIndices: oldAshNode.indices,
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
	let differentProperties = false;
	let propertiesToChange = {};
	let propertiesToRemove = [];

	if (newAshNode === null) {
		// node is to be removed...
		patches.push({
			type: PATCH_REMOVE,
			id: oldAshNode.id,
			indices: oldAshNode.indices,
			streamId: oldAshNode.streamId,
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
	for (let newProperty in newAshNode.properties) {
		if (newAshNode.properties.hasOwnProperty(newProperty) && oldAshNode.properties && newAshNode.properties[newProperty] !== oldAshNode.properties[newProperty]) {
			if (typeof newAshNode.properties[newProperty] === 'object' && oldAshNode.properties[newProperty] && typeof oldAshNode.properties[newProperty] === 'object') {
				// which propertie are different or new
				for (let newSubproperty in newAshNode.properties[newProperty]) {
					if (newAshNode.properties[newProperty].hasOwnProperty(newSubproperty) && newAshNode.properties[newProperty][newSubproperty] !== oldAshNode.properties[newProperty][newSubproperty]) {
						propertiesToChange[newProperty] = propertiesToChange[newProperty] || {};
						propertiesToChange[newProperty][newSubproperty] = newAshNode.properties[newProperty][newSubproperty];
						differentProperties = true;
					}
				}

				// which properties are to be removed
				for (let oldSubproperty in oldAshNode.properties[newProperty]) {
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
	for (let oldProperty in oldAshNode.properties) {
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
			propertiesToChange,
			propertiesToRemove
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
export default function diffAshNodeTree(oldAshNodeTree, newAshNodeTree) {
	return walkDiffAshNodeTree(oldAshNodeTree, newAshNodeTree, []);
}
