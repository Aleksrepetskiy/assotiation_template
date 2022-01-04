const { src, dest} = require('gulp');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const path = require("../path.js")

const img = () => {
	return src(path.img.src)
	.pipe(changed(path.img.dist))
	.pipe(imagemin({
		verbose: true
	}))
	.pipe(dest(path.img.dist))
}

module.exports = img;
