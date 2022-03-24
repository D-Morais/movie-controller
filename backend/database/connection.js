const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Eu-s0u-A-L3Nd@?',
    database: 'movies_control'
})

module.exports = Connection;
