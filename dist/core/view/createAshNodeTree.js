'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = createAshNodeTree;

var _isComponentAshElement = require('../internals/isComponentAshElement');

var _isComponentAshElement2 = _interopRequireDefault(_isComponentAshElement);

var _isAshNodeAshElement = require('../internals/isAshNodeAshElement');

var _isAshNodeAshElement2 = _interopRequireDefault(_isAshNodeAshElement);

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INDEX_SEPARATOR = _constants2.default.INDEX_SEPARATOR;

/**
 * Walks AshNode tree.
 *
 * @param {AshNode} ashNodeTree
 * @param {AshElement} ashElement
 * @param {number} index
 * @param {string} parentId
 * @param {boolean} isParentComponentDirty
 * @param {Array<number>} parentIndices
 */
function walkCreateAshNodeTree(ashNodeTree, ashElement, index, parentId, isParentComponentDirty, parentIndices) {
	if ((0, _isAshNodeAshElement2.default)(ashElement)) {
		if (isParentComponentDirty) {

			ashElement.instantiate();

			ashElement.instance.id = parentId + INDEX_SEPARATOR + index;
			ashElement.instance.index = index;
			ashElement.instance.indices = parentIndices.concat(index);
			ashElement.instance.streamId = ashElement.stream.id;
			ashElement.instance.isDirty = true;
			ashElement.instance.parent = ashNodeTree;

			ashNodeTree.children[ashElement.instance.index] = ashElement.instance;
		} else {
			ashElement.instance.isDirty = false;
			ashElement.instance.parent = ashNodeTree;

			if (ashNodeTree.oldChildren && ashElement.instance.index === 0) {
				ashNodeTree.oldChildren = null;
			}

			if (ashNodeTree.children[ashElement.instance.index] !== ashElement.instance) {
				ashNodeTree.children[ashElement.instance.index] = ashElement.instance;
			}
		}

		// walk the children
		for (var i = 0; i < ashElement.children.length; i++) {
			walkCreateAshNodeTree(ashNodeTree.children[ashElement.instance.index], ashElement.children[i], i, ashNodeTree.children[ashElement.instance.index].id, isParentComponentDirty, ashNodeTree.children[ashElement.instance.index].indices);
		}
	} else if (ashElement && ashElement.children[0]) {
		var isDirty = ashElement.isDirty;

		if (index === 0 && !isParentComponentDirty) {
			if (isDirty) {
				ashNodeTree.oldChildren = ashNodeTree.children;
				ashNodeTree.children = [];
			} else {
				ashNodeTree.oldChildren = null;
			}
		} else if (!isParentComponentDirty) {
			if (isDirty && !ashNodeTree.oldChildren) {
				ashNodeTree.oldChildren = ashNodeTree.children;
				ashNodeTree.children = [];

				// copy not dirty already walked children
				for (var _i = 0; _i < index; _i++) {
					ashNodeTree.children[_i] = ashNodeTree.oldChildren[_i];
				}
			}
		}

		ashElement.isDirty = false;

		walkCreateAshNodeTree(ashNodeTree, ashElement.children[0], index, parentId, isDirty, parentIndices);
	}
}

/**
 * Creates AshNode tree from AshElement tree.
 *
 * @param {AshElement} componentAshElement
 * @returns {AshNode|null}
 */
function createAshNodeTree(componentAshElement) {
	if (!(0, _isComponentAshElement2.default)(componentAshElement)) {
		throw new Error(componentAshElement + ' (componentAshElement) must be a Component Ash Element object instance.');
	}

	var ashElement = componentAshElement;
	var ashNodeTree = undefined;
	var isDirty = ashElement.isDirty;

	ashElement.isDirty = false;

	// find first children which is ash node ash element
	while (!(0, _isAshNodeAshElement2.default)(ashElement) && ashElement && ashElement.children && ashElement.children.length) {
		ashElement = ashElement.children[0];
	}

	if (!ashElement || (0, _isComponentAshElement2.default)(ashElement) && !ashElement.children.length) {
		return null;
	}

	if (isDirty) {
		ashElement.instantiate();

		ashElement.instance.isDirty = true;
	} else {
		ashElement.instance.isDirty = false;
	}

	ashElement.instance.id = '0';
	ashElement.instance.index = 0;
	ashElement.instance.indices = [0];
	ashElement.instance.streamId = ashElement.stream.id;
	ashElement.instance.parent = null;
	ashNodeTree = ashElement.instance;

	// walk the children
	for (var i = 0; i < ashElement.children.length; i++) {
		walkCreateAshNodeTree(ashNodeTree, ashElement.children[i], i, ashNodeTree.id, isDirty, ashNodeTree.indices);
	}

	return ashNodeTree;
}