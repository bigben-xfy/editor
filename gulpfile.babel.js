
var gulp = require('gulp')
var del = require('del')

gulp.task('clean', function() {
	return del('./product/assets')
})

gulp.task('assets', function() {
	return gulp.src(['./assets/**/*'])
		.pipe(gulp.dest('./product/assets/'))
})

gulp.task('default', ['clean'], function() {
	gulp.start('assets')
})


















