var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    cp = require('child_process'),
    browserSync = require('browser-sync').create();

var paths = {
    dev: './_dev/',
    src: './_dev/src/',
    bower: './_dev/bower_components/',
    dist: './assets/',
    site: './_site/'
};

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    return cp.spawn( 'bundle' , ['exec', 'jekyll', 'build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'concat', 'jekyll-build'], function() {
    browserSync.init({
        port: 4000,
        ui: false,
        open: false,
        scrollProportionally: false,
        reloadOnRestart: false,
        codeSync: false,
        online: false,
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Compile files from _dev/src/sass into both _site/assets/css (for live injecting) and assets/css (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src(paths.src + 'sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(autoprefixer({ browsers: [ 'ie >= 10', 'android >= 4.1' ] }))
        .pipe(sourcemaps.write('/maps'))
        .pipe(sourcemaps.write('/assets/css/maps'))
        .pipe(gulp.dest('_site/assets/css'))
        // .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css'));
});

/**
 * Compile files from _dev/src/js into both _site/assets/js (for live injecting) and assets/js (for future jekyll builds)
 */
gulp.task('concat', function() {
    var jsFiles = [
        paths.bower + 'jquery/dist/jquery.min.js',

        paths.bower + 'popper.js/dist/umd/popper.min.js',
        paths.bower + 'bootstrap/dist/js/bootstrap.min.js',

        // paths.bower + 'underscore/underscore-min.js',
        // paths.bower + 'tether/dist/js/tether.min.js',

        // paths.bower + 'bootstrap/dist/js/bootstrap.min.js',
        // paths.bower + 'headroom.js/dist/headroom.min.js',
        // paths.bower + 'headroom.js/dist/jQuery.headroom.min.js',
        // paths.bower + 'jquery.countdown/dist/jquery.countdown.min.js',
        // paths.bower + 'animsition/dist/js/animsition.min.js',
        paths.bower + 'enquire/dist/enquire.min.js',
        // paths.bower + 'bLazy/blazy.min.js',
        // paths.bower + 'aos/dist/aos.js',
        // paths.bower + 'lity/dist/lity.js',
        paths.bower + 'select2/dist/js/select2.min.js',
        paths.bower + 'ajaxchimp/jquery.ajaxchimp.js',
        // paths.bower + 'js-cookie/src/js.cookie.js',
        // paths.bower + 'moment/moment.js',
        // paths.src + 'js/vendor/*.js',

        paths.bower + 'jquery.nicescroll/dist/jquery.nicescroll.min.js',

        paths.bower + 'algoliasearch/dist/algoliasearchLite.min.js',

        paths.src + 'js/vendor/headroom.min.js',
        paths.src + 'js/vendor/jQuery.headroom.min.js',

        paths.src + 'js/scripts.js'
    ];

    return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('/assets/js/maps'))
        .pipe(gulp.dest('./_site/assets/js'))
        // .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(paths.dist + 'js'))
});


/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(paths.src + 'sass/**/*.scss', ['sass']);
    gulp.watch(paths.src + 'js/**/*.js', ['concat']);
    // gulp.watch('assets/img/**/*', ['img']);
    gulp.watch([
        '*.{html,md,markdown,xml,json,txt}',
        '_layouts/**/*.html',
        '_includes/**/*.html',
        '_i18n/**/*',
        '_posts/*',
        'blog/*',
        'feeds/*'
    ], ['jekyll-rebuild']);
});

// shortcut
gulp.task('b', ['jekyll-build']);
gulp.task('js', ['concat']);
gulp.task('css', ['sass']);

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', [
    'browser-sync',
    'watch'
]);

