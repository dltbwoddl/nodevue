const utils = require('./utils')

let str = "hello";
let key = "hi"
let enc = utils.encrypt(str,key)
console.log(enc);
let dec=utils.decrtpt(enc,key)
console.log(dec);
let sha=utils.encryptSha2(str,'hi')
console.log(sha)

return
let url ='https://www.naver.com/';
utils.ogsinfo(url,(err,ret)=>{
    console.log(err,ret.ogImage.url);
});