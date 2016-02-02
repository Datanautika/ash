import constants from '../internals/constants';
import isFunction from '../internals/isFunction';
import parseAshNodeId from './parseAshNodeId';
import topics from './events';


const ID_ATTRIBUTE_NAME = constants.ID_ATTRIBUTE_NAME;
const STREAM_ID_ATTRIBUTE_NAME = constants.STREAM_ID_ATTRIBUTE_NAME;
const INDEX_SEPARATOR = constants.INDEX_SEPARATOR;

/**
 * Handles fired events.
 *
 * @param {string} eventName
 * @param {Event} event
 */
function eventHandler(eventName, event) {
	let id = event.target[ID_ATTRIBUTE_NAME];
	let streamId = event.target[STREAM_ID_ATTRIBUTE_NAME];

	if (id) {
		let indices = parseAshNodeId(id);

		while (indices.length) {
			for (let i = 0; i < topics[eventName].length; i++) {
				if (topics[eventName][i].id === id && topics[eventName][i].streamId === streamId) {
					topics[eventName][i].callback(event);
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
export default function attachEvents(node, events, isNewlyInserted) {
	for (let eventName in events) {
		if (events.hasOwnProperty(eventName) && isFunction(events[eventName])) {
			if (!topics[eventName]) {
				topics[eventName] = [];

				global.document.addEventListener(eventName, eventHandler.bind(this, eventName), true);
			}

			for (let i = 0; i < topics[eventName].length; i++) {
				if (topics[eventName][i].streamId === node[STREAM_ID_ATTRIBUTE_NAME] && topics[eventName][i].id === node[ID_ATTRIBUTE_NAME]) {
					topics[eventName][i].callback = events[eventName];
					topics[eventName][i].isNewlyInserted = !!isNewlyInserted;

					return;
				}
			}

			// push new event
			topics[eventName].push({
				id: node[ID_ATTRIBUTE_NAME],
				streamId: node[STREAM_ID_ATTRIBUTE_NAME],
				callback: events[eventName],
				isNewlyInserted: !!isNewlyInserted,
				isReindexed: {}
			});
		}
	}
}
