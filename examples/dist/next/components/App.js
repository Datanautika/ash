'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ash = require('ash');

var _ash2 = _interopRequireDefault(_ash);

var _App = require('./App.css');

var _App2 = _interopRequireDefault(_App);

var _pageStream = require('../streams/pageStream');

var _pageStream2 = _interopRequireDefault(_pageStream);

var _storyStream = require('../streams/storyStream');

var _storyStream2 = _interopRequireDefault(_storyStream);

var _languageStream = require('../streams/languageStream');

var _languageStream2 = _interopRequireDefault(_languageStream);

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const EN = _constants2.default.EN;
const CZ = _constants2.default.CZ;
const EMAIL_REGEX = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

let textInputValidator = value => value === 'ash' ? value : false;
let emailValidator = value => {
	if (!value || typeof value !== 'string') {
		return false;
	}

	let email = value.trim();
	let result = EMAIL_REGEX.test(email);

	return result ? email : false;
};
let textareaValidator = value => value.length >= 5 ? value : false;

let App = function (_ash$Component) {
	_inherits(App, _ash$Component);

	function App() {
		var _temp, _this, _ret;

		_classCallCheck(this, App);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, ...args)), _this), _this.state = {
			items: [],
			isColored: false,
			isTextInputValid: true,
			isEmailInputValid: true,
			isTextareaValid: true
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			var _pageStream$get = _pageStream2.default.get();

			let page = _pageStream$get.current;

			var _languageStream$get = _languageStream2.default.get();

			let language = _languageStream$get.current;

			var _storyStream$get = _storyStream2.default.get();

			let story = _storyStream$get.current;

			let items = null;

			if (this.state.items.length) {
				items = _ash2.default.createElement(
					'div',
					{ 'class': _App2.default.items, style: { outline: this.state.isColored ? '1px solid red' : '1px solid blue' } },
					this.state.items.map((value, index) => _ash2.default.createElement(
						'div',
						null,
						`${ index }: ${ value }`
					))
				);
			}

			return _ash2.default.createElement(
				'div',
				{ 'class': _App2.default.root },
				_ash2.default.createElement(
					'section',
					null,
					_ash2.default.createElement(
						'h1',
						{ 'class': _ash2.default.ui.styles.sectionLevel1Heading },
						'Form'
					),
					_ash2.default.createElement(
						_ash2.default.ui.Form,
						{ 'class': _App2.default.form },
						_ash2.default.createElement(
							_ash2.default.ui.FormRow,
							{ id: 'foo', label: 'Foo text input', hint: 'Type \'ash\'', showError: !this.state.isTextInputValid, errorMessage: "You have to type 'ash'!" },
							_ash2.default.createElement(_ash2.default.ui.Input, { id: 'foo', validator: textInputValidator, isValid: this.state.isTextInputValid, handleChange: this.handleTextInputChange })
						),
						_ash2.default.createElement(
							_ash2.default.ui.FormRow,
							{ id: 'foo', label: 'Foo email input', hint: 'Type any email', showError: !this.state.isEmailInputValid, errorMessage: "That's not a valid mail address!" },
							_ash2.default.createElement(_ash2.default.ui.Input, { id: 'foo', type: 'email', validator: emailValidator, isValid: this.state.isEmailInputValid, handleChange: this.handleEmailInputChange })
						),
						_ash2.default.createElement(
							_ash2.default.ui.FormRow,
							{ id: 'foo', label: 'Textarea', hint: 'Write something longer than 4 characters', showError: !this.state.isTextareaValid, errorMessage: "Write something longer!" },
							_ash2.default.createElement(_ash2.default.ui.Textarea, { id: 'foo', rows: 3, validator: textareaValidator, isValid: this.state.isTextareaValid, handleChange: this.handleTextareaChange })
						)
					)
				),
				_ash2.default.createElement(
					'section',
					null,
					_ash2.default.createElement(
						'h1',
						{ 'class': _ash2.default.ui.styles.sectionLevel1Heading },
						'Buttons'
					),
					_ash2.default.createElement(
						'h2',
						{ 'class': _ash2.default.ui.styles.sectionLevel2Heading },
						'Normal size'
					),
					_ash2.default.createElement(
						_ash2.default.ui.ButtonGroup,
						null,
						_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default button' }),
						_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default button (disabled)', isDisabled: true }),
						_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default button', badge: 'Badge!' }),
						_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default button (disabled)', badge: 'Badge!', isDisabled: true }),
						_ash2.default.createElement(_ash2.default.ui.Button, { type: 'flat', label: 'Flat button' }),
						_ash2.default.createElement(_ash2.default.ui.Button, { type: 'flat', label: 'Flat button (disabled)', isDisabled: true }),
						_ash2.default.createElement(_ash2.default.ui.Button, { type: 'flat', label: 'Flat button', badge: 'Badge!' }),
						_ash2.default.createElement(_ash2.default.ui.Button, { type: 'flat', label: 'Flat button (disabled)', badge: 'Badge!', isDisabled: true }),
						_ash2.default.createElement(_ash2.default.ui.Button, { type: 'invisible', label: 'Invisible button' }),
						_ash2.default.createElement(_ash2.default.ui.Button, { type: 'invisible', label: 'Invisible button (disabled)', isDisabled: true }),
						_ash2.default.createElement(_ash2.default.ui.Button, { type: 'invisible', label: 'Invisible button', badge: 'Badge!' }),
						_ash2.default.createElement(_ash2.default.ui.Button, { type: 'invisible', label: 'Invisible button (disabled)', badge: 'Badge!', isDisabled: true }),
						_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default submit button', isSubmit: true })
					),
					_ash2.default.createElement(_ash2.default.ui.ButtonGroup, null),
					_ash2.default.createElement(
						'h2',
						{ 'class': _ash2.default.ui.styles.sectionLevel2Heading },
						'Large size'
					),
					_ash2.default.createElement(
						_ash2.default.ui.ButtonGroup,
						null,
						_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default button', isLarge: true }),
						_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default button (disabled)', isDisabled: true, isLarge: true }),
						_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default button', badge: 'Badge!', isLarge: true }),
						_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default button (disabled)', badge: 'Badge!', isDisabled: true, isLarge: true }),
						_ash2.default.createElement(_ash2.default.ui.Button, { type: 'flat', label: 'Flat button', isLarge: true }),
						_ash2.default.createElement(_ash2.default.ui.Button, { type: 'flat', label: 'Flat button (disabled)', isDisabled: true, isLarge: true }),
						_ash2.default.createElement(_ash2.default.ui.Button, { type: 'invisible', label: 'Invisible button', isLarge: true }),
						_ash2.default.createElement(_ash2.default.ui.Button, { type: 'invisible', label: 'Invisible button (disabled)', isDisabled: true, isLarge: true }),
						_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default submit button', isSubmit: true, isLarge: true })
					)
				),
				_ash2.default.createElement(
					'section',
					null,
					_ash2.default.createElement(
						'h1',
						{ 'class': _ash2.default.ui.styles.sectionLevel1Heading },
						'Router'
					),
					_ash2.default.createElement(
						'p',
						null,
						`Language: ${ language }`
					),
					_ash2.default.createElement(
						'p',
						null,
						`Page: ${ page }`
					),
					_ash2.default.createElement(
						'p',
						null,
						`Story: ${ story }`
					),
					_ash2.default.createElement(
						_ash2.default.ui.ButtonGroup,
						null,
						_ash2.default.createElement(_ash2.default.ui.Button, { type: 'invisible', label: 'CZ foo/bar', link: `/${ CZ }/foo/bar` }),
						_ash2.default.createElement(_ash2.default.ui.Button, { type: 'invisible', label: 'EN foo/bar', link: `/${ EN }/foo/bar` })
					)
				),
				_ash2.default.createElement(
					'section',
					null,
					_ash2.default.createElement(
						'h1',
						{ 'class': _ash2.default.ui.styles.sectionLevel1Heading },
						'Perf'
					),
					_ash2.default.createElement(
						_ash2.default.ui.ButtonGroup,
						null,
						_ash2.default.createElement(_ash2.default.ui.Button, { type: 'flat', label: 'Toggle grid', handleClick: this.handleToggleGrid }),
						_ash2.default.createElement(_ash2.default.ui.Button, { type: 'flat', label: 'Add items', handleClick: this.handleAddEvent }),
						_ash2.default.createElement(_ash2.default.ui.Button, { type: 'flat', label: 'Change color', handleClick: this.handleChangeColor })
					),
					_ash2.default.createElement(
						'div',
						null,
						items
					)
				)
			);
		}
	}, {
		key: 'onMount',
		value: function onMount() {
			_pageStream2.default.on(this.update);
			_storyStream2.default.on(this.update);
			_languageStream2.default.on(this.update);
		}
	}, {
		key: 'handleAddEvent',
		value: function handleAddEvent() {
			for (let i = 0; i < 500; i++) {
				// eslint-disable-line no-magic-numbers
				this.state.items.push([Math.random() * 1000 >> 0]); // eslint-disable-line no-magic-numbers
			}

			this.update();
		}
	}, {
		key: 'handleChangeColor',
		value: function handleChangeColor() {
			this.state.isColored = !this.state.isColored;

			this.update();
		}
	}, {
		key: 'handleToggleGrid',
		value: function handleToggleGrid() {
			if (document.querySelector('body').className) {
				document.querySelector('body').className = '';
			} else {
				document.querySelector('body').className = 'hasGrid';
			}

			this.update();
		}
	}, {
		key: 'handleTextInputChange',
		value: function handleTextInputChange(value) {
			if (value === false) {
				this.state.isTextInputValid = false;
			} else {
				this.state.isTextInputValid = true;
			}

			this.update();
		}
	}, {
		key: 'handleEmailInputChange',
		value: function handleEmailInputChange(value) {
			if (value === false) {
				this.state.isEmailInputValid = false;
			} else {
				this.state.isEmailInputValid = true;
			}

			this.update();
		}
	}, {
		key: 'handleTextareaChange',
		value: function handleTextareaChange(value) {
			if (value === false) {
				this.state.isTextareaValid = false;
			} else {
				this.state.isTextareaValid = true;
			}

			this.update();
		}
	}]);

	return App;
}(_ash2.default.Component);

exports.default = App;