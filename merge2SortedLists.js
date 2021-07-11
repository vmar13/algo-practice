//Given two lists of integers a and b sorted in ascending order, 
//merge them into one large sorted list.

//USING CONCAT
// const concatSolve = (a, b) => {
//     //This concatenates b into a.
//     // .concat does not mutate original arrays, but DOES create a new array
//     //It returns a shallow copy of the orig arr elements ->> they are OBJ REFERENCES

  //    let mergedArr = a.concat(b)

    //    let mergeSort = mergedArr.sort((a, b) => a - b)
    //    return mergeSort
// }

//USING SPREAD OPERATOR
// const spreadSolve = (a, b) => {
//     //Spead operator includes all key-value pairs/elements from obj {...mush} or arr [...mush]
//     let c = [...a, ...b]
//     return c
//}

//USING .FLATTEN

const spreadSolve = (a, b) => {
    return [...a, ...b].sort((a, b) => a - b)
}

    console.log(spreadSolve([5,10,15], [3,8,9]))