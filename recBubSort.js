const recursiveBubbleSort = (arr, n = arr.length) => {
    //If there is only single element 
    //then return the array
    if(n == 1){
      return arr;
    }

    for(let j = 0; j < n - 1; j++){
        if(arr[j] > arr[j + 1]){
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
      }
}
