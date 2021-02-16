const solve = (a, b) => {

    //    let mergedArr = a.concat(b)

    //    let mergeSort = mergedArr.sort((a, b) => a - b)
    //    return mergeSort

       return [...a, ...b].sort((a, b) => a - b)
    }

    console.log([5,10,15], [3,8,9])