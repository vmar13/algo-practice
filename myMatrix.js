let myMatrix = [[1, 2, 3, 4],
                [12,13,14,5],
                [11,16,15,6],
                [10,9, 8, 7]];

const unroll = matrix => {
    console.log(...matrix.shift())
}

console.log(unroll(myMatrix))














// function unroll(matrix) {

// //exit condition
// if(myMatrix.length === 0) return;

// //top
// console.log(...myMatrix.shift())

// //right side (last elem of each)
// console.log(...myMatrix.map(arrayEle => arrayEle.pop()))

// //bottom in reverse (.reverse())
// console.log(...myMatrix.pop().reverse())

// //left side (first elem of each)
// console.log(...myMatrix.map(arrayEle => arrayEle.shift()).reverse())


// unroll(matrix)

// }
// unroll(myMatrix);


// end result: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16