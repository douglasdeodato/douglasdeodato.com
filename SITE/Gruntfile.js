module.exports = function(grunt) {
    var config = {};

    //src ===============================
    var src;
    config.src = src = {
        sassMain: 'scss/main.scss',
        distFolder: 'public/stylesheets/lovelycss.dist.css',
        devFolder: 'public/stylesheets/lovelycss.dev.css',
        sassFolder: 'scss/**/*.scss',
        serverPort: 8000
    };


    //Concat ===============================

    var concat
    config.concat = concat = {};

    concat.dev = {
        files: {
            "public/myapp.development.js": [
                "with-bootstrap/public/js/vendor", "with-bootstrap/public/js/**/*.js"
            ]
        }
    };

    //Watch ===============================
    config.watch = {
        scripts: {
            files: ["<%= src.sassFolder %>"],
            tasks: ["sass:dist"]
        }
    }

    //Sass ===============================
    var sass;
    config.sass = sass = {};

    //distribution
    sass.dist = {
        options: {
            style: "compressed",
            noCache: true,
            sourcemap: 'none',
            update: true
        },
        files: {
            "<%= src.distFolder %>": "<%= src.sassMain %>"
        }
    };

    //development env.
    sass.dev = {
        options: {
            style: "expanded",
            lineNumber: true,
        },
        files: {
            "<%= src.devFolder %>": "<%= src.sassMain %>"
        }
    };


    //grunt serve ===============================
    config.connect = {
        server: {
            options: {
                livereload: true,
                port: "<%= src.serverPort %>"
            }
        }
    };

 //   config.exec = {
 //       run_server: 'node server.js'
 //  }



    //Register custom tasks ===============================
    grunt.registerTask('default', ['dev']);
    grunt.registerTask('dev', ['concat:dev', 'sass:dev']);
    grunt.registerTask('dist', ['concat:dev', 'sass:dist']);
    grunt.registerTask('serve', ['connect:server', 'watch']);
   // grunt.registerTask('serve', ['exec:run_server', 'watch']);
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt, {
        scope: 'devDependencies'
    });



    //General setup ===============================
    grunt.initConfig(config);

};
