'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Router = require('ash/Router');

var _Router2 = _interopRequireDefault(_Router);

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EN = _constants2.default.EN;
var CZ = _constants2.default.CZ;

var router = new _Router2.default();
var routeStream = router.add('(:language)(/:page)(/:story)(/)').map(function (value) {
	var language = value.language;
	var page = value.page;
	var story = value.story;

	if (language !== CZ && language !== EN) {
		story = page;
		page = language;
		language = null;
	}

	return { page: page, language: language, story: story };
});

exports.default = routeStream;