const linearSearch = (array, value) => {
  for(let i = 0; i < array.length; i++){
    if(array[i] === value){
      return i
    }
  }
  return -1
}

linearSearch([1,2,3,4,5], 1)