'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = detachEvents;

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

var _isMatching = require('../internals/isMatching');

var _isMatching2 = _interopRequireDefault(_isMatching);

var _events = require('./events');

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