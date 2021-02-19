class Solution {
    solve(matrix) {
        if(matrix.length === 0) return []
        
        let reversedMatrix = matrix.map(subArr => subArr.reverse())
        
        for(let i = 0; i < reversedMatrix.length; i++){
            for(let j = 0; j < reversedMatrix[i].length; j++){
                if(reversedMatrix[i][j] === 0) {
                reversedMatrix[i][j] = 1
            } else if (reversedMatrix[i][j] = 1) {
                reversedMatrix[i][j] = 0
            }
            }
            
        }
        return reversedMatrix
    }
}