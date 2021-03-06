/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    favicons: {
      options: {
        html: 'index.html',
        HTMLPrefix: 'images/favicon/'
      },
      icons: {
        src: 'images_src/city.png',
        dest: 'images/favicon'
      }
    },
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
            { width: 600, quality: 60 },
            { width: 120, quality: 60, suffix: '-small_1x' },
            { width: 240, quality: 60, suffix: '-small_2x' },
          ]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.jpg'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          cwd: 'images_src/',
          src: '*.png',
          dest: 'images/'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-favicons');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images', 'favicons']);

};
