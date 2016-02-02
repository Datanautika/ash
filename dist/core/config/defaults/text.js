'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _typographicScale = require('./typographicScale');

var _typographicScale2 = _interopRequireDefault(_typographicScale);

var _grid = require('./grid');

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var text = {
	color: _colors2.default.text,
	backgroundColor: _colors2.default.background,
	fontSize: _typographicScale2.default.base,
	lineHeight: _grid2.default.baselineHeight / _typographicScale2.default.base,
	fontWeight: 'normal',
	fontFeatures: '\'kern\', \'liga\', \'clig\', \'calt\', \'onum\', \'pnum\'',
	fontFamily: '\'Brandon Text\', Futura, \'Gill Sans\', Calibri, \'Dejavu Sans\', \'Lucida Sans\', sans-serif',

	selection: {
		color: _colors2.default.background,
		backgroundColor: _colors2.default.secondary2.base
	}
};

exports.default = text;