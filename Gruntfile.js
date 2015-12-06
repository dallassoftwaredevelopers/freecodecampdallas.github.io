module.exports = function(grunt) {

// Load grunt tasks automatically
require('load-grunt-tasks')(grunt);

// Time how long tasks take. Can help when optimizing build times
require('time-grunt')(grunt);

grunt.initConfig({
  pkg: '<json:package.json>',
  less: {
    production: {
      options: {
        paths: ["bower_components/bootstrap/less", "bower_components/fontawesome/less"],
        yuicompress: true
      },
      files: {
        "assets/css/site.css": "assets/_less/site.less"
      }
    }
  },
  uglify: {
    bootstrap: {
      files: {
        'assets/js/bootstrap.min.js': ['bower_components/bootstrap/js/collapse.js',
                                       'bower_components/bootstrap/js/scrollspy.js',
                                       'bower_components/bootstrap/js/button.js',
                                       'bower_components/bootstrap/js/ap-affix.js']
      }
    },
    jquery: {
      files: {
        'assets/js/jquery.min.js': 'bower_components/jquery/jquery.js'
      }
    }
  },
  copy: {
    fontawesome: {
      files: [
        {expand: true, cwd: 'bower_components/fontawesome/fonts/', src: ['**'], dest: 'assets/fonts/'},
        {expand: true, cwd: 'bower_components/fontawesome/css/', src: ['font-awesome.min.css'], dest: 'assets/css/'}
      ]
    },
    bootstrap: {
      files: [
        {expand: true, cwd: 'bower_components/bootstrap/dist/fonts/', src: ['**'], dest: 'assets/fonts/'},
        {expand: true, cwd: 'bower_components/bootstrap/dist/css/', src: ['bootstrap.min.css'], dest: 'assets/css/'},
      ]
    }
  },
  jekyll: {
    dist: {
      options: {
	config: "_config.yml"
      }
    }
  },
  exec: {
    build: {
      cmd: 'jekyll build'
    },
    serve: {
      cmd: 'jekyll serve --watch'
    },
    deploy: {
      cmd: 'git push origin gh-pages'
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-exec');
grunt.loadNpmTasks('grunt-jekyll');

//grunt.registerTask('default', [ 'less', 'uglify', 'copy', 'jekyll' ]);
grunt.registerTask('default', [ 'less', 'copy', 'jekyll' ]);
grunt.registerTask('deploy', [ 'default', 'exec:deploy' ]);

};
