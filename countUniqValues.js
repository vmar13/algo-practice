function countUniqueValues(sortedArr){
    let i = 0
    for(let j=1; j < sortedArr.length; j++){
        if(sortedArr[i] !== sortedArr[j]){
        i++
        sortedArr[i] = sortedArr[j]
    } 
    }
    return i + 1
  }
  
  countUniqueValues([1,2,3,4,4,7,7,12,12,13])