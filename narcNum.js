//Given an integer n, return whether it is equal to the sum of
// its own digits raised to the power of the number of digits.

const solve = (n) => {
    let digits = n.toString().split('');
    let power = digits.length
    let sum = 0;
    // console.log(digits)

    for (let int of digits){
        sum+= parseInt(int) ** power
        console.log(sum)
    }

    return sum === n
}

console.log(solve(153))