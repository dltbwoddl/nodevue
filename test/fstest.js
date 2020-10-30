const fs = require('fs');
const util = require('util')
// fs.readFile('test.json','utf-8',(err,data)=>{
//     if (err) return console.log(err);

//     util.log(data);
// })
// util.log('1111111111111');

let data2 = fs.readFileSync('test.json','utf-8');
util.log('data2 : ',data2)
util.log("222222222222222")