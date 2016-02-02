import stringifyAshNodeTree from './stringifyAshNodeTree';
import createAshNodeTree from '../view/createAshNodeTree';


/**
 * Returns Promise resolving to string with html representation of view stream.
 *
 * @param {ViewStream} viewStream
 * @returns {Promise}
 */
export default function stringifyViewStream(viewStream) {
	return new Promise((resolve) => {
		viewStream.on((ashElementTree) => {
			resolve(stringifyAshNodeTree(createAshNodeTree(ashElementTree)));
		});
	});
}
