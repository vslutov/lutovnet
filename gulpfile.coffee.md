    { spawn } = require 'child_process'

    R = require 'ramda'
    gulp = require 'gulp'

    coffee = require 'gulp-coffee'
    coffeescript = require 'coffeescript'
    plumber = require 'gulp-plumber'
    newer = require 'gulp-newer'

Set paths to code

    basicPaths =
      js:
        src: './src'
        csGlob: './cs/**/*.coffee.md'

    paths = R.compose(
      R.assoc('srcGlobs', [basicPaths.js.csGlob])
    )(basicPaths)

Compile coffee files

    gulp.task 'coffee', =>
      gulp.src paths.js.csGlob, sourcemaps: true
        .pipe newer
          dest: paths.js.src
          map: (fname) => fname.split('.')[..-3].join('.') + '.js'
        .pipe plumber()
        .pipe coffee
          bare: true
          coffee: coffeescript
        .pipe gulp.dest paths.js.src

`build:incremental` is a task to update all files needed by webpack.

    gulp.task 'build:incremental', gulp.parallel 'coffee'

We run webpack by [craco](https://github.com/sharegate/craco/blob/master/packages/craco/README.md) package.

    gulp.task 'craco:build', =>
      spawn 'craco', ['build'],
        stdio: 'inherit'
        env: {
          NODE_ENV: 'development'
          ...process.env
        }

`default` is a task to build all files.

    gulp.task 'default', gulp.series 'build:incremental', 'craco:build'

On watch stage `craco:build` is replaced with `craco:start`:
run webpack-dev-server.

    gulp.task 'craco:start', =>
      spawn 'craco', ['start'],
        stdio: 'inherit'
        env: {
          NODE_ENV: 'development'
          ...process.env
        }

If coffee files and other sources has been changed, we should update
compiled files.

    gulp.task 'watch:reload', =>
      gulp.watch paths.srcGlobs, gulp.task 'build:incremental'

    gulp.task 'start', gulp.series 'build:incremental', gulp.parallel 'craco:start', 'watch:reload'
