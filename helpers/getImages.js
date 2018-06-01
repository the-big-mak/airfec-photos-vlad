const request = require('request');
const config = require('./config.js');

let getImages = (callback) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    },
  };

  request(options, function(err, data) {
    if (err) {
      callback(err, null);
      console.log('s3 error');
    } else {
      console.log(data);
    }
  })
}

module.exports.getReposByUsername = getReposByUsername;