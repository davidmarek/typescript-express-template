var gulp = require("gulp");
var ts = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');
var tsProject = ts.createProject("tsconfig.json");

gulp.task('compileTypescript', function() {
  return tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .js
    .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: './' }))
    .pipe(gulp.dest("dist"));
})

gulp.task('watch', ['compileTypescript'], function() {
  gulp.watch(tsProject.config.include, ['compileTypescript']);
});

gulp.task("default", ['compileTypescript']);