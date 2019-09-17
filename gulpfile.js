/* eslint-disable */
const path = require('path')
const gulp = require('gulp')
const babel = require('gulp-babel')
const postcss = require('gulp-postcss')
const del = require('del')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')

const postCssPlugins = [
    require('postcss-import')({
        root: __dirname,
        path: [path.join(__dirname, './src')],
    }),
    require('postcss-mixins')(),
    require('postcss-each')(),
    require('postcss-apply')(),
    require('postcss-nesting')(),
    require('postcss-reporter')({ clearMessages: true }),
]

// 合并所有css
gulp.task('lib-css', function() {
    return gulp
        .src(['./src/*.css', './src/**/*.css'])
        .pipe(sourcemaps.init())
        .pipe(postcss(postCssPlugins))
        .pipe(concat('index.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./lib'))
})

gulp.task('tsd', function() {
    return gulp.src('./src/**/*.d.ts').pipe(gulp.dest('./lib'))
})

gulp.task('js', function() {
    return gulp
        .src(['./src/**/*.js', '!./src/**/__test__'])
        .pipe(babel())
        .pipe(gulp.dest('./lib'))
})

gulp.task('clean-lib', function(done) {
    del.sync(['./lib'])
    done()
})

gulp.task('lib', gulp.parallel('js', 'lib-css', 'tsd'))

gulp.task('default', gulp.series('clean-lib', 'lib'))
