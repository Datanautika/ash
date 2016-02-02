/**
 * Walks tree for flattening.
 *
 * @param {Object} tree
 * @param {Object} list
 * @param {string} parent
 * @param {boolean} convertToString
 */
function walkFlattenTree(tree, list, parent, convertToString) {
	for (let property in tree) {
		if (tree.hasOwnProperty(property)) {
			if (typeof tree[property] === 'object') {
				walkFlattenTree(tree[property], list, parent + property + '.', convertToString);
			} else {
				list[parent + property] = convertToString ? '' + tree[property] : tree[property];
			}
		}
	}
}

/**
 * Flattes tree object, ie. object with objects as properties, into single-level object.
 * Property names are separated byt dot.
 *
 * @param {Object} tree
 * @param {Object} options.valuesToString
 * @returns {Object}
 *
 * @example
 * ash.flattenTree({foo: {bar: 42}}); // -> {'foo.bar': 42}
 */
export default function flattenTree(tree, {valuesToString} = {}) {
	let list = {};

	walkFlattenTree(tree, list, '', !!valuesToString);

	return list;
}
