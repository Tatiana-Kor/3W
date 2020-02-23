"use strict";

const { watch, src, dest, parallel, series } = require("gulp");
const browserSync = require("browser-sync");
const del = require("del");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const imagemin = require("gulp-imagemin");
const babel = require("gulp-babel");
const webpack = require("webpack-stream");
const ghPages = require("gulp-gh-pages");

function errorHandler(errors) {
  console.warn("Error!");
  console.warn(errors);
}

function devServer(done) {
  var params = {
    watch: true,
    reloadDebounce: 250,
    notify: false,
    server: { baseDir: "./build" }
  };

  browserSync.create().init(params);
  done();
}

function buildPages() {
  return src("source/index.html")
    .pipe(plumber({ errorHandler }))
    .pipe(dest("build/"));
}

function buildStyles() {
  return src("source/scss/*.scss")
    .pipe(plumber({ errorHandler }))
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("build/styles/"));
}

function buildAssets(done) {
  src(["source/assets/**/*.*", "!source/assets/images/**/*.*"])
  .pipe(dest("build/assets/"));

  src("source/assets/images/**/*.*")
    .pipe(imagemin())
    .pipe(dest("build/assets/images"));

  done();
}

function buildScripts(done) {
  src('source/js/index.js')
   .pipe(plumber({ errorHandler })) 
    .pipe(webpack({output: { filename: 'scripts.js' }, mode: "development"}))
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(dest('build/js/'))

  src('source/js/api.js')
    .pipe(dest('build/js/'));
  ;

  src(["source/js/*.js", "!source/js/index.js", "!source/js/api.js"])
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(dest('build/js/'));
  ;

  done();  
}

function watchFiles() {
  watch("source/index.html", buildPages);
  watch("source/scss/*.scss", buildStyles);
  watch("source/assets/**/*.*", buildAssets);
  watch("source/js/**/*.js", buildScripts);
}

function clearBuild() {
  return del("build/");
}

function deploy() {
  return src("./build/**/*")
  .pipe(ghPages());
}

exports.deploy = deploy;

exports.default = series(
  clearBuild,
  parallel(
    devServer,
    series(parallel(buildPages, buildStyles, buildAssets, buildScripts), watchFiles)
  )
);












