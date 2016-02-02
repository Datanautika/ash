'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _durations = require('./durations');

var _durations2 = _interopRequireDefault(_durations);

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sec(value) {
	return value + 's';
}

var link = {
	default: {
		color: _colors2.default.text,
		backgroundColor: 'transparent',
		fontWeight: 600,
		underlineWidth: 2,
		underlineColor: _colors2.default.secondary1.base,
		underlinePosition: '1.1em',
		transition: 'color ' + sec(_durations2.default.fastest) + ' ease-in, background-color ' + sec(_durations2.default.fastest) + ' ease-in, border-color ' + sec(_durations2.default.fastest) + ' ease-in'
	},
	visited: {
		color: _colors2.default.text,
		backgroundColor: 'transparent',
		underlineWidth: 2,
		underlineColor: _colors2.default.secondary1.base
	},
	focused: {
		color: _colors2.default.secondary1.base,
		backgroundColor: 'transparent',
		underlineWidth: 2,
		underlineColor: _colors2.default.secondary1.base,
		outline: '0 none'
	},
	hovered: {
		color: _colors2.default.secondary1.base,
		backgroundColor: 'transparent',
		underlineWidth: 2,
		underlineColor: _colors2.default.secondary1.base
	},

	heading: {
		default: {
			color: _colors2.default.text,
			backgroundColor: 'transparent',
			fontWeight: 'inherit',
			underlineWidth: 0,
			underlineColor: 'transparent',
			underlinePosition: '1.2em',
			transition: 'color ' + sec(_durations2.default.fastest) + ' ease-in, background-color ' + sec(_durations2.default.fastest) + ' ease-in, border-color ' + sec(_durations2.default.fastest) + ' ease-in'
		},
		visited: {
			color: _colors2.default.text,
			backgroundColor: 'transparent',
			underlineWidth: 0,
			underlineColor: 'transparent'
		},
		focused: {
			color: _colors2.default.secondary1.base,
			backgroundColor: 'transparent',
			underlineWidth: 0,
			underlineColor: 'transparent',
			outline: '0 none'
		},
		hovered: {
			color: _colors2.default.secondary1.base,
			backgroundColor: 'transparent',
			underlineWidth: 0,
			underlineColor: 'transparent'
		}
	}
};

exports.default = link;