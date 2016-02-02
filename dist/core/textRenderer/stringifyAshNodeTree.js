'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = stringifyAshNodeTree;

var _isElementAshNode = require('../internals/isElementAshNode');

var _isElementAshNode2 = _interopRequireDefault(_isElementAshNode);

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ID_ATTRIBUTE_NAME = _constants2.default.ID_ATTRIBUTE_NAME;
var INDEX_ATTRIBUTE_NAME = _constants2.default.INDEX_ATTRIBUTE_NAME;
var INDEX_SEPARATOR = _constants2.default.INDEX_SEPARATOR;

/**
 * Escapes attrobute value.
 *
 * @param {*} s
 * @returns {string}
 */
function escapeAttributeValue(value /*, preserveCR*/) {
	var preserveCR = arguments[1] ? '&#13;' : '\n';

	return ('' + value). // forces the conversion to string
	replace(/&/g, '&amp;') // this MUST be the 1st replacement
	.replace(/'/g, '&apos;') // The 4 other predefined entities, required
	.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r\n/g, preserveCR) // must be before the next replacement
	.replace(/[\r\n]/g, preserveCR);
}

/**
 * Walks AshNode for stringificaion.
 *
 * @param {AshNode} ashNodeTree
 * @param {number} index
 * @returns {string}
 */
function walkStringifyAshNodeTree(ashNodeTree, index /*, parentId*/) {
	var html = '';
	var openingTag = '<';
	var closingTag = '';
	var content = '';
	var parentId = arguments[2];
	var key1 = undefined;
	var key2 = undefined;

	if ((0, _isElementAshNode2.default)(ashNodeTree)) {
		openingTag += ashNodeTree.tagName;
		closingTag = '</' + ashNodeTree.tagName + '>';

		if (parentId) {
			openingTag += ' ' + ID_ATTRIBUTE_NAME + '="' + parentId + INDEX_SEPARATOR + index + '"';
			openingTag += ' ' + INDEX_ATTRIBUTE_NAME + '="' + index + '"';
			parentId = parentId + INDEX_SEPARATOR + index;
		} else {
			openingTag += ' ' + ID_ATTRIBUTE_NAME + '="' + index + '"';
			openingTag += ' ' + INDEX_ATTRIBUTE_NAME + '="' + index + '"';
			parentId = '' + index;
		}

		if (ashNodeTree.properties) {
			for (key1 in ashNodeTree.properties) {
				if (ashNodeTree.properties.hasOwnProperty(key1) && key1 !== 'events') {
					if (key1 === 'style') {
						openingTag += ' style="';

						// add style definitions
						for (key2 in ashNodeTree.properties.style) {
							if (ashNodeTree.properties.style.hasOwnProperty(key2)) {
								if (typeof ashNodeTree.properties.style[key2] === 'string') {
									openingTag += key2 + ':' + ashNodeTree.properties.style[key2] + ';';
								}
							}
						}

						openingTag += '"';
					} else if (typeof ashNodeTree.properties[key1] === 'string') {
						if (key1.toLowerCase() === 'classname') {
							openingTag += ' class="' + escapeAttributeValue(ashNodeTree.properties[key1]) + '"';
						} else {
							openingTag += ' ' + key1 + '="' + escapeAttributeValue(ashNodeTree.properties[key1]) + '"';
						}
					} else if (typeof ashNodeTree.properties[key1] === 'boolean') {
						openingTag += ' ' + key1;
					} else if (typeof ashNodeTree.properties[key1] === 'number') {
						openingTag += ' ' + key1 + '="' + ashNodeTree.properties[key1] + '"';
					}
				}
			}
		}

		openingTag += '>';

		if (ashNodeTree.children && ashNodeTree.children.length) {
			for (var i = 0; i < ashNodeTree.children.length; i++) {
				content += walkStringifyAshNodeTree(ashNodeTree.children[i], i, parentId);
			}
		}

		html = openingTag + content + closingTag;
	} else {
		html = ashNodeTree.text;
	}

	return html;
}

/**
 * Outputs string html representation of AshNode tree.
 *
 * @param {AshNode} ashNodeTree
 * @returns {string}
 */
function stringifyAshNodeTree(ashNodeTree) {
	return walkStringifyAshNodeTree(ashNodeTree, 0, '');
}