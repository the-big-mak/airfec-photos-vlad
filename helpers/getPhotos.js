const config = require('./config.js');
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: config.header.accessKeyId,
  secretAccessKey: config.header.secretAccessKey,
  region: 'us-east-2'
});


const transformer = (array) => {
  return array.map((img) => 'https://s3.us-east-2.amazonaws.com/airfec/' + img.Key);
}

const getPhotos = (callback) => {

  const bucketParams = {
     Bucket: 'airfec'
  };

  const s3 = new AWS.S3();
                                     
  s3.listObjects(bucketParams, function(err, data) {
     if (err) {
        callback(transformer(data.Contents), null)
        console.log("Error", err);
     } else {
        callback(null, transformer(data.Contents))
        console.log("Success");
     }
  });
}

module.exports.getPhotos = getPhotos;