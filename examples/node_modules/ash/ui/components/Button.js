'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = require('../../core/view/Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Button = require('./Button.css');

var _Button2 = _interopRequireDefault(_Button);

var _Router = require('../../Router');

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAILTO_REGEX = /^mailto:/;
var ROUTE_LINK_REGEX = /^\//;

var router = new _Router2.default();

var Button = function (_Component) {
	_inherits(Button, _Component);

	function Button() {
		_classCallCheck(this, Button);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
	}

	_createClass(Button, [{
		key: 'shouldUpdate',
		value: function shouldUpdate(newProps) {
			return newProps.id !== this.props.id || newProps.name !== this.props.name || newProps.type !== this.props.type || newProps.link !== this.props.link || newProps.label !== this.props.label || newProps.badge !== this.props.badge || newProps.isLarge !== this.props.isLarge || newProps.isDisabled !== this.props.isDisabled || newProps.isSubmit !== this.props.isSubmit || newProps.useRouter !== this.props.useRouter || newProps.handleClick !== this.props.handleClick;
		}
	}, {
		key: 'render',
		value: function render() {
			var buttonClass = _Button2.default.default;

			if (this.props.type === 'flat') {
				buttonClass = _Button2.default.flat;
			} else if (this.props.type === 'invisible') {
				buttonClass = _Button2.default.invisible;
			}

			buttonClass += this.props.isLarge ? ' isLarge' : '';

			var buttonElement = null;

			if (this.props.isSubmit) {
				buttonElement = ash.createElement('input', {
					'class': buttonClass + (this.props.isDisabled ? ' isDisabled' : ' isEnabled'),
					type: 'submit',
					name: this.props.name || this.props.id || '',
					id: this.props.id || this.props.name || '',
					value: this.props.label || '',
					events: {
						click: this.handleClick
					}
				});
			} else if (this.props.link) {
				buttonElement = ash.createElement(
					'a',
					{
						'class': buttonClass + (this.props.isDisabled ? ' isDisabled' : ' isEnabled'),
						href: this.props.link ? this.props.link : '#',
						events: {
							click: this.handleClick
						} },
					this.props.label || null,
					this.props.badge ? ash.createElement(
						'span',
						{ 'class': _Button2.default.badge },
						this.props.badge
					) : null
				);
			} else {
				buttonElement = ash.createElement(
					'button',
					{
						'class': buttonClass + (this.props.isDisabled ? ' isDisabled' : ' isEnabled'),
						events: {
							click: this.handleClick
						} },
					this.props.label || null,
					this.props.badge ? ash.createElement(
						'span',
						{ 'class': _Button2.default.badge },
						this.props.badge
					) : null
				);
			}

			return buttonElement;
		}
	}, {
		key: 'handleClick',
		value: function handleClick(event) {
			if (!(this.props.link || MAILTO_REGEX.test(this.props.link))) {
				event.preventDefault();

				if (this.props.handleClick) {
					this.props.handleClick();
				}
			} else if (ROUTE_LINK_REGEX.test(this.props.link) && this.props.useRouter !== false) {
				event.preventDefault();

				router.navigate(this.props.link);
			}
		}
	}]);

	return Button;
}(_Component3.default);

exports.default = Button;