/* eslint-disable no-magic-numbers */

import '../examples/dist/compat/internals/cssModules';

import assert from 'assert';
import ash from '../examples/node_modules/ash';
import Promise from 'bluebird';


describe('ash.Stream', () => {
	it('can be set with initial value', () => {
		let num = new ash.Stream(12);

		assert.equal(num.get(), 12);
	});

	it('can be set', () => {
		let stream = new ash.Stream();

		stream.push(23);

		assert.equal(stream.get(), 23);

		stream.push(3);

		assert.equal(stream.get(), 3);
	});

	it('setting a stream returns the stream', () => {
		let stream = new ash.Stream();

		assert.equal(stream, stream.push(23));
	});

	it('updates dependencies', () => {
		let x = new ash.Stream(3);
		let x2 = new ash.Stream();

		x2.combine(x, () => x.get() * 2);

		assert.equal(x2.get(), x.get() * 2);
	});

	it('can set result by returning value', () => {
		let stream1 = new ash.Stream(3);
		let stream2 = new ash.Stream(4);
		let sumStream = new ash.Stream();

		sumStream.combine(() => stream1.get() + stream2.get(), stream1, stream2);

		assert.equal(sumStream.get(), stream1.get() + stream2.get());
	});

	it('is updated when dependencies change', () => {
		let stream1 = new ash.Stream(3);
		let stream2 = new ash.Stream(4);
		let sumStream = new ash.Stream();

		sumStream.combine(() => stream1.get() + stream2.get(), stream1, stream2);

		assert.equal(sumStream.get(), stream1.get() + stream2.get()); // -> 7

		stream1.push(12);

		assert.equal(sumStream.get(), stream1.get() + stream2.get()); // -> 16

		stream2.push(8);

		assert.equal(sumStream.get(), stream1.get() + stream2.get()); // -> 20
	});

	it('can set result by calling callback', () => {
		let stream1 = new ash.Stream(3);
		let stream2 = new ash.Stream(4);
		let sumStream = new ash.Stream();

		sumStream.combine((dep1, dep2, stream) => {
			stream.push(stream1.get() + stream2.get());
		}, stream1, stream2);

		let times = 0;
		let timesStream = new ash.Stream();

		timesStream.combine(() => {
			times++;
		}, sumStream);

		assert.equal(sumStream.get(), stream1.get() + stream2.get()); // -> 7

		stream1.push(12);

		assert.equal(sumStream.get(), stream1.get() + stream2.get()); // -> 16

		stream2.push(8);

		assert.equal(sumStream.get(), stream1.get() + stream2.get()); // -> 20
		assert.equal(times, 3);
	});

	it('is not called until dependencies have value', () => {
		let stream1 = new ash.Stream();
		let stream2 = new ash.Stream();
		let called = 0;
		let sumStream = new ash.Stream();

		sumStream.combine(() => {
			called++;

			return stream1.get() + stream2.get();
		}, stream1, stream2);

		stream1.push(2);
		stream1.push(1);
		stream2.push(2);
		stream2.push(4);
		stream1.push(2);

		assert.equal(called, 3);
	});
	
	it('streams can lead into other streams', () => {
		let stream1 = new ash.Stream(3);
		let stream2 = new ash.Stream(4);
		let sumStream = new ash.Stream();
		let doubleSumStream = new ash.Stream();
		let sumPlusDoubleSumStream = new ash.Stream();

		sumStream.combine(() => stream1.get() + stream2.get(), stream1, stream2);
		doubleSumStream.combine(() => sumStream.get() * 2, sumStream);
		sumPlusDoubleSumStream.combine(() => doubleSumStream.get() + sumStream.get(), doubleSumStream, sumStream);

		stream1.push(12);

		assert.equal(sumPlusDoubleSumStream.get(), sumStream.get() * 3);

		stream2.push(3);

		assert.equal(sumPlusDoubleSumStream.get(), sumStream.get() * 3);

		stream1.push(2);

		assert.equal(sumPlusDoubleSumStream.get(), sumStream.get() * 3);
		assert.equal(sumPlusDoubleSumStream.get(), (2 + 3) * 3);
	});

	it('stream dependencies can be changed', () => {
		let result = [];
		let stream1 = new ash.Stream();
		let stream2 = new ash.Stream();
		let stream3 = new ash.Stream();
		let stream4 = new ash.Stream();

		stream3.combine(() => stream1.get(), stream1);
		stream4.combine(() => {
			result.push(stream3.get());
		}, stream3);

		stream1.push(11);

		stream3.combine(() => stream2.get(), stream2);

		stream1.push(12);
		stream2.push(21);

		stream3.combine(() => stream1.get(), stream1);

		stream1.push(13);
		stream2.push(22);

		assert.deepEqual(result, [11, 21, 13]);
	});

	it('stream dependencies can be injected later', () => {
		let stream2 = new ash.Stream();
		let stream1 = new ash.Stream();

		stream1.combine(() => stream2.get() * 2);

		stream1.combine(stream2);

		stream2.push(1);

		assert.equal(stream1.get(), 2);
	});

	it('can get its own value', () => {
		let num = new ash.Stream(0);
		let sum = new ash.Stream();

		sum.combine((dep1, stream) => (stream.get() || 0) + num.get(), num);

		num.push(2).push(3).push(8).push(7);

		assert.equal(sum.get(), 20);
	});

	it('is called with changed streams', () => {
		let s1 = new ash.Stream(0);
		let s2 = new ash.Stream(0);
		let result = [];
		let dependend = new ash.Stream();

		dependend.combine((dep1, dep2, self, changed) => {
			if (changed[0] === s1) {
				result.push(1);
			}

			if (changed[0] === s2) {
				result.push(2);
			}
		}, s1, s2);

		s1.push(1);
		s2.push(1);
		s2.push(1);
		s1.push(1);
		s2.push(1);
		s1.push(1);

		assert.deepEqual(result, [1, 2, 2, 1, 2, 1]);
	});

	it('should call dependent streams with dependencies', () => {
		let a = new ash.Stream();
		let b = new ash.Stream(0);
		let collect = (x, y, self) => (self.get() || []).concat([x.get(), y.get()]);
		let history = new ash.Stream();

		history.combine(collect, a, b);

		a.push(1).push(2); // -> [1, 0, 2, 0]
		b.push(3); // -> [1, 0, 2, 0, 2, 3]
		a.push(4); // -> [1, 0, 2, 0, 2, 3, 4, 3]

		assert.deepEqual(history.get(), [
			1, 0, 2, 0, 2, 3, 4, 3
		]);
	});

	it('handles dependencies when streams are triggered in streams', () => {
		let x = new ash.Stream(4);
		let y = new ash.Stream(3);
		let z = new ash.Stream(1);
		let doubleX = new ash.Stream();
		let setAndSum = new ash.Stream();

		doubleX.combine(() => x.get() * 2, x);
		setAndSum.combine(() => {
			x.push(3);

			return z.get() + y.get();
		}, y, z);

		z.push(4);

		assert.equal(setAndSum.get(), 7);
	});

	it('executes to the end before handlers are triggered', () => {
		let order = [];
		let x = new ash.Stream(4);
		let y = new ash.Stream(3);
		let doubleX = new ash.Stream();
		let setAndY = new ash.Stream();

		doubleX.combine(() => {
			if (x.get() === 3) {
				order.push(2);
			}

			return x.get() * 2;
		}, x);

		setAndY.combine(() => {
			x.push(3);
			order.push(1);

			return y.get();
		}, y);

		assert.deepEqual(order, [1, 2]);
	});
	
	it('with static deps executes to the end', () => {
		let order = [];
		let x = new ash.Stream(4);
		let y = new ash.Stream(3);
		let doubleX = new ash.Stream();
		let setAndY = new ash.Stream();

		doubleX.combine(() => {
			if (x.get() === 3) {
				order.push(2);
			}

			return x.get() * 2;
		}, x);

		setAndY.combine(() => {
			x.push(3);
			order.push(1);

			return y.get();
		}, y);

		assert.equal(order[0], 1);
		assert.equal(order[1], 2);
	});

	it('let\'s explicit `undefined` flow down streams', () => {
		let result = [];
		let s1 = new ash.Stream(undefined);
		
		s1.map((value) => {
			result.push(value);
		});

		s1.push(2).push(undefined);

		assert.deepEqual(result, [undefined, 2, undefined]);
	});

	it('handles a null floating down the stream', () => {
		let s1 = new ash.Stream();

		s1.push(null);
	});
	
	it('can typecheck', () => {
		let s1 = new ash.Stream();
		let s2 = new ash.Stream(null);
		let s3 = new ash.Stream();
		let f = () => undefined;

		assert(ash.Stream.isStream(s1));
		assert(ash.Stream.isStream(s2));
		assert(ash.Stream.isStream(s3));
		assert(!ash.Stream.isStream(f));
	});
	
	it('has pretty string representation', () => {
		let ns = new ash.Stream(1);
		let ss = new ash.Stream('hello');
		let os = new ash.Stream({});

		assert.deepEqual('' + ns, 'stream(1)');
		assert.deepEqual('' + ss, 'stream(hello)');
		assert.deepEqual('' + os, 'stream([object Object])');
	});

	it('can filter values', () => {
		let result = [];
		let n = new ash.Stream(0);
		let lrg5 = new ash.Stream();

		lrg5.combine(() => {
			if (n.get() > 5) {
				return n.get();
			}
		}, n);

		lrg5.map((value) => {
			result.push(value);
		});

		n.push(4).push(6).push(2).push(8).push(3).push(4);

		assert.deepEqual(result, [6, 8]);
	});

	describe('from static method', () => {
		it('works', () => {
			let result = [];
			let stream = new ash.Stream(1);
			
			ash.Stream.combine(() => {
				result.push(stream.get());
			}, stream);
			stream.push(2).push(undefined).push('foo');

			assert.deepEqual(result, [1, 2, undefined, 'foo']);
		});
	});

	describe('ending a stream', () => {
		it('works for streams without dependencies', () => {
			let s = new ash.Stream(1);

			s.end.push(true);

			assert(s.end.get());
			assert(s.end.get());
		});

		it('detaches it from dependencies', () => {
			let x = new ash.Stream(3);
			let y = new ash.Stream(2);
			let sum = new ash.Stream();

			sum.combine(() => y.get() * x.get(), y, x);

			assert.equal(y.__listeners.length, 1);
			assert.equal(x.__listeners.length, 1);

			sum.end.push(true);

			assert.equal(y.__listeners.length, 0);
			assert.equal(x.__listeners.length, 0);
			assert(sum.end.get());
		});

		it('ends its dependents', () => {
			let x = new ash.Stream(3);
			let y = new ash.Stream();
			let z = new ash.Stream();

			y.combine(() => 2 * x.get(), x);
			z.combine(() => 2 * y.get(), y);

			assert.equal(z.get(), x.get() * 2 * 2);

			x.end.push(true);

			assert(x.end.get());
			assert.equal(x.__listeners.length, 0);
			assert(y.end.get());
			assert.equal(y.__listeners.length, 0);
			assert(z.end.get());
		});

		it('updates children if stream ends after recieving value', () => {
			let x = new ash.Stream(3);
			let whenX2 = new ash.Stream();
			let y = new ash.Stream();
			let z = new ash.Stream();

			whenX2.combine(() => {
				if (x.get() === 0) {
					return true;
				}
			}, x);
			y.combine(() => x.get(), x);
			z.combine(() => y.get(), y);

			y.endsOn(whenX2);

			assert.equal(y.get(), z.get());

			x.push(2);

			assert.equal(y.get(), z.get());
			assert(!y.end.get());
			assert(!z.end.get());

			x.push(0);

			assert.equal(x.__listeners.length, 1);
			assert(y.end.get());
			assert.equal(y.__listeners.length, 0);
			assert(z.end.get());
			assert.equal(2, y.get());
			assert.equal(2, z.get());
		});
		
		it('works if end stream has initial value', () => {
			let killer = new ash.Stream(true);
			let x = new ash.Stream(1);
			let y = new ash.Stream();

			y.combine(() => 2 * x.get(), x);

			y.endsOn(killer);
			x.push(2);

			assert.equal(undefined, y.end.get());
			assert.equal(2 * x.get(), y.get());
		});

		it('end stream does not have value even if base stream has initial value', () => {
			let killer = new ash.Stream(true);
			let x = new ash.Stream(1);
			let y = new ash.Stream();

			y.combine(() => 2 * x.get(), x);

			y.endsOn(killer);

			assert.equal(false, y.end.hasValue);
		});

		it('ends stream can be changed without affecting listeners', () => {
			let killer1 = new ash.Stream();
			let killer2 = new ash.Stream();
			let ended = false;
			let x = new ash.Stream(1);
			let y = new ash.Stream();

			y.combine(() => 2 * x.get(), x);

			y.endsOn(killer1);
			y.end.map(() => {
				ended = true;
			});
			y.endsOn(killer2);
			killer2.push(true);

			assert(ended);
		});

		it('end stream can be set on top level stream', () => {
			let killer = new ash.Stream();
			let s = new ash.Stream(1);

			s.endsOn(killer);

			assert.notEqual(s.end.get(), true);
			
			killer.push(true);

			assert.equal(s.end.get(), true);
		});
	});

	describe('promise integration', () => {
		it('pushes result of promise down the stream', (done) => {
			let s = new ash.Stream();
			let result = new ash.Stream();

			result.combine(() => {
				assert.equal(s.get(), 12);
				done();
			}, s);

			s.push(Promise.resolve(12));

		});

		it('recursively unpacks promise', (done) => {
			let s = new ash.Stream();
			let result = new ash.Stream();

			result.combine(() => {
				assert.equal(s.get(), 12);
				done();
			}, s);

			s.push(new Promise((resolve1) => {
				setTimeout(() => {
					resolve1(new Promise((resolve2) => {
						setTimeout(resolve2.bind(null, 12));
					}));
				}, 20);
			}));
		});
	});

	describe('on', () => {
		it('is invoked when stream changes', () => {
			let s = new ash.Stream();
			let result = [];
			let f = (value) => { result.push(value); };

			ash.Stream.on(f, s);

			s.push(1).push(2);
			
			assert.deepEqual(result, [1, 2]);
		});
	});

	describe('map', () => {
		it('maps a function', () => {
			let x = new ash.Stream(3);
			let doubleX = x.map((v) => 2 * v);

			assert.equal(doubleX.get(), 6);
			
			x.push(1);

			assert.equal(doubleX.get(), 2);
		});

		it('maps a function', () => {
			let x = new ash.Stream(3);
			let doubleX = x.map((v) => 2 * v);

			assert.equal(doubleX.get(), 6);
			
			x.push(1);

			assert.equal(doubleX.get(), 2);
		});

		it('handles function returning undefined', () => {
			let x = new ash.Stream(1);
			let maybeDoubleX = x.map((v) => v > 3 ? 2 * v : undefined);

			assert.equal(undefined, maybeDoubleX.get());
			assert.equal(true, maybeDoubleX.hasValue);
			
			x.push(4);

			assert.equal(8, maybeDoubleX.get());
		});

		/*it('is curried', () => {
			let x = stream(3);
			let doubler = flyd.map(function(x) { return 2*x; });
			let quadroX = doubler(doubler(x));
			assert.equal(quadroX(), 12);
			x(2);
			assert.equal(quadroX(), 8);
		});*/

		it('returns equivalent stream when mapping identity', () => {
			let x = new ash.Stream(3);
			let x2 = x.map((a) => a);

			assert.equal(x2.get(), x.get());
			
			x.push('foo');

			assert.equal(x2.get(), x.get());
		});

		it('is compositive', () => {
			let f = (v) => v * 2;
			let g = (v) => v + 4;
			let x = new ash.Stream(3);
			let s1 = x.map(g).map(f);
			let s2 = x.map((v) => f(g(v)));

			assert.equal(s1.get(), s2.get());
			
			x.push(12);

			assert.equal(s1.get(), s2.get());
		});
	});
	
	describe('merge', () => {
		it('can sum streams of integers', () => {
			let result = [];
			let s1 = new ash.Stream();
			let s2 = new ash.Stream();
			let merged = ash.Stream.merge(s1, s2);
			let s3 = new ash.Stream();

			s3.combine(() => {
				result.push(merged.get());
			}, merged);

			s1.push(12).push(2);
			s2.push(4).push(44);
			s1.push(1);
			s2.push(12).push(2);

			assert.deepEqual(result, [12, 2, 4, 44, 1, 12, 2]);
		});

		/*it('is curried', function() {
			let result = [];
			let s1 = stream();
			let mergeWithS1 = flyd.merge(s1);
			let s2 = stream();
			s1and2 = mergeWithS1(s2);
			flyd.map(function(v) { result.push(v); }, s1and2);
			s1(12)(2); s2(4)(44); s1(1); s2(12)(2);
			assert.deepEqual(result, [12, 2, 4, 44, 1, 12, 2]);
		});*/

		it('ends only when both merged streams have ended', () => {
			let result = [];
			let s1 = new ash.Stream();
			let s2 = new ash.Stream();
			let s1and2 = ash.Stream.merge(s1, s2);
			
			s1and2.map((v) => {
				result.push(v);
			});

			s1.push(12).push(2);
			s2.push(4).push(44);
			s1.push(1);

			s1.end.push(true);

			assert(!s1and2.end.get());

			s2.push(12).push(2);
			s2.end.push(true);

			assert(s1and2.end.get());

			assert.deepEqual(result, [12, 2, 4, 44, 1, 12, 2]);
		});
	});

	describe('ap', () => {
		it('applies functions in stream', () => {
			let a = new ash.Stream((x) => 2 * x);
			let v = new ash.Stream(3);
			let s = a.ap(v);

			assert.equal(s.get(), 6);
			
			a.push((x) => x / 3);
			
			assert.equal(s.get(), 1);
			
			v.push(9);
			
			assert.equal(s.get(), 3);
		});
		
		it('is compositive', () => {
			let a = new ash.Stream((x) => x * 2);
			let u = new ash.Stream((x) => x + 5);
			let v = new ash.Stream(8);
			let s1 = a.map((f) => (g) => (x) => f(g(x))).ap(u).ap(v);
			let s2 = a.ap(u.ap(v));

			assert.equal(s1.get(), 26);
			assert.equal(s2.get(), 26);

			a.push((x) => x * 4);

			assert.equal(s1.get(), 52);
			assert.equal(s2.get(), 52);

			u.push((x) => x / 8);

			assert.equal(s1.get(), 4);
			assert.equal(s2.get(), 4);

			v.push(24);

			assert.equal(s1.get(), 12);
			assert.equal(s2.get(), 12);
		});

		/*it('supports neat ap pattern', () => {
			let result = [];
			let sumThree = ramda.curryN(3, (x, y, z) => x + y + z);
			let s1 = new ash.Stream(0);
			let s2 = new ash.Stream(0);
			let s3 = new ash.Stream(0);
			let sum = s1.map(sumThree).ap(s2).ap(s3);
			let s4 = sum.map((v) => {
				result.push(v);
			});

			s1.push(3);
			s2.push(2);
			s3.push(5);

			assert.deepEqual(result, [0, 3, 5, 10]);
		});
		
		it('applies functions if streams have no initial value', () => {
			let result = [];
			let add = ramda.curryN(2, (x, y) => x + y);
			let numbers1 = new ash.Stream();
			let numbers2 = new ash.Stream();
			let addToNumbers1 = numbers1.map(add);
			let added = addToNumbers1.ap(numbers2);
			let s = added.map((n) => {
				result.push(n);
			});

			numbers1.push(3);
			numbers2.push(2);
			numbers1.push(4);

			assert.deepEqual(result, [5, 6]);
		});*/
	});

	describe('of', () => {
		/*it('returns a stream with the passed value', function() {
			let s1 = stream(2);
			let s2 = s1.of(3);
			assert.equal(s2(), 3);
		});

		it('has identity', function() {
			let a = stream();
			let id = function(a) { return a; };
			let v = stream(12);
			assert.equal(a.of(id).ap(v)(), v());
		});

		it('is homomorphic', function() {
			let a = stream(0);
			let f = function(x) { return 2*x; };
			let x = 12;
			assert.equal(a.of(f).ap(a.of(x))(), a.of(f(x))());
		});

		it('is interchangeable', function() {
			let y = 7;
			let a = stream();
			let u = stream()(function(x) { return 3*x; });
			assert.equal(u.ap(a.of(y))(), a.of(function(f) { return f(y); }).ap(u)());
		});*/

		it('can create dependent stream inside stream', () => {
			let one = new ash.Stream();

			ash.Stream.combine((dependencyOne, self) => {
				self.push(ash.Stream.combine(() => undefined));
			}, one);

			one.push(1);
		});

		it('can create immediate dependent stream inside stream', () => {
			let one = new ash.Stream();

			ash.Stream.combine((dependencyOne, self) => {
				self.push(ash.Stream.combine(() => undefined).immediate());
			}, one);

			one.push(1);
		});

		it('creating a stream inside a stream all dependencies are updated', () => {
			let result = [];
			let str = new ash.Stream();

			ash.Stream.map((x) => {
				result.push(x);
			}, str);

			ash.Stream.map(() => {
				// create a stream, the first dependant on `str` should still be updated
				ash.Stream.combine(() => undefined);
			}, str);

			str.push(1);
			str.push(2);
			str.push(3);

			assert.deepEqual(result, [1, 2, 3]);
		});
	});

	/*describe('transducer.js transducer support', () => {
		it('creates new stream with map applied', () => {
			let result = [];
			let s1 = new ash.Stream();
			let tx = transducers.map((x) => x * 3);
			let s2 = ash.Stream.transduce(tx, s1);
			let r = new ash.Stream();

			r.combine(() => { result.push(s2.get()); }, s2);

			s1.push(1).push(2).push(4).push(6);

			assert.deepEqual(result, [3, 6, 12, 18]);
		});

		it('creates new stream with filter applied', () => {
			let result = [];
			let s1 = new ash.Stream();
			let tx = transducers.compose(
				transducers.map((x) => x * 3),
				transducers.filter((x) => x % 2 === 0)
			);
			let s2 = ash.Stream.transduce(tx, s1);
			let r = new ash.Stream();

			r.combine(() => { result.push(s2.get()); }, s2);
			s1.push(1).push(2).push(3).push(4);

			assert.deepEqual(result, [6, 12]);
		});

		it('supports dedupe', () => {
			let result = [];
			let s1 = new ash.Stream();
			let tx = transducers.compose(
				transducers.map(function (x) { return x * 2; }),
				transducers.dedupe()
			);
			let s2 = ash.Stream.transduce(tx, s1);
			let r = new ash.Stream();

			r.combine(function () { result.push(s2.get()); }, s2);
			s1.push(1).push(1).push(2).push(3).push(3).push(3).push(4);

			assert.deepEqual(result, [2, 4, 6, 8]);
		});

		it('handles reduced stream and ends', () => {
			let result = [];
			let s1 = new ash.Stream();
			let tx = transducers.compose(
				transducers.map(function (x) { return x * 2; }),
				transducers.take(3)
			);
			let s2 = ash.Stream.transduce(tx, s1);
			let r = new ash.Stream();

			r.combine(function () { result.push(s2.get()); }, s2);
			s1.push(1).push(2);

			assert.notEqual(true, s2.end.get());

			s1.push(3);

			assert.equal(true, s2.end.get());

			s1.push(4);

			assert.deepEqual(result, [2, 4, 6]);
		});
	});*/

	/*describe('Ramda transducer support', () => {
		it('creates new stream with map applied', () => {
			let result = [];
			let s1 = new ash.Stream();
			let tx = ramda.map(function (x) { return x * 3; });
			let s2 = ash.Stream.transduce(tx, s1);
			let r = new ash.Stream();

			r.combine(function () { result.push(s2.get()); }, s2);
			s1.push(1).push(2).push(4).push(6);
			assert.deepEqual(result, [3, 6, 12, 18]);
		});

		it('creates new stream with filter applied', () => {
			let result = [];
			let s1 = new ash.Stream();
			let tx = ramda.pipe(
				ramda.map(function (x) { return x * 3; }),
				ramda.filter(function (x) { return x % 2 === 0; })
			);
			let s2 = ash.Stream.transduce(tx, s1);
			let r = new ash.Stream();

			r.combine(function () { result.push(s2.get()); }, s2);
			s1.push(1).push(2).push(3).push(4);

			assert.deepEqual(result, [6, 12]);
		});

		it('filters empty elements', () => {
			let result = [];
			let s1 = new ash.Stream();
			let s2 = ash.Stream.transduce(ramda.reject(ramda.isEmpty), s1);

			s2.map(function (v) { result.push(v); });
			s1.push('foo').push('').push('bar').push('').push('').push('!');

			assert.deepEqual(result, ['foo', 'bar', '!']);
		});

		it('supports dedupe', () => {
			let result = [];
			let s1 = new ash.Stream();
			let tx = ramda.compose(
				ramda.map(ramda.multiply(2)),
				ramda.dropRepeats()
			);
			let s2 = ash.Stream.transduce(tx, s1);
			let r = new ash.Stream();

			r.combine(function () { result.push(s2.get()); }, s2);
			s1.push(1).push(1).push(2).push(3).push(3).push(3).push(4);

			assert.deepEqual(result, [2, 4, 6, 8]);
		});
	});*/

	describe('atomic updates', () => {
		it('does atomic updates', () => {
			let result = [];
			let a = new ash.Stream(1);
			let b = new ash.Stream();
			let c = new ash.Stream();
			let d = new ash.Stream();

			b.combine(() => a.get() * 2, a);
			c.combine(() => a.get() + 4, a);
			d.combine(() => {
				result.push(b.get() + c.get());
			}, b, c);

			a.push(2);

			assert.deepEqual(result, [7, 10]);
		});

		it('does not glitch', () => {
			let result = [];
			let s1 = new ash.Stream(1);
			let s1x2 = s1.map((n) => n * 2);
			let s2 = new ash.Stream();
			let s1x4 = new ash.Stream();

			s2.combine(() => s1.get() + s1x2.get(), s1, s1x2);
			s1x4.combine(() => s1.get() + s2.get(), s1, s2);

			s1x4.map((n) => {
				result.push(n);
			});

			s1.push(2).push(3).push(4);
			
			assert.deepEqual(result, [4, 8, 12, 16]);
		});

		it('handles complex dependency graph', () => {
			let result = [];
			let a = new ash.Stream();
			let b = new ash.Stream();
			let c = new ash.Stream();
			let d = new ash.Stream();
			let e = new ash.Stream();

			b.combine(() => a.get() + 1, a);
			c.combine(() => a.get() + 2, a);
			d.combine(() => c.get() + 3, c);
			e.combine(() => b.get() + d.get(), b, d);
			e.map((v) => { result.push(v); }, e);
			a.push(1).push(5).push(11);

			assert.deepEqual(result, [8, 16, 28]);
		});

		it('handles another complex dependency graph', () => {
			let result = [];
			let a = new ash.Stream();
			let b = new ash.Stream();
			let c = new ash.Stream();
			let d = new ash.Stream();
			let e = new ash.Stream();

			b.combine(() => a.get() + 1, a);
			c.combine(() => a.get() + 2, a);
			d.combine(() => a.get() + 4, a);
			e.combine(() => b.get() + c.get() + d.get(), b, c, d);

			e.map((v) => { result.push(v); });

			a.push(1).push(2).push(3);

			assert.deepEqual(result, [10, 13, 16]);
		});

		it('is called with all changed dependencies', () => {
			let result = [];
			let a = new ash.Stream(0);
			let b = new ash.Stream();
			let c = new ash.Stream();

			b.combine(() => a.get() + 1, a);
			c.combine(() => a.get() + 2, a);

			let d = new ash.Stream(0);
			let e = new ash.Stream();
			let f = new ash.Stream();
			let g = new ash.Stream();
			let h = new ash.Stream();

			e.combine(() => d.get() + 4, d);
			f.combine(() => d.get() + 5, d);
			g.combine(() => d.get() + 6, d);
			h.combine((d1, d2, d3, d4, d5, d6, d7, self, changed) => {
				let vals = changed.map((s) => s.get());
				
				result.push(vals);
				
				return 1;
			}, a, b, c, d, e, f, g);

			a.push(1); d.push(2); a.push(3);

			assert.deepEqual(result, [
				[], [1, 3, 2], [2, 8, 7, 6], [3, 5, 4]
			]);
		});
	});
});
