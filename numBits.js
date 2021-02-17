//Given an integer n, return the number of 1 bits in n.


const solve = (n) => {
    let binary = n.toString(2).split("")
    return binary.filter(num => num > 0).length
}

console.log(solve(10))

//2