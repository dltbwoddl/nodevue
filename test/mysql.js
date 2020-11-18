var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
});
connection.connect();
connection.query(`CREATE TABLE test1 (
        seq        INT NOT NULL AUTO_INCREMENT,
        mb_id     VARCHAR(20),
        mb_pw    VARCHAR(20),
        address   VARCHAR(50),
        mb_tell    VARCHAR(50),  
         PRIMARY KEY(seq)
       ) ENGINE=MYISAM CHARSET=utf8;`, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('success1')
    connection.query('SELECT * FROM test1', function (error, results, fields) {
        if (error) {
            console.log(error);
            return
        }
        console.log(results);
        console.log('success2')
        connection.end();
    });
})

