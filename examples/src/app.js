import ash from 'ash';
import Router from 'ash/Router';
import I18n from 'ash/I18n';

import App from './components/App';
import i18nStrings from './config/i18nStrings';
import constants from './internals/constants';


const EN = constants.EN;

// init i18n
let i18n = new I18n();

i18n.use({
	strings: i18nStrings,
	locale: EN,
	currency: '$'
});

// init routing
let router = new Router();

router.start();

// init renderering
let viewStream = global.viewStream = new ash.ViewStream(<App />);

ash.renderViewStream(viewStream, global.document.querySelector('.page'));
