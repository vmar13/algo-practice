//only use on SORTED array

//Write a function called binarySearch which accepts a sorted array and a value and 
//returns the index at which the value exists. Otherwise, return -1.

const binarySearch = (arr, val) => {
    let left = 0
    let right= arr.length - 1
    let middle = Math.floor((left + right) / 2)
    // console.log(left, right, middle)

    //SHORTER CODE
    while(arr[middle] !== val && left <= right){
        if(val < arr[middle]) right = middle - 1
        else left = middle + 1
        middle = Math.floor((left + right) / 2)
      }
        return arr[middle] === val ? middle : -1
    }
  
    //LONGER CODE
  //   while(arr[middle] !== val && left <= right){
  //     if(val < arr[middle]){
  //       right = middle - 1
  //     } else {
  //       left = middle + 1
  //     }
  //     middle = Math.floor((left + right) / 2)
  //   }
  //     if(arr[middle] === val){
  //       return middle
  //     } 
  //     return -1
  // }

  console.log(binarySearch([1,2,3,4,5,8,10,13,14,17,20], 17))


  //WRONG CODE - first attempt 
  
    // while(left < right){
  
    //   if(middle === val){
    //     return arr.indexOf[middle]
    //   } else if (middle < val){
    //     left++
    //   } else if (middle > val) {
    //     right--
    //   } else {
    //     return -1
    //   }
    // }
  // }
  
  