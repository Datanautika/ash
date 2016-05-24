import constants from '../internals/constants';


const ELEMENT_ASH_NODE = constants.ELEMENT_ASH_NODE;
const TEXT_ASH_NODE = constants.TEXT_ASH_NODE;

/**
 * AshNode class.
 */
export default class AshNode {
	type = null;
	id = null;
	index = null;
	indices = null;
	parent = null;

	/**
	 * Creates an AshNode; if only `tagName` is provided, text AshNode is created.
	 *
	 * @param {string} tagName
	 * @param {?Object} properties
	 * @returns {AshNode}
	 */
	constructor(tagName, properties) {
		if (properties !== undefined) {
			this.type = ELEMENT_ASH_NODE;
			this.tagName = tagName;
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
	}
}
