const request = require('request');
const config = require('./config.js');
const AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: config.header.accessKeyId,
  secretAccessKey: config.header.secretAccessKey,
  region: 'us-east-2'
});

const getPhotos = () => {

  const bucketParams = {
     Bucket: 'airfec'
  };

  const s3 = new AWS.S3();
                                     
  s3.listObjects(bucketParams, function(err, data) {
     if (err) {
        console.log("Error", err);
     } else {
        console.log("Success", data);
     }
  });
}

module.exports.getPhotos = getPhotos;