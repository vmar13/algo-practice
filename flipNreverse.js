//You are given a two-dimensional integer matrix matrix containing 1s and 0s.
//For each row in matrix, reverse the row. Then, flip each value in the matrix 
//such that any 1 becomes 0 and any 0 becomes 1.

const flipReverse = matrix => {
    if(matrix.length === 0) return []

    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse()
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] === 0 ? matrix[i][j] = 1 : matrix[i][j] = 0
        }
    }
    return matrix
}

//*******OLD, SLOWER WAY******   

// const flipReverse = matrix => {
//     if(matrix.length === 0) return []
    
//     let reversedMatrix = matrix.map(subArr => subArr.reverse())
    
//     for(let i = 0; i < reversedMatrix.length; i++){
//         for(let j = 0; j < reversedMatrix[i].length; j++){
//             if(reversedMatrix[i][j] === 0) {
//             reversedMatrix[i][j] = 1
//             } else {
//                 reversedMatrix[i][j] = 0
//             }
//         }
//     }
//     return reversedMatrix
// }

console.log(flipReverse([
    [1, 1, 0],
    [0, 0, 1],
    [0, 0, 0]
]))

//Output:
// [
//   [1, 0, 0],
//   [0, 1, 1],
//   [1, 1, 1]
// ]