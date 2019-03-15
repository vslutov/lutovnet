    { spawn } = require 'child_process'
    gulp = require 'gulp'
    coffee = require 'gulp-coffee'
    coffeescript = require 'coffeescript'
    plumber = require 'gulp-plumber'

    coffeeGlob = './cs/**/*.coffee.md'
    srcGlobs = [coffeeGlob]

`build:incremental` is a task to update all files needed by webpack.


    gulp.task 'coffee', =>
      gulp.src coffeeGlob, sourcemaps: true
        .pipe plumber()
        .pipe coffee
          bare: true
          coffee: coffeescript
        .pipe gulp.dest './src'

    gulp.task 'build:incremental', gulp.task 'coffee'

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
      gulp.watch srcGlobs, gulp.task 'build:incremental'

    gulp.task 'start', gulp.series 'build:incremental', gulp.parallel 'craco:start', 'watch:reload'
