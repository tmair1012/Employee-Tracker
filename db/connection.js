//Create a data base for mysql use

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Moxie2020!',
    database: 'employeeData'

});

module.exports = db;