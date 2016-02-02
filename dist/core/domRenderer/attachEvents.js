'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = attachEvents;

var _constants = require('../internals/constants');

var _constants2 = _interopRequireDefault(_constants);

var _isFunction = require('../internals/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _parseAshNodeId = require('./parseAshNodeId');

var _parseAshNodeId2 = _interopRequireDefault(_parseAshNodeId);

var _events = require('./events');

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