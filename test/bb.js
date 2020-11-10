const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
fs.readFileAsync("message.txt")
.then(console.log)
.catch(console.log)
.then(()=>{
    fs.readFileAsync("message.txt").then(console.log)
})
.catch(console.log)

// const fs = require("fs");
fs.readFile("message.txt", (err, data) => {
  if(err) throw err;
  console.log(data);
  fs.readFile("message.txt", (err, data) => {
    if(err) throw err;
    console.log(data);
  });
});