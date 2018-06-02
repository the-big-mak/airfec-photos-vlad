const mysql = require('mysql');
const mysqlConfig = require('../config.js');

const connection = mysql.createConnection(mysqlConfig);
connection.connect((err, data) => err ? console.log(err) : console.log('Connected to photoList'))

const dbManipulator = (sql, callback) => {
  connection.query(sql, (err, data) =>
  err ? callback(err, null) : callback(null, data)
  );
};

module.exports = {dbManipulator}