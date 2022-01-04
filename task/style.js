const { src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const gulpif = require('gulp-if');
const path = require("../path.js")

const style = () => {
	return src (path.style.src, {sourcemaps: path.isDev})
	.pipe(
		sass({
			outputStyle: "expanded"
		})
	)
	.pipe(gcmq())
	.pipe(gulpif(path.isProd, autoprefixer()))
	.pipe(dest(path.style.dist, {sourcemaps: path.isDev}))
	.pipe(gulpif(path.isProd,cleanCSS()))
	.pipe(rename({
		suffix: ".min"
	}))
	.pipe(dest(path.style.dist, {soursemaps: path.isDev}))
}

module.exports = style;
