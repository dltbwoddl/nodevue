const express = require('express')
// expree모듈을 가져온다.
const app=express(),
testjson = require('./test/test.json')
//app이 초기화된 것이다.

app.use(express.static('public'))
// 이미지, CSS 파일 및 JavaScript 파일과 같은 정적 파일을 제공하려면 Express의 기본 제공 미들웨어 함수인 express.static을 사용하십시오.
app.set('views',__dirname+'/views')
app.set('view engine','ejs')
// Express가 템플리트를 표현하려면(렌더링) 다음과 같은 애플리케이션 설정이 필요합니다.
// views, 템플리트가 있는 디렉토리. 예: app.set('views', './views')
// view engine, 사용할 템플리트 엔진. 예: app.set('view engine', 'pug')

app.engine('html', require('ejs').renderFile)
// The app.engine() function is used to register the given template engine callback as ext. By default the Express itself will require() the engine based on the file extension.
//html 형식으로 ejs를 쓰겠다는

app.get('/',(req,res)=>{
    // res.send('hello nodejs~!')
    // res.json(testjson)
    res.render('index',{name : '홍길동s'})
})

const server = app.listen(3000,function(){
    console.log("port 3000")
})
// express app을 run시키는 코드
