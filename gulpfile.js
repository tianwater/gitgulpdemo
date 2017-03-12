
var gulp=require("gulp");

//引入sass包名
var sass=require("gulp-sass");
//引入concat包名
var concat = require("gulp-concat");
//引入uglify包名
var uglify = require("gulp-uglify");
//引入rename包
var rename = require("gulp-rename");

//引入imagemin包
var imagemin = require("gulp-imagemin");


//复制任务（执行的任务）。
gulp.task("copy-index",function(){
	//把根目录下的index.html文件复制到dist文件夹下。
	gulp.src("index.html").pipe(gulp.dest("dist"));
});

//复制所有的图片
gulp.task("copyimages",function(){
	gulp.src("img/*.jpg").pipe(gulp.dest("dist/img"));
});

gulp.task("build",["copy-index","copyimages"],function(){
	console.log("已经ok了");
});

//sass编译任务
gulp.task("sass",function(){
	//src来源
	gulp.src("*.scss")
	.pipe(sass()) //通过管道 进行加工
	.pipe(gulp.dest("dist/css"));//目的地
});
/*
//合并文件
gulp.task("concat",function(){
	gulp.src("js/*.js")
	.pipe(concat("concat.js"))
	.pipe(gulp.dest("dist/js"));
});

//压缩文件
gulp.task("uglify",function(){
	gulp.src("dist/js/concat.js")
	.pipe(uglify())
	.pipe(gulp.dest("dist/js"));
});

//
gulp.task("rename",function(){
	gulp.src("dist/js/concat.js")
	.pipe(rename("concat.min.js"))
	.pipe(gulp.dest("dist/js"));
});
*/

gulp.task("concatuglifyrename",function(){
	gulp.src("js/*.js")
	.pipe(concat("concat.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())
	.pipe(rename("concat.min.js"))
	.pipe(gulp.dest("dist/js"));
});


//压缩图片
gulp.task("imagemin",function(){
	gulp.src("img/*.jpg")
	.pipe(imagemin())
	.pipe(gulp.dest("dist/img"));	
});

//实时监测
gulp.task("watchall",function(){
	gulp.watch("index.html",["copy-index"]);
	//gulp.watch("img/*.jpg",["copyimages"]);
	gulp.watch("*.scss",["sass"]);
	//gulp.watch("js/*.js",["concat"]);
	//gulp.watch("js/*.js",["concatuglifyrename"]);	
});

//