/* eslint-disable no-sync */

import gulp from 'gulp';
import del from 'del';
import babel from 'gulp-babel';
import cache from 'gulp-memory-cache';
import webpack from 'webpack-stream';
import fs from 'fs';
import ExtractText from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import postcssVariables from 'postcss-css-variables';
import postcssVerticalRhythm from 'postcss-vertical-rhythm';
import postcssNested from 'postcss-nested';
import postcssPxToRem from 'postcss-pxtorem';
import postcssCalc from 'postcss-calc';
import postcssCustomMedia from 'postcss-custom-media';

import {getConfig} from './src/ui/config';
import flattenTree from './src/core/utils/flattenTree';


const LIBRARY_CLEANUP = 'library:cleanup';
const APP_CLEANUP = 'app:cleanup';
const LIBRARY_BABEL = 'library:babel';
const APP_BABEL_COMPAT = 'app:babel-compat';
const APP_BABEL_NEXT = 'app:babel-next';
const APP_WEBPACK = 'app:webpack';
const APP_CSS = 'app:css';
const APP_ASSETS_FONTS = 'app:assets-fonts';
const LIBRARY_CSS = 'library:css';
const APP_LIBRARY = 'app:library';
const WATCH = 'watch';
const DEFAULT = 'default';
const BUILD = 'build';

let babelCompatConfig = JSON.parse(fs.readFileSync('.babelrc-compat', {encoding: 'utf8'}));
let babelDistConfig = JSON.parse(fs.readFileSync('.babelrc-dist', {encoding: 'utf8'}));
let variables = flattenTree(getConfig(), {valuesToString: true});
let mediaQueries = {
	'--tinyMenu-start-min': `(min-width: ${variables['breakpoints.tinyMenu.start']})`,
	'--tinyMenu-start-max': `(max-width: ${variables['breakpoints.tinyMenu.start']})`,
	'--tinyMenu-end-min': `(min-width: ${variables['breakpoints.tinyMenu.end']})`,
	'--tinyMenu-end-max': `(max-width: ${variables['breakpoints.tinyMenu.end']})`,
	'--compactMenu-start-min': `(min-width: ${variables['breakpoints.compactMenu.start']})`,
	'--compactMenu-start-max': `(max-width: ${variables['breakpoints.compactMenu.start']})`,
	'--compactMenu-end-min': `(min-width: ${variables['breakpoints.compactMenu.end']})`,
	'--compactMenu-end-max': `(max-width: ${variables['breakpoints.compactMenu.end']})`,
	'--compactPage-start-min': `(min-width: ${variables['breakpoints.compactPage.start']})`,
	'--compactPage-start-max': `(max-width: ${variables['breakpoints.compactPage.start']})`,
	'--compactPage-end-min': `(min-width: ${variables['breakpoints.compactPage.end']})`,
	'--compactPage-end-max': `(max-width: ${variables['breakpoints.compactPage.end']})`,
	'--singleColumnPage-start-min': `(min-width: ${variables['breakpoints.singleColumnPage.start']})`,
	'--singleColumnPage-start-max': `(max-width: ${variables['breakpoints.singleColumnPage.start']})`,
	'--singleColumnPage-middle-min': `(min-width: ${variables['breakpoints.singleColumnPage.middle']})`,
	'--singleColumnPage-middle-max': `(max-width: ${variables['breakpoints.singleColumnPage.middle']})`,
	'--singleColumnPage-end-min': `(min-width: ${variables['breakpoints.singleColumnPage.end']})`,
	'--singleColumnPage-end-max': `(max-width: ${variables['breakpoints.singleColumnPage.end']})`
};


gulp.task(LIBRARY_CLEANUP, () => del(['./dist/**/*', './examples/node_modules/**/*']));

gulp.task(APP_CLEANUP, () => del(['./examples/dist/**/*', './examples/public/**/*']));

gulp.task(LIBRARY_BABEL, () => gulp.src('./src/**/*.js', {since: cache.lastMtime(LIBRARY_BABEL)})
	.pipe(cache(LIBRARY_BABEL))
	.pipe(babel(babelDistConfig))
	.pipe(gulp.dest('./dist')));

gulp.task(APP_BABEL_COMPAT, () => gulp.src('./examples/src/**/*.js', {since: cache.lastMtime(APP_BABEL_COMPAT)})
	.pipe(cache(APP_BABEL_COMPAT))
	.pipe(babel(babelCompatConfig))
	.pipe(gulp.dest('./examples/dist/compat')));

