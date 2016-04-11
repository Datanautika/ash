import isObject from '../internals/isObject';
import attachEvents from './attachEvents';


/**
 * Sets properties of Node.
 * If the node is newly inserted, `isNewlyInserted` must be set to true, so the node ids aren't overridden during eventual events reindexing.
 *
 * @param {Node} node
 * @param {Object} properties
 * @param {boolean} isNewlyInserted
 */
export default function setNodeProperties(node, properties, isNewlyInserted) {
	for (let prop in properties) {
		if (properties.hasOwnProperty(prop)) {
			if (prop === 'style' && isObject(properties[prop])) {
				for (let style in properties[prop]) {
					if (properties[prop].hasOwnProperty(style)) {
						node.style[style] = properties[prop][style];
					}
				}
			} else if (prop === 'events' && isObject(properties[prop])) {
				attachEvents(node, properties[prop], isNewlyInserted);
			} else if (prop === 'className' || prop === 'class') {
				if (typeof node.className === 'string' && properties[prop]) {
					node.className = properties[prop];
				} else if (typeof node.className === 'string') {
					node.className = '';
				} else if (properties[prop]) {
					node.setAttribute('class', properties[prop]);
				} else {
					node.setAttribute('class', '');
				}
			}	else if (!isObject(properties[prop])) {
				if (prop.substring(0, 6) === 'xlink:') {
					node.setAttributeNS('http://www.w3.org/1999/xlink', prop.substring(6), properties[prop]);
				} else if (prop.substring(0, 4) === 'xml:') {
					node.setAttributeNS('http://www.w3.org/2000/svg', prop.substring(4), properties[prop]);
				} else if (prop === 'checked') {
					node.checked = !!properties[prop];

					if (node.checked) {
						node.setAttribute('checked', 'checked');
					} else {
						node.removeAttribute('checked');
					}
				} else if (prop === 'value') {
					node.value = properties[prop];
					node.setAttribute(prop, properties[prop]);
				} else if (prop !== 'key') {
					node.setAttribute(prop, properties[prop]);
				}
			}
		}
	}

	return node;
}
