import constants from '../internals/constants';
import parseAshNodeId from './parseAshNodeId';
import createNodeTree from './createNodeTree';
import setNodeProperties from './setNodeProperties';
import removeNodeProperties from './removeNodeProperties';
import findNode from './findNode';
import isElement from '../internals/isElement';
import detachEvents from './detachEvents';
import markEvents from './markEvents';
import reindexEvents from './reindexEvents';


const ID_ATTRIBUTE_NAME = constants.ID_ATTRIBUTE_NAME;
const INDEX_ATTRIBUTE_NAME = constants.INDEX_ATTRIBUTE_NAME;
const PATCH_ELEMENT_ASH_NODE = constants.PATCH_ELEMENT_ASH_NODE;
const PATCH_TEXT_ASH_NODE = constants.PATCH_TEXT_ASH_NODE;
const PATCH_PROPERTIES = constants.PATCH_PROPERTIES;
const PATCH_ORDER = constants.PATCH_ORDER;
const PATCH_INSERT = constants.PATCH_INSERT;
const PATCH_REMOVE = constants.PATCH_REMOVE;
const INDEX_SEPARATOR = constants.INDEX_SEPARATOR;

/**
 * Zero pads number.
 *
 * @param {number} number
 * @param {number} length
 * @returns {string}
 */
function zeroPadNumber(number, length) {
	let n = Math.pow(10, length);

	return number < n ? ('' + (n + number)).slice(1) : '' + number;
}

function comparePatches(a, b) {
	if (a.sortOrder > b.sortOrder) {
		return 1;
	} else if (a.sortOrder < b.sortOrder) {
		return -1;
	}

	return 0;
}

function nodeIndex(/*node*/) {
	let index = 0;
	let node = arguments[0].previousSibling;

	while (node) {
		index++;

		node = node.previousSibling;
	}

	return index;
}

/**
 * Walks nodes for reindexing.
 *
 * @param {Node} node
 * @param {number} level
 * @param {number} newIndex
 */
function walkReindexChildNodes(node, level, newIndex) {
	let childIndices;

	for (let i = 0; i < node.childNodes.length; i++) {
		if (node.childNodes[i].nodeType === 1) {
			childIndices = parseAshNodeId(node.childNodes[i][ID_ATTRIBUTE_NAME]);
			childIndices[level] = newIndex;
			node.childNodes[i][ID_ATTRIBUTE_NAME] = childIndices.join(INDEX_SEPARATOR);
			node.childNodes[i][INDEX_ATTRIBUTE_NAME] = childIndices[childIndices.length - 1];

			if (node.childNodes[i].childNodes && node.childNodes[i].childNodes.length) {
				walkReindexChildNodes(node.childNodes[i], level, newIndex);
			}
		}
	}
}

/**
 * Reindexes node and its children.
 *
 * @param {Node} parentNode
 * @param {number} newIndex
 */
function reindexChildNodes(parentNode, newIndex) {
	let parentIndices = parseAshNodeId(parentNode[ID_ATTRIBUTE_NAME]);
	let level = parentIndices.length - 1;

	walkReindexChildNodes(parentNode, level, newIndex);
}

/**
 * Flushes node reindex and reorder caches.
 *
 * @param {Array} reindexCache
 * @param {Array} reorderCache
 */
