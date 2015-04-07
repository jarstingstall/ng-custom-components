var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify')
    sass = require('gulp-sass');

gulp.task('js', function() {
    gulp.src(['./src/_app.module.js', './src/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('css', function() {
    gulp.src('./src/**/*.scss')
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/**/*.scss', ['css']);
});

gulp.task('default', ['js', 'css', 'watch']);