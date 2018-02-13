var gulp = require("gulp");
var ts = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');
var tslint = require("gulp-tslint");

var tsProject = ts.createProject("tsconfig.json");

gulp.task('tslint', function() {
  return tsProject.src()
    .pipe(tslint({ formatter: "stylish" }))
    .pipe(tslint.report({ emitError: false }));
})

gulp.task('compileTypescript', ['tslint'], function() {
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