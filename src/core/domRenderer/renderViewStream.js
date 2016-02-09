import createNodeTree from './createNodeTree';
import diffAshNodeTree from './diffAshNodeTree';
import patchNodeTree from './patchNodeTree';
import validateNodeTree from './validateNodeTree';
import constants from '../internals/constants';
import isElement from '../internals/isElement';
import Stream from '../stream/Stream';
import ViewStream from '../view/ViewStream';
import createAshNodeTree from '../view/createAshNodeTree';


const ID_ATTRIBUTE_NAME = constants.ID_ATTRIBUTE_NAME;
const ELEMENT_NODE = 1;

/**
 * Render stream body function.
 *
 * @param {ViewStream} viewStream
 * @param {Stram} renderStream
 */
function render(viewStream, renderStream) {
	let ashElementTree = viewStream.get();
	let ashNodeTree = createAshNodeTree(ashElementTree);

	if (!renderStream.previousAshNodeTree) {
		let isNodeTreeValid = false;
		let isNodeTreeValidated = false;

		renderStream.previousAshNodeTree = ashNodeTree;

		// there are some element nodes?
		if (renderStream.containerNode && renderStream.containerNode.childNodes.length) {
			isNodeTreeValidated = true;
			isNodeTreeValid = validateNodeTree(renderStream.containerNode.childNodes[0], ashNodeTree, viewStream.id);
		}

		// render to the Real DOM, if needed
		if (!isNodeTreeValid || !isNodeTreeValidated) {
			if (isNodeTreeValidated) {
				console.warn('Existing html is invalid!');
			}

			// remove existing nodes
			if (renderStream.containerNode) {
				while (renderStream.containerNode.firstChild) {
					renderStream.containerNode.removeChild(renderStream.containerNode.firstChild);
				}
			}
			
			if (renderStream.containerNode) {
				let nodeTree = createNodeTree(ashNodeTree);

				if (nodeTree) {
					renderStream.containerNode.appendChild(nodeTree);
				}
			}
		}
	} else {
		let patches = diffAshNodeTree(renderStream.previousAshNodeTree, ashNodeTree);
		let isSuccessful = true;

		if (renderStream.containerNode) {
			isSuccessful = patchNodeTree(renderStream.getRootNode(), patches);
		}

		if (!isSuccessful) {
			throw new Error('Patching the DOM was unsuccesful!');
		}

		renderStream.previousAshNodeTree = ashNodeTree;
	}
}

/**
 * Returns root node.
 *
 * @returns {Node|null}
 */
function getRootNode() {
	if (this.containerNode) {
		for (let i = 0; i < this.containerNode.childNodes.length; i++) {
			if (typeof this.containerNode.childNodes[i][ID_ATTRIBUTE_NAME] !== 'undefined') {
				return this.containerNode.childNodes[i];
			}
		}
	}

	return null;
}

/**
 * Renders ViewStream to the Node, if specified.
 *
 * @param {ViewStream} viewStream
 * @param {Node} node
 * @returns {Stream}
 */
export default function renderViewStream(viewStream, node = null) {
	if (!(viewStream instanceof ViewStream)) {
		throw new Error(`${viewStream} (viewStream) must be an ViewStream instance.`);
	}

	if (node && !isElement(node)) {
		throw new Error(`${node} (node) must be a DOM node.`);
	}

	if (node) {
		// remove child nodes which are not element nodes
		for (let j = 0; j < node.childNodes.length; j++) {
			if (node.childNodes[j].nodeType !== ELEMENT_NODE) {
				node.removeChild(node.childNodes[j]);

				j--;
			}
		}
	}

	let stream = new Stream();

	stream.getRootNode = stream::getRootNode;
	stream.containerNode = node;
	stream.previousAshNodeTree = null;

	stream.combine(render, viewStream);

	return stream;
}
