'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cssModulesRequireHook = require('css-modules-require-hook');

var _cssModulesRequireHook2 = _interopRequireDefault(_cssModulesRequireHook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _cssModulesRequireHook2.default)({
  // generateScopedName: '[name]__[local]___[hash:base64:4]',
  generateScopedName: '[name]__[local]'
});

exports.default = _cssModulesRequireHook2.default;