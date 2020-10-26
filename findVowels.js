// Write a function that accepts a string as a parameter and counts the 
// number of vowels within the string.

const countVowels = str => {
    let count = str.match(/[aeiou]/gi)
    return count ? count.length : 0
}

console.log(countVowels('plk'))




// const findVowelsCount1 = str => {
//     const foundVs = str.match(/[aeiou]/gi)
//     return foundVs ? foundVs.length : 0
// }

// findVowelsCount1('ocean')