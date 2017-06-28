// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {
    //  var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;
    var serveStatic = require('serve-static');

    // ===========================================================================
    // CONFIGURE GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({

        // get the configuration info from package.json ----------------------------
        // this way we can use things like name and version (pkg.name)
        pkg: grunt.file.readJSON('package.json'),

        // all of our configuration will go here
        //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//
        distDir: 'dist',
        jsSrcDir: 'src/**/',
        jsDistDir: 'dist/javascripts/',
        cssSrcDir: 'src/assets/',
        cssDistDir: 'dist/stylesheets/',
        applicationFiles: {
            js: [
                'src/**/*module*.js', 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js'
            ],
            jsunit: ['test/unit/**/*.spec.js'],

            appHtmlFiles: ['src/app/**/*.tpl.html'],

            shellPage: ['src/index.html'],
            cssFile: 'src/assets/less/main.less'
        },

        //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//
        html2js: {
            app: {
                options: {
                    base: 'src/app'
                },
                src: ['<%= applicationFiles.appHtmlFiles %>'],
                dest: 'dist/templates-app.js'
            }
        },
        //***************************************************************************************************//

        jshint: {
            src: ['<%=applicationFiles.js%>'],
            gruntfile: ['Gruntfile.js'],
            options: {
                reporter: require('jshint-stylish'), // use jshint-stylish to make our errors look and read good
                curly: true,
                node: true,
                immed: true,
                newcap: true,
                noarg: true,
                laxcomma: true,
                sub: true,
                boss: true,
                eqnull: true,
                // unused: true,
                "predef": ["angular", "routingConfig"]
            },
            globals: {}
        },
        //***************************************************************************************************//
        copy: {
            main: {
                files: [

                    {
                        expand: false,
                        src: ['<%=applicationFiles.shellPage%>'],
                        dest: 'dist/index.html',
                        flatten: true
                    }, {
                        expand: true,
                        src: '<%=applicationFiles.js%>',
                        dest: 'dist/'
                    }, {
                        expand: true,
                        src: [
                            'src/assets/**/*', '!src/assets/js/**/*.js'
                        ],
                        dest: 'dist/'
                    }, {
                        expand: true,
                        src: 'src/assets/js/revolution-slider/**/*',
                        dest: 'dist/'
                    }
                ]
            }
        },
        //***************************************************************************************************//

        //***************************************************************************************************//

        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: [
                    'src/assets/js/custom.js', 'src/assets/js/jquery-plugin-collection.js'
                ],
                dest: 'dist/javascripts/<%= pkg.name %>.js'
            },
            css: {
                src: ["src/assets/css/bootstrap.min.css",
                    "src/assets/css/jquery-ui.min.css",
                    "src/assets/css/animate.css",
                    "src/assets/css/css-plugin-collections.css",
                    "src/assets/css/menuzord-skins/menuzord-rounded-boxed.css",
                    "src/assets/css/preloader.css",
                    "src/assets/css/custom-bootstrap-margin-padding.css",
                    "src/assets/css/responsive.css",
                    "src/assets/js/revolution-slider/css/settings.css",
                    "src/assets/js/revolution-slider/css/layers.css",
                    "src/assets/js/revolution-slider/css/navigation.css",
                    "src/assets/css/colors/theme-skin-color-set-1.css"
                ],
                dest: 'dist/stylesheets/<%= pkg.name %>.css'
            }
        },
        //***************************************************************************************************//

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%=grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/javascripts/<%= pkg.name %>.min.js': ['dist/javascripts/<%= pkg.name %>.js']
                }
            }
        },
        //***************************************************************************************************//

        cssmin: {
            add_banner: {
                options: {
                    banner: '/*! <%= pkg.name %> <%=grunt.template.today("dd-mm-yyyy") %> */\n'
                },
                files: {
                    '<%=cssDistDir%><%= pkg.name %>.min.css': ['<%= concat.css.dest %>']
                }
            }
        },
        //***************************************************************************************************//

        watch: {

            files: ['src/**/*.*'],
            tasks: ['akbar'],
            options: {
                livereload: true
            }
        },
        //***************************************************************************************************//

        // configure wiredep -
        wiredep: {

            task: {

                // Point to the files that should be updated when
                // you run 'grunt wiredep'
                src: ['dist/index.html'],

                options: {
                    // See wiredep's configuration documentation for the options
                    // you may pass:

                    // https://github.com/taptapship/wiredep*configuration
                }
            }
        },
        //***************************************************************************************************//

        injector: {
            options: {
                ignorePath: 'dist/'
            },
            bower_dependencies: {
                files: {
                    'dist/index.html': ['bower.json', 'dist/**/*module*.js', 'dist/**/*.js', '!dist/javascripts/*.min.js', 'dist/stylesheets/<%= pkg.name %>.css']
                }
            }
        },
        //***************************************************************************************************//

        // connect: {
        //     proxies: [{
        //             //dev_server
        //             context: '/vega',
        //             host: 'SGDC2NGHS001D',
        //             port: 10700,
        //             https: false,
        //             changeorigin: false
        //         }

        //     ],
        //     server: {
        //         options: {
        //             port: 9000,
        //             livereload: true,
        //             base: ['dist', ''],
        //             open: true
        //         }
        //     }
        // }
        // connect: {
        //     // 'static': {
        //     //     options: {
        //     //         hostname: 'localhost',
        //     //         //port: 9001
        //     //     }
        //     // },
        //     server: {
        //         options: {
        //             hostname: 'localhost',
        //             port: 9000,
        //             base: ['dist', ''],
        //             //livereload: true,
        //             open:true,
        //             middleware: function(connect) {
        //                 return [proxySnippet];
        //             }
        //         },
        //         proxies: [{
        //             context: '/vega',
        //             host: 'SGDC2NGHS001D',
        //             port: 10700
        //         }]
        //     }
        // }

        // open: {
        //     dev: {
        //         url: 'http://localhost:8001'
        //     }
        // },

        // connect: {
        //     keepalive:true,
        //     staticserver: {
        //         options: {
        //             hostname: 'localhost',
        //             port: 8001
        //         }
        //     },
        //     server: {
        //         options: {
        //             hostname: 'localhost',
        //             port: '9000',
        //             open: true,
        //             middleware: function() {
        //                 return [proxySnippet];
        //             }
        //         },
        //         proxies: [{
        //                 context: '/vega',
        //                 host: 'SGDC2NGHS001D',
        //                 port: 10700
        //             }
        //             // , {
        //             //     context: '/',
        //             //     host: 'localhost',
        //             //     port: 8001
        //             // }
        //         ]
        //     }
        // },

        connect: {
            options: {
                port: 9001, // This is your grunt server port.
                hostname: 'localhost', // Your machine as host
                livereload: 35729 // Port for livereload to connect
            },
            proxies: [{
                context: '/vega', // the api pattern you need to proxy(i am going to proxy    all the requests that are having a path as /api)
                host: 'SGDC2NGHS001D', // the backend server host ip
                port: 10700 // the backend server port
            }],
            livereload: {
                options: {
                    // ws: true,
                    //keepalive: true,
                    open: true,
                    base: ['dist'],
                    middleware: function(connect, options) {
                        var middlewares = [];

                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }

                        // Setup the proxy
                        middlewares.push(require('grunt-connect-proxy/lib/utils').proxyRequest);

                        // Serve static files
                        options.base.forEach(function(base) {
                            middlewares.push(serveStatic(base));
                        });

                        //////////
                        //middlewares.push(connect.static('.tmp'));
                        middlewares.push(connect().use('/vendors', serveStatic('./vendors')));
                        // middlewares.push(connect().use(
                        //     '/app/styles',
                        //     connect.static('./app/styles')
                        // ));
                        //middlewares.push(connect.static(appConfig.app))
                        //////////

                        return middlewares;
                    }
                }
            }
        }

        //***************************************************************************************************//
    }); //end of configuration

    //\\
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-html2js');

    //\\
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-open');

    //\\
    //grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-wiredep'); //<!-- bower:js -->    <!-- endbower -->
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('jshint-stylish');

    // grunt.registerTask('vega', [
    //     'jshint',
    //     'concat',
    //     'uglify',
    //     'cssmin',
    //     'copy',
    //     'injector',
    //     'connect',
    //     'watch'
    // ]);

    grunt.registerTask('server', [
        //'configureProxies:server',
        // 'connect:staticserver',
        //'connect:server',
        // 'open:dev'

        'configureProxies',
        'connect:livereload'
    ]);

    grunt.registerTask('akbar', [
        'html2js',
        'jshint',
        'concat',
        'uglify',
        'cssmin',
        'copy',
        'injector',
        'server',
        'watch'
    ]);

};
