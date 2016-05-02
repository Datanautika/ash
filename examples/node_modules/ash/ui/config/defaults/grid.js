"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var grid = {
	baselineHeight: 28,
	columns: 12,
	baselineToGutterRatio: 2
};

grid.gutterWidth = grid.baselineToGutterRatio * grid.baselineHeight;

exports.default = grid;