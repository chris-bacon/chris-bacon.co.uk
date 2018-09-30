var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin')
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');

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
    return gulp.src('static/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('static/css/'));
  });

gulp.task('css', ['sass'], function() {
    return gulp.src('static/css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('static/css-min'))
});

gulp.task('htmlt', function() {
  return gulp.src('templates/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('templates-min'));
});

gulp.task('watch', function () {
    gulp.watch('static/scss/*.scss', ['css']);
  });

gulp.task('default', ['img', 'js', 'css']);
