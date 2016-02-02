import gulp from 'gulp';
import del from 'del';
import babel from 'gulp-babel';
import cache from 'gulp-memory-cache';
import webpack from 'webpack-stream';
import fs from 'fs';
import ExtractText from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import postcssVariables from 'postcss-css-variables';
import postcssVerticalRhythm from 'postcss-vertical-rhythm';
import postcssNested from 'postcss-nested';
import postcssPxToRem from 'postcss-pxtorem';
import postcssCalc from 'postcss-calc';
import postcssConditionals from 'postcss-conditionals';

import {getConfig} from './src/core/config';
import flattenTree from './src/core/utils/flattenTree';


const LIBRARY_CLEANUP = 'library:cleanup';
const APP_CLEANUP = 'app:cleanup';
const LIBRARY_BABEL = 'library:babel';
const APP_BABEL_COMPAT = 'app:babel-compat';
const APP_BABEL_NEXT = 'app:babel-next';
const APP_WEBPACK = 'app:webpack';
const APP_CSS = 'app:css';
const LIBRARY_CSS = 'library:css';
const APP_LIBRARY = 'app:library';
const WATCH = 'watch';
const DEFAULT = 'default';

let babelCompatConfig = JSON.parse(fs.readFileSync('.babelrc-compat', {encoding: 'utf8'}));
let babelDistConfig = JSON.parse(fs.readFileSync('.babelrc-dist', {encoding: 'utf8'}));

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

gulp.task(APP_WEBPACK, () => gulp.src('./examples/dist/compat/app.js')
	.pipe(webpack({
		output: {
			filename: 'app.js'
		},
		module: {
			loaders: [{
				test: /\.css$/,
				// loader: ExtractText.extract('style-loader', 'css-loader?module&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:4]!postcss-loader')
				loader: ExtractText.extract('style-loader', 'css-loader?module&importLoaders=1&localIdentName=[name]__[local]!postcss-loader')
			}]
		},
		plugins: [
			new ExtractText('app.css', {allChunks: true})
		],
		postcss: [
			postcssImport(),
			postcssNested(),
			postcssVariables({
				variables: flattenTree(getConfig(), {valuesToString: true})
			}),
			postcssConditionals(),
			postcssPxToRem({
				rootValue: 20,
				unitPrecision: 8,
				propWhiteList: ['font', 'font-size', 'line-height', 'letter-spacing', 'width', 'height', 'left', 'right', 'top', 'bottom', 'background-size'],
				replace: true,
				mediaQuery: false,
				selectorBlackList: ['html']
			}),
			postcssVerticalRhythm({
				baselineHeight: 28,
				baseFontSize: 20
			}),
			postcssCalc({precision: 8}),
			autoprefixer({
				browsers: ['> 1%', 'last 2 versions'],
				remove: false
			})
		],
	}))
	.pipe(gulp.dest('./examples/public/assets')));

gulp.task(APP_CSS, () => gulp.src('./examples/src/**/*.css', {since: cache.lastMtime(APP_CSS)})
	.pipe(cache(APP_CSS))
	.pipe(gulp.dest('./examples/dist/compat'))
	.pipe(gulp.dest('./examples/dist/next')));

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
	gulp.parallel(LIBRARY_CSS, APP_CSS),
	LIBRARY_BABEL,
	gulp.parallel(APP_BABEL_COMPAT,	APP_BABEL_NEXT),
	APP_LIBRARY,
	APP_WEBPACK,
	WATCH
));
