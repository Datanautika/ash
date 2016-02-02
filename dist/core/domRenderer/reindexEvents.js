'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = reindexEvents;

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

var _parseAshNodeId = require('./parseAshNodeId');

var _parseAshNodeId2 = _interopRequireDefault(_parseAshNodeId);

var _isMatching = require('../internals/isMatching');

var _isMatching2 = _interopRequireDefault(_isMatching);

var _events = require('./events');

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