Interpolation helper
====================

Useful when you want to yield a value from an object based upon a
string value.

    <div class="staff">
    {{#each (interpolate "person" employees)}}
      {{name}}
    {{/each}}
    </div>


Usage
-----

The interpolate helper expects a `key` and a `context` to be passed
to it. It will then return whatever exists within `context[key]` or
`undefined`.

You can use the `register` method to register with your instance of
handlebars. Some plugins may use this by default.


Gulp example
------------

Brief example with Gulp using [gulp-hb][1] and [gulp-ext][2].

[1]: https://github.com/shannonmoeller/gulp-hb
[2]: https://github.com/floatdrop/gulp-ext

    gulp.task('handlebars', function () {
        var ext = require('gulp-ext');
        var handlebars = require('gulp-hb');

        return gulp.src('./pages/')
            .pipe(handlebars({
                helpers: [
                    require.resolve('helper-interpolate')
                ],
                partials: './partials/'
            }))
            .pipe(ext.replace('html'))
            .pipe(gulp.dest('./dist/'));
    });
