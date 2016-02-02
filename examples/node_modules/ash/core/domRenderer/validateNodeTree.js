'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = validateNodeTree;

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

var _attachEvents = require('./attachEvents');

var _attachEvents2 = _interopRequireDefault(_attachEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ID_ATTRIBUTE_NAME = _constants2.default.ID_ATTRIBUTE_NAME;
var INDEX_ATTRIBUTE_NAME = _constants2.default.INDEX_ATTRIBUTE_NAME;
var STREAM_ID_ATTRIBUTE_NAME = _constants2.default.STREAM_ID_ATTRIBUTE_NAME;

function walkValidateNodeTree(nodeTree, ashNodeTree, streamId, eventsCache) {
	if (nodeTree.tagName && nodeTree.tagName.toLowerCase() !== ashNodeTree.tagName) {
		return false;
	}

	if (nodeTree.getAttribute && nodeTree.getAttribute(ID_ATTRIBUTE_NAME) !== ashNodeTree.id || nodeTree.getAttribute && nodeTree.getAttribute(INDEX_ATTRIBUTE_NAME) >> 0 !== ashNodeTree.index) {
		return false;
	}

	nodeTree[ID_ATTRIBUTE_NAME] = ashNodeTree.id;
	nodeTree[INDEX_ATTRIBUTE_NAME] = ashNodeTree.index;
	nodeTree[STREAM_ID_ATTRIBUTE_NAME] = ashNodeTree.streamId;

	if (ashNodeTree.properties && ashNodeTree.properties.events && typeof ashNodeTree.properties.events === 'object') {
		eventsCache.push({
			events: ashNodeTree.properties.events,
			node: nodeTree
		});
	}

	if (nodeTree.childNodes.length && (!ashNodeTree.children || !ashNodeTree.children.length) || !nodeTree.childNodes.length && ashNodeTree.children && ashNodeTree.children.length || ashNodeTree.children && nodeTree.childNodes.length !== ashNodeTree.children.length) {
		return false;
	}

	if (ashNodeTree.children && ashNodeTree.children.length) {
		for (var i = 0; i < ashNodeTree.children.length; i++) {
			if (!walkValidateNodeTree(nodeTree.childNodes[i], ashNodeTree.children[i], streamId, eventsCache)) {
				return false;
			}
		}
	}

	return true;
}

/**
 * Checks if existing Node tree is valid representation of AshNode tree `ashNodeTree`.
 * If so, events are attached.
 *
 * @param {Node} nodeTree
 * @param {AshNode} ashNodeTree
 * @param {number} streamId
 * @returns {boolean}
 */
function validateNodeTree(nodeTree, ashNodeTree, streamId) {
	var eventsCache = [];
	var isNodeTreeValid = walkValidateNodeTree(nodeTree, ashNodeTree, streamId, eventsCache);

	if (isNodeTreeValid) {
		for (var i = 0; i < eventsCache.length; i++) {
			(0, _attachEvents2.default)(eventsCache[i].node, eventsCache[i].events);
		}
	}

	return isNodeTreeValid;
}