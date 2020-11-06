const utils = require('./utils')

let url ='https://www.naver.com/';
utils.ogsinfo(url,(err,ret)=>{
    console.log(err,ret.ogImage.url);
});