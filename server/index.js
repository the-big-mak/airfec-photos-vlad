const express = require('express');
// const axios = require('axios');
const path = require('path');
const db = require('./connection.js');
// const helper = require('../helpers/getPhotos.js');
const PORT = process.env.PORT || 3001;

const app = express();

app.use('/', express.static(path.join(__dirname, '../public/dist')));

app.get('/photos/:roomnumber', (req, res) => {
  const sql = `SELECT * FROM photos WHERE roomid = ${req.params.roomnumber}`;
  db.dbManipulator(sql, (err, data) => (err ? res.status(500).send() : res.status(200).send(data)));
});

// to update the database with pictures from s3
// helper.updatePhotos();

app.listen(PORT);
