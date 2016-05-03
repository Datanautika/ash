'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Router = require('ash/Router');

var _Router2 = _interopRequireDefault(_Router);

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EN = _constants2.default.EN;
const CZ = _constants2.default.CZ;

let router = new _Router2.default();
let routeStream = router.add('(:language)(/:page)(/:story)(/)').map(value => {
	let { language, page, story } = value;

	if (language !== CZ && language !== EN) {
		story = page;
		page = language;
		language = null;
	}

	return { page, language, story };
});

exports.default = routeStream;