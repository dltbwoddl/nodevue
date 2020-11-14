var Promise = require("bluebird");
var needle = require('needle')
const fs = require('fs');
var async = require('async')

//https://stackoverflow.com/questions/19385745/nodejs-with-async-requests/19385911#19385911
//eachSeries,mapSeries 사용 이해하기.
//다른 코드 이해 하고 promise사용하는 이유 생각하기.
URLs = ["http://a", "http://s", "http://d"];
function iterator1(URL, done){
  var options = {};
  needle.get(URL, options, function(error, response, body){ 
    if(error){ return done(error) };
    processAndSaveInDB(body, function(err){
      if(err){ return done(err) };
      done(null);
    });
  });
};

async.eachSeries(URLs
, iterator1
, function (err){
  // global callback for async.eachSeries
  if(err){ 
      console.log(1)
    console.log(err) 
  } else {
    console.log('All Needle requests successful and saved');
  }
});

// Here is a similar technique using async.map, it may be more suitable
function iterator2(URL, done){
  var options = {};
  needle.get(URL, options, function(error, response, body){ 
    if(error){ return done(error) };
    done(null, body);
  });
};
console.log(2)
async.mapSeries(URLs
, iterator2
, function (err, results){
  // global callback for async.mapSeries
  if(err){ 
    console.log(3)
    console.log(err) 
  } else {
    console.log('All Needle requests successful');
    // results is a 1 to 1 mapping in order of URLs > needle.body
    processAndSaveAllInDB(results, function(err){
      if(err){ return done(err) };
      console.log('All Needle requests saved');
      done(null);
    });
  }
});