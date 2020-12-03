const jumpSearch = (sortedArray, seekElement, comparatorCallback) => {
    const comparator = new Comparator(comparatorCallback)
    const arraySize = sortedArray.length
  
    if (!arraySize) {
      return -1
    }
  
    const jumpSize = Math.floor(Math.sqrt(arraySize))
  
    let blockStart = 0
    let blockEnd = jumpSize
    while (comparator.greaterThan(seekElement, sortedArray[Math.min(blockEnd, arraySize) - 1])) {
      
    }
  
    
  }