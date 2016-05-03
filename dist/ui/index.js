'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = require('./components/shared.css');

var _shared2 = _interopRequireDefault(_shared);

var _config = require('./config');

var _Button = require('./components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = require('./components/ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Input = require('./components/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Textarea = require('./components/Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _Form = require('./components/Form');

var _Form2 = _interopRequireDefault(_Form);

var _FormRow = require('./components/FormRow');

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