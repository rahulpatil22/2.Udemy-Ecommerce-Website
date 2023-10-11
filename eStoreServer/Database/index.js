//create a database connection

const mysql = require('mysql');

const connection = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"rahulpatil@190122",
    database:"estore",
    port:3306,
    multipleStatements:true
})

module.exports.connection = connection;