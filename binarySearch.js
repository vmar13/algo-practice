const binarySearch = (arr, val) => {
    let left = 0;
    let right= arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    console.log(left, right, middle)
  
  //   while(left < right){
  
  //     if(middle === val){
  //       return arr.indexOf[middle]
  //     } else if (middle < val){
  //       left++
  //     } else if (middle > val) {
  //       right--
  //     } else {
  //       return -1
  //     }
  //   }
  }
  
  binarySearch([1,2,3,4,5,8,10,13,14,17,20], 10)