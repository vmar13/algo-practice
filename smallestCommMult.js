const smallestCommons = arr => {
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    let solution = max
  
    for (let i = max - 1; i >= min; i--) {
      if (solution % i) {
        solution += max
        i = max
      }
    }
    return solution
  };
  
  console.log(smallestCommons([1, 5]))