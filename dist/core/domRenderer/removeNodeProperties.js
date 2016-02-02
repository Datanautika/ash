'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = removeNodeProperties;

var _detachEvents = require('./detachEvents');

var _detachEvents2 = _interopRequireDefault(_detachEvents);

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ID_ATTRIBUTE_NAME = _constants2.default.ID_ATTRIBUTE_NAME;
var STREAM_ID_ATTRIBUTE_NAME = _constants2.default.STREAM_ID_ATTRIBUTE_NAME;

/**
 * Removes properties from Node.
 *
 * @param {Node} node
 * @param {Object} properties
 */
function removeNodeProperties(node, properties) {
	for (var i = 0; i < properties.length; i++) {
		var props = properties[i].split('.');

		if (props.length === 1) {
			if (props[0] === 'style') {
				node.removeAttribute('style');
			} else if (props[0] === 'className' || props[0] === 'class') {
				if (typeof node.className === 'string') {
					node.className = '';
				} else {
					node.setAttribute('class', '');
				}
			} else if (props[0].substring(0, 6) === 'xlink:') {
				node.removeAttributeNS('http://www.w3.org/1999/xlink', props[0].substring(6));
			} else if (props[0].substring(0, 4) === 'xml:') {
				node.removeAttributeNS('http://www.w3.org/2000/svg', props[0].substring(4));
			} else {
				node.removeAttribute(props[0]);
			}
		} else if (props.length === 2) {
			if (props[0] === 'style') {
				node.style[props[1]] = '';
			} else if (props[0] === 'events') {
				(0, _detachEvents2.default)(node[ID_ATTRIBUTE_NAME], node[STREAM_ID_ATTRIBUTE_NAME], props[1]);
			}
		}
	}
}