import isAshNodeAshElement from '../internals/isAshNodeAshElement';
import constants from '../internals/constants';
import assign from '../internals/assign';
import findNode from '../domRenderer/findNode';
import isFunction from '../internals/isFunction';
import isAncestor from '../utils/isAncestor';
import Stream from '../stream/Stream';


const LIFECYCLE_UNMOUNTED = constants.LIFECYCLE_UNMOUNTED;
const LIFECYCLE_MOUNTING = constants.LIFECYCLE_MOUNTING;
const LIFECYCLE_MOUNTED = constants.LIFECYCLE_MOUNTED;
const LIFECYCLE_UNINITIALIZED = constants.LIFECYCLE_UNINITIALIZED;

/**
 * Component class. You generally extend this class, but you don't instatiate those custom components; instead, you pass them class as a parameter of createElement function.
 * During component instantiation, a) static component class properties which are instances of Stream, are copied onto the component instance, and b) all component class methods are bound to the component instance.
 *
 * @example
 * class Foo extends ash.Component {
 * 	static clickStream = new ash.Stream();
 *
 * 	render() {
 * 		return ash.createElement('div', {events: {click: this.handleClick}});
 * 	}
 *
 * 	handleClick(event) {
 * 		// this is always bound to to Foo instance
 * 		// this.clickStream refers to Foo.clickStream
 * 		this.clickStream.push(event);
 * 	}
 * }
 *
 * createElement(Foo);
 */
export default class Component {
	__element = null;
	__previousLifecycle = LIFECYCLE_UNINITIALIZED;
	__currentLifecycle = LIFECYCLE_UNMOUNTED;
	props = null;
	state = null;

	/**
	 * Creates a component with props of `props`.
	 * You generally don't create components instances, you just use them as AshElement Spec.
	 *
	 * @param {Object} props
	 * @returns {Component}
	 */
	constructor(props) {
		this.update = ::this.update;

		// autobind methods
		let prototype = Object.getPrototypeOf(this);

		Object.getOwnPropertyNames(prototype).forEach((value) => {
			let descriptor = Object.getOwnPropertyDescriptor(prototype, value);

			// typeof must be used to avoid executing getter and setters
			if (!(descriptor && (typeof descriptor.get !== 'undefined' || typeof descriptor.set !== 'undefined')) && isFunction(this[value]) && value !== 'constructor') {
				this[value] = ::this[value];
			}
		});

		if (this.constructor.props) {
			this.props = assign({}, this.constructor.props, props);
		} else if (props) {
			this.props = props;
		}

		// references to the component streams
		Object.getOwnPropertyNames(this.constructor).filter((value) => value !== 'caller' && value !== 'callee' && value !== 'arguments').forEach((value) => {
			if (this.constructor[value] instanceof Stream && !this[value]) {
				this[value] = this.constructor[value];
			}
		});

		this.onInitialize();
	}

	/**
	 * Returns true, if Component class is ancestor of {value}, or if value is Component class.
	 *
	 * @param {object} value
	 * @returns {boolean}
	 */
	static isAncestorOf(value) {
		return isAncestor(Component, value);
	}

	/**
	 * Marks component as dirty and schedules AshElement tree update through its view stream.
	 *
	 * @returns {[type]}
	 */
	update() {
		if (this.__element.stream) {
			this.__element.isDirty = true;

			this.__element.stream.push(true);
		}
	}

	get __lifecycle() {
		return this.__currentLifecycle;
	}

	set __lifecycle(nextLifecycle) {
		if (nextLifecycle !== LIFECYCLE_UNMOUNTED && nextLifecycle !== LIFECYCLE_MOUNTING && nextLifecycle !== LIFECYCLE_MOUNTED) {
			throw new Error(`${nextLifecycle} must be "${LIFECYCLE_UNMOUNTED}", "${LIFECYCLE_MOUNTING}" or "${LIFECYCLE_MOUNTED}". This property is for internal use only. Do not change it!`);
		}

		this.__previousLifecycle = this.__currentLifecycle;
		this.__currentLifecycle = nextLifecycle;

		if (this.__previousLifecycle !== this.__currentLifecycle) {
			if (this.__currentLifecycle === LIFECYCLE_MOUNTING) {
				this.onBeforeMount();
			} else if (this.__currentLifecycle === LIFECYCLE_MOUNTED) {
				this.onMount();
			} else if (this.__currentLifecycle === LIFECYCLE_UNMOUNTED) {
				this.onUnmount();
			}
		}
	}

	/**
	 * Is true if Component instance is mounted.
	 */
	get isMounted() {
		return this.__currentLifecycle === LIFECYCLE_MOUNTED;
	}

	/**
	 * Root DOM Node of Component intance.
	 */
	get domNode() {
		if (this.isMounted && isAshNodeAshElement(this.__element.children[0]) && this.__element.stream.__listeners[0] && this.__element.stream.__listeners[0].getRootNode) {
			let rootNode = this.__element.stream.__listeners[0].getRootNode();

			if (rootNode) {
				return findNode(rootNode, this.__element.children[0].instance.id, this.__element.children[0].instance.indices);
			}
		}

		return null;
	}

	/**
	 * Should Componente instance be updated? Defaults to strict comparison of instance's props and new props being passed from the parent component.
	 * You never call this method, it is called during update.
	 *
	 * @param {Object} newProps
	 * @returns {boolean}
	 */
	shouldUpdate(newProps) {
		return this.props !== newProps || this.__element.isDirty;
	}

	/**
	 * Called when the instance is created.
	 */
	onInitialize() {}

	/**
	 * Called before the instance is mounted.
	 */
	onBeforeMount() {}

	/**
	 * Called after the instance is mounted.
	 */
	onMount() {}

	/**
	 * Called before new props are passed to the component (but after shouldUpdate method is called).
	 */
	onBeforeReceiveProps() {}

	/**
	 * Called after render method is called.
	 */
	onRender() {}

	/**
	 * Called after the instance is unmounted.
	 * Useful for dealing with event handlers etc.
	 */
	onUnmount() {}

	/**
	 * Returns AshElement tree.
	 * This method should be always implemented in the Component subclasses.
	 *
	 * @param {Object} props
	 * @param {*} state
	 * @returns {AshElement|null}
	 */
	render(/*props, state*/) {
		return null;
	}
}
