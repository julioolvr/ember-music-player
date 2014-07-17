module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {}
    },
    emberTemplates: {
      'js/templates.js': 'js/handlebars/**/*.hbs',

      options: {
        templateBasePath: /js\/handlebars/
      }
    },
    watch: {
      emberTemplates: {
        files: 'js/handlebars/**/*.hbs',
        tasks: ['emberTemplates']
      }
    }
  });

  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);

};
