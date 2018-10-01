'use strict';

const config = require('../config.js');
const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 100,
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

// wrapper function
// taken from http://stackoverflow.com/questions/17015590/node-js-mysql-needing-persistent-connection
// MINOR edits by me

var query = function () {
    var sql_args = [];
    var args = Array.prototype.slice.call(arguments);

    var callback = args[args.length - 1]; //last arg is callback
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            return callback(err);
        }
        if (args.length > 2) {
            sql_args = args[1];
        }
        connection.query(args[0], sql_args, function (err, results) {
            connection.release();
            if (err) {
                console.log(err);
                return callback(err);
            }
            callback(null, results);
        });
    });
};

export default query;
