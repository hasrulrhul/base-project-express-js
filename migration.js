var mysql = require('mysql');
var migration = require('mysql-migrations');
require('dotenv/config')

var connection = mysql.createPool({
   connectionLimit: 10,
   host : process.env.DB_HOST,
   user : process.env.DB_USER,
   password : process.env.DB_PASSWORD,
   database : process.env.DB_DATABASE
});

function executeQuery(sql, callback) {
   connection.getConnection((err, connection) => {
      if (err) {
         return callback(err, null);
      } else {
         if (connection) {
            connection.query(sql, function (error, results, fields) {
               connection.release();
               if (error) {
                  return callback(error, null);
               }
               return callback(null, results);
            });
         }
      }
   });
}

function query(sql, callback) {
   executeQuery(sql, function (err, data) {
      if (err) {
         return callback(err);
      }
      callback(null, data);
   });
}

migration.init(connection, __dirname + '/database/migrations');

module.exports = {
   query: query,
   connection: connection
}