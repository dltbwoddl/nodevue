new Promise((resolve, reject) => {
    console.log(1);

    resolve();
})
.then(() => {
    throw new Error('Something failed');
        
    console.log(2);
})
.catch(() => {
    console.log(3);
})
.then(() => {
    console.log(4);
});