/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _ash = __webpack_require__(1);

	var _ash2 = _interopRequireDefault(_ash);

	var _Router = __webpack_require__(57);

	var _Router2 = _interopRequireDefault(_Router);

	var _I18n = __webpack_require__(59);

	var _I18n2 = _interopRequireDefault(_I18n);

	var _App = __webpack_require__(61);

	var _App2 = _interopRequireDefault(_App);

	var _i18nStrings = __webpack_require__(117);

	var _i18nStrings2 = _interopRequireDefault(_i18nStrings);

	var _constants = __webpack_require__(114);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EN = _constants2.default.EN;

	// init i18n
	var i18n = new _I18n2.default();

	i18n.use({
		strings: _i18nStrings2.default,
		locale: EN,
		currency: '$'
	});

	// init routing
	var router = new _Router2.default();

	router.start();

	// init renderering
	var viewStream = global.viewStream = new _ash2.default.ViewStream(_ash2.default.createElement(_App2.default, null));

	_ash2.default.renderViewStream(viewStream, global.document.querySelector('.page'));
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _support = __webpack_require__(2);

	var _support2 = _interopRequireDefault(_support);

	var _ash = __webpack_require__(4);

	var _ash2 = _interopRequireDefault(_ash);

	var _config = __webpack_require__(5);

	var _Component = __webpack_require__(15);

	var _Component2 = _interopRequireDefault(_Component);

	var _AshElement = __webpack_require__(21);

	var _AshElement2 = _interopRequireDefault(_AshElement);

	var _ViewStream = __webpack_require__(25);

	var _ViewStream2 = _interopRequireDefault(_ViewStream);

	var _Stream = __webpack_require__(20);

	var _Stream2 = _interopRequireDefault(_Stream);

	var _isAncestor = __webpack_require__(19);

	var _isAncestor2 = _interopRequireDefault(_isAncestor);

	var _flattenTree = __webpack_require__(33);

	var _flattenTree2 = _interopRequireDefault(_flattenTree);

	var _renderViewStream = __webpack_require__(34);

	var _renderViewStream2 = _interopRequireDefault(_renderViewStream);

	var _stringifyViewStream = __webpack_require__(54);

	var _stringifyViewStream2 = _interopRequireDefault(_stringifyViewStream);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Ash object.
	 *
	 * @version 0.3.0
	 */
	var ash = {
		/**
	  * Version number.
	  *
	  * @type {string}
	  */
		VERSION: '0.3.0',

		/**
	  * Support object.
	  *
	  * @link  {support}
	  */
		support: _support2.default,

		/**
	  * Class names for internal CSS.
	  *
	  * @type {object}
	  */
		styles: _ash2.default,

		get config() {
			return (0, _config.getConfig)();
		},

		set config(configObject) {
			(0, _config.setConfig)(configObject);
		},

		Component: _Component2.default,
		ViewStream: _ViewStream2.default,
		createElement: _AshElement2.default.create,

		Stream: _Stream2.default,

		renderViewStream: _renderViewStream2.default,
		stringifyViewStream: _stringifyViewStream2.default,

		isAncestor: _isAncestor2.default,
		flattenTree: _flattenTree2.default
	};

	exports.default = ash;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLIENT_PLATFORM = _constants2.default.CLIENT_PLATFORM;
	var SERVER_PLATFORM = _constants2.default.SERVER_PLATFORM;
	var DOCUMENT_FRAGMENT_NODE = 11;

	var testObject = { __proto__: [] };

	/**
	 * An object environment feature flags.
	 */
	var support = {};

	/**
	 * Is true if certain javascript features are supported.
	 */
	support.modernJavascript = typeof Object.getOwnPropertyNames && typeof Object.getPrototypeOf === 'function' && typeof Object.defineProperties === 'function' && typeof Object.freeze === 'function' && typeof Object.freeze === 'function' && typeof Function.prototype.bind === 'function' && typeof Array.isArray === 'function' && testObject instanceof Array;

	/**
	 * Is true if all needed browser APIs are supported.
	 */
	support.browser = !!(global.history && global.history.pushState && global.requestAnimationFrame && global.getComputedStyle);

	/**
	 * Detect if the DOM is supported.
	 */
	try {
	  support.dom = global.document.createDocumentFragment().nodeType === DOCUMENT_FRAGMENT_NODE && typeof global.addEventListener === 'function';
	} catch (error) {
	  support.dom = false;
	}

	// add supported class to <html>
	if (support.modernJavascript && support.browser && support.dom) {
	  global.document.documentElement.className = global.document.documentElement.className.replace(new RegExp('(^|\\b)' + 'no-js'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	  global.document.documentElement.className += ' js ash--supported';
	  global.document.documentElement.className = global.document.documentElement.className.trim();
	}

	/**
	 * Returns string based on the platform (ie. server or client) ash is running on.
	 */
	support.platform = typeof exports !== 'undefined' && typeof global.process === 'object' ? SERVER_PLATFORM : CLIENT_PLATFORM;

	if (!support.modernJavascript) {
	  throw new Error('Unsupported javascript engine.');
	}

	exports.default = support;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		// component lifecycle
		LIFECYCLE_UNMOUNTED: 'Unmounted',
		LIFECYCLE_MOUNTING: 'Mounting',
		LIFECYCLE_MOUNTED: 'Mounted',
		LIFECYCLE_UNINITIALIZED: 'Uninitialized',

		// patch types
		PATCH_ELEMENT_ASH_NODE: 'Patch Element Ash Node',
		PATCH_TEXT_ASH_NODE: 'Patch Text Ash Node',
		PATCH_PROPERTIES: 'Patch Properties',
		PATCH_ORDER: 'Patch Order',
		PATCH_INSERT: 'Patch Insert',
		PATCH_REMOVE: 'Patch Remove',

		// AshElement types
		COMPONENT_ASH_ELEMENT: 'Component Ash Element',
		ASH_NODE_ASH_ELEMENT: 'Ash Node Ash Element',
		FUNCTION_ASH_ELEMENT: 'Function Ash Element',

		// AshNode types
		TEXT_ASH_NODE: 'Text Ash Node',
		ELEMENT_ASH_NODE: 'Element Ash Node',

		// misc
		INDEX_SEPARATOR: '.',
		ID_ATTRIBUTE_NAME: '__ash:id__',
		INDEX_ATTRIBUTE_NAME: '__ash:index__',
		STREAM_ID_ATTRIBUTE_NAME: '__ash:stream__',

		// platform
		CLIENT_PLATFORM: 'client',
		SERVER_PLATFORM: 'server'
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"storyTitleHeading":"ash__storyTitleHeading","storyLevel1Heading":"ash__storyLevel1Heading","storyLevel2Heading":"ash__storyLevel2Heading","storyLevel3Heading":"ash__storyLevel3Heading","storyLevel4Heading":"ash__storyLevel4Heading","sectionTitleHeading":"ash__sectionTitleHeading","sectionLevel1Heading":"ash__sectionLevel1Heading","sectionLevel2Heading":"ash__sectionLevel2Heading","sectionLevel3Heading":"ash__sectionLevel3Heading","sectionLevel4Heading":"ash__sectionLevel4Heading","author":"ash__author","list":"ash__list","orderedList":"ash__orderedList","table":"ash__table","tableHead":"ash__tableHead","tableCell":"ash__tableCell","tableBody":"ash__tableBody"};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.setConfig = setConfig;
	exports.getConfig = getConfig;

	var _defaults = __webpack_require__(6);

	var _defaults2 = _interopRequireDefault(_defaults);

	var _assign = __webpack_require__(14);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var config = _defaults2.default;

	function setConfig(userConfig) {
		config = (0, _assign2.default)({}, _defaults2.default, userConfig);

		return config;
	}

	function getConfig() {
		return config;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _grid = __webpack_require__(7);

	var _grid2 = _interopRequireDefault(_grid);

	var _colors = __webpack_require__(8);

	var _colors2 = _interopRequireDefault(_colors);

	var _durations = __webpack_require__(9);

	var _durations2 = _interopRequireDefault(_durations);

	var _typographicScale = __webpack_require__(10);

	var _typographicScale2 = _interopRequireDefault(_typographicScale);

	var _text = __webpack_require__(11);

	var _text2 = _interopRequireDefault(_text);

	var _heading = __webpack_require__(12);

	var _heading2 = _interopRequireDefault(_heading);

	var _link = __webpack_require__(13);

	var _link2 = _interopRequireDefault(_link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaults = {
		grid: _grid2.default,
		colors: _colors2.default,
		durations: _durations2.default,
		typographicScale: _typographicScale2.default,
		text: _text2.default,
		heading: _heading2.default,
		link: _link2.default
	};

	exports.default = defaults;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var grid = {
		baselineHeight: 28,
		columns: 12,
		baselineToGutterRatio: 2,
		breakpoints: {
			base: [['1px', '100px'], ['101px', '200px'], ['201px', '300px'], ['301px', '400px'], ['401px', '500px'], ['501px', '600px'], ['601px', '700px'], ['701px', '800px'], ['801px', '900px'], ['901px', '1000px'], ['1001px', '1100px'], ['1101px', '1200px'], ['1201px', '1300px'], ['1301px', '1400px'], ['1401px', '1500px'], ['1501px', '1600px'], ['1601px', '1700px'], ['1701px', '1800px'], ['1801px', '1900px'], ['1901px', '2000px'], ['2001px', '9999px']],
			devices: [['1px', '320px'], ['321px', '480px'], ['481px', '640px'], ['641px', '768px'], ['769px', '800px'], ['801px', '853px'], ['854px', '1024px'], ['1025px', '1280px'], ['1281px', '1366px'], ['1367px', '1440px'], ['1441px', '1600px'], ['1601px', '1920px'], ['1921px', '2560px'], ['2561px', '9999px']]
		}
	};

	grid.gutterWidth = grid.baselineToGutterRatio * grid.baselineHeight;

	exports.default = grid;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var colors = {
		1: {
			base: '#ffb81d',
			shade: {
				1: '#cc9317',
				2: '#996e11',
				3: '#66490b',
				4: '#322405'
			},
			tint: {
				1: '#ffbf33',
				2: '#ffc64a',
				3: '#ffcd60',
				4: '#ffd477'
			}
		},
		2: {
			base: '#60d1e0',
			shade: {
				1: '#4ca7b3',
				2: '#397d86',
				3: '#265359',
				4: '#13292c'
			},
			tint: {
				1: '#6fd5e3',
				2: '#7fdae6',
				3: '#8fdee9',
				4: '#9fe3ec',
				5: '#bfecf2',
				6: '#dff5f8'
			}
		},
		3: {
			base: '#185a7d',
			shade: {
				1: '#134864',
				2: '#0e364b',
				3: '#092432',
				4: '#041118'
			},
			tint: {
				1: '#2f6a8a',
				2: '#467b97',
				3: '#5d8ba4',
				4: '#749cb1'
			}
		},
		4: {
			base: '#3f2b56',
			shade: {
				1: '#322244',
				2: '#251933',
				3: '#191122',
				4: '#0c0811'
			},
			tint: {
				1: '#524066',
				2: '#655577',
				3: '#786a88',
				4: '#8b7f99'
			}
		},
		5: {
			base: '#3d3935',
			shade: {
				1: '#282623',
				2: '#141312',
				3: '#000'
			},
			tint: {
				1: '#63605d',
				2: '#8a8885',
				3: '#b1afae',
				4: '#c4c3c2',
				5: '#d8d7d6',
				6: '#e1e1e0',
				7: '#ebebea',
				8: '#f5f5f4',
				9: '#fff'
			}
		},
		6: {
			base: '#ff0000'
			// shade: {
			// 	1: '#282623',
			// 	2: '#141312',
			// 	3: '#000'
			// },
			// tint: {
			// 	1: '#63605d',
			// 	2: '#8a8885',
			// 	3: '#b1afae',
			// 	4: '#c4c3c2',
			// 	5: '#d8d7d6',
			// 	6: '#e1e1e0',
			// 	7: '#ebebea',
			// 	8: '#f5f5f4',
			// 	9: '#fff'
			// }
		},
		sequential: [['#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'], ['#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'], ['#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'], ['#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'], ['#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'], ['#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'], ['#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'], ['#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'], ['#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'], ['#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'], ['#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'], ['#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'], ['#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'], ['#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'], ['#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'], ['#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'], ['#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'], ['#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000']],
		diverging: [['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'], ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'], ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'], ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'], ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'], ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'], ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'], ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'], ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837']],
		qualitative: [['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'], ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'], ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'], ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2'], ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'], ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'], ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'], ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f']]
	};

	colors.text = colors[5].shade[1];
	colors.background = colors[5].tint[9];
	colors.primary1 = colors[1];
	colors.secondary1 = colors[2];
	colors.secondary2 = colors[3];
	colors.secondary3 = colors[4];
	colors.neutral = colors[5];
	colors.negative = colors[6];

	exports.default = colors;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var durations = {
		1: 0.15,
		2: 0.2,
		3: 0.4,
		4: 0.6,
		5: 0.8,
		6: 1.2,
		7: 1.6,
		8: 2,
		9: 2.5,
		10: 3,
		11: 3.5,
		12: 4,
		13: 6,
		14: 8,
		15: 10,
		16: 12,
		17: 14,
		18: 16,
		19: 18,
		20: 20
	};

	durations.fastest = 0.1;
	durations.faster = 0.2;
	durations.fast = 0.4;
	durations.normal = 0.6;
	durations.slow = 0.8;
	durations.slower = 1.2;
	durations.slowest = 1.6;
	durations.shortest = 2;
	durations.shorter = 3;
	durations.short = 4;
	durations.long = 6;
	durations.longer = 8;
	durations.longest = 1;

	exports.default = durations;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var typographicScale = {
		1: 10,
		2: 12,
		3: 14,
		4: 16,
		5: 18,
		6: 20,
		7: 22,
		8: 24,
		9: 28,
		10: 32,
		11: 36,
		12: 40,
		13: 48,
		14: 60,
		15: 72,
		16: 84,
		17: 96,
		18: 108,
		19: 120,
		20: 132
	};

	typographicScale.base = typographicScale[6];

	exports.default = typographicScale;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _colors = __webpack_require__(8);

	var _colors2 = _interopRequireDefault(_colors);

	var _typographicScale = __webpack_require__(10);

	var _typographicScale2 = _interopRequireDefault(_typographicScale);

	var _grid = __webpack_require__(7);

	var _grid2 = _interopRequireDefault(_grid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var text = {
		color: _colors2.default.text,
		backgroundColor: _colors2.default.background,
		fontSize: _typographicScale2.default.base,
		lineHeight: _grid2.default.baselineHeight / _typographicScale2.default.base,
		fontWeight: 'normal',
		fontFeatures: '\'kern\', \'liga\', \'clig\', \'calt\', \'onum\', \'pnum\'',
		fontFamily: '\'Brandon Text\', Futura, \'Gill Sans\', Calibri, \'Dejavu Sans\', \'Lucida Sans\', sans-serif',

		selection: {
			color: _colors2.default.background,
			backgroundColor: _colors2.default.secondary2.base
		}
	};

	exports.default = text;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _colors = __webpack_require__(8);

	var _colors2 = _interopRequireDefault(_colors);

	var _typographicScale = __webpack_require__(10);

	var _typographicScale2 = _interopRequireDefault(_typographicScale);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var heading = {
		color: _colors2.default.text,
		fontFamily: '\'Brandon Grotesque\', Futura, \'Gill Sans\', Calibri, \'Dejavu Sans\', Arial, sans-serif',
		fontFeatures: '\'kern\', \'liga\', \'clig\', \'calt\', \'dlig\', \'lnum\', \'pnum\'',
		storyTitle: {
			fontSize: _typographicScale2.default[15],
			fontWeight: 700
		},
		storyLevel1: {
			fontSize: _typographicScale2.default[13],
			fontWeight: 700
		},
		storyLevel2: {
			fontSize: _typographicScale2.default[10],
			fontWeight: 700
		},
		storyLevel3: {
			fontSize: _typographicScale2.default[6],
			fontWeight: 700
		},
		storyLevel4: {
			fontSize: _typographicScale2.default[5],
			fontWeight: 700
		},
		sectionTitle: {
			fontSize: _typographicScale2.default[13],
			fontWeight: 700
		},
		sectionLevel1: {
			fontSize: _typographicScale2.default[6],
			fontWeight: 700
		},
		sectionLevel2: {
			fontSize: _typographicScale2.default[5],
			fontWeight: 700
		},
		sectionLevel3: {
			fontSize: _typographicScale2.default[4],
			fontWeight: 700
		},
		sectionLevel4: {
			fontSize: _typographicScale2.default[3],
			fontWeight: 700
		}
	};

	exports.default = heading;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _durations = __webpack_require__(9);

	var _durations2 = _interopRequireDefault(_durations);

	var _colors = __webpack_require__(8);

	var _colors2 = _interopRequireDefault(_colors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function sec(value) {
		return value + 's';
	}

	var link = {
		default: {
			color: _colors2.default.text,
			backgroundColor: 'transparent',
			fontWeight: 600,
			underlineWidth: 2,
			underlineColor: _colors2.default.secondary1.base,
			underlinePosition: '1.1em',
			transition: 'color ' + sec(_durations2.default.fastest) + ' ease-in, background-color ' + sec(_durations2.default.fastest) + ' ease-in, border-color ' + sec(_durations2.default.fastest) + ' ease-in'
		},
		visited: {
			color: _colors2.default.text,
			backgroundColor: 'transparent',
			underlineWidth: 2,
			underlineColor: _colors2.default.secondary1.base
		},
		focused: {
			color: _colors2.default.secondary1.base,
			backgroundColor: 'transparent',
			underlineWidth: 2,
			underlineColor: _colors2.default.secondary1.base,
			outline: '0 none'
		},
		hovered: {
			color: _colors2.default.secondary1.base,
			backgroundColor: 'transparent',
			underlineWidth: 2,
			underlineColor: _colors2.default.secondary1.base
		},

		heading: {
			default: {
				color: _colors2.default.text,
				backgroundColor: 'transparent',
				fontWeight: 'inherit',
				underlineWidth: 0,
				underlineColor: 'transparent',
				underlinePosition: '1.2em',
				transition: 'color ' + sec(_durations2.default.fastest) + ' ease-in, background-color ' + sec(_durations2.default.fastest) + ' ease-in, border-color ' + sec(_durations2.default.fastest) + ' ease-in'
			},
			visited: {
				color: _colors2.default.text,
				backgroundColor: 'transparent',
				underlineWidth: 0,
				underlineColor: 'transparent'
			},
			focused: {
				color: _colors2.default.secondary1.base,
				backgroundColor: 'transparent',
				underlineWidth: 0,
				underlineColor: 'transparent',
				outline: '0 none'
			},
			hovered: {
				color: _colors2.default.secondary1.base,
				backgroundColor: 'transparent',
				underlineWidth: 0,
				underlineColor: 'transparent'
			}
		}
	};

	exports.default = link;

/***/ },
/* 14 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = assign;
	var HAS_SYMBOLS = global.Symbol && Object.getOwnPropertySymbols;

	/**
	 * Copies enumerable properties of source objects onto `target`.
	 *
	 * @param {Object} target
	 * @param {...Object} sources
	 * @returns {Object}
	 */
	function assign() {
		var target = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			sources[_key - 1] = arguments[_key];
		}

		for (var i = 0; i < sources.length; i++) {
			if (typeof sources[i] !== 'object') {
				continue;
			}

			if (HAS_SYMBOLS) {
				var symbols = Object.getOwnPropertySymbols(sources[i]);

				for (var j = 0; j < symbols.length; j++) {
					if (sources[i].propertyIsEnumerable(symbols[j])) {
						target[symbols[j]] = sources[i][symbols[j]];
					}
				}
			}

			for (var prop in sources[i]) {
				if (sources[i].hasOwnProperty(prop) && typeof sources[i][prop] !== 'undefined' && sources[i][prop] !== null) {
					target[prop] = sources[i][prop];
				}
			}
		}

		return target;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _isAshNodeAshElement = __webpack_require__(16);

	var _isAshNodeAshElement2 = _interopRequireDefault(_isAshNodeAshElement);

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	var _assign = __webpack_require__(14);

	var _assign2 = _interopRequireDefault(_assign);

	var _findNode = __webpack_require__(17);

	var _findNode2 = _interopRequireDefault(_findNode);

	var _isFunction = __webpack_require__(18);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _isAncestor = __webpack_require__(19);

	var _isAncestor2 = _interopRequireDefault(_isAncestor);

	var _Stream = __webpack_require__(20);

	var _Stream2 = _interopRequireDefault(_Stream);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LIFECYCLE_UNMOUNTED = _constants2.default.LIFECYCLE_UNMOUNTED;
	var LIFECYCLE_MOUNTING = _constants2.default.LIFECYCLE_MOUNTING;
	var LIFECYCLE_MOUNTED = _constants2.default.LIFECYCLE_MOUNTED;
	var LIFECYCLE_UNINITIALIZED = _constants2.default.LIFECYCLE_UNINITIALIZED;

	/**
	 * Component class. You generally extend this class, but you don't instatiate those custom components; instead, you pass them class as a parameter of createElement function.
	 * During component instantiation, a) static component class properties which are instances of Stream, are copied onto the component instance, and b) all component class methods are bound to the component instance.
	 *
	 * @example
	 * class Foo extends ash.Component {
	 * 	static clickStream = new ash.Stream();
	 *
	 * 	render() {
	 * 		return ash.createElement('div', {events: {click: this.handleClick}});
	 * 	}
	 *
	 * 	handleClick(event) {
	 * 		// this is always bound to to Foo instance
	 * 		// this.clickStream refers to Foo.clickStream
	 * 		this.clickStream.push(event);
	 * 	}
	 * }
	 *
	 * createElement(Foo);
	 */

	var Component = function () {

		/**
	  * Creates a component with props of `props`.
	  * You generally don't create components instances, you just use them as AshElement Spec.
	  *
	  * @param {Object} props
	  * @returns {Component}
	  */

		function Component(props) {
			var _this = this;

			_classCallCheck(this, Component);

			this.__element = null;
			this.__isDirty = false;
			this.__previousLifecycle = LIFECYCLE_UNINITIALIZED;
			this.__currentLifecycle = LIFECYCLE_UNMOUNTED;
			this.props = null;
			this.state = null;

			this.update = this.update.bind(this);

			// autobind methods
			var prototype = Object.getPrototypeOf(this);

			Object.getOwnPropertyNames(prototype).forEach(function (value) {
				var descriptor = Object.getOwnPropertyDescriptor(prototype, value);

				// typeof must be used to avoid executing getter and setters
				if (!(descriptor && (typeof descriptor.get !== 'undefined' || typeof descriptor.set !== 'undefined')) && (0, _isFunction2.default)(_this[value]) && value !== 'constructor') {
					_this[value] = _this[value].bind(_this);
				}
			});

			if (this.constructor.props) {
				this.props = (0, _assign2.default)({}, this.constructor.props, props);
			} else if (props) {
				this.props = props;
			}

			// references to the component streams
			Object.getOwnPropertyNames(this.constructor).filter(function (value) {
				return value !== 'caller' && value !== 'callee' && value !== 'arguments';
			}).forEach(function (value) {
				if (_this.constructor[value] instanceof _Stream2.default && !_this[value]) {
					_this[value] = _this.constructor[value];
				}
			});

			this.onInitialize();
		}

		/**
	  * Returns true, if Component class is ancestor of {value}, or if value is Component class.
	  *
	  * @param {object} value
	  * @returns {boolean}
	  */

		_createClass(Component, [{
			key: 'update',

			/**
	   * Marks component as dirty and schedules AshElement tree update through its view stream.
	   *
	   * @returns {[type]}
	   */
			value: function update() {
				if (this.__element.stream) {
					this.__isDirty = true;

					this.__element.stream.push(true);
				}
			}
		}, {
			key: 'shouldUpdate',

			/**
	   * Should Componente instance be updated? Defaults to strict comparison of instance's props and new props being passed from the parent component.
	   * You never call this method, it is called during update.
	   *
	   * @param {Object} newProps
	   * @returns {boolean}
	   */
			value: function shouldUpdate(newProps) {
				return this.props !== newProps;
			}

			/**
	   * Called when the instance is created.
	   */

		}, {
			key: 'onInitialize',
			value: function onInitialize() {}

			/**
	   * Called before the instance is mounted.
	   */

		}, {
			key: 'onBeforeMount',
			value: function onBeforeMount() {}

			/**
	   * Called after the instance is mounted.
	   */

		}, {
			key: 'onMount',
			value: function onMount() {}

			/**
	   * Called before new props are passed to the component (but after shouldUpdate method is called).
	   */

		}, {
			key: 'onBeforeReceiveProps',
			value: function onBeforeReceiveProps() {}

			/**
	   * Called after render method is called.
	   */

		}, {
			key: 'onRender',
			value: function onRender() {}

			/**
	   * Called after the instance is unmounted.
	   * Useful for dealing with event handlers etc.
	   */

		}, {
			key: 'onUnmount',
			value: function onUnmount() {}

			/**
	   * Returns AshElement tree.
	   * This method should be always implemented in the Component subclasses.
	   *
	   * @param {Object} props
	   * @param {*} state
	   * @returns {AshElement|null}
	   */

		}, {
			key: 'render',
			value: function render() /*props, state*/{
				return null;
			}
		}, {
			key: '__lifecycle',
			get: function get() {
				return this.__currentLifecycle;
			},
			set: function set(nextLifecycle) {
				if (nextLifecycle !== LIFECYCLE_UNMOUNTED && nextLifecycle !== LIFECYCLE_MOUNTING && nextLifecycle !== LIFECYCLE_MOUNTED) {
					throw new Error(nextLifecycle + ' must be "' + LIFECYCLE_UNMOUNTED + '", "' + LIFECYCLE_MOUNTING + '" or "' + LIFECYCLE_MOUNTED + '". This property is for internal use only. Do not change it!');
				}

				this.__previousLifecycle = this.__currentLifecycle;
				this.__currentLifecycle = nextLifecycle;

				if (this.__previousLifecycle !== this.__currentLifecycle) {
					if (this.__currentLifecycle === LIFECYCLE_MOUNTING) {
						this.onBeforeMount();
					} else if (this.__currentLifecycle === LIFECYCLE_MOUNTED) {
						this.onMount();
					} else if (this.__currentLifecycle === LIFECYCLE_UNMOUNTED) {
						this.onUnmount();
					}
				}
			}

			/**
	   * Is true if Component instance is mounted.
	   */

		}, {
			key: 'isMounted',
			get: function get() {
				return this.__currentLifecycle === LIFECYCLE_MOUNTED;
			}

			/**
	   * Root DOM Node of Component intance.
	   */

		}, {
			key: 'domNode',
			get: function get() {
				if (this.isMounted && (0, _isAshNodeAshElement2.default)(this.__element.children[0]) && this.__element.stream.__listeners[0] && this.__element.stream.__listeners[0].getRootNode) {
					var rootNode = this.__element.stream.__listeners[0].getRootNode();

					if (rootNode) {
						return (0, _findNode2.default)(rootNode, this.__element.children[0].instance.id, this.__element.children[0].instance.indices);
					}
				}

				return null;
			}
		}], [{
			key: 'isAncestorOf',
			value: function isAncestorOf(value) {
				return (0, _isAncestor2.default)(Component, value);
			}
		}]);

		return Component;
	}();

	exports.default = Component;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAshNodeAshElement;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ASH_NODE_ASH_ELEMENT = _constants2.default.ASH_NODE_ASH_ELEMENT;

	/**
	 * Checks if `value` is AshElement with type of `ASH_NODE_ASH_ELEMENT`.
	 *
	 * @param {*} value
	 * @returns {boolean}
	 */
	function isAshNodeAshElement(value) {
	  return value && value.type === ASH_NODE_ASH_ELEMENT;
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = findNode;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ID_ATTRIBUTE_NAME = _constants2.default.ID_ATTRIBUTE_NAME;

	/**
	 * Finds node in Node tree that has specified id and indices.
	 *
	 * @param {Node} nodeTree
	 * @param {string} nodeId
	 * @param {Array} ashNodeIndices
	 * @returns {Node|boolean}
	 */
	function findNode(nodeTree, nodeId, ashNodeIndices) {
		var node = nodeTree;

		if (!nodeTree) {
			throw new Error(nodeTree + ' cannot be falsy.');
		}

		if (ashNodeIndices.length === 1) {
			return node;
		} else {
			for (var i = 1, length = ashNodeIndices.length - 1; i < length; i++) {
				if (!node) {
					return false;
				}

				node = node.childNodes[ashNodeIndices[i]];
			}
		}

		for (var i = 0, length = node.childNodes.length; i < length; i++) {
			if (node.childNodes[i].nodeType === 1 && node.childNodes[i][ID_ATTRIBUTE_NAME] === nodeId) {
				return node.childNodes[i];
			} else if (node.childNodes[i].nodeType === 3 && i === ashNodeIndices[ashNodeIndices.length - 1]) {
				return node.childNodes[i];
			}
		}

		return false;
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Checks if `value` is a `Function` object.
	 *
	 * @param {*} value
	 * @returns {boolean}
	 */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function' || false;
	}; // Avoid a Chakra JIT bug in compatibility modes of IE 11; https://github.com/jashkenas/underscore/issues/1621

	// fallback for environments that return incorrect `typeof` operator results.
	if (isFunction(/x/) || global.Uint8Array && !isFunction(global.Uint8Array)) {
	  isFunction = function isFunction(value) {
	    return Object.prototype.toString.call(value) === '[object Function]';
	  };
	}

	exports.default = isFunction;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = isAncestor;

	var _isFunction = __webpack_require__(18);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Checks if `ancestor` class/constructor function is ancestor of `value`.
	 *
	 * @param {Function} ancestor
	 * @param {Function} value
	 * @returns {boolean}
	 */
	function isAncestor(ancestor, value) {
		if (!(0, _isFunction2.default)(ancestor) || !(0, _isFunction2.default)(value)) {
			return false;
		}

		if (ancestor === Object || ancestor === value) {
			return true;
		}

		var prototype = undefined,
		    lastPrototype = undefined;

		while (prototype !== ancestor) {
			lastPrototype = prototype;
			prototype = Object.getPrototypeOf(value);

			if (lastPrototype === prototype) {
				return false;
			}

			if (prototype === ancestor) {
				return true;
			} else if (prototype === Function || prototype === Object) {
				return false;
			}
		}

		return false;
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _isFunction = __webpack_require__(18);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var trueFn = function trueFn() {
		return true;
	};
	var streamsToUpdate = [];
	var inStream = undefined;
	var flushing = false;
	var order = [];
	var nextOrderIndex = -1;

	/**
	 * Finds stream dependencies.
	 *
	 * @param {Stream} stream
	 */
	function findDependencies(stream) {
		if (stream.__isQueued === false) {
			stream.__isQueued = true;

			for (var i = 0; i < stream.__listeners.length; ++i) {
				findDependencies(stream.__listeners[i]);
			}

			order[++nextOrderIndex] = stream;
		}
	}

	/**
	 * Detaches stream dependencies.
	 *
	 * @param {Stream} stream
	 */
	function detachDependencies(stream) {
		for (var i = 0; i < stream.__dependencies.length; ++i) {
			stream.__dependencies[i].__listeners[stream.__dependencies[i].__listeners.indexOf(stream)] = stream.__dependencies[i].__listeners[stream.__dependencies[i].__listeners.length - 1];
			stream.__dependencies[i].__listeners.length--;
		}

		stream.__dependencies.length = 0;
	}

	/**
	 * Flushes update.
	 */
	function flushUpdate() {
		flushing = true;

		while (streamsToUpdate.length) {
			var stream = streamsToUpdate.shift();

			if (stream.__values.length > 0) {
				stream.value = stream.__values.shift();
			}

			updateDependencies(stream);
		}

		flushing = false;
	}

	/**
	 * Updates stream.
	 *
	 * @param {Stream} stream
	 */
	function updateStream(stream) {
		var dependenciesMet = true;

		for (var i = 0; i < stream.__dependencies.length; i++) {
			if (!stream.__dependencies[i].hasValue) {
				dependenciesMet = false;

				break;
			}
		}

		if (!stream.__dependenciesMet && !dependenciesMet || stream.end && stream.end.value === true) {
			return;
		}

		if (inStream) {
			streamsToUpdate.push(stream);
		} else {
			inStream = stream;

			var returnValue = stream.fn.apply(stream, _toConsumableArray(stream.__dependencies).concat([stream, stream.__changedDependencies]));

			if (returnValue !== undefined) {
				stream.push(returnValue);
			}

			inStream = undefined;

			if (stream.__changedDependencies !== undefined) {
				stream.__changedDependencies = [];
			}

			stream.__shouldUpdate = false;

			if (flushing === false) {
				flushUpdate();
			}
		}
	}

	/**
	 * Updates dependencies.
	 *
	 * @param {Stream} stream
	 */
	function updateDependencies(stream) {
		for (var i = 0; i < stream.__listeners.length; ++i) {
			if (stream.__listeners[i].end === stream) {
				if (stream.__listeners[i].__dependencies) {
					detachDependencies(stream.__listeners[i]);
				}

				if (stream.__listeners[i].end) {
					detachDependencies(stream.__listeners[i].end);
				}
			} else {
				if (stream.__listeners[i].__changedDependencies != null) {
					stream.__listeners[i].__changedDependencies.push(stream);
				}

				stream.__listeners[i].__shouldUpdate = true;

				findDependencies(stream.__listeners[i]);
			}
		}

		for (; nextOrderIndex >= 0; --nextOrderIndex) {
			if (order[nextOrderIndex].__shouldUpdate === true) {
				updateStream(order[nextOrderIndex]);
			}

			order[nextOrderIndex].__isQueued = false;
		}
	}

	/**
	 * Stream class.
	 */

	var Stream = function () {

		/**
	  * Creates a stream, with initial value of `value`.
	  *
	  * @param {?*} value
	  * @returns {Stream}
	  */

		function Stream(value) {
			_classCallCheck(this, Stream);

			this.hasValue = false;
			this.value = undefined;
			this.__values = [];
			this.__listeners = [];
			this.__isQueued = false;
			this.end = null;
			this.fn = null;
			this.__dependencies = [];
			this.__dependenciesMet = false;
			this.__changedDependencies = null;
			this.__shouldUpdate = false;
			this.isEndStream = false;

			this.push = this.push.bind(this);

			if (value === trueFn) {
				this.fn = value;
				this.isEndStream = true;
			} else {
				this.end = new Stream(trueFn);
				this.end.__listeners.push(this);

				if (arguments.length === 1) {
					this.push(value);
				}
			}

			return this;
		}

		/**
	  * Sets up stream's dependencies. Only the last passed functino will be used as stream's function.
	  * Stream's body function is called with following parameters: stream's dependencies, reference to the stream itself, and an array of changed dependencies.
	  * This functon is only called when all dependencies have value. Returned value - anything but `undefined` - will trigger an update. To trigger on undefined, update directly with `push` method.
	  *
	  * @param {...(Function|Stream)}
	  * @returns {this}
	  *
	  * @example
	  * let stream1 = new ash.Stream();
	  * let stream2 = new ash.Stream();
	  * let stream3 = new ash.Stream();
	  * let stream4 = new ash.Stream();
	  *
	  * stream3.combine((stream1Dependency, stream2Dependency, self, changed) => stream1Dependency.get() + stream2Dependency.get(), stream1, stream2);
	  * stream4.combine((stream3Dependency, self, changed) => {
	  * 	self.push(stream3Dependency.get() * 2);
	  * }, stream3);
	  *
	  * stream1.push(2);
	  * stream2.push(3);
	  * stream3.get(); // -> 5
	  * stream4.get(); // -> 10
	  */

		_createClass(Stream, [{
			key: 'combine',
			value: function combine() /*...dependencies*/{
				detachDependencies(this);
				detachDependencies(this.end);

				var dependencies = [];
				var endStreams = [];

				for (var i = 0; i < arguments.length; i++) {
					if (arguments[i] instanceof Stream) {
						dependencies.push(arguments[i]);

						if (arguments[i].end) {
							endStreams.push(arguments[i].end);
						}
					} else if ((0, _isFunction2.default)(arguments[i])) {
						this.fn = arguments[i];
					}
				}

				if (dependencies.length) {
					// add listeners to stream
					this.__dependencies = dependencies;
					this.__changedDependencies = [];

					for (var i = 0; i < this.__dependencies.length; i++) {
						this.__dependencies[i].__listeners.push(this);
					}

					// add listeners to end stream
					this.end.__dependencies = endStreams;

					for (var i = 0; i < endStreams.length; i++) {
						endStreams[i].__listeners.push(this.end);
					}

					updateStream(this);
				}

				return this;
			}

			/**
	   * Creates new dependent stream.
	   *
	   * @param {...(Function|Stream)}
	   * @returns {Stream}
	   *
	   * @example
	   * let newStream = ash.combine((oldStreamDependency) => oldStreamDependency.get() * 2, oldStreamDependency);
	   *
	   * // same as
	   * let newStream = new ash.Stream();
	   *
	   * newStream.combine((oldStreamDependency) => oldStreamDependency.get() * 2, oldStreamDependency);
	   */

		}, {
			key: 'get',

			/**
	   * Returns current value of stream.
	   *
	   * @returns {*}
	   */
			value: function get() {
				return this.value;
			}

			/**
	   * Pushes `value` to the stream. If `value` is a `Promise` instance, it will be resolved first.
	   * Method is always bound to the stream instance.
	   *
	   * @param {*} value
	   * @returns {this}
	   */

		}, {
			key: 'push',
			value: function push(value) {
				if (value !== undefined && value !== null && (0, _isFunction2.default)(value.then)) {
					value.then(this.push).then(undefined, this.push);

					return this;
				}

				this.value = value;
				this.hasValue = true;

				if (!inStream) {
					flushing = true;

					updateDependencies(this);

					if (streamsToUpdate.length > 0) {
						flushUpdate();
					} else {
						flushing = false;
					}
				} else if (inStream === this) {
					// mark listeners
					for (var i = 0; i < this.__listeners.length; ++i) {
						if (this.__listeners[i].end !== this) {
							if (this.__listeners[i].__changedDependencies != null) {
								this.__listeners[i].__changedDependencies.push(this);
							}
							this.__listeners[i].__shouldUpdate = true;
						} else {
							if (this.__listeners[i].__dependencies) {
								detachDependencies(this.__listeners[i]);
							}

							if (this.__listeners[i].end) {
								detachDependencies(this.__listeners[i].end);
							}
						}
					}
				} else {
					this.__values.push(value);
					streamsToUpdate.push(this);
				}

				return this;
			}

			/**
	   * Changes end stream.
	   *
	   * @param {Stream}
	   * @returns {this}
	   */

		}, {
			key: 'endsOn',
			value: function endsOn(endStream) {
				detachDependencies(this.end);
				endStream.__listeners.push(this.end);
				this.end.__dependencies.push(endStream);

				return this;
			}

			/**
	   * Returns `true` if `value` is an instance of `Stream`.
	   *
	   * @param {*} value
	   * @returns {boolean}
	   */

		}, {
			key: 'toString',
			value: function toString() {
				return 'stream(' + this.value + ')';
			}

			/**
	   * Creates new stream consisting of values returned by the function `fn` called with values from `stream`.
	   *
	   * @param {Function} fn
	   * @param {Stream} stream
	   * @returns {Stream}
	   */

		}, {
			key: 'map',

			/**
	   * Creates new stream consisting of values returned by the function `fn` called with values from stream instance.
	   *
	   * @param {Function} fn
	   * @returns {Stream}
	   */
			value: function map(fn) {
				return Stream.map(fn, this);
			}

			/**
	   * Similar to `map`, but the returned stream is empty and is not updated.
	   *
	   * @param {Function} fn
	   * @returns {Stream}
	   */

		}, {
			key: 'on',
			value: function on(fn) {
				return Stream.on(fn, this);
			}

			/**
	   * Similar to `on`, but the `fn` isn't called if `stream` already has value; only values pushed to `stream` after the `subscribe` was called are relevant.
	   *
	   * @param {Function} fn
	   * @returns {Stream}
	   */

		}, {
			key: 'subscribe',
			value: function subscribe(fn) {
				return Stream.subscribe(fn, this);
			}

			/**
	   * Immediately calls stream's body function, even if all dependencies don't have values yet.
	   *
	   * @returns {this}
	   */

		}, {
			key: 'immediate',
			value: function immediate() {
				if (!this.__dependenciesMet) {
					this.__dependenciesMet = true;

					updateStream(this);
				}

				return this;
			}

			/**
	   * Creates new stream consisting of values from both `stream1` and `stream2`.
	   *
	   * @param {Stream} stream1
	   * @param {Stream} stream2
	   * @returns {Stream}
	   */

		}, {
			key: 'ap',

			/**
	   * Creates new stream consisting of values which are results of applying function from stream instance to the values of `stream`.
	   *
	   * @param {Stream} stream
	   * @returns {Stream}
	   */
			value: function ap(stream) {
				var _this = this;

				var newStream = new Stream();

				newStream.combine(function (dependencyStream1, dependencyStream2, self) {
					self.push(_this.value(stream.value));
				}, this, stream);

				return newStream;
			}
		}], [{
			key: 'combine',
			value: function combine() {
				var newStream = new Stream();

				newStream.combine.apply(newStream, arguments);

				return newStream;
			}
		}, {
			key: 'isStream',
			value: function isStream(value) {
				return value instanceof Stream;
			}
		}, {
			key: 'map',
			value: function map(fn, stream) {
				var newStream = new Stream();

				newStream.combine(function (streamDependency, self) {
					self.push(fn(streamDependency.value));
				}, stream);

				return newStream;
			}

			/**
	   * Similar to `map`, but the returned stream is empty and is not updated.
	   *
	   * @param {Function} fn
	   * @param {Stream} stream
	   * @returns {Stream}
	   */

		}, {
			key: 'on',
			value: function on(fn, stream) {
				var newStream = new Stream();

				newStream.combine(function (streamDependency) {
					fn(streamDependency.value);
				}, stream);

				return newStream;
			}

			/**
	   * Similar to `on`, but the `fn` isn't called if `stream` already has value; only values pushed to `stream` after the `subscribe` was called are relevant.
	   *
	   * @param {Function} fn
	   * @param {Stream} stream
	   * @returns {Stream}
	   */

		}, {
			key: 'subscribe',
			value: function subscribe(fn, stream) {
				var omitFirstRun = stream.hasValue;
				var hasRun = false;
				var newStream = new Stream();

				newStream.combine(function (dependency) {
					if (hasRun || !omitFirstRun && !hasRun) {
						fn(dependency.value);
					}

					hasRun = true;
				}, stream);

				return newStream;
			}
		}, {
			key: 'merge',
			value: function merge(stream1, stream2) {
				var newStream = new Stream();

				newStream.combine(function (dependencyStream1, dependencyStream2, self, changed) {
					if (changed[0]) {
						self.push(changed[0].get());
					} else if (dependencyStream1.hasValue) {
						self.push(dependencyStream1.value);
					} else if (dependencyStream2.hasValue) {
						self.push(dependencyStream2.value);
					}
				}, stream1, stream2).immediate();

				var endStream = new Stream();

				endStream.combine(function () {
					return true;
				}, stream1.end, stream2.end);
				newStream.endsOn(endStream);

				return newStream;
			}
		}]);

		return Stream;
	}();

	exports.default = Stream;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	var _AshNode = __webpack_require__(22);

	var _AshNode2 = _interopRequireDefault(_AshNode);

	var _isAshElement = __webpack_require__(23);

	var _isAshElement2 = _interopRequireDefault(_isAshElement);

	var _iterate = __webpack_require__(24);

	var _iterate2 = _interopRequireDefault(_iterate);

	var _Component = __webpack_require__(15);

	var _Component2 = _interopRequireDefault(_Component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ASH_NODE_ASH_ELEMENT = _constants2.default.ASH_NODE_ASH_ELEMENT;
	var COMPONENT_ASH_ELEMENT = _constants2.default.COMPONENT_ASH_ELEMENT;
	var FUNCTION_ASH_ELEMENT = _constants2.default.FUNCTION_ASH_ELEMENT;

	/**
	 * AshElement class.
	 */

	var AshElement = function () {

		/**
	  * Creates an AshElement of type `type`.
	  * You generally want to use AshElement.create helper, because it recursively creates children for you.
	  *
	  * @param {string} type
	  * @param {Function} Spec
	  * @param {*} argument1
	  * @param {?*} argument2
	  * @param {?Array<AshElement>=[]} children
	  * @returns {AshElement}
	  */

		function AshElement(type, Spec) {
			_classCallCheck(this, AshElement);

			this.type = null;
			this.args = null;
			this.children = [];
			this.parent = null;
			this.owner = null;
			this.stream = null;

			if (type !== COMPONENT_ASH_ELEMENT && type !== ASH_NODE_ASH_ELEMENT && type !== FUNCTION_ASH_ELEMENT) {
				throw new Error(type + ' (type) must be "' + COMPONENT_ASH_ELEMENT + '" or "' + ASH_NODE_ASH_ELEMENT + '".');
			}

			if (!Spec) {
				throw new Error(Spec + ' (Spec) must be a function.');
			}

			this.type = type;

			if (this.type === COMPONENT_ASH_ELEMENT) {
				this.Spec = Spec;
				this.isDirty = true;

				if (arguments.length >= 3 && typeof arguments[2] !== 'undefined') {
					this.args = [arguments[2]];
				} else {
					this.args = null;
				}
			} else if (this.type === ASH_NODE_ASH_ELEMENT) {
				this.Spec = Spec;

				if (arguments.length >= 4 && typeof arguments[2] !== 'undefined' && typeof arguments[3] !== 'undefined') {
					// Two arguments for AshNode constructor: tagName and props; result will be regular Ash Node
					this.args = [arguments[2], arguments[3]];
				} else if (arguments.length >= 3 && typeof arguments[2] !== 'undefined') {
					// Only one argument for AshNode constructor: tagName; result will be Ash Text Node
					this.args = [arguments[2]];
				} else {
					this.args = null;
				}

				if (arguments.length >= 5 && arguments[4]) {
					this.children = arguments[4];
				}
			} else if (this.type === FUNCTION_ASH_ELEMENT) {
				this.spec = Spec;
				this.isDirty = true;

				if (arguments.length >= 3 && typeof arguments[2] !== 'undefined') {
					this.args = [arguments[2]];
				} else {
					this.args = null;
				}
			}

			return this;
		}

		/**
	  * Instantiates AshElement instance's spec.
	  *
	  * @returns {Component|AshNode|null}
	  */

		_createClass(AshElement, [{
			key: 'instantiate',
			value: function instantiate() {
				if (this.type === COMPONENT_ASH_ELEMENT) {
					if (this.args) {
						this.instance = new this.Spec(this.args[0]);
					} else {
						this.instance = new this.Spec();
					}

					this.instance.__element = this;
				} else if (this.type === ASH_NODE_ASH_ELEMENT) {
					if (this.args) {
						this.instance = new this.Spec(this.args[0], this.args[1]);
					} else {
						this.instance = new this.Spec();
					}
				} else if (this.type === FUNCTION_ASH_ELEMENT) {
					this.instance = null;
				} else {
					throw new Error(this + ' is not a properly typed AshElement object.');
				}

				return this.instance;
			}

			/**
	   * Creates AshElement instance, with props and children.
	   *
	   * @param {string|Component} tagName
	   * @param {object} props
	   * @param {...AshElement|string|number|Array<AshElement|string|number>} children
	   * @returns {AshElement}
	   */

		}], [{
			key: 'create',
			value: function create(tagName, props /*, children...*/) {
				var children = [];

				if ( /*typeof tagName !== 'string' && */typeof tagName === 'function' && _Component2.default.isAncestorOf(tagName)) {
					return new AshElement(COMPONENT_ASH_ELEMENT, tagName, arguments[1]);
				} else if (typeof tagName === 'function') {
					return new AshElement(FUNCTION_ASH_ELEMENT, tagName, arguments[1]);
				} else if (typeof tagName === 'string' && !tagName.length) {
					throw new Error(tagName + ' (tagName) must be non-empty string or Component class.');
				}

				// type check
				if (tagName && arguments.length === 1) {
					// return AshElement <tagName> with no props and no children
					return new AshElement(ASH_NODE_ASH_ELEMENT, _AshNode2.default, tagName, null);
				}

				for (var i = 2; i < arguments.length; i++) {
					if (typeof arguments[i] === 'string' || typeof arguments[i] === 'number') {
						children.push(new AshElement(ASH_NODE_ASH_ELEMENT, _AshNode2.default, '' + arguments[i]));
					} else if ((0, _isAshElement2.default)(arguments[i])) {
						children.push(arguments[i]);
					} else if (Array.isArray(arguments[i])) {
						for (var j = 0; j < arguments[i].length; j++) {
							if (typeof arguments[i][j] === 'string' || typeof arguments[i] === 'number') {
								children.push(new AshElement(ASH_NODE_ASH_ELEMENT, _AshNode2.default, '' + arguments[i][j]));
							} else if ((0, _isAshElement2.default)(arguments[i][j])) {
								children.push(arguments[i][j]);
							}
						}
					} else if (arguments[i] && typeof arguments[i].__iterator === 'function' || arguments[i] && typeof global.Symbol === 'function' && typeof arguments[i][global.Symbol.iterator]) {
						var iteratorResult = (0, _iterate2.default)(arguments[i]);

						for (var j = 0; j < iteratorResult.length; j++) {
							if (typeof iteratorResult[j] === 'string' || typeof iteratorResult === 'number') {
								children.push(new AshElement(ASH_NODE_ASH_ELEMENT, _AshNode2.default, '' + iteratorResult[j]));
							} else if ((0, _isAshElement2.default)(iteratorResult[j])) {
								children.push(iteratorResult[j]);
							}
						}
					}
				}

				return new AshElement(ASH_NODE_ASH_ELEMENT, _AshNode2.default, tagName, props, children);
			}
		}]);

		return AshElement;
	}();

	exports.default = AshElement;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ELEMENT_ASH_NODE = _constants2.default.ELEMENT_ASH_NODE;
	var TEXT_ASH_NODE = _constants2.default.TEXT_ASH_NODE;

	/**
	 * AshNode class.
	 */

	var AshNode =

	/**
	 * Creates an AshNode; if only `tagName` is provided, text AshNode is created.
	 *
	 * @param {string} tagName
	 * @param {?Object} properties
	 * @returns {AshNode}
	 */
	function AshNode(tagName, properties) {
		_classCallCheck(this, AshNode);

		this.type = null;
		this.id = null;
		this.index = null;
		this.indices = null;
		this.parent = null;

		if (properties !== undefined) {
			this.type = ELEMENT_ASH_NODE;
			this.tagName = tagName.toLowerCase();
			this.properties = properties || {};
			this.key = null;
			this.children = [];

			if (typeof this.properties.key === 'string' || typeof this.properties.key === 'number') {
				this.key = '' + this.properties.key;
			}
		} else {
			this.type = TEXT_ASH_NODE;
			this.text = tagName;
		}

		return this;
	};

	exports.default = AshNode;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAshElement;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var COMPONENT_ASH_ELEMENT = _constants2.default.COMPONENT_ASH_ELEMENT;
	var ASH_NODE_ASH_ELEMENT = _constants2.default.ASH_NODE_ASH_ELEMENT;
	var FUNCTION_ASH_ELEMENT = _constants2.default.FUNCTION_ASH_ELEMENT;

	/**
	 * Checks if `value` is AshElement with type of `COMPONENT_ASH_ELEMENT`, `ASH_NODE_ASH_ELEMENT` or `FUNCTION_ASH_ELEMENT`.
	 *
	 * @param {*} value
	 * @returns {boolean}
	 */
	function isAshElement(value) {
	  return value && (value.type === COMPONENT_ASH_ELEMENT || value.type === ASH_NODE_ASH_ELEMENT || value.type === FUNCTION_ASH_ELEMENT);
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = iterate;
	/**
	 * Iterates over `iterable` and returns results in an array.
	 *
	 * @param {Iterable} iterable
	 * @returns {Array}
	 */
	function iterate(iterable) {
		var result = [];

		if (typeof iterable.__iterator === 'function') {
			var iterator = iterable.__iterator();
			var iterationResult = iterator.next();

			while (!iterationResult.done) {
				result.push(iterationResult.value[1]);

				iterationResult = iterator.next();
			}
		} else if (typeof global.Symbol === 'function' && typeof iterable[global.Symbol.iterator] === 'function') {
			var iterator = iterable[global.Symbol.iterator]();
			var iterationResult = iterator.next();

			while (!iterationResult.done) {
				result.push(iterationResult.value);

				iterationResult = iterator.next();
			}
		} else {
			throw new Error(iterable + ' (iterable) must be an iterable.');
		}

		return result;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Stream2 = __webpack_require__(20);

	var _Stream3 = _interopRequireDefault(_Stream2);

	var _isComponentAshElement = __webpack_require__(26);

	var _isComponentAshElement2 = _interopRequireDefault(_isComponentAshElement);

	var _setAnimationTimeout = __webpack_require__(27);

	var _setAnimationTimeout2 = _interopRequireDefault(_setAnimationTimeout);

	var _createAshElementTree = __webpack_require__(28);

	var _createAshElementTree2 = _interopRequireDefault(_createAshElementTree);

	var _updateAshElementTree = __webpack_require__(30);

	var _updateAshElementTree2 = _interopRequireDefault(_updateAshElementTree);

	var _mountComponents = __webpack_require__(32);

	var _mountComponents2 = _interopRequireDefault(_mountComponents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var streamId = 0;

	/**
	 * ViewStream class.
	 */

	var ViewStream = function (_Stream) {
		_inherits(ViewStream, _Stream);

		/**
	  * Creates view stream.
	  *
	  * @param {AshElement} componentAshElement
	  * @returns {ViewStream}
	  */

		function ViewStream(componentAshElement) {
			var _ret;

			_classCallCheck(this, ViewStream);

			if (!(0, _isComponentAshElement2.default)(componentAshElement)) {
				throw new Error(componentAshElement + ' (componentAshElement) must be an Component AshElement object instance.');
			}

			if (componentAshElement.stream instanceof ViewStream) {
				throw new Error(componentAshElement + ' (componentAshElement) was already passed to a view stream.');
			}

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ViewStream).call(this));

			_this.id = streamId++;
			_this.isUpdating = false;
			_this.isRendering = false;

			_this.isUpdating = true;
			_this.isRendering = true;

			(0, _setAnimationTimeout2.default)(function () {
				_this.push((0, _createAshElementTree2.default)(componentAshElement, _this));
				(0, _mountComponents2.default)(_this.value);

				_this.isRendering = false;
			});

			_this.isUpdating = false;

			return _ret = _this, _possibleConstructorReturn(_this, _ret);
		}

		/**
	  * Pushes `value` to the stream; if view stream already has a value, its AshElement tree and AshNode tree are updated.
	  *
	  * @param {*} value
	  * @returns {this}
	  */

		_createClass(ViewStream, [{
			key: 'push',
			value: function push(value) {
				var _this2 = this;

				if (this.hasValue) {
					if (this.isUpdating) {
						throw new Error('You cannot update components during previous update!');
					}

					this.isUpdating = true;

					// if there is already a scheduled update, we won't render twice
					if (!this.isRendering) {
						this.isRendering = true;

						(0, _setAnimationTimeout2.default)(function () {
							_get(Object.getPrototypeOf(ViewStream.prototype), 'push', _this2).call(_this2, (0, _updateAshElementTree2.default)(_this2.value, _this2));
							(0, _mountComponents2.default)(_this2.value);

							_this2.isRendering = false;
						});
					}

					this.isUpdating = false;
				} else {
					_get(Object.getPrototypeOf(ViewStream.prototype), 'push', this).call(this, value);
				}

				return this;
			}
		}]);

		return ViewStream;
	}(_Stream3.default);

	exports.default = ViewStream;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isComponentAshElement;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var COMPONENT_ASH_ELEMENT = _constants2.default.COMPONENT_ASH_ELEMENT;

	/**
	 * Checks if `value` is AshElement with type of `COMPONENT_ASH_ELEMENT`.
	 *
	 * @param {*} value
	 * @returns {boolean}
	 */
	function isComponentAshElement(value) {
	  return value && value.type === COMPONENT_ASH_ELEMENT;
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var setAnimationTimeout = undefined;

	if (global.requestAnimationFrame) {
		setAnimationTimeout = global.requestAnimationFrame;
	} else if (global.setImmediate) {
		setAnimationTimeout = global.setImmediate;
	} else {
		setAnimationTimeout = function setAnimationTimeout(callback) {
			global.setTimeout(callback, 0);
		};
	}

	exports.default = setAnimationTimeout;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = createAshElementTree;

	var _isAshElement = __webpack_require__(23);

	var _isAshElement2 = _interopRequireDefault(_isAshElement);

	var _isComponentAshElement = __webpack_require__(26);

	var _isComponentAshElement2 = _interopRequireDefault(_isComponentAshElement);

	var _isAshNodeAshElement = __webpack_require__(16);

	var _isAshNodeAshElement2 = _interopRequireDefault(_isAshNodeAshElement);

	var _isFunctionAshElement = __webpack_require__(29);

	var _isFunctionAshElement2 = _interopRequireDefault(_isFunctionAshElement);

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LIFECYCLE_MOUNTING = _constants2.default.LIFECYCLE_MOUNTING;

	/**
	 * Walks AshElement tree.
	 *
	 * @param {AshElement} ashElement
	 * @param {AshElement} owner
	 * @param {number} index
	 */
	function walkCreateAshElementTree(ashElement, owner, index) {
		if (!(0, _isComponentAshElement2.default)(owner)) {
			throw new Error(owner + ' must be a Component type AshElement Object');
		}

		var newOwner = owner;

		ashElement.index = index;
		ashElement.owner = owner;
		ashElement.stream = owner.stream;

		if ((0, _isComponentAshElement2.default)(ashElement)) {
			newOwner = ashElement;

			ashElement.instantiate();

			// create child by rendering component
			ashElement.instance.__lifecycle = LIFECYCLE_MOUNTING;
			ashElement.children[0] = ashElement.instance.render(ashElement.instance.props, ashElement.instance.state);
		} else if ((0, _isAshNodeAshElement2.default)(ashElement)) {
			ashElement.instantiate();
		} else if ((0, _isFunctionAshElement2.default)(ashElement)) {
			// create child by running function
			ashElement.children[0] = ashElement.spec(ashElement.args[0]);
		}

		for (var i = 0; i < ashElement.children.length; i++) {
			if (ashElement.children[i]) {
				// set up parent
				ashElement.children[i].parent = ashElement;

				// walk the child
				walkCreateAshElementTree(ashElement.children[i], newOwner, i);
			}
		}
	}

	/**
	 * Creates full AshElement tree, ie. instantiates Specs and calls component render methods.
	 *
	 * @param {AshElement} ashElement
	 * @param {ViewStream} stream
	 * @returns {AshElement}
	 */
	function createAshElementTree(ashElement, stream) {
		if (!(0, _isAshElement2.default)(ashElement)) {
			throw new Error(ashElement + ' (ashElement) must be an AshElement object instance.');
		}

		if (!stream) {
			throw new Error(stream + ' (stream) must be a Stream object instance.');
		}

		var ashElementTree = ashElement;
		var owner = ashElementTree.owner;

		ashElementTree.stream = stream;
		ashElementTree.index = typeof ashElementTree.index === 'undefined' ? 0 : ashElementTree.index;

		if ((0, _isComponentAshElement2.default)(ashElementTree)) {
			owner = ashElementTree;

			ashElementTree.instantiate();

			// create child by rendering component
			ashElementTree.instance.__lifecycle = LIFECYCLE_MOUNTING;
			ashElementTree.children[0] = ashElementTree.instance.render(ashElementTree.instance.props, ashElementTree.instance.state);
		} else if ((0, _isAshNodeAshElement2.default)(ashElementTree)) {
			ashElementTree.instantiate();
		} else if ((0, _isFunctionAshElement2.default)(ashElementTree)) {
			// create child by running function
			ashElementTree.children[0] = ashElementTree.spec(ashElementTree.args[0], null);
		}

		for (var i = 0; i < ashElementTree.children.length; i++) {
			if (ashElementTree.children[i]) {
				// set up a parent
				ashElementTree.children[i].parent = ashElementTree;

				// walk the child
				walkCreateAshElementTree(ashElementTree.children[i], owner, i);
			}
		}

		return ashElementTree;
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isFunctionAshElement;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FUNCTION_ASH_ELEMENT = _constants2.default.FUNCTION_ASH_ELEMENT;

	/**
	 * Checks if `value` is AshElement with type of `FUNCTION_ASH_ELEMENT`.
	 *
	 * @param {*} value
	 * @returns {boolean}
	 */
	function isFunctionAshElement(value) {
	  return value && value.type === FUNCTION_ASH_ELEMENT;
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = updateAshElementTree;

	var _createAshElementTree = __webpack_require__(28);

	var _createAshElementTree2 = _interopRequireDefault(_createAshElementTree);

	var _unmountComponents = __webpack_require__(31);

	var _unmountComponents2 = _interopRequireDefault(_unmountComponents);

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var COMPONENT_ASH_ELEMENT = _constants2.default.COMPONENT_ASH_ELEMENT;
	var ASH_NODE_ASH_ELEMENT = _constants2.default.ASH_NODE_ASH_ELEMENT;
	var FUNCTION_ASH_ELEMENT = _constants2.default.FUNCTION_ASH_ELEMENT;

	/**
	 * Walks AshElement tree for updating.
	 *
	 * @param {AshElement} oldAshElement
	 * @param {AshElement} newAshElement
	 * @param {Stream} stream
	 * @param {boolean} isParentComponentDirty
	 */
	function walkUpdateAshElementTree(oldAshElement, newAshElement, stream, isParentComponentDirty) {
		if (newAshElement === null && oldAshElement) {
			// deleting old children
			while (oldAshElement.parent.children.length) {
				(0, _unmountComponents2.default)(oldAshElement.parent.children[oldAshElement.parent.children.length - 1]);

				oldAshElement.parent.children.pop();
			}
		} else if (newAshElement && oldAshElement === null) {
			// the element tree is not complete
			(0, _createAshElementTree2.default)(newAshElement, stream);

			// new element must be added as a child
			newAshElement.parent.children[newAshElement.index] = newAshElement;
		} else if (newAshElement.type === COMPONENT_ASH_ELEMENT && oldAshElement.type === COMPONENT_ASH_ELEMENT && newAshElement.Spec === oldAshElement.Spec) {
			var newAshElementArgs = newAshElement.args && newAshElement.args[0] ? newAshElement.args[0] : null;

			if (oldAshElement.instance.__isDirty || oldAshElement.instance.shouldUpdate(newAshElementArgs)) {
				oldAshElement.args = newAshElement.args;
				oldAshElement.isDirty = true;
				oldAshElement.instance.__isDirty = false;

				oldAshElement.instance.onBeforeReceiveProps(newAshElementArgs);

				oldAshElement.instance.props = newAshElementArgs;

				// create child for the new element
				var render = oldAshElement.instance.render(oldAshElement.instance.props, oldAshElement.instance.state);

				// adding children to the queue
				if (render) {
					render.owner = oldAshElement;
					render.parent = oldAshElement;
					render.index = 0;

					if (oldAshElement.children[0]) {
						walkUpdateAshElementTree(oldAshElement.children[0], render, stream, true);
					} else {
						walkUpdateAshElementTree(null, render, stream, true);
					}
				} else if (oldAshElement.children[0]) {
					// deleting old surplus children
					(0, _unmountComponents2.default)(oldAshElement.children[0]);
					oldAshElement.children.pop();
				}
			} else {
				walkUpdateAshElementTree(oldAshElement.children[0], oldAshElement.children[0], stream, false);
			}
		} else if (newAshElement.type === FUNCTION_ASH_ELEMENT && oldAshElement.type === FUNCTION_ASH_ELEMENT && newAshElement.spec === oldAshElement.spec) {
			var newAshElementArgs = newAshElement.args && newAshElement.args[0] ? newAshElement.args[0] : null;
			var oldAshElementArgs = oldAshElement.args && oldAshElement.args[0] ? oldAshElement.args[0] : null;

			if (newAshElementArgs !== oldAshElementArgs) {
				// create child for the new element
				var render = oldAshElement.spec(newAshElement.args[0], oldAshElement.args[0]);

				oldAshElement.args = newAshElement.args;
				oldAshElement.isDirty = true;

				// adding children to the queue
				if (render) {
					render.owner = oldAshElement;
					render.parent = oldAshElement;
					render.index = 0;

					if (oldAshElement.children[0]) {
						walkUpdateAshElementTree(oldAshElement.children[0], render, stream, true);
					} else {
						walkUpdateAshElementTree(null, render, stream, true);
					}
				} else if (oldAshElement.children[0]) {
					// deleting old surplus children
					(0, _unmountComponents2.default)(oldAshElement.children[0]);
					oldAshElement.children.pop();
				}
			} else {
				walkUpdateAshElementTree(oldAshElement.children[0], oldAshElement.children[0], stream, false);
			}
		} else if (newAshElement.type === ASH_NODE_ASH_ELEMENT && oldAshElement.type === ASH_NODE_ASH_ELEMENT) {
			if (isParentComponentDirty) {
				oldAshElement.args = newAshElement.args;
				oldAshElement.stream = stream;

				oldAshElement.instantiate();
			}

			// adding children to the queue
			for (var i = 0; i < newAshElement.children.length; i++) {
				if (newAshElement.children[i] && oldAshElement.children[i]) {
					newAshElement.children[i].owner = oldAshElement.owner;
					newAshElement.children[i].parent = oldAshElement;
					newAshElement.children[i].index = i;

					walkUpdateAshElementTree(oldAshElement.children[i], newAshElement.children[i], stream, isParentComponentDirty);
				} else if (newAshElement.children[i] && !oldAshElement.children[i]) {
					newAshElement.children[i].owner = oldAshElement.owner;
					newAshElement.children[i].parent = oldAshElement;
					newAshElement.children[i].index = i;

					walkUpdateAshElementTree(null, newAshElement.children[i], stream, isParentComponentDirty);
				}
			}

			// deleting old surplus children
			while (oldAshElement.children.length > newAshElement.children.length) {
				(0, _unmountComponents2.default)(oldAshElement.children[oldAshElement.children.length - 1]);
				oldAshElement.children.pop();
			}
		} else if (newAshElement.type === COMPONENT_ASH_ELEMENT && oldAshElement.type === COMPONENT_ASH_ELEMENT || newAshElement.type === COMPONENT_ASH_ELEMENT && oldAshElement.type === ASH_NODE_ASH_ELEMENT || newAshElement.type === COMPONENT_ASH_ELEMENT && oldAshElement.type === FUNCTION_ASH_ELEMENT || newAshElement.type === ASH_NODE_ASH_ELEMENT && oldAshElement.type === COMPONENT_ASH_ELEMENT || newAshElement.type === ASH_NODE_ASH_ELEMENT && oldAshElement.type === FUNCTION_ASH_ELEMENT || newAshElement.type === FUNCTION_ASH_ELEMENT && oldAshElement.type === FUNCTION_ASH_ELEMENT || newAshElement.type === FUNCTION_ASH_ELEMENT && oldAshElement.type === COMPONENT_ASH_ELEMENT || newAshElement.type === FUNCTION_ASH_ELEMENT && oldAshElement.type === ASH_NODE_ASH_ELEMENT) {
			newAshElement.owner = oldAshElement.owner;
			newAshElement.parent = oldAshElement.parent;
			newAshElement.index = oldAshElement.index;

			(0, _createAshElementTree2.default)(newAshElement, stream);
			(0, _unmountComponents2.default)(oldAshElement);

			// replace the old element
			if (oldAshElement.parent.type === COMPONENT_ASH_ELEMENT || oldAshElement.parent.type === FUNCTION_ASH_ELEMENT) {
				oldAshElement.parent.children[0] = newAshElement;
			} else if (oldAshElement.parent.type === ASH_NODE_ASH_ELEMENT) {
				oldAshElement.parent.children[oldAshElement.index] = newAshElement;
			}
		}
	}

	/**
	 * Updates dirty component elements in AshElement tree.
	 *
	 * @param {AshElement} componentAshElement
	 * @param {ViewStream} stream
	 * @returns {AshElement}
	 */
	function updateAshElementTree(componentAshElement, stream) {
		var newAshElement = undefined;
		var oldAshElement = componentAshElement.children[0] || null;

		if (componentAshElement.instance.__isDirty) {
			newAshElement = componentAshElement.instance.render(componentAshElement.instance.props, componentAshElement.instance.state);
			componentAshElement.isDirty = true;

			if (newAshElement) {
				newAshElement.owner = componentAshElement;
				newAshElement.parent = componentAshElement;
				newAshElement.index = 0;
			}
		} else {
			newAshElement = componentAshElement.children[0] || null;
		}

		walkUpdateAshElementTree(oldAshElement, newAshElement, stream, componentAshElement.isDirty);

		return componentAshElement;
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = unmountComponents;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LIFECYCLE_UNMOUNTED = _constants2.default.LIFECYCLE_UNMOUNTED;
	var COMPONENT_ASH_ELEMENT = _constants2.default.COMPONENT_ASH_ELEMENT;

	/**
	 * Walks AshElement tree for unmounting of components.
	 *
	 * @param {AshElement} ashElement
	 */
	function walkUnmountComponents(ashElement) {
	  if (ashElement.type === COMPONENT_ASH_ELEMENT) {
	    ashElement.instance.__lifecycle = LIFECYCLE_UNMOUNTED;
	  }

	  for (var i = 0; i < ashElement.children.length; i++) {
	    walkUnmountComponents(ashElement.children[i]);
	  }
	}
	/**
	 * Unmounts components in AshElement tree.
	 *
	 * @param {AshElement} ashElement
	 */
	function unmountComponents(ashElement) {
	  walkUnmountComponents(ashElement);
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = mountComponents;

	var _isComponentAshElement = __webpack_require__(26);

	var _isComponentAshElement2 = _interopRequireDefault(_isComponentAshElement);

	var _isAshNodeAshElement = __webpack_require__(16);

	var _isAshNodeAshElement2 = _interopRequireDefault(_isAshNodeAshElement);

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LIFECYCLE_MOUNTING = _constants2.default.LIFECYCLE_MOUNTING;
	var LIFECYCLE_MOUNTED = _constants2.default.LIFECYCLE_MOUNTED;

	/**
	 * Walks AshElement tree for mounting of components.
	 *
	 * @param {AshElement} ashElement
	 */
	function walkMountComponents(ashElement) {
		if ((0, _isAshNodeAshElement2.default)(ashElement)) {
			for (var i = 0; i < ashElement.children.length; i++) {
				if (ashElement.children[i]) {
					walkMountComponents(ashElement.children[i]);
				}
			}
		} else if ((0, _isComponentAshElement2.default)(ashElement)) {
			if (ashElement.instance && ashElement.instance.__lifecycle === LIFECYCLE_MOUNTING) {
				ashElement.instance.__lifecycle = LIFECYCLE_MOUNTED;
			}

			ashElement.instance.onRender();

			if (ashElement.children[0]) {
				walkMountComponents(ashElement.children[0]);
			}
		}
	}

	/**
	 * Mounts components in AshElement tree.
	 *
	 * @param {AshElement} ashElement
	 */
	function mountComponents(ashElement) {
		walkMountComponents(ashElement);
	}

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flattenTree;
	/**
	 * Walks tree for flattening.
	 *
	 * @param {Object} tree
	 * @param {Object} list
	 * @param {string} parent
	 * @param {boolean} convertToString
	 */
	function walkFlattenTree(tree, list, parent, convertToString) {
	  for (var property in tree) {
	    if (tree.hasOwnProperty(property)) {
	      if (typeof tree[property] === 'object') {
	        walkFlattenTree(tree[property], list, parent + property + '.', convertToString);
	      } else {
	        list[parent + property] = convertToString ? '' + tree[property] : tree[property];
	      }
	    }
	  }
	}

	/**
	 * Flattes tree object, ie. object with objects as properties, into single-level object.
	 * Property names are separated byt dot.
	 *
	 * @param {Object} tree
	 * @param {Object} options.valuesToString
	 * @returns {Object}
	 *
	 * @example
	 * ash.flattenTree({foo: {bar: 42}}); // -> {'foo.bar': 42}
	 */
	function flattenTree(tree) {
	  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  var valuesToString = _ref.valuesToString;

	  var list = {};

	  walkFlattenTree(tree, list, '', !!valuesToString);

	  return list;
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = renderViewStream;

	var _createNodeTree = __webpack_require__(35);

	var _createNodeTree2 = _interopRequireDefault(_createNodeTree);

	var _diffAshNodeTree = __webpack_require__(42);

	var _diffAshNodeTree2 = _interopRequireDefault(_diffAshNodeTree);

	var _patchNodeTree = __webpack_require__(43);

	var _patchNodeTree2 = _interopRequireDefault(_patchNodeTree);

	var _validateNodeTree = __webpack_require__(52);

	var _validateNodeTree2 = _interopRequireDefault(_validateNodeTree);

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	var _isElement = __webpack_require__(48);

	var _isElement2 = _interopRequireDefault(_isElement);

	var _Stream = __webpack_require__(20);

	var _Stream2 = _interopRequireDefault(_Stream);

	var _ViewStream = __webpack_require__(25);

	var _ViewStream2 = _interopRequireDefault(_ViewStream);

	var _createAshNodeTree = __webpack_require__(53);

	var _createAshNodeTree2 = _interopRequireDefault(_createAshNodeTree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ID_ATTRIBUTE_NAME = _constants2.default.ID_ATTRIBUTE_NAME;
	var ELEMENT_NODE = 1;

	/**
	 * Render stream body function.
	 *
	 * @param {ViewStream} viewStream
	 * @param {Stram} renderStream
	 */
	function render(viewStream, renderStream) {
		var ashElementTree = viewStream.get();
		var ashNodeTree = (0, _createAshNodeTree2.default)(ashElementTree);

		if (!renderStream.previousAshNodeTree) {
			var isNodeTreeValid = false;
			var isNodeTreeValidated = false;

			renderStream.previousAshNodeTree = ashNodeTree;

			// there are some element nodes?
			if (renderStream.containerNode && renderStream.containerNode.childNodes.length) {
				isNodeTreeValidated = true;
				isNodeTreeValid = (0, _validateNodeTree2.default)(renderStream.containerNode.childNodes[0], ashNodeTree, viewStream.id);
			}

			// render to the Real DOM, if needed
			if (!isNodeTreeValid || !isNodeTreeValidated) {
				if (isNodeTreeValidated) {
					console.warn('Existing html is invalid!');
				}

				// remove existing nodes
				if (renderStream.containerNode) {
					while (renderStream.containerNode.firstChild) {
						renderStream.containerNode.removeChild(renderStream.containerNode.firstChild);
					}
				}

				if (renderStream.containerNode) {
					var nodeTree = (0, _createNodeTree2.default)(ashNodeTree);

					if (nodeTree) {
						renderStream.containerNode.appendChild(nodeTree);
					}
				}
			}
		} else {
			var patches = (0, _diffAshNodeTree2.default)(renderStream.previousAshNodeTree, ashNodeTree);
			var isSuccessful = true;

			if (renderStream.containerNode) {
				isSuccessful = (0, _patchNodeTree2.default)(renderStream.getRootNode(), patches);
			}

			if (!isSuccessful) {
				throw new Error('Patching the DOM was unsuccesful!');
			}

			renderStream.previousAshNodeTree = ashNodeTree;
		}
	}

	/**
	 * Returns root node.
	 *
	 * @returns {Node|null}
	 */
	function getRootNode() {
		if (this.containerNode) {
			for (var i = 0; i < this.containerNode.childNodes.length; i++) {
				if (typeof this.containerNode.childNodes[i][ID_ATTRIBUTE_NAME] !== 'undefined') {
					return this.containerNode.childNodes[i];
				}
			}
		}

		return null;
	}

	/**
	 * Renders ViewStream to the Node, if specified.
	 *
	 * @param {ViewStream} viewStream
	 * @param {Node} node
	 * @returns {Stream}
	 */
	function renderViewStream(viewStream) {
		var node = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

		if (!(viewStream instanceof _ViewStream2.default)) {
			throw new Error(viewStream + ' (viewStream) must be an ViewStream instance.');
		}

		if (node && !(0, _isElement2.default)(node)) {
			throw new Error(node + ' (node) must be a DOM node.');
		}

		if (node) {
			// remove child nodes which are not element nodes
			for (var j = 0; j < node.childNodes.length; j++) {
				if (node.childNodes[j].nodeType !== ELEMENT_NODE) {
					node.removeChild(node.childNodes[j]);

					j--;
				}
			}
		}

		var stream = new _Stream2.default();

		stream.getRootNode = getRootNode.bind(stream);
		stream.containerNode = node;
		stream.previousAshNodeTree = null;

		stream.combine(render, viewStream);

		return stream;
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = createNodeTree;

	var _isTextAshNode = __webpack_require__(36);

	var _isTextAshNode2 = _interopRequireDefault(_isTextAshNode);

	var _setNodeProperties = __webpack_require__(37);

	var _setNodeProperties2 = _interopRequireDefault(_setNodeProperties);

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ID_ATTRIBUTE_NAME = _constants2.default.ID_ATTRIBUTE_NAME;
	var INDEX_ATTRIBUTE_NAME = _constants2.default.INDEX_ATTRIBUTE_NAME;
	var STREAM_ID_ATTRIBUTE_NAME = _constants2.default.STREAM_ID_ATTRIBUTE_NAME;

	/**
	 * Creates Node tree from AshNode tree.
	 *
	 * @param {AshNode} ashNodeTree
	 * @returns {Node}
	 */
	function createNodeTree(ashNodeTree) {
		var nodeTree = undefined;

		if (!ashNodeTree) {
			return null;
		}

		if ((0, _isTextAshNode2.default)(ashNodeTree)) {
			nodeTree = global.document.createTextNode(ashNodeTree.text);

			nodeTree[ID_ATTRIBUTE_NAME] = ashNodeTree.id;
			nodeTree[INDEX_ATTRIBUTE_NAME] = ashNodeTree.index;
			nodeTree[STREAM_ID_ATTRIBUTE_NAME] = ashNodeTree.streamId;

			return nodeTree;
		}

		// create element
		if ( /*ashNodeTree.tagName === 'a' || */ashNodeTree.tagName === 'altglyph' || ashNodeTree.tagName === 'altglyphdef' || ashNodeTree.tagName === 'altglyphitem' || ashNodeTree.tagName === 'animate' || ashNodeTree.tagName === 'animatecolor' || ashNodeTree.tagName === 'animatemotion' || ashNodeTree.tagName === 'animatetransform' || ashNodeTree.tagName === 'circle' || ashNodeTree.tagName === 'clippath' || ashNodeTree.tagName === 'color-profile' || ashNodeTree.tagName === 'cursor' || ashNodeTree.tagName === 'defs' || ashNodeTree.tagName === 'desc' || ashNodeTree.tagName === 'ellipse' || ashNodeTree.tagName === 'feblend' || ashNodeTree.tagName === 'fecolormatrix' || ashNodeTree.tagName === 'fecomponenttransfer' || ashNodeTree.tagName === 'fecomposite' || ashNodeTree.tagName === 'feconvolvematrix' || ashNodeTree.tagName === 'fediffuselighting' || ashNodeTree.tagName === 'fedisplacementmap' || ashNodeTree.tagName === 'fedistantlight' || ashNodeTree.tagName === 'feflood' || ashNodeTree.tagName === 'fefunca' || ashNodeTree.tagName === 'fefuncb' || ashNodeTree.tagName === 'fefuncg' || ashNodeTree.tagName === 'fefuncr' || ashNodeTree.tagName === 'fegaussianblur' || ashNodeTree.tagName === 'feimage' || ashNodeTree.tagName === 'femerge' || ashNodeTree.tagName === 'femergenode' || ashNodeTree.tagName === 'femorphology' || ashNodeTree.tagName === 'feoffset' || ashNodeTree.tagName === 'fepointlight' || ashNodeTree.tagName === 'fespecularlighting' || ashNodeTree.tagName === 'fespotlight' || ashNodeTree.tagName === 'fetile' || ashNodeTree.tagName === 'feturbulence' || ashNodeTree.tagName === 'filter' || ashNodeTree.tagName === 'font' || ashNodeTree.tagName === 'font-face' || ashNodeTree.tagName === 'font-face-format' || ashNodeTree.tagName === 'font-face-name' || ashNodeTree.tagName === 'font-face-src' || ashNodeTree.tagName === 'font-face-uri' || ashNodeTree.tagName === 'foreignobject' || ashNodeTree.tagName === 'g' || ashNodeTree.tagName === 'glyph' || ashNodeTree.tagName === 'glyphref' || ashNodeTree.tagName === 'hkern' || ashNodeTree.tagName === 'image' || ashNodeTree.tagName === 'line' || ashNodeTree.tagName === 'lineargradient' || ashNodeTree.tagName === 'marker' || ashNodeTree.tagName === 'mask' || ashNodeTree.tagName === 'metadata' || ashNodeTree.tagName === 'missing-glyph' || ashNodeTree.tagName === 'mpath' || ashNodeTree.tagName === 'path' || ashNodeTree.tagName === 'pattern' || ashNodeTree.tagName === 'polygon' || ashNodeTree.tagName === 'polyline' || ashNodeTree.tagName === 'radialgradient' || ashNodeTree.tagName === 'rect' || ashNodeTree.tagName === 'script' || ashNodeTree.tagName === 'set' || ashNodeTree.tagName === 'stop' || ashNodeTree.tagName === 'style' || ashNodeTree.tagName === 'svg' || ashNodeTree.tagName === 'switch' || ashNodeTree.tagName === 'symbol' || ashNodeTree.tagName === 'text' || ashNodeTree.tagName === 'textpath' || ashNodeTree.tagName === 'title' || ashNodeTree.tagName === 'tref' || ashNodeTree.tagName === 'tspan' || ashNodeTree.tagName === 'use' || ashNodeTree.tagName === 'view' || ashNodeTree.tagName === 'vkern') {
			nodeTree = global.document.createElementNS('http://www.w3.org/2000/svg', ashNodeTree.tagName);
		} else {
			nodeTree = global.document.createElement(ashNodeTree.tagName);
		}

		// set properties
		nodeTree[ID_ATTRIBUTE_NAME] = ashNodeTree.id;
		nodeTree[INDEX_ATTRIBUTE_NAME] = ashNodeTree.index;
		nodeTree[STREAM_ID_ATTRIBUTE_NAME] = ashNodeTree.streamId;

		(0, _setNodeProperties2.default)(nodeTree, ashNodeTree.properties, true);

		for (var i = 0; i < ashNodeTree.children.length; i++) {
			var child = createNodeTree(ashNodeTree.children[i]);

			if (child) {
				nodeTree.appendChild(child);
			}
		}

		return nodeTree;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isTextAshNode;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TEXT_ASH_NODE = _constants2.default.TEXT_ASH_NODE;

	/**
	 * Checks if `value` is AshNode with type of `TEXT_ASH_NODE`.
	 *
	 * @param {*} value
	 * @returns {boolean}
	 */
	function isTextAshNode(value) {
	  return value && value.type === TEXT_ASH_NODE;
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = setNodeProperties;

	var _isObject = __webpack_require__(38);

	var _isObject2 = _interopRequireDefault(_isObject);

	var _attachEvents = __webpack_require__(39);

	var _attachEvents2 = _interopRequireDefault(_attachEvents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Sets properties of Node.
	 * If the node is newly inserted, `isNewlyInserted` must be set to true, so the node ids aren't overridden during eventual events reindexing.
	 *
	 * @param {Node} node
	 * @param {Object} properties
	 * @param {boolean} isNewlyInserted
	 */
	function setNodeProperties(node, properties, isNewlyInserted) {
		for (var prop in properties) {
			if (properties.hasOwnProperty(prop)) {
				if (prop === 'style' && (0, _isObject2.default)(properties[prop])) {
					for (var style in properties[prop]) {
						if (properties[prop].hasOwnProperty(style)) {
							node.style[style] = properties[prop][style];
						}
					}
				} else if (prop === 'events' && (0, _isObject2.default)(properties[prop])) {
					(0, _attachEvents2.default)(node, properties[prop], isNewlyInserted);
				} else if (prop === 'className' || prop === 'class') {
					if (typeof node.className === 'string' && properties[prop]) {
						node.className = properties[prop];
					} else if (properties[prop]) {
						node.setAttribute('class', properties[prop]);
					}
				} else if (!(0, _isObject2.default)(properties[prop])) {
					if (prop.substring(0, 6) === 'xlink:') {
						node.setAttributeNS('http://www.w3.org/1999/xlink', prop.substring(6), properties[prop]);
					} else if (prop.substring(0, 4) === 'xml:') {
						node.setAttributeNS('http://www.w3.org/2000/svg', prop.substring(4), properties[prop]);
					} else if (prop === 'checked') {
						node.checked = !!properties[prop];

						if (node.checked) {
							node.setAttribute('checked', 'checked');
						} else {
							node.removeAttribute('checked');
						}
					} else if (prop === 'value') {
						node.value = properties[prop];
						node.setAttribute(prop, properties[prop]);
					} else if (prop !== 'key') {
						node.setAttribute(prop, properties[prop]);
					}
				}
			}
		}

		return node;
	}

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isObject;
	/**
	 * Checks if `value` is the language type of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @param {*} value
	 * @returns {boolean}
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  return typeof value === 'function' || value && typeof value === 'object' || false;
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = attachEvents;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	var _isFunction = __webpack_require__(18);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _parseAshNodeId = __webpack_require__(40);

	var _parseAshNodeId2 = _interopRequireDefault(_parseAshNodeId);

	var _events = __webpack_require__(41);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ID_ATTRIBUTE_NAME = _constants2.default.ID_ATTRIBUTE_NAME;
	var STREAM_ID_ATTRIBUTE_NAME = _constants2.default.STREAM_ID_ATTRIBUTE_NAME;
	var INDEX_SEPARATOR = _constants2.default.INDEX_SEPARATOR;

	/**
	 * Handles fired events.
	 *
	 * @param {string} eventName
	 * @param {Event} event
	 */
	function eventHandler(eventName, event) {
		var id = event.target[ID_ATTRIBUTE_NAME];
		var streamId = event.target[STREAM_ID_ATTRIBUTE_NAME];

		if (id) {
			var indices = (0, _parseAshNodeId2.default)(id);

			while (indices.length) {
				for (var i = 0; i < _events2.default[eventName].length; i++) {
					if (_events2.default[eventName][i].id === id && _events2.default[eventName][i].streamId === streamId) {
						_events2.default[eventName][i].callback(event);
					}
				}

				indices.pop();

				id = indices.join(INDEX_SEPARATOR);
			}
		}
	}

	/**
	 * Ataches events descried by `events` to the `node`.
	 * If the node is newly inserted, `isNewlyInserted` must be set to true, so the node ids aren't overridden during eventual events reindexing.
	 *
	 * @param {Node} node
	 * @param {Object} events
	 * @param {boolean} isNewlyInserted
	 */
	function attachEvents(node, events, isNewlyInserted) {
		for (var eventName in events) {
			if (events.hasOwnProperty(eventName) && (0, _isFunction2.default)(events[eventName])) {
				if (!_events2.default[eventName]) {
					_events2.default[eventName] = [];

					global.document.addEventListener(eventName, eventHandler.bind(this, eventName), true);
				}

				for (var i = 0; i < _events2.default[eventName].length; i++) {
					if (_events2.default[eventName][i].streamId === node[STREAM_ID_ATTRIBUTE_NAME] && _events2.default[eventName][i].id === node[ID_ATTRIBUTE_NAME]) {
						_events2.default[eventName][i].callback = events[eventName];
						_events2.default[eventName][i].isNewlyInserted = !!isNewlyInserted;

						return;
					}
				}

				// push new event
				_events2.default[eventName].push({
					id: node[ID_ATTRIBUTE_NAME],
					streamId: node[STREAM_ID_ATTRIBUTE_NAME],
					callback: events[eventName],
					isNewlyInserted: !!isNewlyInserted,
					isReindexed: {}
				});
			}
		}
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = parseAshNodeId;
	/**
	 * Converts id string to the indices array.
	 *
	 * @param {string} id
	 * @returns {Array<number>}
	 *
	 * @example
	 * parseAshNodeId('0.15.9.1.0'); // -> [0, 15, 9, 1, 0]
	 */
	function parseAshNodeId(id) {
	  var result = id.split('.');

	  for (var i = 0; i < result.length; i++) {
	    result[i] |= 0;
	  }

	  return result;
	}

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var topics = {};

	exports.default = topics;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = diffAshNodeTree;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PATCH_ELEMENT_ASH_NODE = _constants2.default.PATCH_ELEMENT_ASH_NODE;
	var PATCH_TEXT_ASH_NODE = _constants2.default.PATCH_TEXT_ASH_NODE;
	var PATCH_PROPERTIES = _constants2.default.PATCH_PROPERTIES;
	var PATCH_ORDER = _constants2.default.PATCH_ORDER;
	var PATCH_INSERT = _constants2.default.PATCH_INSERT;
	var PATCH_REMOVE = _constants2.default.PATCH_REMOVE;

	/**
	 * Walks AshNode children.
	 *
	 * @param {Array<AshNode>} oldChildren
	 * @param {Array<AshNode>} newChildren
	 * @param {AshNode} oldAshNode
	 * @param {AshNode} newAshNode
	 * @param {Array<Object>} patches
	 * @returns {Array<Object>}
	 */
	function walkDiffAshNodeChildren(oldChildren, newChildren, oldAshNode, newAshNode, patches) {
		var oldChildIndex = 0;
		var newChildIndex = 0;
		var key = 0;
		var isChildDirty = false;

		// lets fill in keys, if needed; simple first-to-first correspondence
		for (var i = 0, length = Math.max(oldChildren.length, newChildren.length); i < length; i++) {
			if (newChildren[i] && newChildren[i].isDirty) {
				isChildDirty = true;
			}

			if (oldChildren[i] && oldChildren[i].key) {
				oldChildren[i].computedKey = oldChildren[i].key;
			}

			if (newChildren[i] && newChildren[i].key) {
				newChildren[i].computedKey = newChildren[i].key;
			}

			while (oldChildren[oldChildIndex] && oldChildren[oldChildIndex].key) {
				oldChildIndex++;
			}

			while (newChildren[newChildIndex] && newChildren[newChildIndex].key) {
				newChildIndex++;
			}

			if (oldChildren[oldChildIndex]) {
				oldChildren[oldChildIndex].computedKey = key;
			}

			if (newChildren[newChildIndex]) {
				newChildren[newChildIndex].computedKey = key;
			}

			key++;
			oldChildIndex++;
			newChildIndex++;
		}

		// no children are dirty, walk them
		if (!isChildDirty && oldChildren.length === newChildren.length) {
			for (var i = 0; i < oldChildren.length; i++) {
				walkDiffAshNodeTree(oldChildren[i], newChildren[i], patches);
			}

			return patches;
		}

		// keys are in; let's compare order of children
		var foundIndex = undefined;

		// first iterate over old children
		for (var i = 0; i < oldChildren.length; i++) {
			var isChildFound = false;

			for (var j = 0; j < newChildren.length; j++) {
				if (oldChildren[i].computedKey === newChildren[j].computedKey) {
					isChildFound = true;
					foundIndex = j;

					break;
				}
			}

			// node with matching key was found?
			if (isChildFound) {
				// is order same?
				if (i !== foundIndex) {
					patches.push({
						type: PATCH_ORDER,
						newId: newChildren[foundIndex].id,
						id: oldChildren[i].id,
						indices: oldChildren[i].indices,
						streamId: oldChildren[i].streamId,
						index: foundIndex
					});
				}

				// now walk inside those children...
				walkDiffAshNodeTree(oldChildren[i], newChildren[foundIndex], patches);
			} else {
				// node is to be removed...
				patches.push({
					type: PATCH_REMOVE,
					id: oldChildren[i].id,
					indices: oldChildren[i].indices,
					streamId: oldChildren[i].streamId
				});
			}
		}

		// now iterate over new children, if there are any
		for (var i = 0; i < newChildren.length; i++) {
			var isChildFound = false;

			for (var j = 0; j < oldChildren.length; j++) {
				if (oldChildren[j].computedKey === newChildren[i].computedKey) {
					isChildFound = true;

					break;
				}
			}

			// new child was not found
			if (!isChildFound) {
				patches.push({
					type: PATCH_INSERT,
					node: newChildren[i],
					id: newChildren[i].id,
					indices: newChildren[i].indices,
					parentId: oldAshNode.id,
					parentIndices: oldAshNode.indices
				});
			}
		}

		return patches;
	}

	/**
	 * Walks AshNodes.
	 *
	 * @param {AshNode} oldAshNode
	 * @param {AshNode} newAshNode
	 * @param {Array<Object>} patches
	 * @returns {Array<Object>}
	 */
	function walkDiffAshNodeTree(oldAshNode, newAshNode, patches) {
		var differentProperties = false;
		var propertiesToChange = {};
		var propertiesToRemove = [];

		if (newAshNode === null) {
			// node is to be removed...
			patches.push({
				type: PATCH_REMOVE,
				id: oldAshNode.id,
				indices: oldAshNode.indices,
				streamId: oldAshNode.streamId
			});

			return patches;
		}

		if (oldAshNode === newAshNode || !newAshNode.isDirty) {
			if (oldAshNode.oldChildren && oldAshNode.oldChildren.length) {
				walkDiffAshNodeChildren(oldAshNode.oldChildren, newAshNode.children, oldAshNode, newAshNode, patches);

				// we must delete old children, because in next diff they would be "old old children", and we dont want that
				oldAshNode.oldChildren = newAshNode.oldChildren = null;
			} else if (oldAshNode.children && oldAshNode.children.length || newAshNode.children && newAshNode.children.length) {
				walkDiffAshNodeChildren(oldAshNode.children, newAshNode.children, oldAshNode, newAshNode, patches);
			}

			return patches;
		}

		if (oldAshNode.type === newAshNode.type && oldAshNode.text !== newAshNode.text) {
			patches.push({
				type: PATCH_TEXT_ASH_NODE,
				id: oldAshNode.id,
				indices: oldAshNode.indices,
				text: newAshNode.text
			});

			// text ash node cannot generate another type of patch
			return patches;
		}

		// which properties are different or new
		for (var newProperty in newAshNode.properties) {
			if (newAshNode.properties.hasOwnProperty(newProperty) && oldAshNode.properties && newAshNode.properties[newProperty] !== oldAshNode.properties[newProperty]) {
				if (typeof newAshNode.properties[newProperty] === 'object' && oldAshNode.properties[newProperty] && typeof oldAshNode.properties[newProperty] === 'object') {
					// which propertie are different or new
					for (var newSubproperty in newAshNode.properties[newProperty]) {
						if (newAshNode.properties[newProperty].hasOwnProperty(newSubproperty) && newAshNode.properties[newProperty][newSubproperty] !== oldAshNode.properties[newProperty][newSubproperty]) {
							propertiesToChange[newProperty] = propertiesToChange[newProperty] || {};
							propertiesToChange[newProperty][newSubproperty] = newAshNode.properties[newProperty][newSubproperty];
							differentProperties = true;
						}
					}

					// which properties are to be removed
					for (var oldSubproperty in oldAshNode.properties[newProperty]) {
						if (oldAshNode.properties[newProperty].hasOwnProperty(oldSubproperty) && typeof newAshNode.properties[newProperty][oldSubproperty] === 'undefined') {
							propertiesToRemove.push(newProperty + '.' + oldSubproperty);

							differentProperties = true;
						}
					}
				} else {
					propertiesToChange[newProperty] = newAshNode.properties[newProperty];
					differentProperties = true;
				}
			}
		}

		// which properties are to be removed
		for (var oldProperty in oldAshNode.properties) {
			if (oldAshNode.properties.hasOwnProperty(oldProperty) && newAshNode.properties && typeof newAshNode.properties[oldProperty] === 'undefined') {
				differentProperties = true;
				propertiesToRemove.push(oldProperty);
			}
		}

		if (oldAshNode.type !== newAshNode.type || oldAshNode.tagName !== newAshNode.tagName) {
			patches.push({
				type: PATCH_ELEMENT_ASH_NODE,
				id: oldAshNode.id,
				indices: oldAshNode.indices,
				streamId: oldAshNode.streamId,
				node: newAshNode
			});

			// whole node must be replaced; no sense in finding other differences
			return patches;
		}

		if (differentProperties) {
			patches.push({
				type: PATCH_PROPERTIES,
				id: oldAshNode.id,
				indices: oldAshNode.indices,
				streamId: oldAshNode.streamId,
				propertiesToChange: propertiesToChange,
				propertiesToRemove: propertiesToRemove
			});
		}

		// diff the children...
		if (oldAshNode.oldChildren && oldAshNode.oldChildren.length) {
			walkDiffAshNodeChildren(oldAshNode.oldChildren, newAshNode.children, oldAshNode, newAshNode, patches);

			// we must delete old children, because in next diff they would be "old old children", and we dont want that
			oldAshNode.oldChildren = newAshNode.oldChildren = null;
		} else if (oldAshNode.children && oldAshNode.children.length || newAshNode.children && newAshNode.children.length) {
			walkDiffAshNodeChildren(oldAshNode.children, newAshNode.children, oldAshNode, newAshNode, patches);
		}

		return patches;
	}

	/**
	 * Diff two AshNode trees.
	 *
	 * @param {AshNode} oldAshNodeTree
	 * @param {AshNode} newAshNodeTree
	 * @returns {Array}
	 */
	function diffAshNodeTree(oldAshNodeTree, newAshNodeTree) {
		return walkDiffAshNodeTree(oldAshNodeTree, newAshNodeTree, []);
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = patchNodeTree;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	var _parseAshNodeId = __webpack_require__(40);

	var _parseAshNodeId2 = _interopRequireDefault(_parseAshNodeId);

	var _createNodeTree = __webpack_require__(35);

	var _createNodeTree2 = _interopRequireDefault(_createNodeTree);

	var _setNodeProperties = __webpack_require__(37);

	var _setNodeProperties2 = _interopRequireDefault(_setNodeProperties);

	var _removeNodeProperties = __webpack_require__(44);

	var _removeNodeProperties2 = _interopRequireDefault(_removeNodeProperties);

	var _findNode = __webpack_require__(17);

	var _findNode2 = _interopRequireDefault(_findNode);

	var _isElement = __webpack_require__(48);

	var _isElement2 = _interopRequireDefault(_isElement);

	var _detachEvents = __webpack_require__(45);

	var _detachEvents2 = _interopRequireDefault(_detachEvents);

	var _markEvents = __webpack_require__(50);

	var _markEvents2 = _interopRequireDefault(_markEvents);

	var _reindexEvents = __webpack_require__(51);

	var _reindexEvents2 = _interopRequireDefault(_reindexEvents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ID_ATTRIBUTE_NAME = _constants2.default.ID_ATTRIBUTE_NAME;
	var INDEX_ATTRIBUTE_NAME = _constants2.default.INDEX_ATTRIBUTE_NAME;
	var PATCH_ELEMENT_ASH_NODE = _constants2.default.PATCH_ELEMENT_ASH_NODE;
	var PATCH_TEXT_ASH_NODE = _constants2.default.PATCH_TEXT_ASH_NODE;
	var PATCH_PROPERTIES = _constants2.default.PATCH_PROPERTIES;
	var PATCH_ORDER = _constants2.default.PATCH_ORDER;
	var PATCH_INSERT = _constants2.default.PATCH_INSERT;
	var PATCH_REMOVE = _constants2.default.PATCH_REMOVE;
	var INDEX_SEPARATOR = _constants2.default.INDEX_SEPARATOR;

	/**
	 * Zero pads number.
	 *
	 * @param {number} number
	 * @param {number} length
	 * @returns {string}
	 */
	function zeroPadNumber(number, length) {
		var n = Math.pow(10, length);

		return number < n ? ('' + (n + number)).slice(1) : '' + number;
	}

	function comparePatches(a, b) {
		return a.sortOrder - b.sortOrder;
	}

	function nodeIndex() /*node*/{
		var index = 0;
		var node = arguments[0].previousSibling;

		while (node) {
			index++;

			node = node.previousSibling;
		}

		return index;
	}

	/**
	 * Walks nodes for reindexing.
	 *
	 * @param {Node} node
	 * @param {number} level
	 * @param {number} newIndex
	 */
	function walkReindexChildNodes(node, level, newIndex) {
		var childIndices = undefined;

		for (var i = 0; i < node.childNodes.length; i++) {
			if (node.childNodes[i].nodeType === 1) {
				childIndices = (0, _parseAshNodeId2.default)(node.childNodes[i][ID_ATTRIBUTE_NAME]);
				childIndices[level] = newIndex;
				node.childNodes[i][ID_ATTRIBUTE_NAME] = childIndices.join(INDEX_SEPARATOR);
				node.childNodes[i][INDEX_ATTRIBUTE_NAME] = childIndices[childIndices.length - 1];

				if (node.childNodes[i].childNodes && node.childNodes[i].childNodes.length) {
					walkReindexChildNodes(node.childNodes[i], level, newIndex);
				}
			}
		}
	}

	/**
	 * Reindexes node and its children.
	 *
	 * @param {Node} parentNode
	 * @param {number} newIndex
	 */
	function reindexChildNodes(parentNode, newIndex) {
		var parentIndices = (0, _parseAshNodeId2.default)(parentNode[ID_ATTRIBUTE_NAME]);
		var level = parentIndices.length - 1;

		walkReindexChildNodes(parentNode, level, newIndex);
	}

	/**
	 * Flushes node reindex and reorder caches.
	 *
	 * @param {Array} reindexCache
	 * @param {Array} reorderCache
	 */
	function flushCache(reindexCache, reorderCache) {
		while (reindexCache.length > 0) {
			reindexCache[0].node[ID_ATTRIBUTE_NAME] = reindexCache[0].newId;
			reindexCache[0].node[INDEX_ATTRIBUTE_NAME] = reindexCache[0].newIndex;

			reindexChildNodes(reindexCache[0].node, reindexCache[0].newIndex);

			// clear the cache
			reindexCache.shift();
		}

		// remove un-unique nodes from reorder cache
		for (var i = 0; i < reorderCache.length; i++) {
			for (var j = i + 1; j < reorderCache.length; j++) {
				if (reorderCache[j] === reorderCache[i]) {
					reorderCache.splice(j, 1);

					j--;
				}
			}
		}

		while (reorderCache.length > 0) {
			for (var i = 0; i < reorderCache[0].childNodes.length; i++) {
				var index = nodeIndex(reorderCache[0].childNodes[i]);

				if (index === reorderCache[0].childNodes[i][INDEX_ATTRIBUTE_NAME] || index + 1 === reorderCache[0].childNodes[i][INDEX_ATTRIBUTE_NAME]) {
					continue;
				} else {
					if (reorderCache[0].childNodes[i][INDEX_ATTRIBUTE_NAME] > reorderCache[0].childNodes[i].length - 1) {
						reorderCache[0].appendChild(reorderCache[0].childNodes[i]);
					} else {
						reorderCache[0].insertBefore(reorderCache[0].childNodes[i], reorderCache[0].childNodes[reorderCache[0].childNodes[i][INDEX_ATTRIBUTE_NAME]]);
					}

					if (index + 1 < reorderCache[0].childNodes[i][INDEX_ATTRIBUTE_NAME]) {
						i--;
					}
				}
			}

			// remove cache item
			reorderCache.shift();
		}
	}

	/**
	 * Patches Node tree.
	 * Returns `true` if successful.
	 *
	 * @param {Node} nodeTree
	 * @param {Array<Object>} patches
	 * @returns {boolean}
	 */
	function patchNodeTree(nodeTree /*, patches*/) {
		var patches = arguments[1];
		var node = undefined;
		var reindexCache = [];
		var reorderCache = [];

		if (!(0, _isElement2.default)(nodeTree)) {
			throw new Error('Patching the DOM was unsuccesful!');
		}

		if (!patches.length) {
			return true;
		}

		// compute number of digits of greatest node index
		var maxIndex = 1;

		for (var i = 0; i < patches.length; i++) {
			for (var j = 0; j < patches[i].indices.length; j++) {
				if (maxIndex < patches[i].indices[j]) {
					maxIndex = patches[i].indices[j];
				}
			}
		}

		var maxDigits = patches.maxIndex > 0 ? Math.floor(Math.log(Math.abs(Math.floor(patches.maxIndex))) / Math.LN10) + 1 : 1;

		var ZERO_PADDED_9 = zeroPadNumber(9, maxDigits);
		var ZERO_PADDED_8 = zeroPadNumber(8, maxDigits);
		var ZERO_PADDED_7 = zeroPadNumber(7, maxDigits);
		var ZERO_PADDED_6 = zeroPadNumber(6, maxDigits);
		var ZERO_PADDED_5 = zeroPadNumber(5, maxDigits);
		var ZERO_PADDED_4 = zeroPadNumber(4, maxDigits);
		var ZERO_PADDED_0 = zeroPadNumber(0, maxDigits);

		// compute sort order
		for (var i = 0; i < patches.length; i++) {
			patches[i].sortOrder = '';

			// first we order patches by their levels without the last level
			for (var j = 0; j < patches[i].indices.length - 1; j++) {
				patches[i].sortOrder += zeroPadNumber(patches[i].indices[j], maxDigits);
			}

			// then the patch type is important
			if (patches[i].type === PATCH_ELEMENT_ASH_NODE) {
				patches[i].sortOrder += ZERO_PADDED_9;
			} else if (patches[i].type === PATCH_TEXT_ASH_NODE) {
				patches[i].sortOrder += ZERO_PADDED_8;
			} else if (patches[i].type === PATCH_PROPERTIES) {
				patches[i].sortOrder += ZERO_PADDED_7;
			} else if (patches[i].type === PATCH_REMOVE) {
				patches[i].sortOrder += ZERO_PADDED_6;
			} else if (patches[i].type === PATCH_INSERT) {
				patches[i].sortOrder += ZERO_PADDED_5;
			} else if (patches[i].type === PATCH_ORDER) {
				patches[i].sortOrder += ZERO_PADDED_4;
			} else {
				patches[i].sortOrder += ZERO_PADDED_0;
			}

			// and now the last level
			patches[i].sortOrder += zeroPadNumber(patches[i].indices[patches[i].indices.length - 1], maxDigits);

			// convert to number;
			patches[i].sortOrder = parseInt(patches[i].sortOrder, 10);
		}

		// sort patches by their order
		patches.sort(comparePatches);

		// now iterate over patches...
		var lastLevel = patches[patches.length - 1].indices.length;

		for (var i = patches.length - 1; i >= 0; i--) {
			if (lastLevel < patches[i].indices.length) {
				// patching new level, must flush cache
				flushCache(reindexCache, reorderCache);

				lastLevel = patches[i].indices.length;
			}

			if (patches[i].type === PATCH_ELEMENT_ASH_NODE) {
				// remove old events
				(0, _detachEvents2.default)(patches[i].id, patches[i].streamId);

				// find node
				node = (0, _findNode2.default)(nodeTree, patches[i].id, patches[i].indices);

				if (!node) {
					throw new Error('Patching the DOM was unsuccesful!');
				}

				// new node, but change the order and index - they must be from the node-to-be-removed, because patch for order is separate...
				var newNode = (0, _createNodeTree2.default)(patches[i].node);

				newNode[ID_ATTRIBUTE_NAME] = node[ID_ATTRIBUTE_NAME];
				newNode[INDEX_ATTRIBUTE_NAME] = node[INDEX_ATTRIBUTE_NAME];

				node.parentNode.replaceChild(newNode, node);
			} else if (patches[i].type === PATCH_TEXT_ASH_NODE) {
				node = (0, _findNode2.default)(nodeTree, patches[i].id, patches[i].indices);

				if (!node) {
					throw new Error('Patching the DOM was unsuccesful!');
				}

				node.nodeValue = patches[i].text;
			} else if (patches[i].type === PATCH_PROPERTIES) {
				node = (0, _findNode2.default)(nodeTree, patches[i].id, patches[i].indices);

				if (!node) {
					throw new Error('Patching the DOM was unsuccesful!');
				}

				(0, _setNodeProperties2.default)(node, patches[i].propertiesToChange, false);
				(0, _removeNodeProperties2.default)(node, patches[i].propertiesToRemove);
			} else if (patches[i].type === PATCH_REMOVE) {
				node = (0, _findNode2.default)(nodeTree, patches[i].id, patches[i].indices);

				if (!node) {
					throw new Error('Patching the DOM was unsuccesful!');
				}

				// remove old events
				(0, _detachEvents2.default)(patches[i].id, patches[i].streamId);

				node.parentNode.removeChild(node);
			} else if (patches[i].type === PATCH_INSERT) {
				node = (0, _findNode2.default)(nodeTree, patches[i].parentId, patches[i].parentIndices);

				if (!node) {
					throw new Error('Patching the DOM was unsuccesful!');
				}

				node.appendChild((0, _createNodeTree2.default)(patches[i].node));

				reorderCache.push(node);
			} else if (patches[i].type === PATCH_ORDER) {
				node = (0, _findNode2.default)(nodeTree, patches[i].id, patches[i].indices);

				if (!node) {
					throw new Error('Patching the DOM was unsuccesful!');
				}

				// reindex events
				(0, _reindexEvents2.default)(patches[i].id, patches[i].indices, patches[i].index, patches[i].streamId);

				reindexCache.push({
					node: node,
					newId: patches[i].newId,
					newIndex: patches[i].index,
					streamId: patches[i].streamId
				});

				reorderCache.push(node.parentNode);
			}
		}

		flushCache(reindexCache, reorderCache);
		(0, _markEvents2.default)(patches.streamId);

		return true;
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = removeNodeProperties;

	var _detachEvents = __webpack_require__(45);

	var _detachEvents2 = _interopRequireDefault(_detachEvents);

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ID_ATTRIBUTE_NAME = _constants2.default.ID_ATTRIBUTE_NAME;
	var STREAM_ID_ATTRIBUTE_NAME = _constants2.default.STREAM_ID_ATTRIBUTE_NAME;

	/**
	 * Removes properties from Node.
	 *
	 * @param {Node} node
	 * @param {Object} properties
	 */
	function removeNodeProperties(node, properties) {
		for (var i = 0; i < properties.length; i++) {
			var props = properties[i].split('.');

			if (props.length === 1) {
				if (props[0] === 'style') {
					node.removeAttribute('style');
				} else if (props[0] === 'className' || props[0] === 'class') {
					if (typeof node.className === 'string') {
						node.className = '';
					} else {
						node.setAttribute('class', '');
					}
				} else if (props[0].substring(0, 6) === 'xlink:') {
					node.removeAttributeNS('http://www.w3.org/1999/xlink', props[0].substring(6));
				} else if (props[0].substring(0, 4) === 'xml:') {
					node.removeAttributeNS('http://www.w3.org/2000/svg', props[0].substring(4));
				} else {
					node.removeAttribute(props[0]);
				}
			} else if (props.length === 2) {
				if (props[0] === 'style') {
					node.style[props[1]] = '';
				} else if (props[0] === 'events') {
					(0, _detachEvents2.default)(node[ID_ATTRIBUTE_NAME], node[STREAM_ID_ATTRIBUTE_NAME], props[1]);
				}
			}
		}
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = detachEvents;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	var _isMatching = __webpack_require__(46);

	var _isMatching2 = _interopRequireDefault(_isMatching);

	var _events = __webpack_require__(41);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var INDEX_SEPARATOR = _constants2.default.INDEX_SEPARATOR;

	/**
	 * Removes all events, that has id same or matching via isMatching().
	 * RemoveEvents('0.1') removes events '0.1', '0.1.0', '0.1.1', etc.
	 * If eventName is specified, only events with that name are removed.
	 *
	 * @param {string} id
	 * @param {number} streamId
	 * @param {string} eventName
	 */
	function detachEvents(id, streamId, eventName) {
		var splitId = id.split(INDEX_SEPARATOR);

		if (eventName && _events2.default[eventName]) {
			for (var i = 0; i < _events2.default[eventName].length; i++) {
				if (streamId === _events2.default[eventName][i].streamId && id === _events2.default[eventName][i].id) {
					_events2.default[eventName].splice(i, 1);

					return;
				}
			}
		} else if (!eventName) {
			// remove all events with id and ids that are matching it (ie. for 0.1 remove 0.1, 0.1.0, 0.1.1, etc.)
			for (var topicName in _events2.default) {
				if (_events2.default.hasOwnProperty(topicName)) {
					for (var i = 0; i < _events2.default[topicName].length; i++) {
						if (_events2.default[topicName][i].streamId && (0, _isMatching2.default)(splitId, _events2.default[topicName][i].id.split(INDEX_SEPARATOR), true) && !_events2.default[topicName][i].isNewlyInserted) {
							_events2.default[topicName].splice(i, 1);

							i--;
						}
					}
				}
			}
		}
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = isMatching;

	var _isArray = __webpack_require__(47);

	var _isArray2 = _interopRequireDefault(_isArray);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Checks if the chains of ; i.e all categories from the template chain must be present in the second chain, and in the same order.
	 * Strict comparison (===) is used.
	 * If strict is true, the order must be precisely the same
	 *
	 * @param {array} chain1 Template chain, ie. the chain to check against.
	 * @param {array} chain2 The chain being checked.
	 * @param {boolean} strict
	 * @returns {boolean} Returns true if the second chain matches the first, else false.
	 *
	 * @example
	 * ash.isMatching([1, 2, 3], [1, 2, 3]); // -> true
	 * ash.isMatching([1, 2, 3], [1, 2, 3, 4, 5]); // -> true
	 * ash.isMatching([1, 2, 3], [1, 4, 2, 5, 3]); // -> true
	 * ash.isMatching([1, 2, 3], [1, 2]); // -> false
	 * ash.isMatching([1, 2, 3], [1, 3, 2]); // -> false
	 * ash.isMatching([1, 2, 3], [1, 4, 2, 5, 3], true); // -> false
	 * ash.isMatching([1, 2, 3], [1, 2, 3, 5, 5], true); // -> true
	 */
	function isMatching(chain1, chain2, strict) {
		if (!(0, _isArray2.default)(chain1) || !(0, _isArray2.default)(chain2)) {
			return false;
		}

		var indexes = [];

		if (strict) {
			for (var i = 0; i < chain1.length; i++) {
				if (chain1[i] !== chain2[i]) {
					return false;
				}
			}

			return true;
		} else {
			for (var i = 0; i < chain1.length; i++) {
				for (var j = 0; j < chain2.length; j++) {
					if (chain1[i] === chain2[j]) {
						indexes.push(j);

						break;
					}

					if (j === chain2.length - 1) {
						return false; // item from chain1 is not in chain2, therefore there is no match
					}
				}
			}

			for (var i = 0; i < indexes.length - 1; i++) {
				if (indexes[i] >= indexes[i + 1]) {
					// indexes are't ordered, therefore there is no match
					return false;
				}
			}
		}

		return true;
	}

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Checks if `value` is an array.
	 *
	 * @param {*} value
	 * @returns {boolean}
	 */

	exports.default = Array.isArray || function (value) {
	  return Object.prototype.toString.call(value) === '[object Array]';
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isElement;

	var _isObjectLike = __webpack_require__(49);

	var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Checks if `value` is a DOM element.
	 *
	 * @param {*} value
	 * @returns {boolean}
	 */
	function isElement(value) {
	  return value && value.nodeType === 1 && (0, _isObjectLike2.default)(value) && Object.prototype.toString.call(value).indexOf('Element') > -1 || false;
	}

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isObjectLike;
	/**
	 * Checks if `value` is object-like.
	 *
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return value && typeof value === 'object' || false;
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = markEvents;

	var _events = __webpack_require__(41);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Cleans up events' reindexing helper properties.
	 *
	 * @param {number} streamId
	 */
	function markEvents(streamId) {
		for (var topicName in _events2.default) {
			if (_events2.default.hasOwnProperty(topicName)) {
				for (var i = 0; i < _events2.default[topicName].length; i++) {
					if (streamId === _events2.default[topicName][i].streamId) {
						_events2.default[topicName][i].isNewlyInserted = false;
						_events2.default[topicName][i].isReindexed = {};
					}
				}
			}
		}
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = reindexEvents;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	var _parseAshNodeId = __webpack_require__(40);

	var _parseAshNodeId2 = _interopRequireDefault(_parseAshNodeId);

	var _isMatching = __webpack_require__(46);

	var _isMatching2 = _interopRequireDefault(_isMatching);

	var _events = __webpack_require__(41);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var INDEX_SEPARATOR = _constants2.default.INDEX_SEPARATOR;

	/**
	 * Reindexes events.
	 *
	 * @param {string} oldId
	 * @param {Array} oldIndices
	 * @param {Array} newIndex
	 * @param {number} streamId
	 */
	function reindexEvents(oldId, oldIndices, newIndex, streamId) {
		var splitOldId = oldId.split(INDEX_SEPARATOR);

		for (var topicName in _events2.default) {
			if (_events2.default.hasOwnProperty(topicName)) {
				for (var i = 0; i < _events2.default[topicName].length; i++) {
					if (streamId === _events2.default[topicName][i].streamId && (0, _isMatching2.default)(splitOldId, _events2.default[topicName][i].id.split(INDEX_SEPARATOR), true) && !_events2.default[topicName][i].isNewlyInserted && !_events2.default[topicName][i].isReindexed[oldIndices.length - 1]) {
						var indices = (0, _parseAshNodeId2.default)(_events2.default[topicName][i].id);

						indices[oldIndices.length - 1] = newIndex;
						_events2.default[topicName][i].id = indices.join(INDEX_SEPARATOR);
						_events2.default[topicName][i].isReindexed[oldIndices.length - 1] = true;
					}
				}
			}
		}
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = validateNodeTree;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	var _attachEvents = __webpack_require__(39);

	var _attachEvents2 = _interopRequireDefault(_attachEvents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ID_ATTRIBUTE_NAME = _constants2.default.ID_ATTRIBUTE_NAME;
	var INDEX_ATTRIBUTE_NAME = _constants2.default.INDEX_ATTRIBUTE_NAME;
	var STREAM_ID_ATTRIBUTE_NAME = _constants2.default.STREAM_ID_ATTRIBUTE_NAME;

	function walkValidateNodeTree(nodeTree, ashNodeTree, streamId, eventsCache) {
		if (nodeTree.tagName && nodeTree.tagName.toLowerCase() !== ashNodeTree.tagName) {
			return false;
		}

		if (!nodeTree.tagName && nodeTree.textContent !== ashNodeTree.text) {
			return false;
		}

		if (nodeTree.getAttribute && nodeTree.getAttribute(ID_ATTRIBUTE_NAME) !== ashNodeTree.id || nodeTree.getAttribute && nodeTree.getAttribute(INDEX_ATTRIBUTE_NAME) >> 0 !== ashNodeTree.index) {
			return false;
		}

		nodeTree[ID_ATTRIBUTE_NAME] = ashNodeTree.id;
		nodeTree[INDEX_ATTRIBUTE_NAME] = ashNodeTree.index;
		nodeTree[STREAM_ID_ATTRIBUTE_NAME] = ashNodeTree.streamId;

		if (ashNodeTree.properties && ashNodeTree.properties.events && typeof ashNodeTree.properties.events === 'object') {
			eventsCache.push({
				events: ashNodeTree.properties.events,
				node: nodeTree
			});
		}

		if (nodeTree.childNodes.length && (!ashNodeTree.children || !ashNodeTree.children.length) || !nodeTree.childNodes.length && ashNodeTree.children && ashNodeTree.children.length || ashNodeTree.children && nodeTree.childNodes.length !== ashNodeTree.children.length) {
			return false;
		}

		if (ashNodeTree.children && ashNodeTree.children.length) {
			for (var i = 0; i < ashNodeTree.children.length; i++) {
				if (!walkValidateNodeTree(nodeTree.childNodes[i], ashNodeTree.children[i], streamId, eventsCache)) {
					return false;
				}
			}
		}

		return true;
	}

	/**
	 * Checks if existing Node tree is valid representation of AshNode tree `ashNodeTree`.
	 * If so, events are attached.
	 *
	 * @param {Node} nodeTree
	 * @param {AshNode} ashNodeTree
	 * @param {number} streamId
	 * @returns {boolean}
	 */
	function validateNodeTree(nodeTree, ashNodeTree, streamId) {
		var eventsCache = [];
		var isNodeTreeValid = walkValidateNodeTree(nodeTree, ashNodeTree, streamId, eventsCache);

		if (isNodeTreeValid) {
			for (var i = 0; i < eventsCache.length; i++) {
				(0, _attachEvents2.default)(eventsCache[i].node, eventsCache[i].events);
			}
		}

		return isNodeTreeValid;
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = createAshNodeTree;

	var _isComponentAshElement = __webpack_require__(26);

	var _isComponentAshElement2 = _interopRequireDefault(_isComponentAshElement);

	var _isAshNodeAshElement = __webpack_require__(16);

	var _isAshNodeAshElement2 = _interopRequireDefault(_isAshNodeAshElement);

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var INDEX_SEPARATOR = _constants2.default.INDEX_SEPARATOR;

	/**
	 * Walks AshNode tree.
	 *
	 * @param {AshNode} ashNodeTree
	 * @param {AshElement} ashElement
	 * @param {number} index
	 * @param {string} parentId
	 * @param {boolean} isParentComponentDirty
	 * @param {Array<number>} parentIndices
	 */
	function walkCreateAshNodeTree(ashNodeTree, ashElement, index, parentId, isParentComponentDirty, parentIndices) {
		if ((0, _isAshNodeAshElement2.default)(ashElement)) {
			if (isParentComponentDirty) {

				ashElement.instantiate();

				ashElement.instance.id = parentId + INDEX_SEPARATOR + index;
				ashElement.instance.index = index;
				ashElement.instance.indices = parentIndices.concat(index);
				ashElement.instance.streamId = ashElement.stream.id;
				ashElement.instance.isDirty = true;
				ashElement.instance.parent = ashNodeTree;

				ashNodeTree.children[ashElement.instance.index] = ashElement.instance;
			} else {
				ashElement.instance.isDirty = false;
				ashElement.instance.parent = ashNodeTree;

				if (ashNodeTree.oldChildren && ashElement.instance.index === 0) {
					ashNodeTree.oldChildren = null;
				}

				if (ashNodeTree.children[ashElement.instance.index] !== ashElement.instance) {
					ashNodeTree.children[ashElement.instance.index] = ashElement.instance;
				}
			}

			// walk the children
			for (var i = 0; i < ashElement.children.length; i++) {
				walkCreateAshNodeTree(ashNodeTree.children[ashElement.instance.index], ashElement.children[i], i, ashNodeTree.children[ashElement.instance.index].id, isParentComponentDirty, ashNodeTree.children[ashElement.instance.index].indices);
			}
		} else if (ashElement && ashElement.children[0]) {
			var isDirty = ashElement.isDirty;

			if (index === 0 && !isParentComponentDirty) {
				if (isDirty) {
					ashNodeTree.oldChildren = ashNodeTree.children;
					ashNodeTree.children = [];
				} else {
					ashNodeTree.oldChildren = null;
				}
			} else if (!isParentComponentDirty) {
				if (isDirty && !ashNodeTree.oldChildren) {
					ashNodeTree.oldChildren = ashNodeTree.children;
					ashNodeTree.children = [];

					// copy not dirty already walked children
					for (var i = 0; i < index; i++) {
						ashNodeTree.children[i] = ashNodeTree.oldChildren[i];
					}
				}
			}

			ashElement.isDirty = false;

			walkCreateAshNodeTree(ashNodeTree, ashElement.children[0], index, parentId, isDirty, parentIndices);
		}
	}

	/**
	 * Creates AshNode tree from AshElement tree.
	 *
	 * @param {AshElement} componentAshElement
	 * @returns {AshNode|null}
	 */
	function createAshNodeTree(componentAshElement) {
		if (!(0, _isComponentAshElement2.default)(componentAshElement)) {
			throw new Error(componentAshElement + ' (componentAshElement) must be a Component Ash Element object instance.');
		}

		var ashElement = componentAshElement;
		var ashNodeTree = undefined;
		var isDirty = ashElement.isDirty;

		ashElement.isDirty = false;

		// find first children which is ash node ash element
		while (!(0, _isAshNodeAshElement2.default)(ashElement) && ashElement && ashElement.children && ashElement.children.length) {
			ashElement = ashElement.children[0];
		}

		if (!ashElement || (0, _isComponentAshElement2.default)(ashElement) && !ashElement.children.length) {
			return null;
		}

		if (isDirty) {
			ashElement.instantiate();

			ashElement.instance.isDirty = true;
		} else {
			ashElement.instance.isDirty = false;
		}

		ashElement.instance.id = '0';
		ashElement.instance.index = 0;
		ashElement.instance.indices = [0];
		ashElement.instance.streamId = ashElement.stream.id;
		ashElement.instance.parent = null;
		ashNodeTree = ashElement.instance;

		// walk the children
		for (var i = 0; i < ashElement.children.length; i++) {
			walkCreateAshNodeTree(ashNodeTree, ashElement.children[i], i, ashNodeTree.id, isDirty, ashNodeTree.indices);
		}

		return ashNodeTree;
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = stringifyViewStream;

	var _stringifyAshNodeTree = __webpack_require__(55);

	var _stringifyAshNodeTree2 = _interopRequireDefault(_stringifyAshNodeTree);

	var _createAshNodeTree = __webpack_require__(53);

	var _createAshNodeTree2 = _interopRequireDefault(_createAshNodeTree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns Promise resolving to string with html representation of view stream.
	 *
	 * @param {ViewStream} viewStream
	 * @returns {Promise}
	 */
	function stringifyViewStream(viewStream) {
	  return new Promise(function (resolve) {
	    viewStream.on(function (ashElementTree) {
	      resolve((0, _stringifyAshNodeTree2.default)((0, _createAshNodeTree2.default)(ashElementTree)));
	    });
	  });
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = stringifyAshNodeTree;

	var _isElementAshNode = __webpack_require__(56);

	var _isElementAshNode2 = _interopRequireDefault(_isElementAshNode);

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ID_ATTRIBUTE_NAME = _constants2.default.ID_ATTRIBUTE_NAME;
	var INDEX_ATTRIBUTE_NAME = _constants2.default.INDEX_ATTRIBUTE_NAME;
	var INDEX_SEPARATOR = _constants2.default.INDEX_SEPARATOR;

	/**
	 * Escapes attrobute value.
	 *
	 * @param {*} s
	 * @returns {string}
	 */
	function escapeAttributeValue(value /*, preserveCR*/) {
		var preserveCR = arguments[1] ? '&#13;' : '\n';

		return ('' + value). // forces the conversion to string
		replace(/&/g, '&amp;') // this MUST be the 1st replacement
		.replace(/'/g, '&apos;') // The 4 other predefined entities, required
		.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r\n/g, preserveCR) // must be before the next replacement
		.replace(/[\r\n]/g, preserveCR);
	}

	/**
	 * Walks AshNode for stringificaion.
	 *
	 * @param {AshNode} ashNodeTree
	 * @param {number} index
	 * @returns {string}
	 */
	function walkStringifyAshNodeTree(ashNodeTree, index /*, parentId*/) {
		var html = '';
		var openingTag = '<';
		var closingTag = '';
		var content = '';
		var parentId = arguments[2];
		var key1 = undefined;
		var key2 = undefined;

		if ((0, _isElementAshNode2.default)(ashNodeTree)) {
			openingTag += ashNodeTree.tagName;
			closingTag = '</' + ashNodeTree.tagName + '>';

			if (parentId) {
				openingTag += ' ' + ID_ATTRIBUTE_NAME + '="' + parentId + INDEX_SEPARATOR + index + '"';
				openingTag += ' ' + INDEX_ATTRIBUTE_NAME + '="' + index + '"';
				parentId = parentId + INDEX_SEPARATOR + index;
			} else {
				openingTag += ' ' + ID_ATTRIBUTE_NAME + '="' + index + '"';
				openingTag += ' ' + INDEX_ATTRIBUTE_NAME + '="' + index + '"';
				parentId = '' + index;
			}

			if (ashNodeTree.properties) {
				for (key1 in ashNodeTree.properties) {
					if (ashNodeTree.properties.hasOwnProperty(key1) && key1 !== 'events') {
						if (key1 === 'style') {
							openingTag += ' style="';

							// add style definitions
							for (key2 in ashNodeTree.properties.style) {
								if (ashNodeTree.properties.style.hasOwnProperty(key2)) {
									if (typeof ashNodeTree.properties.style[key2] === 'string') {
										openingTag += key2 + ':' + ashNodeTree.properties.style[key2] + ';';
									}
								}
							}

							openingTag += '"';
						} else if (typeof ashNodeTree.properties[key1] === 'string') {
							if (key1.toLowerCase() === 'classname') {
								openingTag += ' class="' + escapeAttributeValue(ashNodeTree.properties[key1]) + '"';
							} else {
								openingTag += ' ' + key1 + '="' + escapeAttributeValue(ashNodeTree.properties[key1]) + '"';
							}
						} else if (typeof ashNodeTree.properties[key1] === 'boolean') {
							openingTag += ' ' + key1;
						} else if (typeof ashNodeTree.properties[key1] === 'number') {
							openingTag += ' ' + key1 + '="' + ashNodeTree.properties[key1] + '"';
						}
					}
				}
			}

			openingTag += '>';

			if (ashNodeTree.children && ashNodeTree.children.length) {
				for (var i = 0; i < ashNodeTree.children.length; i++) {
					content += walkStringifyAshNodeTree(ashNodeTree.children[i], i, parentId);
				}
			}

			html = openingTag + content + closingTag;
		} else {
			html = ashNodeTree.text;
		}

		return html;
	}

	/**
	 * Outputs string html representation of AshNode tree.
	 *
	 * @param {AshNode} ashNodeTree
	 * @returns {string}
	 */
	function stringifyAshNodeTree(ashNodeTree) {
		return walkStringifyAshNodeTree(ashNodeTree, 0, '');
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isElementAshNode;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ELEMENT_ASH_NODE = _constants2.default.ELEMENT_ASH_NODE;

	/**
	 * Checks if `value` is AshNode with type of `ELEMENT_ASH_NODE`.
	 *
	 * @param {*} value
	 * @returns {boolean}
	 */
	function isElementAshNode(value) {
	  return value && value.type === ELEMENT_ASH_NODE;
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Router = __webpack_require__(58);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Router2.default;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _support = __webpack_require__(2);

	var _support2 = _interopRequireDefault(_support);

	var _Stream = __webpack_require__(20);

	var _Stream2 = _interopRequireDefault(_Stream);

	var _constants = __webpack_require__(3);

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
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _I18n = __webpack_require__(60);

	var _I18n2 = _interopRequireDefault(_I18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _I18n2.default;

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// regex that matches optional type annotations in i18n strings, e.g. i18n `This is a number ${x}:n(2)` formats x as number with two fractional digits
	var TYPE_REGEX = /^:([a-z])(\((.+)\))?/;

	/**
	 * e.g. buildKey(['', ' has ', ':c in the']) == '{0} has {1} in the bank'
	 *
	 * @param {Array} literals
	 * @returns {string}
	 */
	var buildKey = function buildKey(literals) {
		var stripType = function stripType(s) {
			return s.replace(TYPE_REGEX, '');
		};
		var lastPartialKey = stripType(literals[literals.length - 1]);
		var prependPartialKey = function prependPartialKey(memo, curr, i) {
			return stripType(curr) + '{' + i + '}' + memo;
		};

		return literals.slice(0, -1).reduceRight(prependPartialKey, lastPartialKey);
	};

	/**
	 * e.g. formatStrings('{0} {1}!', 'hello', 'world') == 'hello world!'
	 *
	 * @param {[type]} string
	 * @param {...*} values
	 * @returns {[type]}
	 */
	var buildMessage = function buildMessage(string) {
		for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			values[_key - 1] = arguments[_key];
		}

		return string.replace(/{(\d)}/g, function (_, index) {
			return values[Number(index)];
		});
	};

	/**
	 * Localizes general string.
	 *
	 * @param {string} locale
	 * @param {string} string
	 * @returns {string}
	 */
	var localizeString = function localizeString(locale, string) {
		return string.toLocaleString(locale);
	};

	/**
	 * Localizes currency string.
	 *
	 * @param {string} locale
	 * @param {string} string
	 * @param {string} currency
	 * @returns {string}
	 */
	var localizeCurrency = function localizeCurrency(locale, string, currency) {
		return string.toLocaleString(locale, {
			style: 'currency',
			currency: currency
		});
	};

	/**
	 * Localizes number string.
	 *
	 * @param {string} locale
	 * @param {string} string
	 * @param {number} fractionalDigits
	 * @returns {string}
	 */
	var localizeNumber = function localizeNumber(locale, string, fractionalDigits) {
		return string.toLocaleString(locale, {
			minimumFractionDigits: fractionalDigits,
			maximumFractionDigits: fractionalDigits
		});
	};

	/**
	 * Extracts type info from a string.
	 *
	 * @param {string} literal
	 * @returns {Object}
	 */
	var extractTypeInfo = function extractTypeInfo(literal) {
		var match = TYPE_REGEX.exec(literal);

		if (match) {
			return { type: match[1], options: match[3] };
		} else {
			return { type: 's', options: '' };
		}
	};

	/**
	 * Localizes string.
	 *
	 * @param {string} value
	 * @param {I18n} i18n
	 * @param {string} options.type
	 * @param {*} options.options
	 * @returns {[type]}
	 */
	var localize = function localize(value, i18n, _ref) {
		var type = _ref.type;
		var options = _ref.options;

		var localizedValue = undefined;

		if (type === 's') {
			localizedValue = localizeString(i18n.locale, value, options);
		}

		if (type === 'c') {
			localizedValue = localizeCurrency(i18n.locale, value, options || i18n.currency);
		}

		if (type === 'n') {
			localizedValue = localizeNumber(i18n.locale, value, options);
		}

		return localizedValue;
	};

	var i18n = undefined;

	/**
	 * I18n class.
	 * Singleton.
	 */

	var I18n = function () {
		/**
	  * Creates an I18n instance.
	  *
	  * @returns {I18n}
	  */

		function I18n() {
			_classCallCheck(this, I18n);

			i18n = i18n ? i18n : this;

			return i18n;
		}

		/**
	  * Changes localization options.
	  *
	  * @param {Object} options
	  * @param {Object} options.strings
	  * @param {string} options.currency
	  * @param {string} options.locale
	  * @returns {this}
	  */

		_createClass(I18n, [{
			key: 'use',
			value: function use() {
				var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

				var _ref2$strings = _ref2.strings;
				var strings = _ref2$strings === undefined ? {} : _ref2$strings;
				var _ref2$currency = _ref2.currency;
				var currency = _ref2$currency === undefined ? '$' : _ref2$currency;
				var _ref2$locale = _ref2.locale;
				var locale = _ref2$locale === undefined ? 'en-US' : _ref2$locale;

				this.strings = strings;
				this.currency = currency;
				this.locale = locale;

				return this;
			}

			/**
	   * Tag function for template string. Uses i18n instance localization options for translation.
	   *
	   * @param {Array<string>} literals
	   * @param {...*} values
	   * @returns {string}
	   */

		}, {
			key: 'translate',
			value: function translate(literals) {
				var _arguments = arguments,
				    _this = this;

				var translationKey = buildKey(literals);
				var translationString = undefined;

				if (this.strings[translationKey]) {
					translationString = this.strings[translationKey][this.locale];
				}

				if (!translationString) {
					translationString = translationKey;
				}

				if (translationString) {
					var _len2, values, _key2;

					var _ret = function () {
						var typeInfoForValues = literals.slice(1).map(extractTypeInfo);

						for (_len2 = _arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
							values[_key2 - 1] = _arguments[_key2];
						}

						var localizedValues = values.map(function (value, index) {
							return localize(value, _this, typeInfoForValues[index]);
						});

						return {
							v: buildMessage.apply(undefined, [translationString].concat(_toConsumableArray(localizedValues)))
						};
					}();

					if (typeof _ret === "object") return _ret.v;
				}

				return 'Error: translation missing!';
			}
		}]);

		return I18n;
	}();

	exports.default = I18n;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getPrototypeOf = __webpack_require__(62);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(74);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(75);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(79);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(104);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ash = __webpack_require__(1);

	var _ash2 = _interopRequireDefault(_ash);

	var _Router = __webpack_require__(57);

	var _Router2 = _interopRequireDefault(_Router);

	var _App = __webpack_require__(111);

	var _App2 = _interopRequireDefault(_App);

	var _pageStream = __webpack_require__(112);

	var _pageStream2 = _interopRequireDefault(_pageStream);

	var _storyStream = __webpack_require__(115);

	var _storyStream2 = _interopRequireDefault(_storyStream);

	var _languageStream = __webpack_require__(116);

	var _languageStream2 = _interopRequireDefault(_languageStream);

	var _constants = __webpack_require__(114);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EN = _constants2.default.EN;
	var CZ = _constants2.default.CZ;

	var router = new _Router2.default();

	var App = function (_ash$Component) {
		(0, _inherits3.default)(App, _ash$Component);

		function App() {
			var _Object$getPrototypeO;

			var _temp, _this, _ret;

			(0, _classCallCheck3.default)(this, App);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(App)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
				items: [],
				isColored: false
			}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
		}

		(0, _createClass3.default)(App, [{
			key: 'render',
			value: function render() {
				var _pageStream$get = _pageStream2.default.get();

				var page = _pageStream$get.current;

				var _languageStream$get = _languageStream2.default.get();

				var language = _languageStream$get.current;

				var _storyStream$get = _storyStream2.default.get();

				var story = _storyStream$get.current;

				var items = null;

				if (this.state.items.length) {
					items = _ash2.default.createElement(
						'div',
						{ 'class': _App2.default.items, style: { outline: this.state.isColored ? '1px solid red' : '1px solid blue' } },
						this.state.items.map(function (value, index) {
							return _ash2.default.createElement(
								'div',
								null,
								index + ': ' + value
							);
						})
					);
				}

				return _ash2.default.createElement(
					'div',
					{ 'class': _App2.default.root },
					_ash2.default.createElement(
						'p',
						null,
						'Language: ' + language
					),
					_ash2.default.createElement(
						'p',
						null,
						'Page: ' + page
					),
					_ash2.default.createElement(
						'p',
						null,
						'Story: ' + story
					),
					_ash2.default.createElement(
						'p',
						{ events: { click: this.handleClick } },
						_ash2.default.createElement(
							'a',
							{ href: '/' + CZ + '/foo/bar' },
							'CZ foo/bar'
						),
						_ash2.default.createElement(
							'a',
							{ href: '/' + EN + '/foo/bar' },
							'EN foo/bar'
						)
					),
					_ash2.default.createElement(
						'p',
						null,
						_ash2.default.createElement(
							'a',
							{ href: '#', events: { click: this.handleToggleGrid } },
							'Toggle grid'
						),
						_ash2.default.createElement(
							'a',
							{ href: '#', events: { click: this.handleAddEvent } },
							'Add items'
						),
						_ash2.default.createElement(
							'a',
							{ href: '#', events: { click: this.handleChangeColor } },
							'Change color'
						)
					),
					items
				);
			}
		}, {
			key: 'onMount',
			value: function onMount() {
				_pageStream2.default.on(this.update);
				_storyStream2.default.on(this.update);
				_languageStream2.default.on(this.update);
			}
		}, {
			key: 'handleClick',
			value: function handleClick(event) {
				event.preventDefault();

				router.navigate(event.target.getAttribute('href'));
			}
		}, {
			key: 'handleAddEvent',
			value: function handleAddEvent(event) {
				event.preventDefault();

				for (var i = 0; i < 500; i++) {
					this.state.items.push([Math.random() * 1000 >> 0]);
				}

				this.update();
			}
		}, {
			key: 'handleChangeColor',
			value: function handleChangeColor(event) {
				event.preventDefault();

				this.state.isColored = !this.state.isColored;

				this.update();
			}
		}, {
			key: 'handleToggleGrid',
			value: function handleToggleGrid(event) {
				event.preventDefault();

				if (document.querySelector('body').className) {
					document.querySelector('body').className = '';
				} else {
					document.querySelector('body').className = 'hasGrid';
				}

				this.update();
			}
		}]);
		return App;
	}(_ash2.default.Component);

	exports.default = App;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(64);
	module.exports = __webpack_require__(70).Object.getPrototypeOf;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(65);

	__webpack_require__(67)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(66);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(68)
	  , core    = __webpack_require__(70)
	  , fails   = __webpack_require__(73);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(69)
	  , core      = __webpack_require__(70)
	  , ctx       = __webpack_require__(71)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 69 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 70 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(72);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(76);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(78);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(80);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _symbol = __webpack_require__(81);

	var _symbol2 = _interopRequireDefault(_symbol);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _typeof(obj) { return obj && typeof _Symbol !== "undefined" && obj.constructor === _Symbol ? "symbol" : typeof obj; }

	exports.default = function (obj) {
	  return obj && typeof _symbol2.default !== "undefined" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	__webpack_require__(103);
	module.exports = __webpack_require__(70).Symbol;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(78)
	  , global         = __webpack_require__(69)
	  , has            = __webpack_require__(84)
	  , DESCRIPTORS    = __webpack_require__(85)
	  , $export        = __webpack_require__(68)
	  , redefine       = __webpack_require__(86)
	  , $fails         = __webpack_require__(73)
	  , shared         = __webpack_require__(89)
	  , setToStringTag = __webpack_require__(90)
	  , uid            = __webpack_require__(92)
	  , wks            = __webpack_require__(91)
	  , keyOf          = __webpack_require__(93)
	  , $names         = __webpack_require__(97)
	  , enumKeys       = __webpack_require__(98)
	  , isArray        = __webpack_require__(99)
	  , anObject       = __webpack_require__(100)
	  , toIObject      = __webpack_require__(94)
	  , createDesc     = __webpack_require__(88)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(102)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 84 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(73)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(87);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(78)
	  , createDesc = __webpack_require__(88);
	module.exports = __webpack_require__(85) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(69)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(78).setDesc
	  , has = __webpack_require__(84)
	  , TAG = __webpack_require__(91)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(89)('wks')
	  , uid    = __webpack_require__(92)
	  , Symbol = __webpack_require__(69).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 92 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(78)
	  , toIObject = __webpack_require__(94);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(95)
	  , defined = __webpack_require__(66);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(96);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(94)
	  , getNames  = __webpack_require__(78).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(78);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(96);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(101);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 103 */
/***/ function(module, exports) {

	

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(105);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(109);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(80);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107);
	module.exports = __webpack_require__(70).Object.setPrototypeOf;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(68);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(108).set});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(78).getDesc
	  , isObject = __webpack_require__(101)
	  , anObject = __webpack_require__(100);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(71)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(78);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 111 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"App__root","items":"App__items"};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ash = __webpack_require__(1);

	var _ash2 = _interopRequireDefault(_ash);

	var _routeStream = __webpack_require__(113);

	var _routeStream2 = _interopRequireDefault(_routeStream);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pageStream = new _ash2.default.Stream({
		previous: null,
		current: null
	});

	pageStream.combine(function (dependency, self) {
		var value = self.get();

		var _dependency$get = dependency.get();

		var page = _dependency$get.page;

		if (page !== value.current) {
			var newValue = {
				current: page,
				previous: value.current
			};

			self.push(newValue);
		}
	}, _routeStream2.default);

	exports.default = pageStream;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Router = __webpack_require__(57);

	var _Router2 = _interopRequireDefault(_Router);

	var _constants = __webpack_require__(114);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EN = _constants2.default.EN;
	var CZ = _constants2.default.CZ;

	var router = new _Router2.default();
	var routeStream = router.add('(:language)(/:page)(/:story)(/)').map(function (value) {
		var language = value.language;
		var page = value.page;
		var story = value.story;

		if (language !== CZ && language !== EN) {
			story = page;
			page = language;
			language = null;
		}

		return { page: page, language: language, story: story };
	});

	exports.default = routeStream;

/***/ },
/* 114 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var constants = {
		EN: 'en-US',
		CZ: 'cs-CZ'
	};

	exports.default = constants;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ash = __webpack_require__(1);

	var _ash2 = _interopRequireDefault(_ash);

	var _routeStream = __webpack_require__(113);

	var _routeStream2 = _interopRequireDefault(_routeStream);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var storyStream = new _ash2.default.Stream({
		previous: null,
		current: null
	});

	storyStream.combine(function (dependency, self) {
		var value = self.get();

		var _dependency$get = dependency.get();

		var story = _dependency$get.story;

		if (story !== value.current) {
			var newValue = {
				current: story,
				previous: value.current
			};

			self.push(newValue);
		}
	}, _routeStream2.default);

	exports.default = storyStream;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ash = __webpack_require__(1);

	var _ash2 = _interopRequireDefault(_ash);

	var _I18n = __webpack_require__(59);

	var _I18n2 = _interopRequireDefault(_I18n);

	var _routeStream = __webpack_require__(113);

	var _routeStream2 = _interopRequireDefault(_routeStream);

	var _constants = __webpack_require__(114);

	var _constants2 = _interopRequireDefault(_constants);

	var _i18nStrings = __webpack_require__(117);

	var _i18nStrings2 = _interopRequireDefault(_i18nStrings);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EN = _constants2.default.EN;
	var CZ = _constants2.default.CZ;

	var i18n = new _I18n2.default();
	var languageStram = new _ash2.default.Stream({
		previous: null,
		current: EN
	});

	languageStram.combine(function (dependency, self) {
		var value = self.get();

		var _dependency$get = dependency.get();

		var language = _dependency$get.language;

		if (language !== value.current && (language === CZ || language === EN)) {
			var newValue = {
				current: language,
				previous: value.current
			};

			if (language === CZ) {
				i18n.use({
					strings: _i18nStrings2.default,
					locale: CZ,
					currency: 'CZK'
				});
			} else if (language === EN) {
				i18n.use({
					strings: _i18nStrings2.default,
					locale: EN,
					currency: '$'
				});
			}

			self.push(newValue);
		}
	}, _routeStream2.default);

	exports.default = languageStram;

/***/ },
/* 117 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var i18nStrings = {
		// Menu
		'What we do': {
			'cs-CZ': 'Co děláme'
		},
		'Pricing': {
			'cs-CZ': 'Cena'
		},
		'Blog': {
			'cs-CZ': 'Blog'
		},
		'About us': {
			'cs-CZ': 'O nás'
		},
		'Koi': {
			'cs-CZ': 'Koi'
		},
		'Open': {
			'cs-CZ': 'Otevřít'
		},
		'Close': {
			'cs-CZ': 'Zavřít'
		},

		// Footer
		'Privacy policy': {
			'cs-CZ': 'Zásady ochrany soukromí'
		},
		'Terms of use': {
			'cs-CZ': 'Podmínky použití'
		},

		// AboutUs
		/*'About us': {},*/
		'About us - about Eva': {
			'cs-CZ': 'TODO',
			'en-US': 'Eva is psychologist, sociologist, HR professional and lecturer. Her domain is psychodiagnostics, training and development and employee surveys. She is interested in behavioral economics and coaching.'
		},
		'About us - about Jakub': {
			'cs-CZ': 'Jakub is psychologist, programmer and writer',
			'en-US': 'TODO'
		},
		'About us - about Datanautika': {
			'cs-CZ': 'TODO',
			'en-US': 'TODO'
		},

		// Blog
		'Read the rest': {
			'cs-CZ': 'Číst dále'
		},
		'Less than one minute reading time': {
			'cs-CZ': 'Přečteno za méně než jednu minutu'
		},
		'{0} minutes reading time': {
			'cs-CZ': 'Přečteno za {0} min.'
		},

		// Header
		'We\'ll take care of your data analyses': {
			'cs-CZ': 'Postaráme se o vaše analýzy dat'
		},
		'Data analysis with touch of psychology': {},

		// NotFound
		'This is not the page you are looking for. Move ': {
			'cs-CZ': 'Toto není stránka, kterou hledáte. '
		},
		'along': {
			'cs-CZ': 'Pokračujte'
		},

		// Pricing
		// 'Pricing': {}
		'Pricing - part 1': {
			'cs-CZ': 'Naše práce je různorodá, stejně jako její rozsah. Bez toho, abychom věděli více o vašich požadavcích a potřebách, nemůžeme být dostatečně konkrétní.',
			'en-US': 'Prices of our individual projects differ in accordance with their complexity. Because we are offering wide range of services, the price can include much more than data analysis and visualization.'
		},
		'Pricing - part 2': {
			'cs-CZ': 'Pokud tedy máte zájem o předběžné ocenění projektu šitého na míru přímo vám, ozvěte se nám. Rádi vám pomůžeme udělat si představu o tom, co společně zvládneme a kolik to bude stát.',
			'en-US': 'Let us know your idea and we will prepare offer tailored for you specifically!'
		},

		// SetUpAMeeting
		'Set up a meeting': {
			'cs-CZ': 'Domluvit si schůzku'
		},
		'Set up a meeting - text 1': {
			'cs-CZ': 'TODO: chcete něco, tak nám napište',
			'en-US': 'TODO'
		},
		'What do you want to talk about?': {
			'cs-CZ': 'O čem s námi chcete hovořit?'
		},
		'Your email': {
			'cs-CZ': 'Váš email'
		},
		'Send': {
			'cs-CZ': 'Odeslat'
		},
		'You know what email address looks like, right?': {
			'cs-CZ': 'Toto není platá emailová adresa!'
		},
		'Tell us more details': {
			'cs-CZ': 'Napište nám více podrobností'
		},
		'You must type something!': {
			'cs-CZ': 'Musíte něco napsat!'
		},
		'We were unable to deliver your message.': {
			'cs-CZ': 'Vaši zprávu se nepodařilo doručit.'
		},
		'Please try to resend it.': {
			'cs-CZ': 'Zkuste ji poslat znovu.'
		},
		'Message was successfully sent!': {
			'cs-CZ': 'Zpráva byla úspešně odeslána!'
		},
		'We\'ll keep in touch.': {
			'cs-CZ': 'Brzy se vám ozveme.'
		},
		'Message is being sent...': {
			'cs-CZ': 'Zpráva se odesílá...'
		},
		'Please wait for confirmation.': {
			'cs-CZ': 'Počkejte na potvrzení.'
		},

		// WhatWeDo
		'What we do - manifesto part 1': {
			'cs-CZ': 'Podstata věcí kolem nás se nemění. Můžeme o nich však sbírat čím dál tím více dat. Díky digitalizaci je sbírání dat mnohem snadnější. Větší množství dat však automaticky neznamená, že máme k dispozici větší množství užitečných dat. Schopnost identifikovat klíčové informace a dát je do správných souvislostí je proto důležitější než kdy dřív a přináší s sebou významnou konkurenční výhodu.',
			'en-US': 'The very nature of things doesn’t change. We can only gather more data about it. Digitization makes this very easy, but exponential growth in information doesn’t mean its usefulness is increasing  at the same rate. Ability to interpret and utilize data is therefore an important competitive advantage.'
		},
		'What we do - manifesto part 2': {
			'cs-CZ': 'S tím vám rádi pomůžeme.',
			'en-US': 'We can help you with that.'
		},
		'What we do - manifesto part 3': {
			'cs-CZ': 'Odhalíme příběh ve vašich datech.',
			'en-US': 'We will tell the story of your data.'
		},
		// 'Set up a meeting': {},
		'What we do - manifesto part 4': {
			'cs-CZ': 'Jsme psychologové. Zabýváme se proto především daty o lidech, jejich výkonech a schopnostech. Data pro nás nejsou jen čísla. Vždy bereme v úvahu naše znalosti a zkušenosti o lidském chování a prožívání.',
			'en-US': 'As psychologists, we specialize in analysing data about people, such as performance or abilities. But we don’t just crunch the numbers; we consider our knowledge about human behavior and experience.'
		},
		'What we do - manifesto part 5': {
			'cs-CZ': 'Uvědomujeme si také, že záleží i na tom, co nelze snadno vyjádřit v číslech.',
			'en-US': 'We know that if something cannot be easily quantified, it still matters.'
		},
		'Our process': {
			'cs-CZ': 'Náš proces'
		},
		'Collecting': {
			'cs-CZ': 'Sběr'
		},
		'What we do - process': {
			'cs-CZ': 'Můžeme použít data, která máte nasbíraná. Pokud zatím žádná nemáte, pomůžeme vám i s tím.',
			'en-US': 'We can use your data. If you don’t have any, we will figure out how to get them.'
		},
		'Structuring': {
			'cs-CZ': 'Strukturování'
		},
		'What we do - structuring': {
			'cs-CZ': 'Uděláme ve vašich datech pořádek a identifikujeme podstatné prvky.',
			'en-US': 'We will clean your data and identify its important parts.'
		},
		'Analysing': {
			'cs-CZ': 'Analýza'
		},
		'What we do - analysing': {
			'cs-CZ': 'Pro analýzu dat používáme především bayesovské modely, které jsou z hlediska interpretace výsledků uživatelsky přívětivější než doposud běžně používané postupy.',
			'en-US': 'We will use bayesian models as our main tool.'
		},
		'Visualizing': {
			'cs-CZ': 'Vizualizace'
		},
		'What we do - visualizing': {
			'cs-CZ': 'Vytvoříme krásné a srozumitelné výstupy z analýzy dat.',
			'en-US': 'We will create beautiful and comprehensive reports.'
		},
		'Explaining': {
			'cs-CZ': 'Vysvětlení'
		},
		'What we do - explaining': {
			'cs-CZ': 'Naším cílem není pouze predikce, ale komplexní porozumění situaci.',
			'en-US': 'We won\'t just predict, we will make sense of data.'
		},
		'Case studies': {
			'cs-CZ': 'Naše práce'
		},
		'What we do - case studies': {
			'cs-CZ': 'TODO',
			'en-US': 'TODO'
		},
		'Our team': {
			'cs-CZ': 'Náš tým'
		},
		'Co-founder - male': {
			'cs-CZ': 'Spoluzakladatel',
			'en-US': 'Co-founder'
		},
		'Co-founder - female': {
			'cs-CZ': 'Spoluzakladatelka',
			'en-US': 'Co-founder'
		}
	};

	exports.default = i18nStrings;

/***/ }
/******/ ]);