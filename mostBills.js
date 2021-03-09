
const mostBills = transactions => {

    let txCount = {}
    for(let item of transactions){
        txCount[item] ? txCount[item] += 1 : txCount[item] = 1
    }

    //Convert object into array 
    let descSort = Object.entries(txCount)

    //Sort descending by trans number
    descSort.sort((a, b) => { return b[1] - a[1] })

    //Sort ascending alphabetically ONLY for item names with matching trans number
    let alphaSort = descSort.sort((a, b) => {
        if(a[1] === b[1]){

            let x = a[0]
            let y = b[0]

            return x < y ? -1 : x > y ? 1 : 0
        }
        return a[0] - b[0]
    })
    
    //Convert each array element to single string and replace comma with space  
    let finalArr = alphaSort.map(subArr => subArr.toString('').replace(',', ' '))
    return finalArr
}