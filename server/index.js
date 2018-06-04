const express = require('express');
const app = express();
const db = require('./connection.js');
const helper = require('../helpers/getPhotos.js')


app.get('/', (req, res) => res.send('Hello World!'));

app.get('/photos', (req, res) => {
  let sql = 'SELECT * FROM photos';
  db.dbManipulator(sql, (err, data) => 
    err ? res.status(500).send() : res.status(200).send(data)
  )
});

// suppose to update the database with pictures from s3
// helper.updatePhotos();

var PORT = PORT || 3001;
app.listen(PORT, () => console.log(`Photos module listening on port ${PORT}!`));