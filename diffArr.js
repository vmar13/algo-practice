
const array1 = [1, 4, 5, 7, 3, 8, 1, 9]
const array2 = [3, 7, 1, 12, 9, 5, 24, 16]

const diffArrayBasic = arr1, arr2 => {
  let newArray = []

  function uniqueElement(first, second) {
    for (let element of first) {
      if (second.indexOf(element) === -1) {
        newArray.push(element)
      }
    }
  }

  uniqueElement(array1, array2)
  uniqueElement(array2, array1)
  return newArray
}

console.time('Start Algo 1')
console.log(diffArrayBasic(array1, array2))
console.timeEnd('Start Algo 1')