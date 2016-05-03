'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = require('../../core/view/Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Input = require('./Input.css');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ENTER_KEY_CODE = 13;

var Input = function (_Component) {
	_inherits(Input, _Component);

	function Input() {
		_classCallCheck(this, Input);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).apply(this, arguments));
	}

	_createClass(Input, [{
		key: 'shouldUpdate',
		value: function shouldUpdate(newProps) {
			return newProps.id !== this.props.id || newProps.name !== this.props.name || newProps.type !== this.props.type || newProps.autocomplete !== this.props.autocomplete || newProps.isValid !== this.props.isValid || newProps.isDisabled !== this.props.isDisabled || newProps.handleChange !== this.props.handleChange || newProps.handleSave !== this.props.handleSave || newProps.validator !== this.props.validator;
		}
	}, {
		key: 'render',
		value: function render() {
			var inputProps = {
				key: this.props.id || this.props.name || '',
				class: _Input2.default.default + (this.props.isValid ? ' isValid' : ' isInvalid') + (this.props.isDisabled ? ' isDisabled' : ' isEnabled'),
				type: 'text',
				name: this.props.name || this.props.id || '',
				id: this.props.id || this.props.name || '',
				events: {
					blur: this.handleFocusOut,
					input: this.handleInput,
					keydown: this.handleKeyDown
				}
			};

			if (this.props.type === 'email') {
				inputProps.type = this.props.type;
			}

			if (this.props.isDisabled) {
				inputProps.disabled = 'disabled';
			}

			if (this.props.autocomplete === false) {
				inputProps.autocomplete = 'off';
			}

			return ash.createElement('input', inputProps);
		}
	}, {
		key: 'handleInput',
		value: function handleInput(event) {
			if (this.props.handleChange) {
				this.props.handleChange(this.validate(event.target.value));
			}
		}
	}, {
		key: 'handleFocusOut',
		value: function handleFocusOut(event) {
			if (this.props.handleSave) {
				this.props.handleSave(this.validate(event.target.value));
			}
		}
	}, {
		key: 'handleKeyDown',
		value: function handleKeyDown(event) {
			if (event.keyCode === ENTER_KEY_CODE) {
				if (this.props.handleSave) {
					this.props.handleSave(this.validate(event.target.value));
				}
			}
		}
	}, {
		key: 'validate',
		value: function validate(value) {
			return this.props.validator ? this.props.validator(value) : value;
		}
	}]);

	return Input;
}(_Component3.default);

exports.default = Input;