'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

var _AshNode = require('./AshNode');

var _AshNode2 = _interopRequireDefault(_AshNode);

var _isAshElement = require('../internals/isAshElement');

var _isAshElement2 = _interopRequireDefault(_isAshElement);

var _iterate = require('../internals/iterate');

var _iterate2 = _interopRequireDefault(_iterate);

var _Component = require('./Component');

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ASH_NODE_ASH_ELEMENT = _constants2.default.ASH_NODE_ASH_ELEMENT;
var COMPONENT_ASH_ELEMENT = _constants2.default.COMPONENT_ASH_ELEMENT;
var FUNCTION_ASH_ELEMENT = _constants2.default.FUNCTION_ASH_ELEMENT;

/**
 * AshElement class.
 */

var AshElement = function () {

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

	function AshElement(type, Spec) {
		_classCallCheck(this, AshElement);

		this.type = null;
		this.args = null;
		this.children = [];
		this.parent = null;
		this.owner = null;
		this.stream = null;

		if (type !== COMPONENT_ASH_ELEMENT && type !== ASH_NODE_ASH_ELEMENT && type !== FUNCTION_ASH_ELEMENT) {
			throw new Error(type + ' (type) must be "' + COMPONENT_ASH_ELEMENT + '" or "' + ASH_NODE_ASH_ELEMENT + '".');
		}

		if (!Spec) {
			throw new Error(Spec + ' (Spec) must be a function.');
		}

		this.type = type;

		if (this.type === COMPONENT_ASH_ELEMENT) {
			this.Spec = Spec;
			this.isDirty = true;

			if (arguments.length >= 3 && typeof arguments[2] !== 'undefined') {
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

			if (arguments.length >= 3 && typeof arguments[2] !== 'undefined') {
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

	_createClass(AshElement, [{
		key: 'instantiate',
		value: function instantiate() {
			if (this.type === COMPONENT_ASH_ELEMENT) {
				if (this.args) {
					this.instance = new this.Spec(this.args[0]);
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
				throw new Error(this + ' is not a properly typed AshElement object.');
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

	}], [{
		key: 'create',
		value: function create(tagName, props /*, children...*/) {
			var children = [];

			if ( /*typeof tagName !== 'string' && */typeof tagName === 'function' && _Component2.default.isAncestorOf(tagName)) {
				return new AshElement(COMPONENT_ASH_ELEMENT, tagName, arguments[1]);
			} else if (typeof tagName === 'function') {
				return new AshElement(FUNCTION_ASH_ELEMENT, tagName, arguments[1]);
			} else if (typeof tagName === 'string' && !tagName.length) {
				throw new Error(tagName + ' (tagName) must be non-empty string or Component class.');
			}

			// type check
			if (tagName && arguments.length === 1) {
				// return AshElement <tagName> with no props and no children
				return new AshElement(ASH_NODE_ASH_ELEMENT, _AshNode2.default, tagName, null);
			}

			for (var i = 2; i < arguments.length; i++) {
				if (typeof arguments[i] === 'string' || typeof arguments[i] === 'number') {
					children.push(new AshElement(ASH_NODE_ASH_ELEMENT, _AshNode2.default, '' + arguments[i]));
				} else if ((0, _isAshElement2.default)(arguments[i])) {
					children.push(arguments[i]);
				} else if (Array.isArray(arguments[i])) {
					for (var j = 0; j < arguments[i].length; j++) {
						if (typeof arguments[i][j] === 'string' || typeof arguments[i] === 'number') {
							children.push(new AshElement(ASH_NODE_ASH_ELEMENT, _AshNode2.default, '' + arguments[i][j]));
						} else if ((0, _isAshElement2.default)(arguments[i][j])) {
							children.push(arguments[i][j]);
						}
					}
				} else if (arguments[i] && typeof arguments[i].__iterator === 'function' || arguments[i] && typeof global.Symbol === 'function' && typeof arguments[i][global.Symbol.iterator]) {
					var iteratorResult = (0, _iterate2.default)(arguments[i]);

					for (var j = 0; j < iteratorResult.length; j++) {
						if (typeof iteratorResult[j] === 'string' || typeof iteratorResult === 'number') {
							children.push(new AshElement(ASH_NODE_ASH_ELEMENT, _AshNode2.default, '' + iteratorResult[j]));
						} else if ((0, _isAshElement2.default)(iteratorResult[j])) {
							children.push(iteratorResult[j]);
						}
					}
				}
			}

			return new AshElement(ASH_NODE_ASH_ELEMENT, _AshNode2.default, tagName, props, children);
		}
	}]);

	return AshElement;
}();

exports.default = AshElement;