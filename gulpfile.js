var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('js', function() {
    gulp.src(['./src/_app.module.js', './src/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});