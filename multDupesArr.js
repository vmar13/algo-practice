const arr = [1,1,2,3,4,5,6,7,8,6,6,7,7,7,10,10]

const multDupesArr = arr => {
  let observed = {}
  let dupesArr = []
  
  for(let i = 0; i < arr.length; i++) {
    if(observed[arr[i]]) {
        if(observed[arr[i]] === 1) {
          dupesArray.push(arr[i])
        }
        
        observed[arr[i]] = observed[arr[i]] + 1
      } else {
        observed[arr[i]] = 1
      }
  }
  
  return dupesArr
}

console.log(multDupesArr(arr))