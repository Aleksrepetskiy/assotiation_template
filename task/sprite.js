const { src, dest } = require("gulp");
const svgo = require("gulp-svgo");
const svgSprite = require("gulp-svg-sprite");
const path = require("../path.js");

const sprite = () => {
  return src(path.sprite.src)
    .pipe(
      svgo({
        plugins: [
          {
            removeAttrs: {
              attrs: "(fill|stroke|style|data.*)",
            },
          },
        ],
      })
    )
	.pipe(svgSprite({
		mode: {
		  symbol: {
			sprite: '../sprite.svg',
			example: true
		  }
		}
	}))
    .pipe(dest(path.sprite.dist));
};

module.exports = sprite;
