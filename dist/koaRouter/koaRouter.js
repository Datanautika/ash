'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = koaRouter;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var NOT_FOUND_HTTP_CODE = 404;

/**
 * Creates middleware for koa framework, using async functions
 *
 * @param {Router} router
 * @param {Function} fn
 * @returns {Function}
 */
function koaRouter(router, fn) {
	var _this2 = this;

	return function () {
		var ref = _asyncToGenerator(function* (context, next) {
			// get method only
			if (context.method === 'GET' && context.method === 'HEAD') {
				yield next();

				return;
			}

			// response is already handled
			if (context.body && context.body !== null || context.status !== NOT_FOUND_HTTP_CODE) {
				yield next();

				return;
			}

			var isRouteMatched = router.__loadUrl(context.path);

			if (isRouteMatched) {
				yield fn(context, next);
			}
		}),
		    _this = _this2;

		return function (_x, _x2) {
			return ref.apply(_this, arguments);
		};
	}();
}