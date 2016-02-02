'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var EN = _constants2.default.EN;
var CZ = _constants2.default.CZ;

var router = new _Router2.default();

var App = function (_ash$Component) {
	(0, _inherits3.default)(App, _ash$Component);

	function App() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, App);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(App)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
			items: [],
			isColored: false
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(App, [{
		key: 'render',
		value: function render() {
			var _pageStream$get = _pageStream2.default.get();

			var page = _pageStream$get.current;

			var _languageStream$get = _languageStream2.default.get();

			var language = _languageStream$get.current;

			var _storyStream$get = _storyStream2.default.get();

			var story = _storyStream$get.current;

			var items = null;

			if (this.state.items.length) {
				items = _ash2.default.createElement(
					'div',
					{ 'class': _App2.default.items, style: { outline: this.state.isColored ? '1px solid red' : '1px solid blue' } },
					this.state.items.map(function (value, index) {
						return _ash2.default.createElement(
							'div',
							null,
							index + ': ' + value
						);
					})
				);
			}

			return _ash2.default.createElement(
				'div',
				{ 'class': _App2.default.root },
				_ash2.default.createElement(
					'p',
					null,
					'Language: ' + language
				),
				_ash2.default.createElement(
					'p',
					null,
					'Page: ' + page
				),
				_ash2.default.createElement(
					'p',
					null,
					'Story: ' + story
				),
				_ash2.default.createElement(
					'p',
					{ events: { click: this.handleClick } },
					_ash2.default.createElement(
						'a',
						{ href: '/' + CZ + '/foo/bar' },
						'CZ foo/bar'
					),
					_ash2.default.createElement(
						'a',
						{ href: '/' + EN + '/foo/bar' },
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

			for (var i = 0; i < 500; i++) {
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