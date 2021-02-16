const solve = sentence => {
    let splitSent = sentence.split(' ')
    let reversed = splitSent.reverse()
    let joinSent = reversed.join(' ')
    return joinSent 
}

console.log(solve(["hello there my friend"]))