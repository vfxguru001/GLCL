var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    watch = require('gulp-watch');
let cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');

//script paths
var jsFiles = 'assets/**/*.js',
    jsDest = 'dist/scripts';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('stream', function() {
    // Endless stream mode
    return watch(jsFiles, {
            ignoreInitial: false
        })
        .pipe(gulp.dest('build'));
});

//scss paths
var scssFiles = 'assets/**/*.scss',
    cssDest = 'dist/css';

gulp.task('sass', function() {
    return gulp.src(scssFiles)
        .pipe(sass()) // Using gulp-sass
        .pipe(concatCss('styles.css'))
        .pipe(gulp.dest(cssDest))
        .pipe(rename('styles.min.css'))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest(cssDest))
});

gulp.task('default', ['scripts', 'sass'], function() {
    // watch for CSS changes
    gulp.watch(scssFiles, function() {
        // run styles upon changes
        gulp.run('sass');
    });
    // watch for CSS changes
    gulp.watch(jsFiles, function() {
        // run styles upon changes
        gulp.run('scripts');
    });
});

//to understand how this works, watch Class 3 vid 52:00, "to create a single component with some modification"
