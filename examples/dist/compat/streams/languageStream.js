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

var EN = _constants2.default.EN;
var CZ = _constants2.default.CZ;

var i18n = new _I18n2.default();
var languageStram = new _ash2.default.Stream({
	previous: null,
	current: EN
});

languageStram.combine(function (dependency, self) {
	var value = self.get();

	var _dependency$get = dependency.get();

	var language = _dependency$get.language;

	if (language !== value.current && (language === CZ || language === EN)) {
		var newValue = {
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