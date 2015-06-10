module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    less: {
      development: {
        files: {
          "css/dist/styles.css": "css/source/index.less"
        }
      }
    },
    watch: {
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['uglify'],
      }
    },
    uglify: {
    my_target: {
      files: {
        'dest/output.min.js': ['js/handlebars-v3.0.3.js', 'js/jquery-2.1.4.min.js', 'js/main.js']
      }
    }
  }
  });
}