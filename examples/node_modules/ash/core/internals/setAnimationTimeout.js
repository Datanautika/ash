"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var setAnimationTimeout = undefined;

if (global.requestAnimationFrame) {
	setAnimationTimeout = global.requestAnimationFrame;
} else if (global.setImmediate) {
	setAnimationTimeout = global.setImmediate;
} else {
	setAnimationTimeout = function setAnimationTimeout(callback) {
		global.setTimeout(callback, 0);
	};
}

exports.default = setAnimationTimeout;