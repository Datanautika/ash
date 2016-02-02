import constants from '../internals/constants';
import attachEvents from './attachEvents';



const ID_ATTRIBUTE_NAME = constants.ID_ATTRIBUTE_NAME;
const INDEX_ATTRIBUTE_NAME = constants.INDEX_ATTRIBUTE_NAME;
const STREAM_ID_ATTRIBUTE_NAME = constants.STREAM_ID_ATTRIBUTE_NAME;

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

	if (nodeTree.childNodes.length && (!ashNodeTree.children || !ashNodeTree.children.length) || !nodeTree.childNodes.length && (ashNodeTree.children && ashNodeTree.children.length) || ashNodeTree.children && nodeTree.childNodes.length !== ashNodeTree.children.length) {
		return false;
	}

	if (ashNodeTree.children && ashNodeTree.children.length) {
		for (let i = 0; i < ashNodeTree.children.length; i++) {
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
export default function validateNodeTree(nodeTree, ashNodeTree, streamId) {
	let eventsCache = [];
	let isNodeTreeValid = walkValidateNodeTree(nodeTree, ashNodeTree, streamId, eventsCache);

	if (isNodeTreeValid) {
		for (let i = 0; i < eventsCache.length; i++) {
			attachEvents(eventsCache[i].node, eventsCache[i].events);
		}
	}

	return isNodeTreeValid;
}
