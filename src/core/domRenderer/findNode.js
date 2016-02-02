import constants from '../internals/constants';


const ID_ATTRIBUTE_NAME = constants.ID_ATTRIBUTE_NAME;

/**
 * Finds node in Node tree that has specified id and indices.
 *
 * @param {Node} nodeTree
 * @param {string} nodeId
 * @param {Array} ashNodeIndices
 * @returns {Node|boolean}
 */
export default function findNode(nodeTree, nodeId, ashNodeIndices) {
	let node = nodeTree;

	if (!nodeTree) {
		throw new Error(nodeTree + ' cannot be falsy.');
	}

	if (ashNodeIndices.length === 1) {
		return node;
	} else {
		for (let i = 1, length = ashNodeIndices.length - 1; i < length; i++) {
			if (!node) {
				return false;
			}

			node = node.childNodes[ashNodeIndices[i]];
		}
	}
	
	for (let i = 0, length = node.childNodes.length; i < length; i++) {
		if (node.childNodes[i].nodeType === 1 && node.childNodes[i][ID_ATTRIBUTE_NAME] === nodeId) {
			return node.childNodes[i];
		} else if (node.childNodes[i].nodeType === 3 && i === ashNodeIndices[ashNodeIndices.length - 1]) {
			return node.childNodes[i];
		}
	}

	return false;
}