gulp.task(APP_BABEL_NEXT, () => gulp.src('./examples/src/**/*.js', {since: cache.lastMtime(APP_BABEL_NEXT)})
	.pipe(cache(APP_BABEL_NEXT))
	.pipe(babel())
	.pipe(gulp.dest('./examples/dist/next')));

gulp.task(APP_WEBPACK, () => gulp.src('./examples/dist/compat/client.js')
	.pipe(webpack({
		output: {
			filename: 'client.js'
		},
		module: {
			loaders: [{
				test: /\.css$/,
				// loader: ExtractText.extract('style-loader', 'css-loader?module&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:4]!postcss-loader')
				loader: ExtractText.extract('style-loader', 'css-loader?module&importLoaders=1&localIdentName=[name]__[local]!postcss-loader')
			}]
		},
		plugins: [
			new ExtractText('client.css', {allChunks: true})
		],
		postcss: [
			postcssNested(),
			postcssVariables({
				variables
			}),
			postcssCustomMedia({
				extensions: mediaQueries
			}),
			postcssVerticalRhythm({
				unit: 'bh',
				baselineHeight: getConfig().grid.baselineHeight
			}),
			postcssCalc({precision: 8}),
			postcssPxToRem({
				rootValue: 20,
				unitPrecision: 8,
				propWhiteList: ['font', 'font-size', 'line-height', 'letter-spacing', 'width', 'height', 'left', 'right', 'top', 'bottom', 'background-size', 'margin', 'margin-left', 'margin-right', 'margin-top', 'margin-bottom', 'padding', 'padding-left', 'padding-right', 'padding-top', 'padding-bottom', 'border', 'border-left', 'border-right', 'border-top', 'border-bottom', 'background'],
				replace: true,
				mediaQuery: false,
				selectorBlackList: ['html']
			}),
			autoprefixer({
				browsers: ['> 1%', 'last 2 versions'],
				remove: false
			})
		],
	}))
	.pipe(gulp.dest('./examples/public/build')));

gulp.task(APP_CSS, () => gulp.src('./examples/src/**/*.css', {since: cache.lastMtime(APP_CSS)})
	.pipe(cache(APP_CSS))
	.pipe(gulp.dest('./examples/dist/compat'))
	.pipe(gulp.dest('./examples/dist/next')));

gulp.task(APP_ASSETS_FONTS, () => gulp.src('./examples/assets/fonts/**/*.woff')
	.pipe(gulp.dest('./examples/public/assets')));

gulp.task(LIBRARY_CSS, () => gulp.src('./src/**/*.css', {since: cache.lastMtime(LIBRARY_CSS)})
	.pipe(cache(LIBRARY_CSS))
	.pipe(gulp.dest('./dist')));

gulp.task(APP_LIBRARY, () => gulp.src('./dist/**/*')
	.pipe(gulp.dest('./examples/node_modules/ash')));

gulp.task(WATCH, () => {
	gulp.watch(['./src/**/*.js', './examples/src/**/*.js'], gulp.series(gulp.parallel(LIBRARY_BABEL, APP_BABEL_COMPAT, APP_BABEL_NEXT), APP_LIBRARY, APP_WEBPACK));
	gulp.watch(['./examples/src/**/*.css'], gulp.series(APP_CSS, APP_WEBPACK));
	gulp.watch(['./src/**/*.css'], gulp.series(LIBRARY_CSS, APP_LIBRARY, APP_WEBPACK));
});

gulp.task(DEFAULT, gulp.series(
	gulp.parallel(LIBRARY_CLEANUP, APP_CLEANUP),
	gulp.parallel(LIBRARY_CSS, APP_CSS, APP_ASSETS_FONTS),
	LIBRARY_BABEL,
	gulp.parallel(APP_BABEL_COMPAT,	APP_BABEL_NEXT),
	APP_LIBRARY,
	APP_WEBPACK,
	WATCH
));

gulp.task(BUILD, gulp.series(
	gulp.parallel(LIBRARY_CLEANUP, APP_CLEANUP),
	gulp.parallel(LIBRARY_CSS, APP_CSS, APP_ASSETS_FONTS),
	LIBRARY_BABEL,
	gulp.parallel(APP_BABEL_COMPAT,	APP_BABEL_NEXT),
	APP_LIBRARY,
	APP_WEBPACK
));
