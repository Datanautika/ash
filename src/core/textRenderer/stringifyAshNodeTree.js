import isElementAshNode from '../internals/isElementAshNode';
import constants from '../internals/constants';


const ID_ATTRIBUTE_NAME = constants.ID_ATTRIBUTE_NAME;
const INDEX_ATTRIBUTE_NAME = constants.INDEX_ATTRIBUTE_NAME;
const INDEX_SEPARATOR = constants.INDEX_SEPARATOR;

/**
 * Escapes attrobute value.
 *
 * @param {*} s
 * @returns {string}
 */
function escapeAttributeValue(value/*, preserveCR*/) {
	let preserveCR = arguments[1] ? '&#13;' : '\n';

	return ('' + value) // forces the conversion to string
		.replace(/&/g, '&amp;') // this MUST be the 1st replacement
		.replace(/'/g, '&apos;') // The 4 other predefined entities, required
		.replace(/"/g, '&quot;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/\r\n/g, preserveCR) // must be before the next replacement
		.replace(/[\r\n]/g, preserveCR);
}

/**
 * Walks AshNode for stringificaion.
 *
 * @param {AshNode} ashNodeTree
 * @param {number} index
 * @returns {string}
 */
function walkStringifyAshNodeTree(ashNodeTree, index/*, parentId*/) {
	let html = '';
	let openingTag = '<';
	let closingTag = '';
	let content = '';
	let parentId = arguments[2];
	let key1;
	let key2;

	if (isElementAshNode(ashNodeTree)) {
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
			for (let i = 0; i < ashNodeTree.children.length; i++) {
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
export default function stringifyAshNodeTree(ashNodeTree) {
	return walkStringifyAshNodeTree(ashNodeTree, 0, '');
}
