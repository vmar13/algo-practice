//Write a function called stringSearch that accepts two strings (one longer, one shorter).
//Loop over each character in the longer string and then loop over each character in the
//shorter string and check if characters match. If they don't, break out of the inner loop.
//If they DO match, keep going. If you complete the inner loop and find a match,
//increment the count of matches. Return the count.

const stringSearch = (longStr, shortStr) => {
    let count = 0
    for(let i = 0; i < longStr.length; i++){
        for(let j = 0; j < shortStr.length; j++){
            if(shortStr[j] !== longStr[i + j]) break
            if(j === shortStr.length - 1) count++ 
        }
    }
    return count
}

console.log(stringSearch("pollocrudocrudo", "crudo"))