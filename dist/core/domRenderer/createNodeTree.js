'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = createNodeTree;

var _isTextAshNode = require('../internals/isTextAshNode');

var _isTextAshNode2 = _interopRequireDefault(_isTextAshNode);

var _setNodeProperties = require('./setNodeProperties');

var _setNodeProperties2 = _interopRequireDefault(_setNodeProperties);

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ID_ATTRIBUTE_NAME = _constants2.default.ID_ATTRIBUTE_NAME;
var INDEX_ATTRIBUTE_NAME = _constants2.default.INDEX_ATTRIBUTE_NAME;
var STREAM_ID_ATTRIBUTE_NAME = _constants2.default.STREAM_ID_ATTRIBUTE_NAME;

/**
 * Creates Node tree from AshNode tree.
 *
 * @param {AshNode} ashNodeTree
 * @returns {Node}
 */
function createNodeTree(ashNodeTree) {
	var nodeTree = undefined;

	if (!ashNodeTree) {
		return null;
	}

	if ((0, _isTextAshNode2.default)(ashNodeTree)) {
		nodeTree = global.document.createTextNode(ashNodeTree.text);

		nodeTree[ID_ATTRIBUTE_NAME] = ashNodeTree.id;
		nodeTree[INDEX_ATTRIBUTE_NAME] = ashNodeTree.index;
		nodeTree[STREAM_ID_ATTRIBUTE_NAME] = ashNodeTree.streamId;

		return nodeTree;
	}

	// create element
	if ( /*ashNodeTree.tagName === 'a' || */ashNodeTree.tagName === 'altglyph' || ashNodeTree.tagName === 'altglyphdef' || ashNodeTree.tagName === 'altglyphitem' || ashNodeTree.tagName === 'animate' || ashNodeTree.tagName === 'animatecolor' || ashNodeTree.tagName === 'animatemotion' || ashNodeTree.tagName === 'animatetransform' || ashNodeTree.tagName === 'circle' || ashNodeTree.tagName === 'clippath' || ashNodeTree.tagName === 'color-profile' || ashNodeTree.tagName === 'cursor' || ashNodeTree.tagName === 'defs' || ashNodeTree.tagName === 'desc' || ashNodeTree.tagName === 'ellipse' || ashNodeTree.tagName === 'feblend' || ashNodeTree.tagName === 'fecolormatrix' || ashNodeTree.tagName === 'fecomponenttransfer' || ashNodeTree.tagName === 'fecomposite' || ashNodeTree.tagName === 'feconvolvematrix' || ashNodeTree.tagName === 'fediffuselighting' || ashNodeTree.tagName === 'fedisplacementmap' || ashNodeTree.tagName === 'fedistantlight' || ashNodeTree.tagName === 'feflood' || ashNodeTree.tagName === 'fefunca' || ashNodeTree.tagName === 'fefuncb' || ashNodeTree.tagName === 'fefuncg' || ashNodeTree.tagName === 'fefuncr' || ashNodeTree.tagName === 'fegaussianblur' || ashNodeTree.tagName === 'feimage' || ashNodeTree.tagName === 'femerge' || ashNodeTree.tagName === 'femergenode' || ashNodeTree.tagName === 'femorphology' || ashNodeTree.tagName === 'feoffset' || ashNodeTree.tagName === 'fepointlight' || ashNodeTree.tagName === 'fespecularlighting' || ashNodeTree.tagName === 'fespotlight' || ashNodeTree.tagName === 'fetile' || ashNodeTree.tagName === 'feturbulence' || ashNodeTree.tagName === 'filter' || ashNodeTree.tagName === 'font' || ashNodeTree.tagName === 'font-face' || ashNodeTree.tagName === 'font-face-format' || ashNodeTree.tagName === 'font-face-name' || ashNodeTree.tagName === 'font-face-src' || ashNodeTree.tagName === 'font-face-uri' || ashNodeTree.tagName === 'foreignobject' || ashNodeTree.tagName === 'g' || ashNodeTree.tagName === 'glyph' || ashNodeTree.tagName === 'glyphref' || ashNodeTree.tagName === 'hkern' || ashNodeTree.tagName === 'image' || ashNodeTree.tagName === 'line' || ashNodeTree.tagName === 'lineargradient' || ashNodeTree.tagName === 'marker' || ashNodeTree.tagName === 'mask' || ashNodeTree.tagName === 'metadata' || ashNodeTree.tagName === 'missing-glyph' || ashNodeTree.tagName === 'mpath' || ashNodeTree.tagName === 'path' || ashNodeTree.tagName === 'pattern' || ashNodeTree.tagName === 'polygon' || ashNodeTree.tagName === 'polyline' || ashNodeTree.tagName === 'radialgradient' || ashNodeTree.tagName === 'rect' || ashNodeTree.tagName === 'script' || ashNodeTree.tagName === 'set' || ashNodeTree.tagName === 'stop' || ashNodeTree.tagName === 'style' || ashNodeTree.tagName === 'svg' || ashNodeTree.tagName === 'switch' || ashNodeTree.tagName === 'symbol' || ashNodeTree.tagName === 'text' || ashNodeTree.tagName === 'textpath' || ashNodeTree.tagName === 'title' || ashNodeTree.tagName === 'tref' || ashNodeTree.tagName === 'tspan' || ashNodeTree.tagName === 'use' || ashNodeTree.tagName === 'view' || ashNodeTree.tagName === 'vkern') {
		nodeTree = global.document.createElementNS('http://www.w3.org/2000/svg', ashNodeTree.tagName);
	} else {
		nodeTree = global.document.createElement(ashNodeTree.tagName);
	}

	// set properties
	nodeTree[ID_ATTRIBUTE_NAME] = ashNodeTree.id;
	nodeTree[INDEX_ATTRIBUTE_NAME] = ashNodeTree.index;
	nodeTree[STREAM_ID_ATTRIBUTE_NAME] = ashNodeTree.streamId;

	(0, _setNodeProperties2.default)(nodeTree, ashNodeTree.properties, true);

	for (var i = 0; i < ashNodeTree.children.length; i++) {
		var child = createNodeTree(ashNodeTree.children[i]);

		if (child) {
			nodeTree.appendChild(child);
		}
	}

	return nodeTree;
}