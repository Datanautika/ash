'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringifyViewStream;

var _stringifyAshNodeTree = require('./stringifyAshNodeTree');

var _stringifyAshNodeTree2 = _interopRequireDefault(_stringifyAshNodeTree);

var _createAshNodeTree = require('../view/createAshNodeTree');

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