const sumRange = num => {
    if (num === 1) return 1; //base case

    return num + sumRange(num - 1); //diff input each time it's called
}

console.log(sumRange(4))
//OUTPUT: 10

// sumRange(4)
//   return 4 + sumRange(3)
//      return 3 + sumRange(2)
//          return 2 + sumRange(1)
//                 return 1             bc num is now === 1, return 1

//add up 4 + 3 + 2 + 1 = 10