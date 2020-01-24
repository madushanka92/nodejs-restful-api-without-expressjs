var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'datadb'
});

connection.connect((err) => {
    if (!err)
        console.log("DB connection done");
    else
        console.log("DB Connection failed : ", JSON.stringify(err, undefined, 2));
});

module.exports = connection;