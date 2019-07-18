const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function buildHTML() {

    return gulp.src('./pug/**/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream())
}

function style() {

    return gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./pug/**/*.pug', buildHTML);
    gulp.watch('./sass/**/*.scss', style);
    gulp.watch('./*.js').on('change', browserSync.reload);
}

exports.buildHTML = buildHTML;
exports.style = style;
exports.watch = watch;