const { src, dest} = require('gulp');
const fileinclude = require('gulp-file-include');
const path = require("../path.js")

const html = () => {
	return src (path.html.src)
	.pipe(fileinclude())
	.pipe(dest(path.html.dist))
}

module.exports = html;
