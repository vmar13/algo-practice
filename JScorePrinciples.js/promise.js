let p = new Promise ((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
});

p.then((message) => {
    console.log(`This is in the then portion ${message}`);
}).catch((message) => {
    console.log(`This is the catch portion ${message}`);
})

console.log(p)