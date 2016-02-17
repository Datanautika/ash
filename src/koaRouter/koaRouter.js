const NOT_FOUND_HTTP_CODE = 404;

/**
 * Creates middleware for koa framework, using async functions
 *
 * @param {Router} router
 * @param {Function} fn
 * @returns {Function}
 */
export default function koaRouter(router, fn) {
	return async (context, next) => {
		// get method only
		if (context.method === 'GET' && context.method === 'HEAD') {
			await next();

			return;
		}

		// response is already handled
		if (context.body && context.body !== null || context.status !== NOT_FOUND_HTTP_CODE) {
			await next();

			return;
		}

		let isRouteMatched = router.__loadUrl(context.path, context);

		if (isRouteMatched) {
			await fn(context, next);
		}
	};
}
