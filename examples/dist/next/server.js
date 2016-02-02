'use strict';

require('./internals/cssModules');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _ash = require('ash');

var _ash2 = _interopRequireDefault(_ash);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _koaCompress = require('koa-compress');

var _koaCompress2 = _interopRequireDefault(_koaCompress);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaSend = require('koa-send');

var _koaSend2 = _interopRequireDefault(_koaSend);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _Router = require('ash/Router');

var _Router2 = _interopRequireDefault(_Router);

var _I18n = require('ash/I18n');

var _I18n2 = _interopRequireDefault(_I18n);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _i18nStrings = require('./config/i18nStrings');

var _i18nStrings2 = _interopRequireDefault(_i18nStrings);

var _constants = require('./internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

const PORT = 8080;
const ROOT_PATH = _path2.default.join(__dirname, '../../');
const EN = _constants2.default.EN;

let app = new _koa2.default();
let i18n = new _I18n2.default();

i18n.use({
	strings: _i18nStrings2.default,
	locale: EN,
	currency: '$'
});

app.use((0, _koaConvert2.default)((0, _koaLogger2.default)()));

app.use((() => {
	var ref = _asyncToGenerator(function* (context, next) {
		let options = {
			root: _path2.default.resolve(_path2.default.join(ROOT_PATH, 'public'))
		};

		if (context.method !== 'HEAD' && context.method !== 'GET') {
			return;
		}

		// response is already handled
		if (context.body && context.body !== null /*|| context.status !== 404*/) {
				return;
			}

		yield (0, _koaSend2.default)(context, context.path, options);
		yield next();
	}),
	    _this = undefined;

	return function (_x, _x2) {
		return ref.apply(_this, arguments);
	};
})());

// init router
let router = new _Router2.default();

app.use(router.middleware((() => {
	var ref = _asyncToGenerator(function* (context, next) {
		if (context.method !== 'HEAD' && context.method !== 'GET') {
			return;
		}

		// response is already handled
		if (context.body && context.body !== null /*|| context.status !== 404*/) {
				return;
			}

		let viewStream = new _ash2.default.ViewStream(_ash2.default.createElement(_App2.default, null));
		let componentHtml = yield _ash2.default.stringifyViewStream(viewStream);

		context.body = _fs2.default.readFileSync(_path2.default.join(ROOT_PATH, 'assets/index.html'), 'utf8').replace('%CONTENT%', componentHtml);

		yield next();
	}),
	    _this = undefined;

	return function (_x3, _x4) {
		return ref.apply(_this, arguments);
	};
})()));

// compression
app.use((0, _koaConvert2.default)((0, _koaCompress2.default)()));

_http2.default.createServer(app.callback()).listen(process.env.PORT || PORT);

console.log(_chalk2.default.gray(`Listening on port ${ process.env.PORT || PORT }...`));