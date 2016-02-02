'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ash = require('ash');

var _ash2 = _interopRequireDefault(_ash);

var _routeStream = require('./routeStream');

var _routeStream2 = _interopRequireDefault(_routeStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pageStream = new _ash2.default.Stream({
	previous: null,
	current: null
});

pageStream.combine(function (dependency, self) {
	var value = self.get();

	var _dependency$get = dependency.get();

	var page = _dependency$get.page;

	if (page !== value.current) {
		var newValue = {
			current: page,
			previous: value.current
		};

		self.push(newValue);
	}
}, _routeStream2.default);

exports.default = pageStream;