const { ContextRunnerImpl } = require('express-validator/src/chain')
const { database } = require('firebase')
const mysql = require('mysql')

//연결을 하기전 초기화
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'test',
    password: '123456',
    database: 'testDB'
})

connection.connect()
//데이터 베이스와 연결
//다른 프로세스가 연결 실행 별도의 프로세스로

//비동기 처리하는 부분
//프로세스가 연결되었을 때 쿼리 실행
connection.query('update User set lastlogin=now() where uid=?', ['user1'], function (error, results, fields) {
    //이안에 있는 코드는 메인스레드가 실행
    if (error) throw error;
    console.log(results[0])

})
//동시에 병렬 처리되기 때문에 아래 찍히는 데이터는 바뀌지 않을 수 있다.
//위의 프로세스가 빠르게 처리되면 바뀐 상태에서 찍힐 수 있다.
connection.query('select * from User where uid=?', ['user2'], function (error, results, fields) {
    //이안에 있는 코드는 메인스레드가 실행
    if (error) throw error;
    console.log(results[0])

})

//만약 반드시 데이터가 수정된 후에 두번째 query부분이 실행되어야 한다면 
//콜백함수안에 넣어주면된다.
connection.query('update User set lastlogin=now() where uid=?', ['user1'], function (error, results, fields) {
    //이안에 있는 코드는 메인스레드가 실행
    if (error) throw error;
    console.log(results)
    connection.query('select * from User where uid=?', ['user2'], function (error, results, fields) {
        //이안에 있는 코드는 메인스레드가 실행
        if (error) throw error;
        console.log(results)
        connection.end()

    })

})
//커넥션 클로스, 이것을 하지 않으면 계속 연결되어 있다.
//발생할 수 있는 에러는?
//connect->query->end 순서대로 처리한다.
//query안에 있는 query는 여기에 없다.
//때문에 프로세스가 두번째 query가 실행되지 않고 끝난다.
//error : cannot enqueue query after invoking quit발생
//end를 두번째 쿼리 안에 넣어줘야 한다.
//이렇게 뎁스가 길어지면서 콜백함수 지옥이라는 명칭이 등장
//이런 문제를 해결하는 도구가 블루버드이다.