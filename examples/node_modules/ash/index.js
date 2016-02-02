'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _support = require('./core/support');

var _support2 = _interopRequireDefault(_support);

var _ash = require('./core/styles/ash.css');

var _ash2 = _interopRequireDefault(_ash);

var _config = require('./core/config');

var _Component = require('./core/view/Component');

var _Component2 = _interopRequireDefault(_Component);

var _AshElement = require('./core/view/AshElement');

var _AshElement2 = _interopRequireDefault(_AshElement);

var _ViewStream = require('./core/view/ViewStream');

var _ViewStream2 = _interopRequireDefault(_ViewStream);

var _Stream = require('./core/stream/Stream');

var _Stream2 = _interopRequireDefault(_Stream);

var _isAncestor = require('./core/utils/isAncestor');

var _isAncestor2 = _interopRequireDefault(_isAncestor);

var _flattenTree = require('./core/utils/flattenTree');

var _flattenTree2 = _interopRequireDefault(_flattenTree);

var _renderViewStream = require('./core/domRenderer/renderViewStream');

var _renderViewStream2 = _interopRequireDefault(_renderViewStream);

var _stringifyViewStream = require('./core/textRenderer/stringifyViewStream');

var _stringifyViewStream2 = _interopRequireDefault(_stringifyViewStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Ash object.
 *
 * @version 0.1.0
 */
var ash = {
	/**
  * Version number.
  *
  * @type {string}
  */
	VERSION: '0.1.0',

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