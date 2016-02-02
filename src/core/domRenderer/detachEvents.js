import constants from '../internals/constants';
import isMatching from '../internals/isMatching';
import topics from './events';


const INDEX_SEPARATOR = constants.INDEX_SEPARATOR;

/**
 * Removes all events, that has id same or matching via isMatching().
 * RemoveEvents('0.1') removes events '0.1', '0.1.0', '0.1.1', etc.
 * If eventName is specified, only events with that name are removed.
 *
 * @param {string} id
 * @param {number} streamId
 * @param {string} eventName
 */
export default function detachEvents(id, streamId, eventName) {
	let splitId = id.split(INDEX_SEPARATOR);

	if (eventName && topics[eventName]) {
		for (let i = 0; i < topics[eventName].length; i++) {
			if (streamId === topics[eventName][i].streamId && id === topics[eventName][i].id) {
				topics[eventName].splice(i, 1);

				return;
			}
		}
	} else if (!eventName) {
		// remove all events with id and ids that are matching it (ie. for 0.1 remove 0.1, 0.1.0, 0.1.1, etc.)
		for (let topicName in topics) {
			if (topics.hasOwnProperty(topicName)) {
				for (let i = 0; i < topics[topicName].length; i++) {
					if (topics[topicName][i].streamId && isMatching(splitId, topics[topicName][i].id.split(INDEX_SEPARATOR), true) && !topics[topicName][i].isNewlyInserted) {
						topics[topicName].splice(i, 1);

						i--;
					}
				}
			}
		}
	}
}
