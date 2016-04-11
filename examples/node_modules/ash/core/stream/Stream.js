'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isFunction = require('../internals/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var trueFn = function trueFn() {
	return true;
};
var streamsToUpdate = [];
var inStream = undefined;
var flushing = false;
var order = [];
var nextOrderIndex = -1;

/**
 * Finds stream dependencies.
 *
 * @param {Stream} stream
 */
function findDependencies(stream) {
	if (stream.__isQueued === false) {
		stream.__isQueued = true;

		for (var i = 0; i < stream.__listeners.length; ++i) {
			findDependencies(stream.__listeners[i]);
		}

		order[++nextOrderIndex] = stream;
	}
}

/**
 * Detaches stream dependencies.
 *
 * @param {Stream} stream
 */
function detachDependencies(stream) {
	for (var i = 0; i < stream.__dependencies.length; ++i) {
		stream.__dependencies[i].__listeners[stream.__dependencies[i].__listeners.indexOf(stream)] = stream.__dependencies[i].__listeners[stream.__dependencies[i].__listeners.length - 1];
		stream.__dependencies[i].__listeners.length--;
	}

	stream.__dependencies.length = 0;
}

/**
 * Flushes update.
 */
function flushUpdate() {
	flushing = true;

	while (streamsToUpdate.length) {
		var stream = streamsToUpdate.shift();

		if (stream.__values.length > 0) {
			stream.value = stream.__values.shift();
		}

		updateDependencies(stream);
	}

	flushing = false;
}

/**
 * Updates stream.
 *
 * @param {Stream} stream
 */
function updateStream(stream) {
	var dependenciesMet = true;

	for (var i = 0; i < stream.__dependencies.length; i++) {
		if (!stream.__dependencies[i].hasValue) {
			dependenciesMet = false;

			break;
		}
	}

	if (!stream.__dependenciesMet && !dependenciesMet || stream.end && stream.end.value === true) {
		return;
	}

	if (inStream) {
		streamsToUpdate.push(stream);
	} else {
		inStream = stream;

		var returnValue = stream.fn.apply(stream, _toConsumableArray(stream.__dependencies).concat([stream, stream.__changedDependencies]));

		if (returnValue !== undefined) {
			stream.push(returnValue);
		}

		inStream = undefined;

		if (stream.__changedDependencies !== undefined) {
			stream.__changedDependencies = [];
		}

		stream.__shouldUpdate = false;

		if (flushing === false) {
			flushUpdate();
		}
	}
}

/**
 * Updates dependencies.
 *
 * @param {Stream} stream
 */
function updateDependencies(stream) {
	for (var i = 0; i < stream.__listeners.length; ++i) {
		if (stream.__listeners[i].end === stream) {
			if (stream.__listeners[i].__dependencies) {
				detachDependencies(stream.__listeners[i]);
			}

			if (stream.__listeners[i].end) {
				detachDependencies(stream.__listeners[i].end);
			}
		} else {
			if (stream.__listeners[i].__changedDependencies != null) {
				stream.__listeners[i].__changedDependencies.push(stream);
			}

			stream.__listeners[i].__shouldUpdate = true;

			findDependencies(stream.__listeners[i]);
		}
	}

	for (; nextOrderIndex >= 0; --nextOrderIndex) {
		if (order[nextOrderIndex].__shouldUpdate === true) {
			updateStream(order[nextOrderIndex]);
		}

		order[nextOrderIndex].__isQueued = false;
	}
}

/**
 * Stream class.
 */

