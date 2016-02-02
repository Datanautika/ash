'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flattenTree;
/**
 * Walks tree for flattening.
 *
 * @param {Object} tree
 * @param {Object} list
 * @param {string} parent
 * @param {boolean} convertToString
 */
function walkFlattenTree(tree, list, parent, convertToString) {
  for (var property in tree) {
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
function flattenTree(tree) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var valuesToString = _ref.valuesToString;

  var list = {};

  walkFlattenTree(tree, list, '', !!valuesToString);

  return list;
}