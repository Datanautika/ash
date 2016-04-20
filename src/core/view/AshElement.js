/* eslint-disable prefer-rest-params, complexity */

import constants from '../internals/constants';
import AshNode from './AshNode';
import isAshElement from '../internals/isAshElement';
import iterate from '../internals/iterate';
import Component from './Component';


const ASH_NODE_ASH_ELEMENT = constants.ASH_NODE_ASH_ELEMENT;
const COMPONENT_ASH_ELEMENT = constants.COMPONENT_ASH_ELEMENT;
const FUNCTION_ASH_ELEMENT = constants.FUNCTION_ASH_ELEMENT;

/**
 * AshElement class.
 */
export default class AshElement {
	type = null;
	args = null;
	children = [];
	parent = null;
	owner = null;
	stream = null;

	/**
	 * Creates an AshElement of type `type`.
	 * You generally want to use AshElement.create helper, because it recursively creates children for you.
	 *
	 * @param {string} type
	 * @param {Function} Spec
	 * @param {*} argument1
	 * @param {?*} argument2
	 * @param {?Array<AshElement>=[]} children
	 * @returns {AshElement}
	 */
	constructor(type, Spec) {
		if (type !== COMPONENT_ASH_ELEMENT && type !== ASH_NODE_ASH_ELEMENT && type !== FUNCTION_ASH_ELEMENT) {
			throw new Error(`${type} (type) must be "${COMPONENT_ASH_ELEMENT}", "${FUNCTION_ASH_ELEMENT}" or "${ASH_NODE_ASH_ELEMENT}".`);
		}

		if (typeof Spec !== 'function') {
			throw new Error(`${Spec} (Spec) must be a function.`);
		}

		this.type = type;

		if (this.type === COMPONENT_ASH_ELEMENT) {
			this.Spec = Spec;
			this.isDirty = true;

			/*if (arguments.length >= 3 && typeof arguments[2] !== 'undefined') {
				this.args = [arguments[2]];
			} else {
				this.args = null;
			}*/
			if (arguments.length >= 4 && typeof arguments[2] !== 'undefined' && typeof arguments[3] !== 'undefined') {
				// Two arguments for Component constructor: props and passed children
				this.args = [arguments[2], arguments[3]];
			} else if (arguments.length >= 3 && typeof arguments[2] !== 'undefined') {
				// Only one argument for Component constructor: props
				this.args = [arguments[2]];
			} else {
				this.args = null;
			}
		} else if (this.type === ASH_NODE_ASH_ELEMENT) {
			this.Spec = Spec;

			if (arguments.length >= 4 && typeof arguments[2] !== 'undefined' && typeof arguments[3] !== 'undefined') {
				// Two arguments for AshNode constructor: tagName and props; result will be regular Ash Node
				this.args = [arguments[2], arguments[3]];
			} else if (arguments.length >= 3 && typeof arguments[2] !== 'undefined') {
				// Only one argument for AshNode constructor: tagName; result will be Ash Text Node
				this.args = [arguments[2]];
			} else {
				this.args = null;
			}

			if (arguments.length >= 5 && arguments[4]) {
				this.children = arguments[4];
			}
		} else if (this.type === FUNCTION_ASH_ELEMENT) {
			this.spec = Spec;
			this.isDirty = true;

			/*if (arguments.length >= 3 && typeof arguments[2] !== 'undefined') {
				this.args = [arguments[2]];
			} else {
				this.args = null;
			}*/
			if (arguments.length >= 4 && typeof arguments[2] !== 'undefined' && typeof arguments[3] !== 'undefined') {
				// Two arguments for Component function: props and passed children
				this.args = [arguments[2], arguments[3]];
			} else if (arguments.length >= 3 && typeof arguments[2] !== 'undefined') {
				// Only one argument for Component function: props
				this.args = [arguments[2]];
			} else {
				this.args = null;
			}
		}

		return this;
	}

	/**
	 * Instantiates AshElement instance's spec.
	 *
	 * @returns {Component|AshNode|null}
	 */
	instantiate() {
		if (this.type === COMPONENT_ASH_ELEMENT) {
			if (this.args) {
				this.instance = new this.Spec(this.args[0], this.args[1]);
			} else {
				this.instance = new this.Spec();
			}

			this.instance.__element = this;
		} else if (this.type === ASH_NODE_ASH_ELEMENT) {
			if (this.args) {
				this.instance = new this.Spec(this.args[0], this.args[1]);
			} else {
				this.instance = new this.Spec();
			}
		} else if (this.type === FUNCTION_ASH_ELEMENT) {
			this.instance = null;
		} else {
			throw new Error(`${this} is not a properly typed AshElement object.`);
		}

		return this.instance;
	}

