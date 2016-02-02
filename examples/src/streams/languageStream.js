import ash from 'ash';
import I18n from 'ash/I18n';

import routeStream from './routeStream';
import constants from '../internals/constants';
import i18nStrings from '../config/i18nStrings';


const EN = constants.EN;
const CZ = constants.CZ;

let i18n = new I18n();
let languageStram = new ash.Stream({
	previous: null,
	current: EN
});

languageStram.combine((dependency, self) => {
	let value = self.get();
	let {language} = dependency.get();

	if (language !== value.current && (language === CZ || language === EN)) {
		let newValue = {
			current: language,
			previous: value.current
		};

		if (language === CZ) {
			i18n.use({
				strings: i18nStrings,
				locale: CZ,
				currency: 'CZK'
			});
		} else if (language === EN) {
			i18n.use({
				strings: i18nStrings,
				locale: EN,
				currency: '$'
			});
		}

		self.push(newValue);
	}
}, routeStream);

export default languageStram;
