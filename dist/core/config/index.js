'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setConfig = setConfig;
exports.getConfig = getConfig;

var _defaults = require('./defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var _assign = require('../internals/assign');

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