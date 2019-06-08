module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/style.css': ['css/style.scss']
        }
      }
    },
    watch: {
      scss: {
        files: ['css/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
  require('load-grunt-tasks')(grunt);
};