function flushCache(reindexCache, reorderCache) {
	while (reindexCache.length > 0) {
		reindexCache[0].node[ID_ATTRIBUTE_NAME] = reindexCache[0].newId;
		reindexCache[0].node[INDEX_ATTRIBUTE_NAME] = reindexCache[0].newIndex;

		reindexChildNodes(reindexCache[0].node, reindexCache[0].newIndex);

		// clear the cache
		reindexCache.shift();
	}

	// remove un-unique nodes from reorder cache
	for (let i = 0; i < reorderCache.length; i++) {
		for (let j = i + 1; j < reorderCache.length; j++) {
			if (reorderCache[j] === reorderCache[i]) {
				reorderCache.splice(j, 1);

				j--;
			}
		}
	}

	while (reorderCache.length > 0) {
		for (let i = 0; i < reorderCache[0].childNodes.length; i++) {
			let index = nodeIndex(reorderCache[0].childNodes[i]);
			
			if (index === reorderCache[0].childNodes[i][INDEX_ATTRIBUTE_NAME] || index + 1 === reorderCache[0].childNodes[i][INDEX_ATTRIBUTE_NAME]) {
				continue;
			} else {
				if (reorderCache[0].childNodes[i][INDEX_ATTRIBUTE_NAME] > reorderCache[0].childNodes[i].length - 1) {
					reorderCache[0].appendChild(reorderCache[0].childNodes[i]);
				} else {
					reorderCache[0].insertBefore(reorderCache[0].childNodes[i], reorderCache[0].childNodes[reorderCache[0].childNodes[i][INDEX_ATTRIBUTE_NAME]]);
				}

				if (index + 1 < reorderCache[0].childNodes[i][INDEX_ATTRIBUTE_NAME]) {
					i--;
				}
			}
		}

		// remove cache item
		reorderCache.shift();
	}
}

/**
 * Patches Node tree.
 * Returns `true` if successful.
 *
 * @param {Node} nodeTree
 * @param {Array<Object>} patches
 * @returns {boolean}
 */
