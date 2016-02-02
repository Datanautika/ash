'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ELEMENT_ASH_NODE = _constants2.default.ELEMENT_ASH_NODE;
var TEXT_ASH_NODE = _constants2.default.TEXT_ASH_NODE;

/**
 * AshNode class.
 */

var AshNode =

/**
 * Creates an AshNode; if only `tagName` is provided, text AshNode is created.
 *
 * @param {string} tagName
 * @param {?Object} properties
 * @returns {AshNode}
 */
function AshNode(tagName, properties) {
	_classCallCheck(this, AshNode);

	this.type = null;
	this.id = null;
	this.index = null;
	this.indices = null;
	this.parent = null;

	if (properties !== undefined) {
		this.type = ELEMENT_ASH_NODE;
		this.tagName = tagName.toLowerCase();
		this.properties = properties || {};
		this.key = null;
		this.children = [];

		if (typeof this.properties.key === 'string' || typeof this.properties.key === 'number') {
			this.key = '' + this.properties.key;
		}
	} else {
		this.type = TEXT_ASH_NODE;
		this.text = tagName;
	}

	return this;
};

exports.default = AshNode;