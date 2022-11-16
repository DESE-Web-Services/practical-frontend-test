'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', async function (done) {
  return gulp.src('./scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'));
  done();
});

gulp.task('default', gulp.parallel("sass"));