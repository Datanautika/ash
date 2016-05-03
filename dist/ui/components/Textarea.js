'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = require('../../core/view/Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Textarea = require('./Textarea.css');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textarea = function (_Component) {
	_inherits(Textarea, _Component);

	function Textarea() {
		_classCallCheck(this, Textarea);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Textarea).apply(this, arguments));
	}

	_createClass(Textarea, [{
		key: 'shouldUpdate',
		value: function shouldUpdate(newProps) {
			return newProps.id !== this.props.id || newProps.name !== this.props.name || newProps.rows !== this.props.rows || newProps.isValid !== this.props.isValid || newProps.isDisabled !== this.props.isDisabled || newProps.handleChange !== this.props.handleChange || newProps.handleSave !== this.props.handleSave || newProps.validator !== this.props.validator;
		}
	}, {
		key: 'render',
		value: function render() {
			var textareaProps = {
				key: this.props.id || this.props.name || '',
				class: _Textarea2.default.default + (this.props.isValid ? ' isValid' : ' isInvalid') + (this.props.isDisabled ? ' isDisabled' : ' isEnabled'),
				name: this.props.name || this.props.id || '',
				id: this.props.id || this.props.name || '',
				rows: this.props.rows || 5,
				events: {
					blur: this.handleFocusOut,
					input: this.handleInput
				}
			};

			if (this.props.isDisabled) {
				textareaProps.disabled = 'disabled';
			}

			return ash.createElement('textarea', textareaProps);
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
		key: 'validate',
		value: function validate(value) {
			return this.props.validator ? this.props.validator(value) : value;
		}
	}]);

	return Textarea;
}(_Component3.default);

exports.default = Textarea;