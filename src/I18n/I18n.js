// regex that matches optional type annotations in i18n strings, e.g. i18n `This is a number ${x}:n(2)` formats x as number with two fractional digits
const TYPE_REGEX = /^:([a-z])(\((.+)\))?/;

/**
 * e.g. buildKey(['', ' has ', ':c in the']) == '{0} has {1} in the bank'
 *
 * @param {Array} literals
 * @returns {string}
 */
let buildKey = (literals) => {
	let stripType = (s) => s.replace(TYPE_REGEX, '');
	let lastPartialKey = stripType(literals[literals.length - 1]);
	let prependPartialKey = (memo, curr, i) => `${stripType(curr)}{${i}}${memo}`;

	return literals.slice(0, -1).reduceRight(prependPartialKey, lastPartialKey);
};

/**
 * e.g. formatStrings('{0} {1}!', 'hello', 'world') == 'hello world!'
 *
 * @param {[type]} string
 * @param {...*} values
 * @returns {[type]}
 */
let buildMessage = (string, ...values) => string.replace(/{(\d)}/g, (_, index) => values[Number(index)]);

/**
 * Localizes general string.
 *
 * @param {string} locale
 * @param {string} string
 * @returns {string}
 */
let localizeString = (locale, string) => string.toLocaleString(locale);
	
/**
 * Localizes currency string.
 *
 * @param {string} locale
 * @param {string} string
 * @param {string} currency
 * @returns {string}
 */
let localizeCurrency = (locale, string, currency) => string.toLocaleString(locale, {
	style: 'currency',
	currency
});

/**
 * Localizes number string.
 *
 * @param {string} locale
 * @param {string} string
 * @param {number} fractionalDigits
 * @returns {string}
 */
let localizeNumber = (locale, string, fractionalDigits) => string.toLocaleString(locale, {
	minimumFractionDigits: fractionalDigits,
	maximumFractionDigits: fractionalDigits
});

/**
 * Extracts type info from a string.
 *
 * @param {string} literal
 * @returns {Object}
 */
let extractTypeInfo = (literal) => {
	let match = TYPE_REGEX.exec(literal);

	if (match) {
		return {type: match[1], options: match[3]};
	} else {
		return {type: 's', options: ''};
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
let localize = (value, i18n, {type, options}) => {
	let localizedValue;

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

let i18n;

/**
 * I18n class.
 * Singleton.
 */
export default class I18n {
	/**
	 * Creates an I18n instance.
	 *
	 * @returns {I18n}
	 */
	constructor() {
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
	use({strings = {}, currency = '$', locale = 'en-US'} = {}) {
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
	translate(literals, ...values) {
		let translationKey = buildKey(literals);
		let translationString;

		if (this.strings[translationKey]) {
			translationString = this.strings[translationKey][this.locale];
		}

		if (!translationString) {
			translationString = translationKey;
		}

		if (translationString) {
			let typeInfoForValues = literals.slice(1).map(extractTypeInfo);
			let localizedValues = values.map((value, index) => localize(value, this, typeInfoForValues[index]));

			return buildMessage(translationString, ...localizedValues);
		}

		return 'Error: translation missing!';
	}
}
