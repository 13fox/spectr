export const  copy =()=>{
    return app.gulp.src(app.path.src)
    .pipe(app.gulp.dest(app.path.build.files))
}