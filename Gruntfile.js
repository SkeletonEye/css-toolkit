module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      build: {
        files: {
          'build/toolkit.min.css': 'build/toolkit.css'
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({
            browsers: 'last 2 versions'
          })
        ]
      },
      build: {
        src: 'build/toolkit.css'
      }
    },

    sass: {
      options: {
        sourcemap: 'none',
        style: 'expanded'
      },
      build: {
        files: {
          'build/toolkit.css': 'scss/index.scss'
        }
      }
    },

    watch: {
      css: {
        files: ['scss/**/*.scss'],
        tasks: ['default']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', ['sass', 'postcss', 'cssmin']);
}
