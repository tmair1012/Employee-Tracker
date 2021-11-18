/* mysql connection */

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Moxie2020!',
    database: 'employeesTracker'

});

module.exports = db;