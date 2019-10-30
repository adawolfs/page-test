const { src, dest, parallel, series, watch, task } = require('gulp');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gulp_sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var cp = require('child_process');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

var jekyllCommand = (/^win/.test(process.platform)) ? 'jekyll.bat' : 'jekyll';

/*
 * Build the Jekyll Site
 * runs a child process in node that runs the jekyll commands
 */

function jekyll_build(done) {
	return cp.spawn(jekyllCommand, ['build'], { stdio: 'inherit' })
		.on('close', done);
};


/*
* Compile and minify sass
*/
function sass() {
	return src('src/styles/**/*.scss')
		.pipe(plumber())
		.pipe(gulp_sass())
		.pipe(csso())
		.pipe(dest('assets/css/'));
}


/*
 * Rebuild Jekyll & reload browserSync
 */
const jekyll_rebuild = series(jekyll_build,
	function (done) {
		browserSync.reload();
		done()
	})

/*
 * Build the jekyll site and launch browser-sync
 */
const browserSyncTask = series(jekyll_build,
	function () {
		browserSync.init({
			server: {
				baseDir: '_site'
			}
		})
	})



/*
* Compile fonts
*/
function fonts() {
	return src('src/fonts/**/*.{ttf,woff,woff2}')
		.pipe(plumber())
		.pipe(dest('assets/fonts/'));
}

/*
 * Minify images
 */
function imageminTask() {
	return src('src/img/**/**.{jpg,png,gif}')
		.pipe(plumber())
		.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
		.pipe(dest('assets/img/'));
}

/**
 * Compile and minify js
 */

function js() {
	return src('src/js/**/*.js')
		.pipe(plumber())
		//.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(dest('assets/js/'))
}

task('watchTask', function () {
	browserSync.init({
		server: {
			baseDir: '_site'
		}
	})
	watch('src/styles/**/*.scss', series(sass, jekyll_rebuild));
	watch('src/js/**/*.js', js);
	watch('src/fonts/**/*.{tff,woff,woff2}', fonts);
	watch('src/img/**/*.{jpg,png,gif}', imageminTask);
	watch(['*html', 'blog/*html', '_posts/*md', '_posts/*markdown', '_includes/**/*html', '_layouts/*.html'], jekyll_rebuild);
})

exports.sass = sass;
exports.js = js;
exports.fonts = fonts;
exports.browserSyncTask = browserSyncTask;
exports.imagemin = imageminTask
// exports.watchTask = watchTask;
exports.jekyll_build = jekyll_build;
exports.default = parallel(js, sass, fonts, browserSyncTask)