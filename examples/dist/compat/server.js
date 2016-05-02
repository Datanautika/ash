'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _koaRouter = require('ash/koaRouter');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _I18n = require('ash/I18n');

var _I18n2 = _interopRequireDefault(_I18n);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _i18nStrings = require('./config/i18nStrings');

var _i18nStrings2 = _interopRequireDefault(_i18nStrings);

var _constants = require('./internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 8080;
var ROOT_PATH = _path2.default.join(__dirname, '../../');
var EN = _constants2.default.EN;

var app = new _koa2.default();
var i18n = new _I18n2.default();

i18n.use({
	strings: _i18nStrings2.default,
	locale: EN,
	currency: '$'
});

app.use((0, _koaConvert2.default)((0, _koaLogger2.default)()));

app.use(function () {
	var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(context, next) {
		var options;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						options = {
							root: _path2.default.resolve(_path2.default.join(ROOT_PATH, 'public'))
						};

						if (!(context.method !== 'HEAD' && context.method !== 'GET')) {
							_context.next = 3;
							break;
						}

						return _context.abrupt('return');

					case 3:
						if (!(context.body && context.body !== null /*|| context.status !== 404*/)) {
							_context.next = 5;
							break;
						}

						return _context.abrupt('return');

					case 5:
						_context.next = 7;
						return (0, _koaSend2.default)(context, context.path, options);

					case 7:
						_context.next = 9;
						return next();

					case 9:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));
	return function (_x, _x2) {
		return ref.apply(this, arguments);
	};
}());

// init router
var router = new _Router2.default();

app.use((0, _koaRouter2.default)(router, function () {
	var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(context, next) {
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						if (!(context.method !== 'HEAD' && context.method !== 'GET')) {
							_context2.next = 2;
							break;
						}

						return _context2.abrupt('return');

					case 2:
						if (!(context.body && context.body !== null /*|| context.status !== 404*/)) {
							_context2.next = 4;
							break;
						}

						return _context2.abrupt('return');

					case 4:

						// let viewStream = new ash.ViewStream(<App />);
						// let componentHtml = await ash.stringifyViewStream(viewStream);

						context.body = _fs2.default.readFileSync(_path2.default.join(ROOT_PATH, 'assets/index.html'), 'utf8') /*.replace('%CONTENT%', componentHtml)*/;

						_context2.next = 7;
						return next();

					case 7:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));
	return function (_x3, _x4) {
		return ref.apply(this, arguments);
	};
}()));

// compression
app.use((0, _koaConvert2.default)((0, _koaCompress2.default)()));

_http2.default.createServer(app.callback()).listen(process.env.PORT || PORT);

console.log(_chalk2.default.gray('Listening on port ' + (process.env.PORT || PORT) + '...'));