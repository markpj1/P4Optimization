var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('imageOne', function () {
  gulp.src('img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('img'));
});

gulp.task('imageTwo', function () {
  gulp.src('images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('images'));
});