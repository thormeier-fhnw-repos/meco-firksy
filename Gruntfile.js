module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    '_dist/css/style.css' : 'sass/styles.scss'
                }
            }
        },
        assemble: {
            options:{
                layoutdir: 'pages/layouts',
                flatten: true,
                layout: 'default.hbs',
                partials: 'pages/partials/*.hbs'
            },
            page: {
                files: {
                    '_dist/': ['pages/*.hbs']
                }
            }
        },
        copy: {
            dist: {
                files: [
                    { cwd: 'node_modules/animate.css/', expand: true, src: ['animate.min.css'], dest: '_dist/css/' }
                ]
            }
        },
        sync: {
            main: {
                files: [
                    {
                        cwd: 'assets/',
                        src: ['**'],
                        dest: '_dist/assets/'
                    }
                ],
                updateAndDelete: true,
                compareUsing: "md5"
            }
        },
        connect: {
            options: {
                port: 8801,
                hostname: 'localhost', // change this to '0.0.0.0' to access the server from outside
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: './_dist'
                }
            }
        },

        watch: {
            assemble: {
                files: [
                    'pages/**'
                ],
                tasks: ['assemble']
            },
            css: {
                files: 'sass/*.scss',
                tasks: ['sass']
            },
            sync: {
                files: 'assets/**',
                tasks: ['sync:main']
            },
            livereload: {
                options: {
                    livereload: true,
                    open: true,
                    base: '_dist'
                },
                files: [
                    '_dist/**'
                ]
            },
            all: {
                files: '_dist/',
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-assemble');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sync');

    grunt.registerTask('default', ['assemble', 'sass', 'copy:dist', 'sync:main', 'connect:livereload', 'watch']);

};
