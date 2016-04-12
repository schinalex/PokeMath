'use strict'
var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var cleanCSS = require('gulp-clean-css')
var rename = require('gulp-rename')
var folder = require('gulp-folder')
var babel = require('gulp-babel')
var browserSync = require('browser-sync').create()
var reload = browserSync.reload
var dependencies = ['./node_modules/angular/angular.min.js',
                    './node_modules/angular-aria/angular-aria.min.js',
                    './node_modules/angular-animate/angular-animate.min.js',
                    './node_modules/angular-material/angular-material.min.js',
                    './node_modules/angular-material/angular-material.min.css',
                    './node_modules/angular-messages/angular-messages.min.js']

gulp.task('serve', function () {
  browserSync.init({
    server: {baseDir: './app'},
    port: 8080
  })
})

gulp.task('babel', function () {
  gulp.src('./src/js/*.js')
    .pipe(babel( {presets: ['es2015']} ))
    .pipe(gulp.dest('./app/js/'))
})

gulp.task('sass', function () {
  gulp.src('./src/style/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream())
})

gulp.task('html', function () {
  gulp.src('./src/*.html')
    // I'll do something later... maybe
    .pipe(gulp.dest('./app/'))
})

gulp.task('img', function () {
  gulp.src('./src/img/**/*')
    // I'll do something later... maybe
    .pipe(gulp.dest('./app/img'))
})

gulp.task('mincss', function () {
  gulp.src('./app/css/style.css')
    .pipe(cleanCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./app/css'))
})

gulp.task('vendors', function () {
  gulp.src(dependencies)
    // I'll do something later... maybe
    .pipe(gulp.dest('./app/vendors/'))
})

gulp.task('fw', function () {
  folder({
    root: './app',
    folders: {
      css: './css',
      js: './js',
      img: './img',
      vendors: './vendors'
    }
  })
})

gulp.task('watch', function () {
  gulp.watch('./src/style/**/*.sass', ['sass'])
  gulp.watch('./src/js/*.js', ['babel'])
  gulp.watch('./src/*.html', ['html'])
  gulp.watch('./app/*.html').on('change', reload)
  gulp.watch('./app/js/*.js').on('change', reload)
  gulp.watch('./src/img/*', ['img'])
})

gulp.task('default', ['fw', 'serve', 'sass', 'babel', 'html', 'img', 'vendors', 'watch'])
