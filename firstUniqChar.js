//Given a string, find the first non-repeating character in it and 
//return its index. If it doesn't exist, return -1.

const firstUniqChar = s => {
    s = s.split('')
    let charObj = {}; 
    let firstNonRepeat = [];
    
    for (let char of s) {
        charObj[char] = charObj[char]+1 || 1
    }
    
    for (let key in charObj) {
        if (charObj[key] === 1) {
            firstNonRepeat.push(key) 
        }
    }
    
    
    
};