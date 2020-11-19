const needle = require('needle')
const Promise = require('bluebird')

Promise.promisifyAll(needle)
var options={}
var current = Promise.resolve()

var URL_1 = 'https://www.naver.com/'
var URL_2 = 'https://www.daum.net/'
current.then(()=>{
    return needle.getAsync(URL_1,options)
}).then((res)=>{
    console.log(res)
}).then(()=>{
    return needle.getAsync(URL_2.options)
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

needle.get(URL_1,options,(err,res,body)=>{
    if (err) throw err;
    console.log(res)
    needle.get(URL_2,options,(err,res,body)=>{
        if (err) throw err;
        console.log(res)
    })
})