'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

var _hexToRGBAString = require('../../internals/hexToRGBAString');

var _hexToRGBAString2 = _interopRequireDefault(_hexToRGBAString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var textInput = {};

textInput.default = {
	color: _colors2.default.text,
	backgroundColor: _colors2.default.background,
	borderColor: _colors2.default.neutral.tint[4],
	borderWidth: 2,
	borderRadius: '0.125bh',
	boxShadow: 'inset 0 0.0625bh 0.0625bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.15),
	fontSize: _text2.default.fontSize,

	placeholder: {
		color: _colors2.default.neutral.tint[3]
	}
};

textInput.default.invalid = {
	color: textInput.default.color,
	backgroundColor: textInput.default.backgroundColor,
	borderColor: _colors2.default.negative.base,
	boxShadow: textInput.default.boxShadow,

	placeholder: {
		color: textInput.default.placeholder.color
	}
};

textInput.default.focused = {
	color: textInput.default.color,
	backgroundColor: textInput.default.backgroundColor,
	borderColor: _colors2.default.secondary1.base,
	boxShadow: textInput.default.boxShadow,

	placeholder: {
		color: textInput.default.placeholder.color
	}
};

textInput.default.hovered = {
	color: textInput.default.color,
	backgroundColor: textInput.default.backgroundColor,
	borderColor: _colors2.default.secondary1.base,
	boxShadow: textInput.default.boxShadow,

	placeholder: {
		color: textInput.default.placeholder.color
	}
};

textInput.default.disabled = {
	color: _colors2.default.neutral.tint[4],
	backgroundColor: textInput.default.backgroundColor,
	borderColor: _colors2.default.neutral.tint[6],
	boxShadow: 'inset 0 0.0625bh 0.0625bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.1),

	placeholder: {
		color: _colors2.default.neutral.tint[7]
	}
};

exports.default = textInput;