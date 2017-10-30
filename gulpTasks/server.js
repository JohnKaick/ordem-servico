const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('watch', () => {
    watch('client/**/*.html', function () {
        gulp.start('app.html')
    })
    watch('client/**/*.css', function () {
        gulp.start('app.css')
    })
    watch('client/**/*.js', function () {
        gulp.start('app.js')
    })
    watch('client/assets/**/*.*', function () {
        gulp.start('app.assets')
    })
})

gulp.task('server', ['watch'], () => {
    return gulp.src('public').pipe(webserver({
        livereload: true,
        port: 3000,
        open: true
    }))
})