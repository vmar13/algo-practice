const flipReverse = matrix => {
    if(matrix.length === 0) return []
    
    let reversedMatrix = matrix.map(subArr => subArr.reverse())
    
    for(let i = 0; i < reversedMatrix.length; i++){
        for(let j = 0; j < reversedMatrix[i].length; j++){
            if(reversedMatrix[i][j] === 0) {
            reversedMatrix[i][j] = 1
            } else {
                reversedMatrix[i][j] = 0
            }
        }
    }
    return reversedMatrix
}

console.log(flipReverse([
    [1, 1, 0],
    [0, 0, 1],
    [0, 0, 0]
]))