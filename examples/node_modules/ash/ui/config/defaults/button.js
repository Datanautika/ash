'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

var _typographicScale = require('./typographicScale');

var _typographicScale2 = _interopRequireDefault(_typographicScale);

var _hexToRGBAString = require('../../internals/hexToRGBAString');

var _hexToRGBAString2 = _interopRequireDefault(_hexToRGBAString);

var _tintHex = require('../../internals/tintHex');

var _tintHex2 = _interopRequireDefault(_tintHex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var button = {};

button.default = {
	depth: '0.125bh',
	color: _colors2.default.secondary1.shade[3],
	backgroundColor: _colors2.default.secondary1.base,
	sideColor: _colors2.default.secondary1.shade[1],
	borderColor: 'transparent',
	borderWidth: 0,
	borderRadius: '0.125bh',
	boxShadow: '0 0.125bh 0.125bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.4),
	fontSize: _text2.default.fontSize,

	badge: {
		color: _colors2.default.background,
		backgroundColor: _colors2.default.primary1.base,
		borderRadius: '1bh',
		fontSize: _typographicScale2.default[4]
	}
};

button.default.focused = {
	depth: '0.125bh',
	color: _colors2.default.secondary1.shade[3],
	backgroundColor: _colors2.default.secondary1.tint[1],
	sideColor: _colors2.default.secondary1.shade[1],
	borderColor: 'transparent',
	boxShadow: '0 0.125bh 0.125bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.4)
};

button.default.hovered = {
	depth: '0.125bh',
	color: _colors2.default.secondary1.shade[3],
	backgroundColor: (0, _tintHex2.default)(_colors2.default.secondary1.base, 0.1),
	sideColor: (0, _tintHex2.default)(_colors2.default.secondary1.shade[1], 0.1),
	borderColor: 'transparent',
	boxShadow: '0 0.125bh 0.125bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.4)
};

button.default.pressed = {
	depth: '0.0625bh',
	color: _colors2.default.secondary1.shade[3],
	backgroundColor: button.default.hovered.backgroundColor,
	sideColor: button.default.hovered.sideColor,
	borderColor: 'transparent',
	boxShadow: '0 0.0625bh 0.0625bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.3)
};

button.default.disabled = {
	depth: '0.125bh',
	color: _colors2.default.neutral.tint[3],
	backgroundColor: _colors2.default.neutral.tint[5],
	sideColor: _colors2.default.neutral.tint[3],
	borderColor: 'transparent',
	boxShadow: '0 0.125bh 0.125bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.4),

	badge: {
		color: _colors2.default.background,
		backgroundColor: _colors2.default.neutral.tint[3]
	}
};

button.flat = {
	depth: '0',
	translateY: '0.0625bh',
	color: _colors2.default.secondary1.shade[3],
	backgroundColor: _colors2.default.background,
	sideColor: 'transparent',
	borderColor: _colors2.default.secondary1.base,
	borderWidth: 2,
	borderRadius: '0.125bh',
	boxShadow: '0 0.0625bh 0.0625bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.15),
	fontSize: _text2.default.fontSize,

	badge: {
		color: _colors2.default.background,
		backgroundColor: _colors2.default.primary1.base,
		borderRadius: '1bh',
		fontSize: _typographicScale2.default[4]
	}
};

button.flat.focused = {
	depth: button.flat.depth,
	translateY: button.flat.translateY,
	color: button.flat.color,
	backgroundColor: button.flat.backgroundColor,
	sideColor: button.flat.sideColor,
	borderColor: button.flat.borderColor,
	borderWidth: button.flat.borderWidth,
	borderRadius: button.flat.borderRadius,
	boxShadow: button.flat.boxShadow,
	fontSize: button.flat.fontSize
};

button.flat.hovered = {
	depth: button.flat.depth,
	translateY: button.flat.translateY,
	color: button.flat.color,
	backgroundColor: button.flat.backgroundColor,
	sideColor: button.flat.sideColor,
	borderColor: (0, _tintHex2.default)(button.flat.borderColor, 0.1),
	borderWidth: button.flat.borderWidth,
	borderRadius: button.flat.borderRadius,
	boxShadow: button.flat.boxShadow,
	fontSize: button.flat.fontSize
};

button.flat.pressed = {
	depth: button.flat.depth,
	translateY: '0.125bh',
	color: button.flat.color,
	backgroundColor: button.flat.backgroundColor,
	sideColor: button.flat.sideColor,
	borderColor: button.flat.hovered.borderColor,
	borderWidth: button.flat.borderWidth,
	borderRadius: button.flat.borderRadius,
	boxShadow: '0 0.03125bh 0.03125bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.15),
	fontSize: button.flat.fontSize
};

button.flat.disabled = {
	depth: button.flat.depth,
	translateY: button.flat.translateY,
	color: _colors2.default.neutral.tint[3],
	backgroundColor: button.flat.backgroundColor,
	sideColor: button.flat.sideColor,
	borderColor: _colors2.default.neutral.tint[5],
	borderWidth: button.flat.borderWidth,
	borderRadius: button.flat.borderRadius,
	boxShadow: '0 0.0625bh 0.0625bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.1),
	fontSize: button.flat.fontSize
};

button.invisible = {
	depth: '0',
	translateY: '0.0625bh',
	color: _colors2.default.secondary1.shade[3],
	backgroundColor: _colors2.default.background,
	sideColor: 'transparent',
	borderColor: 'transparent',
	borderWidth: 2,
	borderRadius: '0.125bh',
	boxShadow: '0 0.0625bh 0.0625bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0),
	fontSize: _text2.default.fontSize,

	badge: {
		color: _colors2.default.background,
		backgroundColor: _colors2.default.primary1.base,
		borderRadius: '1bh',
		fontSize: _typographicScale2.default[4]
	}
};

button.invisible.focused = {
	depth: button.invisible.depth,
	translateY: button.invisible.translateY,
	color: button.invisible.color,
	backgroundColor: button.invisible.backgroundColor,
	sideColor: button.invisible.sideColor,
	borderColor: button.invisible.borderColor,
	borderWidth: button.invisible.borderWidth,
	borderRadius: button.invisible.borderRadius,
	boxShadow: button.invisible.boxShadow,
	fontSize: button.invisible.fontSize
};

button.invisible.hovered = {
	depth: button.invisible.depth,
	translateY: button.invisible.translateY,
	color: button.invisible.color,
	backgroundColor: button.invisible.backgroundColor,
	sideColor: button.invisible.sideColor,
	borderColor: _colors2.default.secondary1.base,
	borderWidth: button.invisible.borderWidth,
	borderRadius: button.invisible.borderRadius,
	boxShadow: '0 0.0625bh 0.0625bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.15),
	fontSize: button.invisible.fontSize
};

button.invisible.pressed = {
	depth: button.invisible.depth,
	translateY: '0.125bh',
	color: button.invisible.color,
	backgroundColor: button.invisible.backgroundColor,
	sideColor: button.invisible.sideColor,
	borderColor: _colors2.default.secondary1.base,
	borderWidth: button.invisible.borderWidth,
	borderRadius: button.invisible.borderRadius,
	boxShadow: '0 0.03125bh 0.03125bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.15),
	fontSize: button.invisible.fontSize
};

button.invisible.disabled = {
	depth: button.invisible.depth,
	translateY: button.invisible.translateY,
	color: _colors2.default.neutral.tint[3],
	backgroundColor: button.invisible.backgroundColor,
	sideColor: button.invisible.sideColor,
	borderColor: _colors2.default.neutral.tint[5],
	borderWidth: button.invisible.borderWidth,
	borderRadius: button.invisible.borderRadius,
	boxShadow: '0 0.0625bh 0.0625bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0),
	fontSize: button.invisible.fontSize
};

exports.default = button;