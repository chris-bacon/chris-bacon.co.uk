var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin')
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var rename = require('gulp-rename')

gulp.task('img', function() {
	return gulp.src('static/img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('static/img-min'));
});

gulp.task('js', function() {
	return gulp.src('static/js/**/*')
	.pipe(uglify())
	.pipe(gulp.dest('static/js-min'));
});

gulp.task('sass', function () {
    return gulp.src('css/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('css/'));
  });

gulp.task('css', ['sass'], function() {
    return gulp.src('css/*.css')
    .pipe(cssmin())
    // .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('css/'))
});

gulp.task('watch', function () {
    gulp.watch('static/scss/*.scss', ['css']);
  });

gulp.task('default', ['img', 'js', 'css']);
