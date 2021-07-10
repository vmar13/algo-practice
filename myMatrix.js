let myMatrix = [[1, 2, 3, 4],
                [12,13,14,5],
                [11,16,15,6],
                [10,9, 8, 7]];

const unroll = matrix => {
    if (matrix.length === 0) return; // Base case for recursion

    console.log(...matrix.shift()) //top: 1 2 3 4

    console.log(...matrix.map(subArr => subArr.pop())) //right: 5 6 7

    console.log(...matrix.pop().reverse()) // bottom: 8 9 10

    console.log(...matrix.map(subArr => subArr.shift()).reverse()) // left: 11 12  (must call .reverse OUTSIDE of .map bc .map returns an array upon which you can call .reverse)
    
    unroll(matrix) // Use recursion for the remaining matrix
}

console.log(unroll(myMatrix))