const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./connection.js');
const helper = require('../helpers/getPhotos.js');

const PORT = process.env.PORT || 3003;

const app = express();
app.use(cors());
let needPhotos = true;

if (needPhotos) {
  helper.updatePhotos();
  needPhotos = false;
}

app.use('/rooms/:id', express.static(path.join(__dirname, '../public/dist')));

app.get('/Photos/:id', (req, res) => {
  const sql = `SELECT * FROM photos WHERE roomid = ${req.params.id}`;
  db.dbManipulator(sql, (err, data) => (err ? res.status(500).send() : res.status(200).send(data)));
});

// to update the database with pictures from s3

app.listen(PORT);
