
const gulp = require('gulp'),
    config = {
        production: process.env.NODE_ENV === 'production',
        vendorPath: './node_modules/',
        frontendPath: './design/'
    };

// Plugins
fs = require('fs');
gulpif = require('gulp-if');
sourcemaps = require('gulp-sourcemaps');
sass = require('gulp-sass');
autoprefixer = require('gulp-autoprefixer');
cssnano = require('gulp-cssnano');
uglify = require('gulp-uglify');
concat = require('gulp-concat');
clean = require('gulp-rimraf');
watch = require('gulp-watch');
plumber = require('gulp-plumber');
spritesmith = require('gulp.spritesmith');

gulp.task('watch', function() {
    gulp.watch(config.frontendPath + 'js/**/*.js', gulp.series('js'));
    gulp.watch(config.frontendPath + 'scss/**/*.scss', gulp.series('css'));
    // gulp.watch(config.frontendPath + 'img/sprite-icons/*', gulp.series('sprites'))
});

gulp.task('clean', function() {
    return gulp.src([
        config.frontendPath + 'dist/*'
    ], { read: false })
        .pipe(clean());
});

gulp.task('js', function() {
    return gulp.src([
        config.vendorPath + 'jquery/dist/jquery.min.js',
        config.frontendPath + 'libs/magnific-popup/jquery.magnific-popup.min.js',
        config.frontendPath + 'libs/lory/lory.min.js',
        config.frontendPath + 'libs/mask/jquery.mask.min.js',
        config.frontendPath + 'js/common.js'
    ])
        .pipe(gulpif(!config.production, sourcemaps.init()))
        .pipe(gulpif(config.production, uglify()))
        .pipe(concat('common.js'))
        .pipe(gulpif(!config.production, sourcemaps.write('./')))
        .pipe(gulp.dest(config.frontendPath + 'dist/js'));
});

gulp.task('css', function() {
    return gulp.src([
        config.frontendPath + 'libs/magnific-popup/magnific-popup.css',
        config.frontendPath + 'scss/common.scss'
    ])
        .pipe(gulpif(!config.production, sourcemaps.init()))
        .pipe(plumber())
        .pipe(gulpif(/[.]scss/, sass()))
        .pipe(autoprefixer())
        .pipe(gulpif(config.production, cssnano({
            discardComments: {
                removeAll: true
            }
        })))
        .pipe(concat('common.css'))
        .pipe(gulpif(!config.production, sourcemaps.write('./')))
        .pipe(gulp.dest(config.frontendPath + 'dist/css'));
});

// gulp.task('sprites', function() {

//     const isFileExist = fs.existsSync(config.frontendPath + 'dist/img/sprite.png');

//     if (isFileExist) {
//         gulp.src(config.frontendPath + 'dist/img/sprite.png', {read: false})
//             .pipe(clean());
//     }

//     const spriteData = gulp.src(config.frontendPath + 'img/sprite-icons/*.*') // путь, откуда берем картинки для спрайта
//         .pipe(spritesmith({
//             imgName: 'sprite.png',
//             imgPath: '../../dist/img/sprite.png', // на продакшен проверить путь
//             cssName: 'sprite.scss'
//         }));

//     spriteData.img.pipe(gulp.dest(config.frontendPath + 'dist/img/'));

//     return spriteData.css.pipe(gulp.dest(config.frontendPath + 'scss'));

// });

const tasks = ['clean', 'js', 'css'];

if (!config.production) {
    tasks.push('watch');
}

gulp.task('default', gulp.series(tasks));