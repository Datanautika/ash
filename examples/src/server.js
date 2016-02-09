import './internals/cssModules';

import Koa from 'koa';
import ash from 'ash';
import fs from 'fs';
import compress from 'koa-compress';
import logger from 'koa-logger';
import path from 'path';
import convertMiddleware from 'koa-convert';
import send from 'koa-send';
import http from 'http';
import chalk from 'chalk';
import Router from 'ash/Router';
import koaRouter from 'ash/koaRouter';
import I18n from 'ash/I18n';

import App from './components/App';
import i18nStrings from './config/i18nStrings';
import constants from './internals/constants';


const PORT = 8080;
const ROOT_PATH = path.join(__dirname, '../../');
const EN = constants.EN;

let app = new Koa();
let i18n = new I18n();

i18n.use({
	strings: i18nStrings,
	locale: EN,
	currency: '$'
});

app.use(convertMiddleware(logger()));

app.use(async (context, next) => {
	let options = {
		root: path.resolve(path.join(ROOT_PATH, 'public'))
	};

	if (context.method !== 'HEAD' && context.method !== 'GET') {
		return;
	}

	// response is already handled
	if (context.body && context.body !== null /*|| context.status !== 404*/) {
		return;
	}

	await send(context, context.path, options);
	await next();
});

// init router
let router = new Router();

app.use(koaRouter(router, async (context, next) => {
	if (context.method !== 'HEAD' && context.method !== 'GET') {
		return;
	}

	// response is already handled
	if (context.body && context.body !== null /*|| context.status !== 404*/) {
		return;
	}

	let viewStream = new ash.ViewStream(<App />);
	let componentHtml = await ash.stringifyViewStream(viewStream);

	context.body = fs.readFileSync(path.join(ROOT_PATH, 'assets/index.html'), 'utf8').replace('%CONTENT%', componentHtml);

	await next();
}));

// compression
app.use(convertMiddleware(compress()));

http.createServer(app.callback()).listen(process.env.PORT || PORT);

console.log(chalk.gray(`Listening on port ${process.env.PORT || PORT}...`));
