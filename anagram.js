//Write a function that takes in two strings and determines if they're
//anagrams of each other. If so, return true. If not, return false.

const verifyAnagram = (str1, str2) => {
    if(str1.length !== str2.length) return false
    let str1Obj = {}
    for(let char of str1){
        str1Obj[char] ? str1Obj[char] += 1 : str1Obj[char] = 1
    }
    
    // let str2Obj = {}
    for(let char of str2){
        if(!str1Obj[char]){
            return false
        } else {
            str1Obj[char] -= 1
        }  
        return true 
    }
}

console.log(verifyAnagram('oncea', 'ocean'))




// validAnagram = (str1, str2) => {
//     if(str1.length !== str2.length) {
//         return false
//     }

//     const lookupObj = {}
//     for(let char of str1){
//         lookupObj[char] ? lookupObj[char] += 1 : lookupObj[char] = 1
//     }

//     for(let char of str2){
//         if (!lookupObj[char]){
//             return false
//         } else {
//             lookupObj[char] -= 1
//         }
//     }
//     return true
// }

// validAnagram('anagram', 'nagaram')