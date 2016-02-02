import Router from 'ash/Router';

import constants from '../internals/constants';


const EN = constants.EN;
const CZ = constants.CZ;

let router = new Router();
let routeStream = router.add('(:language)(/:page)(/:story)(/)').map((value) => {
	let {language, page, story} = value;

	if (language !== CZ && language !== EN) {
		story = page;
		page = language;
		language = null;
	}

	return {page, language, story};
});

export default routeStream;
