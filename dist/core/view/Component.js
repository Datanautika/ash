'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isAshNodeAshElement = require('../internals/isAshNodeAshElement');

var _isAshNodeAshElement2 = _interopRequireDefault(_isAshNodeAshElement);

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

var _assign = require('../internals/assign');

var _assign2 = _interopRequireDefault(_assign);

var _findNode = require('../domRenderer/findNode');

var _findNode2 = _interopRequireDefault(_findNode);

var _isFunction = require('../internals/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isAncestor = require('../utils/isAncestor');

var _isAncestor2 = _interopRequireDefault(_isAncestor);

var _Stream = require('../stream/Stream');

var _Stream2 = _interopRequireDefault(_Stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LIFECYCLE_UNMOUNTED = _constants2.default.LIFECYCLE_UNMOUNTED;
var LIFECYCLE_MOUNTING = _constants2.default.LIFECYCLE_MOUNTING;
var LIFECYCLE_MOUNTED = _constants2.default.LIFECYCLE_MOUNTED;
var LIFECYCLE_UNINITIALIZED = _constants2.default.LIFECYCLE_UNINITIALIZED;

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

var Component = function () {

	/**
  * Creates a component with props of `props`.
  * You generally don't create components instances, you just use them as AshElement Spec.
  *
  * @param {Object} props
  * @returns {Component}
  */

	function Component(props) {
		var _this = this;

		_classCallCheck(this, Component);

		this.__element = null;
		this.__isDirty = false;
		this.__previousLifecycle = LIFECYCLE_UNINITIALIZED;
		this.__currentLifecycle = LIFECYCLE_UNMOUNTED;
		this.props = null;
		this.state = null;

		this.update = this.update.bind(this);

		// autobind methods
		var prototype = Object.getPrototypeOf(this);

		Object.getOwnPropertyNames(prototype).forEach(function (value) {
			var descriptor = Object.getOwnPropertyDescriptor(prototype, value);

			// typeof must be used to avoid executing getter and setters
			if (!(descriptor && (typeof descriptor.get !== 'undefined' || typeof descriptor.set !== 'undefined')) && (0, _isFunction2.default)(_this[value]) && value !== 'constructor') {
				_this[value] = _this[value].bind(_this);
			}
		});

		if (this.constructor.props) {
			this.props = (0, _assign2.default)({}, this.constructor.props, props);
		} else if (props) {
			this.props = props;
		}

		// references to the component streams
		Object.getOwnPropertyNames(this.constructor).filter(function (value) {
			return value !== 'caller' && value !== 'callee' && value !== 'arguments';
		}).forEach(function (value) {
			if (_this.constructor[value] instanceof _Stream2.default && !_this[value]) {
				_this[value] = _this.constructor[value];
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

	_createClass(Component, [{
		key: 'update',

		/**
   * Marks component as dirty and schedules AshElement tree update through its view stream.
   *
   * @returns {[type]}
   */
		value: function update() {
			if (this.__element.stream) {
				this.__isDirty = true;

				this.__element.stream.push(true);
			}
		}
	}, {
		key: 'shouldUpdate',

		/**
   * Should Componente instance be updated? Defaults to strict comparison of instance's props and new props being passed from the parent component.
   * You never call this method, it is called during update.
   *
   * @param {Object} newProps
   * @returns {boolean}
   */
		value: function shouldUpdate(newProps) {
			return this.props !== newProps;
		}

		/**
   * Called when the instance is created.
   */

	}, {
		key: 'onInitialize',
		value: function onInitialize() {}

		/**
   * Called before the instance is mounted.
   */

	}, {
		key: 'onBeforeMount',
		value: function onBeforeMount() {}

		/**
   * Called after the instance is mounted.
   */

	}, {
		key: 'onMount',
		value: function onMount() {}

		/**
   * Called before new props are passed to the component (but after shouldUpdate method is called).
   */

	}, {
		key: 'onBeforeReceiveProps',
		value: function onBeforeReceiveProps() {}

		/**
   * Called after render method is called.
   */

	}, {
		key: 'onRender',
		value: function onRender() {}

		/**
   * Called after the instance is unmounted.
   * Useful for dealing with event handlers etc.
   */

	}, {
		key: 'onUnmount',
		value: function onUnmount() {}

		/**
   * Returns AshElement tree.
   * This method should be always implemented in the Component subclasses.
   *
   * @param {Object} props
   * @param {*} state
   * @returns {AshElement|null}
   */

	}, {
		key: 'render',
		value: function render() /*props, state*/{
			return null;
		}
	}, {
		key: '__lifecycle',
		get: function get() {
			return this.__currentLifecycle;
		},
		set: function set(nextLifecycle) {
			if (nextLifecycle !== LIFECYCLE_UNMOUNTED && nextLifecycle !== LIFECYCLE_MOUNTING && nextLifecycle !== LIFECYCLE_MOUNTED) {
				throw new Error(nextLifecycle + ' must be "' + LIFECYCLE_UNMOUNTED + '", "' + LIFECYCLE_MOUNTING + '" or "' + LIFECYCLE_MOUNTED + '". This property is for internal use only. Do not change it!');
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

	}, {
		key: 'isMounted',
		get: function get() {
			return this.__currentLifecycle === LIFECYCLE_MOUNTED;
		}

		/**
   * Root DOM Node of Component intance.
   */

	}, {
		key: 'domNode',
		get: function get() {
			if (this.isMounted && (0, _isAshNodeAshElement2.default)(this.__element.children[0]) && this.__element.stream.__listeners[0] && this.__element.stream.__listeners[0].getRootNode) {
				var rootNode = this.__element.stream.__listeners[0].getRootNode();

				if (rootNode) {
					return (0, _findNode2.default)(rootNode, this.__element.children[0].instance.id, this.__element.children[0].instance.indices);
				}
			}

			return null;
		}
	}], [{
		key: 'isAncestorOf',
		value: function isAncestorOf(value) {
			return (0, _isAncestor2.default)(Component, value);
		}
	}]);

	return Component;
}();

exports.default = Component;