// If the app environment is not set, we default to development
var ENV = process.env.APP_ENV || 'development';

// Here, we use dotenv  to load our env vars in the .env, into process.env
if (ENV === 'development') {
  require('dotenv').load();
}

var config = require('./app/config/publicConfig.js');
var fs = require('fs');
var gulp = require('gulp');
var gulpNgConfig = require('gulp-ng-config');

gulp.task('ng-config', function() {
 fs.writeFileSync('./app/config/config.json',
      JSON.stringify(config[ENV]));
  gulp.src('./app/config/config.json')
    .pipe(
      gulpNgConfig('auctionApp.config', {
        createModule: false
      })
    )
    .pipe(gulp.dest('./app/config/'))
});
