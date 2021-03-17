//Given a signed 32-bit integer x, return x with its digits reversed. 
//If reversing x causes the value to go outside the signed 
//32-bit integer range [-231, 231 - 1], then return 0.

//Assume the environment does not allow you to store 64-bit integers 
//(signed or unsigned).

const reverse = x => {
    numStr = x.toString()
    let finalNum = parseInt(numStr.split('').reverse().join(''))
    if (finalNum > 2**31 - 1) return 0
    
    if (numStr.includes('-')) {
        return '-' + finalNum
    } else {
        return finalNum
    }   
}

console.log(reverse(321))

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0