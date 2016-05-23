module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        express: {            
            server: {
               options: {
                   port: 3000,
                   server: './server.js'
               }
            }
        },

        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: [],
                options: {
                    spawn: false
                }
            }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', []);
    grunt.registerTask('server', ['express:server', 'watch']);
    
};