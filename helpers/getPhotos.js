const config = require('./config.js');
const AWS = require('aws-sdk');
const db = require('../server/connection.js');

AWS.config.update({
  accessKeyId: config.header.accessKeyId,
  secretAccessKey: config.header.secretAccessKey,
  region: 'us-east-2'
});


const validUrlsGenerator = (urls) => {
  urlReplacer(urls.map((img) => 'https://s3.us-east-2.amazonaws.com/airfec/' + img.Key));
};

const urlReplacer = (arrayOfUrls) => {

  const currentUrl = (urls) => {
    return urls[Math.floor(Math.random() * urls.length)];
  };

  for (let i = 0; i < 1001; i++) {
    let sql = `UPDATE photos SET url='${currentUrl(arrayOfUrls)}' WHERE id='${i}'`;
    db.dbManipulator(sql, (err, data) => {
      if (err) {
        console.log(err);
      };
    });
  };
};

const updatePhotos = () => {

  const bucketParams = {
     Bucket: 'airfec'
  };

  const s3 = new AWS.S3();
                                     
  s3.listObjects(bucketParams, function(err, data) {
     if (err) {
      console.log("Error", err);
     } else {
      validUrlsGenerator(data.Contents);
      // console.log(`Got ${data.Contents.length} urls from s3 server`);
     }
  });
}

module.exports.updatePhotos = updatePhotos;