const pathSrc = 'src';
const pathDist = 'dist';

const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
	isProd: isProd,
	isDev: isDev,
	root: pathDist,
	html: {
		src: pathSrc + "/*.html",
		watch: pathSrc + "/**/*.html",
		dist: pathDist + "/"
	},
	style: {
		src: pathSrc + "/scss/style.scss",
		watch: pathSrc + "/scss/**/*.scss",
		dist: pathDist + "/css/"
	},
	js: {
		src: [pathSrc + "/js/script.js",
			pathSrc + "/js/index.js",
			pathSrc + "/js/tabs.js",
		],
		watch: pathSrc + "/js/**/*.js",
		dist: pathDist + "/js/"
	},
	img: {
		src: [pathSrc + "/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}", "!" + pathSrc + "/img/sprite/*.svg"],
		watch: pathSrc + "/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}",
		dist: pathDist + "/img/"
	},
	sprite: {
		src: pathSrc + "/img/sprite/*.svg",
		watch: pathSrc + "/img/sprite/*.svg",
		dist: pathDist + "/img/sprite/"

	}

}
