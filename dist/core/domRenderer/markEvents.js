'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = markEvents;

var _events = require('./events');

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