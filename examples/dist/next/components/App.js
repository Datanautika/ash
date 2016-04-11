'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ash = require('ash');

var _ash2 = _interopRequireDefault(_ash);

var _Router = require('ash/Router');

var _Router2 = _interopRequireDefault(_Router);

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

let router = new _Router2.default();

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
			isColored: false
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
					'p',
					{ events: { click: this.handleClick } },
					_ash2.default.createElement(
						'a',
						{ href: `/${ CZ }/foo/bar` },
						'CZ foo/bar'
					),
					_ash2.default.createElement(
						'a',
						{ href: `/${ EN }/foo/bar` },
						'EN foo/bar'
					)
				),
				_ash2.default.createElement(
					'p',
					null,
					_ash2.default.createElement(
						'a',
						{ href: '#', events: { click: this.handleToggleGrid } },
						'Toggle grid'
					),
					_ash2.default.createElement(
						'a',
						{ href: '#', events: { click: this.handleAddEvent } },
						'Add items'
					),
					_ash2.default.createElement(
						'a',
						{ href: '#', events: { click: this.handleChangeColor } },
						'Change color'
					)
				),
				items
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
		key: 'handleClick',
		value: function handleClick(event) {
			event.preventDefault();

			router.navigate(event.target.getAttribute('href'));
		}
	}, {
		key: 'handleAddEvent',
		value: function handleAddEvent(event) {
			event.preventDefault();

			for (let i = 0; i < 500; i++) {
				this.state.items.push([Math.random() * 1000 >> 0]);
			}

			this.update();
		}
	}, {
		key: 'handleChangeColor',
		value: function handleChangeColor(event) {
			event.preventDefault();

			this.state.isColored = !this.state.isColored;

			this.update();
		}
	}, {
		key: 'handleToggleGrid',
		value: function handleToggleGrid(event) {
			event.preventDefault();

			if (document.querySelector('body').className) {
				document.querySelector('body').className = '';
			} else {
				document.querySelector('body').className = 'hasGrid';
			}

			this.update();
		}
	}]);

	return App;
}(_ash2.default.Component);

exports.default = App;