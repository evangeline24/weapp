
const pg = require('pg'); 

const connection = new pg.Client({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'postgres'
});

connection.connect(function(err) { 
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('DB conectada');
    }
});

module.exports = connection; 
