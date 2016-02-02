'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _typographicScale = require('./typographicScale');

var _typographicScale2 = _interopRequireDefault(_typographicScale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var heading = {
	color: _colors2.default.text,
	fontFamily: '\'Brandon Grotesque\', Futura, \'Gill Sans\', Calibri, \'Dejavu Sans\', Arial, sans-serif',
	fontFeatures: '\'kern\', \'liga\', \'clig\', \'calt\', \'dlig\', \'lnum\', \'pnum\'',
	storyTitle: {
		fontSize: _typographicScale2.default[15],
		fontWeight: 700
	},
	storyLevel1: {
		fontSize: _typographicScale2.default[13],
		fontWeight: 700
	},
	storyLevel2: {
		fontSize: _typographicScale2.default[10],
		fontWeight: 700
	},
	storyLevel3: {
		fontSize: _typographicScale2.default[6],
		fontWeight: 700
	},
	storyLevel4: {
		fontSize: _typographicScale2.default[5],
		fontWeight: 700
	},
	sectionTitle: {
		fontSize: _typographicScale2.default[13],
		fontWeight: 700
	},
	sectionLevel1: {
		fontSize: _typographicScale2.default[6],
		fontWeight: 700
	},
	sectionLevel2: {
		fontSize: _typographicScale2.default[5],
		fontWeight: 700
	},
	sectionLevel3: {
		fontSize: _typographicScale2.default[4],
		fontWeight: 700
	},
	sectionLevel4: {
		fontSize: _typographicScale2.default[3],
		fontWeight: 700
	}
};

exports.default = heading;