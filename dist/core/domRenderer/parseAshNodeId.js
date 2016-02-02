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