'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = createAshElementTree;

var _isAshElement = require('../internals/isAshElement');

var _isAshElement2 = _interopRequireDefault(_isAshElement);

var _isComponentAshElement = require('../internals/isComponentAshElement');

var _isComponentAshElement2 = _interopRequireDefault(_isComponentAshElement);

var _isAshNodeAshElement = require('../internals/isAshNodeAshElement');

var _isAshNodeAshElement2 = _interopRequireDefault(_isAshNodeAshElement);

var _isFunctionAshElement = require('../internals/isFunctionAshElement');

var _isFunctionAshElement2 = _interopRequireDefault(_isFunctionAshElement);

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LIFECYCLE_MOUNTING = _constants2.default.LIFECYCLE_MOUNTING;

/**
 * Walks AshElement tree.
 *
 * @param {AshElement} ashElement
 * @param {AshElement} owner
 * @param {number} index
 */
function walkCreateAshElementTree(ashElement, owner, index) {
	if (!(0, _isComponentAshElement2.default)(owner)) {
		throw new Error(owner + ' must be a Component type AshElement Object');
	}

	var newOwner = owner;

	ashElement.index = index;
	ashElement.owner = owner;
	ashElement.stream = owner.stream;

	if ((0, _isComponentAshElement2.default)(ashElement)) {
		newOwner = ashElement;

		ashElement.instantiate();

		// create child by rendering component
		ashElement.instance.__lifecycle = LIFECYCLE_MOUNTING;
		ashElement.children[0] = ashElement.instance.render(ashElement.instance.props, ashElement.instance.state);
	} else if ((0, _isAshNodeAshElement2.default)(ashElement)) {
		ashElement.instantiate();
	} else if ((0, _isFunctionAshElement2.default)(ashElement)) {
		// create child by running function
		ashElement.children[0] = ashElement.spec(ashElement.args[0]);
	}

	for (var i = 0; i < ashElement.children.length; i++) {
		if (ashElement.children[i]) {
			// set up parent
			ashElement.children[i].parent = ashElement;

			// walk the child
			walkCreateAshElementTree(ashElement.children[i], newOwner, i);
		}
	}
}

/**
 * Creates full AshElement tree, ie. instantiates Specs and calls component render methods.
 *
 * @param {AshElement} ashElement
 * @param {ViewStream} stream
 * @returns {AshElement}
 */
function createAshElementTree(ashElement, stream) {
	if (!(0, _isAshElement2.default)(ashElement)) {
		throw new Error(ashElement + ' (ashElement) must be an AshElement object instance.');
	}

	if (!stream) {
		throw new Error(stream + ' (stream) must be a Stream object instance.');
	}

	var ashElementTree = ashElement;
	var owner = ashElementTree.owner;

	ashElementTree.stream = stream;
	ashElementTree.index = typeof ashElementTree.index === 'undefined' ? 0 : ashElementTree.index;

	if ((0, _isComponentAshElement2.default)(ashElementTree)) {
		owner = ashElementTree;

		ashElementTree.instantiate();

		// create child by rendering component
		ashElementTree.instance.__lifecycle = LIFECYCLE_MOUNTING;
		ashElementTree.children[0] = ashElementTree.instance.render(ashElementTree.instance.props, ashElementTree.instance.state);
	} else if ((0, _isAshNodeAshElement2.default)(ashElementTree)) {
		ashElementTree.instantiate();
	} else if ((0, _isFunctionAshElement2.default)(ashElementTree)) {
		// create child by running function
		ashElementTree.children[0] = ashElementTree.spec(ashElementTree.args[0], null);
	}

	for (var i = 0; i < ashElementTree.children.length; i++) {
		if (ashElementTree.children[i]) {
			// set up a parent
			ashElementTree.children[i].parent = ashElementTree;

			// walk the child
			walkCreateAshElementTree(ashElementTree.children[i], owner, i);
		}
	}

	return ashElementTree;
}