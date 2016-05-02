'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _breakpoints = require('./breakpoints');

var _breakpoints2 = _interopRequireDefault(_breakpoints);

var _grid = require('./grid');

var _grid2 = _interopRequireDefault(_grid);

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _durations = require('./durations');

var _durations2 = _interopRequireDefault(_durations);

var _typographicScale = require('./typographicScale');

var _typographicScale2 = _interopRequireDefault(_typographicScale);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

var _heading = require('./heading');

var _heading2 = _interopRequireDefault(_heading);

var _link = require('./link');

var _link2 = _interopRequireDefault(_link);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _textInput = require('./textInput');

var _textInput2 = _interopRequireDefault(_textInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
	breakpoints: _breakpoints2.default,
	grid: _grid2.default,
	colors: _colors2.default,
	durations: _durations2.default,
	typographicScale: _typographicScale2.default,
	text: _text2.default,
	heading: _heading2.default,
	link: _link2.default,
	button: _button2.default,
	textInput: _textInput2.default
};

exports.default = defaults;