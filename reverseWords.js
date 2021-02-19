//Given a string s of words delimited by spaces, reverse the order of words.

const revSentence = sentence => {
    reversed = sentence.split(' ').reverse().join(' ')
    return reversed
}

//Methods used:
// .split() returns an array, specified by where you want it split (ARGUMENT)
// .reverse() returns an array
// .join() converts an array to a string, specified by ARGUMENT


// const solve = sentence => {
//     let splitSent = sentence.split(' ')
//     let reversed = splitSent.reverse()
//     let joinSent = reversed.join(' ')
//     return joinSent 
// }

console.log(revSentence("hello there my friend"))