	/**
	 * Creates AshElement instance, with props and children.
	 *
	 * @param {string|Component} tagName
	 * @param {object} props
	 * @param {...AshElement|string|number|Array<AshElement|string|number>} children
	 * @returns {AshElement}
	 */
	/*static create(tagName, props/*, children...*//*) {
		let children = [];

		if (typeof tagName === 'function' && Component.isAncestorOf(tagName)) {
			return new AshElement(COMPONENT_ASH_ELEMENT, tagName, arguments[1]);
		} else if (typeof tagName === 'function') {
			return new AshElement(FUNCTION_ASH_ELEMENT, tagName, arguments[1]);
		} else if (typeof tagName === 'string' && !tagName.length) {
			throw new Error(tagName + ' (tagName) must be non-empty string or Component class.');
		}

		// type check
		if (tagName && arguments.length === 1) {
			// return AshElement <tagName> with no props and no children
			return new AshElement(ASH_NODE_ASH_ELEMENT, AshNode, tagName, null);
		}

		for (let i = 2; i < arguments.length; i++) {
			if (typeof arguments[i] === 'string' || typeof arguments[i] === 'number') {
				children.push(new AshElement(ASH_NODE_ASH_ELEMENT, AshNode, '' + arguments[i]));
			} else if (isAshElement(arguments[i])) {
				children.push(arguments[i]);
			} else if (Array.isArray(arguments[i])) {
				for (let j = 0; j < arguments[i].length; j++) {
					if (typeof arguments[i][j] === 'string' || typeof arguments[i] === 'number') {
						children.push(new AshElement(ASH_NODE_ASH_ELEMENT, AshNode, '' + arguments[i][j]));
					} else if (isAshElement(arguments[i][j])) {
						children.push(arguments[i][j]);
					}
				}
			} else if (arguments[i] && typeof arguments[i].__iterator === 'function' || arguments[i] && typeof global.Symbol === 'function' && typeof arguments[i][global.Symbol.iterator]) {
				let iteratorResult = iterate(arguments[i]);

				for (let j = 0; j < iteratorResult.length; j++) {
					if (typeof iteratorResult[j] === 'string' || typeof iteratorResult === 'number') {
						children.push(new AshElement(ASH_NODE_ASH_ELEMENT, AshNode, '' + iteratorResult[j]));
					} else if (isAshElement(iteratorResult[j])) {
						children.push(iteratorResult[j]);
					}
				}
			}
		}

		return new AshElement(ASH_NODE_ASH_ELEMENT, AshNode, tagName, props, children);
	}*/
	static create(tagName, props/*, children...*/) {
		let children = [];

		for (let i = 2; i < arguments.length; i++) {
			if (typeof arguments[i] === 'string' || typeof arguments[i] === 'number') {
				children.push(new AshElement(ASH_NODE_ASH_ELEMENT, AshNode, `${arguments[i]}`));
			} else if (isAshElement(arguments[i])) {
				children.push(arguments[i]);
			} else if (Array.isArray(arguments[i])) {
				for (let j = 0; j < arguments[i].length; j++) {
					if (typeof arguments[i][j] === 'string' || typeof arguments[i] === 'number') {
						children.push(new AshElement(ASH_NODE_ASH_ELEMENT, AshNode, `${arguments[i][j]}`));
					} else if (isAshElement(arguments[i][j])) {
						children.push(arguments[i][j]);
					}
				}
			} else if (arguments[i] && typeof arguments[i].__iterator === 'function' || arguments[i] && typeof global.Symbol === 'function' && typeof arguments[i][global.Symbol.iterator]) {
				let iteratorResult = iterate(arguments[i]);

				for (let j = 0; j < iteratorResult.length; j++) {
					if (typeof iteratorResult[j] === 'string' || typeof iteratorResult === 'number') {
						children.push(new AshElement(ASH_NODE_ASH_ELEMENT, AshNode, `${iteratorResult[j]}`));
					} else if (isAshElement(iteratorResult[j])) {
						children.push(iteratorResult[j]);
					}
				}
			}
		}

		if (!children.length) {
			children = null;
		}

		if (typeof tagName === 'function' && Component.isAncestorOf(tagName)) {
			return new AshElement(COMPONENT_ASH_ELEMENT, tagName, arguments[1], children);
		} else if (typeof tagName === 'function') {
			return new AshElement(FUNCTION_ASH_ELEMENT, tagName, arguments[1], children);
		} else if (typeof tagName === 'string' && !tagName.length) {
			throw new Error(`${tagName} (tagName) must be non-empty string or Component class.`);
		}

		// type check
		if (tagName && arguments.length === 1) {
			// return AshElement <tagName> with no props and no children
			return new AshElement(ASH_NODE_ASH_ELEMENT, AshNode, tagName, null);
		}

		return new AshElement(ASH_NODE_ASH_ELEMENT, AshNode, tagName, props, children);
	}
}
