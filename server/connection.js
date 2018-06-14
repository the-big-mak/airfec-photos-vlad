const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysqlConfig.js');

const connection = mysql.createConnection(mysqlConfig);
connection.connect();

const dbManipulator = (sql, callback) => {
  connection.query(sql, (err, data) => (
    err ? callback(err, null) : callback(null, data)
  ));
};

module.exports = { dbManipulator };
