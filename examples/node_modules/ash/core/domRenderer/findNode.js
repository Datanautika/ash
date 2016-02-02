'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = findNode;

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ID_ATTRIBUTE_NAME = _constants2.default.ID_ATTRIBUTE_NAME;

/**
 * Finds node in Node tree that has specified id and indices.
 *
 * @param {Node} nodeTree
 * @param {string} nodeId
 * @param {Array} ashNodeIndices
 * @returns {Node|boolean}
 */
function findNode(nodeTree, nodeId, ashNodeIndices) {
	var node = nodeTree;

	if (!nodeTree) {
		throw new Error(nodeTree + ' cannot be falsy.');
	}

	if (ashNodeIndices.length === 1) {
		return node;
	} else {
		for (var i = 1, length = ashNodeIndices.length - 1; i < length; i++) {
			if (!node) {
				return false;
			}

			node = node.childNodes[ashNodeIndices[i]];
		}
	}

	for (var i = 0, length = node.childNodes.length; i < length; i++) {
		if (node.childNodes[i].nodeType === 1 && node.childNodes[i][ID_ATTRIBUTE_NAME] === nodeId) {
			return node.childNodes[i];
		} else if (node.childNodes[i].nodeType === 3 && i === ashNodeIndices[ashNodeIndices.length - 1]) {
			return node.childNodes[i];
		}
	}

	return false;
}