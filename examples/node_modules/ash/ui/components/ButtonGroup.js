'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ButtonGroup;

var _Button = require('./Button.css');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonGroup(props, children) {
	return ash.createElement(
		'div',
		{ 'class': _Button2.default.buttonGroup },
		children
	);
}