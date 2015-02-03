var gulp = require('gulp');
gulp.task('default', function() {
    console.log("This is the gulp default task");
});
gulp.task('main', ["taskB","taskA"],function() {
    console.log("This is the gulp main task");
});
gulp.task('taskA', function() {
    console.log("This is the gulp taksA task");
});
gulp.task('taskB',["taskA"], function() {
    console.log("This is the gulp taksB task");
});
gulp.watch('watchfile.txt', function(e){
    console.log('file ' + e.path + ' type ' + e.type );
});
