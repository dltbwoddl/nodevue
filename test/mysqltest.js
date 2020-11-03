const { ContextRunnerImpl } = require('express-validator/src/chain')
const mysql = require('mysql')

const connection = mysql.createConnection({

})

connection.connect()
//다른 프로세스가 연결 실행 별도의 프로세스로

// //프로세스가 연결되었을 때 쿼리 실행
// connection.query(,()=>{

// })

connection.end()