'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _support = require('../core/support');

var _support2 = _interopRequireDefault(_support);

var _Stream = require('../core/stream/Stream');

var _Stream2 = _interopRequireDefault(_Stream);

var _constants = require('../core/internals/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CLIENT_PLATFORM = _constants2.default.CLIENT_PLATFORM;

// regex for stripping a leading hash/slash and trailing space.
var ROUTE_STRIPPER = /^[#\/]|\s+$/g;

// regex for stripping leading and trailing slashes.
var ROOT_STRIPPER = /^\/+|\/+$/g;

// regex for stripping urls of hash.
var PATH_STRIPPER = /#.*$/;

// regexes for matching named parameter parts and splatted parts of route strings.
var OPTIONAL_PARAM = /\((.*?)\)/g;
var NAMED_PARAM = /(\(\?)?:\w+/g;
var SPLAT_PARAM = /\*\w+/g;
var ESCAPE_REGEX = /[\-{}\[\]+?.,\\\^$|#\s]/g;

/**
 * Convert a route string into a regular expression, suitable for matching against the current location hash.
 *
 * @param {string} route
 * @returns {RegExp}
 */
function routeToRegExp(route) {
	var parameterNames = [];
	var routeRegExp = new RegExp('^' + route.replace(ESCAPE_REGEX, '\\$&').replace(OPTIONAL_PARAM, '(?:$1)?').replace(NAMED_PARAM, function (match, optional) {
		parameterNames.push(match.slice(1));

		return optional ? match : '([^/?]+)';
	}).replace(SPLAT_PARAM, '([^?]*?)') + '(?:\\?([\\s\\S]*))?$');

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
	var parameters = routeRegExp.exec(fragment).slice(1);

	return parameters.map(function (parameter, i) {
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

var router = undefined;

/**
 * Router class.
 * Singleton.
 */

var Router = function () {

	/**
  * Creates a router instance.
  *
  * @returns {Router}
  */

	function Router() {
		_classCallCheck(this, Router);

		this.routes = [];
		this.isStarted = false;
		this.location = global.location ? global.location : null;
		this.history = global.history ? global.history : null;
		this.fragment = '';

		router = router ? router : this;

		return router;
	}

	/**
  * Are we at the app root?
  */

	_createClass(Router, [{
		key: 'start',

		/**
   * Starts the router.
   * @param {string} options.root
   * @param {boolean} options.isSilent
   * @returns {boolean}
   */
		value: function start() {
			var _this = this;

			var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

			var _ref$root = _ref.root;
			var root = _ref$root === undefined ? '/' : _ref$root;
			var _ref$isSilent = _ref.isSilent;
			var isSilent = _ref$isSilent === undefined ? false : _ref$isSilent;

			this.root = root;
			this.isSilent = isSilent;
			this.fragment = this.path;

			// Normalize root to always include a leading and trailing slash.
			this.root = ('/' + this.root + '/').replace(ROOT_STRIPPER, '/');

			if (_support2.default.platform === CLIENT_PLATFORM) {
				global.addEventListener('popstate', function () {
					var current = _this.path;

					if (current === _this.fragment) {
						return false;
					}

					_this.__loadUrl(current);
				});
			}

			this.isStarted = true;

			if (_support2.default.platform === CLIENT_PLATFORM && !this.isSilent) {
				return this.__loadUrl(this.fragment);
			}

			return false;
		}

		/**
   * Stops the router.
   *
   * @returns {boolean}
   */

	}, {
		key: 'stop',
		value: function stop() {
			// Remove window listeners
			if (_support2.default.platform === CLIENT_PLATFORM) {
				global.removeEventListener('popstate');
			}

			this.isStarted = false;

			return false;
		}
	}, {
		key: '__loadUrl',
		value: function __loadUrl() {
			var fragment = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
			var context = arguments[1];

			this.fragment = normalizePathFragment(fragment);

			for (var i = 0; i < this.routes.length; i++) {
				if (this.routes[i].route.test(this.fragment)) {
					var parameterNames = this.routes[i].route.parameterNames.concat('search');
					var parameters = extractParameters(this.routes[i].route, this.fragment);
					var result = {};

					if (context && context.request && context.response) {
						result.context = context;
					}

					for (var j = 0; j < parameterNames.length; j++) {
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

	}, {
		key: 'navigate',
		value: function navigate() {
			var fragment = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

			var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			var _ref2$trigger = _ref2.trigger;
			var trigger = _ref2$trigger === undefined ? true : _ref2$trigger;
			var _ref2$replace = _ref2.replace;
			var replace = _ref2$replace === undefined ? false : _ref2$replace;

			if (!this.isStarted || _support2.default.platform !== CLIENT_PLATFORM) {
				return false;
			}

			var newFragment = normalizePathFragment(fragment);
			var url = this.root + newFragment;

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

	}, {
		key: 'add',
		value: function add(route) {
			var stream = arguments.length <= 1 || arguments[1] === undefined ? new _Stream2.default() : arguments[1];

			this.routes.unshift({
				route: routeToRegExp(route),
				stream: stream instanceof _Stream2.default ? stream : new _Stream2.default()
			});

			return this.routes[0].stream;
		}
	}, {
		key: 'isAtRoot',
		get: function get() {
			return _support2.default.platform === CLIENT_PLATFORM ? this.location && this.location.pathname.replace(/[^\/]$/, '$&/') === this.root && !this.search : '';
		}

		/**
   * In IE6, the hash fragment and search params are incorrect if the fragment contains `?`
   */

	}, {
		key: 'search',
		get: function get() {
			var match = this.location.href.replace(/#.*/, '').match(/\?.+/);

			return match ? match[0] : '';
		}

		/**
   * Get the pathname and search params, without the root.
   */

	}, {
		key: 'path',
		get: function get() {
			if (_support2.default.platform !== CLIENT_PLATFORM) {
				return '';
			}

			var path = decodeURI(this.location.pathname + this.search);
			var root = this.root.slice(0, -1);

			if (!path.indexOf(root)) {
				path = path.slice(root.length);
			}

			return path.slice(1).replace(ROUTE_STRIPPER, '');
		}
	}]);

	return Router;
}();

exports.default = Router;