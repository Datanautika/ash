'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var breakpoints = {
	tinyMenu: {
		start: '1px',
		end: '640px'
	},
	compactMenu: {
		start: '641px',
		end: '1024px'
	},
	compactPage: {
		start: '1px',
		end: '480px'
	},
	singleColumnPage: {
		start: '481px',
		middle: '800px',
		end: '1280px'
	}
};

exports.default = breakpoints;