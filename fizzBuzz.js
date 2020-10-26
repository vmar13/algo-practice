// Write a program that prints the numbers from 1 to 100. But for multiples of three print,
//  “Fizz” instead of the number and for the multiples of five print “Buzz”. 
//  For numbers which are multiples of both three and five print “FizzBuzz”.

const fizzBuzz = n => {
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz') 
        } else if (i % 3 === 0){
            console.log('Fizz')
        } else if (i % 5 === 0){
            console.log('Buzz')
        } else {
            console.log(i) 
        }
    }
}

console.log(fizzBuzz(100))





// const fizzBuzz = n => {
//     for(let i = 1; i <= n; i++){
//        if(i % 3 === 0 && i % 5 === 0){
//         console.log('fizzbuzz')
//     } else if (i % 3 === 0){
//         console.log('fizz')
//     } else if (i % 5 === 0){
//         console.log('buzz')
//     } else {
//         console.log(i)
//     } 
//    }
// }

// fizzBuzz('50')