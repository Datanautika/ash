'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = tintHex;

var _hexToRGB = require('./hexToRGB');

var _hexToRGB2 = _interopRequireDefault(_hexToRGB);

var _rgbToHex = require('./rgbToHex');

var _rgbToHex2 = _interopRequireDefault(_rgbToHex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tintHex(value) {
	var factor = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	var rgbValue = (0, _hexToRGB2.default)(value);

	rgbValue[0] += (255 - rgbValue[0]) * factor;
	rgbValue[1] += (255 - rgbValue[1]) * factor;
	rgbValue[2] += (255 - rgbValue[2]) * factor;

	return (0, _rgbToHex2.default)(rgbValue);
}