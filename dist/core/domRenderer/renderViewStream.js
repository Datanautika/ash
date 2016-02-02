'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = renderViewStream;

var _createNodeTree = require('./createNodeTree');

var _createNodeTree2 = _interopRequireDefault(_createNodeTree);

var _diffAshNodeTree = require('./diffAshNodeTree');

var _diffAshNodeTree2 = _interopRequireDefault(_diffAshNodeTree);

var _patchNodeTree = require('./patchNodeTree');

var _patchNodeTree2 = _interopRequireDefault(_patchNodeTree);

var _validateNodeTree = require('./validateNodeTree');

var _validateNodeTree2 = _interopRequireDefault(_validateNodeTree);

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

var _isElement = require('../internals/isElement');

var _isElement2 = _interopRequireDefault(_isElement);

var _Stream = require('../stream/Stream');

var _Stream2 = _interopRequireDefault(_Stream);

var _ViewStream = require('../view/ViewStream');

var _ViewStream2 = _interopRequireDefault(_ViewStream);

var _createAshNodeTree = require('../view/createAshNodeTree');

var _createAshNodeTree2 = _interopRequireDefault(_createAshNodeTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ID_ATTRIBUTE_NAME = _constants2.default.ID_ATTRIBUTE_NAME;
var ELEMENT_NODE = 1;

/**
 * Render stream body function.
 *
 * @param {ViewStream} viewStream
 * @param {Stram} renderStream
 */
function render(viewStream, renderStream) {
	var ashElementTree = viewStream.get();
	var ashNodeTree = (0, _createAshNodeTree2.default)(ashElementTree);

	if (!renderStream.previousAshNodeTree) {
		var isNodeTreeValid = false;
		var isNodeTreeValidated = false;

		renderStream.previousAshNodeTree = ashNodeTree;

		// there are some element nodes?
		if (renderStream.containerNode && renderStream.containerNode.childNodes.length) {
			isNodeTreeValidated = true;
			isNodeTreeValid = (0, _validateNodeTree2.default)(renderStream.containerNode.childNodes[0], ashNodeTree, viewStream.id);
		}

		// render to the Real DOM, if needed
		if (!isNodeTreeValid || !isNodeTreeValidated) {
			if (isNodeTreeValidated) {
				throw new Error('Existing html is invalid!');
			}

			// remove existing nodes
			if (renderStream.containerNode) {
				while (renderStream.containerNode.firstChild) {
					renderStream.containerNode.removeChild(renderStream.containerNode.firstChild);
				}
			}

			if (renderStream.containerNode) {
				var nodeTree = (0, _createNodeTree2.default)(ashNodeTree);

				if (nodeTree) {
					renderStream.containerNode.appendChild(nodeTree);
				}
			}
		}
	} else {
		var patches = (0, _diffAshNodeTree2.default)(renderStream.previousAshNodeTree, ashNodeTree);
		var isSuccessful = true;

		if (renderStream.containerNode) {
			isSuccessful = (0, _patchNodeTree2.default)(renderStream.getRootNode(), patches);
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
		for (var i = 0; i < this.containerNode.childNodes.length; i++) {
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
function renderViewStream(viewStream) {
	var node = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	if (!(viewStream instanceof _ViewStream2.default)) {
		throw new Error(viewStream + ' (viewStream) must be an ViewStream instance.');
	}

	if (node && !(0, _isElement2.default)(node)) {
		throw new Error(node + ' (node) must be a DOM node.');
	}

	if (node) {
		// remove child nodes which are not element nodes
		for (var j = 0; j < node.childNodes.length; j++) {
			if (node.childNodes[j].nodeType !== ELEMENT_NODE) {
				node.removeChild(node.childNodes[j]);

				j--;
			}
		}
	}

	var stream = new _Stream2.default();

	stream.getRootNode = getRootNode.bind(stream);
	stream.containerNode = node;
	stream.previousAshNodeTree = null;

	stream.combine(render, viewStream);

	return stream;
}