const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const cssnano = require("cssnano");
const concat = require("gulp-concat");
const terser = require("gulp-terser-js");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");
const cache = require("gulp-cache");
const webp = require("gulp-webp");

const paths = {
    scss: "src/scss/**/*.scss",
    js: "src/js/**/*.js",
    bootstrap: "src/plugins/bootstrap/dist/**/*.js",
    bootstrapIcons: "src/plugins/bootstrap-icons/**/*",
    slick: "src/plugins/slick/*.js",
    fonts: "src/fonts/*.ttf",
    jquery: "src/plugins/jquery/dist/*.js",
    jquery311: "src/plugins/jquery311/*.js",
    imagenes: "src/img/**/*",
    vrvimg: "src/img/vrv/**/*",
    aplimg: "src/img/aplicado/**/*",
    resimg: "src/img/residencial/**/*",
    fourimg: "src/img/4k/**/*",
    hdimg: "src/img/fullhd/**/*",
};

// css es una función que se puede llamar automaticamente
function css() {
    return (
        src(paths.scss)
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(postcss([cssnano()]))
            // .pipe(postcss([autoprefixer()]))
            .pipe(sourcemaps.write("."))
            .pipe(dest("./build/css"))
    );
}

function bootstrapIcons() {
    return src(paths.bootstrapIcons).pipe(
        dest("./build/plugins/bootstrap-icons/")
    );
}

function bootstrapMin() {
    return src(paths.bootstrap)
        .pipe(sourcemaps.init())
        .pipe(concat("bootstrap.js")) // final output file name
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(rename({ suffix: ".min" }))
        .pipe(dest("./build/plugins"));
}

function bootstrap() {
    return src(paths.bootstrap)
        .pipe(sourcemaps.init())
        .pipe(concat("bootstrap.js")) // final output file name
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(dest("./build/plugins"));
}

function slickMin() {
    return src(paths.slick)
        .pipe(sourcemaps.init())
        .pipe(concat("slick.js")) // final output file name
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(rename({ suffix: ".min" }))
        .pipe(dest("./build/plugins"));
}

function slick() {
    return src(paths.slick)
        .pipe(sourcemaps.init())
        .pipe(concat("slick.js")) // final output file name
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(dest("./build/plugins"));
}

function jqueryMin() {
    return src(paths.jquery)
        .pipe(sourcemaps.init())
        .pipe(concat("jquery.js")) // final output file name
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(rename({ suffix: ".min" }))
        .pipe(dest("./build/plugins"));
}

function jquery() {
    return src(paths.jquery)
        .pipe(sourcemaps.init())
        .pipe(concat("jquery.js")) // final output file name
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(dest("./build/plugins"));
}

function jquery311() {
    return src(paths.jquery311)
        .pipe(sourcemaps.init())
        .pipe(concat("jquery311.js")) // final output file name
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(rename({ suffix: ".min" }))
        .pipe(dest("./build/plugins"));
}

function javascriptMin() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat("scripts.js")) // final output file name
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(rename({ suffix: ".min" }))
        .pipe(dest("./build/js"));
}

function javascript() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat("scripts.js")) // final output file name
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(dest("./build/js"));
}

function fonts() {
    return src(paths.fonts).pipe(dest("./build/fonts"));
}

function imagenes() {
    return src(paths.imagenes)
        .pipe(cache(imagemin({ optimizationLevel: 3 })))
        .pipe(dest("build/img"));
}

function vrvimg() {
    return src(paths.vrvimg)
        .pipe(cache(imagemin({ optimizationLevel: 3 })))
        .pipe(dest("build/img/vrv"));
}

function aplimg() {
    return src(paths.aplimg)
        .pipe(cache(imagemin({ optimizationLevel: 3 })))
        .pipe(dest("build/img/aplicado"));
}

function resimg() {
    return src(paths.resimg)
        .pipe(cache(imagemin({ optimizationLevel: 3 })))
        .pipe(dest("build/img/residencial"));
}

function fourimg() {
    return src(paths.fourimg)
        .pipe(cache(imagemin({ optimizationLevel: 3 })))
        .pipe(dest("build/img/4k"));
}

function hdimg() {
    return src(paths.hdimg)
        .pipe(cache(imagemin({ optimizationLevel: 3 })))
        .pipe(dest("build/img/fullhd"));
}

function versionWebp() {
    return src(paths.imagenes).pipe(webp()).pipe(dest("build/img"));
}

function watchArchivos() {
    watch(paths.scss, css);
    watch(paths.bootstrapIcons, bootstrapIcons);
    watch(paths.js, bootstrapMin);
    watch(paths.js, bootstrap);
    watch(paths.js, slickMin);
    watch(paths.js, slick);
    watch(paths.js, jqueryMin);
    watch(paths.js, jquery);
    watch(paths.js, jquery311);
    watch(paths.fonts, fonts);
    watch(paths.js, javascriptMin);
    watch(paths.js, javascript);
    watch(paths.imagenes, imagenes);
    watch(paths.vrvimg, vrvimg);
    watch(paths.aplimg, aplimg);
    watch(paths.resimg, resimg);
    watch(paths.fourimg, fourimg);
    watch(paths.hdimg, hdimg);
    watch(paths.imagenes, versionWebp);
}

exports.css = css;
exports.watchArchivos = watchArchivos;
exports.default = parallel(
    css,
    bootstrapIcons,
    bootstrapMin,
    bootstrap,
    slickMin,
    slick,
    jqueryMin,
    jquery,
    jquery311,
    javascriptMin,
    javascript,
    fonts,
    imagenes,
    vrvimg,
    aplimg,
    resimg,
    fourimg,
    hdimg,
    versionWebp,
    watchArchivos
);
