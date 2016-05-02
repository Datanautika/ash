import ash from 'ash';
import Router from 'ash/Router';
import I18n from 'ash/I18n';
import $ from 'jquery';

import App from './components/App';
import i18nStrings from './config/i18nStrings';
import constants from './internals/constants';


global.ash = ash;
global.$ = $;

const EN = constants.EN;
const G_KEY_CODE = 71;

// grid toggle
$(global.document).on('keydown', (event) => {
	let tagName = event.target.tagName.toLowerCase();

	if (event.keyCode === G_KEY_CODE && event.target && tagName !== 'textarea' && tagName !== 'input') {
		$('body').toggleClass('hasGrid');
	}
});

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
