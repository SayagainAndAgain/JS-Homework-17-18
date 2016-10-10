module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'js/*.js',
                ],
                dest: 'build/js/production.js',
            }
        },
        uglify: {
            build: {
                src: 'build/js/production.js',
                dest: 'build/js/production.min.js'
            }
        },
        concat_css: {
            options: {},
            all: {
              src: ["css/*.css"],
              dest: "build/css/styles.css"
            },
        },
        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          combine: {
            files: {
              'build/css/styles.min.css': ['build/css/*.css', '!build/css/*.min.css']
            }
          }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin']);
};