export default function patchNodeTree(nodeTree /*, patches*/) {
	let patches = arguments[1];
	let node;
	let reindexCache = [];
	let reorderCache = [];

	if (!isElement(nodeTree)) {
		throw new Error('Patching the DOM was unsuccesful!');
	}

	if (!patches.length) {
		return true;
	}

	// compute number of digits of greatest node index
	let maxIndex = 1;

	for (let i = 0; i < patches.length; i++) {
		for (let j = 0; j < patches[i].indices.length; j++) {
			if (maxIndex < patches[i].indices[j]) {
				maxIndex = patches[i].indices[j];
			}
		}
	}

	let maxDigits = maxIndex > 0 ? Math.floor(Math.log(Math.abs(Math.floor(maxIndex))) / Math.LN10) + 1 : 1;

	const ZERO_PADDED_9 = zeroPadNumber(9, maxDigits);
	const ZERO_PADDED_8 = zeroPadNumber(8, maxDigits);
	const ZERO_PADDED_7 = zeroPadNumber(7, maxDigits);
	const ZERO_PADDED_6 = zeroPadNumber(6, maxDigits);
	const ZERO_PADDED_5 = zeroPadNumber(5, maxDigits);
	const ZERO_PADDED_4 = zeroPadNumber(4, maxDigits);
	const ZERO_PADDED_0 = zeroPadNumber(0, maxDigits);

	let sortOrderLength = 0;

	// compute sort order
	for (let i = 0; i < patches.length; i++) {
		patches[i].sortOrder = '';

		// first we order patches by their levels without the last level
		for (let j = 0; j < patches[i].indices.length - 1; j++) {
			patches[i].sortOrder += zeroPadNumber(patches[i].indices[j], maxDigits);
		}

		// then the patch type is important
		if (patches[i].type === PATCH_ELEMENT_ASH_NODE) {
			patches[i].sortOrder += ZERO_PADDED_9;
		} else if (patches[i].type === PATCH_TEXT_ASH_NODE) {
			patches[i].sortOrder += ZERO_PADDED_8;
		} else if (patches[i].type === PATCH_PROPERTIES) {
			patches[i].sortOrder += ZERO_PADDED_7;
		} else if (patches[i].type === PATCH_REMOVE) {
			patches[i].sortOrder += ZERO_PADDED_6;
		} else if (patches[i].type === PATCH_INSERT) {
			patches[i].sortOrder += ZERO_PADDED_5;
		} else if (patches[i].type === PATCH_ORDER) {
			patches[i].sortOrder += ZERO_PADDED_4;
		} else {
			patches[i].sortOrder += ZERO_PADDED_0;
		}

		// and now the last level
		patches[i].sortOrder += zeroPadNumber(patches[i].indices[patches[i].indices.length - 1], maxDigits);

		// determine max length of sorting string
		if (sortOrderLength < patches[i].sortOrder.length) {
			sortOrderLength = patches[i].sortOrder.length;
		}
	}

	// pad the string
	for (let i = 0; i < patches.length; i++) {
		if (sortOrderLength - patches[i].sortOrder.length + 1 > 0) {
			patches[i].sortOrder = Array(sortOrderLength - patches[i].sortOrder.length + 1).join('0').concat(patches[i].sortOrder);
		}
	}
	
	// sort patches by their order
	patches.sort(comparePatches);

	// now iterate over patches...
	let lastLevel = patches[patches.length - 1].indices.length;

	for (let i = patches.length - 1; i >= 0; i--) {
		if (lastLevel < patches[i].indices.length) {
			// patching new level, must flush cache
			flushCache(reindexCache, reorderCache);

			lastLevel = patches[i].indices.length;
		}

		if (patches[i].type === PATCH_ELEMENT_ASH_NODE) {
			// remove old events
			detachEvents(patches[i].id, patches[i].streamId);

			// find node
			node = findNode(nodeTree, patches[i].id, patches[i].indices);

			if (!node) {
				throw new Error('Patching the DOM was unsuccesful!');
			}

			// new node, but change the order and index - they must be from the node-to-be-removed, because patch for order is separate...
			let newNode = createNodeTree(patches[i].node);

			newNode[ID_ATTRIBUTE_NAME] = node[ID_ATTRIBUTE_NAME];
			newNode[INDEX_ATTRIBUTE_NAME] = node[INDEX_ATTRIBUTE_NAME];

			node.parentNode.replaceChild(newNode, node);
		} else if (patches[i].type === PATCH_TEXT_ASH_NODE) {
			node = findNode(nodeTree, patches[i].id, patches[i].indices);

			if (!node) {
				throw new Error('Patching the DOM was unsuccesful!');
			}

			node.nodeValue = patches[i].text;
		} else if (patches[i].type === PATCH_PROPERTIES) {
			node = findNode(nodeTree, patches[i].id, patches[i].indices);

			if (!node) {
				throw new Error('Patching the DOM was unsuccesful!');
			}

			setNodeProperties(node, patches[i].propertiesToChange, false);
			removeNodeProperties(node, patches[i].propertiesToRemove);
		} else if (patches[i].type === PATCH_REMOVE) {
			node = findNode(nodeTree, patches[i].id, patches[i].indices);

			if (!node) {
				throw new Error('Patching the DOM was unsuccesful!');
			}

			// remove old events
			detachEvents(patches[i].id, patches[i].streamId);

			node.parentNode.removeChild(node);
		} else if (patches[i].type === PATCH_INSERT) {
			node = findNode(nodeTree, patches[i].parentId, patches[i].parentIndices);

			if (!node) {
				throw new Error('Patching the DOM was unsuccesful!');
			}
			
			node.appendChild(createNodeTree(patches[i].node));

			reorderCache.push(node);
		} else if (patches[i].type === PATCH_ORDER) {
			node = findNode(nodeTree, patches[i].id, patches[i].indices);

			if (!node) {
				throw new Error('Patching the DOM was unsuccesful!');
			}

			// reindex events
			reindexEvents(patches[i].id, patches[i].indices, patches[i].index, patches[i].streamId);

			reindexCache.push({
				node,
				newId: patches[i].newId,
				newIndex: patches[i].index,
				streamId: patches[i].streamId
			});

			reorderCache.push(node.parentNode);
		}
	}

	flushCache(reindexCache, reorderCache);
	markEvents(patches.streamId);

	return true;
}
