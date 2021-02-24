//Given an integer n, return the number of 1 bits in n.


const solve = (n) => {
    // let binary = n.toString(2).split("")
    let binary = n.toString(2).split('')
    // 1010
    //['1', '0', '1', '0']
    return binary.filter(num => num === '1').length
}

console.log(solve(10))

//2