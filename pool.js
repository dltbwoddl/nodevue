// 싱글톤 패턴
//promisefy= . then
//블루버드 엄청 많이 쓰임.사진 추가
//모든 프로세스에서 then을 사용할 수 있도록 한다.
//then의 장점 : async지만 sync처럼 사용할 수 있다.
//함수 함수 함수로 구성된 것을 then, then으로 비교적 짧고 간결하게 코드를 작성할 수 있다.
//또한 try catch를 사용하지 않고 예외처리가 가능하다.
//.catch를 통해서
var Promise = require('bluebird'),
mysql = require('mysql')


Promise.promisifyAll(mysql);
// mysql을 프로미스파이하게 하여
//즉promise객체로 만들어주어 모두 then()메소드를 가지고 있다.
//콜백 함수 대신 then을 사용할 수 있게 된다.
Promise.promisifyAll(require('mysql/lib/Connection').prototype);
Promise.promisifyAll(require('mysql/lib/Pool').prototype);
