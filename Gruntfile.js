const sass = require("node-sass");

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    concat: {
      js: {
        src: ["source/js/carousel.js",
          "source/js/dropdown.js",
          "source/js/header.js",],
        dest: "dist/js/main.js",
      }
    },
      copy: {
        fonts: {
          files: [{
              expand: true,
              src: ['*.*'],
              cwd: 'source/fonts',
              dest: 'dist/fonts'
          }]
      },
        images: {
          files: [
            {
              expand: true,
              src: ["**/*.*"],
              cwd: "source/images",
              dest: "dist/images",
            },
          ],
        },
        video: {
          files: [{
              expand: true,
              src: ['**/*.*'],
              cwd: 'source/videos',
              dest: 'dist/videos'
          }]
        },
      },
      watch: {
        all: {
          files: ["source/**"],
          tasks: ["sass", "concat", "copy", "bake:build"],
        }
      },
      sass: {
        options: {
          implementation: sass,
          sourceMap: false,
        },
        dist: {
          files: {
            "dist/main.css": "source/sass/main.scss",
          },
        },
      },
        bake: {
          build: {
            options: {},
            files: {
              "dist/index.html": "source/templates/pages/index.html",
              "dist/reachTv.html": "source/templates/pages/reachTv.html",
              "dist/categories.html": "source/templates/pages/categories.html",
            },
          },
        },
  });
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-bake");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("default", ["watch"]);
};