var Stream = function () {

	/**
  * Creates a stream, with initial value of `value`.
  *
  * @param {?*} value
  * @returns {Stream}
  */

	function Stream(value) {
		_classCallCheck(this, Stream);

		this.hasValue = false;
		this.value = undefined;
		this.__values = [];
		this.__listeners = [];
		this.__isQueued = false;
		this.end = null;
		this.fn = null;
		this.__dependencies = [];
		this.__dependenciesMet = false;
		this.__changedDependencies = null;
		this.__shouldUpdate = false;
		this.isEndStream = false;

		this.push = this.push.bind(this);

		if (value === trueFn) {
			this.fn = value;
			this.isEndStream = true;
		} else {
			this.end = new Stream(trueFn);
			this.end.__listeners.push(this);

			if (arguments.length === 1) {
				this.push(value);
			}
		}

		return this;
	}

	/**
  * Sets up stream's dependencies. Only the last passed functino will be used as stream's function.
  * Stream's body function is called with following parameters: stream's dependencies, reference to the stream itself, and an array of changed dependencies.
  * This functon is only called when all dependencies have value. Returned value - anything but `undefined` - will trigger an update. To trigger on undefined, update directly with `push` method.
  *
  * @param {...(Function|Stream)}
  * @returns {this}
  *
  * @example
  * let stream1 = new ash.Stream();
  * let stream2 = new ash.Stream();
  * let stream3 = new ash.Stream();
  * let stream4 = new ash.Stream();
  *
  * stream3.combine((stream1Dependency, stream2Dependency, self, changed) => stream1Dependency.get() + stream2Dependency.get(), stream1, stream2);
  * stream4.combine((stream3Dependency, self, changed) => {
  * 	self.push(stream3Dependency.get() * 2);
  * }, stream3);
  *
  * stream1.push(2);
  * stream2.push(3);
  * stream3.get(); // -> 5
  * stream4.get(); // -> 10
  */

	_createClass(Stream, [{
		key: 'combine',
		value: function combine() /*...dependencies*/{
			detachDependencies(this);
			detachDependencies(this.end);

			var dependencies = [];
			var endStreams = [];

			for (var i = 0; i < arguments.length; i++) {
				if (arguments[i] instanceof Stream) {
					dependencies.push(arguments[i]);

					if (arguments[i].end) {
						endStreams.push(arguments[i].end);
					}
				} else if ((0, _isFunction2.default)(arguments[i])) {
					this.fn = arguments[i];
				}
			}

			if (dependencies.length) {
				// add listeners to stream
				this.__dependencies = dependencies;
				this.__changedDependencies = [];

				for (var _i = 0; _i < this.__dependencies.length; _i++) {
					this.__dependencies[_i].__listeners.push(this);
				}

				// add listeners to end stream
				this.end.__dependencies = endStreams;

				for (var _i2 = 0; _i2 < endStreams.length; _i2++) {
					endStreams[_i2].__listeners.push(this.end);
				}

				updateStream(this);
			}

			return this;
		}

		/**
   * Creates new dependent stream.
   *
   * @param {...(Function|Stream)}
   * @returns {Stream}
   *
   * @example
   * let newStream = ash.combine((oldStreamDependency) => oldStreamDependency.get() * 2, oldStreamDependency);
   *
   * // same as
   * let newStream = new ash.Stream();
   *
   * newStream.combine((oldStreamDependency) => oldStreamDependency.get() * 2, oldStreamDependency);
   */

	}, {
		key: 'get',

		/**
   * Returns current value of stream.
   *
   * @returns {*}
   */
		value: function get() {
			return this.value;
		}

		/**
   * Pushes `value` to the stream. If `value` is a `Promise` instance, it will be resolved first.
   * Method is always bound to the stream instance.
   *
   * @param {*} value
   * @returns {this}
   */

	}, {
		key: 'push',
		value: function push(value) {
			if (value !== undefined && value !== null && (0, _isFunction2.default)(value.then)) {
				value.then(this.push).then(undefined, this.push);

				return this;
			}

			this.value = value;
			this.hasValue = true;

			if (!inStream) {
				flushing = true;

				updateDependencies(this);

				if (streamsToUpdate.length > 0) {
					flushUpdate();
				} else {
					flushing = false;
				}
			} else if (inStream === this) {
				// mark listeners
				for (var i = 0; i < this.__listeners.length; ++i) {
					if (this.__listeners[i].end !== this) {
						if (this.__listeners[i].__changedDependencies != null) {
							this.__listeners[i].__changedDependencies.push(this);
						}
						this.__listeners[i].__shouldUpdate = true;
					} else {
						if (this.__listeners[i].__dependencies) {
							detachDependencies(this.__listeners[i]);
						}

						if (this.__listeners[i].end) {
							detachDependencies(this.__listeners[i].end);
						}
					}
				}
			} else {
				this.__values.push(value);
				streamsToUpdate.push(this);
			}

			return this;
		}

		/**
   * Changes end stream.
   *
   * @param {Stream}
   * @returns {this}
   */

	}, {
		key: 'endsOn',
		value: function endsOn(endStream) {
			detachDependencies(this.end);
			endStream.__listeners.push(this.end);
			this.end.__dependencies.push(endStream);

			return this;
		}

		/**
   * Returns `true` if `value` is an instance of `Stream`.
   *
   * @param {*} value
   * @returns {boolean}
   */

	}, {
		key: 'toString',
		value: function toString() {
			return 'stream(' + this.value + ')';
		}

		/**
   * Creates new stream consisting of values returned by the function `fn` called with values from `stream`.
   *
   * @param {Function} fn
   * @param {Stream} stream
   * @returns {Stream}
   */

	}, {
		key: 'map',

		/**
   * Creates new stream consisting of values returned by the function `fn` called with values from stream instance.
   *
   * @param {Function} fn
   * @returns {Stream}
   */
		value: function map(fn) {
			return Stream.map(fn, this);
		}

		/**
   * Similar to `map`, but the returned stream is empty and is not updated.
   *
   * @param {Function} fn
   * @returns {Stream}
   */

	}, {
		key: 'on',
		value: function on(fn) {
			return Stream.on(fn, this);
		}

		/**
   * Similar to `on`, but the `fn` isn't called if `stream` already has value; only values pushed to `stream` after the `subscribe` was called are relevant.
   *
   * @param {Function} fn
   * @returns {Stream}
   */

	}, {
		key: 'subscribe',
		value: function subscribe(fn) {
			return Stream.subscribe(fn, this);
		}

		/**
   * Immediately calls stream's body function, even if all dependencies don't have values yet.
   *
   * @returns {this}
   */

	}, {
		key: 'immediate',
		value: function immediate() {
			if (!this.__dependenciesMet) {
				this.__dependenciesMet = true;

				updateStream(this);
			}

			return this;
		}

		/**
   * Creates new stream consisting of values from both `stream1` and `stream2`.
   *
   * @param {Stream} stream1
   * @param {Stream} stream2
   * @returns {Stream}
   */

	}, {
		key: 'ap',

		/**
   * Creates new stream consisting of values which are results of applying function from stream instance to the values of `stream`.
   *
   * @param {Stream} stream
   * @returns {Stream}
   */
		value: function ap(stream) {
			var _this = this;

			var newStream = new Stream();

			newStream.combine(function (dependencyStream1, dependencyStream2, self) {
				self.push(_this.value(stream.value));
			}, this, stream);

			return newStream;
		}
	}], [{
		key: 'combine',
		value: function combine() {
			var newStream = new Stream();

			newStream.combine.apply(newStream, arguments);

			return newStream;
		}
	}, {
		key: 'isStream',
		value: function isStream(value) {
			return value instanceof Stream;
		}
	}, {
		key: 'map',
		value: function map(fn, stream) {
			var newStream = new Stream();

			newStream.combine(function (streamDependency, self) {
				self.push(fn(streamDependency.value));
			}, stream);

			return newStream;
		}

		/**
   * Similar to `map`, but the returned stream is empty and is not updated.
   *
   * @param {Function} fn
   * @param {Stream} stream
   * @returns {Stream}
   */

	}, {
		key: 'on',
		value: function on(fn, stream) {
			var newStream = new Stream();

			newStream.combine(function (streamDependency) {
				fn(streamDependency.value);
			}, stream);

			return newStream;
		}

		/**
   * Similar to `on`, but the `fn` isn't called if `stream` already has value; only values pushed to `stream` after the `subscribe` was called are relevant.
   *
   * @param {Function} fn
   * @param {Stream} stream
   * @returns {Stream}
   */

	}, {
		key: 'subscribe',
		value: function subscribe(fn, stream) {
			var omitFirstRun = stream.hasValue;
			var hasRun = false;
			var newStream = new Stream();

			newStream.combine(function (dependency) {
				if (hasRun || !omitFirstRun && !hasRun) {
					fn(dependency.value);
				}

				hasRun = true;
			}, stream);

			return newStream;
		}
	}, {
		key: 'merge',
		value: function merge(stream1, stream2) {
			var newStream = new Stream();

			newStream.combine(function (dependencyStream1, dependencyStream2, self, changed) {
				if (changed[0]) {
					self.push(changed[0].get());
				} else if (dependencyStream1.hasValue) {
					self.push(dependencyStream1.value);
				} else if (dependencyStream2.hasValue) {
					self.push(dependencyStream2.value);
				}
			}, stream1, stream2).immediate();

			var endStream = new Stream();

			endStream.combine(function () {
				return true;
			}, stream1.end, stream2.end);
			newStream.endsOn(endStream);

			return newStream;
		}
	}]);

	return Stream;
}();

exports.default = Stream;