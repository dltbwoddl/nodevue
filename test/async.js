var async = require('async');
const { fromCallback } = require('bluebird');
var needle = require('needle')

URLs = ["https://www.naver.som/", "https://www.daum.net/","https://github.com/"]
function iterator1(URL,callback){;
  var options = {};
  needle.get(URL, options, function(error, response, body){ 
    if(error){ return(error) };
    console.log(URL)
    callback(null)
  });
};

async.each(URLs
, iterator1
, function (err){
    console.log(2)
  if(err){ 
    console.log(err);
  } else {
    console.log('All Needle requests successful and saved');
  }
});