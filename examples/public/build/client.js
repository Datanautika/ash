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

	var _Router = __webpack_require__(31);

	var _Router2 = _interopRequireDefault(_Router);

	var _I18n = __webpack_require__(77);

	var _I18n2 = _interopRequireDefault(_I18n);

	var _jquery = __webpack_require__(79);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _App = __webpack_require__(80);

	var _App2 = _interopRequireDefault(_App);

	var _i18nStrings = __webpack_require__(169);

	var _i18nStrings2 = _interopRequireDefault(_i18nStrings);

	var _constants = __webpack_require__(166);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	global.ash = _ash2.default;
	global.$ = _jquery2.default;

	var EN = _constants2.default.EN;
	var G_KEY_CODE = 71;

	// grid toggle
	(0, _jquery2.default)(global.document).on('keydown', function (event) {
		var tagName = event.target.tagName.toLowerCase();

		if (event.keyCode === G_KEY_CODE && event.target && tagName !== 'textarea' && tagName !== 'input') {
			(0, _jquery2.default)('body').toggleClass('hasGrid');
		}
	});

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

	var _ui = __webpack_require__(4);

	var _ui2 = _interopRequireDefault(_ui);

	var _Component = __webpack_require__(24);

	var _Component2 = _interopRequireDefault(_Component);

	var _AshElement = __webpack_require__(41);

	var _AshElement2 = _interopRequireDefault(_AshElement);

	var _ViewStream = __webpack_require__(45);

	var _ViewStream2 = _interopRequireDefault(_ViewStream);

	var _Stream = __webpack_require__(29);

	var _Stream2 = _interopRequireDefault(_Stream);

	var _isAncestor = __webpack_require__(28);

	var _isAncestor2 = _interopRequireDefault(_isAncestor);

	var _flattenTree = __webpack_require__(53);

	var _flattenTree2 = _interopRequireDefault(_flattenTree);

	var _renderViewStream = __webpack_require__(54);

	var _renderViewStream2 = _interopRequireDefault(_renderViewStream);

	var _stringifyViewStream = __webpack_require__(74);

	var _stringifyViewStream2 = _interopRequireDefault(_stringifyViewStream);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Ash object.
	 *
	 * @version 0.5.1
	 */
	var ash = {
		/**
	  * Version number.
	  *
	  * @type {string}
	  */
		VERSION: '0.5.1',

		/**
	  * Support object.
	  *
	  * @link  {support}
	  */
		support: _support2.default,

		/**
	  * UI object.
	  *
	  * @link  {ui}
	  */
		ui: _ui2.default,

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _shared = __webpack_require__(5);

	var _shared2 = _interopRequireDefault(_shared);

	var _config = __webpack_require__(6);

	var _Button = __webpack_require__(23);

	var _Button2 = _interopRequireDefault(_Button);

	var _ButtonGroup = __webpack_require__(33);

	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

	var _Input = __webpack_require__(34);

	var _Input2 = _interopRequireDefault(_Input);

	var _Textarea = __webpack_require__(36);

	var _Textarea2 = _interopRequireDefault(_Textarea);

	var _Form = __webpack_require__(38);

	var _Form2 = _interopRequireDefault(_Form);

	var _FormRow = __webpack_require__(39);

	var _FormRow2 = _interopRequireDefault(_FormRow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ui = {
		/**
	  * Class names for internal CSS.
	  *
	  * @type {object}
	  */
		styles: _shared2.default,

		get config() {
			return (0, _config.getConfig)();
		},

		set config(configObject) {
			(0, _config.setConfig)(configObject);
		},

		Button: _Button2.default,
		ButtonGroup: _ButtonGroup2.default,
		Form: _Form2.default,
		FormRow: _FormRow2.default,
		Input: _Input2.default,
		Textarea: _Textarea2.default
	};

	exports.default = ui;

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"storyTitleHeading":"shared__storyTitleHeading","storyLevel1Heading":"shared__storyLevel1Heading","storyLevel2Heading":"shared__storyLevel2Heading","storyLevel3Heading":"shared__storyLevel3Heading","storyLevel4Heading":"shared__storyLevel4Heading","sectionTitleHeading":"shared__sectionTitleHeading","sectionLevel1Heading":"shared__sectionLevel1Heading","sectionLevel2Heading":"shared__sectionLevel2Heading","sectionLevel3Heading":"shared__sectionLevel3Heading","sectionLevel4Heading":"shared__sectionLevel4Heading","author":"shared__author","list":"shared__list","orderedList":"shared__orderedList","table":"shared__table","tableHead":"shared__tableHead","tableCell":"shared__tableCell","tableBody":"shared__tableBody","image":"shared__image"};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.setConfig = setConfig;
	exports.getConfig = getConfig;

	var _defaults = __webpack_require__(7);

	var _defaults2 = _interopRequireDefault(_defaults);

	var _assign = __webpack_require__(22);

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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _breakpoints = __webpack_require__(8);

	var _breakpoints2 = _interopRequireDefault(_breakpoints);

	var _grid = __webpack_require__(9);

	var _grid2 = _interopRequireDefault(_grid);

	var _colors = __webpack_require__(10);

	var _colors2 = _interopRequireDefault(_colors);

	var _durations = __webpack_require__(11);

	var _durations2 = _interopRequireDefault(_durations);

	var _typographicScale = __webpack_require__(12);

	var _typographicScale2 = _interopRequireDefault(_typographicScale);

	var _text = __webpack_require__(13);

	var _text2 = _interopRequireDefault(_text);

	var _heading = __webpack_require__(14);

	var _heading2 = _interopRequireDefault(_heading);

	var _link = __webpack_require__(15);

	var _link2 = _interopRequireDefault(_link);

	var _button = __webpack_require__(16);

	var _button2 = _interopRequireDefault(_button);

	var _textInput = __webpack_require__(21);

	var _textInput2 = _interopRequireDefault(_textInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaults = {
		breakpoints: _breakpoints2.default,
		grid: _grid2.default,
		colors: _colors2.default,
		durations: _durations2.default,
		typographicScale: _typographicScale2.default,
		text: _text2.default,
		heading: _heading2.default,
		link: _link2.default,
		button: _button2.default,
		textInput: _textInput2.default
	};

	exports.default = defaults;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var breakpoints = {
		tinyMenu: {
			start: '1px',
			end: '640px'
		},
		compactMenu: {
			start: '641px',
			end: '1024px'
		},
		compactPage: {
			start: '1px',
			end: '480px'
		},
		singleColumnPage: {
			start: '481px',
			middle: '800px',
			end: '1280px'
		}
	};

	exports.default = breakpoints;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var grid = {
		baselineHeight: 28,
		columns: 12,
		baselineToGutterRatio: 2
	};

	grid.gutterWidth = grid.baselineToGutterRatio * grid.baselineHeight;

	exports.default = grid;

/***/ },
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _colors = __webpack_require__(10);

	var _colors2 = _interopRequireDefault(_colors);

	var _typographicScale = __webpack_require__(12);

	var _typographicScale2 = _interopRequireDefault(_typographicScale);

	var _grid = __webpack_require__(9);

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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _colors = __webpack_require__(10);

	var _colors2 = _interopRequireDefault(_colors);

	var _typographicScale = __webpack_require__(12);

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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _durations = __webpack_require__(11);

	var _durations2 = _interopRequireDefault(_durations);

	var _colors = __webpack_require__(10);

	var _colors2 = _interopRequireDefault(_colors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function sec(value) {
		return value + ' s';
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
			color: _colors2.default.text,
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _colors = __webpack_require__(10);

	var _colors2 = _interopRequireDefault(_colors);

	var _text = __webpack_require__(13);

	var _text2 = _interopRequireDefault(_text);

	var _typographicScale = __webpack_require__(12);

	var _typographicScale2 = _interopRequireDefault(_typographicScale);

	var _hexToRGBAString = __webpack_require__(17);

	var _hexToRGBAString2 = _interopRequireDefault(_hexToRGBAString);

	var _tintHex = __webpack_require__(19);

	var _tintHex2 = _interopRequireDefault(_tintHex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var button = {};

	button.default = {
		depth: '0.125bh',
		color: _colors2.default.secondary1.shade[3],
		backgroundColor: _colors2.default.secondary1.base,
		sideColor: _colors2.default.secondary1.shade[1],
		borderColor: 'transparent',
		borderWidth: 0,
		borderRadius: '0.125bh',
		boxShadow: '0 0.125bh 0.125bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.4),
		fontSize: _text2.default.fontSize,

		badge: {
			color: _colors2.default.background,
			backgroundColor: _colors2.default.primary1.base,
			borderRadius: '1bh',
			fontSize: _typographicScale2.default[4]
		}
	};

	button.default.focused = {
		depth: '0.125bh',
		color: _colors2.default.secondary1.shade[3],
		backgroundColor: _colors2.default.secondary1.tint[1],
		sideColor: _colors2.default.secondary1.shade[1],
		borderColor: 'transparent',
		boxShadow: '0 0.125bh 0.125bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.4)
	};

	button.default.hovered = {
		depth: '0.125bh',
		color: _colors2.default.secondary1.shade[3],
		backgroundColor: (0, _tintHex2.default)(_colors2.default.secondary1.base, 0.1),
		sideColor: (0, _tintHex2.default)(_colors2.default.secondary1.shade[1], 0.1),
		borderColor: 'transparent',
		boxShadow: '0 0.125bh 0.125bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.4)
	};

	button.default.pressed = {
		depth: '0.0625bh',
		color: _colors2.default.secondary1.shade[3],
		backgroundColor: button.default.hovered.backgroundColor,
		sideColor: button.default.hovered.sideColor,
		borderColor: 'transparent',
		boxShadow: '0 0.0625bh 0.0625bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.3)
	};

	button.default.disabled = {
		depth: '0.125bh',
		color: _colors2.default.neutral.tint[3],
		backgroundColor: _colors2.default.neutral.tint[5],
		sideColor: _colors2.default.neutral.tint[3],
		borderColor: 'transparent',
		boxShadow: '0 0.125bh 0.125bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.4),

		badge: {
			color: _colors2.default.background,
			backgroundColor: _colors2.default.neutral.tint[3]
		}
	};

	button.flat = {
		depth: '0',
		translateY: '0.0625bh',
		color: _colors2.default.secondary1.shade[3],
		backgroundColor: _colors2.default.background,
		sideColor: 'transparent',
		borderColor: _colors2.default.secondary1.base,
		borderWidth: 2,
		borderRadius: '0.125bh',
		boxShadow: '0 0.0625bh 0.0625bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.15),
		fontSize: _text2.default.fontSize,

		badge: {
			color: _colors2.default.background,
			backgroundColor: _colors2.default.primary1.base,
			borderRadius: '1bh',
			fontSize: _typographicScale2.default[4]
		}
	};

	button.flat.focused = {
		depth: button.flat.depth,
		translateY: button.flat.translateY,
		color: button.flat.color,
		backgroundColor: button.flat.backgroundColor,
		sideColor: button.flat.sideColor,
		borderColor: button.flat.borderColor,
		borderWidth: button.flat.borderWidth,
		borderRadius: button.flat.borderRadius,
		boxShadow: button.flat.boxShadow,
		fontSize: button.flat.fontSize
	};

	button.flat.hovered = {
		depth: button.flat.depth,
		translateY: button.flat.translateY,
		color: button.flat.color,
		backgroundColor: button.flat.backgroundColor,
		sideColor: button.flat.sideColor,
		borderColor: (0, _tintHex2.default)(button.flat.borderColor, 0.1),
		borderWidth: button.flat.borderWidth,
		borderRadius: button.flat.borderRadius,
		boxShadow: button.flat.boxShadow,
		fontSize: button.flat.fontSize
	};

	button.flat.pressed = {
		depth: button.flat.depth,
		translateY: '0.125bh',
		color: button.flat.color,
		backgroundColor: button.flat.backgroundColor,
		sideColor: button.flat.sideColor,
		borderColor: button.flat.hovered.borderColor,
		borderWidth: button.flat.borderWidth,
		borderRadius: button.flat.borderRadius,
		boxShadow: '0 0.03125bh 0.03125bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.15),
		fontSize: button.flat.fontSize
	};

	button.flat.disabled = {
		depth: button.flat.depth,
		translateY: button.flat.translateY,
		color: _colors2.default.neutral.tint[3],
		backgroundColor: button.flat.backgroundColor,
		sideColor: button.flat.sideColor,
		borderColor: _colors2.default.neutral.tint[5],
		borderWidth: button.flat.borderWidth,
		borderRadius: button.flat.borderRadius,
		boxShadow: '0 0.0625bh 0.0625bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.1),
		fontSize: button.flat.fontSize
	};

	button.invisible = {
		depth: '0',
		translateY: '0.0625bh',
		color: _colors2.default.secondary1.shade[3],
		backgroundColor: _colors2.default.background,
		sideColor: 'transparent',
		borderColor: 'transparent',
		borderWidth: 2,
		borderRadius: '0.125bh',
		boxShadow: '0 0.0625bh 0.0625bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0),
		fontSize: _text2.default.fontSize,

		badge: {
			color: _colors2.default.background,
			backgroundColor: _colors2.default.primary1.base,
			borderRadius: '1bh',
			fontSize: _typographicScale2.default[4]
		}
	};

	button.invisible.focused = {
		depth: button.invisible.depth,
		translateY: button.invisible.translateY,
		color: button.invisible.color,
		backgroundColor: button.invisible.backgroundColor,
		sideColor: button.invisible.sideColor,
		borderColor: button.invisible.borderColor,
		borderWidth: button.invisible.borderWidth,
		borderRadius: button.invisible.borderRadius,
		boxShadow: button.invisible.boxShadow,
		fontSize: button.invisible.fontSize
	};

	button.invisible.hovered = {
		depth: button.invisible.depth,
		translateY: button.invisible.translateY,
		color: button.invisible.color,
		backgroundColor: button.invisible.backgroundColor,
		sideColor: button.invisible.sideColor,
		borderColor: _colors2.default.secondary1.base,
		borderWidth: button.invisible.borderWidth,
		borderRadius: button.invisible.borderRadius,
		boxShadow: '0 0.0625bh 0.0625bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.15),
		fontSize: button.invisible.fontSize
	};

	button.invisible.pressed = {
		depth: button.invisible.depth,
		translateY: '0.125bh',
		color: button.invisible.color,
		backgroundColor: button.invisible.backgroundColor,
		sideColor: button.invisible.sideColor,
		borderColor: _colors2.default.secondary1.base,
		borderWidth: button.invisible.borderWidth,
		borderRadius: button.invisible.borderRadius,
		boxShadow: '0 0.03125bh 0.03125bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.15),
		fontSize: button.invisible.fontSize
	};

	button.invisible.disabled = {
		depth: button.invisible.depth,
		translateY: button.invisible.translateY,
		color: _colors2.default.neutral.tint[3],
		backgroundColor: button.invisible.backgroundColor,
		sideColor: button.invisible.sideColor,
		borderColor: _colors2.default.neutral.tint[5],
		borderWidth: button.invisible.borderWidth,
		borderRadius: button.invisible.borderRadius,
		boxShadow: '0 0.0625bh 0.0625bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0),
		fontSize: button.invisible.fontSize
	};

	exports.default = button;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = hexToRGBAString;

	var _hexToRGB = __webpack_require__(18);

	var _hexToRGB2 = _interopRequireDefault(_hexToRGB);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function hexToRGBAString(value) {
		var transparency = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

		var rgbValue = (0, _hexToRGB2.default)(value);

		return 'rgba(' + rgbValue[0] + ', ' + rgbValue[1] + ', ' + rgbValue[2] + ', ' + transparency + ')';
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = hexToRGB;
	function hexToRGB(value) {
		var hexString = undefined;

		if (value.length === 4) {
			hexString = '#' + value[1] + value[1] + value[2] + value[2] + value[3] + value[3];
		} else {
			hexString = '' + value;
		}

		var hex = parseInt(hexString.substring(1), 16);

		return [(hex & 0xff0000) >> 16, (hex & 0x00ff00) >> 8, hex & 0x0000ff];
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = tintHex;

	var _hexToRGB = __webpack_require__(18);

	var _hexToRGB2 = _interopRequireDefault(_hexToRGB);

	var _rgbToHex = __webpack_require__(20);

	var _rgbToHex2 = _interopRequireDefault(_rgbToHex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function tintHex(value) {
		var factor = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

		var rgbValue = (0, _hexToRGB2.default)(value);

		rgbValue[0] += (255 - rgbValue[0]) * factor;
		rgbValue[1] += (255 - rgbValue[1]) * factor;
		rgbValue[2] += (255 - rgbValue[2]) * factor;

		return (0, _rgbToHex2.default)(rgbValue);
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = rgbToHex;
	function rgbToHex(value) {
		return '#' + ((1 << 24) + (Math.round(value[0]) << 16) + (Math.round(value[1]) << 8) + Math.round(value[2])).toString(16).slice(1);
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _colors = __webpack_require__(10);

	var _colors2 = _interopRequireDefault(_colors);

	var _text = __webpack_require__(13);

	var _text2 = _interopRequireDefault(_text);

	var _hexToRGBAString = __webpack_require__(17);

	var _hexToRGBAString2 = _interopRequireDefault(_hexToRGBAString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var textInput = {};

	textInput.default = {
		color: _colors2.default.text,
		backgroundColor: _colors2.default.background,
		borderColor: _colors2.default.neutral.tint[4],
		borderWidth: 2,
		borderRadius: '0.125bh',
		boxShadow: 'inset 0 0.0625bh 0.0625bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.15),
		fontSize: _text2.default.fontSize,

		placeholder: {
			color: _colors2.default.neutral.tint[3]
		}
	};

	textInput.default.invalid = {
		color: textInput.default.color,
		backgroundColor: textInput.default.backgroundColor,
		borderColor: _colors2.default.negative.base,
		boxShadow: textInput.default.boxShadow,

		placeholder: {
			color: textInput.default.placeholder.color
		}
	};

	textInput.default.focused = {
		color: textInput.default.color,
		backgroundColor: textInput.default.backgroundColor,
		borderColor: _colors2.default.secondary1.base,
		boxShadow: textInput.default.boxShadow,

		placeholder: {
			color: textInput.default.placeholder.color
		}
	};

	textInput.default.hovered = {
		color: textInput.default.color,
		backgroundColor: textInput.default.backgroundColor,
		borderColor: _colors2.default.secondary1.base,
		boxShadow: textInput.default.boxShadow,

		placeholder: {
			color: textInput.default.placeholder.color
		}
	};

	textInput.default.disabled = {
		color: _colors2.default.neutral.tint[4],
		backgroundColor: textInput.default.backgroundColor,
		borderColor: _colors2.default.neutral.tint[6],
		boxShadow: 'inset 0 0.0625bh 0.0625bh ' + (0, _hexToRGBAString2.default)(_colors2.default.neutral.base, 0.1),

		placeholder: {
			color: _colors2.default.neutral.tint[7]
		}
	};

	exports.default = textInput;

/***/ },
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(24);

	var _Component3 = _interopRequireDefault(_Component2);

	var _Button = __webpack_require__(30);

	var _Button2 = _interopRequireDefault(_Button);

	var _Router = __webpack_require__(31);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MAILTO_REGEX = /^mailto:/;
	var ROUTE_LINK_REGEX = /^\//;

	var router = new _Router2.default();

	var Button = function (_Component) {
		_inherits(Button, _Component);

		function Button() {
			_classCallCheck(this, Button);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
		}

		_createClass(Button, [{
			key: 'shouldUpdate',
			value: function shouldUpdate(newProps) {
				return newProps.id !== this.props.id || newProps.name !== this.props.name || newProps.type !== this.props.type || newProps.link !== this.props.link || newProps.label !== this.props.label || newProps.badge !== this.props.badge || newProps.isLarge !== this.props.isLarge || newProps.isDisabled !== this.props.isDisabled || newProps.isSubmit !== this.props.isSubmit || newProps.useRouter !== this.props.useRouter || newProps.handleClick !== this.props.handleClick;
			}
		}, {
			key: 'render',
			value: function render() {
				var buttonClass = _Button2.default.default;

				if (this.props.type === 'flat') {
					buttonClass = _Button2.default.flat;
				} else if (this.props.type === 'invisible') {
					buttonClass = _Button2.default.invisible;
				}

				buttonClass += this.props.isLarge ? ' isLarge' : '';

				var buttonElement = null;

				if (this.props.isSubmit) {
					buttonElement = ash.createElement('input', {
						'class': buttonClass + (this.props.isDisabled ? ' isDisabled' : ' isEnabled'),
						type: 'submit',
						name: this.props.name || this.props.id || '',
						id: this.props.id || this.props.name || '',
						value: this.props.label || '',
						events: {
							click: this.handleClick
						}
					});
				} else if (this.props.link) {
					buttonElement = ash.createElement(
						'a',
						{
							'class': buttonClass + (this.props.isDisabled ? ' isDisabled' : ' isEnabled'),
							href: this.props.link ? this.props.link : '#',
							events: {
								click: this.handleClick
							} },
						this.props.label || null,
						this.props.badge ? ash.createElement(
							'span',
							{ 'class': _Button2.default.badge },
							this.props.badge
						) : null
					);
				} else {
					buttonElement = ash.createElement(
						'button',
						{
							'class': buttonClass + (this.props.isDisabled ? ' isDisabled' : ' isEnabled'),
							events: {
								click: this.handleClick
							} },
						this.props.label || null,
						this.props.badge ? ash.createElement(
							'span',
							{ 'class': _Button2.default.badge },
							this.props.badge
						) : null
					);
				}

				return buttonElement;
			}
		}, {
			key: 'handleClick',
			value: function handleClick(event) {
				if (!(this.props.link || MAILTO_REGEX.test(this.props.link))) {
					event.preventDefault();

					if (this.props.handleClick) {
						this.props.handleClick();
					}
				} else if (ROUTE_LINK_REGEX.test(this.props.link) && this.props.useRouter !== false) {
					event.preventDefault();

					router.navigate(this.props.link);
				}
			}
		}]);

		return Button;
	}(_Component3.default);

	exports.default = Button;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isAshNodeAshElement = __webpack_require__(25);

	var _isAshNodeAshElement2 = _interopRequireDefault(_isAshNodeAshElement);

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	var _assign = __webpack_require__(22);

	var _assign2 = _interopRequireDefault(_assign);

	var _findNode = __webpack_require__(26);

	var _findNode2 = _interopRequireDefault(_findNode);

	var _isFunction = __webpack_require__(27);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _isAncestor = __webpack_require__(28);

	var _isAncestor2 = _interopRequireDefault(_isAncestor);

	var _Stream = __webpack_require__(29);

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

		function Component(props, children) {
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

			if (children) {
				this.children = children;
			}

			// references to the component streams
			Object.getOwnPropertyNames(this.constructor).filter(function (value) {
				return value !== 'caller' && value !== 'callee' && value !== 'arguments' && value !== 'children';
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
/* 25 */
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
/* 26 */
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

		for (var _i = 0, _length = node.childNodes.length; _i < _length; _i++) {
			if (node.childNodes[_i].nodeType === 1 && node.childNodes[_i][ID_ATTRIBUTE_NAME] === nodeId) {
				return node.childNodes[_i];
			} else if (node.childNodes[_i].nodeType === 3 && _i === ashNodeIndices[ashNodeIndices.length - 1]) {
				return node.childNodes[_i];
			}
		}

		return false;
	}

/***/ },
/* 27 */
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = isAncestor;

	var _isFunction = __webpack_require__(27);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var functionPrototype = Object.getPrototypeOf(Function);
	var objectPrototype = Object.getPrototypeOf(Object);

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

		if (ancestor === objectPrototype || ancestor === value) {
			return true;
		}

		var prototype = value;
		var lastPrototype = undefined;

		while (prototype !== ancestor) {
			lastPrototype = prototype;
			prototype = Object.getPrototypeOf(lastPrototype);

			if (lastPrototype === prototype) {
				return false;
			}

			if (prototype === ancestor) {
				return true;
			} else if (prototype === functionPrototype || prototype === objectPrototype) {
				return false;
			}
		}

		return false;
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isFunction = __webpack_require__(27);

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

					for (var _i = 0; _i < this.__dependencies.length; _i++) {
						this.__dependencies[_i].__listeners.push(this);
					}

					// add listeners to end stream
					this.end.__dependencies = endStreams;

					for (var _i2 = 0; _i2 < endStreams.length; _i2++) {
						endStreams[_i2].__listeners.push(this.end);
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
/* 30 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"buttonGroup":"Button__buttonGroup","default":"Button__default","flat":"Button__flat","invisible":"Button__invisible","large":"Button__large","badge":"Button__badge"};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Router = __webpack_require__(32);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Router2.default;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _support = __webpack_require__(2);

	var _support2 = _interopRequireDefault(_support);

	var _Stream = __webpack_require__(29);

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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = ButtonGroup;

	var _Button = __webpack_require__(30);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ButtonGroup(props, children) {
		return ash.createElement(
			'div',
			{ 'class': _Button2.default.buttonGroup },
			children
		);
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(24);

	var _Component3 = _interopRequireDefault(_Component2);

	var _Input = __webpack_require__(35);

	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ENTER_KEY_CODE = 13;

	var Input = function (_Component) {
		_inherits(Input, _Component);

		function Input() {
			_classCallCheck(this, Input);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).apply(this, arguments));
		}

		_createClass(Input, [{
			key: 'shouldUpdate',
			value: function shouldUpdate(newProps) {
				return newProps.id !== this.props.id || newProps.name !== this.props.name || newProps.type !== this.props.type || newProps.autocomplete !== this.props.autocomplete || newProps.isValid !== this.props.isValid || newProps.isDisabled !== this.props.isDisabled || newProps.handleChange !== this.props.handleChange || newProps.handleSave !== this.props.handleSave || newProps.validator !== this.props.validator;
			}
		}, {
			key: 'render',
			value: function render() {
				var inputProps = {
					key: this.props.id || this.props.name || '',
					class: _Input2.default.default + (this.props.isValid ? ' isValid' : ' isInvalid') + (this.props.isDisabled ? ' isDisabled' : ' isEnabled'),
					type: 'text',
					name: this.props.name || this.props.id || '',
					id: this.props.id || this.props.name || '',
					events: {
						blur: this.handleFocusOut,
						input: this.handleInput,
						keydown: this.handleKeyDown
					}
				};

				if (this.props.type === 'email') {
					inputProps.type = this.props.type;
				}

				if (this.props.isDisabled) {
					inputProps.disabled = 'disabled';
				}

				if (this.props.autocomplete === false) {
					inputProps.autocomplete = 'off';
				}

				return ash.createElement('input', inputProps);
			}
		}, {
			key: 'handleInput',
			value: function handleInput(event) {
				if (this.props.handleChange) {
					this.props.handleChange(this.validate(event.target.value));
				}
			}
		}, {
			key: 'handleFocusOut',
			value: function handleFocusOut(event) {
				if (this.props.handleSave) {
					this.props.handleSave(this.validate(event.target.value));
				}
			}
		}, {
			key: 'handleKeyDown',
			value: function handleKeyDown(event) {
				if (event.keyCode === ENTER_KEY_CODE) {
					if (this.props.handleSave) {
						this.props.handleSave(this.validate(event.target.value));
					}
				}
			}
		}, {
			key: 'validate',
			value: function validate(value) {
				return this.props.validator ? this.props.validator(value) : value;
			}
		}]);

		return Input;
	}(_Component3.default);

	exports.default = Input;

/***/ },
/* 35 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"default":"Input__default"};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(24);

	var _Component3 = _interopRequireDefault(_Component2);

	var _Textarea = __webpack_require__(37);

	var _Textarea2 = _interopRequireDefault(_Textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Textarea = function (_Component) {
		_inherits(Textarea, _Component);

		function Textarea() {
			_classCallCheck(this, Textarea);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Textarea).apply(this, arguments));
		}

		_createClass(Textarea, [{
			key: 'shouldUpdate',
			value: function shouldUpdate(newProps) {
				return newProps.id !== this.props.id || newProps.name !== this.props.name || newProps.rows !== this.props.rows || newProps.isValid !== this.props.isValid || newProps.isDisabled !== this.props.isDisabled || newProps.handleChange !== this.props.handleChange || newProps.handleSave !== this.props.handleSave || newProps.validator !== this.props.validator;
			}
		}, {
			key: 'render',
			value: function render() {
				var textareaProps = {
					key: this.props.id || this.props.name || '',
					class: _Textarea2.default.default + (this.props.isValid ? ' isValid' : ' isInvalid') + (this.props.isDisabled ? ' isDisabled' : ' isEnabled'),
					name: this.props.name || this.props.id || '',
					id: this.props.id || this.props.name || '',
					rows: this.props.rows || 5,
					events: {
						blur: this.handleFocusOut,
						input: this.handleInput
					}
				};

				if (this.props.isDisabled) {
					textareaProps.disabled = 'disabled';
				}

				return ash.createElement('textarea', textareaProps);
			}
		}, {
			key: 'handleInput',
			value: function handleInput(event) {
				if (this.props.handleChange) {
					this.props.handleChange(this.validate(event.target.value));
				}
			}
		}, {
			key: 'handleFocusOut',
			value: function handleFocusOut(event) {
				if (this.props.handleSave) {
					this.props.handleSave(this.validate(event.target.value));
				}
			}
		}, {
			key: 'validate',
			value: function validate(value) {
				return this.props.validator ? this.props.validator(value) : value;
			}
		}]);

		return Textarea;
	}(_Component3.default);

	exports.default = Textarea;

/***/ },
/* 37 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"default":"Textarea__default Input__default"};

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Form;
	function Form(props, children) {
		var formProps = {};

		if (props.class && typeof props.class === 'string') {
			formProps.class = props.class;
		}

		return ash.createElement(
			'form',
			formProps,
			children
		);
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = FormRow;

	var _Form = __webpack_require__(40);

	var _Form2 = _interopRequireDefault(_Form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function FormRow(props, children) {
		var labelElement = props.id ? ash.createElement(
			'label',
			{ 'for': props.id },
			'' + props.label
		) : ash.createElement(
			'label',
			null,
			'' + props.label
		);

		return ash.createElement(
			'div',
			{ 'class': _Form2.default.row + (props.class && typeof props.class === 'string' ? ' ' + props.class : '') },
			ash.createElement(
				'div',
				{ 'class': _Form2.default.label },
				labelElement,
				props.hint ? ash.createElement(
					'span',
					{ 'class': _Form2.default.hint },
					props.hint
				) : null
			),
			ash.createElement(
				'div',
				{ 'class': _Form2.default.fields },
				children,
				ash.createElement(
					'div',
					{ 'class': _Form2.default.errorMessage + (props.showError ? ' isVisible' : '') },
					props.errorMessage || null
				)
			)
		);
	}

/***/ },
/* 40 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"Form__root","row":"Form__row","label":"Form__label","fields":"Form__fields","hint":"Form__hint","errorMessage":"Form__errorMessage"};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable prefer-rest-params, complexity */

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	var _AshNode = __webpack_require__(42);

	var _AshNode2 = _interopRequireDefault(_AshNode);

	var _isAshElement = __webpack_require__(43);

	var _isAshElement2 = _interopRequireDefault(_isAshElement);

	var _iterate = __webpack_require__(44);

	var _iterate2 = _interopRequireDefault(_iterate);

	var _Component = __webpack_require__(24);

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
				throw new Error(type + ' (type) must be "' + COMPONENT_ASH_ELEMENT + '", "' + FUNCTION_ASH_ELEMENT + '" or "' + ASH_NODE_ASH_ELEMENT + '".');
			}

			if (typeof Spec !== 'function') {
				throw new Error(Spec + ' (Spec) must be a function.');
			}

			this.type = type;

			if (this.type === COMPONENT_ASH_ELEMENT) {
				this.Spec = Spec;
				this.isDirty = true;

				/*if (arguments.length >= 3 && typeof arguments[2] !== 'undefined') {
	   	this.args = [arguments[2]];
	   } else {
	   	this.args = null;
	   }*/
				if (arguments.length >= 4 && typeof arguments[2] !== 'undefined' && typeof arguments[3] !== 'undefined') {
					// Two arguments for Component constructor: props and passed children
					this.args = [arguments[2], arguments[3]];
				} else if (arguments.length >= 3 && typeof arguments[2] !== 'undefined') {
					// Only one argument for Component constructor: props
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

				/*if (arguments.length >= 3 && typeof arguments[2] !== 'undefined') {
	   	this.args = [arguments[2]];
	   } else {
	   	this.args = null;
	   }*/
				if (arguments.length >= 4 && typeof arguments[2] !== 'undefined' && typeof arguments[3] !== 'undefined') {
					// Two arguments for Component function: props and passed children
					this.args = [arguments[2], arguments[3]];
				} else if (arguments.length >= 3 && typeof arguments[2] !== 'undefined') {
					// Only one argument for Component function: props
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
						this.instance = new this.Spec(this.args[0], this.args[1]);
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
			/*static create(tagName, props/*, children...*/ /*) {
	                                                  let children = [];
	                                                  if (typeof tagName === 'function' && Component.isAncestorOf(tagName)) {
	                                                  return new AshElement(COMPONENT_ASH_ELEMENT, tagName, arguments[1]);
	                                                  } else if (typeof tagName === 'function') {
	                                                  return new AshElement(FUNCTION_ASH_ELEMENT, tagName, arguments[1]);
	                                                  } else if (typeof tagName === 'string' && !tagName.length) {
	                                                  throw new Error(tagName + ' (tagName) must be non-empty string or Component class.');
	                                                  }
	                                                  // type check
	                                                  if (tagName && arguments.length === 1) {
	                                                  // return AshElement <tagName> with no props and no children
	                                                  return new AshElement(ASH_NODE_ASH_ELEMENT, AshNode, tagName, null);
	                                                  }
	                                                  for (let i = 2; i < arguments.length; i++) {
	                                                  if (typeof arguments[i] === 'string' || typeof arguments[i] === 'number') {
	                                                  children.push(new AshElement(ASH_NODE_ASH_ELEMENT, AshNode, '' + arguments[i]));
	                                                  } else if (isAshElement(arguments[i])) {
	                                                  children.push(arguments[i]);
	                                                  } else if (Array.isArray(arguments[i])) {
	                                                  for (let j = 0; j < arguments[i].length; j++) {
	                                                  if (typeof arguments[i][j] === 'string' || typeof arguments[i] === 'number') {
	                                                  children.push(new AshElement(ASH_NODE_ASH_ELEMENT, AshNode, '' + arguments[i][j]));
	                                                  } else if (isAshElement(arguments[i][j])) {
	                                                  children.push(arguments[i][j]);
	                                                  }
	                                                  }
	                                                  } else if (arguments[i] && typeof arguments[i].__iterator === 'function' || arguments[i] && typeof global.Symbol === 'function' && typeof arguments[i][global.Symbol.iterator]) {
	                                                  let iteratorResult = iterate(arguments[i]);
	                                                  for (let j = 0; j < iteratorResult.length; j++) {
	                                                  if (typeof iteratorResult[j] === 'string' || typeof iteratorResult === 'number') {
	                                                  children.push(new AshElement(ASH_NODE_ASH_ELEMENT, AshNode, '' + iteratorResult[j]));
	                                                  } else if (isAshElement(iteratorResult[j])) {
	                                                  children.push(iteratorResult[j]);
	                                                  }
	                                                  }
	                                                  }
	                                                  }
	                                                  return new AshElement(ASH_NODE_ASH_ELEMENT, AshNode, tagName, props, children);
	                                                  }*/

		}], [{
			key: 'create',
			value: function create(tagName, props /*, children...*/) {
				var children = [];

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

						for (var _j = 0; _j < iteratorResult.length; _j++) {
							if (typeof iteratorResult[_j] === 'string' || typeof iteratorResult === 'number') {
								children.push(new AshElement(ASH_NODE_ASH_ELEMENT, _AshNode2.default, '' + iteratorResult[_j]));
							} else if ((0, _isAshElement2.default)(iteratorResult[_j])) {
								children.push(iteratorResult[_j]);
							}
						}
					}
				}

				if (!children.length) {
					children = null;
				}

				if (typeof tagName === 'function' && _Component2.default.isAncestorOf(tagName)) {
					return new AshElement(COMPONENT_ASH_ELEMENT, tagName, arguments[1], children);
				} else if (typeof tagName === 'function') {
					return new AshElement(FUNCTION_ASH_ELEMENT, tagName, arguments[1], children);
				} else if (!tagName) {
					throw new Error(tagName + ' (tagName) must be non-empty string or Component class.');
				}

				// type check
				if (tagName && arguments.length === 1) {
					// return AshElement <tagName> with no props and no children
					return new AshElement(ASH_NODE_ASH_ELEMENT, _AshNode2.default, tagName, null);
				}

				return new AshElement(ASH_NODE_ASH_ELEMENT, _AshNode2.default, tagName, props, children);
			}
		}]);

		return AshElement;
	}();

	exports.default = AshElement;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 42 */
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
			this.tagName = tagName;
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
/* 43 */
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
/* 44 */
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
			var _iterator = iterable[global.Symbol.iterator]();
			var _iterationResult = _iterator.next();

			while (!_iterationResult.done) {
				result.push(_iterationResult.value);

				_iterationResult = _iterator.next();
			}
		} else {
			throw new Error(iterable + ' (iterable) must be an iterable.');
		}

		return result;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Stream2 = __webpack_require__(29);

	var _Stream3 = _interopRequireDefault(_Stream2);

	var _isComponentAshElement = __webpack_require__(46);

	var _isComponentAshElement2 = _interopRequireDefault(_isComponentAshElement);

	var _setAnimationTimeout = __webpack_require__(47);

	var _setAnimationTimeout2 = _interopRequireDefault(_setAnimationTimeout);

	var _createAshElementTree = __webpack_require__(48);

	var _createAshElementTree2 = _interopRequireDefault(_createAshElementTree);

	var _updateAshElementTree = __webpack_require__(50);

	var _updateAshElementTree2 = _interopRequireDefault(_updateAshElementTree);

	var _mountComponents = __webpack_require__(52);

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
/* 46 */
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
/* 47 */
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = createAshElementTree;

	var _isAshElement = __webpack_require__(43);

	var _isAshElement2 = _interopRequireDefault(_isAshElement);

	var _isComponentAshElement = __webpack_require__(46);

	var _isComponentAshElement2 = _interopRequireDefault(_isComponentAshElement);

	var _isAshNodeAshElement = __webpack_require__(25);

	var _isAshNodeAshElement2 = _interopRequireDefault(_isAshNodeAshElement);

	var _isFunctionAshElement = __webpack_require__(49);

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
			throw new Error(owner + ' (owner) must be a Component type AshElement Object.');
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
			ashElement.children[0] = ashElement.spec(ashElement.args[0], ashElement.args[1]);
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
			ashElementTree.children[0] = ashElementTree.spec(ashElementTree.args[0], ashElementTree.args[1]);
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
/* 49 */
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = updateAshElementTree;

	var _createAshElementTree = __webpack_require__(48);

	var _createAshElementTree2 = _interopRequireDefault(_createAshElementTree);

	var _unmountComponents = __webpack_require__(51);

	var _unmountComponents2 = _interopRequireDefault(_unmountComponents);

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var COMPONENT_ASH_ELEMENT = _constants2.default.COMPONENT_ASH_ELEMENT; /* eslint-disable complexity */

	var ASH_NODE_ASH_ELEMENT = _constants2.default.ASH_NODE_ASH_ELEMENT;
	var FUNCTION_ASH_ELEMENT = _constants2.default.FUNCTION_ASH_ELEMENT;

	/**
	 * Walks AshElement tree for updating.
	 *
	 * @param {AshElement} oldAshElement Old Ash Element
	 * @param {AshElement} newAshElement New Ash Element
	 * @param {Stream} stream View Stream
	 * @param {boolean} isParentComponentDirty `True` if parent Component is dirty, else `false`
	 * @returns {undefined} Always returns `undefined`
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
			var newAshElementProps = newAshElement.args && newAshElement.args[0] ? newAshElement.args[0] : null;
			var newAshElementPassedChildren = newAshElement.args && newAshElement.args[1] ? newAshElement.args[1] : null;
			var oldAshElementPassedChildren = oldAshElement.args && oldAshElement.args[1] ? oldAshElement.args[1] : null;

			if (oldAshElement.instance.__isDirty || oldAshElement.instance.shouldUpdate(newAshElementProps) || newAshElementPassedChildren !== oldAshElementPassedChildren) {
				oldAshElement.args = newAshElement.args;
				oldAshElement.isDirty = true;
				oldAshElement.instance.__isDirty = false;

				oldAshElement.instance.onBeforeReceiveProps(newAshElementProps);

				oldAshElement.instance.props = newAshElementProps;
				oldAshElement.instance.children = newAshElementPassedChildren;

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
			var _newAshElementProps = newAshElement.args && newAshElement.args[0] ? newAshElement.args[0] : null;
			var oldAshElementProps = oldAshElement.args && oldAshElement.args[0] ? oldAshElement.args[0] : null;
			var _newAshElementPassedChildren = newAshElement.args && newAshElement.args[1] ? newAshElement.args[1] : null;
			var _oldAshElementPassedChildren = oldAshElement.args && oldAshElement.args[1] ? oldAshElement.args[1] : null;

			if (_newAshElementProps === oldAshElementProps && _newAshElementPassedChildren === _oldAshElementPassedChildren) {
				walkUpdateAshElementTree(oldAshElement.children[0], oldAshElement.children[0], stream, false);
			} else {
				// create child for the new element
				var _render = oldAshElement.spec(newAshElement.args[0], newAshElement.args[1]);

				oldAshElement.args = newAshElement.args;
				oldAshElement.isDirty = true;

				// adding children to the queue
				if (_render) {
					_render.owner = oldAshElement;
					_render.parent = oldAshElement;
					_render.index = 0;

					if (oldAshElement.children[0]) {
						walkUpdateAshElementTree(oldAshElement.children[0], _render, stream, true);
					} else {
						walkUpdateAshElementTree(null, _render, stream, true);
					}
				} else if (oldAshElement.children[0]) {
					// deleting old surplus children
					(0, _unmountComponents2.default)(oldAshElement.children[0]);
					oldAshElement.children.pop();
				}
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
	 * @param {AshElement} componentAshElement Component Ash Element to update
	 * @param {ViewStream} stream ViewStream
	 * @returns {AshElement} Updated Component Ash Element
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
/* 51 */
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = mountComponents;

	var _isComponentAshElement = __webpack_require__(46);

	var _isComponentAshElement2 = _interopRequireDefault(_isComponentAshElement);

	var _isAshNodeAshElement = __webpack_require__(25);

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
/* 53 */
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = renderViewStream;

	var _createNodeTree = __webpack_require__(55);

	var _createNodeTree2 = _interopRequireDefault(_createNodeTree);

	var _diffAshNodeTree = __webpack_require__(62);

	var _diffAshNodeTree2 = _interopRequireDefault(_diffAshNodeTree);

	var _patchNodeTree = __webpack_require__(63);

	var _patchNodeTree2 = _interopRequireDefault(_patchNodeTree);

	var _validateNodeTree = __webpack_require__(72);

	var _validateNodeTree2 = _interopRequireDefault(_validateNodeTree);

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	var _isElement = __webpack_require__(68);

	var _isElement2 = _interopRequireDefault(_isElement);

	var _Stream = __webpack_require__(29);

	var _Stream2 = _interopRequireDefault(_Stream);

	var _ViewStream = __webpack_require__(45);

	var _ViewStream2 = _interopRequireDefault(_ViewStream);

	var _createAshNodeTree = __webpack_require__(73);

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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = createNodeTree;

	var _isTextAshNode = __webpack_require__(56);

	var _isTextAshNode2 = _interopRequireDefault(_isTextAshNode);

	var _setNodeProperties = __webpack_require__(57);

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
		if ( /*ashNodeTree.tagName === 'a' || */ashNodeTree.tagName === 'altglyph' || ashNodeTree.tagName === 'altglyphdef' || ashNodeTree.tagName === 'altglyphitem' || ashNodeTree.tagName === 'animate' || ashNodeTree.tagName === 'animatecolor' || ashNodeTree.tagName === 'animatemotion' || ashNodeTree.tagName === 'animatetransform' || ashNodeTree.tagName === 'circle' || ashNodeTree.tagName === 'clipPath' || ashNodeTree.tagName === 'color-profile' || ashNodeTree.tagName === 'cursor' || ashNodeTree.tagName === 'defs' || ashNodeTree.tagName === 'desc' || ashNodeTree.tagName === 'ellipse' || ashNodeTree.tagName === 'feblend' || ashNodeTree.tagName === 'fecolormatrix' || ashNodeTree.tagName === 'fecomponenttransfer' || ashNodeTree.tagName === 'fecomposite' || ashNodeTree.tagName === 'feconvolvematrix' || ashNodeTree.tagName === 'fediffuselighting' || ashNodeTree.tagName === 'fedisplacementmap' || ashNodeTree.tagName === 'fedistantlight' || ashNodeTree.tagName === 'feflood' || ashNodeTree.tagName === 'fefunca' || ashNodeTree.tagName === 'fefuncb' || ashNodeTree.tagName === 'fefuncg' || ashNodeTree.tagName === 'fefuncr' || ashNodeTree.tagName === 'fegaussianblur' || ashNodeTree.tagName === 'feimage' || ashNodeTree.tagName === 'femerge' || ashNodeTree.tagName === 'femergenode' || ashNodeTree.tagName === 'femorphology' || ashNodeTree.tagName === 'feoffset' || ashNodeTree.tagName === 'fepointlight' || ashNodeTree.tagName === 'fespecularlighting' || ashNodeTree.tagName === 'fespotlight' || ashNodeTree.tagName === 'fetile' || ashNodeTree.tagName === 'feturbulence' || ashNodeTree.tagName === 'filter' || ashNodeTree.tagName === 'font' || ashNodeTree.tagName === 'font-face' || ashNodeTree.tagName === 'font-face-format' || ashNodeTree.tagName === 'font-face-name' || ashNodeTree.tagName === 'font-face-src' || ashNodeTree.tagName === 'font-face-uri' || ashNodeTree.tagName === 'foreignobject' || ashNodeTree.tagName === 'g' || ashNodeTree.tagName === 'glyph' || ashNodeTree.tagName === 'glyphref' || ashNodeTree.tagName === 'hkern' || ashNodeTree.tagName === 'image' || ashNodeTree.tagName === 'line' || ashNodeTree.tagName === 'lineargradient' || ashNodeTree.tagName === 'marker' || ashNodeTree.tagName === 'mask' || ashNodeTree.tagName === 'metadata' || ashNodeTree.tagName === 'missing-glyph' || ashNodeTree.tagName === 'mpath' || ashNodeTree.tagName === 'path' || ashNodeTree.tagName === 'pattern' || ashNodeTree.tagName === 'polygon' || ashNodeTree.tagName === 'polyline' || ashNodeTree.tagName === 'radialgradient' || ashNodeTree.tagName === 'rect' || ashNodeTree.tagName === 'script' || ashNodeTree.tagName === 'set' || ashNodeTree.tagName === 'stop' || ashNodeTree.tagName === 'style' || ashNodeTree.tagName === 'svg' || ashNodeTree.tagName === 'switch' || ashNodeTree.tagName === 'symbol' || ashNodeTree.tagName === 'text' || ashNodeTree.tagName === 'textpath' || ashNodeTree.tagName === 'title' || ashNodeTree.tagName === 'tref' || ashNodeTree.tagName === 'tspan' || ashNodeTree.tagName === 'use' || ashNodeTree.tagName === 'view' || ashNodeTree.tagName === 'vkern') {
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
/* 56 */
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = setNodeProperties;

	var _isObject = __webpack_require__(58);

	var _isObject2 = _interopRequireDefault(_isObject);

	var _attachEvents = __webpack_require__(59);

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
					} else if (typeof node.className === 'string') {
						node.className = '';
					} else if (properties[prop]) {
						node.setAttribute('class', properties[prop]);
					} else {
						node.setAttribute('class', '');
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
/* 58 */
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = attachEvents;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	var _isFunction = __webpack_require__(27);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _parseAshNodeId = __webpack_require__(60);

	var _parseAshNodeId2 = _interopRequireDefault(_parseAshNodeId);

	var _events = __webpack_require__(61);

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
/* 60 */
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
/* 61 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var topics = {};

	exports.default = topics;

/***/ },
/* 62 */
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
			for (var _i = 0; _i < oldChildren.length; _i++) {
				walkDiffAshNodeTree(oldChildren[_i], newChildren[_i], patches);
			}

			return patches;
		}

		// keys are in; let's compare order of children
		var foundIndex = undefined;

		// first iterate over old children
		for (var _i2 = 0; _i2 < oldChildren.length; _i2++) {
			var isChildFound = false;

			for (var j = 0; j < newChildren.length; j++) {
				if (oldChildren[_i2].computedKey === newChildren[j].computedKey) {
					isChildFound = true;
					foundIndex = j;

					break;
				}
			}

			// node with matching key was found?
			if (isChildFound) {
				// is order same?
				if (_i2 !== foundIndex) {
					patches.push({
						type: PATCH_ORDER,
						newId: newChildren[foundIndex].id,
						id: oldChildren[_i2].id,
						indices: oldChildren[_i2].indices,
						streamId: oldChildren[_i2].streamId,
						index: foundIndex
					});
				}

				// now walk inside those children...
				walkDiffAshNodeTree(oldChildren[_i2], newChildren[foundIndex], patches);
			} else {
				// node is to be removed...
				patches.push({
					type: PATCH_REMOVE,
					id: oldChildren[_i2].id,
					indices: oldChildren[_i2].indices,
					streamId: oldChildren[_i2].streamId
				});
			}
		}

		// now iterate over new children, if there are any
		for (var _i3 = 0; _i3 < newChildren.length; _i3++) {
			var _isChildFound = false;

			for (var _j = 0; _j < oldChildren.length; _j++) {
				if (oldChildren[_j].computedKey === newChildren[_i3].computedKey) {
					_isChildFound = true;

					break;
				}
			}

			// new child was not found
			if (!_isChildFound) {
				patches.push({
					type: PATCH_INSERT,
					node: newChildren[_i3],
					id: newChildren[_i3].id,
					indices: newChildren[_i3].indices,
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = patchNodeTree;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	var _parseAshNodeId = __webpack_require__(60);

	var _parseAshNodeId2 = _interopRequireDefault(_parseAshNodeId);

	var _createNodeTree = __webpack_require__(55);

	var _createNodeTree2 = _interopRequireDefault(_createNodeTree);

	var _setNodeProperties = __webpack_require__(57);

	var _setNodeProperties2 = _interopRequireDefault(_setNodeProperties);

	var _removeNodeProperties = __webpack_require__(64);

	var _removeNodeProperties2 = _interopRequireDefault(_removeNodeProperties);

	var _findNode = __webpack_require__(26);

	var _findNode2 = _interopRequireDefault(_findNode);

	var _isElement = __webpack_require__(68);

	var _isElement2 = _interopRequireDefault(_isElement);

	var _detachEvents = __webpack_require__(65);

	var _detachEvents2 = _interopRequireDefault(_detachEvents);

	var _markEvents = __webpack_require__(70);

	var _markEvents2 = _interopRequireDefault(_markEvents);

	var _reindexEvents = __webpack_require__(71);

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
		if (a.sortOrder > b.sortOrder) {
			return 1;
		} else if (a.sortOrder < b.sortOrder) {
			return -1;
		}

		return 0;
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
			for (var _i = 0; _i < reorderCache[0].childNodes.length; _i++) {
				var index = nodeIndex(reorderCache[0].childNodes[_i]);

				if (index === reorderCache[0].childNodes[_i][INDEX_ATTRIBUTE_NAME] || index + 1 === reorderCache[0].childNodes[_i][INDEX_ATTRIBUTE_NAME]) {
					continue;
				} else {
					if (reorderCache[0].childNodes[_i][INDEX_ATTRIBUTE_NAME] > reorderCache[0].childNodes[_i].length - 1) {
						reorderCache[0].appendChild(reorderCache[0].childNodes[_i]);
					} else {
						reorderCache[0].insertBefore(reorderCache[0].childNodes[_i], reorderCache[0].childNodes[reorderCache[0].childNodes[_i][INDEX_ATTRIBUTE_NAME]]);
					}

					if (index + 1 < reorderCache[0].childNodes[_i][INDEX_ATTRIBUTE_NAME]) {
						_i--;
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

		var maxDigits = maxIndex > 0 ? Math.floor(Math.log(Math.abs(Math.floor(maxIndex))) / Math.LN10) + 1 : 1;

		var ZERO_PADDED_9 = zeroPadNumber(9, maxDigits);
		var ZERO_PADDED_8 = zeroPadNumber(8, maxDigits);
		var ZERO_PADDED_7 = zeroPadNumber(7, maxDigits);
		var ZERO_PADDED_6 = zeroPadNumber(6, maxDigits);
		var ZERO_PADDED_5 = zeroPadNumber(5, maxDigits);
		var ZERO_PADDED_4 = zeroPadNumber(4, maxDigits);
		var ZERO_PADDED_0 = zeroPadNumber(0, maxDigits);

		var sortOrderLength = 0;

		// compute sort order
		for (var _i2 = 0; _i2 < patches.length; _i2++) {
			patches[_i2].sortOrder = '';

			// first we order patches by their levels without the last level
			for (var _j = 0; _j < patches[_i2].indices.length - 1; _j++) {
				patches[_i2].sortOrder += zeroPadNumber(patches[_i2].indices[_j], maxDigits);
			}

			// then the patch type is important
			if (patches[_i2].type === PATCH_ELEMENT_ASH_NODE) {
				patches[_i2].sortOrder += ZERO_PADDED_9;
			} else if (patches[_i2].type === PATCH_TEXT_ASH_NODE) {
				patches[_i2].sortOrder += ZERO_PADDED_8;
			} else if (patches[_i2].type === PATCH_PROPERTIES) {
				patches[_i2].sortOrder += ZERO_PADDED_7;
			} else if (patches[_i2].type === PATCH_REMOVE) {
				patches[_i2].sortOrder += ZERO_PADDED_6;
			} else if (patches[_i2].type === PATCH_INSERT) {
				patches[_i2].sortOrder += ZERO_PADDED_5;
			} else if (patches[_i2].type === PATCH_ORDER) {
				patches[_i2].sortOrder += ZERO_PADDED_4;
			} else {
				patches[_i2].sortOrder += ZERO_PADDED_0;
			}

			// and now the last level
			patches[_i2].sortOrder += zeroPadNumber(patches[_i2].indices[patches[_i2].indices.length - 1], maxDigits);

			// determine max length of sorting string
			if (sortOrderLength < patches[_i2].sortOrder.length) {
				sortOrderLength = patches[_i2].sortOrder.length;
			}
		}

		// pad the string
		for (var _i3 = 0; _i3 < patches.length; _i3++) {
			if (sortOrderLength - patches[_i3].sortOrder.length + 1 > 0) {
				patches[_i3].sortOrder = Array(sortOrderLength - patches[_i3].sortOrder.length + 1).join('0').concat(patches[_i3].sortOrder);
			}
		}

		// sort patches by their order
		patches.sort(comparePatches);

		// now iterate over patches...
		var lastLevel = patches[patches.length - 1].indices.length;

		for (var _i4 = patches.length - 1; _i4 >= 0; _i4--) {
			if (lastLevel < patches[_i4].indices.length) {
				// patching new level, must flush cache
				flushCache(reindexCache, reorderCache);

				lastLevel = patches[_i4].indices.length;
			}

			if (patches[_i4].type === PATCH_ELEMENT_ASH_NODE) {
				// remove old events
				(0, _detachEvents2.default)(patches[_i4].id, patches[_i4].streamId);

				// find node
				node = (0, _findNode2.default)(nodeTree, patches[_i4].id, patches[_i4].indices);

				if (!node) {
					throw new Error('Patching the DOM was unsuccesful!');
				}

				// new node, but change the order and index - they must be from the node-to-be-removed, because patch for order is separate...
				var newNode = (0, _createNodeTree2.default)(patches[_i4].node);

				newNode[ID_ATTRIBUTE_NAME] = node[ID_ATTRIBUTE_NAME];
				newNode[INDEX_ATTRIBUTE_NAME] = node[INDEX_ATTRIBUTE_NAME];

				node.parentNode.replaceChild(newNode, node);
			} else if (patches[_i4].type === PATCH_TEXT_ASH_NODE) {
				node = (0, _findNode2.default)(nodeTree, patches[_i4].id, patches[_i4].indices);

				if (!node) {
					throw new Error('Patching the DOM was unsuccesful!');
				}

				node.nodeValue = patches[_i4].text;
			} else if (patches[_i4].type === PATCH_PROPERTIES) {
				node = (0, _findNode2.default)(nodeTree, patches[_i4].id, patches[_i4].indices);

				if (!node) {
					throw new Error('Patching the DOM was unsuccesful!');
				}

				(0, _setNodeProperties2.default)(node, patches[_i4].propertiesToChange, false);
				(0, _removeNodeProperties2.default)(node, patches[_i4].propertiesToRemove);
			} else if (patches[_i4].type === PATCH_REMOVE) {
				node = (0, _findNode2.default)(nodeTree, patches[_i4].id, patches[_i4].indices);

				if (!node) {
					throw new Error('Patching the DOM was unsuccesful!');
				}

				// remove old events
				(0, _detachEvents2.default)(patches[_i4].id, patches[_i4].streamId);

				node.parentNode.removeChild(node);
			} else if (patches[_i4].type === PATCH_INSERT) {
				node = (0, _findNode2.default)(nodeTree, patches[_i4].parentId, patches[_i4].parentIndices);

				if (!node) {
					throw new Error('Patching the DOM was unsuccesful!');
				}

				node.appendChild((0, _createNodeTree2.default)(patches[_i4].node));

				reorderCache.push(node);
			} else if (patches[_i4].type === PATCH_ORDER) {
				node = (0, _findNode2.default)(nodeTree, patches[_i4].id, patches[_i4].indices);

				if (!node) {
					throw new Error('Patching the DOM was unsuccesful!');
				}

				// reindex events
				(0, _reindexEvents2.default)(patches[_i4].id, patches[_i4].indices, patches[_i4].index, patches[_i4].streamId);

				reindexCache.push({
					node: node,
					newId: patches[_i4].newId,
					newIndex: patches[_i4].index,
					streamId: patches[_i4].streamId
				});

				reorderCache.push(node.parentNode);
			}
		}

		flushCache(reindexCache, reorderCache);
		(0, _markEvents2.default)(patches.streamId);

		return true;
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = removeNodeProperties;

	var _detachEvents = __webpack_require__(65);

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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = detachEvents;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	var _isMatching = __webpack_require__(66);

	var _isMatching2 = _interopRequireDefault(_isMatching);

	var _events = __webpack_require__(61);

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
					for (var _i = 0; _i < _events2.default[topicName].length; _i++) {
						if (_events2.default[topicName][_i].streamId && (0, _isMatching2.default)(splitId, _events2.default[topicName][_i].id.split(INDEX_SEPARATOR), true) && !_events2.default[topicName][_i].isNewlyInserted) {
							_events2.default[topicName].splice(_i, 1);

							_i--;
						}
					}
				}
			}
		}
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = isMatching;

	var _isArray = __webpack_require__(67);

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
			for (var _i = 0; _i < chain1.length; _i++) {
				for (var j = 0; j < chain2.length; j++) {
					if (chain1[_i] === chain2[j]) {
						indexes.push(j);

						break;
					}

					if (j === chain2.length - 1) {
						return false; // item from chain1 is not in chain2, therefore there is no match
					}
				}
			}

			for (var _i2 = 0; _i2 < indexes.length - 1; _i2++) {
				if (indexes[_i2] >= indexes[_i2 + 1]) {
					// indexes are't ordered, therefore there is no match
					return false;
				}
			}
		}

		return true;
	}

/***/ },
/* 67 */
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isElement;

	var _isObjectLike = __webpack_require__(69);

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
/* 69 */
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = markEvents;

	var _events = __webpack_require__(61);

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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = reindexEvents;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	var _parseAshNodeId = __webpack_require__(60);

	var _parseAshNodeId2 = _interopRequireDefault(_parseAshNodeId);

	var _isMatching = __webpack_require__(66);

	var _isMatching2 = _interopRequireDefault(_isMatching);

	var _events = __webpack_require__(61);

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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = validateNodeTree;

	var _constants = __webpack_require__(3);

	var _constants2 = _interopRequireDefault(_constants);

	var _attachEvents = __webpack_require__(59);

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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = createAshNodeTree;

	var _isComponentAshElement = __webpack_require__(46);

	var _isComponentAshElement2 = _interopRequireDefault(_isComponentAshElement);

	var _isAshNodeAshElement = __webpack_require__(25);

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
					for (var _i = 0; _i < index; _i++) {
						ashNodeTree.children[_i] = ashNodeTree.oldChildren[_i];
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = stringifyViewStream;

	var _stringifyAshNodeTree = __webpack_require__(75);

	var _stringifyAshNodeTree2 = _interopRequireDefault(_stringifyAshNodeTree);

	var _createAshNodeTree = __webpack_require__(73);

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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = stringifyAshNodeTree;

	var _isElementAshNode = __webpack_require__(76);

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
/* 76 */
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _I18n = __webpack_require__(78);

	var _I18n2 = _interopRequireDefault(_I18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _I18n2.default;

/***/ },
/* 78 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-04-05T19:26Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.3",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE11 only
		// In IE 11 fullscreen elements inside of an iframe have
		// 100x too small dimensions (gh-1764).
		if ( document.msFullscreenElement && window.top !== window ) {

			// Support: IE11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if ( elem.getClientRects().length ) {
				val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
			}
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the 1.x branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				}
			);

			jQuery.event.trigger( e, null, elem );

			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(81);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(107);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(108);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(112);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(155);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _ash = __webpack_require__(1);

	var _ash2 = _interopRequireDefault(_ash);

	var _App = __webpack_require__(163);

	var _App2 = _interopRequireDefault(_App);

	var _pageStream = __webpack_require__(164);

	var _pageStream2 = _interopRequireDefault(_pageStream);

	var _storyStream = __webpack_require__(167);

	var _storyStream2 = _interopRequireDefault(_storyStream);

	var _languageStream = __webpack_require__(168);

	var _languageStream2 = _interopRequireDefault(_languageStream);

	var _constants = __webpack_require__(166);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EN = _constants2.default.EN;
	var CZ = _constants2.default.CZ;
	var EMAIL_REGEX = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

	var textInputValidator = function textInputValidator(value) {
		return value === 'ash' ? value : false;
	};
	var emailValidator = function emailValidator(value) {
		if (!value || typeof value !== 'string') {
			return false;
		}

		var email = value.trim();
		var result = EMAIL_REGEX.test(email);

		return result ? email : false;
	};
	var textareaValidator = function textareaValidator(value) {
		return value.length >= 5 ? value : false;
	};

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
				isColored: false,
				isTextInputValid: true,
				isEmailInputValid: true,
				isTextareaValid: true
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
						'section',
						null,
						_ash2.default.createElement(
							'h1',
							{ 'class': _ash2.default.ui.styles.sectionLevel1Heading },
							'Form'
						),
						_ash2.default.createElement(
							_ash2.default.ui.Form,
							{ 'class': _App2.default.form },
							_ash2.default.createElement(
								_ash2.default.ui.FormRow,
								{ id: 'foo', label: 'Foo text input', hint: 'Type \'ash\'', showError: !this.state.isTextInputValid, errorMessage: "You have to type 'ash'!" },
								_ash2.default.createElement(_ash2.default.ui.Input, { id: 'foo', validator: textInputValidator, isValid: this.state.isTextInputValid, handleChange: this.handleTextInputChange })
							),
							_ash2.default.createElement(
								_ash2.default.ui.FormRow,
								{ id: 'foo', label: 'Foo email input', hint: 'Type any email', showError: !this.state.isEmailInputValid, errorMessage: "That's not a valid mail address!" },
								_ash2.default.createElement(_ash2.default.ui.Input, { id: 'foo', type: 'email', validator: emailValidator, isValid: this.state.isEmailInputValid, handleChange: this.handleEmailInputChange })
							),
							_ash2.default.createElement(
								_ash2.default.ui.FormRow,
								{ id: 'foo', label: 'Textarea', hint: 'Write something longer than 4 characters', showError: !this.state.isTextareaValid, errorMessage: "Write something longer!" },
								_ash2.default.createElement(_ash2.default.ui.Textarea, { id: 'foo', rows: 3, validator: textareaValidator, isValid: this.state.isTextareaValid, handleChange: this.handleTextareaChange })
							)
						)
					),
					_ash2.default.createElement(
						'section',
						null,
						_ash2.default.createElement(
							'h1',
							{ 'class': _ash2.default.ui.styles.sectionLevel1Heading },
							'Buttons'
						),
						_ash2.default.createElement(
							'h2',
							{ 'class': _ash2.default.ui.styles.sectionLevel2Heading },
							'Normal size'
						),
						_ash2.default.createElement(
							_ash2.default.ui.ButtonGroup,
							null,
							_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default button' }),
							_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default button (disabled)', isDisabled: true }),
							_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default button', badge: 'Badge!' }),
							_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default button (disabled)', badge: 'Badge!', isDisabled: true }),
							_ash2.default.createElement(_ash2.default.ui.Button, { type: 'flat', label: 'Flat button' }),
							_ash2.default.createElement(_ash2.default.ui.Button, { type: 'flat', label: 'Flat button (disabled)', isDisabled: true }),
							_ash2.default.createElement(_ash2.default.ui.Button, { type: 'flat', label: 'Flat button', badge: 'Badge!' }),
							_ash2.default.createElement(_ash2.default.ui.Button, { type: 'flat', label: 'Flat button (disabled)', badge: 'Badge!', isDisabled: true }),
							_ash2.default.createElement(_ash2.default.ui.Button, { type: 'invisible', label: 'Invisible button' }),
							_ash2.default.createElement(_ash2.default.ui.Button, { type: 'invisible', label: 'Invisible button (disabled)', isDisabled: true }),
							_ash2.default.createElement(_ash2.default.ui.Button, { type: 'invisible', label: 'Invisible button', badge: 'Badge!' }),
							_ash2.default.createElement(_ash2.default.ui.Button, { type: 'invisible', label: 'Invisible button (disabled)', badge: 'Badge!', isDisabled: true }),
							_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default submit button', isSubmit: true })
						),
						_ash2.default.createElement(_ash2.default.ui.ButtonGroup, null),
						_ash2.default.createElement(
							'h2',
							{ 'class': _ash2.default.ui.styles.sectionLevel2Heading },
							'Large size'
						),
						_ash2.default.createElement(
							_ash2.default.ui.ButtonGroup,
							null,
							_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default button', isLarge: true }),
							_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default button (disabled)', isDisabled: true, isLarge: true }),
							_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default button', badge: 'Badge!', isLarge: true }),
							_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default button (disabled)', badge: 'Badge!', isDisabled: true, isLarge: true }),
							_ash2.default.createElement(_ash2.default.ui.Button, { type: 'flat', label: 'Flat button', isLarge: true }),
							_ash2.default.createElement(_ash2.default.ui.Button, { type: 'flat', label: 'Flat button (disabled)', isDisabled: true, isLarge: true }),
							_ash2.default.createElement(_ash2.default.ui.Button, { type: 'invisible', label: 'Invisible button', isLarge: true }),
							_ash2.default.createElement(_ash2.default.ui.Button, { type: 'invisible', label: 'Invisible button (disabled)', isDisabled: true, isLarge: true }),
							_ash2.default.createElement(_ash2.default.ui.Button, { label: 'Default submit button', isSubmit: true, isLarge: true })
						)
					),
					_ash2.default.createElement(
						'section',
						null,
						_ash2.default.createElement(
							'h1',
							{ 'class': _ash2.default.ui.styles.sectionLevel1Heading },
							'Router'
						),
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
							_ash2.default.ui.ButtonGroup,
							null,
							_ash2.default.createElement(_ash2.default.ui.Button, { type: 'invisible', label: 'CZ foo/bar', link: '/' + CZ + '/foo/bar' }),
							_ash2.default.createElement(_ash2.default.ui.Button, { type: 'invisible', label: 'EN foo/bar', link: '/' + EN + '/foo/bar' })
						)
					),
					_ash2.default.createElement(
						'section',
						null,
						_ash2.default.createElement(
							'h1',
							{ 'class': _ash2.default.ui.styles.sectionLevel1Heading },
							'Perf'
						),
						_ash2.default.createElement(
							_ash2.default.ui.ButtonGroup,
							null,
							_ash2.default.createElement(_ash2.default.ui.Button, { type: 'flat', label: 'Toggle grid', handleClick: this.handleToggleGrid }),
							_ash2.default.createElement(_ash2.default.ui.Button, { type: 'flat', label: 'Add items', handleClick: this.handleAddEvent }),
							_ash2.default.createElement(_ash2.default.ui.Button, { type: 'flat', label: 'Change color', handleClick: this.handleChangeColor })
						),
						_ash2.default.createElement(
							'div',
							null,
							items
						)
					)
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
			key: 'handleAddEvent',
			value: function handleAddEvent() {
				for (var i = 0; i < 500; i++) {
					// eslint-disable-line no-magic-numbers
					this.state.items.push([Math.random() * 1000 >> 0]); // eslint-disable-line no-magic-numbers
				}

				this.update();
			}
		}, {
			key: 'handleChangeColor',
			value: function handleChangeColor() {
				this.state.isColored = !this.state.isColored;

				this.update();
			}
		}, {
			key: 'handleToggleGrid',
			value: function handleToggleGrid() {
				if (document.querySelector('body').className) {
					document.querySelector('body').className = '';
				} else {
					document.querySelector('body').className = 'hasGrid';
				}

				this.update();
			}
		}, {
			key: 'handleTextInputChange',
			value: function handleTextInputChange(value) {
				if (value === false) {
					this.state.isTextInputValid = false;
				} else {
					this.state.isTextInputValid = true;
				}

				this.update();
			}
		}, {
			key: 'handleEmailInputChange',
			value: function handleEmailInputChange(value) {
				if (value === false) {
					this.state.isEmailInputValid = false;
				} else {
					this.state.isEmailInputValid = true;
				}

				this.update();
			}
		}, {
			key: 'handleTextareaChange',
			value: function handleTextareaChange(value) {
				if (value === false) {
					this.state.isTextareaValid = false;
				} else {
					this.state.isTextareaValid = true;
				}

				this.update();
			}
		}]);
		return App;
	}(_ash2.default.Component);

	exports.default = App;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	module.exports = __webpack_require__(94).Object.getPrototypeOf;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(84)
	  , $getPrototypeOf = __webpack_require__(86);

	__webpack_require__(92)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(85);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 85 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(87)
	  , toObject    = __webpack_require__(84)
	  , IE_PROTO    = __webpack_require__(88)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(89)('keys')
	  , uid    = __webpack_require__(91);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(90)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 91 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(93)
	  , core    = __webpack_require__(94)
	  , fails   = __webpack_require__(103);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(90)
	  , core      = __webpack_require__(94)
	  , ctx       = __webpack_require__(95)
	  , hide      = __webpack_require__(97)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 94 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.2.2'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(96);
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
/* 96 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(98)
	  , createDesc = __webpack_require__(106);
	module.exports = __webpack_require__(102) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(99)
	  , IE8_DOM_DEFINE = __webpack_require__(101)
	  , toPrimitive    = __webpack_require__(105)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(102) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(100);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(102) && !__webpack_require__(103)(function(){
	  return Object.defineProperty(__webpack_require__(104)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(103)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(100)
	  , document = __webpack_require__(90).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(100);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 106 */
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
/* 107 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(109);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
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
	}();

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(111);
	var $Object = __webpack_require__(94).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(93);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(102), 'Object', {defineProperty: __webpack_require__(98).f});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(113);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(114);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(142);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(115), __esModule: true };

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(116);
	__webpack_require__(138);
	module.exports = __webpack_require__(137)('iterator');

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(117)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(119)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(118)
	  , defined   = __webpack_require__(85);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(120)
	  , $export        = __webpack_require__(93)
	  , redefine       = __webpack_require__(121)
	  , hide           = __webpack_require__(97)
	  , has            = __webpack_require__(87)
	  , Iterators      = __webpack_require__(122)
	  , $iterCreate    = __webpack_require__(123)
	  , setToStringTag = __webpack_require__(136)
	  , getPrototypeOf = __webpack_require__(86)
	  , ITERATOR       = __webpack_require__(137)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(97);

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(124)
	  , descriptor     = __webpack_require__(106)
	  , setToStringTag = __webpack_require__(136)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(97)(IteratorPrototype, __webpack_require__(137)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(99)
	  , dPs         = __webpack_require__(125)
	  , enumBugKeys = __webpack_require__(134)
	  , IE_PROTO    = __webpack_require__(88)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(104)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(135).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(98)
	  , anObject = __webpack_require__(99)
	  , getKeys  = __webpack_require__(126);

	module.exports = __webpack_require__(102) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(127)
	  , enumBugKeys = __webpack_require__(134);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(87)
	  , toIObject    = __webpack_require__(128)
	  , arrayIndexOf = __webpack_require__(131)(false)
	  , IE_PROTO     = __webpack_require__(88)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(129)
	  , defined = __webpack_require__(85);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(130);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(128)
	  , toLength  = __webpack_require__(132)
	  , toIndex   = __webpack_require__(133);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(118)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(118)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 134 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(90).document && document.documentElement;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(98).f
	  , has = __webpack_require__(87)
	  , TAG = __webpack_require__(137)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(89)('wks')
	  , uid        = __webpack_require__(91)
	  , Symbol     = __webpack_require__(90).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(139);
	var global        = __webpack_require__(90)
	  , hide          = __webpack_require__(97)
	  , Iterators     = __webpack_require__(122)
	  , TO_STRING_TAG = __webpack_require__(137)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(140)
	  , step             = __webpack_require__(141)
	  , Iterators        = __webpack_require__(122)
	  , toIObject        = __webpack_require__(128);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(119)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(143), __esModule: true };

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(144);
	__webpack_require__(154);
	module.exports = __webpack_require__(94).Symbol;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(90)
	  , core           = __webpack_require__(94)
	  , has            = __webpack_require__(87)
	  , DESCRIPTORS    = __webpack_require__(102)
	  , $export        = __webpack_require__(93)
	  , redefine       = __webpack_require__(121)
	  , META           = __webpack_require__(145).KEY
	  , $fails         = __webpack_require__(103)
	  , shared         = __webpack_require__(89)
	  , setToStringTag = __webpack_require__(136)
	  , uid            = __webpack_require__(91)
	  , wks            = __webpack_require__(137)
	  , keyOf          = __webpack_require__(146)
	  , enumKeys       = __webpack_require__(147)
	  , isArray        = __webpack_require__(150)
	  , anObject       = __webpack_require__(99)
	  , toIObject      = __webpack_require__(128)
	  , toPrimitive    = __webpack_require__(105)
	  , createDesc     = __webpack_require__(106)
	  , _create        = __webpack_require__(124)
	  , gOPNExt        = __webpack_require__(151)
	  , $GOPD          = __webpack_require__(153)
	  , $DP            = __webpack_require__(98)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
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

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
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
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = gOPD(it = toIObject(it), key = toPrimitive(key, true));
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = gOPN(toIObject(it))
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
	    , replacer, $replacer;
	  while(arguments.length > i)args.push(arguments[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var BUGGY_JSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(152).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(149).f  = $propertyIsEnumerable
	  __webpack_require__(148).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(120)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

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
	for(var symbols = (
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; ){
	  var key     = symbols[i++]
	    , Wrapper = core.Symbol
	    , sym     = wks(key);
	  if(!(key in Wrapper))dP(Wrapper, key, {value: USE_NATIVE ? sym : wrap(sym)});
	};

	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	if(!QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild)setter = true;

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
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
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || BUGGY_JSON), 'JSON', {stringify: $stringify});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(97)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(91)('meta')
	  , isObject = __webpack_require__(100)
	  , has      = __webpack_require__(87)
	  , setDesc  = __webpack_require__(98).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(103)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(126)
	  , toIObject = __webpack_require__(128);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(126)
	  , gOPS    = __webpack_require__(148)
	  , pIE     = __webpack_require__(149);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 148 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 149 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(130);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(128)
	  , gOPN      = __webpack_require__(152).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(127)
	  , hiddenKeys = __webpack_require__(134).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(149)
	  , createDesc     = __webpack_require__(106)
	  , toIObject      = __webpack_require__(128)
	  , toPrimitive    = __webpack_require__(105)
	  , has            = __webpack_require__(87)
	  , IE8_DOM_DEFINE = __webpack_require__(101)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(102) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 154 */
/***/ function(module, exports) {

	

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(156);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(160);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(113);

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
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(157), __esModule: true };

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(158);
	module.exports = __webpack_require__(94).Object.setPrototypeOf;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(93);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(159).set});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(100)
	  , anObject = __webpack_require__(99);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(95)(Function.call, __webpack_require__(153).f(Object.prototype, '__proto__').set, 2);
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
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(161), __esModule: true };

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(162);
	var $Object = __webpack_require__(94).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(93)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(124)});

/***/ },
/* 163 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"App__root","form":"App__form","items":"App__items"};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ash = __webpack_require__(1);

	var _ash2 = _interopRequireDefault(_ash);

	var _routeStream = __webpack_require__(165);

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
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Router = __webpack_require__(31);

	var _Router2 = _interopRequireDefault(_Router);

	var _constants = __webpack_require__(166);

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
/* 166 */
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
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ash = __webpack_require__(1);

	var _ash2 = _interopRequireDefault(_ash);

	var _routeStream = __webpack_require__(165);

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
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ash = __webpack_require__(1);

	var _ash2 = _interopRequireDefault(_ash);

	var _I18n = __webpack_require__(77);

	var _I18n2 = _interopRequireDefault(_I18n);

	var _routeStream = __webpack_require__(165);

	var _routeStream2 = _interopRequireDefault(_routeStream);

	var _constants = __webpack_require__(166);

	var _constants2 = _interopRequireDefault(_constants);

	var _i18nStrings = __webpack_require__(169);

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
/* 169 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var i18nStrings = {};

	exports.default = i18nStrings;

/***/ }
/******/ ]);