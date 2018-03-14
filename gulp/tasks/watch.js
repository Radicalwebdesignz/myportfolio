var gulp = require("gulp");
var watch = require("gulp-watch");


gulp.task("watch", function() {

	watch(["./app/assets/styles/**/*.css", "!./app/assets/styles/styles.css"], function() {
		gulp.start("styles");
	});

});
