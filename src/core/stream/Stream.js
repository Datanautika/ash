import isFunction from '../internals/isFunction';


let trueFn = () => true;
let streamsToUpdate = [];
let inStream;
let flushing = false;
let order = [];
let nextOrderIndex = -1;

/**
 * Finds stream dependencies.
 *
 * @param {Stream} stream
 */
function findDependencies(stream) {
	if (stream.__isQueued === false) {
		stream.__isQueued = true;

		for (let i = 0; i < stream.__listeners.length; ++i) {
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
	for (let i = 0; i < stream.__dependencies.length; ++i) {
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
		let stream = streamsToUpdate.shift();

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
	let dependenciesMet = true;

	for (let i = 0; i < stream.__dependencies.length; i++) {
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

		let returnValue = stream.fn(...stream.__dependencies, stream, stream.__changedDependencies);

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
	for (let i = 0; i < stream.__listeners.length; ++i) {
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
export default class Stream {
	hasValue = false;
	value = undefined;
	__values = [];
	__listeners = [];
	__isQueued = false;
	end = null;
	fn = null;
	__dependencies = [];
	__dependenciesMet = false;
	__changedDependencies = null;
	__shouldUpdate = false;
	isEndStream = false;

	/**
	 * Creates a stream, with initial value of `value`.
	 *
	 * @param {?*} value
	 * @returns {Stream}
	 */
	constructor(value) {
		this.push = ::this.push;

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
	combine(/*...dependencies*/) {
		detachDependencies(this);
		detachDependencies(this.end);

		let dependencies = [];
		let endStreams = [];

		for (let i = 0; i < arguments.length; i++) {
			if (arguments[i] instanceof Stream) {
				dependencies.push(arguments[i]);

				if (arguments[i].end) {
					endStreams.push(arguments[i].end);
				}
			} else if (isFunction(arguments[i])) {
				this.fn = arguments[i];
			}
		}

		if (dependencies.length) {
			// add listeners to stream
			this.__dependencies = dependencies;
			this.__changedDependencies = [];

			for (let i = 0; i < this.__dependencies.length; i++) {
				this.__dependencies[i].__listeners.push(this);
			}

			// add listeners to end stream
			this.end.__dependencies = endStreams;

			for (let i = 0; i < endStreams.length; i++) {
				endStreams[i].__listeners.push(this.end);
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
	static combine() {
		let newStream = new Stream();

		newStream.combine(...arguments);

		return newStream;
	}

	/**
	 * Returns current value of stream.
	 *
	 * @returns {*}
	 */
	get() {
		return this.value;
	}

	/**
	 * Pushes `value` to the stream. If `value` is a `Promise` instance, it will be resolved first.
	 * Method is always bound to the stream instance.
	 *
	 * @param {*} value
	 * @returns {this}
	 */
	push(value) {
		if (value !== undefined && value !== null && isFunction(value.then) && isFunction(value.catch)) {
			value.then(this.push).catch(this.push);
			
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
			for (let i = 0; i < this.__listeners.length; ++i) {
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
	endsOn(endStream) {
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
	static isStream(value) {
		return value instanceof Stream;
	}

	toString() {
		return 'stream(' + this.value + ')';
	}

	/**
	 * Creates new stream consisting of values returned by the function `fn` called with values from `stream`.
	 *
	 * @param {Function} fn
	 * @param {Stream} stream
	 * @returns {Stream}
	 */
	static map(fn, stream) {
		let newStream = new Stream();

		newStream.combine((streamDependency, self) => { self.push(fn(streamDependency.value)); }, stream);

		return newStream;
	}

	/**
	 * Similar to `map`, but the returned stream is empty and is not updated.
	 *
	 * @param {Function} fn
	 * @param {Stream} stream
	 * @returns {Stream}
	 */
	static on(fn, stream) {
		let newStream = new Stream();

		newStream.combine((streamDependency) => { fn(streamDependency.value); }, stream);

		return newStream;
	}

	/**
	 * Similar to `on`, but the `fn` isn't called if `stream` already has value; only values pushed to `stream` after the `subscribe` was called are relevant.
	 *
	 * @param {Function} fn
	 * @param {Stream} stream
	 * @returns {Stream}
	 */
	static subscribe(fn, stream) {
		let omitFirstRun = stream.hasValue;
		let hasRun = false;
		let newStream = new Stream();

		newStream.combine((dependency) => {
			if (hasRun || !omitFirstRun && !hasRun) {
				fn(dependency.value);
			}

			hasRun = true;
		}, stream);

		return newStream;
	}

	/**
	 * Creates new stream consisting of values returned by the function `fn` called with values from stream instance.
	 *
	 * @param {Function} fn
	 * @returns {Stream}
	 */
	map(fn) {
		return Stream.map(fn, this);
	}

	/**
	 * Similar to `map`, but the returned stream is empty and is not updated.
	 *
	 * @param {Function} fn
	 * @returns {Stream}
	 */
	on(fn) {
		return Stream.on(fn, this);
	}

	/**
	 * Similar to `on`, but the `fn` isn't called if `stream` already has value; only values pushed to `stream` after the `subscribe` was called are relevant.
	 *
	 * @param {Function} fn
	 * @returns {Stream}
	 */
	subscribe(fn) {
		return Stream.subscribe(fn, this);
	}

	/**
	 * Immediately calls stream's body function, even if all dependencies don't have values yet.
	 *
	 * @returns {this}
	 */
	immediate() {
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
	static merge(stream1, stream2) {
		let newStream = new Stream();

		newStream.combine((dependencyStream1, dependencyStream2, self, changed) => {
			if (changed[0]) {
				self.push(changed[0].get());
			} else if (dependencyStream1.hasValue) {
				self.push(dependencyStream1.value);
			} else if (dependencyStream2.hasValue) {
				self.push(dependencyStream2.value);
			}
		}, stream1, stream2).immediate();

		let endStream = new Stream();

		endStream.combine(() => true, stream1.end, stream2.end);
		newStream.endsOn(endStream);

		return newStream;
	}

	/**
	 * Creates new stream consisting of values which are results of applying function from stream instance to the values of `stream`.
	 *
	 * @param {Stream} stream
	 * @returns {Stream}
	 */
	ap(stream) {
		let newStream = new Stream();

		newStream.combine((dependencyStream1, dependencyStream2, self) => {
			self.push(this.value(stream.value));
		}, this, stream);

		return newStream;
	}
}
