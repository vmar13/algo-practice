//Given a two-dimensional matrix of integers matrix, 
//determine whether it's a Toeplitz matrix. A Toeplitz is 
//one where every diagonal descending from left to right has the same value.

const toeplitz = matrix => {
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] !== matrix[i - 1][j - 1]) return false
        }
    }
    return true
}

let quadMatrix = [
    [0, 1, 2],
    [3, 0, 1],
    [4, 3, 0],
    [5, 4, 3]
]

console.log(toeplitz(quadMatrix))

//Notes: 
// j < matrix.length  would make the loop run for the length of the outer array (4)
// j < matrix[i].length makes the inner j loop run for only the length of that subArr (3)