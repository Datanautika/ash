'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var grid = {
	baselineHeight: 28,
	columns: 12,
	baselineToGutterRatio: 2,
	breakpoints: {
		base: [['1px', '100px'], ['101px', '200px'], ['201px', '300px'], ['301px', '400px'], ['401px', '500px'], ['501px', '600px'], ['601px', '700px'], ['701px', '800px'], ['801px', '900px'], ['901px', '1000px'], ['1001px', '1100px'], ['1101px', '1200px'], ['1201px', '1300px'], ['1301px', '1400px'], ['1401px', '1500px'], ['1501px', '1600px'], ['1601px', '1700px'], ['1701px', '1800px'], ['1801px', '1900px'], ['1901px', '2000px'], ['2001px', '9999px']],
		devices: [['1px', '320px'], ['321px', '480px'], ['481px', '640px'], ['641px', '768px'], ['769px', '800px'], ['801px', '853px'], ['854px', '1024px'], ['1025px', '1280px'], ['1281px', '1366px'], ['1367px', '1440px'], ['1441px', '1600px'], ['1601px', '1920px'], ['1921px', '2560px'], ['2561px', '9999px']]
	}
};

grid.gutterWidth = grid.baselineToGutterRatio * grid.baselineHeight;

exports.default = grid;