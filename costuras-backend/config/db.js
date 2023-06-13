const mysql = require('mysql');
const db = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'costura'
});

exports.default = db;