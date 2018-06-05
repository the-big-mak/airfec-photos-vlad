const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./connection.js');
const helper = require('../helpers/getPhotos.js');

const app = express();
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../public/dist')));

app.get('/photos', (req, res) => {
  let sql = 'SELECT * FROM photos';
  db.dbManipulator(sql, (err, data) => 
    err ? res.status(500).send() : res.status(200).send(data)
  )
});

// to update the database with pictures from s3
// helper.updatePhotos();

var PORT = PORT || 3001;
app.listen(PORT, () => console.log(`Photos module listening on port ${PORT}!`));
