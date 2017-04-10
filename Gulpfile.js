var     gulp = require('gulp');
var     rename = require('gulp-rename');
var     babel = require('babelify');
var     browserify = require('browserify');
var     source = require('vinyl-source-stream');
var     less = require('gulp-less');
var     watch = require('gulp-watch');
var     spritesmith = require('gulp.spritesmith');
var     cssmin = require('gulp-cssmin');
var     uglify = require('gulp-uglifyjs');
var     image = require('gulp-image');
var     htmlmin = require('gulp-htmlmin');
var     ngAnnotate = require('gulp-ng-annotate');

var paths = {
  scripts: './app/scripts/**/*.js',
  less: './app/**/*.less'
};



gulp.task('scripts', function(){
    browserify('./app/scripts/app.js')
        .transform(babel)
        .bundle()
        .pipe(source('app.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('./public/js'));
});


gulp.task('less', function(){
    gulp.src('./app/less/template-v1/index-template.less') // path to your file
        .pipe(less().on('error', function(err) {
            console.log(err);
        }))
        .pipe(cssmin())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('./public/css'));
});

/**
 * @gulpdoc task
 * @name image --> gulp image
 * @description compress images for production
*/
gulp.task('image', function () {
  gulp.src('./public/img/**/*.{png,jpg,gif,jpeg}')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true
    }))
    .pipe(gulp.dest('./dist/img'));
});

/**
 * @gulpdoc task
 * @name uglify --> gulp uglify
 * @description Uglify files type jacascript
*/
gulp.task('uglify', function() {
  gulp.src('./public/js/**/*.js')
    .pipe(ngAnnotate({
        // true helps add where @ngInject is not used. It infers.
        // Doesn't work with resolve, so we must be explicit there
        add: true
    }))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('./dist/js'))
});

/**
 * @gulpdoc task
 * @name minifyhtml --> gulp minifyhtml
 * @description Minify files of type .html
*/
gulp.task('minifyhtml', function() {
  return gulp.src('./public/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'))
});


/**
 * @gulpdoc task
 * @name copy --> gulp copy
 * @description Copy files folder ./app to folder ./dist
 */
gulp.task('copy', function() {
  gulp.src('./public/fonts/**/*.{ttf,woff,eof,svg}').pipe(gulp.dest('./dist/fonts'));
  gulp.src('./public/css/**/*.css').pipe(gulp.dest('./dist/css'));
  gulp.src('./public/**/*.{ico,json}').pipe(gulp.dest('./dist'));
}); 


/**
 * @gulpdoc task
 * @name build_production --> gulp build_production
 * @description task group to deploy production
*/
gulp.task('build_development', ['scripts', 'less' ]);

/**
 * @gulpdoc task
 * @name build_production --> gulp build_production
 * @description task group to deploy production
*/
gulp.task('build_production', ['build_development', 'uglify', 'copy', 'minifyhtml', 'image' ]);

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.less, ['less']);
});