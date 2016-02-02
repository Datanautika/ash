'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = patchNodeTree;

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

var _parseAshNodeId = require('./parseAshNodeId');

var _parseAshNodeId2 = _interopRequireDefault(_parseAshNodeId);

var _createNodeTree = require('./createNodeTree');

var _createNodeTree2 = _interopRequireDefault(_createNodeTree);

var _setNodeProperties = require('./setNodeProperties');

var _setNodeProperties2 = _interopRequireDefault(_setNodeProperties);

var _removeNodeProperties = require('./removeNodeProperties');

var _removeNodeProperties2 = _interopRequireDefault(_removeNodeProperties);

var _findNode = require('./findNode');

var _findNode2 = _interopRequireDefault(_findNode);

var _isElement = require('../internals/isElement');

var _isElement2 = _interopRequireDefault(_isElement);

var _detachEvents = require('./detachEvents');

var _detachEvents2 = _interopRequireDefault(_detachEvents);

var _markEvents = require('./markEvents');

var _markEvents2 = _interopRequireDefault(_markEvents);

var _reindexEvents = require('./reindexEvents');

var _reindexEvents2 = _interopRequireDefault(_reindexEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ID_ATTRIBUTE_NAME = _constants2.default.ID_ATTRIBUTE_NAME;
var INDEX_ATTRIBUTE_NAME = _constants2.default.INDEX_ATTRIBUTE_NAME;
var PATCH_ELEMENT_ASH_NODE = _constants2.default.PATCH_ELEMENT_ASH_NODE;
var PATCH_TEXT_ASH_NODE = _constants2.default.PATCH_TEXT_ASH_NODE;
var PATCH_PROPERTIES = _constants2.default.PATCH_PROPERTIES;
var PATCH_ORDER = _constants2.default.PATCH_ORDER;
var PATCH_INSERT = _constants2.default.PATCH_INSERT;
var PATCH_REMOVE = _constants2.default.PATCH_REMOVE;
var INDEX_SEPARATOR = _constants2.default.INDEX_SEPARATOR;

/**
 * Zero pads number.
 *
 * @param {number} number
 * @param {number} length
 * @returns {string}
 */
function zeroPadNumber(number, length) {
	var n = Math.pow(10, length);

	return number < n ? ('' + (n + number)).slice(1) : '' + number;
}

function comparePatches(a, b) {
	return a.sortOrder - b.sortOrder;
}

function nodeIndex() /*node*/{
	var index = 0;
	var node = arguments[0].previousSibling;

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
	var childIndices = undefined;

	for (var i = 0; i < node.childNodes.length; i++) {
		if (node.childNodes[i].nodeType === 1) {
			childIndices = (0, _parseAshNodeId2.default)(node.childNodes[i][ID_ATTRIBUTE_NAME]);
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
	var parentIndices = (0, _parseAshNodeId2.default)(parentNode[ID_ATTRIBUTE_NAME]);
	var level = parentIndices.length - 1;

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
	for (var i = 0; i < reorderCache.length; i++) {
		for (var j = i + 1; j < reorderCache.length; j++) {
			if (reorderCache[j] === reorderCache[i]) {
				reorderCache.splice(j, 1);

				j--;
			}
		}
	}

	while (reorderCache.length > 0) {
		for (var i = 0; i < reorderCache[0].childNodes.length; i++) {
			var index = nodeIndex(reorderCache[0].childNodes[i]);

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
function patchNodeTree(nodeTree /*, patches*/) {
	var patches = arguments[1];
	var node = undefined;
	var reindexCache = [];
	var reorderCache = [];

	if (!(0, _isElement2.default)(nodeTree)) {
		throw new Error('Patching the DOM was unsuccesful!');
	}

	if (!patches.length) {
		return true;
	}

	// compute number of digits of greatest node index
	var maxIndex = 1;

	for (var i = 0; i < patches.length; i++) {
		for (var j = 0; j < patches[i].indices.length; j++) {
			if (maxIndex < patches[i].indices[j]) {
				maxIndex = patches[i].indices[j];
			}
		}
	}

	var maxDigits = patches.maxIndex > 0 ? Math.floor(Math.log(Math.abs(Math.floor(patches.maxIndex))) / Math.LN10) + 1 : 1;

	var ZERO_PADDED_9 = zeroPadNumber(9, maxDigits);
	var ZERO_PADDED_8 = zeroPadNumber(8, maxDigits);
	var ZERO_PADDED_7 = zeroPadNumber(7, maxDigits);
	var ZERO_PADDED_6 = zeroPadNumber(6, maxDigits);
	var ZERO_PADDED_5 = zeroPadNumber(5, maxDigits);
	var ZERO_PADDED_4 = zeroPadNumber(4, maxDigits);
	var ZERO_PADDED_0 = zeroPadNumber(0, maxDigits);

	// compute sort order
	for (var i = 0; i < patches.length; i++) {
		patches[i].sortOrder = '';

		// first we order patches by their levels without the last level
		for (var j = 0; j < patches[i].indices.length - 1; j++) {
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

		// convert to number;
		patches[i].sortOrder = parseInt(patches[i].sortOrder, 10);
	}

	// sort patches by their order
	patches.sort(comparePatches);

	// now iterate over patches...
	var lastLevel = patches[patches.length - 1].indices.length;

	for (var i = patches.length - 1; i >= 0; i--) {
		if (lastLevel < patches[i].indices.length) {
			// patching new level, must flush cache
			flushCache(reindexCache, reorderCache);

			lastLevel = patches[i].indices.length;
		}

		if (patches[i].type === PATCH_ELEMENT_ASH_NODE) {
			// remove old events
			(0, _detachEvents2.default)(patches[i].id, patches[i].streamId);

			// find node
			node = (0, _findNode2.default)(nodeTree, patches[i].id, patches[i].indices);

			if (!node) {
				throw new Error('Patching the DOM was unsuccesful!');
			}

			// new node, but change the order and index - they must be from the node-to-be-removed, because patch for order is separate...
			var newNode = (0, _createNodeTree2.default)(patches[i].node);

			newNode[ID_ATTRIBUTE_NAME] = node[ID_ATTRIBUTE_NAME];
			newNode[INDEX_ATTRIBUTE_NAME] = node[INDEX_ATTRIBUTE_NAME];

			node.parentNode.replaceChild(newNode, node);
		} else if (patches[i].type === PATCH_TEXT_ASH_NODE) {
			node = (0, _findNode2.default)(nodeTree, patches[i].id, patches[i].indices);

			if (!node) {
				throw new Error('Patching the DOM was unsuccesful!');
			}

			node.nodeValue = patches[i].text;
		} else if (patches[i].type === PATCH_PROPERTIES) {
			node = (0, _findNode2.default)(nodeTree, patches[i].id, patches[i].indices);

			if (!node) {
				throw new Error('Patching the DOM was unsuccesful!');
			}

			(0, _setNodeProperties2.default)(node, patches[i].propertiesToChange, false);
			(0, _removeNodeProperties2.default)(node, patches[i].propertiesToRemove);
		} else if (patches[i].type === PATCH_REMOVE) {
			node = (0, _findNode2.default)(nodeTree, patches[i].id, patches[i].indices);

			if (!node) {
				throw new Error('Patching the DOM was unsuccesful!');
			}

			// remove old events
			(0, _detachEvents2.default)(patches[i].id, patches[i].streamId);

			node.parentNode.removeChild(node);
		} else if (patches[i].type === PATCH_INSERT) {
			node = (0, _findNode2.default)(nodeTree, patches[i].parentId, patches[i].parentIndices);

			if (!node) {
				throw new Error('Patching the DOM was unsuccesful!');
			}

			node.appendChild((0, _createNodeTree2.default)(patches[i].node));

			reorderCache.push(node);
		} else if (patches[i].type === PATCH_ORDER) {
			node = (0, _findNode2.default)(nodeTree, patches[i].id, patches[i].indices);

			if (!node) {
				throw new Error('Patching the DOM was unsuccesful!');
			}

			// reindex events
			(0, _reindexEvents2.default)(patches[i].id, patches[i].indices, patches[i].index, patches[i].streamId);

			reindexCache.push({
				node: node,
				newId: patches[i].newId,
				newIndex: patches[i].index,
				streamId: patches[i].streamId
			});

			reorderCache.push(node.parentNode);
		}
	}

	flushCache(reindexCache, reorderCache);
	(0, _markEvents2.default)(patches.streamId);

	return true;
}