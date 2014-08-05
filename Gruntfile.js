
module.exports = function( grunt ) {

  grunt.initConfig({

    // get acccess to package.json
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        // define a string to put between each files
        process: function(src, filepath) {
          return '//================ ' + filepath + '\n' + src;
        }
      },
      dist: {
        // files to concatenate
        src: ['public/src/**/*.js'],
        dest: 'public/dist/app-combined.js'
      }
    },


    // JS tasks
    // check all js files for errors
    jshint: {
      files: ['Gruntfile.js','public/src/js/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },

    // todo: take all the js files and minify them into app.min.js

    // watch for changes in these files and do the tasks
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'concat']
    },

    // configure file change monitor - nodemon
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    // run watch and nodemon at the same time
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');

  // register the nodemon task when we run grunt
  grunt.registerTask('dev', ['jshint', 'concat', 'concurrent']);
  grunt.registerTask('default', ['jshint', 'concat', 'concurrent']);

};
