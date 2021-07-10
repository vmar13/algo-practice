//Given a non-negative integer num, 
//repeatedly add all its digits until the result
// has only one digit.

const addDigits = num => {
    let numLength = num.toString().match(/\d/g).length; // Convert into a string, then use regex. \d looks for all digits and g is a global search. Then call .length to get length of digits on that matching search.
    if (numLength === 1) return num;
    let sum = 0;
    let splitNum;

    if (numLength > 1) {
        splitNum = num.toString().split('').map(ele => parseInt(ele)) // Convert num to string, convert into array of digits, convert each string digit back into an integer // [3, 8]
        for (let digit of splitNum) {
            sum += digit
        }
    } 
    
    return addDigits(sum);
}

console.log(addDigits(99))
// 9 + 9 = 18
// 1 + 8 = 9
// 9



// const addDigits = num => {
//     let newNum = num.toString()
//     let sum = 0;
    
//     for (let int of newNum) {
//         sum += parseInt(int);
//     }
    
//     if (sum > 9) {
//         return addDigits(sum)
//     }
//     return sum
// };

