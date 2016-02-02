import detachEvents from './detachEvents';
import constants from '../internals/constants';


const ID_ATTRIBUTE_NAME = constants.ID_ATTRIBUTE_NAME;
const STREAM_ID_ATTRIBUTE_NAME = constants.STREAM_ID_ATTRIBUTE_NAME;

/**
 * Removes properties from Node.
 *
 * @param {Node} node
 * @param {Object} properties
 */
export default function removeNodeProperties(node, properties) {
	for (let i = 0; i < properties.length; i++) {
		let props = properties[i].split('.');

		if (props.length === 1) {
			if (props[0] === 'style') {
				node.removeAttribute('style');
			}	else if (props[0] === 'className' || props[0] === 'class') {
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
				detachEvents(node[ID_ATTRIBUTE_NAME], node[STREAM_ID_ATTRIBUTE_NAME], props[1]);
			}
		}
	}
}
