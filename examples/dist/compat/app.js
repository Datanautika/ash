'use strict';

var _ash = require('ash');

var _ash2 = _interopRequireDefault(_ash);

var _Router = require('ash/Router');

var _Router2 = _interopRequireDefault(_Router);

var _I18n = require('ash/I18n');

var _I18n2 = _interopRequireDefault(_I18n);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _i18nStrings = require('./config/i18nStrings');

var _i18nStrings2 = _interopRequireDefault(_i18nStrings);

var _constants = require('./internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EN = _constants2.default.EN;

// init i18n
var i18n = new _I18n2.default();

i18n.use({
	strings: _i18nStrings2.default,
	locale: EN,
	currency: '$'
});

// init routing
var router = new _Router2.default();

router.start();

// init renderering
var viewStream = global.viewStream = new _ash2.default.ViewStream(_ash2.default.createElement(_App2.default, null));

_ash2.default.renderViewStream(viewStream, global.document.querySelector('.page'));