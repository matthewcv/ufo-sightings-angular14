module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'node_modules/angular/angular.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app.js',
      '*.js',
    ],
    exclude:[
        "server.js",
        "karma.conf.js"
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],
    //browsers: ['Firefox'],
    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            ],


  });
};