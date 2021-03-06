module.exports = function(grunt) {
  require('jit-grunt')(grunt)
  grunt.initConfig({
    aws: grunt.file.readJSON( 'aws-keys.json' ),
    aws_s3: {
        options: {
            accessKeyId: '<%= aws.AWSAccessKeyId %>',
            secretAccessKey: '<%= aws.AWSSecretKey %>', 
            region: 'us-east-2'
        },
        dist: {
            options: {
                bucket: 'listing-bundle'
            },
            files: [
              {
                  expand: true,
                  cwd: 'client/dist/',
                  src: [ 'bundle.js' ],
                  dest: '/'
              }
          ]
        }
    }
  });

  grunt.registerTask( 'deploy', 'aws_s3:dist' );
};

