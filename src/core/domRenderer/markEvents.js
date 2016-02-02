import topics from './events';


/**
 * Cleans up events' reindexing helper properties.
 *
 * @param {number} streamId
 */
export default function markEvents(streamId) {
	for (let topicName in topics) {
		if (topics.hasOwnProperty(topicName)) {
			for (let i = 0; i < topics[topicName].length; i++) {
				if (streamId === topics[topicName][i].streamId) {
					topics[topicName][i].isNewlyInserted = false;
					topics[topicName][i].isReindexed = {};
				}
			}
		}
	}
}
