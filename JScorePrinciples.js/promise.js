// const userLeft = false;
// const userWatchingCatMeme = false;

// function watchTutorialPromise() {
//     return new Promise((resolve, reject) => {
//         if(userLeft) {
//             reject({
//                 name: 'User Left',
//                 message: ':('
//             })
//         } else if (userWatchingCatMeme) {
//             reject({
//                 name: 'User Watching Cat Meme',
//                 message: 'Cat > Person'
//             })
//         } else {
//             resolve('Thumbs up and subscribe!')
//         }
//     })
// }

// watchTutorialPromise().then((message) => {
//     console.log(`Success: ${message}`)
// }).catch((error) => {
//     console.log(`Error: ${error.name} ${error.message}`)
// })

//This is a promise constructor
// let p = new Promise ((resolve, reject) => {
//     let a = 1 + 1;
//     if (a == 2) {
//         resolve('Success');
//     } else {
//         reject('Failed');
//     }
// });

// //.then is only called when the promise resolves successfully
// //,catch is called if the promise is rejected/fails
// p.then((message) => {
//     console.log(`This is in the then portion ${message}`);
// }).catch((message) => {
//     console.log(`This is the catch portion ${message}`);
// })

// console.log(p)

//**** USING PROMISE.ALL *****/
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 recorded');
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 recorded');
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 recorded');
    // reject('Nope');
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(messages => {
    console.log(messages)
}).catch(error => {
    console.log(error)
})