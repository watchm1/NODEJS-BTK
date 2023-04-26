const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'node_app',
    password:'WebApiTest123',
    port: 3306
});

module.exports = connection.promise();