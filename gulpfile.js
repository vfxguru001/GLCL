var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
let cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const gulpPostcss = require('gulp-postcss');
const cssDeclarationSorter = require('css-declaration-sorter');

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

//scss paths
var scssFiles = 'assets/**/*.scss',
    cssFiles = 'dist/css/*.css'
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

gulp.task('css', function() {
    return gulp.src(cssFiles)
        .pipe(gulpPostcss([cssDeclarationSorter({
            order: 'alphabetically'
        })]))
        .pipe(gulp.dest(cssDest));
});

gulp.task('default', ['scripts', 'sass', 'css']);
