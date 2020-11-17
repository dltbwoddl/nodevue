const { resolve } = require("bluebird");

// function getNum() {
//     return new Promise(function (resolve, reject) {
//         var num = 10;
//         resolve(num)
//     });
// }
// getNum().then(function (resolvednum) {
//     console.log(2)
//     console.log(resolvednum);
//     resolve(1)

// }).then((resolvednum_1) => {
//     console.log(resolvednum_1)
//     console.log(3)
// })

// function getError() {
//     return new Promise(function (resolve, reject) {
//         var num = 10;
//         reject(new Error("reject"))
//     });
// }
// getError().then(function (resolvednum) {
//     console.log(resolvednum);
// }).catch(function(err){
//     console.log(1)
//     console.log(err)
// })

function getNum() {
    return new Promise(function (resolve, reject) {
        var num = 10;
        if (num==10){
            resolve(num)
        }else{
            reject(new Error('not 10'))
        }
    });
}
getNum().then(function (resolvednum) {
    console.log(resolvednum);
    return(resolvednum);
}).catch((err) => {
    console.log(err)
}).then(function(resolvednum_1){
    console.log(resolvednum_1)
    resol
}).then(()=>{
    console.log(1)
})