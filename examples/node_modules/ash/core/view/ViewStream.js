'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Stream2 = require('../stream/Stream');

var _Stream3 = _interopRequireDefault(_Stream2);

var _isComponentAshElement = require('../internals/isComponentAshElement');

var _isComponentAshElement2 = _interopRequireDefault(_isComponentAshElement);

var _setAnimationTimeout = require('../internals/setAnimationTimeout');

var _setAnimationTimeout2 = _interopRequireDefault(_setAnimationTimeout);

var _createAshElementTree = require('./createAshElementTree');

var _createAshElementTree2 = _interopRequireDefault(_createAshElementTree);

var _updateAshElementTree = require('./updateAshElementTree');

var _updateAshElementTree2 = _interopRequireDefault(_updateAshElementTree);

var _mountComponents = require('./mountComponents');

var _mountComponents2 = _interopRequireDefault(_mountComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var streamId = 0;

/**
 * ViewStream class.
 */

var ViewStream = function (_Stream) {
	_inherits(ViewStream, _Stream);

	/**
  * Creates view stream.
  *
  * @param {AshElement} componentAshElement
  * @returns {ViewStream}
  */

	function ViewStream(componentAshElement) {
		var _ret;

		_classCallCheck(this, ViewStream);

		if (!(0, _isComponentAshElement2.default)(componentAshElement)) {
			throw new Error(componentAshElement + ' (componentAshElement) must be an Component AshElement object instance.');
		}

		if (componentAshElement.stream instanceof ViewStream) {
			throw new Error(componentAshElement + ' (componentAshElement) was already passed to a view stream.');
		}

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ViewStream).call(this));

		_this.id = streamId++;
		_this.isUpdating = false;
		_this.isRendering = false;

		_this.isUpdating = true;
		_this.isRendering = true;

		(0, _setAnimationTimeout2.default)(function () {
			_this.push((0, _createAshElementTree2.default)(componentAshElement, _this));
			(0, _mountComponents2.default)(_this.value);

			_this.isRendering = false;
		});

		_this.isUpdating = false;

		return _ret = _this, _possibleConstructorReturn(_this, _ret);
	}

	/**
  * Pushes `value` to the stream; if view stream already has a value, its AshElement tree and AshNode tree are updated.
  *
  * @param {*} value
  * @returns {this}
  */

	_createClass(ViewStream, [{
		key: 'push',
		value: function push(value) {
			var _this2 = this;

			if (this.hasValue) {
				if (this.isUpdating) {
					throw new Error('You cannot update components during previous update!');
				}

				this.isUpdating = true;

				// if there is already a scheduled update, we won't render twice
				if (!this.isRendering) {
					this.isRendering = true;

					(0, _setAnimationTimeout2.default)(function () {
						_get(Object.getPrototypeOf(ViewStream.prototype), 'push', _this2).call(_this2, (0, _updateAshElementTree2.default)(_this2.value, _this2));
						(0, _mountComponents2.default)(_this2.value);

						_this2.isRendering = false;
					});
				}

				this.isUpdating = false;
			} else {
				_get(Object.getPrototypeOf(ViewStream.prototype), 'push', this).call(this, value);
			}

			return this;
		}
	}]);

	return ViewStream;
}(_Stream3.default);

exports.default = ViewStream;