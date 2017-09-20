var gulp = require('gulp');
var sass = require('gulp-sass');

//task para o sass
gulp.task('sass', function () {
    gulp.src('Content-Production/sass/**/*.sass') //diretório dos arquivos .sass /.scss
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) // COmentar essa linha apenas quando for a produção final p comprimir todo o css
        //.pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError)) //DEScomentar essa linha apenas quando for a produção final p comprimir todo o css
        .pipe(gulp.dest('Content/css')); //diretório final dos arquivos CSS gerados
});

//task para o watch
gulp.task('sass:watch', function () {
    gulp.watch('Content-Production/sass/**/*.sass', ['sass']);
});

//essa task quando chamnada executa outras task colocadas em parametros
gulp.task('upCss', ['sass', 'sass:watch']);

//task padrão
gulp.task('default', function () {

});
