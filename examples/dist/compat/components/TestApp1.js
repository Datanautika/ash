'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _ash = require('ash');

var _ash2 = _interopRequireDefault(_ash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestApp1 = function (_ash$Component) {
	(0, _inherits3.default)(TestApp1, _ash$Component);

	function TestApp1() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, TestApp1);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(TestApp1)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
			count: 0
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(TestApp1, [{
		key: 'render',
		value: function render() {
			return _ash2.default.createElement(
				'main',
				null,
				'render ' + this.state.count
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