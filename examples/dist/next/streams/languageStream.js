'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ash = require('ash');

var _ash2 = _interopRequireDefault(_ash);

var _I18n = require('ash/I18n');

var _I18n2 = _interopRequireDefault(_I18n);

var _routeStream = require('./routeStream');

var _routeStream2 = _interopRequireDefault(_routeStream);

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

var _i18nStrings = require('../config/i18nStrings');

var _i18nStrings2 = _interopRequireDefault(_i18nStrings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EN = _constants2.default.EN;
const CZ = _constants2.default.CZ;

let i18n = new _I18n2.default();
let languageStram = new _ash2.default.Stream({
	previous: null,
	current: EN
});

languageStram.combine((dependency, self) => {
	let value = self.get();

	var _dependency$get = dependency.get();

	let language = _dependency$get.language;

	if (language !== value.current && (language === CZ || language === EN)) {
		let newValue = {
			current: language,
			previous: value.current
		};

		if (language === CZ) {
			i18n.use({
				strings: _i18nStrings2.default,
				locale: CZ,
				currency: 'CZK'
			});
		} else if (language === EN) {
			i18n.use({
				strings: _i18nStrings2.default,
				locale: EN,
				currency: '$'
			});
		}

		self.push(newValue);
	}
}, _routeStream2.default);

exports.default = languageStram;