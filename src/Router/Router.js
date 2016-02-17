import support from '../core/support';
import Stream from '../core/stream/Stream';
import constants from '../core/internals/constants';


const CLIENT_PLATFORM = constants.CLIENT_PLATFORM;

// regex for stripping a leading hash/slash and trailing space.
const ROUTE_STRIPPER = /^[#\/]|\s+$/g;

// regex for stripping leading and trailing slashes.
const ROOT_STRIPPER = /^\/+|\/+$/g;

// regex for stripping urls of hash.
const PATH_STRIPPER = /#.*$/;

// regexes for matching named parameter parts and splatted parts of route strings.
const OPTIONAL_PARAM = /\((.*?)\)/g;
const NAMED_PARAM = /(\(\?)?:\w+/g;
const SPLAT_PARAM = /\*\w+/g;
const ESCAPE_REGEX = /[\-{}\[\]+?.,\\\^$|#\s]/g;

/**
 * Convert a route string into a regular expression, suitable for matching against the current location hash.
 *
 * @param {string} route
 * @returns {RegExp}
 */
function routeToRegExp(route) {
	let parameterNames = [];
	let routeRegExp = new RegExp('^' + route.replace(ESCAPE_REGEX, '\\$&')
		.replace(OPTIONAL_PARAM, '(?:$1)?')
		.replace(NAMED_PARAM, (match, optional) => {
			parameterNames.push(match.slice(1));
			
			return optional ? match : '([^/?]+)';
		})
		.replace(SPLAT_PARAM, '([^?]*?)') + '(?:\\?([\\s\\S]*))?$');

	routeRegExp.parameterNames = parameterNames;

	return routeRegExp;
}

/**
 * Given a route, and a URL fragment that it matches, return the array of extracted decoded parameters. Empty or unmatched parameters will be treated as `null` to normalize cross-browser behavior.
 *
 * @param {RegExp} routeRegExp
 * @param {string} fragment
 * @returns {Array}
 */
function extractParameters(routeRegExp, fragment) {
	let parameters = routeRegExp.exec(fragment).slice(1);

	return parameters.map((parameter, i) => {
		if (i === parameters.length - 1) {
			// don't decode the search parameters
			return parameter || null;
		}

		return parameter ? decodeURIComponent(parameter) : null;
	});
}

/**
 * Normalizes path fragment by stripping a leading hash/slash and trailing space.
 *
 * @param {string} fragment
 * @returns {string}
 */
function normalizePathFragment(fragment) {
	return fragment.replace(ROUTE_STRIPPER, '');
}

let router;

/**
 * Router class.
 * Singleton.
 */
export default class Router {
	routes = [];
	isStarted = false;
	location = global.location ? global.location : null;
	history = global.history ? global.history : null;
	fragment = '';

	/**
	 * Creates a router instance.
	 *
	 * @returns {Router}
	 */
	constructor() {
		router = router ? router : this;

		return router;
	}

	/**
	 * Are we at the app root?
	 */
	get isAtRoot() {
		return support.platform === CLIENT_PLATFORM ? this.location && this.location.pathname.replace(/[^\/]$/, '$&/') === this.root && !this.search : '';
	}

	/**
	 * In IE6, the hash fragment and search params are incorrect if the fragment contains `?`
	 */
	get search() {
		let match = this.location.href.replace(/#.*/, '').match(/\?.+/);

		return match ? match[0] : '';
	}

	/**
	 * Get the pathname and search params, without the root.
	 */
	get path() {
		if (support.platform !== CLIENT_PLATFORM) {
			return '';
		}

		let path = decodeURI(this.location.pathname + this.search);
		let root = this.root.slice(0, -1);

		if (!path.indexOf(root)) {
			path = path.slice(root.length);
		}

		return path.slice(1).replace(ROUTE_STRIPPER, '');
	}

	/**
	 * Starts the router.
	 * @param {string} options.root
	 * @param {boolean} options.isSilent
	 * @returns {boolean}
	 */
	start({root = '/', isSilent = false} = {}) {
		this.root = root;
		this.isSilent = isSilent;
		this.fragment = this.path;

		// Normalize root to always include a leading and trailing slash.
		this.root = ('/' + this.root + '/').replace(ROOT_STRIPPER, '/');

		if (support.platform === CLIENT_PLATFORM) {
			global.addEventListener('popstate', () => {
				let current = this.path;

				if (current === this.fragment) {
					return false;
				}

				this.__loadUrl(current);
			});
		}

		this.isStarted = true;

		if (support.platform === CLIENT_PLATFORM && !this.isSilent) {
			return this.__loadUrl(this.fragment);
		}

		return false;
	}

	/**
	 * Stops the router.
	 *
	 * @returns {boolean}
	 */
	stop() {
		// Remove window listeners
		if (support.platform === CLIENT_PLATFORM) {
			global.removeEventListener('popstate');
		}

		this.isStarted = false;

		return false;
	}

	__loadUrl(fragment = '', context) {
		this.fragment = normalizePathFragment(fragment);

		for (let i = 0; i < this.routes.length; i++) {
			if (this.routes[i].route.test(this.fragment)) {
				let parameterNames = this.routes[i].route.parameterNames.concat('search');
				let parameters = extractParameters(this.routes[i].route, this.fragment);
				let result = {};

				if (context && context.request && context.response) {
					result.context = context;
				}

				for (let j = 0; j < parameterNames.length; j++) {
					result[parameterNames[j]] = parameters[j];
				}

				this.routes[i].stream.push(result);

				return true;
			}
		}

		return false;
	}

	/**
	 * Updates the URL.
	 * Works iff router is started and the script is running in browser.
	 *
	 * @param {string} fragment
	 * @param {boolean} options.trigger
	 * @param {boolean} options.replace
	 * @returns {boolean}
	 */
	navigate(fragment = '', {trigger = true, replace = false} = {}) {
		if (!this.isStarted || support.platform !== CLIENT_PLATFORM) {
			return false;
		}

		let newFragment = normalizePathFragment(fragment);
		let url = this.root + newFragment;

		// Strip the hash and decode for matching.
		newFragment = decodeURI(newFragment.replace(PATH_STRIPPER, ''));

		if (this.fragment === newFragment) {
			return false;
		}

		this.fragment = newFragment;

		// Don't include a trailing slash on the root.
		if (this.fragment === '' && url !== '/') {
			url = url.slice(0, -1);
		}

		// set the fragment as a real URL.
		this.history[replace ? 'replaceState' : 'pushState']({}, global.document.title, url);

		if (trigger) {
			return this.__loadUrl(this.fragment);
		}
	}

	/**
	 * Creates route.
	 *
	 * @param {string} route
	 * @param {?Stream} stream
	 * @returns {Stream}
	 */
	add(route, stream = new Stream()) {
		this.routes.unshift({
			route: routeToRegExp(route),
			stream: stream instanceof Stream ? stream : new Stream()
		});

		return this.routes[0].stream;
	}
}
