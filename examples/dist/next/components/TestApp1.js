'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ash = require('ash');

var _ash2 = _interopRequireDefault(_ash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

let TestApp1 = function (_ash$Component) {
	_inherits(TestApp1, _ash$Component);

	function TestApp1() {
		var _temp, _this, _ret;

		_classCallCheck(this, TestApp1);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, Object.getPrototypeOf(TestApp1).call(this, ...args)), _this), _this.state = {
			count: 0
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TestApp1, [{
		key: 'render',
		value: function render() {
			return _ash2.default.createElement(
				'main',
				null,
				`render ${ this.state.count }`
			);
		}
	}, {
		key: 'onMount',
		value: function onMount() {
			if (this.props && this.props.updateStream) {
				this.props.updateStream.on(this.update);
			}
		}
	}, {
		key: 'onRender',
		value: function onRender() {
			this.state.count++;

			this.doneStream.push(this.state.count);
		}
	}]);

	return TestApp1;
}(_ash2.default.Component);

TestApp1.doneStream = new _ash2.default.Stream();
exports.default = TestApp1;