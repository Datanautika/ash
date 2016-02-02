'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// regex that matches optional type annotations in i18n strings, e.g. i18n `This is a number ${x}:n(2)` formats x as number with two fractional digits
var TYPE_REGEX = /^:([a-z])(\((.+)\))?/;

/**
 * e.g. buildKey(['', ' has ', ':c in the']) == '{0} has {1} in the bank'
 *
 * @param {Array} literals
 * @returns {string}
 */
var buildKey = function buildKey(literals) {
	var stripType = function stripType(s) {
		return s.replace(TYPE_REGEX, '');
	};
	var lastPartialKey = stripType(literals[literals.length - 1]);
	var prependPartialKey = function prependPartialKey(memo, curr, i) {
		return stripType(curr) + '{' + i + '}' + memo;
	};

	return literals.slice(0, -1).reduceRight(prependPartialKey, lastPartialKey);
};

/**
 * e.g. formatStrings('{0} {1}!', 'hello', 'world') == 'hello world!'
 *
 * @param {[type]} string
 * @param {...*} values
 * @returns {[type]}
 */
var buildMessage = function buildMessage(string) {
	for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		values[_key - 1] = arguments[_key];
	}

	return string.replace(/{(\d)}/g, function (_, index) {
		return values[Number(index)];
	});
};

/**
 * Localizes general string.
 *
 * @param {string} locale
 * @param {string} string
 * @returns {string}
 */
var localizeString = function localizeString(locale, string) {
	return string.toLocaleString(locale);
};

/**
 * Localizes currency string.
 *
 * @param {string} locale
 * @param {string} string
 * @param {string} currency
 * @returns {string}
 */
var localizeCurrency = function localizeCurrency(locale, string, currency) {
	return string.toLocaleString(locale, {
		style: 'currency',
		currency: currency
	});
};

/**
 * Localizes number string.
 *
 * @param {string} locale
 * @param {string} string
 * @param {number} fractionalDigits
 * @returns {string}
 */
var localizeNumber = function localizeNumber(locale, string, fractionalDigits) {
	return string.toLocaleString(locale, {
		minimumFractionDigits: fractionalDigits,
		maximumFractionDigits: fractionalDigits
	});
};

/**
 * Extracts type info from a string.
 *
 * @param {string} literal
 * @returns {Object}
 */
var extractTypeInfo = function extractTypeInfo(literal) {
	var match = TYPE_REGEX.exec(literal);

	if (match) {
		return { type: match[1], options: match[3] };
	} else {
		return { type: 's', options: '' };
	}
};

/**
 * Localizes string.
 *
 * @param {string} value
 * @param {I18n} i18n
 * @param {string} options.type
 * @param {*} options.options
 * @returns {[type]}
 */
var localize = function localize(value, i18n, _ref) {
	var type = _ref.type;
	var options = _ref.options;

	var localizedValue = undefined;

	if (type === 's') {
		localizedValue = localizeString(i18n.locale, value, options);
	}

	if (type === 'c') {
		localizedValue = localizeCurrency(i18n.locale, value, options || i18n.currency);
	}

	if (type === 'n') {
		localizedValue = localizeNumber(i18n.locale, value, options);
	}

	return localizedValue;
};

var i18n = undefined;

/**
 * I18n class.
 * Singleton.
 */

var I18n = function () {
	/**
  * Creates an I18n instance.
  *
  * @returns {I18n}
  */

	function I18n() {
		_classCallCheck(this, I18n);

		i18n = i18n ? i18n : this;

		return i18n;
	}

	/**
  * Changes localization options.
  *
  * @param {Object} options
  * @param {Object} options.strings
  * @param {string} options.currency
  * @param {string} options.locale
  * @returns {this}
  */

	_createClass(I18n, [{
		key: 'use',
		value: function use() {
			var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

			var _ref2$strings = _ref2.strings;
			var strings = _ref2$strings === undefined ? {} : _ref2$strings;
			var _ref2$currency = _ref2.currency;
			var currency = _ref2$currency === undefined ? '$' : _ref2$currency;
			var _ref2$locale = _ref2.locale;
			var locale = _ref2$locale === undefined ? 'en-US' : _ref2$locale;

			this.strings = strings;
			this.currency = currency;
			this.locale = locale;

			return this;
		}

		/**
   * Tag function for template string. Uses i18n instance localization options for translation.
   *
   * @param {Array<string>} literals
   * @param {...*} values
   * @returns {string}
   */

	}, {
		key: 'translate',
		value: function translate(literals) {
			var _arguments = arguments,
			    _this = this;

			var translationKey = buildKey(literals);
			var translationString = undefined;

			if (this.strings[translationKey]) {
				translationString = this.strings[translationKey][this.locale];
			}

			if (!translationString) {
				translationString = translationKey;
			}

			if (translationString) {
				var _len2, values, _key2;

				var _ret = function () {
					var typeInfoForValues = literals.slice(1).map(extractTypeInfo);

					for (_len2 = _arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
						values[_key2 - 1] = _arguments[_key2];
					}

					var localizedValues = values.map(function (value, index) {
						return localize(value, _this, typeInfoForValues[index]);
					});

					return {
						v: buildMessage.apply(undefined, [translationString].concat(_toConsumableArray(localizedValues)))
					};
				}();

				if (typeof _ret === "object") return _ret.v;
			}

			return 'Error: translation missing!';
		}
	}]);

	return I18n;
}();

exports.default = I18n;