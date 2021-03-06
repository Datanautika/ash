'use strict';

var _ash = require('ash');

var _ash2 = _interopRequireDefault(_ash);

var _Router = require('ash/Router');

var _Router2 = _interopRequireDefault(_Router);

var _I18n = require('ash/I18n');

var _I18n2 = _interopRequireDefault(_I18n);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _i18nStrings = require('./config/i18nStrings');

var _i18nStrings2 = _interopRequireDefault(_i18nStrings);

var _constants = require('./internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.ash = _ash2.default;
global.$ = _jquery2.default;

const EN = _constants2.default.EN;
const G_KEY_CODE = 71;

// grid toggle
(0, _jquery2.default)(global.document).on('keydown', event => {
	let tagName = event.target.tagName.toLowerCase();

	if (event.keyCode === G_KEY_CODE && event.target && tagName !== 'textarea' && tagName !== 'input') {
		(0, _jquery2.default)('body').toggleClass('hasGrid');
	}
});

// init i18n
let i18n = new _I18n2.default();

i18n.use({
	strings: _i18nStrings2.default,
	locale: EN,
	currency: '$'
});

// init routing
let router = new _Router2.default();

router.start();

// init renderering
let viewStream = global.viewStream = new _ash2.default.ViewStream(_ash2.default.createElement(_App2.default, null));

_ash2.default.renderViewStream(viewStream, global.document.querySelector('.page'));