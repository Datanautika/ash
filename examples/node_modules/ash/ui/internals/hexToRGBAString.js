'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = hexToRGBAString;

var _hexToRGB = require('./hexToRGB');

var _hexToRGB2 = _interopRequireDefault(_hexToRGB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hexToRGBAString(value) {
	var transparency = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

	var rgbValue = (0, _hexToRGB2.default)(value);

	return 'rgba(' + rgbValue[0] + ', ' + rgbValue[1] + ', ' + rgbValue[2] + ', ' + transparency + ')';
}