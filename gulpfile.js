var gulp = require("gulp");
var sass = require("gulp-sass");

function compileScss() {
    return (
        gulp
            .src("scss/main.scss")
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(gulp.dest("css"))
    );
}

function watch() {
    compileScss();
    gulp.watch('scss/**/*.scss', compileScss)
}

exports.watch = watch;