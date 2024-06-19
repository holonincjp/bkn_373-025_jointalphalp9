const gulpset = require('./../../gulpset');

gulpset.confs.watch = [
  {
    watch: [gulpset.paths.src + '**/*.ejs'],
    // run: ['ejs', 'styleguide']
    run: ['ejs']
  },
  {
    watch: [gulpset.paths.src + '**/*.scss'],
    // run: ['sass', 'stylelint', 'styleguide']
    run: ['sass']
  },
  {
    watch: [gulpset.paths.src + '**/*.js'],
    run: ['eslint']
  },
  {
    watch: [
      // gulpset.paths.src +'**/*.{html,htm,css,ico,json,xml,woff,woff2,ttf,mp4,webm,jpeg,jpg,gif,png,svg,webp,map,mp3,pdf}'
        gulpset.paths.src +
        "**/*.{html,htm,css,js,ico,json,xml,woff,woff2,ttf,mp4,webm,jpeg,jpg,gif,png,svg,webp,map,mp3,pdf}",
        "!**/js/lib/*.js",
    ],
    run: ['copy']
  }
];

//----------------------------------------------------------------------------------------------------
///
const gulp = require('gulp');

gulpset.tasks.watch = (cb, conf) => {
  conf = conf || gulpset.confs.watch || {};
  for (let i = 0, iLen = conf.length; i < iLen; i++) {
    const node = conf[i];
    gulp.watch(node.watch, gulp.series(...node.run));
  }
  cb();
};

// @verbose
gulpset.gulp.task('watch', cb => gulpset.tasks.watch(cb));
