const {src, dest, series, watch} = require('gulp');
const fileinclude = require('gulp-file-include');

// Copy all assets (including images) so the site works when run locally
const copy = () => src(['assets/**']).pipe(dest('build/assets'));

const include = () => {
    return src(['**.html','**/*.html',"!build/**","!includes/**"])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@root',
            indent: true
        }))
        .pipe(dest('build'))
};

const watchFiles = () => watch(['**.html','**/*.html'], series(copy, include));

exports.default = series(copy, include);
