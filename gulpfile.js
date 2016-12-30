var gulp = require('gulp');
var embedSass = require('gulp-angular2-embed-sass');
var inlineNg2Template = require('gulp-inline-ng2-template');
var rimraf = require('rimraf');
var exec = require('child_process').exec;
var fs = require('fs');

gulp.task('clean-dist', function (cb) {
  rimraf('dist', cb);
});

gulp.task('clean-tmp', ['tsc'], function (cb) {
  rimraf('tmp', cb);
});

gulp.task('tsc', ['copy'], function (cb) {
  fs.createReadStream('src/tsconfig.json')
    .pipe(fs.createWriteStream('tmp/tsconfig.json'))
    .on('close', function(ex) {
      exec('cd tmp && tsc -d', function (err, stdout, stderr) {
        if (stdout) {
          console.log(stdout);
        }
        if (stderr) {
          console.log(stderr);
        }
        cb(err);
      });
    });
});

gulp.task('copy', function () {
  return gulp.src(['src/app/**/*.ts', '!src/app/**/*.spec.ts'])
    .pipe(embedSass())
    .pipe(inlineNg2Template({ base: '/src/app', useRelativePaths: true }))
    .pipe(gulp.dest('tmp'));
});

gulp.task('default', ['clean-dist', 'tsc', 'clean-tmp']);
