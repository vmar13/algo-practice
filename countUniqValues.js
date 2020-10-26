//Write a function called countUniqValues that takes in a sorted array
//and counts the number of unique integers. Return the count.

const countUniqVals = sortedArr => {
    let i = 0

    for(let j = 1; j < sortedArr.length; j++){
        if(sortedArr[i] !== sortedArr[j]) i++
        sortedArr[i] = sortedArr[j]
    }
    return i + 1
}
  
  console.log(countUniqVals([1,2,3,4,4,7,7,12,12,13,32,45,78]))










//   function countUniqueValues(sortedArr){
//     let i = 0
//     for(let j=1; j < sortedArr.length; j++){
//         if(sortedArr[i] !== sortedArr[j]){
//         i++
//         sortedArr[i] = sortedArr[j]
//     } 
//     }
//     return i + 1
//   }