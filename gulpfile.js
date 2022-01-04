const {watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

//TASK
const clear = require('./task/clear.js');
const html = require('./task/html.js');
const style = require('./task/style.js');
const js = require('./task/script.js');
const img = require('./task/img.js');
const sprite = require('./task/sprite.js');

//PATH
const path = require("./path")

// SERVER
const server = () => {
	browserSync.init({
        server: {
            baseDir: "./" + path.root + "/"
        },
		port: 3000,
		notify: false,
		open: false
    });
}

//WATCER
const watcher = () => {
	watch([path.html.watch], html).on("all", browserSync.reload)
	watch([path.style.watch], style).on("all", browserSync.reload)
	watch([path.js.watch], js).on("all", browserSync.reload)
	watch([path.img.watch], img).on("all", browserSync.reload)
	watch([path.sprite.watch], sprite).on("all", browserSync.reload)
}

//TASKS

exports.html = html;
exports.style = style;
exports.js = js;
exports.img = img;
exports.sprite = sprite;
exports.clear = clear;

const build = series(
	clear,
	parallel(html, style, js, img, sprite)
)

const serve = series(
	build,
	parallel(watcher, server)
)
module.exports.default = path.isProd ? build : serve;
