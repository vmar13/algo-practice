//Write a function that takes in two strings and determines if they're
//anagrams of each other. If so, return true. If not, return false.




// console.log(incrementIfZero1(1,0))
// console.log(incrementIfZero2(3,0))

const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length) return false

    let str1Obj = {};
    for (let char of str1){
        str1Obj[char] = str1Obj[char]+1 || 1
        // str1Obj[char] ? str1Obj[char]+=1 : str1Obj[char] = 1
    }
    return str1Obj
}

console.log(validAnagram('listene', 'silente'))


function incrementIfZero1(base,element) {

    if (element == 0) {
        return ++base;
    }
    else
    {
        return base;
    }
};



function incrementIfZero2(base,element) {

    if (element == 0) {
        return base+=1;
    }
    else
    {
        return base;
    }
};

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

// console.log(validAnagram('anagram', 'nagaram'))