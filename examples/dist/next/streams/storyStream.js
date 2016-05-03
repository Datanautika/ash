'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ash = require('ash');

var _ash2 = _interopRequireDefault(_ash);

var _routeStream = require('./routeStream');

var _routeStream2 = _interopRequireDefault(_routeStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let storyStream = new _ash2.default.Stream({
	previous: null,
	current: null
});

storyStream.combine((dependency, self) => {
	let value = self.get();
	let { story } = dependency.get();

	if (story !== value.current) {
		let newValue = {
			current: story,
			previous: value.current
		};

		self.push(newValue);
	}
}, _routeStream2.default);

exports.default = storyStream;